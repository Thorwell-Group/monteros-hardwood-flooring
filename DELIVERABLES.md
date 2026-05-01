# Deliverables — Monteros Hardwood Flooring

Companion to `README.md`. Reference doc for the SEO architecture, schema, and the launch checklist.

---

## 1. Final page count

| Section | Pages |
|---|---|
| Home | 1 |
| Core service pages (`/services/*`) | 6 |
| Services index | 1 |
| Service deep-dives (`/flooring/*`) | 15 |
| Room-type pages (`/flooring/*-flooring`) | 5 |
| Comparison pages (`/flooring/*-vs-*`) | 4 |
| Areas index | 1 |
| City hub pages (`/areas-we-serve/{city}/`) | 10 |
| Location-service combo pages | 50 |
| Blog index | 1 |
| Blog posts | 15 |
| Utility (about, contact, free-estimate, thank-you, gallery, reviews, financing, faq, process, warranty, sitemap, privacy, terms) | 13 |
| **Total static HTML pages** | **122** |
| `sitemap-0.xml` + `sitemap-index.xml` | 2 (auto-generated) |
| `robots.txt` | 1 |

Build report from Astro: **123 page(s) built** (the +1 over my hand count is the home page being routed two ways internally).

---

## 2. Sitemap structure

```
/
├── /about/
├── /process/
├── /contact/
├── /free-estimate/
├── /thank-you/                          (noindex)
├── /gallery/
├── /reviews/
├── /financing/
├── /faq/
├── /warranty/
├── /sitemap/                            (HTML sitemap)
├── /privacy/
├── /terms/
│
├── /services/
│   ├── /services/hardwood-flooring-installation/
│   ├── /services/hardwood-floor-refinishing/
│   ├── /services/luxury-vinyl-plank/
│   ├── /services/laminate-flooring/
│   ├── /services/floor-repair/
│   └── /services/stair-installation/
│
├── /flooring/
│   ├── /flooring/solid-hardwood-flooring/
│   ├── /flooring/engineered-hardwood-flooring/
│   ├── /flooring/wide-plank-european-oak/
│   ├── /flooring/oak-flooring/
│   ├── /flooring/hickory-flooring/
│   ├── /flooring/waterproof-luxury-vinyl-plank/
│   ├── /flooring/spc-flooring/
│   ├── /flooring/click-lock-vinyl-plank/
│   ├── /flooring/water-resistant-laminate/
│   ├── /flooring/ac-rated-laminate/
│   ├── /flooring/dustless-floor-refinishing/
│   ├── /flooring/screen-and-recoat/
│   ├── /flooring/sand-and-stain/
│   ├── /flooring/water-damage-floor-repair/
│   ├── /flooring/scratch-and-gouge-repair/
│   ├── /flooring/kitchen-flooring/
│   ├── /flooring/bathroom-flooring/
│   ├── /flooring/bedroom-flooring/
│   ├── /flooring/basement-flooring/
│   ├── /flooring/commercial-flooring/
│   ├── /flooring/hardwood-vs-luxury-vinyl-plank/
│   ├── /flooring/hardwood-vs-laminate/
│   ├── /flooring/laminate-vs-luxury-vinyl-plank/
│   └── /flooring/engineered-vs-solid-hardwood/
│
├── /areas-we-serve/
│   ├── /areas-we-serve/san-bernardino/
│   │   ├── /hardwood-flooring-installation/
│   │   ├── /hardwood-floor-refinishing/
│   │   ├── /luxury-vinyl-plank/
│   │   ├── /laminate-flooring/
│   │   └── /floor-repair/
│   ├── /areas-we-serve/fontana/                 (same 5 sub-pages)
│   ├── /areas-we-serve/rancho-cucamonga/        (same 5 sub-pages)
│   ├── /areas-we-serve/ontario/                 (same 5 sub-pages)
│   ├── /areas-we-serve/riverside/               (same 5 sub-pages)
│   ├── /areas-we-serve/corona/                  (same 5 sub-pages)
│   ├── /areas-we-serve/rialto/                  (same 5 sub-pages)
│   ├── /areas-we-serve/redlands/                (same 5 sub-pages)
│   ├── /areas-we-serve/highland/                (same 5 sub-pages)
│   └── /areas-we-serve/loma-linda/              (same 5 sub-pages)
│
└── /blog/
    └── 15 blog posts at /blog/{slug}/
```

---

## 3. Page-by-page SEO breakdown

