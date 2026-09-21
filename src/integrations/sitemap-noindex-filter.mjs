import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

// @astrojs/sitemap's `filter` only receives a URL string, so it cannot know that
// the page it is about to list carries a `noindex` robots tag. Listing a noindex
// page in the sitemap is a contradictory signal: the sitemap nominates the URL
// for indexing while the page tells Google to stay away. Search Console files it
// under "Excluded by 'noindex' tag" and emails the property owner every time it
// finds a new one.
//
// Hardcoding the offending paths in `filter` is what we used to do, and it kept
// drifting — every new booking or funnel page silently reappeared in the sitemap.
// This reads the built HTML instead, so the rule maintains itself: mark a page
// noindex and it leaves the sitemap on the next build, no config change needed.
//
// Must be listed AFTER sitemap() in `integrations` — Astro runs build:done hooks
// in integration order, and this rewrites what sitemap() just wrote.

// Matches the meta tag in either attribute order — our sites emit both
// `name="robots" content="…"` and `content="…" name="robots"`.
const NOINDEX_META = /<meta[^>]*\bname\s*=\s*["'](?:robots|googlebot)["'][^>]*>/gi;

function isNoindex(html) {
  for (const tag of html.match(NOINDEX_META) ?? []) {
    if (/\bnoindex\b/i.test(tag)) return true;
  }
  return false;
}

// Both a built file path and a sitemap <loc> collapse to the same key, so the two
// can be compared without reconstructing URLs (trailingSlash and build.format
// differ across our sites).
const keyFromPath = (rel) =>
  rel.replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '').replace(/^\/+|\/+$/g, '');

const keyFromLoc = (loc) => {
  try {
    return new URL(loc).pathname.replace(/^\/+|\/+$/g, '');
  } catch {
    return loc.replace(/^\/+|\/+$/g, '');
  }
};

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

export default function sitemapNoindexFilter() {
  return {
    name: 'sitemap-noindex-filter',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        const noindex = new Set();
        for await (const file of htmlFiles(root)) {
          if (isNoindex(await readFile(file, 'utf8'))) {
            noindex.add(keyFromPath(relative(root, file)));
          }
        }
        if (noindex.size === 0) return;

        const sitemaps = (await readdir(root)).filter(
          (f) => /^sitemap-\d+\.xml$/.test(f)
        );
        const emptied = [];
        let dropped = 0;

        for (const name of sitemaps) {
          const path = join(root, name);
          const xml = await readFile(path, 'utf8');
          let removedHere = 0;

          const next = xml.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
            const loc = block.match(/<loc>([^<]*)<\/loc>/)?.[1];
            if (loc && noindex.has(keyFromLoc(loc))) {
              removedHere++;
              return '';
            }
            return block;
          });

          if (!removedHere) continue;
          dropped += removedHere;

          if (!/<url>/.test(next)) {
            await unlink(path);
            emptied.push(name);
          } else {
            await writeFile(path, next, 'utf8');
          }
        }

        // A sitemap we deleted outright must also leave the index, or Search
        // Console reports the index as pointing at a 404.
        if (emptied.length) {
          const indexPath = join(root, 'sitemap-index.xml');
          const index = await readFile(indexPath, 'utf8');
          await writeFile(
            indexPath,
            index.replace(/<sitemap>[\s\S]*?<\/sitemap>/g, (block) =>
              emptied.some((n) => block.includes(`/${n}<`)) ? '' : block
            ),
            'utf8'
          );
        }

        logger.info(
          `removed ${dropped} noindex URL${dropped === 1 ? '' : 's'} from the sitemap`
        );
      },
    },
  };
}
