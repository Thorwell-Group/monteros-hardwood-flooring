// Core services. Each maps to /services/{slug} and to /areas-we-serve/{city}/{slug}.
// `cityVariant: true` means a city-service combo page is generated for every city.

export interface Service {
  slug: string;
  name: string;
  shortName: string;        // for nav and buttons
  oneLiner: string;         // one-sentence pitch for cards
  metaTitleBase: string;    // "{base} | {city, CA}" gets composed at render
  metaTitle?: string;       // optional full <title> override (already brand-baked)
  metaDescBase: string;     // same composition pattern
  // Optional contextual internal link to a priority service-area hub page.
  areaLink?: { href: string; label: string; before: string; after: string };
  heroImage: string;
  altText: string;
  // Per priceUnit. Optional: a service with no published range (baseboards &
  // trim) leaves these out, and the schema Offer and the city pricing FAQ fall
  // back to `pricingNote` instead of printing a made-up number.
  priceFromUSD?: number;    // per priceUnit, low end
  priceToUSD?: number;      // per priceUnit, high end
  pricingNote?: string;     // pricing answer used when there is no published range
  priceUnit?: string;       // what the price range is quoted per; defaults to 'square foot'
  timeline: string;         // typical project window
  cityVariant: boolean;
  benefits: string[];
  process: { step: string; detail: string }[];
  materials?: string[];
  faqs: { q: string; a: string }[];
  intent: 'install' | 'refinish' | 'repair' | 'specialty';
  gallery?: { src: string; alt: string }[];  // additional service-relevant photos
  // Educational/material deep-dives this transactional service page should link DOWN to.
  relatedGuides?: { slug: string; label: string }[];
  // Blog posts (by slug) listed under the guides on the service page.
  relatedPosts?: string[];
  // Optional contextual blog interlink (anchor text + path).
  blogLink?: { href: string; label: string };
}

