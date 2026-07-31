/**
 * Per-(service × city) differentiation for the 50 city-service pages.
 *
 * Those pages measured 73.4% identical across cities and 66.7% across services.
 * cities.ts already carries excellent researched data — housingProfile,
 * localContext, localFlooringNotes, neighborhoods — and CityServiceLayout does
 * render it. What was missing is guidance that changes with the SERVICE as well
 * as the city.
 *
 * The axis that matters in the Inland Empire is subfloor: the housingProfile for
 * every city already states whether homes sit on slab or raised foundations, and
 * that single fact decides whether solid hardwood is even possible, whether there
 * is original oak under the carpet worth uncovering, and how a repair gets done.
 * That is a real difference, not a rewording.
 */

export type Archetype = 'slab' | 'historic' | 'mixed';

export interface AreaProfile {
  archetype: Archetype;
  /** Straight from housingProfile in cities.ts. */
  era: string;
  jobNote: string;
}

export const AREA_PROFILE: Record<string, AreaProfile> = {
  'san-bernardino': {
    archetype: 'mixed',
    era: 'single-family ranch and Spanish-revival homes from 1955-1985, with 2000s stucco builds in Verdemont',
    jobNote: 'Slab is the norm here, but raised foundations show up through older Del Rosa and North Park — which changes the options completely.',
  },
  fontana: {
    archetype: 'mixed',
    era: '2000s and 2010s builder homes on slab, plus 1950s ranches through central Fontana',
    jobNote: 'Those central Fontana ranches frequently still have original oak strip flooring waiting under the carpet.',
  },
  'rancho-cucamonga': {
    archetype: 'mixed',
    era: 'newer 1995-2020 construction on slab, with 1970s ranches in Alta Loma',
    jobNote: 'Alta Loma raised foundations often hide original oak — worth lifting a corner before pricing a replacement.',
  },
  ontario: {
    archetype: 'mixed',
    era: 'very heavy 2010s-2020s construction on slab, plus 1920s craftsman and Spanish-revival homes downtown',
    jobNote: 'Two completely different jobs: engineered or LVP over slab in the new tracts, original oak restoration downtown.',
  },
  riverside: {
    archetype: 'historic',
    era: '1900s-1940s bungalows with original oak, 1960s raised-foundation ranches, and 2000s slab developments',
    jobNote: 'The widest era spread of any city we serve, so the subfloor decides the job more than the address does.',
  },
  corona: {
    archetype: 'slab',
    era: 'predominantly 1990s-2010s tract homes on slab, with older central Corona ranches and larger hilltop customs',
    jobNote: 'Slab-on-grade dominates, which rules out nail-down solid hardwood in most of the city.',
  },
  rialto: {
    archetype: 'slab',
    era: 'mostly 1980s-2000s single-family on slab, with 1950s-60s ranches in older central Rialto',
    jobNote: 'Slab construction and modest footprints — engineered and LVP do most of the work here.',
  },
  redlands: {
    archetype: 'historic',
    era: 'heavy 1890s-1940s historic stock on raised foundations with original-growth wood floors',
    jobNote: 'The best refinishing market in the region. Original-growth flooring here is genuinely irreplaceable.',
  },
  highland: {
    archetype: 'mixed',
    era: '1990s-2010s tract homes in East Highlands Ranch on slab, plus 1960s-80s ranches in central Highland',
    jobNote: 'Central Highland runs a mix of slab and raised, so we check before recommending anything.',
  },
  'loma-linda': {
    archetype: 'slab',
    era: '1960s-2000s single-family on slab and raised foundations, mostly smaller footprints',
    jobNote: 'Smaller footprints mean whole-home continuity matters more — a single floor through the main areas makes these homes read considerably larger.',
  },
};

type Block = { heading: string; body: string[]; checklist: string[] };

const SLAB_NOTE =
  'Concrete slab is the constraint that decides everything else. Solid hardwood cannot be nailed to a slab, so the honest options are engineered wood, LVP or laminate — and we would rather tell you that at the measure than take an order we know will fail. Slab moisture gets tested before anything is scheduled, because in this climate a slab that reads fine in November can behave very differently in August.';