> Titles get the brand name auto-suffixed by `src/lib/seo.ts:buildSEO()` if not already present.
> Descriptions are auto-trimmed at ~160 chars in production.

### Core service pages

| URL | Title | Meta description (excerpt) |
|---|---|---|
| `/services/hardwood-flooring-installation/` | Hardwood Floor Installation \| Inland Empire | Custom hardwood floor installation by Monteros, the Inland Empire's family-owned hardwood specialists… |
| `/services/hardwood-floor-refinishing/` | Hardwood Floor Refinishing \| Inland Empire | Hardwood floor refinishing in the Inland Empire. Dust-contained sanding, custom stain matching… |
| `/services/luxury-vinyl-plank/` | Luxury Vinyl Plank Installation \| Inland Empire | Waterproof luxury vinyl plank (LVP) installation in the Inland Empire. SPC, click-lock, glue-down… |
| `/services/laminate-flooring/` | Laminate Flooring Installation \| Inland Empire | Laminate flooring installation in the Inland Empire. Water-resistant, scratch-tough, AC-rated… |
| `/services/floor-repair/` | Hardwood Floor Repair \| Inland Empire | Hardwood floor repair in the Inland Empire. Water damage, scratches, squeaks, gouges, board replacement… |
| `/services/stair-installation/` | Hardwood Stair Installation & Refinishing \| Inland Empire | Custom hardwood stair installation and refinishing across the Inland Empire… |

### City × service pattern

Pattern: `/areas-we-serve/{city-slug}/{service-slug}/`
- **Title:** `{Service} in {City}, CA | Monteros Hardwood Flooring`
- **Meta:** `{Service} in {City}, CA. {service one-liner} Family-owned for 20+ years. Free in-home estimates across {county}.`

Example: `/areas-we-serve/riverside/hardwood-flooring-installation/`
- Title: `Hardwood Floor Installation in Riverside, CA | Monteros Hardwood Flooring`
- Meta: `Hardwood Installation in Riverside, CA. Solid and engineered hardwood floors installed by craftsmen with 20+ years on Inland Empire homes…`

All 50 location-service pages follow this pattern. Each one renders **unique** intro copy via `src/lib/content.ts:cityServiceIntro()` driven by:
- The city's housing profile
- The city's drive-time from HQ
- The service's intent (install / refinish / repair / specialty)

### City hub pages

Pattern: `/areas-we-serve/{city-slug}/`
- **Title:** `Hardwood, LVP & Laminate Flooring in {City}, CA | Monteros…`
- **Meta:** `{City} flooring contractor for hardwood installation, refinishing, luxury vinyl plank, laminate, and floor repair. Family-owned for 20+ years.`

Each city page has a unique intro paragraph composed from real city facts (climate, housing era, neighborhoods).

### Blog posts

15 posts targeting long-tail Inland Empire keywords:

