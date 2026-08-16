// ---------------------------------------------------------------------------
// HigherMindAI - multi-city location system
// tier: "home" (verified pin, GBP embed) | "turf" (local/adjacent) | "served"
//
// WHO THESE PAGES ARE FOR. The buyer is the property management principal, and
// the page's working job is sales collateral: he searches his own market to see
// where his firm sits, finds this, and reads an argument about his city written
// by somebody who clearly knows it.
//
// These pages do NOT chase "property management company [city]". That SERP
// belongs to property management firms, and the traffic on it is owners looking
// for a manager - worthless here. The copy discusses that term because it is the
// term I rank a CLIENT on and the term the Rank Lock is measured on. Ranking for
// it myself would be both impossible and pointless.
//
// Honesty rules: never claim a local address I do not have; non-home pages are
// framed as "I rank YOUR [city] firm". Every city carries distinct copy.
// No client is ever named.
//
// ---------------------------------------------------------------------------
// AUGUST 2026 - THE THIN-COPY FIX. READ BEFORE ADDING A CITY.
//
// These pages previously carried ~140 words of per-city prose against ~600
// words of template. Two of the four FAQ answers were byte-identical on all ten
// pages, and the other two were shared across whole tiers. That is the pattern
// Google names as a doorway page - "swapping out one word on a page" - and it
// also failed the standard the Territory product sells to clients.
//
// The rule now: SIX distinct prose fields per city, and no rendered block on
// LocationPage may be template text with a city name interpolated into it.
// If a new city cannot carry six genuinely different paragraphs - a real reason
// the market differs, not a synonym for "competitive" - it does not get a page.
// Put it in the coverage list instead.
// ---------------------------------------------------------------------------
import { LOCALITY, REGION } from './site';

export type Tier = 'home' | 'turf' | 'served';

export interface City {
  slug: string;
  city: string;
  region: 'ON' | 'NB';
  geo: [number, number];
  tier: Tier;
  group: string;
  nearby: string[];
  sub: string;
  mapH2: string;
  mapPara: string;
  compNote: string;
  /** Tile 02 - what owners in THIS city actually type. Must be city-specific. */
  termNote: string;
  /** Tile 03 - the AI answer layer, as it behaves in THIS market. */
  answerNote: string;
  /** FAQ 1 - "do you only work with firms in X". City-specific, not tier-specific. */
  q1: string;
  /** FAQ 2 - "how is ranking in X different". City-specific, not tier-specific. */
  q2: string;
}

export const REGION_FULL: Record<string, string> = {
  ON: 'Ontario',
  NB: 'New Brunswick',
};

export const CITY_GROUPS = [
  'Headwaters',
  'Southwestern Ontario',
  'Greater Toronto Area',
  'Atlantic Canada',
];

