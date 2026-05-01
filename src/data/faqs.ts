// General FAQs surfaced on home, contact, and FAQ page.
// Service-specific FAQs live on the service in src/data/services.ts.

export interface FAQ { q: string; a: string; }

export const generalFaqs: FAQ[] = [
  {
    q: 'How quickly can you start my flooring project?',
    a: 'Most installations and refinishing jobs start within 2 – 4 weeks of estimate sign-off. Smaller repair jobs can usually start the same week. Larger whole-house projects sometimes book out 4 – 6 weeks during spring and fall busy seasons. We give you our actual schedule in writing on every quote — no vague promises.',
  },
  {
    q: 'Do you offer free in-home estimates?',
    a: 'Yes — every estimate is free, no-pressure, and includes samples on-site. We measure, take subfloor moisture readings, walk through species and finish options, and give you a written, itemized quote within a few days. The quote holds for 30 days.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Inland Empire and surrounding communities, including San Bernardino, Fontana, Rancho Cucamonga, Ontario, Riverside, Corona, Rialto, Redlands, Highland, and Loma Linda. We also handle larger projects in Orange County and Palm Springs by appointment.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed in California and insured with both general liability and workers\' compensation. We can email a current certificate of insurance the same day you ask.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. 0% promotional financing is available for qualified customers. We can walk through the options during your free in-home estimate or by phone.',
  },
  {
    q: 'What kind of warranty do you offer?',
    a: 'Lifetime workmanship guarantee on every install — if our installation ever fails, we fix it. Manufacturer warranties on the materials themselves vary by product (typically 25 – 50 years residential).',
  },
  {
    q: 'Will you move my furniture?',
    a: 'Standard furniture is moved as part of the install — couches, beds, dressers, chairs. Pianos, gun safes, oversized items, and live electronics are typically the homeowner\'s responsibility. We flag this in writing during the estimate so there are no surprises.',
  },
  {
    q: 'How dusty is the install or refinishing process?',
    a: 'Far less than the old days. We use a dust-contained sanding system that captures most particulate at the source. Expect light residual dust on hard surfaces in adjacent rooms — we wipe down at the end of every job.',
  },
];