1. **Cost to Install Hardwood Floors in the Inland Empire (2026)** — `/blog/cost-to-install-hardwood-floors-inland-empire/`
2. **Hardwood vs Luxury Vinyl Plank: How to Actually Choose** — `/blog/hardwood-vs-luxury-vinyl-plank/`
3. **How to Care for Hardwood Floors in the Desert** — `/blog/how-to-care-for-hardwood-floors-in-the-desert/`
4. **Should I Refinish or Replace My Hardwood Floors?** — `/blog/should-i-refinish-or-replace-my-hardwood-floors/`
5. **The Best Flooring for Pets** — `/blog/best-flooring-for-pets/`
6. **Engineered vs Solid Hardwood: The Real Differences** — `/blog/engineered-vs-solid-hardwood/`
7. **How Long Do Hardwood Floors Actually Last?** — `/blog/how-long-do-hardwood-floors-last/`
8. **Inland Empire Flooring Trends in 2026** — `/blog/flooring-trends-2026/`
9. **How to Vet a Flooring Contractor (10 Questions)** — `/blog/what-to-look-for-in-a-flooring-contractor/`
10. **How to Prepare Your Home for Flooring Installation** — `/blog/preparing-for-flooring-install/`
11. **Water-Damaged Hardwood Floors: What to Do** — `/blog/water-damaged-hardwood-floors/`
12. **Best Flooring for Rental Properties (Landlord's Guide)** — `/blog/flooring-for-rental-properties/`
13. **The Best Kitchen Flooring Options** — `/blog/kitchen-flooring-options/`
14. **How to Fix Squeaky Hardwood Floors** — `/blog/how-to-fix-squeaky-hardwood-floors/`
15. **Restoring Historic Hardwood Floors in Redlands and Riverside** — `/blog/historic-hardwood-floors-redlands-riverside/`

---

## 4. JSON-LD schema examples

Generated by `src/lib/schema.ts`. Live on every relevant page.

### LocalBusiness (on every page via BaseLayout)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://monteroshardwoodflooring.com/#localbusiness",
  "name": "Monteros Hardwood Flooring",
  "url": "https://monteroshardwoodflooring.com",
  "image": "https://monteroshardwoodflooring.com/images/hardwood-flooring-installation.webp",
  "logo": "https://monteroshardwoodflooring.com/images/monteros-hardwood-flooring-logo.webp",
  "telephone": "+19092798225",
  "email": "info@monteroshardwoodflooring.com",
  "priceRange": "$$ – $$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "717 W 36th St",
    "addressLocality": "San Bernardino",
    "addressRegion": "CA",
    "postalCode": "92405",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 34.1438, "longitude": -117.2992 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "06:00", "closes": "18:00" }
    /* ... Tue – Sat ... */
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "San Bernardino County" },
    { "@type": "AdministrativeArea", "name": "Riverside County" },
    { "@type": "AdministrativeArea", "name": "Orange County" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.9,
    "reviewCount": 127,
    "bestRating": 5,
    "worstRating": 1
  },
  "sameAs": [
    "https://www.facebook.com/people/Monteros-hardwood-flooring/100021212805249/",
    "https://www.instagram.com/monteroshardwood/"
  ]
}
```

### Service schema (on each service page, with city variant on combos)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hardwood Floor Installation in Riverside, CA",
  "description": "Custom hardwood floor installation by Monteros…",
  "serviceType": "Hardwood Flooring Installation",
  "url": "https://monteroshardwoodflooring.com/areas-we-serve/riverside/hardwood-flooring-installation/",
  "provider": { "@id": "https://monteroshardwoodflooring.com/#localbusiness" },
  "areaServed": {
    "@type": "City",
    "name": "Riverside",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Riverside County" }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": 8,
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "minPrice": 8,
      "maxPrice": 16,
      "unitText": "square foot"
    },
    "availability": "https://schema.org/InStock"
  }
}
```

### FAQPage (on service, city, city-service, FAQ pages)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a typical hardwood install take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For an average 1,500 – 2,500 sq ft home, plan on 3 – 7 working days…"
      }
    }
    /* ... */
  ]
}
```

### BreadcrumbList (on all interior pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://monteroshardwoodflooring.com/" },
    { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://monteroshardwoodflooring.com/areas-we-serve/" },
    { "@type": "ListItem", "position": 3, "name": "Riverside", "item": "https://monteroshardwoodflooring.com/areas-we-serve/riverside/" }
  ]
}
```

