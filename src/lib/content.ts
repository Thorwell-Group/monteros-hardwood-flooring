// Composes unique per-page content for city-service combos.
// Avoids the "doorway page" trap by combining city-specific facts with service-specific facts
// into copy that varies meaningfully across all 50 location-service combinations.

import type { City } from '~/data/cities';
import type { Service } from '~/data/services';
import { business } from '~/data/business';

// Service intro varies by city housing profile + service intent.
export function cityServiceIntro(city: City, service: Service): string {
  const housingHook = city.housingProfile.split('.')[0]; // first sentence
  const intentHook: Record<Service['intent'], string> = {
    install:   `Most ${city.name} flooring installs we run start with a homeowner who's lived with carpet or builder-grade for too long. ${housingHook}, which is exactly the type of subfloor and layout we work on every week.`,
    refinish:  `Refinishing in ${city.name} is some of our favorite work — ${housingHook}, and there's almost always solid wood worth saving.`,
    repair:    `Floor repairs in ${city.name} usually trace back to one of three causes: a leak, a settling subfloor, or wear from years of family life. ${housingHook}, so we know what to expect under the boards.`,
    specialty: `${housingHook}. We bring the same craftsmanship to ${city.name} specialty work as we do to whole-house installs.`,
  };
  return intentHook[service.intent];
}

// "Why us in this city" — pulls real geographic facts so each page reads differently.
export function cityServiceWhyUs(city: City, service: Service): string {
  const driveLine = city.driveMinutesFromHQ === 0
    ? `Our shop is right in ${city.name}, on West 36th Street. We can be at your door for an estimate within hours, not days.`
    : `Our shop in San Bernardino is about ${city.driveMinutesFromHQ} minutes from ${city.name}. Close enough for fast service calls, established enough that we know the neighborhoods, the building stock, and the local building department.`;

  return `${driveLine} We've been ${service.intent === 'refinish' ? 'refinishing' : service.intent === 'repair' ? 'repairing' : 'installing'} hardwood and luxury flooring across ${city.county} for over 20 years.`;
}

// Local neighborhoods callout — natural for SEO without keyword stuffing.
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
      a: `Yes — ${city.name} is one of our core service cities. We work in ${city.neighborhoods.slice(0, 2).join(', ')}${city.neighborhoods.length > 2 ? ', and the rest of the city' : ''} weekly. Our shop is ${city.driveMinutesFromHQ === 0 ? 'in San Bernardino, the same city' : `about ${city.driveMinutesFromHQ} minutes away in San Bernardino`}, so response times are fast.`,
    },
    {
      q: `What's typical pricing for ${service.shortName.toLowerCase()} in ${city.name}?`,
      a: `${city.name} pricing aligns with our standard Inland Empire range: ${service.intent === 'repair' ? `$${service.priceFromUSD} – $${service.priceToUSD} per repair area` : `$${service.priceFromUSD} – $${service.priceToUSD} per square foot installed`}. ${service.intent === 'install' ? 'Final price depends on species, subfloor condition, and demo complexity.' : service.intent === 'refinish' ? 'Final price depends on square footage, floor condition, and stain choice.' : 'Final price depends on damage extent and matching difficulty.'} Free in-home estimate gives you exact numbers.`,
    },
    {
      q: `How long will a ${service.shortName.toLowerCase()} project take in ${city.name}?`,
      a: `${service.timeline}. ${city.name} permitting is generally fast — most jobs don't require a permit; the few that do (significant subfloor work) we handle for you.`,
    },
  ];
}

// City-area page intro — one unique paragraph per city, never duplicated.
export function cityHubIntro(city: City): string {
  return `${city.localContext} Whether you're in ${city.neighborhoods.slice(0, 3).join(', ')}, or anywhere else in ${city.name}, ${business.brandName} brings 20+ years of hardwood, luxury vinyl, and laminate experience to your project. Free in-home estimates, honest pricing, and a lifetime workmanship guarantee on every job.`;
}

// Generates a contextual "what we do here" section for the city hub page.
export function cityHubServiceSummary(city: City): string {
  return `Across ${city.name}, we install solid and engineered hardwood, refinish existing floors, lay luxury vinyl plank in waterproof installations, install laminate, and tackle repair work — from a single warped board to whole-room replacement. ${city.housingProfile} Our team has worked on every era and configuration in ${city.county}.`;
}
