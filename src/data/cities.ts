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
  // 1-2 sentences of unique local context - climate, housing stock, common floor needs
  localContext: string;
  // Common housing era and style - drives unique service copy
  housingProfile: string;
  // 1-2 landmark or neighborhood mentions used for natural city integration
  landmarks: string[];
  // 130-180 word genuinely city-specific flooring block. Real neighborhoods,
  // home era/style, slab vs raised foundation realities, climate, landmarks,
  // and service logistics. Rendered on every city-service page. No fabrication.
  localFlooringNotes: string;
  // Short keyword-first title token used to keep area-city titles <= 60 chars.
  // e.g. "Hardwood & LVP Flooring"
  hubTitleLead?: string;
  // Optional full <title> override for the city hub page (already brand-baked).
  hubMetaTitle?: string;
  // Optional extra prose block (H2 + paragraphs) rendered on the city hub page.
  extraSection?: { heading: string; paragraphs: string[] };
  // Optional city-specific FAQ entries merged into the hub FAQ + FAQ schema.
  extraFaqs?: { q: string; a: string }[];
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
    localFlooringNotes: 'Because our shop is right here in San Bernardino off West 36th Street, this is the city we know board by board. The mid-century ranches around Del Rosa and North Park were largely framed over raised foundations, so before we lay a single plank we crawl the subfloor, check joist spacing, and read crawlspace moisture - the difference between a floor that lasts and one that cups in its first summer. The 1960s-80s tracts near Shandin Hills and the newer Verdemont stucco builds, by contrast, sit on slab, where the real work is grinding high spots flat and laying a proper moisture barrier before engineered plank goes down. San Bernardino\'s desert-foothill swing - 100-plus degree afternoons against freezing January nights near the Cal State and Arrowhead Country Club hills - means acclimating wood on-site for several days is non-negotiable. We schedule the climate-touchy species for spring and fall rather than peak August.',
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
    localContext: 'Fontana\'s North End and Sierra Lakes communities have been booming since the early 2000s, with thousands of large two-story homes that came with builder-grade carpet over plywood. Owners are tearing it out and going hardwood or LVP - that\'s most of what we install in Fontana.',
    housingProfile: 'Heavy mix of 2000s and 2010s builder homes (1,800 – 4,500 sq ft) with two stories and slab subfloors. Older central Fontana has 1950s ranches with original oak strip floors waiting under carpet.',
    landmarks: ['Sierra Lakes Golf Club', 'Auto Club Speedway nearby'],
    localFlooringNotes: 'Fontana is one of our busiest install zones, and it is largely a two-story-on-slab town. In North Fontana, Sierra Lakes, Hunters Ridge and Heritage, the homes went up fast in the 2000s and 2010s with builder carpet laid straight over a concrete slab - so when we pull that carpet, the slab underneath is rarely flat. Self-leveling the first floor and stair-landing transitions is where most of the labor goes before any hardwood or LVP gets installed. The second-story plank work is its own consideration: we add acoustic underlayment so footsteps over the great room do not echo through the house. Closer to the Empire Center and Citrus Heights, the original 1950s ranches often hide oak strip flooring under carpet that is worth refinishing rather than replacing. Fontana also catches gritty Cajon Pass wind off the I-15 near Auto Club Speedway, so we steer busy entryways toward harder species and tougher wear layers. Our San Bernardino shop is about 18 minutes out, close enough for same-week estimates.',
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
    localContext: 'Rancho Cucamonga homeowners tend to invest in higher-end materials - wide-plank European oak, premium engineered, custom stain matching. Etiwanda and Alta Loma have some of the largest homes we floor in the Inland Empire.',
    housingProfile: 'Newer construction (1995 – 2020) dominates, with two-story 2,500 – 5,000 sq ft homes on slab. Alta Loma has a stock of older 1970s ranches with raised foundations that often hide original oak under carpet.',
    landmarks: ['Victoria Gardens', 'Etiwanda Heritage Park'],
    localFlooringNotes: 'Rancho Cucamonga is where homeowners ask us for the upgrade-grade work: wide-plank European oak, premium engineered, and custom stain matching to existing cabinetry. In Etiwanda, Rancho Etiwanda and Terra Vista, the homes are large two-story slab builds from the late 1990s onward, so the technical challenge is keeping a single plank run consistent across great rooms that can exceed forty feet - laser leveling and careful rack-and-stack layout matter as much as the wood itself. Up in Alta Loma, the older 1970s ranches sit on raised foundations and frequently hide original oak under carpet, which often refinishes beautifully instead of getting torn out. The alluvial fan at the foot of the San Gabriels gives the north end its own micro-climate, with stronger day-night temperature swings near the Etiwanda Heritage Park foothills, so we acclimate wide planks longer here than down in the flats. Shoppers furnishing new homes near Victoria Gardens lean heavily toward engineered for slab stability. We are about 22 minutes from our San Bernardino shop.',
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
    localContext: 'Ontario Ranch and the New Model Colony are some of the youngest neighborhoods in the Inland Empire - families that bought new construction five to ten years ago are now ready to swap builder carpet for real flooring. We do a lot of LVP and engineered hardwood here.',
    housingProfile: 'Very heavy 2010s – 2020s new construction with slab subfloors, plus older 1920s craftsman and Spanish-revival homes downtown with raised foundations and original oak.',
    landmarks: ['Ontario Mills', 'Ontario International Airport'],
    localFlooringNotes: 'Ontario splits cleanly into two flooring worlds. South of the 60 in Ontario Ranch, the New Model Colony and Creekside are barely a decade old - slab-on-grade homes where families are now ready to pull the original builder carpet. On fresh slab like this, fresh-poured concrete can still be releasing moisture, so we run calcium-chloride or RH probe tests and lay the right barrier before engineered hardwood or LVP goes down; skipping that step is how floors fail two summers later. Downtown and around College Park it is the opposite era: 1920s craftsman and Spanish-revival homes on raised foundations, many with original oak under carpet that is well worth refinishing. The flat, hot Ontario basin near Ontario Mills and the airport bakes interiors in summer, which nudges a lot of homeowners toward fully waterproof LVP for kitchens and entries. We are roughly 25 minutes from our San Bernardino shop, an easy run for in-home estimates and material drop-offs.',
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
    localContext: 'Riverside has one of the most varied housing stocks in the region - historic Wood Streets craftsman bungalows from the 1910s, mid-century ranches in Magnolia Center, and 2000s tract homes in Orangecrest. We adjust species and approach for each.',
    housingProfile: 'Wide era spread: 1900s – 1940s bungalows with original oak waiting to be revealed, 1960s ranches with raised foundations, and 2000s slab-on-grade developments in Orangecrest and Mission Grove.',
    landmarks: ['Mission Inn', 'UC Riverside', 'Mount Rubidoux'],
    localFlooringNotes: 'No city we serve has a wider range of floors under one roof than Riverside, and our approach changes by neighborhood. In the historic Wood Streets near Mount Rubidoux, the 1910s-1920s craftsman bungalows sit on raised foundations over vintage Douglas fir and oak; the work here is patient restoration - tightening squeaks from below, replacing rot at the perimeter, and refinishing original boards rather than covering history. Magnolia Center\'s 1960s ranches are also raised-foundation, while Orangecrest, Mission Grove and Canyon Crest are 2000s slab tracts where grinding the slab flat and barrier-prepping for engineered plank is the real job. Riverside\'s inland heat near UC Riverside and the historic Victoria Avenue corridor runs hot and dry, so we acclimate solid wood on-site and often steer slab homes toward engineered for dimensional stability. With our shop about 28 minutes northeast in San Bernardino, we know which Riverside permitting and HOA quirks come up by neighborhood.',
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
    localFlooringNotes: 'Corona is our gateway-to-Orange-County market, and resale value drives a lot of the flooring decisions here. In Eagle Glen, South Corona and the Dos Lagos area, the 1990s-2010s tract homes are slab-on-grade, so flat-grinding the concrete and barrier-prepping for engineered or solid plank is the foundation of every job. Up in Sierra del Oro and the hillside lots toward the Cleveland National Forest entrance, the larger custom homes carry longer plank runs and more stairs, where matching tread-and-riser stain to the main floor is part of the look. Older central Corona still has 1950s ranches on raised foundations with refinishable wood underneath. Corona\'s Santa Ana winds funnel through the Green River gap from the canyon, so entries and great rooms collect grit fast - we point high-traffic Corona homes toward harder species and tougher finishes. At about 38 minutes from our San Bernardino shop, Corona is our longest regular run, so we batch the estimate, material delivery, and install scheduling tightly.',
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
    localContext: 'Rialto homeowners are practical - they want flooring that handles real family life and lasts. LVP and quality laminate are the most common choice here, with hardwood for living and dining rooms when budget allows.',
    housingProfile: 'Mostly 1980s – 2000s single-family on slab, with a strong stock of 1950s – 1960s ranches in older central Rialto. Many homes are 1,500 – 2,500 sq ft.',
    landmarks: ['Renaissance Marketplace', 'Rialto Municipal Airport'],
    localFlooringNotes: 'Rialto is a practical, family-first flooring market, and we lean into that. Most of the city - North Rialto, the Renaissance and Casa Grande areas - is 1980s-2000s single-family on slab, with footprints in the 1,500 to 2,500 square foot range. For households with kids and pets, that points naturally to waterproof LVP and AC4-rated laminate floated over a level slab, with solid or engineered hardwood reserved for the living and dining rooms when the budget allows. The slab prep is the make-or-break step here: we self-level dips and fill cracks so click-lock seams stay tight for the long haul. Older central Rialto still has 1950s-60s ranches, some on raised foundations, where original wood can be refinished instead of replaced. Being just 12 minutes from our San Bernardino shop near the Renaissance Marketplace corridor, Rialto gets some of our fastest estimate turnarounds and tightest scheduling.',
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
    localContext: 'Redlands has more historic homes per capita than any other Inland Empire city - Victorian, craftsman, and Spanish-revival from the 1890s through 1930s. Original Douglas fir and oak floors hide under decades of carpet, and refinishing them is some of the most rewarding work we do.',
    housingProfile: 'Heavy historic stock (1890s – 1940s) with raised foundations and original-growth wood floors. South Redlands and Smiley Heights have larger turn-of-century homes; newer 1990s – 2010s tracts sit in north and east Redlands.',
    landmarks: ['University of Redlands', 'Smiley Park', 'Kimberly Crest'],
    localFlooringNotes: 'Redlands is the Inland Empire\'s historic-home capital, and it is where our refinishing craft matters most. Around Smiley Heights, South Redlands and the streets near Kimberly Crest and Smiley Park, the 1890s-1930s Victorian, craftsman and Spanish-revival homes sit on raised foundations over old-growth Douglas fir and quarter-sawn oak. These boards are denser and narrower than anything milled today, so we sand them gently, hand-edge the corners, and match traditional stains rather than replacing irreplaceable wood. Working raised foundations also means addressing the real source of problems from below - perimeter rot, plumbing leaks under bathrooms, and squeaks - before refinishing the surface. Out in the newer north and east Redlands tracts and toward Mentone, the 1990s-2010s homes are slab-built, where engineered plank over a proper barrier is the practical call. Redlands\' citrus-belt humidity off the foothills runs a touch higher than the valley floor, which we factor into cure times. Our shop is about 15 minutes west in San Bernardino.',
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
    hubMetaTitle: 'Flooring Contractors in Highland, CA — Install, Refinish & Repair | Monteros',
    extraSection: {
      heading: "Highland's Flooring Installers & Hardwood Floor Companies",
      paragraphs: [
        'Searching for flooring companies in Highland, CA can feel like a coin toss - which crews actually show up, and which ones know local homes? As flooring installers based just ten minutes away in San Bernardino, Monteros has worked East Highlands Ranch slabs and older central Highland ranch foundations for over 20 years. We know how the foothill heat near Greenspot Road and the Highland Hills moves wood, so we acclimate boards on-site and prep the subfloor accordingly before a single plank goes down.',
        'Unlike general flooring companies that subcontract the labor, the same Monteros crew handles your Highland project from estimate to final walk-through. Among Highland hardwood floor companies, that consistency is what keeps view-facing great-room plank runs straight and floor color reading right against the natural light. From wide-plank hardwood installs to refinishing original wood in the older central Highland ranches, you get one team, a written itemized quote, and a lifetime workmanship guarantee.',
      ],
    },
    extraFaqs: [
      {
        q: 'What makes us different from other flooring companies in Highland, CA?',
        a: "We're local - our San Bernardino shop is about ten minutes from Highland - and the same family crew does every job, no subcontractors. Unlike flooring companies that rotate crews between sites, you get one team that knows East Highlands Ranch slabs and central Highland's older raised foundations, plus a written estimate that holds for 30 days and a lifetime workmanship guarantee.",
      },
      {
        q: 'Do you install hardwood as well as LVP and laminate in Highland?',
        a: 'Yes. Among Highland flooring installers we cover the full range - solid and engineered hardwood, refinishing, luxury vinyl plank, laminate, and repair. We are as comfortable matching wide-plank oak in a Highland Hills great room as we are floating waterproof LVP over a slab in East Highlands Ranch.',
      },
    ],
    localFlooringNotes: 'Highland sits right at our back door - barely ten minutes from the San Bernardino shop - so it is one of the cities we are in most often. East Highlands Ranch is the heart of our work here: master-planned 1990s-2010s homes on slab, where the prep is all about grinding the concrete dead-flat and moisture-barriering before wide-plank hardwood or engineered goes down. These foothill homes near Greenspot Road and the Highland Hills have view-facing great rooms, and homeowners care that long plank runs stay straight and that floor color reads right against the natural light. Central Highland is the older half - 1960s-1980s ranches on a mix of slab and raised foundations, where raised-foundation homes need a crawlspace and joist check before refinishing or replacement. Highland\'s foothill setting brings sharp day-night temperature swings and seasonal Santa Ana grit, so we acclimate wood on-site and favor durable finishes for entries. The short drive means fast estimates and tight install scheduling.',
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
    localFlooringNotes: 'Loma Linda\'s clientele is unmistakably shaped by the medical center and university, and it changes what we install. Around the University area and North Loma Linda, residents - many of them physicians, faculty and health-minded families - specifically ask for low-VOC, water-based finishes and clean engineered hardwood that cures fast with minimal odor, so households can stay in place and floors are ready for professional schedules quickly. The housing is mostly 1960s-2000s single-family on a mix of slab and raised foundations, with the smaller 1,400 to 2,400 square foot footprints common near Hulda Crooks Park. On the raised-foundation homes we check the crawlspace and joists first; on slab we grind flat and barrier-prep. Newer construction concentrated in north Loma Linda is slab-built and pairs well with engineered plank. As the closest city to our shop - just 8 minutes away near Loma Linda University Medical Center - we can turn estimates around same-day and keep tight, low-disruption install windows.',
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
