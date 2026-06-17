// Composes unique per-page content for city-service combos.
// Avoids the "doorway page" trap by combining city-specific facts with service-specific facts
// into copy that varies meaningfully across all 50 location-service combinations.

import type { City } from '~/data/cities';
import type { Service } from '~/data/services';
import { business } from '~/data/business';

// --- Small helpers that pull REAL per-city facts so copy varies meaningfully. ---

// First (real) neighborhood for natural mention; falls back gracefully.
function leadHood(city: City): string {
  return city.neighborhoods[0] ?? city.name;
}

// Two distinct neighborhoods joined naturally ("Etiwanda and Alta Loma").
function twoHoods(city: City): string {
  const a = city.neighborhoods[0];
  const b = city.neighborhoods[1];
  if (a && b) return `${a} and ${b}`;
  return a ?? city.name;
}

function leadLandmark(city: City): string {
  return city.landmarks[0] ?? city.name;
}

// Whether this city's stock includes raised foundations (drives subfloor talk).
function hasRaised(city: City): boolean {
  return /raised/i.test(city.housingProfile) || /raised/i.test(city.localContext);
}

// Whether slab construction dominates.
function hasSlab(city: City): boolean {
  return /slab/i.test(city.housingProfile);
}

// A foundation-specific sentence unique to the city's real stock.
function foundationLine(city: City): string {
  const raised = hasRaised(city);
  const slab = hasSlab(city);
  if (raised && slab) {
    return `${city.name} runs both ways - raised-foundation homes in the older neighborhoods get a crawlspace and joist check first, while the slab tracts need flat-grinding and a moisture barrier before a single plank goes down.`;
  }
  if (raised) {
    return `Many ${city.name} homes sit on raised foundations, so we read crawlspace moisture and check the joists before we touch the surface - it is the difference between a floor that lasts and one that cups.`;
  }
  return `Most ${city.name} homes are slab-on-grade, so the make-or-break step is grinding the concrete dead-flat and laying a proper moisture barrier before installation.`;
}

// Service intro varies by city housing profile, real neighborhoods/landmarks, and service intent.
export function cityServiceIntro(city: City, service: Service): string {
  const housingHook = city.housingProfile.split('.')[0]; // first sentence
  const hoods = twoHoods(city);
  const lead = leadHood(city);
  const landmark = leadLandmark(city);
  const intentHook: Record<Service['intent'], string> = {
    install:   `When ${city.name} homeowners in ${hoods} are done living with builder carpet, this is the install they call us for. ${housingHook} - ${foundationLine(city)}`,
    refinish:  `Refinishing is some of our favorite work in ${city.name}, especially around ${lead} and the older streets near ${landmark}. ${housingHook}, and there is almost always solid wood worth saving rather than tearing out.`,
    repair:    `Floor repairs in ${city.name} usually trace to a leak, a settling subfloor, or years of family life in homes around ${hoods}. ${housingHook}, so we know what to expect under the boards before we lift the first one.`,
    specialty: `${housingHook}. From ${lead} to the homes near ${landmark}, we bring the same craftsmanship to ${city.name} specialty work as we do to whole-house installs.`,
  };
  return intentHook[service.intent];
}

// "Why us in this city" - pulls real geographic facts so each page reads differently.
export function cityServiceWhyUs(city: City, service: Service): string {
  const verb = service.intent === 'refinish' ? 'refinishing'
    : service.intent === 'repair' ? 'repairing'
    : 'installing';
  const driveLine = city.driveMinutesFromHQ === 0
    ? `Our shop is right here in ${city.name} on West 36th Street, so we can be at your door for an estimate within hours, not days.`
    : `Our San Bernardino shop is about ${city.driveMinutesFromHQ} minutes from ${city.name} - close enough for fast service in ${leadHood(city)} and the rest of the city, and established enough that we know the building stock and the local permitting quirks.`;

  return `${driveLine} We have been ${verb} hardwood and luxury flooring across ${city.county} for over 20 years, and ${city.name} - from ${twoHoods(city)} out to the neighborhoods near ${leadLandmark(city)} - is one of the cities we work in most.`;
}

