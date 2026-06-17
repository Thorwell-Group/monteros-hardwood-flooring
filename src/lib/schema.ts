// JSON-LD schema generators. Each returns an object you stringify into a <script type="application/ld+json">.

import { business } from '~/data/business';
import { testimonials } from '~/data/testimonials';
import type { City } from '~/data/cities';
import type { Service } from '~/data/services';
import type { BlogPost } from '~/data/blog';

const ORGANIZATION_ID = `${business.siteUrl}/#organization`;
const LOCALBUSINESS_ID = `${business.siteUrl}/#localbusiness`;
const WEBSITE_ID = `${business.siteUrl}/#website`;

function openingHours() {
  // Schema.org expects opening hours specification.
  return business.hours
    .filter((h) => h.open !== 'Closed')
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens:  h.open,
      closes: h.close,
    }));
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: business.legalName,
    url: business.siteUrl,
    logo: `${business.siteUrl}${business.brand.logo}`,
    sameAs: Object.values(business.social).filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phoneE164,
      contactType: 'customer service',
      areaServed: ['US-CA'],
      availableLanguage: ['English', 'Spanish'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: business.siteUrl,
    name: business.brandName,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': LOCALBUSINESS_ID,
    name: business.legalName,
    url: business.siteUrl,
    image: `${business.siteUrl}${business.brand.ogImage}`,
    logo: `${business.siteUrl}${business.brand.logo}`,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: '$$ – $$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress:   business.address.street,
      addressLocality: business.address.city,
      addressRegion:   business.address.region,
      postalCode:      business.address.postalCode,
      addressCountry:  business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude:  business.address.latitude,
      longitude: business.address.longitude,
    },
    openingHoursSpecification: openingHours(),
    areaServed: business.serviceArea.counties.map((c) => ({
      '@type': 'AdministrativeArea',
      name: c,
    })),
    // reviewCount reflects the verbatim Google reviews actually shown on the
    // site, so the AggregateRating markup stays truthful (no inflated counts).
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.ratings.averageRating,
      reviewCount: testimonials.length,
      bestRating:  business.ratings.bestRating,
      worstRating: business.ratings.worstRating,
    },
    sameAs: Object.values(business.social).filter(Boolean),
  };
}

export function serviceSchema(service: Service, opts?: { city?: City }) {
  const city = opts?.city;
  const name = city ? `${service.name} in ${city.name}, ${city.state}` : service.name;
  const description = service.metaDescBase;
  const url = city
    ? `${business.siteUrl}/areas-we-serve/${city.slug}/${service.slug}/`
    : `${business.siteUrl}/services/${service.slug}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: service.name,
    url,
    provider: { '@id': LOCALBUSINESS_ID },
    areaServed: city
      ? {
          '@type': 'City',
          name: city.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: city.county,
          },
        }
      : business.serviceArea.counties.map((c) => ({
          '@type': 'AdministrativeArea',
          name: c,
        })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service.priceFromUSD,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: service.priceFromUSD,
        maxPrice: service.priceToUSD,
        unitText: 'square foot',
      },
      availability: 'https://schema.org/InStock',
    },
  };
}

export function breadcrumbSchema(items: { name: string; href?: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => {
      const path = item.href ?? item.url ?? '/';
      return {
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: path.startsWith('http') ? path : `${business.siteUrl}${path}`,
      };
    }),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDesc,
    image: `${business.siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: business.brandName, url: business.siteUrl },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${business.siteUrl}/blog/${post.slug}/`,
    },
  };
}