export const CITIES: City[] = [
  {
    slug: 'erin', city: 'Erin', region: 'ON', geo: [43.7834, -80.0689], tier: 'home', group: 'Headwaters',
    nearby: ['Erin', 'Hillsburgh', 'Guelph', 'Orangeville'],
    sub: "Erin is home base. I run the same ranking engine on property management firms here that I run across Canada - the profile rebuilt, every service named the way owners search for it, and the position held to the Rank Lock. Small market, real proximity weight, home turf I know cold.",
    mapH2: "Right here in Erin.",
    mapPara: "I am based in Erin, in Wellington County and the wider Headwaters, minutes from Guelph and Orangeville. This is where my own Google Business Profile lives, run on the same clock and the same levers every client gets. In a market this size proximity carries real weight, which is why the build is engineered to the town rather than spread thin across a region.",
    compNote: "A small market where proximity and a complete, active, well-reviewed profile decide most of the result. Owner enquiry volume is modest, but so is the field - and every lever that matters here is one I control directly.",
    termNote: "Erin searches are low volume and very high intent - an owner typing \u201cproperty management Erin Ontario\u201d has a specific unit and a specific problem. The whole result set fits on one screen, so there is no second page to be consoled by. I pin the build to the town term and the Hillsburgh and Ballinafad spill around it rather than chasing Wellington County as a whole.",
    answerNote: "The citation base across Wellington County is thin - very few management firms here are listed properly anywhere beyond Google. That is an advantage rather than a problem: when an owner asks an AI who manages rental property near Erin, there is very little for it to draw on, and a complete, consistently cited profile becomes the answer almost by default.",
    q1: "No. Erin is home base rather than my only market - I work property management firms across Canada and into the United States from here. What Erin gets is the thing no other page can claim honestly: my own Google Business Profile is in this town, run on the same levers I would run on yours.",
    q2: "Scale changes the whole shape of it. In a market this size the risk is not being outranked, it is being invisible - there are few enough firms that an incomplete profile simply does not appear rather than appearing low. Proximity carries unusual weight, so the build is engineered to Erin itself instead of being spread across the county.",
  },
  {
    slug: 'orangeville', city: 'Orangeville', region: 'ON', geo: [43.9190, -80.0944], tier: 'turf', group: 'Headwaters',
    nearby: ['Orangeville', 'Mono', 'Shelburne', 'Caledon'],
    sub: "Orangeville is the seat of Dufferin County and the hub of the Headwaters, right next door to home base. Steady commuter-belt growth means a steady supply of investor-owners with a unit to hand over. I rank Orangeville property management firms into the top three and hold them there.",
    mapH2: "The hub of the Headwaters.",
    mapPara: "Orangeville sits at the centre of Dufferin County, anchored by its Broadway main street and years of commuter-belt growth. That growth is the point: single-family rentals and small multi-unit buildings owned by people who live somewhere else and do not want to manage them. It is home turf, and I work firms across Orangeville, Mono and Shelburne the same way I work my own profile.",
    compNote: "A mid-size market with strong local intent and a beatable field. The firm that wins the pack is the one with the most complete, most active, best-reviewed profile, which is the entire job.",
    termNote: "Orangeville has a naming problem worth money. Owners search the town, but a large share also search Dufferin County or the neighbouring towns - Mono, Shelburne, Grand Valley - because that is how people here describe where a property sits. A build pinned only to the town term gives away the half of the volume that arrives under a county or neighbour name.",
    answerNote: "A lot of Orangeville rental stock is owned by people who commute to Toronto, which means the research happens on a phone in the evening, off-site, increasingly through an AI assistant rather than a map. Those answers are assembled from citations and reviews, not proximity - so the directory and review work matters more here than the pin does.",
    q1: "No. Orangeville is home turf - I am fifteen minutes down the road in Erin - but I work firms across Canada and into the United States. What being next door buys you is that I know the field here by name and can tell you on the first call whether the position is winnable, without going away to research it.",
    q2: "The pack here is decided inside a tight radius around Broadway and the downtown core, which is unusual - in a bigger market the radius is wider and proximity matters less. It means a firm on the wrong side of town has to make up ground with review velocity and citation depth, and it means a properly built profile in the core is very hard to dislodge.",
  },
  {
    slug: 'bolton', city: 'Bolton', region: 'ON', geo: [43.8763, -79.7330], tier: 'turf', group: 'Headwaters',
    nearby: ['Bolton', 'Caledon', 'Caledon East', 'Palgrave'],
    sub: "Bolton sits in Caledon where the GTA meets the countryside, and Caledon is squarely in my home service area. It is a growth market full of investor-owned rentals and newer condominium corporations, with a field of small management firms that has largely not caught on to local search yet.",
    mapH2: "Bolton and Caledon.",
    mapPara: "Bolton is the largest community in Caledon, tucked into the Humber valley on the edge of the GTA. Caledon is part of my home service area, so this is familiar ground. Fast residential growth means a widening pool of owners looking for a manager, and the local field is still small enough that a properly built profile takes the pack rather than fighting for it.",
    compNote: "A growth market where much of the field has not taken local search seriously yet. That gap is the opportunity: get the profile right before your competitors work out that it matters.",
    termNote: "Bolton is one market with two names, and that is the whole game here. Some owners search Bolton, some search Caledon, and a firm holding only one of them is invisible to half its market. There is a third layer under it - Caledon East, Palgrave, Mayfield - that carries real volume because residents identify with the hamlet rather than the town. The build has to hold all three tiers or it leaks.",
    answerNote: "Bolton confuses machines the way it confuses people: it is a community inside the Town of Caledon inside the Region of Peel, and an AI asked who manages property in Bolton frequently returns Brampton and Vaughan firms because the service area was never mapped properly. Getting the geography stated correctly is worth more here than another ten reviews.",
    q1: "No, and Bolton is not a market I am guessing at - Caledon is inside my own service area, so this is ground I cover directly. I also work firms across Canada and into the United States. The distinction matters less than you might think, because the work is delivered to your Google profile rather than from an office.",
    q2: "The dual-name problem is what makes Bolton different from any other market on this list. Elsewhere you optimise for one town term and its variants. Here you are effectively holding two primary terms and a set of hamlet names, and the firms currently ranking have almost all picked one and ignored the rest. That is a gap you can take rather than a wall you have to climb.",
  },
  {
    slug: 'guelph', city: 'Guelph', region: 'ON', geo: [43.5448, -80.2482], tier: 'turf', group: 'Southwestern Ontario',
    nearby: ['Guelph', 'Erin', 'Rockwood', 'Fergus'],
    sub: "Guelph is minutes from home base and one of the strongest rental markets in the region, because a university city runs on investor-owned housing. Constant turnover, constant placement work, and a lot of owners who live elsewhere. I rank Guelph property management firms into the top three and hold them there.",
    mapH2: "Next door, in the Royal City.",
    mapPara: "Guelph sits right beside Erin, which makes it about as close to home turf as a city gets. It is also a market built for management work: a large student and young-professional rental population, high turnover, and a deep base of small investor-owners who bought a unit and never intended to run it themselves. Guelph genuinely favours local, so a nearby, well-reviewed profile gets the call.",
    compNote: "Guelph rewards local intent heavily and turnover keeps owner enquiry volume high year-round. A complete, active, well-reviewed profile on the right category beats a bigger but neglected competitor more often than not.",
    termNote: "Guelph splits into two searchers who look identical in a keyword tool and behave nothing alike. One is an investor-owner typing the head term. The other is searching student rental management, which is a different service, a different fee structure and a different conversation. Both convert, but a page written for one reads wrong to the other, so the build has to hold both terms and the site has to answer both.",
    answerNote: "University cities generate a specific AI query that almost nobody optimises for: a parent, out of province, asking who manages student housing in Guelph before a September move. That answer is assembled from citations and reviews rather than a map pack, because the person asking is nowhere near the city and Google knows it.",
    q1: "No. Guelph is twenty minutes from my desk in Erin, which makes it about as close to home turf as a city gets, but I work firms across Canada and into the United States. Proximity is not what ranks you - the profile does. It does mean I know this field firsthand rather than from a report.",
    q2: "Guelph runs on an academic calendar and the search volume moves with it - hard spikes around May and September, a real trough in between. That has a practical consequence most firms miss: position has to be won and held through the quiet months, because the firm that shows up first in August has already lost the September enquiry to whoever held the ground all summer.",
  },
  {
    slug: 'brampton', city: 'Brampton', region: 'ON', geo: [43.7315, -79.7624], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Brampton', 'Bramalea', 'Springdale', 'Mississauga'],
    sub: "Brampton is one of the largest and fastest-growing cities in the country, and one of the most competitive local markets there is. Enormous rental demand, heavy investor ownership, and a crowded field of management firms chasing it. I rank Brampton firms into the top three from my Headwaters base - same engine, deeper field.",
    mapH2: "A big, competitive market.",
    mapPara: "Brampton is huge, young and among the most diverse cities in Canada, with a rental base to match and a steady stream of owners handing units over. You do not need an agency inside the city. You need someone who can rank the pin you already have against real competition. The work is delivered to your profile, not from a local office.",
    compNote: "Brampton is competitive, so the work is heavier - deeper citations, faster review velocity, sharper category and proximity signals. It also means most of the field is doing it badly, and that is the opening.",
    termNote: "Brampton is too large for a single city term to do the work. The pack an owner sees in Springdale is not the pack he sees in Bramalea or the downtown core, because Google is resolving proximity inside a city of nearly three-quarters of a million people. A build that targets Brampton alone wins one quadrant and loses the rest, so the neighbourhood layer is not optional here the way it is in a smaller market.",
    answerNote: "Brampton also carries a large secondary-suite market, and the enquiries around it are phrased differently - people ask about legal second units and licensing rather than about management. Those questions increasingly get answered by an AI before anyone picks up a phone, and the firm that has published a straight answer is the one that gets named in it.",
    q1: "No. I work property management firms across Canada and into the United States, and Brampton is one of those markets. I will be direct about what I am not: I do not have an office in Brampton and I will not pretend to. The ranking work is delivered to the Google profile you already hold, which is why the distance does not decide the result.",
    q2: "Scale is the difference. Brampton has enough firms that the unglamorous work decides everything - citation depth, review velocity, category precision, and neighbourhood-level targeting inside a very large city. It is more work than a Headwaters build, and I scope and price it as more work rather than promising the same timeline and quietly missing it.",
  },
  {
    slug: 'mississauga', city: 'Mississauga', region: 'ON', geo: [43.5890, -79.6441], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Mississauga', 'Streetsville', 'Port Credit', 'Cooksville'],
    sub: "Mississauga is the largest city in the GTA after Toronto and carries both sides of this business at once - a deep investor-owned rental base, and one of the densest concentrations of condominium corporations in the country. I rank Mississauga firms into the top three from my Headwaters base.",
    mapH2: "Rentals and corporations, in the same city.",
    mapPara: "From the lakeshore at Port Credit to Streetsville and the towers around the Square One core, Mississauga is one of the most contested local markets in Canada. It is also a city where a management firm is usually running two books: investor-owner rentals won through search, and condominium corporations won through RFPs. Both need to be found, for different reasons.",
    compNote: "A deep, competitive field. Winning means doing the unglamorous work better than everyone else - citations, reviews, category precision. On the condominium side, ranking is defensive rather than lead-generating, and I will say so plainly.",
    termNote: "Two completely different people search in Mississauga and they need different pages. An investor-owner types the head term and wants a manager. A board director types condo property management Mississauga and is compiling a shortlist for an RFP. The second one is not a lead in any normal sense - he is checking whether you are safe to invite. Ranking for both is one build; writing for both is two.",
    answerNote: "The Square One core holds one of the densest concentrations of condominium corporations in the country, and board directors doing due diligence increasingly run their first check through an AI rather than a search bar. What comes back is assembled from your reviews, your citations and whatever else is publicly written about the firm - which is precisely why the reputation work outranks the ranking work on the corporation side of this market.",
    q1: "No. I work property management firms across Canada and into the United States, and Mississauga is one of those markets. No local office and no pretence of one. What I bring to a city this size is the same engine and a willingness to tell you when a term is not winnable inside the window, which in Mississauga happens more often than anywhere else on this list.",
    q2: "Mississauga is the one market where I will tell you the ranking is only half the answer before you ask. On the rental book, search generates the owner enquiry outright and the arithmetic is straightforward. On the corporation book it does not generate anything - it protects you during the shortlist. Selling you a pure ranking package here without saying that would be selling you half a result.",
  },
  {
    slug: 'vaughan', city: 'Vaughan', region: 'ON', geo: [43.8361, -79.4983], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Vaughan', 'Woodbridge', 'Maple', 'Kleinburg'],
    sub: "Vaughan - Woodbridge, Maple, Concord, Kleinburg - has been building condominium corporations at pace for a decade, anchored by the Vaughan Metropolitan Centre. Dense corporation count, an active RFP cycle, and a competitive field of management firms across York Region.",
    mapH2: "York Region and its corporations.",
    mapPara: "Vaughan packs a lot into Woodbridge, Maple, Concord and Kleinburg, with the Vaughan Metropolitan Centre driving newer high-density development. That means a growing base of condominium corporations turning over managers, alongside a solid investor-owned rental market. Strong demand, strong competition, and the firms that show in the pack are the ones running their profile like the asset it is.",
    compNote: "Vaughan is dense with management firms, so the field is competitive but the prize is large. Precise category, proximity and review velocity decide who shows - and on board work, your public rating decides who receives the package.",
    termNote: "Almost nobody who lives in Vaughan says Vaughan. They say Woodbridge, Maple, Concord, Thornhill or Kleinburg, and they search that way too. The city term carries the volume a keyword tool reports; the community names carry the enquiries that actually convert, because a searcher using them is describing where his property is rather than where the city hall is. A build that ignores that layer is optimising for a number rather than a customer.",
    answerNote: "The Vaughan Metropolitan Centre has been producing new condominium corporations for a decade, and new corporations turn managers over more often than mature ones - the first management contract after registration is very frequently not the second. That churn is an opportunity and a threat at once, and either way it runs through what a board finds when it looks you up.",
    q1: "No. I work property management firms across Canada and into the United States, and Vaughan is one of those markets. No York Region office. The honest version of what proximity buys in a market like this is very little - the ranking is delivered to your profile, and what decides it is the depth of the work rather than the distance to it.",
    q2: "Vaughan carries an unusually high ratio of condominium corporations to rental doors compared with the rest of this list, which shifts where the value sits. In a rental-heavy market the ranking pays for itself through owner enquiries. Here a meaningful share of the return is defensive - it is what a selection committee finds at nine in the evening when it is deciding which three firms receive the package.",
  },
  {
    slug: 'oakville', city: 'Oakville', region: 'ON', geo: [43.4675, -79.6877], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Oakville', 'Bronte', 'Kerr Village', 'Burlington'],
    sub: "Oakville is an affluent lakeside market where the owners are the ones doing the vetting. Higher rents mean a door is worth more here than almost anywhere in the region, and the owner comparing three firms reads reviews before he calls any of them.",
    mapH2: "High-value doors in Halton.",
    mapPara: "From Bronte and Kerr Village to the downtown harbour, Oakville is a higher-end Halton market. Owners research, compare and lean on reviews heavily before they hand a property over, which makes a polished, well-reviewed profile worth more here than in almost any market I work. Higher rents also mean the arithmetic on a single door is better than average.",
    compNote: "Oakville owners vet before they commit. Rating, review volume and a complete profile carry outsized weight, which rewards doing the reputation work properly rather than quickly.",
    termNote: "Oakville produces fewer searches than Brampton or Mississauga and each one is worth considerably more, which changes what a ranking is for. The owner here is not choosing quickly - he searches, opens three profiles, reads the reviews properly, and calls one of them days later. Position gets you into the set of three. It does not win you the door, and I would rather say that in advance than take credit for it afterwards.",
    answerNote: "This is the market where a single unanswered one-star review costs the most. An AI asked to compare Oakville management firms summarises sentiment rather than counting pins, and an owner handing over a property worth well over a million dollars reads that summary carefully. Review response is not housekeeping here - it is the highest-leverage hour in the whole build.",
    q1: "No. I work property management firms across Canada and into the United States, and Oakville is one of those markets. Being in Halton is worth less here than in most places, because the Oakville owner is not choosing on proximity - he is choosing on what he reads about you, which is work I can do from anywhere.",
    q2: "Volume is lower and value per door is higher, so the ordinary logic inverts. Everywhere else I would push ranking first and reputation second. In Oakville I would do the review and reputation work first, because the searches you are already receiving are being lost at the comparison stage rather than at the visibility stage. Ranking you higher before fixing that just gets you rejected faster.",
  },
  {
    slug: 'newmarket', city: 'Newmarket', region: 'ON', geo: [44.0592, -79.4613], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Newmarket', 'Aurora', 'East Gwillimbury', 'Bradford'],
    sub: "Newmarket anchors the northern GTA along the Yonge corridor - a steady family-rental market with real local search intent and a field that is competitive but beatable. I rank Newmarket property management firms into the top three from my Headwaters base.",
    mapH2: "Northern GTA, along Yonge.",
    mapPara: "Newmarket blends a historic Main Street with the busy Yonge and Davis corridors and the Upper Canada Mall draw. Through Aurora, East Gwillimbury and Bradford it is a solid family-rental market with strong local intent - close enough to Toronto to be competitive, far enough that a genuinely local-looking profile is rewarded.",
    compNote: "Newmarket is competitive but beatable. Local intent is strong along the corridor, and a complete, active profile on the right category still moves the needle fast.",
    termNote: "Newmarket does not behave like a city, it behaves like a corridor. An owner with a unit in Aurora or East Gwillimbury will happily hire a Newmarket firm and searches accordingly, drifting between the town names and the corridor as a whole. That makes service area configuration a bigger lever here than proximity - a correctly mapped firm picks up enquiries from four municipalities, and an incorrectly mapped one is confined to its own postal code.",
    answerNote: "Corridor markets confuse AI answers in a specific way: asked who manages rental property in Aurora, an assistant will frequently return Newmarket and Richmond Hill firms without explaining why. That is fine if you are one of the firms it names and fatal if you are not, and what decides it is whether the service area has been declared consistently everywhere the firm appears, not just on Google.",
    q1: "No. I work property management firms across Canada and into the United States, and Newmarket is one of those markets. What matters more than where I sit is whether the corridor is mapped properly on your profile, which is the single change that most often moves a Newmarket firm from local to regional.",
    q2: "Newmarket rewards service area configuration more than any other Ontario market on this list. Elsewhere the fight is proximity and reviews. Here a firm can widen its effective catchment considerably by declaring Aurora, East Gwillimbury and Bradford correctly and consistently - and most of the field has not, which makes it the fastest available gain in this market.",
  },
  {
    slug: 'moncton', city: 'Moncton', region: 'NB', geo: [46.0878, -64.7782], tier: 'served', group: 'Atlantic Canada',
    nearby: ['Moncton', 'Dieppe', 'Riverview', 'Greater Moncton'],
    sub: "Moncton is the Hub City of the Maritimes, and it is not theoretical for me - I already hold a first position for property management in this city. From my Ontario base I run the same engine on Greater Moncton, on the same Rank Lock.",
    mapH2: "The Hub City, and Greater Moncton.",
    mapPara: "Moncton, with Dieppe and Riverview, forms the commercial hub of Atlantic Canada - bilingual, growing, and the retail and distribution centre for the region. Rental demand has climbed hard with the population. I already hold a first position for property management in this market, which means I know the field firsthand rather than just the method.",
    compNote: "Greater Moncton is a real, growing market with a field still catching up on local search. Early, complete, well-reviewed profiles take the pack, and I already have a foothold here to prove it.",
    termNote: "Moncton is genuinely bilingual and the search behaviour follows. A meaningful share of owner enquiries across Greater Moncton and Dieppe are typed in French, and very little of this field has configured for it - services named in one language only, no French-language citations, nothing an assistant can pick up. It is the clearest unclaimed ground I have found in any market I work.",
    answerNote: "Atlantic Canada has a thin directory and citation base compared with the GTA, which cuts both ways. It is easier to become the named answer because there is less competing signal - and it is easier for a badly cited firm to be omitted entirely, because there is not enough corroborating information for an assistant to be confident about it. Consistency across a handful of sources does disproportionate work here.",
    q1: "No, and Moncton is the one market on this list where I am not describing a method - I hold a first position for property management here already. I work firms across Canada and into the United States from an Ontario base, and this is the engagement I would point at if you want to see the engine running rather than described.",
    q2: "Moncton is early in a way no Ontario market is. The field is still catching up on local search, the citation base is thin, and the bilingual layer is almost entirely unclaimed - so work that takes six months to show in Brampton shows faster here. That window closes as the market matures, which is an argument for moving now rather than a promise that it stays open.",
  },
];

