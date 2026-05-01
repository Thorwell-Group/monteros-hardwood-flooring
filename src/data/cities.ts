// Cities served. Each gets an area page at /areas-we-serve/{slug}/
// and one location-service page per cityVariant service.

export interface City {
  slug: string;
  name: string;            // City name
  county: string;
  state: string;           // Always 'CA' for now
  population: number;      // Approximate, used for context only
  zipCodes: string[];      // Most common zips for the city
  neighborhoods: string[]; // 4 – 8 neighborhoods/areas inside the city
  driveMinutesFromHQ: number;
  latitude: number;
  longitude: number;
  // 1-2 sentences of unique local context — climate, housing stock, common floor needs
  localContext: string;
  // Common housing era and style — drives unique service copy
  housingProfile: string;
  // 1-2 landmark or neighborhood mentions used for natural city integration
  landmarks: string[];
}

export const cities: City[] = [
  {
    slug: 'san-bernardino',
    name: 'San Bernardino',
    county: 'San Bernardino County',
    state: 'CA',
    population: 222203,
    zipCodes: ['92401', '92404', '92405', '92407', '92408', '92410', '92411'],
    neighborhoods: ['Arrowhead Suburban Farms', 'Del Rosa', 'North Park', 'Verdemont', 'Rosewood', 'Shandin Hills', 'Hospitality Lane area'],
    driveMinutesFromHQ: 0,
    latitude: 34.1083,
    longitude: -117.2898,
    localContext: 'San Bernardino sits in the dry foothills of the San Bernardino Mountains, where summer attic temperatures push 130°F and winter nights drop below freezing. That swing is brutal on hardwood, and we\'ve spent two decades learning exactly which species and finishes hold up here.',
    housingProfile: 'Mostly single-family ranch and Spanish-revival homes built between 1955 and 1985, with a wave of 2000s-era stucco builds in Verdemont. Slab subfloors are the norm; raised foundations show up in older Del Rosa and North Park.',
    landmarks: ['Arrowhead Country Club', 'Cal State San Bernardino'],
  },
  {
    slug: 'fontana',
    name: 'Fontana',
    county: 'San Bernardino County',
    state: 'CA',
    population: 211815,
    zipCodes: ['92335', '92336', '92337'],
    neighborhoods: ['North Fontana', 'Sierra Lakes', 'Heritage', 'Empire Center area', 'Hunters Ridge', 'Citrus Heights'],
    driveMinutesFromHQ: 18,
    latitude: 34.0922,
    longitude: -117.4350,
    localContext: 'Fontana\'s North End and Sierra Lakes communities have been booming since the early 2000s, with thousands of large two-story homes that came with builder-grade carpet over plywood. Owners are tearing it out and going hardwood or LVP — that\'s most of what we install in Fontana.',
    housingProfile: 'Heavy mix of 2000s and 2010s builder homes (1,800 – 4,500 sq ft) with two stories and slab subfloors. Older central Fontana has 1950s ranches with original oak strip floors waiting under carpet.',
    landmarks: ['Sierra Lakes Golf Club', 'Auto Club Speedway nearby'],
  },
  {
    slug: 'rancho-cucamonga',
    name: 'Rancho Cucamonga',
    county: 'San Bernardino County',
    state: 'CA',
    population: 174453,
    zipCodes: ['91701', '91730', '91737', '91739'],
    neighborhoods: ['Alta Loma', 'Etiwanda', 'Terra Vista', 'Victoria Gardens area', 'Rancho Etiwanda', 'Haven Avenue corridor'],
    driveMinutesFromHQ: 22,
    latitude: 34.1064,
    longitude: -117.5931,
    localContext: 'Rancho Cucamonga homeowners tend to invest in higher-end materials — wide-plank European oak, premium engineered, custom stain matching. Etiwanda and Alta Loma have some of the largest homes we floor in the Inland Empire.',
    housingProfile: 'Newer construction (1995 – 2020) dominates, with two-story 2,500 – 5,000 sq ft homes on slab. Alta Loma has a stock of older 1970s ranches with raised foundations that often hide original oak under carpet.',
    landmarks: ['Victoria Gardens', 'Etiwanda Heritage Park'],
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    county: 'San Bernardino County',
    state: 'CA',
    population: 175265,
    zipCodes: ['91761', '91762', '91764'],
    neighborhoods: ['Ontario Ranch', 'New Model Colony', 'Downtown Ontario', 'College Park', 'Creekside'],
    driveMinutesFromHQ: 25,
    latitude: 34.0633,
    longitude: -117.6509,
    localContext: 'Ontario Ranch and the New Model Colony are some of the youngest neighborhoods in the Inland Empire — families that bought new construction five to ten years ago are now ready to swap builder carpet for real flooring. We do a lot of LVP and engineered hardwood here.',
    housingProfile: 'Very heavy 2010s – 2020s new construction with slab subfloors, plus older 1920s craftsman and Spanish-revival homes downtown with raised foundations and original oak.',
    landmarks: ['Ontario Mills', 'Ontario International Airport'],
  },
  {
    slug: 'riverside',
    name: 'Riverside',
    county: 'Riverside County',
    state: 'CA',
    population: 314998,
    zipCodes: ['92501', '92503', '92504', '92505', '92506', '92507', '92508', '92509'],
    neighborhoods: ['Wood Streets', 'Mission Grove', 'Canyon Crest', 'Orangecrest', 'Arlington', 'Magnolia Center', 'Victoria Avenue area'],
    driveMinutesFromHQ: 28,
    latitude: 33.9806,
    longitude: -117.3755,
    localContext: 'Riverside has one of the most varied housing stocks in the region — historic Wood Streets craftsman bungalows from the 1910s, mid-century ranches in Magnolia Center, and 2000s tract homes in Orangecrest. We adjust species and approach for each.',
    housingProfile: 'Wide era spread: 1900s – 1940s bungalows with original oak waiting to be revealed, 1960s ranches with raised foundations, and 2000s slab-on-grade developments in Orangecrest and Mission Grove.',
    landmarks: ['Mission Inn', 'UC Riverside', 'Mount Rubidoux'],
  },
  {
    slug: 'corona',
    name: 'Corona',
    county: 'Riverside County',
    state: 'CA',
    population: 158607,
    zipCodes: ['92879', '92880', '92881', '92882', '92883'],
    neighborhoods: ['Sierra del Oro', 'Eagle Glen', 'Dos Lagos area', 'South Corona', 'Coronita', 'Green River area'],
    driveMinutesFromHQ: 38,
    latitude: 33.8753,
    longitude: -117.5664,
    localContext: 'Corona sits at the gateway to Orange County, which means commuter homes and serious commitment to interiors. Eagle Glen and South Corona homeowners often want hardwood that holds resale value when it\'s time to move.',
    housingProfile: 'Predominantly 1990s – 2010s tract homes (1,800 – 4,000 sq ft) on slab. Older central Corona has 1950s ranches with raised foundations; hilltop neighborhoods like Sierra del Oro have larger custom homes.',
    landmarks: ['Dos Lagos', 'Cleveland National Forest entrance'],
  },
  {
    slug: 'rialto',
    name: 'Rialto',
    county: 'San Bernardino County',
    state: 'CA',
    population: 104026,
    zipCodes: ['92376', '92377'],
    neighborhoods: ['North Rialto', 'Bloomington area', 'Rialto Crossings', 'Renaissance', 'Casa Grande area'],
    driveMinutesFromHQ: 12,
    latitude: 34.1064,
    longitude: -117.3704,
    localContext: 'Rialto homeowners are practical — they want flooring that handles real family life and lasts. LVP and quality laminate are the most common choice here, with hardwood for living and dining rooms when budget allows.',
    housingProfile: 'Mostly 1980s – 2000s single-family on slab, with a strong stock of 1950s – 1960s ranches in older central Rialto. Many homes are 1,500 – 2,500 sq ft.',
    landmarks: ['Renaissance Marketplace', 'Rialto Municipal Airport'],
  },
  {
    slug: 'redlands',
    name: 'Redlands',
    county: 'San Bernardino County',
    state: 'CA',
    population: 73168,
    zipCodes: ['92373', '92374'],
    neighborhoods: ['Smiley Heights', 'South Redlands', 'University District', 'North Redlands', 'Mentone area'],
    driveMinutesFromHQ: 15,
    latitude: 34.0556,
    longitude: -117.1825,
    localContext: 'Redlands has more historic homes per capita than any other Inland Empire city — Victorian, craftsman, and Spanish-revival from the 1890s through 1930s. Original Douglas fir and oak floors hide under decades of carpet, and refinishing them is some of the most rewarding work we do.',
    housingProfile: 'Heavy historic stock (1890s – 1940s) with raised foundations and original-growth wood floors. South Redlands and Smiley Heights have larger turn-of-century homes; newer 1990s – 2010s tracts sit in north and east Redlands.',
    landmarks: ['University of Redlands', 'Smiley Park', 'Kimberly Crest'],
  },
  {
    slug: 'highland',
    name: 'Highland',
    county: 'San Bernardino County',
    state: 'CA',
    population: 56999,
    zipCodes: ['92346'],
    neighborhoods: ['East Highlands Ranch', 'Greenspot', 'Central Highland', 'Cherry Valley area', 'San Manuel area'],
    driveMinutesFromHQ: 10,
    latitude: 34.1284,
    longitude: -117.2086,
    localContext: 'Highland\'s East Highlands Ranch and the foothill homes near Greenspot Road have stunning views and homeowners who care about how their interiors match. We do a lot of wide-plank hardwood and engineered installs here.',
    housingProfile: 'Mix of 1990s – 2010s tract homes in East Highlands Ranch (slab) and older 1960s – 1980s ranches in central Highland (mix of slab and raised). Larger custom homes scattered through the foothills.',
    landmarks: ['East Highlands Ranch', 'Highland Hills'],
  },
  {
    slug: 'loma-linda',
    name: 'Loma Linda',
    county: 'San Bernardino County',
    state: 'CA',
    population: 24791,
    zipCodes: ['92354'],
    neighborhoods: ['North Loma Linda', 'University area', 'South Loma Linda', 'Mountain View area'],
    driveMinutesFromHQ: 8,
    latitude: 34.0481,
    longitude: -117.2611,
    localContext: 'Loma Linda has a strong concentration of medical and university residents who value clean, low-VOC products and floors that hold up to professional use. Water-based finishes and engineered hardwood are popular choices here.',
    housingProfile: 'Mostly 1960s – 2000s single-family on slab and raised foundations. Smaller footprints (1,400 – 2,400 sq ft) are common, with newer construction concentrated in north Loma Linda.',
    landmarks: ['Loma Linda University Medical Center', 'Hulda Crooks Park'],
  },
];

export const citiesBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));

// Used to render Google Maps embed without an API key (free, no quota).
export function googleMapsEmbed(city: City): string {
  const q = encodeURIComponent(`${city.name}, ${city.state}`);
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

export function googleMapsLink(city: City): string {
  const q = encodeURIComponent(`${city.name}, ${city.state}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
