# Monteros Hardwood Flooring — Astro Static Site

**123-page static SEO site** for Monteros Hardwood Flooring (Inland Empire, CA), built with Astro 5 and Tailwind CSS 3.

---

## Quick start

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serves the built site locally
```

## Deploy

The build is **100% static HTML** in `./dist`. Drop it on any static host:

- **Netlify**: drag `./dist` into the Netlify dashboard, or connect this repo and set build command `npm run build`, publish directory `dist`.
- **Vercel**: import the repo. Auto-detects Astro.
- **Cloudflare Pages**: connect repo, build command `npm run build`, output dir `dist`.
- **GitHub Pages**: copy `./dist` contents to `gh-pages` branch.

The contact form posts to **Formspree**. See "Verify before launch" in `DELIVERABLES.md` for the form ID setting.

---

## Project structure

```
src/
├── data/                 # SINGLE SOURCE OF TRUTH — edit values here
│   ├── business.ts        # NAP, hours, social, ratings, brand
│   ├── services.ts        # 6 core services + per-service FAQ
│   ├── cities.ts          # 10 cities with neighborhoods + coords
│   ├── blog.ts            # 15 blog posts (markdown bodies inline)
│   ├── guides.ts          # 24 service deep-dives, room types, comparisons
│   ├── faqs.ts            # general FAQs surfaced site-wide
│   └── testimonials.ts    # placeholder — REPLACE before launch
├── lib/                   # helpers
│   ├── seo.ts             # title/meta/canonical composition
│   ├── schema.ts          # JSON-LD generators
│   ├── content.ts         # per-city-service unique copy composer
│   └── formatting.ts      # phone, price, date utilities
├── layouts/               # page templates
├── components/            # shared components (Header, Footer, Hero, etc.)
├── pages/                 # route definitions
└── styles/global.css      # Tailwind + brand utilities

public/
├── images/                # 12 of 13 WebP images (decoded from your Drive)
├── robots.txt
└── ...

scripts/
└── decode-images.ps1      # one-shot script that decoded the Drive dumps
```

---

## What's where

- **All NAP / business info**: `src/data/business.ts` — change once, propagates everywhere.
- **Add a city**: append to `cities` array in `src/data/cities.ts` — generates 6 new pages automatically.
- **Add a service**: append to `services` in `src/data/services.ts`. Set `cityVariant: true` to generate per-city pages.
- **Add a blog post**: append to `blogPosts` in `src/data/blog.ts`.
- **Add a guide**: append to `guides` in `src/data/guides.ts`.

---

## What's been done

- [x] 123 static pages (target was 120)
- [x] LocalBusiness, Service, FAQPage, BlogPosting, BreadcrumbList JSON-LD on every relevant page
- [x] Auto-generated `sitemap-0.xml` + `sitemap-index.xml`
- [x] `robots.txt` allowing all + linking sitemap, disallowing `/thank-you`
- [x] Tailwind brand theme (forest-green + warm-wood accents)
- [x] Mobile-responsive header with dropdowns
- [x] Inline SVG icons (no icon-font dependency)
- [x] Per-page meta titles, descriptions, OG images
- [x] Per-page canonical URLs
- [x] Breadcrumbs on every interior page
- [x] Google Maps embeds on city pages
- [x] Skip-to-main-content accessibility link
- [x] System-font fallbacks for fast first paint

## See `DELIVERABLES.md` for

- Full sitemap structure (all 123 pages listed)
- Page-by-page SEO breakdown (titles + meta descriptions)
- JSON-LD schema examples
- Internal linking plan
- Image naming structure + dimension recommendations
- **Verify-before-launch checklist** — facts you need to double-check
