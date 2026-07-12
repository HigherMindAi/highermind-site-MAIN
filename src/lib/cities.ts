// ---------------------------------------------------------------------------
// HigherMindAI - multi-city location system
// tier: "home" (verified pin, GBP embed) | "turf" (local/adjacent) | "served"
// Honesty rules: never claim a local address I do not have; non-home pages are
// framed as "I rank YOUR [city] business". Every city carries distinct copy.
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
    sub: 'Erin is home base. I run the exact Local Ranking System on businesses here that I run across Canada - engineered into the top 3 of Google Maps, measured on a locked heatmap, and held to the 60-day guarantee. Small market, real proximity weight, home turf I know cold.',
    mapH2: 'Right here in Erin.',
    mapPara: 'I am based in Erin, in Wellington County and the wider Headwaters, minutes from Guelph and Orangeville. This is where my own Google Business Profile lives, run on the same clock and the same levers every client gets. In a market this size proximity carries real weight, which is exactly why the build is engineered to the town rather than spread thin across a region.',
    compNote: 'Erin is a small market where proximity and a complete, active, well-reviewed profile decide most of the result. Every one of those is a lever I control directly.',
  },
  {
    slug: 'orangeville', city: 'Orangeville', region: 'ON', geo: [43.9190, -80.0944], tier: 'turf', group: 'Headwaters',
    nearby: ['Orangeville', 'Mono', 'Shelburne', 'Caledon'],
    sub: 'Orangeville is the seat of Dufferin County and the hub of the Headwaters - right next door to home base. I rank Orangeville businesses into the top 3 of Google Maps and keep them there, on the same guarantee I run everywhere.',
    mapH2: 'The hub of the Headwaters.',
    mapPara: 'Orangeville sits at the centre of Dufferin County, anchored by its historic Broadway main street and steady commuter-belt growth. It is home turf - I work businesses across Orangeville, Mono, and Shelburne the same way I work my own profile. Tight enough a market that a complete, well-reviewed listing pulls real weight.',
    compNote: 'A mid-size market with strong local intent and a beatable field. The business that wins is the one with the most complete, most active, best-reviewed profile - which is the entire job.',
  },
  {
    slug: 'bolton', city: 'Bolton', region: 'ON', geo: [43.8763, -79.7330], tier: 'turf', group: 'Headwaters',
    nearby: ['Bolton', 'Caledon', 'Caledon East', 'Palgrave'],
    sub: 'Bolton sits in Caledon where the GTA meets the countryside, and Caledon is squarely in my home service area. I rank Bolton businesses into the top 3 of Google Maps on the same 60-day guarantee.',
    mapH2: 'Bolton & Caledon.',
    mapPara: 'Bolton is the largest community in Caledon, tucked into the Humber valley on the edge of the GTA. Caledon is part of my home service area, so this is familiar ground - a fast-growing market with strong demand for trades and home services, and a field that is still very winnable.',
    compNote: 'Bolton is a growth market where a lot of the field has not caught on to local SEO yet. That gap is the opportunity: get the profile right before the competition does.',
  },
  {
    slug: 'guelph', city: 'Guelph', region: 'ON', geo: [43.5448, -80.2482], tier: 'turf', group: 'Southwestern Ontario',
    nearby: ['Guelph', 'Erin', 'Rockwood', 'Fergus'],
    sub: 'Guelph is minutes from home base - a tight-knit university city with a strong local-first streak. I rank Guelph businesses into the top 3 of Google Maps and keep them there.',
    mapH2: 'Next door, in the Royal City.',
    mapPara: 'Guelph sits right beside Erin, which makes it about as close to home turf as a city gets. It is a place that genuinely favours local - residents look for the nearby, well-reviewed option first, which is exactly the behaviour a strong Google Business Profile is built to capture.',
    compNote: 'Guelph rewards local intent heavily. A complete, active, well-reviewed profile on the right category beats a bigger but neglected competitor more often than not.',
  },
  {
    slug: 'brampton', city: 'Brampton', region: 'ON', geo: [43.7315, -79.7624], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Brampton', 'Bramalea', 'Springdale', 'Mississauga'],
    sub: 'Brampton is one of the largest and fastest-growing cities in the country, and one of the most competitive local markets there is. I rank Brampton businesses into the top 3 of Google Maps from my Headwaters base - the system is the same, the field is just deeper.',
    mapH2: 'A big, competitive market.',
    mapPara: 'Brampton is huge, young, and among the most diverse cities in Canada, with enormous demand for trades and home services and a crowded field chasing it. You do not need an agency inside the city - you need someone who can rank the pin you already have, against real competition. That is the job, and it is delivered to your profile, not from a local office.',
    compNote: 'Brampton is competitive, so the work is heavier - deeper citations, faster review velocity, sharper category and proximity signals. It also means most of the field is doing it badly, and that is the opening.',
  },
  {
    slug: 'mississauga', city: 'Mississauga', region: 'ON', geo: [43.5890, -79.6441], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Mississauga', 'Streetsville', 'Port Credit', 'Cooksville'],
    sub: 'Mississauga is the largest city in the GTA after Toronto and a dense, competitive business market. I rank Mississauga businesses into the top 3 of Google Maps from my Headwaters base - same system, deeper field.',
    mapH2: 'Dense, competitive, winnable.',
    mapPara: 'From the lakeshore at Port Credit to Streetsville and the Square One core, Mississauga is one of the most contested local markets in the country. Local SEO here is delivered to your profile, not from a local storefront - so the question is not where I sit, it is whether I can out-rank the businesses around you. Usually I can.',
    compNote: 'A deep, competitive field. Winning means doing the unglamorous work better than everyone else - citations, reviews, category precision - not finding a shortcut. That is exactly how the system is built.',
  },
  {
    slug: 'vaughan', city: 'Vaughan', region: 'ON', geo: [43.8361, -79.4983], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Vaughan', 'Woodbridge', 'Maple', 'Kleinburg'],
    sub: 'Vaughan - Woodbridge, Maple, Concord, Kleinburg - is a contractor and trades stronghold in York Region. I rank Vaughan businesses into the top 3 of Google Maps from my Headwaters base.',
    mapH2: "York Region's trades hub.",
    mapPara: 'Vaughan packs a lot of home-services and construction businesses into Woodbridge, Maple, Concord, and Kleinburg, anchored by the fast-growing Vaughan Metropolitan Centre. Strong demand, strong competition - the businesses that rank are the ones running their profile like the asset it is.',
    compNote: 'Vaughan is dense with trades, so the field is competitive but the prize is large. Precise category, proximity, and review velocity decide who shows in the pack.',
  },
  {
    slug: 'oakville', city: 'Oakville', region: 'ON', geo: [43.4675, -79.6877], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Oakville', 'Bronte', 'Kerr Village', 'Burlington'],
    sub: 'Oakville is an affluent lakeside market where customers expect quality and check before they call. I rank Oakville businesses into the top 3 of Google Maps from my Headwaters base.',
    mapH2: "Halton's high-value market.",
    mapPara: 'From Bronte and Kerr Village to the downtown harbour, Oakville is a higher-end Halton market - buyers research, compare, and lean on reviews heavily before they pick. That makes a polished, well-reviewed profile worth more here than almost anywhere: it is often the deciding factor.',
    compNote: 'Oakville customers vet before they buy. Rating, reviews, and a complete profile carry outsized weight - which rewards doing the trust work properly.',
  },
  {
    slug: 'newmarket', city: 'Newmarket', region: 'ON', geo: [44.0592, -79.4613], tier: 'served', group: 'Greater Toronto Area',
    nearby: ['Newmarket', 'Aurora', 'East Gwillimbury', 'Bradford'],
    sub: 'Newmarket anchors the northern GTA along the Yonge corridor. I rank Newmarket businesses into the top 3 of Google Maps from my Headwaters base.',
    mapH2: 'Northern GTA, along Yonge.',
    mapPara: 'Newmarket blends a historic Main Street with the busy Yonge and Davis commercial corridors and the Upper Canada Mall draw. It is a solid, winnable market with real local intent - close enough to Toronto to be competitive, far enough to reward a genuinely local-looking profile.',
    compNote: 'Newmarket is competitive but beatable. Local intent is strong along the corridor, and a complete, active profile on the right category still moves the needle fast.',
  },
  {
    slug: 'moncton', city: 'Moncton', region: 'NB', geo: [46.0878, -64.7782], tier: 'served', group: 'Atlantic Canada',
    nearby: ['Moncton', 'Dieppe', 'Riverview', 'Greater Moncton'],
    sub: 'Moncton is the Hub City of the Maritimes - and I already work with businesses here. From my Ontario base I run the same Local Ranking System on Greater Moncton, on the same 60-day guarantee.',
    mapH2: 'The Hub City, and Greater Moncton.',
    mapPara: 'Moncton, with Dieppe and Riverview, forms the commercial hub of Atlantic Canada - bilingual, growing, and the retail and distribution centre for the region. I already rank businesses here, which means I know the market firsthand, not just the method. Local SEO is delivered to your profile, so distance is no barrier - the proof is already on the ground.',
    compNote: 'Greater Moncton is a real, growing market with a field still catching up on local SEO. Early, complete, well-reviewed profiles take the pack - and I already have a foothold here.',
  },
];

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Per-city FAQ, mirrors loc_faq_for() in the generator.
export function locFaq(c: City): [string, string][] {
  const city = c.city;
  let q1: string;
  let q2: string;
  if (c.region === 'NB') {
    q1 = `No - and ${city} is not theoretical for me. I already work with businesses in the ${city} area, so I know the market firsthand. Local SEO is delivered to your Google profile, so distance is no barrier to ranking you.`;
    q2 = `${city} is a real, growing market with a field still catching up on local SEO. That is the opening: an early, complete, well-reviewed profile takes the pack while the competition is still asleep on it.`;
  } else if (c.tier === 'home' || c.tier === 'turf') {
    q1 = `No. I am based in the Headwaters and work with businesses across Canada - but ${city} is home turf, so I know this market as well as I know the method.`;
    q2 = `In a market this size, proximity and a complete, active profile decide most of the result. I pin the work to \u201cyour service + ${city}\u201d - the term where you can actually compete - not a saturated head term.`;
  } else {
    q1 = `No. I work with businesses across Canada and ${city} is one of them. Local SEO is delivered to your Google profile, so I do not need to be in the building to rank you in it.`;
    q2 = `It is more competitive, so the work is heavier - deeper citations, faster review velocity, sharper signals. The levers are the same; in ${city} you simply have to pull them better than a crowded field.`;
  }
  return [
    [`Do you only work with businesses in ${city}?`, q1],
    [`How is ranking in ${city} different?`, q2],
    ['What is the guarantee here?', 'The same one everywhere. First page of the Map Pack in 60 days on a winnable term, or you stop paying the monthly and I keep working at no charge until you are ranked. Billing starts at onboarding; the 60-day clock starts when onboarding completes. And every enquiry that arrives gets answered and offered a booking - if one goes unanswered, that month is free.'],
  ];
}

export const HOME_AREA_SERVED = ['Erin', 'Orangeville', 'Caledon', 'Guelph'];
export const FOOTER_HOME_LOCALITY = LOCALITY;
export const FOOTER_HOME_REGION = REGION;