export const SERVICE_BY_ARCHETYPE: Record<string, Record<Archetype, Block>> = {
  'hardwood-flooring-installation': {
    slab: {
      heading: 'Wood flooring over a slab',
      body: [
        SLAB_NOTE,
        'Engineered hardwood is the right answer in most of these homes, and it is not a downgrade — a good engineered board has a real wood wear layer and stays flatter over concrete than solid ever would.',
        'Where you want the look of a wide plank, engineered is genuinely the better product. Solid boards that wide move too much for this climate.',
      ],
      checklist: ['Slab moisture tested before scheduling', 'Engineered specified where solid cannot go', 'Wide-plank formats that stay flat over concrete', 'Honest advice rather than an order we know will fail'],
    },
    historic: {
      heading: 'Wood flooring in a historic Inland Empire home',
      body: [
        'Before you install anything, it is worth finding out what is already down there. Homes of this era were routinely built with oak strip flooring that later got carpeted over, and that original wood is old-growth — denser and tighter-grained than anything milled today.',
        'Raised foundations mean we can work from below as well as above, which makes checking joist condition and subfloor moisture far easier than in a slab home.',
        'Where new wood genuinely is the answer, we match board width and species to what the house already has so the new area reads as original rather than added.',
      ],
      checklist: ['Original oak checked for before installing over it', 'Crawlspace inspected from below', 'Board width and species matched to the house', 'Solid nail-down genuinely possible over a raised foundation'],
    },
    mixed: {
      heading: 'Wood flooring across two kinds of subfloor',
      body: [
        'This city has both, and the subfloor under your particular house decides the whole specification. Raised foundation means solid hardwood is on the table; slab means engineered.',
        'We confirm which you have at the free in-home measure rather than assuming from the year the house was built — plenty of homes here have been added to over the decades and carry both.',
        SLAB_NOTE,
      ],
      checklist: ['Subfloor confirmed at the measure, not assumed', 'Solid hardwood where the foundation allows it', 'Engineered specified over slab sections', 'Additions checked separately from the original structure'],
    },
  },
  'hardwood-floor-refinishing': {
    slab: {
      heading: 'Refinishing over a slab home',
      body: [
        'In slab-built homes the existing wood floor is almost always engineered, and that changes the refinishing conversation entirely. The wear layer is thin — often 2mm or less — and there may only be one sand in it, or none.',
        'We measure the wear layer before quoting. If it is too thin, a screen and recoat restores the surface without cutting into wood that cannot be replaced.',
        'That is a far smaller invoice than a full refinish, which is exactly why it is worth telling you.',
      ],
      checklist: ['Wear layer measured before any sanding', 'Screen-and-recoat offered where a full sand would be wrong', 'Honest assessment of what your floor can take', 'No sanding through an engineered wear layer'],
    },
    historic: {
      heading: 'Refinishing original-growth floors',
      body: [
        'This is the work these homes deserve. Original-growth oak from the 1890s to 1940s is denser and finer-grained than modern stock, and it cannot be bought — once it is sanded away it is gone.',
        'So we measure first. How much wood sits above the tongue determines how many passes are left, and a floor that has been refinished three times already may have one. We would rather say that than take the last of it.',
        'Old shellac and wax finishes are common in houses of this age and they change the abrasive sequence completely. Treating one like modern polyurethane is why some refinishing jobs come back blotchy.',
      ],
      checklist: ['Wood above the tongue measured before sanding', 'Shellac and wax identified so the abrasives are right', 'Old-growth character preserved rather than sanded flat', 'Dustless containment through an occupied home'],
    },
    mixed: {
      heading: 'Refinishing: what your floor will actually take',
      body: [
        'The first question is what you have. An original oak floor over a raised foundation and an engineered floor over slab look similar underfoot and need completely different treatment.',
        'We identify which before quoting. Solid wood generally has several sands in it; engineered may have one or none depending on the wear layer.',
        'Where a full sand is not the right answer, a screen and recoat restores the surface for a fraction of the cost — and we will say so rather than sell the bigger job.',
      ],
      checklist: ['Solid vs engineered identified before quoting', 'Wear layer measured on engineered floors', 'Recoat offered where a full sand would be wrong', 'Dustless system throughout'],
    },
  },
  'luxury-vinyl-plank': {
    slab: {
      heading: 'LVP over slab — the most common install we do here',
      body: [
        'Over concrete, LVP is genuinely the right product rather than a compromise: fully waterproof, dimensionally stable, and unbothered by the slab moisture that limits wood.',
        'Wear layer is the number that matters and the one most quotes leave out. For a family home with pets, 12 mil is the sensible minimum and 20 mil is genuinely durable. Builder-grade LVP is frequently 6-8 mil, which is why it looks tired in a few years.',
        'Slab flatness still matters. A rigid core telegraphs dips over time, so we grind or fill high and low spots before laying rather than hoping the plank bridges them.',
      ],
      checklist: ['Wear layer specified for real household traffic', 'Slab ground or filled flat before laying', 'Fully waterproof through kitchens and baths', 'Stable through Inland Empire temperature swings'],
    },
    historic: {
      heading: 'LVP in an older home',
      body: [
        'In a historic home LVP earns its place in the rooms where wood should not go — laundries, bathrooms, and any area that has had a water problem before.',
        'Before putting it anywhere else, it is worth checking whether there is original oak underneath. Covering old-growth flooring with vinyl is a decision worth making deliberately rather than by default.',
        'Raised-foundation homes rarely have flat subfloors, and LVP is less forgiving of that than people expect. Levelling is where the quality of this install is decided.',
      ],
      checklist: ['Original wood checked for before covering it', 'Subfloor levelled, not just covered', 'Specified for wet rooms in period homes', 'Height controlled to suit original thresholds'],
    },
    mixed: {
      heading: 'LVP across both kinds of home here',
      body: [
        'LVP suits both halves of this market, which is why it is the product we install most. Waterproof, hard-wearing, and convincing enough now to read as wood in most rooms.',
        'What changes between houses is the preparation. Slab homes usually need grinding or filling; raised-foundation homes need the subfloor levelled. Same product, different work underneath.',
        'We bring samples to the house — print quality and texture vary enormously between products, and they all photograph better than they look.',
      ],
      checklist: ['Preparation scaled to the subfloor you actually have', 'Wear layer specified for the household', 'Samples judged in your own light', 'Waterproof throughout'],
    },
  },
  'laminate-flooring': {
    slab: {
      heading: 'Laminate over slab',
      body: [
        'Laminate floats, which makes it straightforward over concrete provided a proper moisture barrier goes down first. In this climate that barrier is not optional.',
        'Modern water-resistant laminate is a genuinely different product from the boards that swelled at the seams a decade ago — the cores are treated and the edges sealed.',
        'Slab flatness is the variable. A floating floor over a dipped slab will telegraph every low spot eventually, so we grind or fill first.',
      ],
      checklist: ['Moisture barrier over slab as standard', 'Slab flattened before floating the floor', 'AC-rated wear layers for real traffic', 'Strong value against LVP and engineered wood'],
    },
    historic: {
      heading: 'Laminate in a period home',
      body: [
        'Laminate gives an older home a hard-wearing surface at a sensible price, and current wood-look products are convincing enough for period rooms.',
        'The caution is the same as with LVP: check what is underneath first. Laying laminate over original oak is a decision to make deliberately.',
        'Raised-foundation subfloors are rarely flat, and a floating floor needs flat more than it needs strong.',
      ],
      checklist: ['Original wood checked for first', 'Subfloor flattened before laying', 'Water-resistant core for kitchens and baths', 'Height controlled at original thresholds'],
    },
    mixed: {
      heading: 'Laminate across the local housing mix',
      body: [
        'Laminate performs well in both a 1960s ranch and a 2015 tract home — the variable is how much preparation sits underneath.',
        'Over slab we add a moisture barrier; over a raised foundation we level. We flatten either way.',
        'It usually beats LVP on scratch resistance and costs slightly less, while LVP beats it on water performance. We will tell you which way we would go in your rooms.',
      ],
      checklist: ['Preparation set by the subfloor', 'Moisture barrier over any slab', 'Honest laminate-vs-LVP comparison', 'Two-day install in most homes'],
    },
  },
  'stair-installation': {
    slab: {
      heading: 'Hardwood stairs in a slab-built home',
      body: [
        'Stairs are the one part of a slab-built home where solid hardwood is always on the table — the treads are framed in wood regardless of what the ground floor sits on. So even in a house where we have specified engineered or LVP downstairs, the staircase can still be solid oak.',
        'Most staircases here start as carpeted construction-grade treads. Capping them in solid hardwood is the single highest-impact change available in a tract home, because the staircase is the first thing anyone sees from the entry.',
        'Matching the new treads to the downstairs floor is the detail that makes it read as original rather than added on.',
      ],
      checklist: ['Solid hardwood possible even over a slab home', 'Construction-grade treads capped in solid wood', 'Treads matched to the main floor', 'Risers, stringers and nosing finished to match'],
    },
    historic: {
      heading: 'Stairs in a historic Inland Empire home',
      body: [
        'Original staircases in 1920s craftsman and Spanish-revival homes are usually the best joinery in the house, and they are almost never square. Winders, irregular risers and hand-cut stringers are normal, which makes this hand-work rather than a template job.',
        'Where treads are original we refinish rather than replace wherever the wood allows. A period staircase with new treads and an original balustrade rarely looks right.',
        'Balusters, newels and handrail profiles get matched to what is already there — that detail is what people actually see from the hall.',
      ],
      checklist: ['Original treads refinished wherever possible', 'Winders and irregular risers cut by hand', 'Baluster and newel profiles matched', 'Period character kept rather than modernised'],
    },
    mixed: {
      heading: 'Hardwood stairs, whatever the house sits on',
      body: [
        'Stairs are the exception to the slab rule. Whatever is under your ground floor, the staircase is framed in wood, so solid hardwood treads are an option in every home we work in.',
        'The job splits by what is there now: solid treads under carpet are a straightforward refinish, while construction-grade treads need capping in new hardwood. We check before quoting, because those are very different pieces of work.',
        'Stairs take more concentrated wear than any floor in the house, so the finish specification matters more here than it does in a bedroom.',
      ],
      checklist: ['Existing treads assessed before quoting', 'Refinish or cap decided on evidence', 'Finish specified for concentrated stair traffic', 'Matched to the adjoining floor'],
    },
  },
  'water-damage-floor-repair': {
    slab: {
      heading: 'Water damage over a slab',
      body: [
        'When a floor over slab cups or lifts, the first question is always whether water is coming up through the concrete rather than down from a leak. Those look identical at the surface and need completely different fixes.',
        'We test slab moisture before touching a board. Replacing flooring over an unresolved vapour problem is a repair you pay for twice, and it is the most common reason we get called back to somebody else\u2019s work.',
        'Where the source is a leak, we make sure it is fixed and the slab has dried to spec before new flooring goes anywhere near it.',
      ],
      checklist: ['Slab moisture tested before any repair', 'Vapour drive ruled in or out first', 'Slab dried to spec before re-flooring', 'Insurance documentation supported'],
    },
    historic: {
      heading: 'Water damage in an older home',
      body: [
        'A raised foundation is an advantage here: we can get underneath and see what is actually happening rather than inferring it from the surface. Crawlspace humidity, a failed supply line or poor drainage all show themselves from below.',
        'On original oak, patience pays. Cupping is a moisture response, and once the source is fixed the boards frequently flatten on their own over several weeks. Sanding too early wastes irreplaceable old-growth wood and can leave the floor crowned once it dries.',
        'Where boards genuinely have to come out, we match width and grain to the original milling and salvage from a closet where we can.',
      ],
      checklist: ['Crawlspace inspected from below', 'Cupping given time to flatten before sanding', 'Old-growth wood preserved wherever possible', 'Salvaged boards used for invisible repair'],
    },
    mixed: {
      heading: 'Water damage: finding the cause first',
      body: [
        'Whether your home sits on slab or a raised foundation changes both the likely cause and the fix. Slab homes point toward vapour drive through concrete; raised foundations point toward crawlspace humidity or a plumbing leak.',
        'We identify which before touching the floor, because repairing without solving the cause means doing the whole job again.',
        'We also measure and wait where waiting is right. A floor responding to a one-off event will often recover on its own, and we would rather tell you that than sell you a full replacement.',
      ],
      checklist: ['Cause traced before any board comes up', 'Slab or crawlspace assessed as appropriate', 'Recovery given time where that is the right call', 'Insurance documentation supported'],
    },
  },
  'floor-repair': {
    slab: {
      heading: 'Repairing a floor laid over slab',
      body: [
        'In slab homes the first question on any repair is whether moisture is coming up through the concrete. A floor that cups or lifts over slab is usually telling you about the slab, not the flooring.',
        'We test before repairing. Replacing boards over an unsolved moisture source is a repair you pay for twice.',
        'For engineered and LVP, matching is about the product line rather than the species — we identify what is down before quoting so you know whether an invisible repair is realistic.',
      ],
      checklist: ['Slab moisture tested before any repair', 'Cause identified, not just the symptom', 'Existing product line identified for matching', 'Contained repair rather than a whole-floor job'],
    },
    historic: {
      heading: 'Repairing original oak',
      body: [
        'Matching is the whole challenge. Board widths from the 1920s are frequently not milled any more, and old-growth grain does not look like new stock even in the same species.',
        'Where we can, we take replacement boards from a closet or under a permanent fixture so the visible repair uses wood that has aged in the same house. It is slower and it is the only way a patch genuinely disappears.',
        'A raised foundation makes this easier — we can assess joists and subfloor from below before deciding how far a repair needs to go.',
      ],
      checklist: ['Salvaged boards used from low-visibility areas', 'Width and grain matched to original milling', 'Crawlspace inspected before scoping the repair', 'Finish blended beyond the repair edge'],
    },
    mixed: {
      heading: 'Floor repair: finding the cause first',
      body: [
        'Whether your home sits on slab or a raised foundation changes both the likely cause and the fix. Slab homes point at moisture through concrete; raised foundations point at crawlspace humidity or a plumbing leak.',
        'We identify which before touching the boards, because repairing without solving the cause means doing it twice.',
        'Where cupping has appeared, we measure and often wait — a floor responding to a moisture event will frequently flatten on its own once the cause is fixed, and sanding it early wastes wood.',
      ],
      checklist: ['Cause traced before any board comes up', 'Crawlspace or slab assessed as appropriate', 'Cupping given time to flatten where that is right', 'Repair matched and blended into the finish'],
    },
  },
};