export const services: Service[] = [
  {
    slug: 'hardwood-flooring-installation',
    name: 'Hardwood Flooring Installation',
    shortName: 'Hardwood Installation',
    oneLiner: 'Solid and engineered hardwood floors installed by craftsmen with 20+ years on Inland Empire homes.',
    metaTitleBase: 'Hardwood Floor Installation',
    metaDescBase: 'Custom hardwood floor installation across the Inland Empire. Solid & engineered oak, hickory & wide planks with a lifetime workmanship warranty. Free estimate.',
    heroImage: '/images/hardwood-modern-open-living.webp',
    altText: 'Wide-plank natural oak hardwood flooring in a modern open-concept Inland Empire kitchen and living room',
    priceFromUSD: 8,
    priceToUSD: 16,
    timeline: '3 – 7 days for most homes',
    cityVariant: true,
    benefits: [
      'Solid and engineered hardwood from leading mills',
      'Subfloor prep, moisture testing, and acclimation included',
      'Clean job sites - drop cloths, dust containment, daily clean-up',
      'Honest written quote with no surprise add-ons',
      'Lifetime workmanship guarantee on every install',
    ],
    process: [
      { step: 'Free in-home consultation', detail: 'We measure your space, take subfloor moisture readings, and walk you through species, finishes, and width options.' },
      { step: 'Written estimate, no pressure', detail: 'Itemized quote in plain English. We hold the price for 30 days.' },
      { step: 'Materials acclimate on-site', detail: 'Boards sit in your home 3 – 5 days before install - non-negotiable in our climate.' },
      { step: 'Demo, prep, install', detail: 'Old flooring removed, subfloor leveled, moisture barrier where needed, planks laid.' },
      { step: 'Trim, transitions, walk-through', detail: 'Quarter-round, transitions to tile/carpet, final clean. You sign off only when it\'s right.' },
    ],
    materials: ['Solid oak', 'White oak', 'Red oak', 'Hickory', 'Maple', 'Engineered hardwood', 'Wide-plank European oak'],
    faqs: [
      { q: 'How long does a typical hardwood install take?', a: 'For an average 1,500 – 2,500 sq ft home, plan on 3 – 7 working days, including the acclimation window. Larger or more intricate jobs run longer; we give you the exact schedule in writing before we start.' },
      { q: 'Solid or engineered - which is right for my home?', a: 'In the Inland Empire, both work well above grade. Solid is the gold standard for refinishing decades down the road. Engineered is more dimensionally stable for slab subfloors and hot, dry summers. We bring samples of each and walk through the trade-offs in your home.' },
      { q: 'Do you remove and dispose of the old flooring?', a: 'Yes. Tear-out, haul-away, and disposal are included in every install quote. You don\'t need a dumpster.' },
      { q: 'What about my furniture?', a: 'We move standard furniture as part of the job. Pianos, gun safes, oversized pieces, and electronics are typically the homeowner\'s responsibility - we\'ll flag this in writing during the estimate.' },
      { q: 'Do you offer financing?', a: 'Yes - 0% promotional financing is available for qualified customers. Ask during your free estimate and we\'ll walk through the options.' },
    ],
    intent: 'install',
    areaLink: { before: 'Planning a project nearby? Explore our ', label: 'flooring services in Highland', after: ', CA and across the Inland Empire.', href: '/areas-we-serve/highland/' },
    gallery: [
      { src: '/images/hardwood-flooring-installation.webp', alt: 'Newly installed wide-plank hardwood floor in an Inland Empire home' },
      { src: '/images/hardwood-formal-living-room.webp', alt: 'Hardwood flooring in a formal Inland Empire living room' },
      { src: '/images/hardwood-large-living-space.webp', alt: 'Hardwood flooring in a large open living space' },
      { src: '/images/hardwood-kitchen-flooring.webp', alt: 'Hardwood kitchen flooring installation' },
    ],
    relatedPosts: [
      'hardwood-vs-laminate-inland-empire',
      'hardwood-floors-on-concrete-slab',
      'wide-plank-hardwood-california',
      'best-flooring-for-southern-california-homes',
      'hardwood-floors-before-or-after-kitchen-cabinets',
      'which-direction-should-flooring-run',
      'prefinished-vs-site-finished-hardwood',
      'baseboards-and-quarter-round-with-new-floors',
      'hardwood-flooring-grades-explained',
    ],
    relatedGuides: [
      { slug: 'solid-hardwood-flooring', label: 'Solid hardwood flooring explained' },
      { slug: 'engineered-hardwood-flooring', label: 'Engineered hardwood for slab subfloors' },
      { slug: 'oak-flooring', label: 'Red oak vs white oak flooring' },
      { slug: 'engineered-vs-solid-hardwood', label: 'Engineered vs solid hardwood comparison' },
      { slug: 'bedroom-flooring', label: 'Best flooring for bedrooms' },
      { slug: 'kitchen-flooring', label: 'Best flooring for kitchens' },
    ],
    blogLink: { href: '/blog/how-to-fix-squeaky-hardwood-floors/', label: 'how to fix squeaky hardwood floors' },
  },
  {
    slug: 'hardwood-floor-refinishing',
    name: 'Hardwood Floor Refinishing',
    shortName: 'Refinishing',
    oneLiner: 'Bring tired hardwood back to life with sand, stain, and seal - most homes done in 3 – 5 days.',
    metaTitleBase: 'Hardwood Floor Refinishing',
    metaTitle: 'Hardwood Refinishing, Inland Empire | Dust-Free | Monteros',
    metaDescBase: 'Restore tired hardwood to like-new across the Inland Empire - dust-free sanding, custom stain matching, and most homes finished in 3-5 days. Book a free estimate.',
    heroImage: '/images/hardwood-refinished-oak-floor.webp',
    altText: 'Glossy refinished oak hardwood floor in a sunlit room',
    priceFromUSD: 3,
    priceToUSD: 7,
    timeline: '3 – 5 days, including cure time',
    cityVariant: true,
    benefits: [
      'Dust-contained sanding system - far less mess than open sanding',
      'Custom stain matching, including grey, ebony, and natural tones',
      'Water-based polyurethane (low VOC) or oil-based options',
      'Screen-and-recoat available for floors that just need a refresh',
      'Most floors can be refinished 4 – 7 times over their lifetime',
    ],
    process: [
      { step: 'Floor inspection', detail: 'We check thickness, water damage, board cupping, and any boards that need replacing first.' },
      { step: 'Coarse sanding', detail: 'Old finish, scratches, and pet stains come off down to bare wood.' },
      { step: 'Fine sanding and edging', detail: 'Hand-edged corners, screen-sanded for a glass-smooth surface.' },
      { step: 'Stain application', detail: 'Custom-matched stain, applied evenly, wiped to depth you approve from a sample board.' },
      { step: 'Sealer + 2-3 coats finish', detail: 'Cure time between coats. Walk-on after 24h, furniture back after 5 – 7 days.' },
    ],
    faqs: [
      { q: 'Can my floors be refinished or do I need to replace them?', a: 'If you have at least 1/8 inch of wood above the tongue and groove, you can refinish. We measure during the free estimate and tell you straight. Engineered floors may have a thinner wear layer - ask before assuming.' },
      { q: 'How dusty is the process?', a: 'Far less than the old days. We use a dust-contained sanding system that captures most particulate at the source. Expect light residual dust on hard surfaces - we wipe down at the end.' },
      { q: 'How soon can I walk on my floors?', a: 'Sock feet after 24 hours. Shoes after 48. Furniture back after 5 days. Area rugs after 14 days - the finish needs that long to fully cure.' },
      { q: 'Will the new color exactly match my sample?', a: 'We always do a 2 ft x 2 ft test patch in your home with your wood and your light before sanding the whole floor. You sign off on the color before we commit.' },
      { q: 'How often can hardwood be refinished?', a: 'Solid 3/4-inch hardwood typically handles 4 – 7 full refinishes over its lifetime. Screen-and-recoat (light refresh) can be done many more times in between.' },
    ],
    intent: 'refinish',
    areaLink: { before: 'Local to the area? See why homeowners choose us as their ', label: 'flooring contractor in Highland, CA', after: ' and throughout the Inland Empire.', href: '/areas-we-serve/highland/' },
    gallery: [
      { src: '/images/hardwood-floor-refinishing.webp', alt: 'Mid-refinishing hardwood floor showing freshly sanded wood ready for stain' },
      { src: '/images/hardwood-staircase-refinishing.webp', alt: 'Hardwood staircase mid-refinish' },
      { src: '/images/hardwood-floor-sander.webp', alt: 'Floor sander working across an oak floor during a refinish' },
    ],
    relatedPosts: [
      'sun-faded-hardwood-floors-inland-empire',
      'screen-and-recoat-vs-full-refinish',
      'hardwood-floor-refinishing-cost-inland-empire',
      'hardwood-floor-stain-colors-inland-empire',
      'new-floors-before-the-holidays-inland-empire',
      'water-based-vs-oil-based-polyurethane-floors',
      'staying-home-during-floor-refinishing-or-installation',
      'refinishing-hardwood-stairs',
    ],
    relatedGuides: [
      { slug: 'sand-and-stain', label: 'Full sand, stain & seal process' },
      { slug: 'screen-and-recoat', label: 'Screen & recoat (light refresh)' },
      { slug: 'dustless-floor-refinishing', label: 'Dustless refinishing explained' },
    ],
    blogLink: { href: '/blog/how-to-fix-squeaky-hardwood-floors/', label: 'how to fix squeaky hardwood floors before you refinish' },
  },
  {
    slug: 'luxury-vinyl-plank',
    name: 'Luxury Vinyl Plank Installation',
    shortName: 'Luxury Vinyl Plank',
    oneLiner: 'Waterproof, kid-proof, dog-proof flooring that looks like real hardwood - installed in a day or two.',
    metaTitleBase: 'Luxury Vinyl Plank Installation',
    metaDescBase: 'Waterproof luxury vinyl plank installation in the Inland Empire. SPC & click-lock LVP that\'s pet-proof and kid-proof, installed fast. Book a free estimate.',
    heroImage: '/images/luxury-vinyl-plank-living-room.webp',
    altText: 'Waterproof luxury vinyl plank flooring in a furnished Inland Empire living room',
    priceFromUSD: 4,
    priceToUSD: 9,
    timeline: '1 – 3 days for most homes',
    cityVariant: true,
    benefits: [
      '100% waterproof - bathrooms, kitchens, and laundry rooms welcome',
      'Realistic wood and stone visuals from Coretec, Shaw, Mohawk, and others',
      'Pet-claw and high-heel resistant wear layer',
      'Floats over most existing flooring - fewer demo days',
      'Comfortable underfoot with attached cork or foam pad',
    ],
    process: [
      { step: 'In-home consultation', detail: 'We bring samples, talk about traffic patterns, and confirm subfloor condition.' },
      { step: 'Subfloor prep', detail: 'LVP needs a flat subfloor - we self-level low spots and fill cracks.' },
      { step: 'Click-lock or glue-down install', detail: 'Most jobs are floating click-lock. High-moisture rooms or commercial may use glue-down.' },
      { step: 'Trim and transitions', detail: 'Baseboards, quarter-round, transitions to other flooring - clean lines everywhere.' },
      { step: 'Walk on it the same day', detail: 'No cure time. Move furniture back as soon as we leave.' },
    ],
    materials: ['SPC (Stone Polymer Composite)', 'WPC (Wood Polymer Composite)', 'Click-lock LVP', 'Glue-down LVP', 'Waterproof rigid core'],
    faqs: [
      { q: 'Is luxury vinyl plank really waterproof?', a: 'Yes - quality SPC and rigid-core LVP is fully waterproof on the surface. Standing water in seams should still be wiped up reasonably soon, but spills, splashes, and pet accidents are no problem.' },
      { q: 'How does LVP compare to laminate?', a: 'LVP is fully waterproof; laminate is water-resistant at best. LVP is softer underfoot. Laminate is typically a touch cheaper and often has better visuals at the budget end. We bring both samples to your estimate.' },
      { q: 'Can LVP go over my existing tile?', a: 'In most cases, yes - if the tile is well-bonded and reasonably flat. We assess during the estimate. Going over tile saves a demo day.' },
      { q: 'Is it good for pets?', a: 'It\'s our most-recommended flooring for pet households. Scratch-resistant, waterproof for accidents, and easy to clean.' },
      { q: 'How long does it last?', a: 'Quality LVP carries 20 – 30 year residential warranties. Real-world life depends on traffic and the wear layer thickness - we explain the differences during the estimate.' },
    ],
    intent: 'install',
    gallery: [
      { src: '/images/luxury-vinyl-plank-flooring.webp', alt: 'Waterproof luxury vinyl plank flooring' },
      { src: '/images/luxury-vinyl-plank-detail.webp', alt: 'Detail view of luxury vinyl plank seam and texture' },
      { src: '/images/luxury-vinyl-plank-perspective.webp', alt: 'Low-angle perspective of luxury vinyl plank flooring' },
      { src: '/images/luxury-vinyl-plank-styled-room.webp', alt: 'Styled room featuring luxury vinyl plank flooring' },
      { src: '/images/luxury-vinyl-plank-samples.webp', alt: 'Luxury vinyl plank samples laid out for selection' },
    ],
    relatedPosts: [
      'hardwood-vs-luxury-vinyl-plank',
      'luxury-vinyl-plank-vs-laminate-inland-empire',
      'lvp-installation-inland-empire-what-good-looks-like',
      'waterproof-flooring-southern-california',
      'replacing-tile-with-hardwood-or-lvp',
      'floor-transitions-between-rooms',
    ],
    relatedGuides: [
      { slug: 'waterproof-luxury-vinyl-plank', label: 'What makes LVP waterproof' },
      { slug: 'spc-flooring', label: 'SPC vs WPC cores explained' },
      { slug: 'click-lock-vinyl-plank', label: 'Click-lock vs glue-down LVP' },
      { slug: 'laminate-vs-luxury-vinyl-plank', label: 'Laminate vs LVP comparison' },
      { slug: 'kitchen-flooring', label: 'Best flooring for kitchens' },
      { slug: 'bathroom-flooring', label: 'Best flooring for bathrooms' },
      { slug: 'basement-flooring', label: 'Flooring for basements and lower levels' },
    ],
  },
  {
    slug: 'laminate-flooring',
    name: 'Laminate Flooring Installation',
    shortName: 'Laminate',
    oneLiner: 'Budget-friendly hardwood look with tough, scratch-resistant wear layers - installed fast.',
    metaTitleBase: 'Laminate Flooring Installation',
    metaDescBase: 'Laminate flooring installation in the Inland Empire. Water-resistant, scratch-tough AC4/AC5 planks with realistic wood looks. Get a free in-home estimate.',
    heroImage: '/images/laminate-installation.webp',
    altText: 'Laminate flooring installation in progress in an Inland Empire home',
    priceFromUSD: 3,
    priceToUSD: 7,
    timeline: '1 – 3 days for most homes',
    cityVariant: true,
    benefits: [
      'Hardwood-realistic visuals at a fraction of the cost',
      'AC4 and AC5 wear ratings stand up to family life',
      'Water-resistant cores available for kitchens and entries',
      'Floats over most existing flooring - minimal demo',
      'Easy to maintain - sweep, damp mop, done',
    ],
    process: [
      { step: 'Sample-in-hand consultation', detail: 'AC ratings, edge bevel styles, and water-resistant cores explained on your floor.' },
      { step: 'Subfloor prep + underlayment', detail: 'Clean, level surface plus quality underlayment - quieter floors and longer life.' },
      { step: 'Click-lock install', detail: 'Floating planks click together. Expansion gap at every wall - non-negotiable.' },
      { step: 'Trim, transitions, baseboards', detail: 'Clean reveal at walls, smooth transitions to tile or carpet.' },
      { step: 'Same-day move-in', detail: 'No cure time. Live on it as soon as we hand over the keys.' },
    ],
    materials: ['AC4 residential laminate', 'AC5 commercial-rated laminate', 'Water-resistant cored laminate', 'Embossed-in-register (EIR) plank'],
    faqs: [
      { q: 'Is laminate waterproof?', a: 'Standard laminate is water-resistant, not waterproof - it can handle spills if wiped reasonably soon. For full waterproof needs (full bathrooms, mudrooms with pet bowls), we recommend luxury vinyl plank instead. We\'ll point you to the right one.' },
      { q: 'What\'s the difference between AC ratings?', a: 'AC ratings measure wear-layer durability. AC3 = light residential, AC4 = heavy residential / light commercial, AC5 = heavy commercial. For a busy family home with kids and pets, we recommend AC4 minimum.' },
      { q: 'Can laminate be refinished?', a: 'No - the photographic wear layer is finished at the factory and can\'t be sanded. When it eventually wears out (usually 15 – 25 years), it gets replaced. The good news: the install cost is low, so replacement is reasonable.' },
      { q: 'Does it sound hollow underfoot?', a: 'Quality underlayment makes a big difference. We use proper acoustic underlayment as standard - most homeowners say it sounds and feels like real wood.' },
      { q: 'Will it work in my kitchen?', a: 'Water-resistant cored laminate works fine in most kitchens. For kitchens with frequent spills or near a dishwasher, we typically suggest LVP for full peace of mind.' },
    ],
    intent: 'install',
    gallery: [
      { src: '/images/laminate-flooring.webp', alt: 'Laminate wood-look flooring in an Inland Empire living room' },
      { src: '/images/laminate-flooring-detail.webp', alt: 'Close-up detail of laminate flooring grain' },
      { src: '/images/laminate-large-space.webp', alt: 'Laminate flooring across a large open living space' },
      { src: '/images/laminate-living-space.webp', alt: 'Furnished living space with laminate flooring' },
      { src: '/images/laminate-sample-selection.webp', alt: 'Laminate flooring samples laid out for selection' },
      { src: '/images/dog-on-laminate-flooring.webp', alt: 'Family dog resting on durable laminate flooring' },
    ],
    relatedPosts: [
      'hardwood-vs-laminate-inland-empire',
      'laminate-vs-hardwood-real-cost',
      'laminate-flooring-installation-inland-empire',
      'luxury-vinyl-plank-vs-laminate-inland-empire',
      'how-much-flooring-do-i-need',
      'laminate-floor-repair-swelling-chips-gaps',
    ],
    relatedGuides: [
      { slug: 'ac-rated-laminate', label: 'AC ratings explained (AC4 vs AC5)' },
      { slug: 'water-resistant-laminate', label: 'Water-resistant laminate guide' },
      { slug: 'laminate-vs-luxury-vinyl-plank', label: 'Laminate vs LVP comparison' },
      { slug: 'hardwood-vs-laminate', label: 'Hardwood vs laminate comparison' },
      { slug: 'bedroom-flooring', label: 'Best flooring for bedrooms' },
    ],
  },
  {
    slug: 'floor-repair',
    name: 'Hardwood Floor Repair',
    shortName: 'Floor Repair',
    oneLiner: 'Water damage, scratches, squeaks, and gouges - repaired so the patch is invisible.',
    metaTitleBase: 'Hardwood Floor Repair',
    metaDescBase: 'Hardwood floor repair across the Inland Empire. Water damage, scratches, squeaks & board replacement with seamless, color-matched patches. Free assessment.',
    heroImage: '/images/hardwood-staircase-refinishing.webp',
    altText: 'Detailed hardwood floor repair showing seamless board replacement',
    priceFromUSD: 250,
    priceToUSD: 1500,
    priceUnit: 'repair area',
    timeline: '1 – 2 days for most repairs',
    cityVariant: true,
    benefits: [
      'Board-by-board replacement - no full-room redo required',
      'Stain matching to surrounding floor',
      'Squeak diagnosis and silent fix from above (no ceiling damage)',
      'Pet stain and water damage specialists',
      'Honest assessment - we\'ll tell you when refinish or replace makes more sense',
    ],
    process: [
      { step: 'Diagnose the cause', detail: 'A leak, a settling subfloor, a missed nail - we find the why before fixing the what.' },
      { step: 'Source matching boards', detail: 'We pull from local distributors to match species, grade, and width.' },
      { step: 'Cut out, patch in', detail: 'Damaged boards removed cleanly. New boards woven in with the existing pattern.' },
      { step: 'Stain match + finish', detail: 'Custom-stained to blend, sealed to match surrounding sheen.' },
      { step: 'Final inspection', detail: 'You shouldn\'t be able to find the patch from across the room. That\'s the bar.' },
    ],
    faqs: [
      { q: 'Will the repair be visible?', a: 'Done right, no. We match species, grade, width, and stain - and weave the patch into the existing board pattern rather than blocking it in. Stand 6 feet back, you won\'t spot it.' },
      { q: 'Can you fix water damage?', a: 'Usually yes, if the damage is caught before mold sets in. We replace cupped or stained boards, treat the subfloor, and address the water source if needed. Severe wide-area damage may call for a refinish or partial replacement.' },
      { q: 'My floors squeak - can you fix that?', a: 'Almost always. Most squeaks come from boards rubbing against each other or against subfloor nails. We diagnose from above (no ceiling work needed) and silence the squeak with screws designed to break off below the floor surface.' },
      { q: 'What about deep gouges and pet damage?', a: 'Small gouges can be filled and finished. Larger areas - especially urine stains that have soaked through - need board replacement. We assess in person and quote both options.' },
      { q: 'Do you repair luxury vinyl plank and laminate floors too?', a: 'Yes. A single damaged vinyl plank can usually be replaced without redoing the floor. On a click-lock floor we either unlock the rows back to it from the nearest wall or cut it out in place; on glue-down vinyl we warm the plank, lift it, and set a new one in fresh adhesive. Laminate that has lifted at the seams usually needs its expansion gap released rather than new planks. Keep any leftover planks from the original install - an exact match is the hard part.' },
      { q: 'Should I repair or refinish?', a: 'If damage is in 2 – 3 areas, repair. If it\'s widespread or the whole finish is worn out, refinish makes more sense and often costs less per square foot. We\'ll tell you straight which path fits.' },
    ],
    intent: 'repair',
    gallery: [
      { src: '/images/hardwood-formal-living-room.webp', alt: 'Repaired and refinished hardwood floor in a formal living room' },
      { src: '/images/hardwood-large-living-space.webp', alt: 'Hardwood floor with seamless board replacement across a large space' },
      { src: '/images/hardwood-floor-refinishing.webp', alt: 'Hardwood floor mid-repair, freshly sanded for board matching' },
      { src: '/images/hardwood-flooring-installation.webp', alt: 'Hardwood floor showing seamlessly patched boards woven into the existing pattern' },
    ],
    relatedPosts: [
      'floor-repair-inland-empire',
      'gaps-in-hardwood-floors',
      'water-damaged-hardwood-floors',
      'replace-damaged-vinyl-plank',
      'matching-new-hardwood-to-existing-floors',
      'pet-urine-stains-hardwood-floors',
      'santa-ana-winds-hardwood-floors',
      'protecting-hardwood-floors-during-the-holidays',
      'area-rugs-and-rug-pads-on-hardwood-floors',
      'laminate-floor-repair-swelling-chips-gaps',
    ],
    relatedGuides: [
      { slug: 'water-damage-floor-repair', label: 'Water-damaged floor repair guide' },
      { slug: 'scratch-and-gouge-repair', label: 'Scratch & gouge repair guide' },
    ],
  },
  {
    slug: 'stair-installation',
    name: 'Hardwood Stair Installation & Refinishing',
    shortName: 'Stairs',
    oneLiner: 'Custom hardwood treads, risers, and refinishing for staircases that anchor your home.',
    metaTitleBase: 'Hardwood Stair Installation & Refinishing',
    metaDescBase: 'Hardwood stair installation & refinishing across the Inland Empire. Custom treads, risers, stain matching & code-compliant nosing. Free in-home estimate.',
    heroImage: '/images/hardwood-staircase-installation.webp',
    altText: 'Newly refinished hardwood staircase by Monteros in an Inland Empire home',
    priceFromUSD: 80,
    priceToUSD: 200,
    priceUnit: 'tread',
    timeline: '2 – 4 days for most staircases',
    // Enabled 2026-07-30. Stairs are the one service where the slab-vs-raised
    // question does not limit the answer — treads are framed in wood regardless —
    // so this reads genuinely differently from the other five city services. It
    // also has real local demand: "staircase installers highland ca" sits at
    // position 16.7, "stair finishing services fullerton ca" at 36.9.
    cityVariant: true,
    benefits: [
      'Solid hardwood treads and risers - no veneer shortcuts',
      'Matching to your existing flooring stain and species',
      'Code-compliant nosing depth and tread overhang',
      'Optional iron baluster swap during install',
      'Less noise, more grip - proper underlayment and finish',
    ],
    process: [
      { step: 'Tread-by-tread measure', detail: 'Every staircase is slightly different. We measure each tread individually for a perfect fit.' },
      { step: 'Demo old treads / carpet', detail: 'Carpet, tack strips, and old treads removed. Sub-treads inspected and reinforced if needed.' },
      { step: 'Custom tread and riser fab', detail: 'Solid hardwood treads cut to size with proper nosing. Risers prepped, painted or stained to match.' },
      { step: 'Glue + screw install', detail: 'Glued and screwed for a squeak-free, lifetime install.' },
      { step: 'Stain, seal, walk-through', detail: 'Stain to match flooring, sealed with durable polyurethane. Walkable in 24 hours.' },
    ],
    materials: ['Solid oak treads', 'White oak treads', 'Hickory treads', 'Maple treads', 'Engineered tread caps'],
    faqs: [
      { q: 'Can you match my existing wood floors?', a: 'Yes - that\'s our most common stair job. We pull treads in matching species, then custom-stain to your floor color. Rare species may need a special order.' },
      { q: 'Do I have to redo the whole staircase?', a: 'Usually yes for a clean look - treads, risers, and nosings should match. If you\'re refinishing existing wood treads, we can refinish in place; if they\'re carpet over plywood, the sub-treads need new hardwood treads on top.' },
      { q: 'What about my balusters and railings?', a: 'We can swap iron balusters and refinish railings as part of the project. Full railing replacement is more involved and quoted separately.' },
      { q: 'Can you put luxury vinyl plank on stairs?', a: 'Yes. We install luxury vinyl plank on stairs, so the staircase can match new vinyl floors in the rest of the house. The old carpet and tack strips come off first. At the free in-home estimate we look at your stairs and quote them with the rest of the floor.' },
      { q: 'Are the treads slippery?', a: 'Properly finished hardwood treads have similar slip resistance to floors. We finish with satin polyurethane (less slippery than gloss) and can add discrete grip strips if needed.' },
    ],
    intent: 'specialty',
    gallery: [
      { src: '/images/hardwood-staircase-refinishing.webp', alt: 'Refinished hardwood staircase with matching treads and risers' },
    ],
    relatedPosts: [
      'staircase-installation-inland-empire',
      'refinishing-hardwood-stairs',
    ],
    relatedGuides: [
      { slug: 'oak-flooring', label: 'Matching stair treads to oak floors' },
      { slug: 'sand-and-stain', label: 'Refinishing & stain matching' },
    ],
  },
  {
    slug: 'baseboards-and-trim',
    name: 'Baseboard & Trim Installation',
    shortName: 'Baseboards & Trim',
    oneLiner: 'Baseboards, quarter round and shoe molding installed or replaced, so the new floor meets the wall with a clean, finished line.',
    metaTitleBase: 'Baseboard & Trim Installation',
    metaDescBase: 'Baseboards, quarter round and shoe molding installed or replaced across the Inland Empire, with a new floor or on their own. Free in-home estimate.',
    heroImage: '/images/hardwood-dining-room-floor.webp',
    altText: 'White baseboards and wainscoting meeting a hardwood dining room floor',
    pricingNote: 'Trim is itemized on the written estimate: linear feet of baseboard, quarter round or shoe molding, and whether existing baseboards come off and go back or get replaced. On our SPC vinyl installs, baseboard trim is already part of the installed price.',
    timeline: 'Usually the last step of the floor install',
    // Added 2026-11-26 on the owner's instruction that baseboards and trim are
    // offered on every client site unless stated otherwise. City pages are
    // differentiated by the same slab / historic / mixed archetype as the other
    // services (see SERVICE_BY_ARCHETYPE in local-context.ts).
    cityVariant: true,
    benefits: [
      'New baseboards, quarter round and shoe molding installed',
      'Existing baseboards pulled before the floor and reinstalled after, where they are worth keeping',
      'Trim replaced when it is cracked, too short for the new floor, or you want a new style',
      'Expansion gap at every wall left open and covered, never caulked shut',
      'Door casings undercut so the floor slides under them instead of trim cut around them',
    ],
    process: [
      { step: 'Decide at the estimate', detail: 'Keep and add quarter round, pull and reinstall, or replace. We look at your baseboards and the new floor height and go over the options.' },
      { step: 'Trim comes off before the floor', detail: 'Baseboards that are going back are removed carefully before installation. Old tile set under baseboards often means they have to come off anyway.' },
      { step: 'Floor goes in with its gap', detail: 'Hardwood, LVP and laminate all need a gap at the walls so the floor can move. The trim is what covers it.' },
      { step: 'Baseboards and molding go on', detail: 'Baseboards set on top of the new floor, with quarter round or shoe molding where it is the right finish. Trim is fastened to the wall, not through a floating floor.' },
      { step: 'Fill, caulk, walk-through', detail: 'Nail holes filled and top edges caulked, then a final walk-through of every wall, doorway and transition.' },
    ],
    materials: ['Baseboards', 'Quarter round', 'Shoe molding', 'Stair noses and landing trim', 'Transition strips at doorways'],
    faqs: [
      { q: 'Should I keep my baseboards or replace them with new floors?', a: 'Keep them if they are in good shape and the height still looks right over the new floor. Replace them if they crack coming off, look short against a thicker floor, or you want a taller or different style. We look at them with you at the free estimate.' },
      { q: 'Quarter round or shoe molding: what is the difference?', a: 'Quarter round is a quarter circle. Shoe molding is taller and narrower, so it sits closer to the wall and looks a little more refined. Both cover the expansion gap along the wall.' },
      { q: 'Do my baseboards have to come off for new flooring?', a: 'Not always. Leaving them and adding quarter round is the least disruptive option. Pulling them and setting them back on top of the new floor gives the cleanest look with no extra molding. When tile is coming out, the baseboards often need to come off anyway.' },
      { q: 'Why not run the floor tight to the wall with no trim?', a: 'Hardwood, LVP and laminate expand and contract with heat and humidity, and Inland Empire summers and dry wind events swing both a lot. A floor with no gap at the walls can peak or buckle. The trim covers that gap.' },
      { q: 'Is trim included with a new floor?', a: 'On our SPC vinyl installs, baseboard trim is part of the installed price. On other jobs, trim is listed as its own line on the written estimate so you can see exactly what is being done at the walls.' },
    ],
    intent: 'specialty',
    gallery: [
      { src: '/images/hardwood-formal-living-room.webp', alt: 'Hardwood floor finished at painted baseboards in a formal living room' },
      { src: '/images/hardwood-fireplace-living-room.webp', alt: 'Hardwood living room floor meeting the baseboards and fireplace' },
      { src: '/images/laminate-flooring-detail.webp', alt: 'Light wood-look floor running to the wall and a sunny window' },
    ],
    relatedPosts: [
      'baseboards-and-quarter-round-with-new-floors',
      'floor-transitions-between-rooms',
      'replacing-tile-with-hardwood-or-lvp',
      'gaps-in-hardwood-floors',
    ],
    relatedGuides: [
      { slug: 'engineered-vs-solid-hardwood', label: 'Engineered vs solid hardwood comparison' },
      { slug: 'laminate-vs-luxury-vinyl-plank', label: 'Laminate vs LVP comparison' },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const cityVariantServices = services.filter((s) => s.cityVariant);

// /thank-you/ is an ad-funnel page (Meta Pixel conversion) that renders the
// shared header and footer. Funnel pages only change on the owner's say-so, so
// services added after the funnel shipped stay out of the menus there.
const FUNNEL_LOCKED_SERVICES = new Set(['baseboards-and-trim']);
export const navServicesFor = (pathname: string): Service[] =>
  /^\/(es\/)?thank-you\/?$/.test(pathname) ? services.filter((s) => !FUNNEL_LOCKED_SERVICES.has(s.slug)) : services;

// Descriptive anchor text for internal links to a service or city-service page,
// e.g. "Hardwood Floor Refinishing". shortName ("Refinishing", "Stairs") is a
// nav label and too vague to use as link text on its own.
export const serviceAnchor = (s: Service): string => s.metaTitleBase.replace(/ & Refinishing$/, '');