### BlogPosting (on each blog post)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Hardwood vs Luxury Vinyl Plank: How to Actually Choose",
  "description": "A side-by-side look at hardwood and luxury vinyl plank…",
  "image": "https://monteroshardwoodflooring.com/images/laminate-vs-luxury-vinyl-comparison.webp",
  "datePublished": "2026-04-05",
  "author": { "@type": "Organization", "name": "Monteros Hardwood Flooring" },
  "publisher": { "@id": "https://monteroshardwoodflooring.com/#organization" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://monteroshardwoodflooring.com/blog/hardwood-vs-luxury-vinyl-plank/" }
}
```

---

## 5. Internal linking plan

The site has four hub-and-spoke patterns wired through layouts and components:

### Hub-and-spoke 1: Service hub → city × service

- `/services/hardwood-flooring-installation/` → "Areas We Serve" grid links to all 10 city × hardwood install pages.
- Reverse: every city × service page has a "Other services in this city" + "About this service" + "All services" CTA card.

### Hub-and-spoke 2: City hub → city × service

- `/areas-we-serve/riverside/` → service grid filtered to city links to all 5 services in Riverside.
- Reverse: every city × service page links back to its city hub via breadcrumbs and the "Other services in this city" card.

### Hub-and-spoke 3: Areas hub → city hubs

- `/areas-we-serve/` → grid of all 10 city hubs.
- Footer: every page links to top 8 city hubs + "View all cities".
- Reverse: every city hub links back via breadcrumbs.

### Hub-and-spoke 4: Service deep-dives → core services

- Each `/flooring/{slug}/` page has a `parentService` link back to its core `/services/{slug}/` page.
- Each guide cross-links 1 – 3 related guides.

### Cross-link map (key pages)

| From | Links to |
|---|---|
| Home | Services, Areas, About, Blog, all 6 services, top 10 cities |
| Services index | All 6 services, all 24 guides (via header), all 10 cities (via grid) |
| Each service page | Areas grid (10 cities), process, FAQ, contact |
| Each city hub | All 5 services for that city, contact, blog |
| Each city × service | Same city's other services, parent service, all services, all cities |
| Each blog post | 1 – 3 internal article links + service or area page (`internalLinks` field in `blog.ts`) |
| Each guide | Parent service + 2 related guides |
| Footer (all pages) | 6 services, top 8 cities, all utility, social, sitemap |

---

## 6. Image naming structure

All 12 images live in `/public/images/` with SEO-friendly slugs:

| Filename | Used on | Alt-text pattern |
|---|---|---|
| `hardwood-flooring-installation.webp` | Home hero, hardwood install service, city × hardwood install | "Newly installed wide-plank hardwood floor in a Southern California home" |
| `monteros-flooring-team-installation.webp` | About, process, contact form context | "Monteros family installing hardwood floors in an Inland Empire home" |
| `hardwood-floor-refinishing.webp` | Refinishing service, city × refinishing | "Hardwood floor mid-refinishing showing freshly sanded wood" |
| `luxury-vinyl-plank-flooring.webp` | LVP service, city × LVP, room/kitchen | "Luxury vinyl plank flooring in a bright Southern California living room" |
| `luxury-vinyl-plank-detail.webp` | LVP detail callouts | "Detailed view of luxury vinyl plank installation" |
| `laminate-flooring.webp` | Laminate service, city × laminate | "Laminate wood-look flooring installed in a Southern California living room" |
| `laminate-flooring-detail.webp` | Laminate detail callouts | "Laminate flooring detail" |
| `laminate-vs-luxury-vinyl-comparison.webp` | Comparison hub, blog post | "Side by side comparison of laminate and luxury vinyl plank" |
| `hardwood-kitchen-flooring.webp` | Kitchen room page, areas hub | "Hardwood kitchen flooring in an Inland Empire home" |
| `hardwood-staircase-installation.webp` | Stair service, repair service | "Newly installed hardwood staircase with matching treads and risers" |
| `commercial-flooring-installation.webp` | Commercial room page | "Commercial flooring installation in an Inland Empire business" |
| `monteros-hardwood-flooring-logo.webp` | Header, footer, favicon | "Monteros Hardwood Flooring logo" (decorative; alt `""` in header to avoid double-announce) |

### Naming rules

- `{primary-keyword}-{descriptor}.webp` lowercase, hyphenated.
- Logo, owner photo, team shots use `monteros-{descriptor}.webp`.
- Comparison images use `{a}-vs-{b}.webp`.
- Width-set targets (todo at the manifest level): generate `{name}-480.webp`, `{name}-768.webp`, `{name}-1200.webp`, `{name}-1920.webp`.

### Recommended optimization (post-launch task)

Hero images are currently 3 – 5 MB. For Core Web Vitals, run them through `sharp` or `cwebp` to generate a srcset:

```bash
# example using @squoosh/cli or imagemagick
for f in public/images/*.webp; do
  for w in 480 768 1200 1920; do
    convert "$f" -resize ${w}x "${f%.*}-${w}.webp"
  done
done
```

Then use `<picture>` with `<source srcset="… ${w}w …" sizes="…">` in `Hero.astro`. **This is on the post-launch task list.**

---

## 7. Verify-before-launch checklist

These are facts pulled from the existing site or assumed from typical industry practice. **Verify each before pushing to production.**

### Business info (`src/data/business.ts`)
- [ ] **Phone** `(909) 279-8225` — verify still active
- [ ] **Email** `info@monteroshardwoodflooring.com` — verify mailbox exists and is monitored
- [ ] **Address** `717 W 36th St, San Bernardino, CA 92405` — verify current shop address
- [ ] **Years in business** `20+` — verify accuracy or update
- [ ] **Hours** Mon – Sat 6 AM – 6 PM, Sun closed — verify
- [ ] **Average rating** `4.9` and **review count** `127` — pull real numbers from your Google Business Profile
- [ ] **Latitude / longitude** `34.1438, -117.2992` — verify by entering address into Google Maps and updating to the exact pin
- [ ] **Facebook URL** — verify still active
- [ ] **Instagram URL** — verify still active
- [ ] **Google Business Profile URL** — currently empty (`business.social.google = ''`). Add it before launch.
- [ ] **Yelp URL** — currently empty. Add it before launch if you have a Yelp profile.

### Contact form (`src/data/business.ts:formspreeId`)
- [ ] Sign up at https://formspree.io and create an endpoint
- [ ] Replace `YOUR_FORMSPREE_ID` with your real Formspree ID
- [ ] Test the form end-to-end: submit, verify the email arrives, verify redirect to `/thank-you/`

### Images
- [ ] **Logo** (`monteros-hardwood-flooring-logo.webp`) — the file decoded to 4 KB instead of the original 13 KB. **Replace with a fresh export** from your Drive folder before launch
- [ ] **Owner / brand selfie** (`CalmingBrandSelfie (1).webp` from your Drive) — was skipped during decoding. Drop it into `public/images/monteros-owner-portrait.webp` if you want it on the About page; otherwise the About page renders fine without it
- [ ] **Hero images are large** (3 – 5 MB). Generate responsive variants per the `image optimization` section above before public launch

### Reviews
- [ ] `src/data/testimonials.ts` is a placeholder. **Pull 3 – 5 real reviews** from your Google Business Profile (with reviewer first name + last initial + city + date) and replace the placeholder

### Domain and DNS
- [ ] Confirm the production domain is `monteroshardwoodflooring.com` (matches `business.siteUrl`). Update if launching on a different domain — sitemap, canonicals, OG URLs all derive from this single value
- [ ] Set up A or CNAME records pointing to your chosen host
- [ ] Configure SSL (most static hosts do this automatically)

### Pre-launch SEO setup
- [ ] **Google Search Console**: add the property, submit `https://monteroshardwoodflooring.com/sitemap-index.xml`
- [ ] **Bing Webmaster Tools**: same, submit sitemap
- [ ] **Google Business Profile**: link to the new site URL
- [ ] **schema.org validator**: paste a few sample URLs into https://validator.schema.org and confirm zero errors
- [ ] **Lighthouse audit** on the home page and 2 – 3 sample interior pages: target 90+ on Performance, Accessibility, Best Practices, SEO

### Content review (recommended, not required)
- [ ] Skim the 50 city × service pages for any copy that feels off for your area
- [ ] Skim the 15 blog posts — they're written in a confident pro-contractor voice. Adjust any claim you'd state differently
- [ ] Verify pricing ranges in `src/data/services.ts` reflect current Inland Empire pricing
- [ ] Verify service-area claim about Orange County and Palm Springs in `business.ts` (currently included in `serviceArea.counties` but you may not actively want those areas)

### Legal
- [ ] `privacy.astro` and `terms.astro` are reasonable starting points. **Have an attorney review** before launch, especially if you collect payment info or run promotions on the site
- [ ] **Financing disclosure** on `/financing/` is generic. If you have specific partner relationships (Synchrony, GreenSky, Hearth, etc.), update the page to reference them by name with their required disclosures

---

## 8. Final implementation checklist

| Status | Item |
|---|---|
| ✅ | Astro 5 scaffolded, static export configured |
| ✅ | Tailwind 3 + typography plugin |
| ✅ | 12 of 13 WebP images decoded into `/public/images/` |
| ✅ | Single source of truth for business / services / cities / blog / guides |
| ✅ | 122 page templates rendering |
| ✅ | LocalBusiness, Organization, WebSite, Service, FAQPage, BlogPosting, BreadcrumbList JSON-LD |
| ✅ | Auto-generated `sitemap-index.xml` + `sitemap-0.xml` |
| ✅ | `robots.txt` written and linking sitemap |
| ✅ | Mobile-responsive header with dropdowns + hamburger |
| ✅ | Google Maps embeds on every city page |
| ✅ | Footer with services, top cities, company links, social |
| ✅ | Skip-to-main accessibility link |
| ✅ | Breadcrumb component on every interior page |
| ✅ | Production build green (123 pages) |
| ⬜ | **Replace logo image** (was truncated during decode) |
| ⬜ | **Add real Formspree ID** to `src/data/business.ts` |
| ⬜ | **Replace placeholder testimonial** with real Google/Yelp reviews |
| ⬜ | **Add Google Business Profile URL** to `business.social.google` |
| ⬜ | **Verify NAP** matches what's on Google Business Profile |
| ⬜ | **Generate responsive image variants** for hero photos (Core Web Vitals) |
| ⬜ | Submit sitemap to Google Search Console + Bing |
| ⬜ | Lighthouse audit + fix anything below 90 |
| ⬜ | Attorney review of `privacy.astro` and `terms.astro` |