const FAMILY_FAQ: Record<string, { q: string; a: () => string }[]> = {
  'hardwood-flooring-installation': [
    { q: 'Can I have solid hardwood if my house is on a slab?', a: () => 'No, and anyone telling you otherwise is setting you up for a failure. Solid hardwood needs to be nailed to a wood subfloor. Over concrete the correct products are engineered hardwood, LVP or laminate. Engineered gives you a genuine wood surface and stays flat over slab, so it is not the compromise it sounds like.' },
    { q: 'How long does an install take?', a: () => 'Most single-floor installs run two to four days depending on square footage and how much preparation the subfloor needs. We give you a schedule before we start and we work to it — you will know which rooms are out of use and when.' },
  ],
  'hardwood-floor-refinishing': [
    { q: 'Is your refinishing actually dustless?', a: () => 'We run a dustless containment system that captures the vast majority of sanding dust at the machine. It is not literally zero — nobody can honestly claim that — but it is a completely different experience from traditional sanding, and it is why we can work in an occupied home.' },
    { q: 'How do I know if my floor can be sanded again?', a: () => 'It depends how much wood sits above the tongue. Solid hardwood usually has several sands in it across its life; engineered may have one or none depending on the wear layer. We measure at a vent or a doorway edge before quoting and tell you honestly what is left.' },
  ],
  'luxury-vinyl-plank': [
    { q: 'What wear layer do I actually need?', a: () => 'For a family home with pets, 12 mil is the sensible minimum and 20 mil is genuinely durable. A lot of builder-grade LVP is 6-8 mil, which is why it looks worn after a few years. It is the one spec worth paying up for, and we will show you the grades side by side.' },
    { q: 'Will LVP handle Inland Empire summer heat?', a: () => 'A rigid SPC core handles it well, which is what we specify here. Cheaper flexible-core planks can expand in a room that gets very hot behind closed blinds in August. It is a real consideration in this climate and it is why the core type matters more here than in a milder region.' },
  ],
  'laminate-flooring': [
    { q: 'Is laminate waterproof or just water-resistant?', a: () => 'It depends on the product, and the distinction matters. Water-resistant laminate handles spills wiped up promptly. Genuinely waterproof laminate carries a rated core and sealed edges. We will tell you which any quoted product actually is rather than using the words loosely.' },
    { q: 'Laminate or LVP — which is better value?', a: () => 'Laminate usually wins on scratch resistance and costs slightly less. LVP usually wins on water performance and feels softer underfoot. Big dog, go laminate. Busy bathroom, go LVP. We will tell you which way we would go in your specific rooms.' },
  ],
  'stair-installation': [
    { q: 'Can I have hardwood stairs if the rest of my house is on a slab?', a: () => 'Yes. Stairs are framed in wood no matter what the ground floor sits on, so solid hardwood treads are an option in every home we work in — even where we have specified engineered or LVP downstairs. It is the one place the slab does not limit you.' },
    { q: 'Can you take the carpet off my stairs and finish what is underneath?', a: () => 'Sometimes. Solid oak treads under carpet are a straightforward win. Construction-grade treads need capping with new hardwood instead. We check before quoting so you know which job you actually have rather than finding out mid-project.' },
  ],
  'water-damage-floor-repair': [
    { q: 'My floor is cupping — does it all need replacing?', a: () => 'Often not. Cupping is a moisture response, and once the source is fixed boards frequently flatten on their own over several weeks. Sanding too early wastes wood and can leave the floor crowned when it finally dries. We measure, fix the cause, and wait where waiting is the right answer.' },
    { q: 'Do you work with insurance claims?', a: () => 'Yes. We document moisture readings, the affected area and the cause, which is what an adjuster actually needs. We will not inflate a scope to suit a claim — that tends to get the whole claim questioned.' },
  ],
  'floor-repair': [
    { q: 'Can you repair just the damaged section?', a: () => 'Usually yes. The honest caveat is blending — a well-matched repair in a worn floor can still show, because the repaired area is cleaner than everything around it. Where that applies we will tell you that a repair plus refinishing that room gives the result you actually want.' },
    { q: 'My floor is cupping — do I need to replace it?', a: () => 'Often not. Cupping is usually a moisture response, and once the source is fixed the boards frequently flatten on their own over several weeks. Sanding a cupped floor too early wastes wood and can leave it crowned once it dries. We measure, fix the cause, and wait where waiting is right.' },
  ],
};

