// SEO helpers: title/meta composition, canonical URL, OG fallbacks.

import { business } from '~/data/business';

export interface SEOInput {
  title: string;
  description: string;
  pathname: string;          // e.g. '/services/hardwood-flooring-installation/'
  image?: string;            // absolute or root-relative
  type?: 'website' | 'article';
  publishedTime?: string;    // ISO 8601
  modifiedTime?: string;
  noindex?: boolean;
}

export interface SEOComputed {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noindex: boolean;
}

const TITLE_SUFFIX = `| ${business.brandName}`;
const DESC_MAX_RECOMMENDED = 160;
const TITLE_MAX_RECOMMENDED = 60;

export function buildSEO(input: SEOInput): SEOComputed {
  let title = input.title.trim();
  if (!title.toLowerCase().includes(business.brandName.toLowerCase())) {
    title = `${title} ${TITLE_SUFFIX}`;
  }

  let description = input.description.trim().replace(/\s+/g, ' ');
  if (description.length > DESC_MAX_RECOMMENDED + 30) {
    description = description.slice(0, DESC_MAX_RECOMMENDED).replace(/\s+\S*$/, '') + '…';
  }

  const path = input.pathname.endsWith('/') ? input.pathname : `${input.pathname}/`;
  const canonical = `${business.siteUrl}${path}`;
  const image = input.image
    ? (input.image.startsWith('http') ? input.image : `${business.siteUrl}${input.image}`)
    : `${business.siteUrl}${business.brand.ogImage}`;

  return {
    title,
    description,
    canonical,
    image,
    type: input.type ?? 'website',
    publishedTime: input.publishedTime,
    modifiedTime: input.modifiedTime,
    noindex: input.noindex ?? false,
  };
}

// Composes "{Service} in {City}, CA" patterns consistently.
export function locationTitle(serviceTitle: string, cityName: string, state = 'CA'): string {
  return `${serviceTitle} in ${cityName}, ${state}`;
}

export function locationDescription(base: string, cityName: string): string {
  return base.replace(/Inland Empire/i, `${cityName} and the Inland Empire`);
}

// Soft length warnings during dev (no-op in production).
export function warnIfTooLong(seo: SEOComputed): void {
  if (import.meta.env.DEV) {
    if (seo.title.length > TITLE_MAX_RECOMMENDED) {
      console.warn(`[SEO] Title >${TITLE_MAX_RECOMMENDED} chars (${seo.title.length}): ${seo.title}`);
    }
    if (seo.description.length > DESC_MAX_RECOMMENDED) {
      console.warn(`[SEO] Description >${DESC_MAX_RECOMMENDED} chars (${seo.description.length})`);
    }
  }
}