// Local neighborhoods callout - natural for SEO without keyword stuffing.
export function neighborhoodsCallout(city: City): string {
  if (city.neighborhoods.length === 0) return '';
  const list = city.neighborhoods.slice(0, 4).join(', ');
  const extra = city.neighborhoods.length > 4 ? ', and the surrounding neighborhoods' : '';
  return `We serve homeowners across ${city.name}, including ${list}${extra}.`;
}

// City-specific FAQ extras (3 unique to the combo) layered on top of the service FAQs.
export function cityServiceExtraFaqs(city: City, service: Service): { q: string; a: string }[] {
  return [
    {
      q: `Do you serve ${city.name} for ${service.shortName.toLowerCase()}?`,
      a: `Yes - ${city.name} is one of our core service cities. We work in ${city.neighborhoods.slice(0, 2).join(', ')}${city.neighborhoods.length > 2 ? ', and the rest of the city' : ''} weekly. Our shop is ${city.driveMinutesFromHQ === 0 ? 'in San Bernardino, the same city' : `about ${city.driveMinutesFromHQ} minutes away in San Bernardino`}, so response times are fast.`,
    },
    {
      q: `What's typical pricing for ${service.shortName.toLowerCase()} in ${city.name}?`,
      a: `${city.name} pricing aligns with our standard Inland Empire range: ${service.intent === 'repair' ? `$${service.priceFromUSD} – $${service.priceToUSD} per repair area` : `$${service.priceFromUSD} – $${service.priceToUSD} per square foot installed`}. ${service.intent === 'install' ? 'Final price depends on species, subfloor condition, and demo complexity.' : service.intent === 'refinish' ? 'Final price depends on square footage, floor condition, and stain choice.' : 'Final price depends on damage extent and matching difficulty.'} Free in-home estimate gives you exact numbers.`,
    },
    {
      q: `How long will a ${service.shortName.toLowerCase()} project take in ${city.name}?`,
      a: `${service.timeline}. ${city.name} permitting is generally fast - most jobs don't require a permit; the few that do (significant subfloor work) we handle for you.`,
    },
  ];
}

// City-area page intro - one unique paragraph per city, never duplicated.
export function cityHubIntro(city: City): string {
  return `${city.localContext} Whether you're in ${city.neighborhoods.slice(0, 3).join(', ')}, or anywhere else in ${city.name}, ${business.brandName} brings 20+ years of hardwood, luxury vinyl, and laminate experience to your project. Free in-home estimates, honest pricing, and a lifetime workmanship guarantee on every job.`;
}

// Generates a contextual "what we do here" section for the city hub page.
export function cityHubServiceSummary(city: City): string {
  return `Across ${city.name}, we install solid and engineered hardwood, refinish existing floors, lay luxury vinyl plank in waterproof installations, install laminate, and tackle repair work - from a single warped board to whole-room replacement. ${city.housingProfile} Our team has worked on every era and configuration in ${city.county}.`;
}

// Local proof block for the area-city hub: foundation/era realities + drive logistics.
// Unique per city because it leans on the real localFlooringNotes facts.
export function cityHubLocalProof(city: City): string {
  return city.localFlooringNotes;
}

// Short, foundation/era-specific note for the area-city hub (distinct from the long block).
export function cityHubFoundationNote(city: City): string {
  const driveLine = city.driveMinutesFromHQ === 0
    ? `With our shop right here in ${city.name}, response times are about as fast as they get.`
    : `Our San Bernardino shop is about ${city.driveMinutesFromHQ} minutes away, so estimates and follow-ups in ${city.name} stay quick.`;
  return `${foundationLine(city)} ${driveLine}`;
}