export function localFaqs(serviceSlug: string, serviceName: string, citySlug: string, cityName: string) {
  const p = AREA_PROFILE[citySlug];
  const lower = serviceName.toLowerCase();
  const prep: Record<Archetype, string> = {
    slab: `In ${cityName} the subfloor is usually concrete slab — the housing here is ${p?.era}. That decides the product list before anything else does, and we test slab moisture before scheduling rather than after.`,
    historic: `More than a newer home, and it is worth it. ${cityName} is ${p?.era}, and floors of that age hide previous repairs, old finishes and subfloor movement. A raised foundation lets us assess from below before quoting.`,
    mixed: `It depends which ${cityName} home you are in. The city runs ${p?.era}, so we confirm your subfloor at the free in-home measure instead of assuming from the build year.`,
  };
  return [
    { q: `What does ${lower} involve in a ${cityName} home?`, a: prep[p?.archetype ?? 'mixed'] },
    ...(FAMILY_FAQ[serviceSlug] ?? []).map((f) => ({ q: f.q, a: f.a() })),
    { q: `Do you serve all of ${cityName}?`, a: `Yes — ${cityName} and the surrounding Inland Empire. ${p?.jobNote} Same crew on every job, and a free in-home estimate before you commit to anything.` },
  ];
}

export function pageVariant(serviceSlug: string, citySlug: string) {
  let h = 0;
  const key = `${serviceSlug}:${citySlug}`;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return { pick: (n: number) => h % n, flip: (bit = 0) => ((h >> bit) & 1) === 1 };
}

export const INTRO_VARIANTS = [
  (s: string, c: string) => `${c} homeowners come to us for ${s} because we look at the actual house before quoting — the subfloor decides most of this job, and it varies street to street here.`,
  (s: string, c: string) => `We have been doing ${s} across ${c} long enough to know what is under these floors before we lift a board. That is most of what you are paying for.`,
  (s: string, c: string) => `Our approach to ${s} in ${c}: check the subfloor, tell you honestly what your home will and will not take, then do that work properly.`,
  (s: string, c: string) => `For ${s} in ${c}, we would rather talk you out of the wrong product than sell it to you. It is why most of our work comes by referral.`,
];