// ---------------------------------------------------------------------------
// PATHS. Single source of truth. City pages live under the ranking service page
// because ranking is what they sell - the intake desk is not geographic, which
// is why /the-keystone and /property-management-intake have no city variants.
//
// They were at /local-seo/ until August 2026. That path was agency jargon nobody
// searches, and it read as vendor-speak to the principal it was written for.
// Every old URL 301s to the new one in netlify.toml.
// ---------------------------------------------------------------------------
export const LOC_BASE = '/property-management-seo';
export const LOCATIONS_HUB = `${LOC_BASE}/locations/`;
export const cityPath = (slug: string) => `${LOC_BASE}/${slug}/`;

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Per-city FAQ. Property-first, and honest about the condominium distinction.
//
// q1 and q2 are now authored per city on the City record. Only the closing two
// answers are shared, and they are shared deliberately: the condominium
// distinction and the Rank Lock terms must read identically everywhere, because
// they are commitments rather than market colour. Wording them differently per
// city would mean promising ten slightly different things.
export function locFaq(c: City): [string, string][] {
  const city = c.city;
  return [
    [`Do you only work with property management firms in ${city}?`, c.q1],
    [`How is ranking in ${city} different?`, c.q2],
    [
      `Will this win me condominium work in ${city}?`,
      'Not directly, and I will not pretend otherwise. Boards do not find a manager through search - they run an RFP through a selection committee. What ranking does on that side is defensive: when three names go to a board, somebody looks all three up that evening, and what they find decides who receives the package. On the rental side, search generates the owner enquiry outright.',
    ],
    [
      'What is the guarantee here?',
      'The Rank Lock, the same everywhere. First page inside 60 days on the agreed primary term, or the monthly pauses until it lands. Toronto, Vancouver and Montreal carry a 90-day provision, agreed at kickoff rather than argued afterwards. Billing starts at onboarding; the 60-day clock starts when onboarding completes. I do not promise a number of doors - that depends on your fees, your close rate and your capacity.',
    ],
  ];
}

export const HOME_AREA_SERVED = ['Erin', 'Orangeville', 'Caledon', 'Guelph'];
export const FOOTER_HOME_LOCALITY = LOCALITY;
export const FOOTER_HOME_REGION = REGION;
