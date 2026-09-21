import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import sitemapNoindexFilter from './src/integrations/sitemap-noindex-filter.mjs';

export default defineConfig({
  site: 'https://monteroshardwoodflooring.com',
  output: 'static',
  // Canonicals, served URLs, and the sitemap all use trailing slashes so they
  // agree (no 308 redirects from sitemap URLs → canonical).
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/thank-you'),
      // Force trailing-slash URLs to match canonicals exactly.
      serialize: (item) => {
        if (!item.url.endsWith('/')) item.url = `${item.url}/`;
        return item;
      },
    }),
    // Runs after sitemap() and drops any URL whose built page is noindex.
    sitemapNoindexFilter(),
  ],
  image: {
    domains: [],
    remotePatterns: [],
  },
});
