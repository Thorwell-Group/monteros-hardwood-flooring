// Topic guides - service deep-dives, room types, comparisons.
// Each renders at /flooring/{slug}/ via a single dynamic route.

export interface Guide {
  slug: string;
  category: 'specialty' | 'room' | 'comparison';
  title: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;        // hero subtitle
  image: string;
  alt: string;
  parentService?: string; // services slug to cross-link
  body: string;           // markdown
  relatedGuides?: string[];
  faqs?: { q: string; a: string }[];  // optional FAQ section + FAQPage schema
}

// 15 specialty deep-dives + 5 rooms + 4 comparisons = 24 pages.
export const guides: Guide[] = [
  // ========== HARDWOOD SPECIALTY ==========
  {
    slug: 'solid-hardwood-flooring',
    category: 'specialty',
    title: 'Solid Hardwood Flooring',
    metaTitle: 'Solid Hardwood Flooring Installation in the Inland Empire',
    metaDesc: 'Solid 3/4-inch hardwood floors installed across the Inland Empire. Oak, hickory, maple - refinishable for decades. Free estimates from a 20+ year contractor.',
    intro: 'Traditional 3/4-inch solid hardwood - the floor that lasts a lifetime and refinishes 4 - 7 times along the way.',
    image: '/images/hardwood-flooring-installation.webp',
    alt: 'Solid hardwood flooring installed in an Inland Empire home',
    parentService: 'hardwood-flooring-installation',
    body: `Solid hardwood is the original flooring choice - and still the right one for raised-foundation homes, formal living spaces, and homeowners planning to stay long-term.

## What makes it solid

A single piece of hardwood, 3/4 inch thick, milled with tongue-and-groove edges. Same wood top to bottom, which means it can be sanded and refinished 4 to 7 times over its lifetime.

## Where it shines

- **Raised foundations** in older San Bernardino, Redlands, and Riverside neighborhoods.
- **Long-term homes** where the next refinish is part of the plan.
- **Historic homes** where solid wood is the right aesthetic.
- **Narrow to medium plank widths** (2-1/4" to 5"), where stability is excellent.

## Where to be cautious

- **Slab subfloors** - solid hardwood can\'t be installed directly to concrete. Engineered or LVP is the move on most newer Inland Empire homes.
- **Wide planks above 5"** in our climate - humidity swings make wider solid planks more prone to cupping. Engineered handles wider widths better here.

## What we install

Domestic oak (red and white), hickory, maple, and select premium species. Most installs are 3-1/4" to 5" wide with site-finished or pre-finished options.

For a free in-home estimate with samples, [reach out](/free-estimate/).`,
    relatedGuides: ['engineered-hardwood-flooring', 'wide-plank-european-oak'],
  },
  {
    slug: 'engineered-hardwood-flooring',
    category: 'specialty',
    title: 'Engineered Hardwood Flooring',
    metaTitle: 'Engineered Hardwood Flooring | Inland Empire Installation',
    metaDesc: 'Engineered hardwood floors installed across the Inland Empire. Stable on slab subfloors, wider planks possible, real wood look. Free estimates.',
    intro: 'Real hardwood top, plywood core. The smart choice for slab subfloors and wide planks in the Inland Empire climate.',
    image: '/images/hardwood-kitchen-flooring.webp',
    alt: 'Engineered hardwood flooring in an Inland Empire home',
    parentService: 'hardwood-flooring-installation',
    body: `Engineered hardwood combines a real wood wear layer with a multi-ply plywood core. The result: real hardwood looks and feel, with much better dimensional stability than solid.

## How it\'s made

A 1 - 6 mm wear layer of real hardwood is bonded to a 5 - 7 ply plywood or HDF core. Total thickness usually 1/2" to 5/8".

## Where it wins

- **Slab subfloors** - the dominant subfloor in Fontana, Ontario, newer Rancho Cucamonga, and most post-1990 Inland Empire construction.
- **Wide planks (5" - 9")** - the plywood core resists movement, so wide-plank engineered stays flat where solid would cup.
- **Variable humidity rooms** - kitchens and basements (where present) handle engineered better.

## What to ask about wear-layer thickness

The wear-layer thickness in millimeters is the number that matters:
- **1 - 2 mm**: budget grade. Cannot be refinished. Plan to replace in 15 - 20 years.
- **3 - 4 mm**: mid-grade. 1 - 2 light refinishes possible.
- **4 - 6 mm**: premium grade. Refinishes like solid, lasts 30 - 50 years.

We bring engineered samples with documented wear-layer specs to every estimate.

## Common pairings

Engineered wide-plank European oak in living/dining + LVP in wet rooms is one of our most-quoted whole-house plans across the Inland Empire today.

[Get a free estimate](/free-estimate/) with engineered samples brought to your home.`,
    relatedGuides: ['solid-hardwood-flooring', 'wide-plank-european-oak'],
  },
  {
    slug: 'wide-plank-european-oak',
    category: 'specialty',
    title: 'Wide-Plank European Oak Flooring',
    metaTitle: 'Wide-Plank European Oak Flooring | Inland Empire',
    metaDesc: 'Wide-plank European oak hardwood flooring in the Inland Empire. 6"+ planks, character grades, custom finishes. Free in-home consultation.',
    intro: '6 to 9-inch wide European white oak - character grain, custom finishes, modern proportions.',
    image: '/images/hardwood-large-living-space.webp',
    alt: 'Wide-plank hardwood flooring in a large open Inland Empire living room',
    parentService: 'hardwood-flooring-installation',
    body: `Wide-plank European white oak is what we install most in upper-tier Inland Empire homes today - Rancho Cucamonga\'s Etiwanda and Alta Loma, custom homes in Redlands, and high-end remodels across the region.

## What makes it different

- **Width.** 6", 7", 8", and 9" planks dominate. Modern proportions, fewer seams.
- **Grain character.** European oak has tighter grain and more figure than domestic oak. Available in clean grades and "character" grades with knots and mineral streaks.
- **Custom finishes.** Wire-brushed, hand-scraped, smooth. Stain options from pure white-washed to deep walnut.
- **Engineered construction.** Almost always engineered for stability at these widths.

## Pricing window

Premium European oak runs $14 - $22+ per square foot installed. The price is real - but so is the look. We bring samples in multiple widths and finishes to every estimate.

## Care notes

Wider planks expand and contract more in absolute terms with humidity. A whole-house humidifier on HVAC keeps indoor humidity in the 35 - 50% band - non-negotiable for wide-plank longevity in our climate.

[Schedule a free in-home consultation](/free-estimate/) with European oak samples.`,
    relatedGuides: ['engineered-hardwood-flooring', 'solid-hardwood-flooring'],
  },
  {
    slug: 'oak-flooring',
    category: 'specialty',
    title: 'Oak Hardwood Flooring',
    metaTitle: 'Oak Hardwood Flooring | Red & White Oak | Inland Empire',
    metaDesc: 'Oak hardwood flooring installation in the Inland Empire. Red oak, white oak, all widths. Refinishable, durable, classic. Free estimates.',
    intro: 'Domestic red and white oak - the most-installed hardwood species for good reason. Tough, refinishable, classic.',
    image: '/images/hardwood-formal-living-room.webp',
    alt: 'Classic oak hardwood flooring in a formal Inland Empire living room',
    parentService: 'hardwood-flooring-installation',
    body: `Oak is the workhorse of American hardwood flooring - about 65% of what we install. Two species dominate: red oak and white oak.

## Red oak

- **Reddish-pink undertone.** Warmer cast, especially with natural finish.
- **Open grain pattern.** Visible grain, takes stain unevenly compared to white oak.
- **Slightly softer** than white oak (Janka 1290 vs 1360).
- **More affordable** - typically the budget-friendly oak option.

## White oak

- **Cooler, browner undertone.** Modern preference. Takes grey, white-washed, and natural finishes beautifully.
- **Tighter grain pattern.** Cleaner look, takes stain more evenly.
- **Slightly harder** than red oak.
- **Premium pricing** - typically 10 - 20% more than red oak.

## Which we recommend in 2026

70% of our hardwood installs today are white oak. The cooler tone matches contemporary interiors, the grain pattern photographs better, and clients often prefer it once they see both species side-by-side.

That said, red oak is still excellent and the right choice in homes where it matches existing trim, doors, or cabinetry - common in 1970s and 1980s Inland Empire homes.

## Cost

- Red oak: $8 - $12 per sq ft installed
- White oak: $10 - $15 per sq ft installed
- Wide-plank white oak: $13 - $18+ per sq ft installed

[Get a free estimate](/free-estimate/) with both red and white oak samples on-site.`,
    relatedGuides: ['hickory-flooring', 'wide-plank-european-oak'],
  },
  {
    slug: 'hickory-flooring',
    category: 'specialty',
    title: 'Hickory Hardwood Flooring',
    metaTitle: 'Hickory Hardwood Flooring | Inland Empire Installation',
    metaDesc: 'Hickory hardwood flooring installation in the Inland Empire. Toughest domestic hardwood, dramatic grain, rustic character. Free estimates.',
    intro: 'The toughest commonly-installed domestic hardwood. Dramatic grain, deep color variation, lasts forever.',
    image: '/images/hardwood-flooring-installation.webp',
    alt: 'Hickory hardwood flooring',
    parentService: 'hardwood-flooring-installation',
    body: `Hickory is for homeowners who want maximum durability and big visual character. About 10% of our hardwood installs.

## Why pick hickory

- **Hardness.** Janka 1820 - 41% harder than red oak, 33% harder than white oak. Resists dents from dropped objects and pet activity.
- **Color variation.** Each plank has a wide range from creamy sapwood to dark walnut-toned heartwood. Dramatic.
- **Grain.** Pronounced, often with visible knots and mineral streaks. Rustic, character-rich.

## Where it fits best

- **Entryways and high-traffic homes** - the hardness pays off.
- **Mountain or rustic interiors** - character grain matches the aesthetic.
- **Cabin-style or craftsman homes** - feels right.

## Where to think twice

- **Modern minimalist interiors** - character grain may feel busy.
- **Spaces where uniform color matters** - the natural variation can\'t be controlled.
- **Tight budgets** - hickory runs $11 - $16 per sq ft installed, similar to white oak.

## Maintenance notes

Same as oak - hardwood-specific cleaner only, felt pads under furniture, humidity in the 35 - 50% band. The hardness means scratches that would mar oak often don\'t register on hickory.

[See hickory samples](/free-estimate/) at your free in-home estimate.`,
    relatedGuides: ['oak-flooring', 'solid-hardwood-flooring'],
  },
  // ========== LVP SPECIALTY ==========
  {
    slug: 'waterproof-luxury-vinyl-plank',
    category: 'specialty',
    title: 'Waterproof Luxury Vinyl Plank',
    metaTitle: 'Waterproof Luxury Vinyl Plank | Inland Empire LVP',
    metaDesc: 'Waterproof luxury vinyl plank installed across the Inland Empire. SPC and rigid-core LVP for kitchens, bathrooms, and pet households. Free estimates.',
    intro: '100% waterproof rigid-core LVP - for kitchens, bathrooms, and any room where water (or pets) might touch the floor.',
    image: '/images/luxury-vinyl-plank-living-room.webp',
    alt: 'Waterproof luxury vinyl plank flooring in a furnished living room',
    parentService: 'luxury-vinyl-plank',
    body: `Waterproof LVP is the single most-installed flooring in the Inland Empire today. Here\'s why and what to look for.

## What makes it truly waterproof

The key is the core construction. Stone Polymer Composite (SPC) and Wood Polymer Composite (WPC) cores are dimensionally stable when wet - they don\'t swell, warp, or delaminate.

## SPC vs WPC

- **SPC** - denser, harder, more impact-resistant. Better for high-traffic and commercial.
- **WPC** - softer underfoot, slightly warmer feel, often a touch quieter. Better for residential comfort.

Most quality residential LVP today is SPC with an attached cork or foam pad for comfort.

## Where it shines

- **Bathrooms** - full bathrooms with showers and tubs. Yes, the floor itself.
- **Kitchens** - dishwasher leaks, refrigerator condensation, dropped pots.
- **Laundry rooms** - washing machine overflow, sock drips.
- **Pet households** - accidents wipe up, no damage.
- **Mudrooms and entryways** - wet shoes and rainy days.

## What to ask about

- **Wear layer thickness in mils** (1/1000 inch). 12 mil is residential grade. 20+ mil is commercial. Pet households should target 20 mil.
- **Total plank thickness** - 5 mm minimum for residential rigid-core.
- **Edge treatment** - micro-beveled or square edge. Beveled looks more like real wood.
- **Pad attached** - yes; eliminates a separate underlayment step.

## Pricing

$5 - $9 per sq ft installed for quality waterproof LVP. Premium options with thicker wear layers, larger plank sizes, and embossed-in-register textures run higher.

[Bring waterproof LVP samples to my home](/free-estimate/).`,
    relatedGuides: ['spc-flooring', 'pet-friendly-flooring'],
  },
  {
    slug: 'spc-flooring',
    category: 'specialty',
    title: 'SPC Flooring (Stone Polymer Composite)',
    metaTitle: 'SPC Flooring Installation | Inland Empire',
    metaDesc: 'SPC stone polymer composite flooring installed across the Inland Empire. Hardest LVP core type, fully waterproof, commercial-rated. Free estimates.',
    intro: 'SPC - the densest, most stable LVP core type. For homes that demand commercial-grade durability.',
    image: '/images/luxury-vinyl-plank-styled-room.webp',
    alt: 'SPC stone polymer composite flooring in a styled Inland Empire room',
    parentService: 'luxury-vinyl-plank',
    body: `SPC stands for Stone Polymer Composite - a rigid LVP core made from limestone powder and stabilizers. It\'s the densest, most dimensionally stable LVP option.

## Why SPC

- **Hardest LVP core.** Resists dents from dropped objects better than WPC or older flexible LVP.
- **Most dimensionally stable.** Doesn\'t expand or contract with temperature swings - important in our climate.
- **Goes over imperfect subfloors** - minor lumps and bumps don\'t telegraph through.
- **Fully waterproof.** Same as other quality rigid-core LVP.

## When to choose SPC over WPC

- High-traffic households, kids, large dogs.
- Heavy furniture (pianos, large couches) that you want to roll across.
- Homes with marginal subfloor flatness.
- Commercial-feel-and-durability without commercial pricing.

## When WPC might be better

- Sensitive feet (older homeowners) - WPC is softer underfoot.
- Quieter underfoot priority - WPC has a slightly warmer acoustic profile.
- Tight budget - basic WPC sometimes runs slightly less than SPC.

Both are excellent. We bring both to every LVP estimate.

## Pricing

$5 - $9 per sq ft installed. Wear-layer thickness drives price more than core type.

[See SPC samples](/free-estimate/) at your free in-home estimate.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'pet-friendly-flooring'],
  },
  {
    slug: 'click-lock-vinyl-plank',
    category: 'specialty',
    title: 'Click-Lock Vinyl Plank Installation',
    metaTitle: 'Click-Lock Vinyl Plank | Floating LVP Installation',
    metaDesc: 'Click-lock vinyl plank installed across the Inland Empire. Floating floor, no glue, fast install over most existing flooring. Free estimates.',
    intro: 'Floating LVP that clicks together - fast install, no glue, can go over most existing flooring.',
    image: '/images/luxury-vinyl-plank-perspective.webp',
    alt: 'Click-lock vinyl plank flooring perspective view',
    parentService: 'luxury-vinyl-plank',
    body: `Click-lock LVP is the dominant install method for residential luxury vinyl plank today. Planks join via mechanical click-lock edges, floating over the subfloor without glue or nails.

## How it goes down

1. **Subfloor prep.** Clean, flat (within 3/16" over 10 ft), dry. Self-leveler for low spots.
2. **Underlayment** if not pad-attached. Most quality LVP today has the pad attached.
3. **Layout planning.** Random plank placement, expansion gap at every wall.
4. **Click and lay.** Each plank locks into the next via the precision edge profile.
5. **Trim and transitions.** Quarter-round, baseboards, transition strips at other flooring.

## Why click-lock

- **Fast.** Whole-house in 1 - 3 days.
- **Forgiving.** Floats over many imperfections that would telegraph through glue-down.
- **No off-gassing wait.** Walk on it the same day.
- **Removable.** If you need to access subfloor under a board, pull it up, fix, click back.
- **Goes over existing tile, vinyl, and laminate** in many cases - saves a demo day.

## When glue-down makes more sense

- Commercial spaces with rolling traffic.
- Very large open spaces (over 1,500 sq ft continuous) where movement could be visible.
- Wet areas with frequent standing water risk.
- Stairs (always glued).

[Free in-home LVP estimate](/free-estimate/) - we\'ll quote click-lock and glue-down side-by-side.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'spc-flooring'],
  },
  // ========== LAMINATE SPECIALTY ==========
  {
    slug: 'water-resistant-laminate',
    category: 'specialty',
    title: 'Water-Resistant Laminate Flooring',
    metaTitle: 'Water-Resistant Laminate Flooring | Inland Empire',
    metaDesc: 'Water-resistant laminate flooring installation in the Inland Empire. Modern cores handle splashes and spills. Free estimates.',
    intro: 'Modern laminate with water-resistant cores - handles spills and splashes that would have ruined older laminate.',
    image: '/images/laminate-living-space.webp',
    alt: 'Water-resistant laminate flooring in an Inland Empire living space',
    parentService: 'laminate-flooring',
    body: `Modern water-resistant laminate is a different product from the laminate of 10 years ago. Better cores, sealed edges, and finishes that handle real life.

## What "water-resistant" means

- **Surface water** (spills wiped within hours): no problem.
- **Splashes around sinks**: fine.
- **Standing water for hours**: not recommended - go LVP.
- **Full bathroom with shower**: not appropriate - go LVP or tile.

Water-resistant is real and meaningful, but it\'s not the same as fully waterproof.

## Modern laminate construction

- **HDF or compressed wood core** with water-resistant treatment.
- **Sealed edges** that resist water ingress at seams.
- **Wear-layer ratings** AC4 or AC5 for residential / light commercial use.
- **Click-lock edges** for floating install.

## Where laminate fits in 2026

- **Living, dining, bedrooms, hallways** - excellent.
- **Kitchens with careful cooks** - fine; LVP if dishwasher leaks worry you.
- **Powder rooms** - fine.
- **Full bathrooms or laundry** - skip; use LVP or tile.

## Cost

$3 - $7 per sq ft installed. Often the budget-friendly choice for whole-house installs in dry rooms.

[Free estimate with laminate samples](/free-estimate/).`,
    relatedGuides: ['ac-rated-laminate', 'laminate-vs-luxury-vinyl-plank'],
  },
  {
    slug: 'ac-rated-laminate',
    category: 'specialty',
    title: 'AC-Rated Laminate Flooring (AC3, AC4, AC5)',
    metaTitle: 'AC-Rated Laminate Flooring | AC4 vs AC5 Explained',
    metaDesc: 'AC ratings for laminate flooring explained. AC3, AC4, AC5 wear ratings - which to choose for your home or commercial space.',
    intro: 'AC ratings explained - what AC3, AC4, and AC5 actually mean for your floor\'s lifespan.',
    image: '/images/laminate-large-space.webp',
    alt: 'AC-rated commercial laminate flooring in a large Inland Empire interior',
    parentService: 'laminate-flooring',
    body: `AC ratings (Abrasion Class) measure laminate wear-layer durability - specifically resistance to abrasion, impact, stains, and burns. The higher the number, the tougher the floor. Here's what each rating means, what it costs, and which one is right for your home.

## AC rating comparison chart

| AC rating | Traffic class | Cost premium | Refinishable | Lifespan | Best for |
| --- | --- | --- | --- | --- | --- |
| **AC1** | Light residential | Cheapest | No | Short | Closets only (we don't install) |
| **AC2** | Moderate residential | Low | No | Short | Low-use bedrooms (we don't install) |
| **AC3** | Heavy residential / light commercial | Baseline | No | ~15 yrs | Casual, low-traffic single household |
| **AC4** | Heavy residential / commercial | +~$0.50 / sq ft over AC3 | No | 20 - 25 yrs | Family homes with kids & pets |
| **AC5** | Heavy commercial | Highest | No | 25+ yrs | Offices, retail, restaurants |

## Real-world cost ranges

- Installed laminate runs **$3 - $7 per sq ft** regardless of rating - the AC level is a small slice of that.
- Stepping from **AC3 to AC4 is usually under $0.50 per sq ft** at the material level - about $500 on a 1,000 sq ft job for a meaningful jump in lifespan.
- **AC5 commercial** laminate sits at the top of the range and is overkill for most homes.

## What AC ratings do NOT cover

- **Water resistance** - a completely separate spec. A high AC rating does not mean waterproof. See [water-resistant laminate](/flooring/water-resistant-laminate/).
- Realistic visuals, edge bevel, and texture quality.
- Underlayment quality (chosen separately).

## Best for your situation - the verdict

- **Casual, low-traffic single household:** AC3 minimum.
- **Family with kids and pets:** **AC4 minimum, no exceptions** - the small price bump pays for itself in lifespan.
- **Rental property:** AC4.
- **Commercial space:** AC5.

If you need both toughness *and* waterproofing (kitchens, baths, pet zones), compare laminate against vinyl in our [laminate vs LVP guide](/flooring/laminate-vs-luxury-vinyl-plank/) - and for the install itself, see our [laminate flooring installation service](/services/laminate-flooring/).

[Get a free in-home estimate](/free-estimate/) with AC4 samples brought to your home.`,
    relatedGuides: ['water-resistant-laminate', 'laminate-vs-luxury-vinyl-plank'],
    faqs: [
      { q: 'What AC rating do I need for a family home with pets?', a: 'AC4 minimum. AC4 is rated for heavy residential and light commercial traffic, which is exactly what a household with kids and pets puts a floor through. The step up from AC3 to AC4 usually costs under $0.50 per sq ft but adds years of lifespan, so for any professionally installed floor the math favors AC4.' },
      { q: 'What is the difference between AC4 and AC5 laminate?', a: 'AC4 is rated for heavy residential and light commercial use - the right choice for almost every home. AC5 is rated for heavy commercial traffic like restaurants, retail, and offices. AC5 costs more and is overkill in a residential setting; AC4 is plenty for family homes.' },
      { q: 'Does a higher AC rating mean the laminate is waterproof?', a: 'No. AC rating measures abrasion and impact durability only - it has nothing to do with water resistance. A high AC rating laminate can still be damaged by standing water. For wet rooms you need water-resistant laminate or, better, waterproof luxury vinyl plank.' },
      { q: 'Can AC-rated laminate be refinished?', a: 'No. No laminate, at any AC rating, can be sanded or refinished - the decorative wear layer is a printed image sealed at the factory. When the wear layer eventually fails the plank is replaced, which is why install cost matters more than refinishing with laminate.' },
      { q: 'How long does AC4 laminate last?', a: 'In a typical family home, quality AC4 laminate lasts about 20 - 25 years before the wear layer shows. Actual lifespan depends on traffic, whether shoes and pet nails are managed, and the underlayment used beneath it.' },
    ],
  },
  // ========== REFINISHING SPECIALTY ==========
  {
    slug: 'dustless-floor-refinishing',
    category: 'specialty',
    title: 'Dustless Hardwood Floor Refinishing',
    metaTitle: 'Dustless Hardwood Floor Refinishing | Inland Empire',
    metaDesc: 'Dust-contained hardwood floor refinishing in the Inland Empire. 95%+ less airborne dust than open sanding. Free estimates.',
    intro: 'Modern dust-contained sanding - 95%+ less airborne dust than the old way.',
    image: '/images/hardwood-floor-refinishing.webp',
    alt: 'Dustless hardwood floor refinishing in progress',
    parentService: 'hardwood-floor-refinishing',
    body: `"Dustless" is a marketing word. The reality: nothing is truly dust-free, but modern dust-containment systems capture 95%+ of airborne dust at the source. Compared to open sanding, the difference is night and day.

## How it works

Our drum and edge sanders connect to high-CFM HEPA vacuum systems via sealed hoses. As the sander cuts, dust is pulled into the vacuum the moment it\'s generated - before it has a chance to spread.

## What you actually experience

- **Light residual dust** on hard surfaces in adjacent rooms.
- **Far less dust on furniture** than the old way.
- **Air quality** in your home is dramatically better during and after.
- **Cleanup time** at the end of the job is shorter.

## What it doesn\'t eliminate

- Some fine dust always escapes - particularly during edge sanding in corners.
- Stain and finish chemical odors are unrelated to dust.
- Settled dust on horizontal surfaces in adjacent rooms (we wipe down at end of job).

## Worth the cost

Dust-contained systems cost more in equipment and consumables than open sanding. We don\'t charge separately - it\'s our standard process. Old-school open sanding contractors who sand without containment are increasingly rare and the dust difference is enormous.

## Other refinishing-related health considerations

- **Oil-based polyurethane** off-gasses for several days.
- **Water-based polyurethane** is much lower VOC, faster cure, milder smell. Our default for sensitive households.
- **Stain options** vary in VOC content - we discuss during estimate.

[Free refinishing estimate](/free-estimate/) with a walkthrough of our dust-contained process.`,
    relatedGuides: ['screen-and-recoat', 'sand-and-stain'],
  },
  {
    slug: 'screen-and-recoat',
    category: 'specialty',
    title: 'Screen and Recoat (Hardwood Refresh)',
    metaTitle: 'Screen and Recoat Hardwood Floors | Light Refinish',
    metaDesc: 'Screen and recoat hardwood floors in the Inland Empire - light refresh that adds years of life without full refinishing. Free estimates.',
    intro: 'Light refresh that adds years to your floor\'s finish without the cost or downtime of full refinishing.',
    image: '/images/hardwood-floor-refinishing.webp',
    alt: 'Screen and recoat hardwood floor refresh',
    parentService: 'hardwood-floor-refinishing',
    body: `Screen and recoat (sometimes called "buff and coat") is a light maintenance refinish - an abrasive screen lightly roughs the existing finish, then a fresh coat of polyurethane goes over the top.

## When it makes sense

- **Finish is dull but not scratched through to bare wood.**
- **Floor has been refinished within 5 - 10 years** and the finish is just tired.
- **You want to extend finish life without the cost of full refinishing.**
- **Pet households where the floor needs more frequent refresh than full refinish allows.**

## What it doesn\'t fix

- Scratches deep enough to expose bare wood.
- Stain damage.
- Color change requests.
- Cupping or board damage.
- Significant dents or gouges.

For any of those, a full refinish (sand-stain-seal) is the right move.

## Process

1. Vacuum and clean the floor thoroughly.
2. Light screen-sand with a buffer + screen pad.
3. Vacuum and tack-cloth.
4. Apply 1 - 2 coats of fresh polyurethane.
5. Walk-on after 24 hours; furniture after 5 days.

## Cost

$1.50 - $3 per sq ft. Roughly half to one-third the cost of full refinishing.

## Frequency

Most well-maintained hardwood floors benefit from screen-and-recoat every 5 - 8 years. It can extend the time between full refinishes by years and adds significant total floor life.

[Free assessment of your existing finish](/free-estimate/).`,
    relatedGuides: ['dustless-floor-refinishing', 'sand-and-stain'],
  },
  {
    slug: 'sand-and-stain',
    category: 'specialty',
    title: 'Full Sand, Stain & Seal (Hardwood Refinishing)',
    metaTitle: 'Sand and Stain Hardwood Floors | Full Refinishing',
    metaDesc: 'Full sand, stain, and seal hardwood refinishing across the Inland Empire. Custom stain matching, water-based or oil-based finishes. Free estimates.',
    intro: 'The full process - sand to bare wood, stain to your color, seal with durable polyurethane.',
    image: '/images/hardwood-floor-sander.webp',
    alt: 'Drum sander mid-process during a full hardwood refinishing job',
    parentService: 'hardwood-floor-refinishing',
    body: `Full refinishing takes a tired hardwood floor down to bare wood, applies stain to your chosen color, and seals it with multiple coats of polyurethane. The result: a floor that looks brand new - often better than new.

## Step-by-step

1. **Floor inspection.** Thickness check, board condition, repair list.
2. **Repairs and board replacement** before sanding starts.
3. **Coarse sanding** with a drum sander to remove old finish and surface damage.
4. **Medium sanding** to smooth.
5. **Fine sanding** to glass-smooth.
6. **Edge sanding** by hand for corners and edges the drum can\'t reach.
7. **Stain test patch** - 2x2 ft sample in your home with your wood, your light. You sign off before we proceed.
8. **Full stain application.**
9. **Sealer coat.**
10. **2 - 3 finish coats** with light screening between coats.
11. **Final inspection and walk-through.**

## Stain choices

- **Natural** (no stain) - clearcoat over bare wood. Lets the wood\'s natural color show.
- **Light** - soft tan, white-washed, beige tones. Modern.
- **Medium** - natural oak tones, cinnamon, light walnut. Classic.
- **Dark** - espresso, ebony, dark walnut. Dramatic.
- **Custom blends** - we can match a specific color from a sample you provide.

## Finish choices

- **Water-based polyurethane** - low VOC, fast cure, slightly cooler color. Default for sensitive households and modern aesthetics.
- **Oil-based polyurethane** - slightly warmer (amber) color, more depth, longer cure. Traditional.
- **Hard wax oil** - penetrating finish, more European feel, requires more maintenance.

## Timeline

- **Days 1 - 2:** sanding.
- **Days 2 - 3:** stain and first coats.
- **Days 3 - 5:** finish coats.
- **Walkable** after 24 hours from final coat.
- **Furniture back** after 5 - 7 days.
- **Area rugs** after 14 days.
- **Full cure** at 30 days.

## Cost

$3 - $7 per sq ft for full refinishing. Stain choice and finish type affect price slightly.

[Free in-home refinishing estimate](/free-estimate/).`,
    relatedGuides: ['dustless-floor-refinishing', 'screen-and-recoat'],
  },
  // ========== REPAIR SPECIALTY ==========
  {
    slug: 'water-damage-floor-repair',
    category: 'specialty',
    title: 'Water-Damaged Hardwood Floor Repair',
    metaTitle: 'Water-Damaged Hardwood Floor Repair | Inland Empire',
    metaDesc: 'Water-damaged hardwood floor repair across the Inland Empire. Board replacement, subfloor treatment, mold prevention. Fast response.',
    intro: 'Cupping, staining, lifting from water - repaired or replaced before mold sets in.',
    image: '/images/hardwood-staircase-installation.webp',
    alt: 'Water-damaged hardwood floor repair',
    parentService: 'floor-repair',
    body: `Water and hardwood don\'t mix. The faster you act after a leak, the more of your floor we can save.

## What we see most

- **Dishwasher leaks** - slow drips behind the appliance, damage spreading under cabinets.
- **Refrigerator water-line failure** - freezer ice-maker line slowly leaks, damages adjacent flooring.
- **Roof leaks** - water tracks down a wall and damages floor at the base.
- **Bathroom overflows** - toilet or tub water spreads to adjacent hardwood.
- **HVAC condensate** - overflow pan failure on attic units leaks through ceiling.

## The damage progression

- **Hour 0 - 4:** floor surface is wet but recoverable if dried fast.
- **Hour 4 - 24:** water has penetrated wood. Cupping likely.
- **Day 1 - 7:** discoloration and staining set in. Some recovers; some permanent.
- **Day 7+:** mold risk. Subfloor damage likely.

## What we do

1. **Assess damage extent.** How many boards? How deep? Is the subfloor wet?
2. **Identify and fix water source** if not already done.
3. **Dry the area aggressively** - fans, dehumidifier, moisture meters.
4. **Replace damaged boards** with matching species, grade, and stain.
5. **Treat subfloor** if needed - sometimes light remediation, sometimes section replacement.
6. **Refinish surrounding area** to blend repair with existing floor.

## What\'s usually salvageable

- **Surface staining** that hasn\'t penetrated deep - often refinishes out.
- **Light cupping** that flattens after thorough drying - often saved.
- **Localized damage** (a few boards) - replaced and refinished, blends in.

## What requires replacement

- **Severe cupping** that doesn\'t flatten after 14 days of drying.
- **Crowning** (board centers higher than edges).
- **Mold or rot in subfloor.**
- **Widespread damage** across multiple rooms.

[Call us for fast response](/free-estimate/) - every hour matters with water damage.`,
    relatedGuides: ['scratch-and-gouge-repair', 'squeak-fix'],
  },
  {
    slug: 'scratch-and-gouge-repair',
    category: 'specialty',
    title: 'Hardwood Scratch & Gouge Repair',
    metaTitle: 'Hardwood Scratch & Gouge Repair | Inland Empire',
    metaDesc: 'Professional hardwood scratch, dent, and gouge repair across the Inland Empire. Color-matched, refinished, invisible from across the room.',
    intro: 'Pet scratches, dropped objects, dragged furniture - repaired so the patch is invisible.',
    image: '/images/hardwood-staircase-installation.webp',
    alt: 'Hardwood scratch and gouge repair',
    parentService: 'floor-repair',
    body: `Most hardwood damage is fixable without replacing boards. Here\'s how the spectrum of repair works.

## Light surface scratches

- **Cause:** pet nails, dragged shoes, light furniture movement.
- **Fix:** finish-only repair. Lightly screen-sand, fill if needed, recoat the affected area or do a screen-and-recoat of the room. Invisible result.
- **Cost:** $200 - $500 for a small area.

## Medium scratches into the stain

- **Cause:** dropped tools, pet damage from a bigger animal, dragged appliance.
- **Fix:** color-matched filler, blended stain touch-up, finish coat. Requires skill but invisible result.
- **Cost:** $300 - $800 depending on area.

## Deep gouges into bare wood

- **Cause:** dropped sharp object, moved heavy furniture without pads.
- **Fix:** wood filler + custom-mixed stain to match the original wood color, then finish coat. Visible from up close; invisible from across the room.
- **Cost:** $400 - $1,000.

## Severe damage requiring board replacement

- **Cause:** chronic pet urine that\'s soaked through, fire damage, deep gouges that can\'t be filled.
- **Fix:** cut out damaged boards, weave in matching new boards, custom-stain to match, refinish surrounding area.
- **Cost:** $500 - $2,500+ depending on board count and matching difficulty.

## Whole-room consideration

If a room has more than 5 - 10 areas of damage, it\'s often more cost-effective to refinish the whole room than to do many spot repairs. The floor will look better and the per-sq-ft cost is similar.

## What we won\'t do

- Take on a spot repair if the surrounding finish is so worn that the patch will stand out. We\'ll recommend a screen-and-recoat or full refinish instead.
- Use mismatched filler that we know won\'t blend.
- Promise invisible results on damage that genuinely can\'t hide.

[Free in-home damage assessment](/free-estimate/) - we tell you the best path before quoting.`,
    relatedGuides: ['water-damage-floor-repair', 'squeak-fix'],
  },
  // ========== ROOM PAGES ==========
  {
    slug: 'kitchen-flooring',
    category: 'room',
    title: 'Kitchen Flooring',
    metaTitle: 'Kitchen Flooring Installation | Inland Empire',
    metaDesc: 'Kitchen flooring installation across the Inland Empire. Tile, LVP, hardwood - what works for your kitchen and family. Free estimates.',
    intro: 'Tile, LVP, hardwood - what fits your kitchen, your cooking style, and your family.',
    image: '/images/hardwood-modern-open-living.webp',
    alt: 'Wide-plank natural oak hardwood in a modern open-concept kitchen and living room',
    body: `Kitchens demand flooring that handles water, dropped pans, heat under appliances, and high traffic. Here\'s how the major options handle a real kitchen.

## Our recommendations

**Best overall: Luxury Vinyl Plank.** Fully waterproof, comfortable underfoot, easy to clean, forgiving with dropped pots, looks like wood.

**Best in formal kitchens: Engineered hardwood.** Beautiful, real wood feel. Workable in dry-style kitchens with careful cooks. Risky in family kitchens with frequent spills near a busy dishwasher.

**Best in heavy-cooking kitchens: Tile.** Bulletproof, lasts forever, fully waterproof. Cold underfoot, hard on glassware, hard on legs. Anti-fatigue mats at sink and stove are a must.

## What we see most in Inland Empire kitchens

- **2010s+ slab homes (Fontana, Ontario, Eastvale, newer Rancho):** LVP throughout main floor, including kitchen. Whole-house consistency.
- **Older slab homes (1980s - 2000s):** LVP or tile in kitchen, hardwood in living/dining.
- **Historic raised-foundation homes (Redlands, Riverside):** original hardwood or refinished oak. Sometimes paired with tile inset at sink.
- **Custom homes:** wide-plank engineered hardwood throughout, with rare exception.

## Things to avoid

- **High-gloss anything** in a busy kitchen - every smudge shows.
- **Hardwood directly under the dishwasher** - even careful homes get leaks.
- **Solid hardwood on slab kitchens** - engineered is more stable.
- **Cheap LVP** in a high-traffic kitchen - wear-layer thickness matters.

## Cost ranges

- LVP: $5 - $9 per sq ft installed
- Tile: $10 - $20 per sq ft installed
- Engineered hardwood: $9 - $16 per sq ft installed
- Solid hardwood: $10 - $16 per sq ft installed (raised foundations only)

[Free kitchen flooring estimate](/free-estimate/) with samples brought to your home.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'engineered-hardwood-flooring'],
  },
  {
    slug: 'bathroom-flooring',
    category: 'room',
    title: 'Bathroom Flooring',
    metaTitle: 'Bathroom Flooring Installation | Inland Empire',
    metaDesc: 'Bathroom flooring installation across the Inland Empire. Tile and waterproof LVP for full bathrooms. Free estimates.',
    intro: 'Bathrooms need fully waterproof flooring. Tile and waterproof LVP - and not much else.',
    image: '/images/luxury-vinyl-plank-flooring.webp',
    alt: 'Waterproof flooring for an Inland Empire bathroom',
    body: `Bathrooms are wet rooms. Standing water on the floor is a daily reality, not an exception. Only two flooring types belong here: tile and waterproof LVP.

## Tile

The traditional and bulletproof choice. Porcelain or natural stone. Lasts decades, fully waterproof, withstands shower splash and tub overflow.

- **Pros:** lifetime durability, fully waterproof, scratch-proof, classic look.
- **Cons:** cold underfoot, hard on dropped items, grout requires periodic sealing.
- **Cost:** $10 - $20 per sq ft installed for porcelain. More for natural stone.

## Waterproof LVP

The modern alternative. Quality SPC or rigid-core LVP is fully waterproof and warmer underfoot than tile.

- **Pros:** waterproof, warm and quiet underfoot, easy install over existing flooring, lower cost.
- **Cons:** can show wear in 15 - 20 years vs tile\'s lifetime; less prestigious than tile in upper-tier homes.
- **Cost:** $5 - $9 per sq ft installed.

## What we don\'t install in full bathrooms

- **Hardwood** - water exposure makes it a poor choice. We have done it for clients who insist; we always advise against.
- **Standard laminate** - only water-resistant, not waterproof. Bathroom water exposure exceeds its tolerance.
- **Carpet** - moisture trap, mildew risk, code issues in some areas.

## Powder rooms (no shower)

Different rules. Powder rooms have minimal water exposure (sink only). LVP, water-resistant laminate, or even hardwood can work depending on aesthetic continuity with adjacent rooms.

## Common pairings

- **Tile in master bath + LVP in secondary baths** - high-end finish where it\'s seen, practical elsewhere.
- **LVP throughout** - modern look, easier maintenance, color-matched to main living areas.
- **Tile on floor + tile on shower walls** - classic and integrated.

[Free bathroom flooring estimate](/free-estimate/) with waterproof samples.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'spc-flooring'],
  },
  {
    slug: 'bedroom-flooring',
    category: 'room',
    title: 'Bedroom Flooring',
    metaTitle: 'Bedroom Flooring Installation | Inland Empire',
    metaDesc: 'Bedroom flooring installation across the Inland Empire. Hardwood, LVP, laminate - quiet, comfortable, and stylish. Free estimates.',
    intro: 'Bedrooms have low water risk and moderate traffic. Hardwood, LVP, and laminate all work - pick by aesthetic and budget.',
    image: '/images/hardwood-flooring-installation.webp',
    alt: 'Hardwood flooring in an Inland Empire bedroom',
    body: `Bedrooms are the easiest rooms to floor - low traffic, no water exposure, minimal heat load. Almost any flooring works. The choice is mostly about aesthetics, budget, and continuity with the rest of the home.

## Top choices

**Hardwood** - premium feel, looks great with any furniture style, refinishable. Best paired with hardwood elsewhere on the floor for visual continuity.

**LVP** - practical, comfortable underfoot with attached pad, easy to clean if pets sleep with you, budget-friendly.

**Laminate** - same upsides as LVP, slightly less premium feel, slightly lower cost.

**Carpet** - yes, still the right choice in some bedrooms. Master bedrooms with no pet access, kids\' rooms, guest rooms. Sound-absorbing, soft underfoot, warm. Just no longer dominant.

## What to consider

- **Whole-floor consistency.** Bedrooms should usually match adjacent hallway flooring. Mismatched flooring at bedroom doorways looks off.
- **Pet access.** If pets sleep on the bed, LVP wins for accident-resistance.
- **Sound concerns.** LVP and laminate can be a touch louder than carpet. Quality underlayment matters.
- **Allergies.** Hard surface flooring is the universal recommendation for allergy-sensitive sleepers. Carpet traps allergens.

## What we install most

- **Whole-house hardwood or wide-plank engineered** - most bedrooms in upper-tier Inland Empire homes today.
- **LVP throughout** - most family homes in mid-tier.
- **Carpet remaining only in formal master bedrooms** in some traditional homes.

[Free bedroom or whole-house flooring estimate](/free-estimate/).`,
    relatedGuides: ['solid-hardwood-flooring', 'engineered-hardwood-flooring'],
  },
  {
    slug: 'basement-flooring',
    category: 'room',
    title: 'Basement Flooring',
    metaTitle: 'Basement Flooring | Inland Empire',
    metaDesc: 'Basement flooring options for the rare Inland Empire homes that have them. Engineered hardwood, LVP, tile - what survives below grade.',
    intro: 'Basements are rare in the Inland Empire - but if you have one, the flooring rules are different.',
    image: '/images/luxury-vinyl-plank-flooring.webp',
    alt: 'Basement flooring options',
    body: `Basements are uncommon in the Inland Empire - most homes are slab on grade with no below-grade space. But for the homes that do have basements (sometimes referred to as "lower levels" in homes built into hillsides), the flooring options narrow significantly.

## What works below grade

**Luxury Vinyl Plank.** Best basement floor today. Fully waterproof, dimensionally stable, comfortable underfoot, easy install over slab.

**Tile.** Bulletproof. Cold and hard. Lasts forever.

**Engineered hardwood with proper moisture management.** Possible but requires moisture barrier and ongoing humidity control. Generally we\'d steer toward LVP.

**Sealed and stained concrete.** Increasingly popular for utility-style basements. Cost-effective and waterproof.

## What never works below grade

- **Solid hardwood.** Not appropriate for below-grade applications.
- **Standard laminate** - moisture sensitivity disqualifies it.
- **Carpet without major moisture controls** - mold risk too high.

## Why moisture matters more in basements

Even in dry Southern California, slab basements can wick moisture from the surrounding soil. A vapor barrier is essential. Many products require dimple-mat underlayments or specific moisture management systems for warranty coverage.

## What to ask before installing in a basement

- Has the slab been moisture-tested?
- Is the floor product rated for below-grade installation?
- Does the warranty cover below-grade use?
- Is there a vapor barrier in the install plan?

[Free basement flooring assessment](/free-estimate/) - we\'ll moisture-test and recommend the right product.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'engineered-hardwood-flooring'],
  },
  {
    slug: 'commercial-flooring',
    category: 'room',
    title: 'Commercial Flooring',
    metaTitle: 'Commercial Flooring Installation | Inland Empire',
    metaDesc: 'Commercial flooring installation across the Inland Empire. Offices, retail, restaurants - durable LVP, laminate, and hardwood. Free estimates.',
    intro: 'Commercial flooring for offices, retail, restaurants, and small commercial spaces across the Inland Empire.',
    image: '/images/hero.webp',
    alt: 'Wide-angle view of a large commercial space with wood-look flooring installed by Monteros',
    body: `Commercial flooring requires different priorities than residential - heavy traffic, abrasion resistance, fast install windows, and clean aesthetics that hold up to thousands of footsteps a day.

![Commercial wood floor refinishing in a gymnasium-scale Inland Empire space](/images/commercial-flooring-installation.webp)

## Our commercial work

- **Small office spaces** (under 5,000 sq ft).
- **Retail boutiques** and showrooms.
- **Restaurants** (front of house) and small cafes.
- **Medical and dental practices** - Loma Linda area especially.
- **Salons and spas.**
- **Tenant improvements** for new leases.

## Best commercial flooring options

**1. Commercial-grade LVP (SPC, 20+ mil wear layer).** Top recommendation. Waterproof, scratch-resistant, easy to clean, fast install, attractive. Glue-down or click-lock depending on space.

**2. AC5 commercial laminate.** Cost-effective for offices and back-of-house. Realistic wood looks.

**3. Hardwood (engineered, 4 - 6 mm wear layer).** Upper-tier showrooms, boutique retail, designer offices. Refinishable, premium feel.

**4. Polished concrete.** Industrial chic look, lowest long-term maintenance, requires existing slab in good condition.

## What we don\'t recommend for commercial

- **Solid hardwood** - refinishability rarely justifies the higher cost vs engineered for commercial use.
- **Residential-grade LVP** - wear layer too thin for commercial traffic.
- **Carpet** - only for sound-sensitive offices or hospitality where it fits the aesthetic.

## Install windows

Most commercial install timelines are tight. We work nights and weekends when needed to minimize business disruption. Click-lock LVP installs especially fast - large open spaces in 2 - 3 days for thousands of square feet.

## Considerations specific to commercial

- **ADA compliance.** Transitions and slip resistance matter.
- **Local building department permits** - we handle.
- **Material warranty terms** for commercial use vary by product.
- **Lease compliance** - landlord approval often required for floor changes.

[Free commercial flooring quote](/free-estimate/) - site walks Monday through Friday.`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'ac-rated-laminate'],
  },
  // ========== COMPARISON PAGES ==========
  {
    slug: 'hardwood-vs-luxury-vinyl-plank',
    category: 'comparison',
    title: 'Hardwood vs Luxury Vinyl Plank',
    metaTitle: 'Hardwood vs LVP: Honest Comparison from a Pro',
    metaDesc: 'Hardwood vs luxury vinyl plank - cost, water resistance, durability, resale value, pets. Honest comparison from a 20+ year Inland Empire contractor.',
    intro: 'Real wood vs the most realistic alternative. Where each wins, where each loses.',
    image: '/images/laminate-vs-luxury-vinyl-comparison.webp',
    alt: 'Hardwood and luxury vinyl plank flooring side by side',
    body: `The most-asked comparison in residential flooring. Here\'s the honest breakdown.

## Cost

- **Hardwood:** $8 - $16 per sq ft installed.
- **LVP:** $4 - $9 per sq ft installed.
- **Winner:** LVP for budget; depends on priorities at higher tiers.

## Water resistance

- **Hardwood:** poor. Spills wiped quickly are fine; standing water damages.
- **LVP:** fully waterproof. Spills, accidents, dishwasher leaks all fine.
- **Winner:** LVP, decisively.

## Durability against scratches

- **Hardwood:** scratches from pet nails, furniture, dropped objects. Refinishable.
- **LVP:** wear-layer-resistant scratches. Quality LVP handles pet nails well.
- **Winner:** LVP for resistance; hardwood for recovery (refinishing).

## Lifespan

- **Hardwood:** 75 - 100+ years with refinishing along the way.
- **LVP:** 15 - 30 years residential.
- **Winner:** Hardwood, by a lot.

## Resale value

- **Hardwood:** premium signal in real estate listings, especially in mid-to-upper price points.
- **LVP:** acceptable, not premium. Doesn\'t hurt; doesn\'t help significantly.
- **Winner:** Hardwood in $500K+ markets.

## Look and feel

- **Hardwood:** real wood - texture, warmth, feel underfoot, character that develops over years.
- **LVP:** good imitation; modern premium LVP is increasingly close. Still recognizable as not real wood up close.
- **Winner:** Hardwood, but the gap has narrowed significantly.

## Install time

- **Hardwood:** 3 - 7 days including acclimation.
- **LVP:** 1 - 3 days, no cure time.
- **Winner:** LVP.

## When to choose hardwood

- Long-term home (10+ years).
- Raised foundation or willing to do engineered on slab.
- Mid-to-upper tier home where resale matters.
- No major water exposure.
- Aesthetic priority over practicality.

## When to choose LVP

- Pet households, especially big dogs.
- Wet rooms (kitchens, bathrooms, laundry).
- Rental properties.
- Budget-priority installs.
- Slab homes where engineered hardwood would also work but LVP is simpler.

## Mixed approach (most common today)

Hardwood (or engineered) in living/dining/bedrooms + LVP in kitchens/baths/laundry. Color-matched. Best of both.

[Free in-home estimate with both samples](/free-estimate/).`,
    relatedGuides: ['hardwood-vs-laminate', 'engineered-vs-solid-hardwood'],
  },
  {
    slug: 'hardwood-vs-laminate',
    category: 'comparison',
    title: 'Hardwood vs Laminate Flooring',
    metaTitle: 'Hardwood vs Laminate: Honest Comparison',
    metaDesc: 'Hardwood vs laminate flooring - cost, durability, refinishability, look, water resistance. Honest comparison from a pro contractor.',
    intro: 'Real wood vs printed wood. Different price tier, different lifespan - both have a place.',
    image: '/images/laminate-flooring.webp',
    alt: 'Hardwood and laminate flooring comparison',
    body: `Hardwood and laminate occupy different price and quality tiers, but the gap in looks has narrowed enough that the choice now comes down to budget, lifespan, and where you're installing. Here's the honest, side-by-side breakdown from 20+ years installing both across the Inland Empire.

## Hardwood vs laminate at a glance

| Feature | Hardwood | Laminate |
| --- | --- | --- |
| **Cost (installed)** | $8 - $16 / sq ft | $3 - $7 / sq ft |
| **Waterproof** | No (poor) | Water-*resistant* only |
| **Durability** | Dents/scratches, but refinishable | AC4 / AC5 wear layer, very scratch-tough |
| **Refinishable** | Yes - 4 - 7x (solid), 2 - 4x (engineered) | No - replaced when worn |
| **Comfort underfoot** | Warm, solid, premium | Can feel hard/hollow without good underlayment |
| **Lifespan** | 75 - 100+ years | 15 - 25 years |
| **Best for** | Long-term homes, resale, dry living areas | Budgets, rentals, dry rooms, short-to-mid holds |

## Real-world cost ranges in the Inland Empire

- **Laminate:** $3 - $7 per sq ft installed. A 1,000 sq ft project typically lands around $3,000 - $7,000.
- **Hardwood:** $8 - $16 per sq ft installed (red oak at the low end, wide-plank white oak and European oak at the top). The same 1,000 sq ft runs roughly $8,000 - $16,000.
- **Bottom line:** laminate is roughly half the up-front cost - but hardwood's refinishability means it can outlast 3 - 4 laminate floors, which changes the lifetime math.

## Where hardwood wins

- **Lifespan & refinishing.** Sand it back to new every 7 - 10 years - see our [full sand, stain & seal](/flooring/sand-and-stain/) process. Laminate can't be refinished.
- **Resale value.** "Real hardwood throughout" is a genuine listing remark in mid-to-upper Inland Empire markets.
- **Look and feel.** Real wood texture and warmth underfoot that printed laminate still can't fully match up close.

## Where laminate wins

- **Up-front price.** Roughly half the installed cost.
- **Scratch resistance.** A good [AC4 or AC5 laminate](/flooring/ac-rated-laminate/) shrugs off pet nails and dragged chairs better than a soft natural finish.
- **Speed & simplicity.** Floating click-lock install over most existing floors, walk on it the same day.

## Best for your situation - the verdict

- **Choose hardwood** if you're in the home long-term (10+ years), care about resale, and you're flooring dry living, dining, and bedrooms.
- **Choose laminate** if budget is the deciding factor, the home is a 5 - 10 year hold or a rental, and you're sticking to dry rooms.
- **Strongly consider [luxury vinyl plank](/services/luxury-vinyl-plank/) instead** if any room touches water or you have pets. At a similar price to laminate, LVP is fully waterproof - see our [laminate vs LVP comparison](/flooring/laminate-vs-luxury-vinyl-plank/). For wet rooms, neither hardwood nor laminate belongs.

Ready to compare in person? We bring [hardwood](/services/hardwood-flooring-installation/), [laminate](/services/laminate-flooring/), and LVP samples to your home. [Get a free in-home estimate](/free-estimate/).`,
    relatedGuides: ['laminate-vs-luxury-vinyl-plank', 'hardwood-vs-luxury-vinyl-plank'],
    faqs: [
      { q: 'Is hardwood or laminate cheaper to install?', a: 'Laminate is cheaper up front - $3 - $7 per sq ft installed versus $8 - $16 for hardwood, roughly half the cost. But hardwood can be refinished 4 - 7 times and last 75+ years, so over the life of the home it can be the better value. For a 1,000 sq ft project, expect about $3,000 - $7,000 for laminate and $8,000 - $16,000 for hardwood.' },
      { q: 'Can you tell laminate from real hardwood?', a: 'Up close, usually yes - laminate is a photographic wear layer over a core, so it lacks the depth, texture, and warmth of real wood underfoot. From across a room, modern high-end laminate is convincing. The biggest tells are the repeating grain pattern and a slightly hollow sound without quality underlayment.' },
      { q: 'Which lasts longer, hardwood or laminate?', a: 'Hardwood, by a wide margin. Solid hardwood lasts 75 - 100+ years because it can be sanded and refinished 4 - 7 times. Laminate cannot be refinished and is replaced when the wear layer fails, typically at 15 - 25 years in a residential home.' },
      { q: 'Is laminate or hardwood better for kitchens and bathrooms?', a: 'Neither is ideal for wet rooms. Laminate is only water-resistant and hardwood is damaged by standing water. For kitchens, full bathrooms, and laundry rooms we recommend waterproof luxury vinyl plank or tile instead.' },
      { q: 'Does laminate hurt resale value compared to hardwood?', a: 'In mid-to-upper Inland Empire price points, real hardwood is a positive listing feature and laminate is neutral to slightly negative. In budget and mid-tier homes, quality laminate is widely accepted and won\'t hurt resale.' },
    ],
  },
  {
    slug: 'laminate-vs-luxury-vinyl-plank',
    category: 'comparison',
    title: 'Laminate vs Luxury Vinyl Plank',
    metaTitle: 'Laminate vs LVP: Which Is Better in 2026?',
    metaDesc: 'Laminate vs luxury vinyl plank - cost, water resistance, durability, look. Honest comparison from a 20+ year Inland Empire flooring contractor.',
    intro: 'Two budget-to-mid-tier options at similar price points. The differences matter.',
    image: '/images/laminate-vs-luxury-vinyl-comparison.webp',
    alt: 'Laminate and luxury vinyl plank side by side',
    body: `Laminate and luxury vinyl plank (LVP) look similar from a distance and often cost similar amounts. Up close they're different products with different best-uses. Here's the honest comparison so you can pick the right one the first time.

## Laminate vs LVP at a glance

| Feature | Laminate | Luxury Vinyl Plank (LVP) |
| --- | --- | --- |
| **Cost (installed)** | $3 - $7 / sq ft | $4 - $9 / sq ft |
| **Waterproof** | Water-*resistant* only | 100% waterproof |
| **Durability** | AC4 / AC5 wear rating | Wear layer in mils (12 mil res, 20+ mil pet/commercial) |
| **Refinishable** | No | No |
| **Comfort underfoot** | Harder, closer to tile | Softer, slight give, warmer |
| **Lifespan** | 15 - 25 years | 15 - 30 years |
| **Best for** | Tight budgets, strictly dry rooms | Wet rooms, pets, whole-house consistency |

## Real-world cost ranges in the Inland Empire

- **Laminate:** $3 - $7 per sq ft installed - usually the lowest-cost wood-look option.
- **LVP:** $4 - $9 per sq ft installed. The premium over laminate is often only $0.50 - $1.50 per sq ft once you compare similar quality tiers.
- **On a 1,000 sq ft job:** roughly $3,000 - $7,000 for laminate vs $4,000 - $9,000 for LVP. The waterproof upgrade is usually a small slice of the total budget.

## Where laminate wins

- **Lowest up-front price** at the budget end.
- **Slightly firmer, "wood-solid" feel** that some homeowners prefer.
- A good [AC4 or AC5 wear rating](/flooring/ac-rated-laminate/) is genuinely tough against scratches.

## Where LVP wins

- **Fully waterproof.** Kitchens, bathrooms, laundry, mudrooms - see [what makes LVP waterproof](/flooring/waterproof-luxury-vinyl-plank/). Laminate is only [water-resistant](/flooring/water-resistant-laminate/).
- **Pets.** Accidents wipe up with zero damage; quality wear layers resist claws.
- **Comfort & quiet.** Attached cork/foam pad makes LVP softer and quieter underfoot.

## Best for your situation - the verdict

- **Choose laminate** only when the budget truly won't stretch to LVP, the rooms are strictly dry (bedrooms, formal living), or it's a cost-driven rental.
- **Choose LVP** for any home with wet rooms, pets, kids, or a need for whole-house consistency where part of the floor will see water. This is our default recommendation in 2026 - the price gap is small and the waterproof advantage is real.

Want to feel the difference? We bring [laminate](/services/laminate-flooring/) and [luxury vinyl plank](/services/luxury-vinyl-plank/) samples side-by-side. [Book a free in-home estimate](/free-estimate/).`,
    relatedGuides: ['waterproof-luxury-vinyl-plank', 'water-resistant-laminate', 'ac-rated-laminate'],
    faqs: [
      { q: 'Is LVP more expensive than laminate?', a: 'Slightly. Laminate runs $3 - $7 per sq ft installed and LVP runs $4 - $9 per sq ft. At comparable quality tiers the difference is often only $0.50 - $1.50 per sq ft - a small part of a whole-house budget, and usually worth it for the waterproof upgrade.' },
      { q: 'Is laminate or vinyl plank better for pets?', a: 'LVP, clearly. It is fully waterproof so accidents wipe up with no damage, and quality wear layers (20 mil for pet households) resist claw scratches. Laminate is only water-resistant, so accidents need fast cleanup and standing liquid can damage the core.' },
      { q: 'Can laminate or LVP be used in a bathroom?', a: 'Only LVP. Quality SPC or rigid-core LVP is fully waterproof and appropriate for full bathrooms, kitchens, and laundry rooms. Standard laminate is water-resistant only and should be kept to dry rooms or powder rooms.' },
      { q: 'Which is more comfortable to walk on?', a: 'LVP. With its attached cork or foam pad it has a slight give and a warmer, quieter feel underfoot. Laminate is firmer and closer to tile in feel, which some people prefer but most find less comfortable for long standing.' },
      { q: 'Do laminate or LVP add resale value?', a: 'Both are considered neutral, practical flooring - acceptable in mid and budget-tier homes and not a negative. Neither carries the resale premium of real hardwood, but LVP\'s waterproof durability is an easy selling point for family buyers.' },
    ],
  },
  {
    slug: 'engineered-vs-solid-hardwood',
    category: 'comparison',
    title: 'Engineered vs Solid Hardwood',
    metaTitle: 'Engineered vs Solid Hardwood: Honest Comparison',
    metaDesc: 'Engineered vs solid hardwood - construction, refinishability, subfloor compatibility, lifespan. Honest comparison from an Inland Empire contractor.',
    intro: 'Both are real wood. The difference is what\'s under the wear layer.',
    image: '/images/hardwood-flooring-installation.webp',
    alt: 'Engineered and solid hardwood comparison',
    body: `Both engineered and solid are real hardwood. Same wood, same look, same finish. The difference is structural - and it matters.

## Construction

- **Solid:** one piece of hardwood, 3/4" thick, tongue-and-groove.
- **Engineered:** wear layer of real hardwood (1 - 6 mm) on a multi-ply plywood core. Total thickness 1/2" - 5/8".

## Refinishability

- **Solid:** 4 - 7 full refinishes possible over the floor\'s lifetime.
- **Engineered with 4 - 6 mm wear layer:** 2 - 4 refinishes possible.
- **Engineered with 1 - 2 mm wear layer:** cannot be refinished; replaced at end of life.

## Subfloor compatibility

- **Solid:** nail-down to plywood subfloor only. Cannot install over slab without significant prep.
- **Engineered:** floats, glues down, or nails. Works over slab - the dominant choice for post-1990 Inland Empire homes.

## Plank widths

- **Solid:** stable up to about 4" - 5". Wider widths are prone to cupping in our climate.
- **Engineered:** stable at 6" - 9" wide planks. The reason wide-plank floors are almost always engineered.

## Cost

- **Solid:** $9 - $16 per sq ft installed.
- **Engineered:** $9 - $18 per sq ft installed (wider range due to wear-layer variation).
- **Winner:** Comparable at similar quality tiers.

## Lifespan

- **Solid:** 75 - 100+ years with refinishing.
- **Engineered (premium):** 30 - 50 years with refinishing.
- **Engineered (budget):** 15 - 20 years.

## Climate stability in the Inland Empire

- **Solid:** more sensitive to humidity swings. Requires whole-house humidifier and tight humidity control.
- **Engineered:** plywood core resists movement. More forgiving of humidity variation.

## When to choose solid

- Raised-foundation home.
- Long-term ownership (decades).
- Aesthetic priority on traditional 2-1/4" - 5" plank widths.
- Historic home where solid is appropriate.

## When to choose engineered

- Slab subfloor (most newer Inland Empire homes).
- Want wider planks (5"+).
- Variable humidity rooms.
- Below-grade application.

## What we install most

- **Older raised-foundation homes:** solid hardwood, refinish or new.
- **Newer slab homes:** wide-plank engineered hardwood.
- **Custom and upper-tier homes:** wide-plank European oak engineered.

[Free in-home estimate](/free-estimate/) with both solid and engineered samples.`,
    relatedGuides: ['solid-hardwood-flooring', 'engineered-hardwood-flooring'],
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
