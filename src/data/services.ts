// Core services. Each maps to /services/{slug} and to /areas-we-serve/{city}/{slug}.
// `cityVariant: true` means a city-service combo page is generated for every city.

export interface Service {
  slug: string;
  name: string;
  shortName: string;        // for nav and buttons
  oneLiner: string;         // one-sentence pitch for cards
  metaTitleBase: string;    // "{base} | {city, CA}" gets composed at render
  metaDescBase: string;     // same composition pattern
  heroImage: string;
  altText: string;
  priceFromUSD: number;     // per sq ft, low end
  priceToUSD: number;       // per sq ft, high end
  timeline: string;         // typical project window
  cityVariant: boolean;
  benefits: string[];
  process: { step: string; detail: string }[];
  materials?: string[];
  faqs: { q: string; a: string }[];
  intent: 'install' | 'refinish' | 'repair' | 'specialty';
  gallery?: { src: string; alt: string }[];  // additional service-relevant photos
}

export const services: Service[] = [
  {
    slug: 'hardwood-flooring-installation',
    name: 'Hardwood Flooring Installation',
    shortName: 'Hardwood Installation',
    oneLiner: 'Solid and engineered hardwood floors installed by craftsmen with 20+ years on Inland Empire homes.',
    metaTitleBase: 'Hardwood Floor Installation',
    metaDescBase: 'Custom hardwood floor installation by Monteros, the Inland Empire\'s family-owned hardwood specialists. Solid oak, white oak, hickory & engineered planks. Free in-home estimate.',
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
    gallery: [
      { src: '/images/hardwood-flooring-installation.webp', alt: 'Newly installed wide-plank hardwood floor in an Inland Empire home' },
      { src: '/images/hardwood-formal-living-room.webp', alt: 'Hardwood flooring in a formal Inland Empire living room' },
      { src: '/images/hardwood-large-living-space.webp', alt: 'Hardwood flooring in a large open living space' },
      { src: '/images/hardwood-kitchen-flooring.webp', alt: 'Hardwood kitchen flooring installation' },
    ],
  },
  {
    slug: 'hardwood-floor-refinishing',
    name: 'Hardwood Floor Refinishing',
    shortName: 'Refinishing',
    oneLiner: 'Bring tired hardwood back to life with sand, stain, and seal - most homes done in 3 – 5 days.',
    metaTitleBase: 'Hardwood Floor Refinishing',
    metaDescBase: 'Hardwood floor refinishing in the Inland Empire. Dust-contained sanding, custom stain matching, and durable finishes. Restore your existing floors for a fraction of replacement.',
    heroImage: '/images/hardwood-floor-sander.webp',
    altText: 'Professional drum sander mid-refinish on an Inland Empire hardwood floor',
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
    gallery: [
      { src: '/images/hardwood-floor-refinishing.webp', alt: 'Mid-refinishing hardwood floor showing freshly sanded wood ready for stain' },
      { src: '/images/hardwood-staircase-refinishing.webp', alt: 'Hardwood staircase mid-refinish' },
    ],
  },
  {
    slug: 'luxury-vinyl-plank',
    name: 'Luxury Vinyl Plank Installation',
    shortName: 'Luxury Vinyl Plank',
    oneLiner: 'Waterproof, kid-proof, dog-proof flooring that looks like real hardwood - installed in a day or two.',
    metaTitleBase: 'Luxury Vinyl Plank Installation',
    metaDescBase: 'Waterproof luxury vinyl plank (LVP) installation in the Inland Empire. SPC, click-lock, and glue-down options. Pet-safe, kid-safe, and ready for daily life. Free estimate.',
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
  },
  {
    slug: 'laminate-flooring',
    name: 'Laminate Flooring Installation',
    shortName: 'Laminate',
    oneLiner: 'Budget-friendly hardwood look with tough, scratch-resistant wear layers - installed fast.',
    metaTitleBase: 'Laminate Flooring Installation',
    metaDescBase: 'Laminate flooring installation in the Inland Empire. Water-resistant, scratch-tough, AC-rated planks. Realistic wood visuals at a friendly price. Free in-home estimate.',
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
  },
  {
    slug: 'floor-repair',
    name: 'Hardwood Floor Repair',
    shortName: 'Floor Repair',
    oneLiner: 'Water damage, scratches, squeaks, and gouges - repaired so the patch is invisible.',
    metaTitleBase: 'Hardwood Floor Repair',
    metaDescBase: 'Hardwood floor repair in the Inland Empire. Water damage, scratches, squeaks, gouges, and board replacement. Seamless patches by craftsmen with 20+ years experience.',
    heroImage: '/images/hardwood-staircase-refinishing.webp',
    altText: 'Detailed hardwood floor repair showing seamless board replacement',
    priceFromUSD: 250,
    priceToUSD: 1500,
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
      { q: 'Should I repair or refinish?', a: 'If damage is in 2 – 3 areas, repair. If it\'s widespread or the whole finish is worn out, refinish makes more sense and often costs less per square foot. We\'ll tell you straight which path fits.' },
    ],
    intent: 'repair',
    gallery: [
      { src: '/images/hardwood-formal-living-room.webp', alt: 'Repaired and refinished hardwood floor in a formal living room' },
      { src: '/images/hardwood-large-living-space.webp', alt: 'Hardwood floor with seamless board replacement across a large space' },
      { src: '/images/hardwood-floor-refinishing.webp', alt: 'Hardwood floor mid-repair, freshly sanded for board matching' },
      { src: '/images/hardwood-flooring-installation.webp', alt: 'Hardwood floor showing seamlessly patched boards woven into the existing pattern' },
    ],
  },
  {
    slug: 'stair-installation',
    name: 'Hardwood Stair Installation & Refinishing',
    shortName: 'Stairs',
    oneLiner: 'Custom hardwood treads, risers, and refinishing for staircases that anchor your home.',
    metaTitleBase: 'Hardwood Stair Installation & Refinishing',
    metaDescBase: 'Custom hardwood stair installation and refinishing across the Inland Empire. Tread and riser replacement, stain matching, and code-compliant nosing. Free estimate.',
    heroImage: '/images/hardwood-staircase-installation.webp',
    altText: 'Newly refinished hardwood staircase by Monteros in an Inland Empire home',
    priceFromUSD: 80,
    priceToUSD: 200,
    timeline: '2 – 4 days for most staircases',
    cityVariant: false,
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
      { q: 'Are the treads slippery?', a: 'Properly finished hardwood treads have similar slip resistance to floors. We finish with satin polyurethane (less slippery than gloss) and can add discrete grip strips if needed.' },
    ],
    intent: 'specialty',
    gallery: [
      { src: '/images/hardwood-staircase-refinishing.webp', alt: 'Refinished hardwood staircase with matching treads and risers' },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const cityVariantServices = services.filter((s) => s.cityVariant);
