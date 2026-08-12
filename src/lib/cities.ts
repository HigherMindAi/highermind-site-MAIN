// ---------------------------------------------------------------------------
// HigherMindAI - multi-city location system
// tier: "home" (verified pin, GBP embed) | "turf" (local/adjacent) | "served"
//
// PROPERTY-FIRST. These pages target the consumer-side term - "property
// management company [city]" - because that is what an owner actually types and
// it is the term the Rank Lock is measured on. But the copy is written to the
// property MANAGER reading it, because he is the buyer. That distinction is why
// these pages double as sales collateral: a prospect searches his own city to
// see where he sits, and lands here.
//
// Honesty rules: never claim a local address I do not have; non-home pages are
// framed as "I rank YOUR [city] firm". Every city carries distinct copy.
// No client is ever named.
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
  },
  {
    slug: 'orangeville', city: 'Orangeville', region: 'ON', geo: [43.9190, -80.0944], tier: 'turf', group: 'Headwaters',
    nearby: ['Orangeville', 'Mono', 'Shelburne', 'Caledon'],
    sub: "Orangeville is the seat of Dufferin County and the hub of the Headwaters, right next door to home base. Steady commuter-belt growth means a steady supply of investor-owners with a unit to hand over. I rank Orangeville property management firms into the top three and hold them there.",
    mapH2: "The hub of the Headwaters.",
    mapPara: "Orangeville sits at the centre of Dufferin County, anchored by its Broadway main street and years of commuter-belt growth. That growth is the point: single-family rentals and small multi-unit buildings owned by people who live somewhere else and do not want to manage them. It is home turf, and I work firms across Orangeville, Mono and Shelburne the same way I work my own profile.",
    compNote: "A mid-size market with strong local intent and a beatable field. The firm that wins the pack is the one with the most complete, most active, best-reviewed profile, which is the entire job.",
  },
  {
    slug: 'bolton', city: 'Bolton', region: 'ON', geo: [43.8763, -79.7330], tier: 'turf', group: 'Headwaters',
    nearby: ['Bolton', 'Caledon', 'Caledon East', 'Palgrave'],
    sub: "Bolton sits in Caledon where the GTA meets the countryside, and Caledon is squarely in my home service area. It is a growth market full of investor-owned rentals and newer condominium corporations, with a field of small management firms that has largely not caught on to local search yet.",
    mapH2: "Bolton and Caledon.",
    mapPara: "Bolton is the largest community in Caledon, tucked into the Humber valley on the edge of the GTA. Caledon is part of my home service area, so this is familiar ground. Fast residential growth means a widening pool of owners looking for a manager, and the local field is still small enough that a properly built profile takes the pack rather than fighting for it.",
    compNote: "A growth market where much of the field has not taken local search seriously yet. That gap is the opportunity: get the profile right before your competitors work out that it matters.",
  },
  {
    slug: 'guelph', city: 'Guelph', region: 'ON', geo: [43.5448, -80.2482], tier: 'turf', group: 'Southwestern Ontario',
    nearby: ['Guelph', 'Erin', 'Rockwood', 'Fergus'],
    sub: "Guelph is minutes from home base and one of the strongest rental markets in the region, because a university city runs on investor-owned housing. Constant turnover, constant placement work, and a lot of owners who live elsewhere. I rank Guelph property management firms into the top three and hold them there.",
    mapH2: "Next door, in the Royal City.",
    mapPara: "Guelph sits right beside Erin, which makes it about as close to home turf as a city gets. It is also a market built for management work: a large student and young-professional rental population, high turnover, and a deep base of small investor-owners who bought a unit and never intended to run it themselves. Guelph genuinely favours local, so a nearby, well-reviewed profile gets the call.",
    compNote: "Guelph rewards local intent heavily and turnover keeps owner enquiry volume high year-round. A complete, active, well-reviewed profile on the right category beats a bigger but neglected competitor more often than not.",
  },
  {
    slug: 'brampton', city: 'Brampton', region: 'ON', geo: [43.7315, -79.7624], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Brampton', 'Bramalea', 'Springdale', 'Mississauga'],
    sub: "Brampton is one of the largest and fastest-growing cities in the country, and one of the most competitive local markets there is. Enormous rental demand, heavy investor ownership, and a crowded field of management firms chasing it. I rank Brampton firms into the top three from my Headwaters base - same engine, deeper field.",
    mapH2: "A big, competitive market.",
    mapPara: "Brampton is huge, young and among the most diverse cities in Canada, with a rental base to match and a steady stream of owners handing units over. You do not need an agency inside the city. You need someone who can rank the pin you already have against real competition. The work is delivered to your profile, not from a local office.",
    compNote: "Brampton is competitive, so the work is heavier - deeper citations, faster review velocity, sharper category and proximity signals. It also means most of the field is doing it badly, and that is the opening.",
  },
  {
    slug: 'mississauga', city: 'Mississauga', region: 'ON', geo: [43.5890, -79.6441], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Mississauga', 'Streetsville', 'Port Credit', 'Cooksville'],
    sub: "Mississauga is the largest city in the GTA after Toronto and carries both sides of this business at once - a deep investor-owned rental base, and one of the densest concentrations of condominium corporations in the country. I rank Mississauga firms into the top three from my Headwaters base.",
    mapH2: "Rentals and corporations, in the same city.",
    mapPara: "From the lakeshore at Port Credit to Streetsville and the towers around the Square One core, Mississauga is one of the most contested local markets in Canada. It is also a city where a management firm is usually running two books: investor-owner rentals won through search, and condominium corporations won through RFPs. Both need to be found, for different reasons.",
    compNote: "A deep, competitive field. Winning means doing the unglamorous work better than everyone else - citations, reviews, category precision. On the condominium side, ranking is defensive rather than lead-generating, and I will say so plainly.",
  },
  {
    slug: 'vaughan', city: 'Vaughan', region: 'ON', geo: [43.8361, -79.4983], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Vaughan', 'Woodbridge', 'Maple', 'Kleinburg'],
    sub: "Vaughan - Woodbridge, Maple, Concord, Kleinburg - has been building condominium corporations at pace for a decade, anchored by the Vaughan Metropolitan Centre. Dense corporation count, an active RFP cycle, and a competitive field of management firms across York Region.",
    mapH2: "York Region and its corporations.",
    mapPara: "Vaughan packs a lot into Woodbridge, Maple, Concord and Kleinburg, with the Vaughan Metropolitan Centre driving newer high-density development. That means a growing base of condominium corporations turning over managers, alongside a solid investor-owned rental market. Strong demand, strong competition, and the firms that show in the pack are the ones running their profile like the asset it is.",
    compNote: "Vaughan is dense with management firms, so the field is competitive but the prize is large. Precise category, proximity and review velocity decide who shows - and on board work, your public rating decides who receives the package.",
  },
  {
    slug: 'oakville', city: 'Oakville', region: 'ON', geo: [43.4675, -79.6877], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Oakville', 'Bronte', 'Kerr Village', 'Burlington'],
    sub: "Oakville is an affluent lakeside market where the owners are the ones doing the vetting. Higher rents mean a door is worth more here than almost anywhere in the region, and the owner comparing three firms reads reviews before he calls any of them.",
    mapH2: "High-value doors in Halton.",
    mapPara: "From Bronte and Kerr Village to the downtown harbour, Oakville is a higher-end Halton market. Owners research, compare and lean on reviews heavily before they hand a property over, which makes a polished, well-reviewed profile worth more here than in almost any market I work. Higher rents also mean the arithmetic on a single door is better than average.",
    compNote: "Oakville owners vet before they commit. Rating, review volume and a complete profile carry outsized weight, which rewards doing the reputation work properly rather than quickly.",
  },
  {
    slug: 'newmarket', city: 'Newmarket', region: 'ON', geo: [44.0592, -79.4613], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Newmarket', 'Aurora', 'East Gwillimbury', 'Bradford'],
    sub: "Newmarket anchors the northern GTA along the Yonge corridor - a steady family-rental market with real local search intent and a field that is competitive but beatable. I rank Newmarket property management firms into the top three from my Headwaters base.",
    mapH2: "Northern GTA, along Yonge.",
    mapPara: "Newmarket blends a historic Main Street with the busy Yonge and Davis corridors and the Upper Canada Mall draw. Through Aurora, East Gwillimbury and Bradford it is a solid family-rental market with strong local intent - close enough to Toronto to be competitive, far enough that a genuinely local-looking profile is rewarded.",
    compNote: "Newmarket is competitive but beatable. Local intent is strong along the corridor, and a complete, active profile on the right category still moves the needle fast.",
  },
  {
    slug: 'moncton', city: 'Moncton', region: 'NB', geo: [46.0878, -64.7782], tier: 'served', group: 'Atlantic Canada',
    nearby: ['Moncton', 'Dieppe', 'Riverview', 'Greater Moncton'],
    sub: "Moncton is the Hub City of the Maritimes, and it is not theoretical for me - I already hold a first position for property management in this city. From my Ontario base I run the same engine on Greater Moncton, on the same Rank Lock.",
    mapH2: "The Hub City, and Greater Moncton.",
    mapPara: "Moncton, with Dieppe and Riverview, forms the commercial hub of Atlantic Canada - bilingual, growing, and the retail and distribution centre for the region. Rental demand has climbed hard with the population. I already hold a first position for property management in this market, which means I know the field firsthand rather than just the method.",
    compNote: "Greater Moncton is a real, growing market with a field still catching up on local search. Early, complete, well-reviewed profiles take the pack, and I already have a foothold here to prove it.",
  },
];

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Per-city FAQ. Property-first, and honest about the condominium distinction.
export function locFaq(c: City): [string, string][] {
  const city = c.city;
  let q1: string;
  let q2: string;
  if (c.region === 'NB') {
    q1 = `No, and ${city} is not theoretical for me. I already hold a first position for property management in this market, so I know the field firsthand. The work is delivered to your Google profile, so distance is no barrier to ranking you.`;
    q2 = `${city} is a real, growing market with a field still catching up on local search. That is the opening: an early, complete, well-reviewed profile takes the pack while the competition is still asleep on it.`;
  } else if (c.tier === 'home' || c.tier === 'turf') {
    q1 = `No. I am based in the Headwaters and work with firms across Canada, but ${city} is home turf, so I know this market as well as I know the method.`;
    q2 = `In a market this size, proximity and a complete, active profile decide most of the result. I pin the work to \u201cproperty management company ${city}\u201d and the terms an owner actually types, not a saturated regional head term.`;
  } else {
    q1 = `No. I work with property management firms across Canada and ${city} is one of those markets. The work is delivered to your Google profile, so I do not need to be in the building to rank you in it.`;
    q2 = `It is more competitive, so the work is heavier - deeper citations, faster review velocity, sharper signals. The levers are the same; in ${city} you simply have to pull them better than a crowded field.`;
  }
  return [
    [`Do you only work with property management firms in ${city}?`, q1],
    [`How is ranking in ${city} different?`, q2],
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
