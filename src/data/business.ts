// Single source of truth for NAP, hours, social, and brand data.
// Edit values here before launch - every page consumes them.

export const business = {
  legalName: 'Monteros Hardwood Flooring',
  brandName: 'Monteros Hardwood Flooring',
  shortName: 'Monteros',
  tagline: 'Inland Empire Hardwood Floor Specialists',
  ownerName: 'The Monteros Family',
  yearsInBusiness: 20,
  foundedYear: new Date().getFullYear() - 20,

  // Primary phone shown across the site. tel: link uses E.164.
  phone:        '(909) 279-8225',
  phoneE164:    '+19092798225',
  phoneDisplay: '(909) 279-8225',

  email: 'monteroshardwood@gmail.com',

  address: {
    street:      '717 W 36th St',
    city:        'San Bernardino',
    region:      'CA',
    regionName:  'California',
    postalCode:  '92405',
    country:     'US',
    countryName: 'United States',
    // Approximate, used for LocalBusiness schema and the office map.
    latitude:  34.1438,
    longitude: -117.2992,
  },

  hours: [
    { day: 'Monday',    open: '06:00', close: '18:00' },
    { day: 'Tuesday',   open: '06:00', close: '18:00' },
    { day: 'Wednesday', open: '06:00', close: '18:00' },
    { day: 'Thursday',  open: '06:00', close: '18:00' },
    { day: 'Friday',    open: '06:00', close: '18:00' },
    { day: 'Saturday',  open: '06:00', close: '18:00' },
    { day: 'Sunday',    open: 'Closed', close: 'Closed' },
  ],
  hoursSummary: 'Monday – Saturday, 6:00 AM – 6:00 PM',

  social: {
    facebook:  'https://www.facebook.com/people/Monteros-hardwood-flooring/100021212805249/',
    instagram: 'https://www.instagram.com/monteroshardwood/',
    google:    'https://share.google/sDPf41rhQdhTiXxr2',
    // "4.9 stars on Google" buttons point here: a plain Google search for the
    // business so visitors land on the GBP card + reviews.
    googleSearch: 'https://www.google.com/search?q=Monteros+Hardwood+Flooring+San+Bernardino',
    yelp:      'https://www.yelp.com/biz/monteros-hardwood-flooring-san-bernardino-2',
    angi:      'https://www.angi.com/companylist/us/ca/san-bernardino/monteros-hardwood-flooring-reviews-9322310.htm',
  },

  // Service area covered for LocalBusiness schema.
  serviceArea: {
    primaryCounty:  'San Bernardino County',
    counties:       ['San Bernardino County', 'Riverside County', 'Orange County'],
    radiusMiles:    50,
  },

  // Trust signals - verify before launch.
  ratings: {
    averageRating:  4.9,
    reviewCount:    127, // VERIFY: pull real count from GMB before launch
    bestRating:     5,
    worstRating:    1,
  },

  // Used for OG image fallback, theme color, etc.
  brand: {
    primaryColor:   '#386c37', // brand-600
    accentColor:    '#b87f3f', // wood-500
    logo:           '/images/monteros-hardwood-flooring-logo.webp',
    ogImage:        '/images/hardwood-flooring-installation.webp',
  },

  // Domain - change if launching on a different URL.
  siteUrl: 'https://monteroshardwoodflooring.com',

  // Form endpoint. Replace with your real Formspree (or Netlify form attr).
  formspreeId: 'YOUR_FORMSPREE_ID',
} as const;

export type Business = typeof business;
