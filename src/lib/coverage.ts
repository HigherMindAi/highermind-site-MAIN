// ---------------------------------------------------------------------------
// HigherMindAI - coverage
//
// One page answers "do you work in my market" in three seconds. This is the
// data behind it, and it is also the single source for schema areaServed so the
// entity graph and the visible page can never disagree.
//
// WHY THERE IS NO EXCLUSION LIST HERE.
// An earlier draft published a "not currently taking clients in" list naming
// six US states. The outreach doctrine's do-not-dial list names fourteen, and
// the two lists disagreed - which is how you end up contradicting your own
// public page on a call. They also measure different things: not dialling a
// state is a telemarketing decision, and an inbound enquiry from that state is
// not a telemarketing event at all. So the negative list is gone. Quebec stays,
// because that one is a genuine capability limit with a stated reason.
//
// MAINTENANCE. When a market is taken, mark it - "at capacity" is a stronger
// trust signal than a silent list, and it makes the exclusivity claim provable
// rather than asserted. Set `taken: true` on the market and it renders.
// ---------------------------------------------------------------------------

export interface Market {
  name: string;
  places: string;
  /** One firm per market. Flip to true when the seat is filled. */
  taken?: boolean;
}

export const US_MARKETS: Market[] = [
  { name: 'Ohio', places: 'Columbus, Cleveland, Cincinnati, Akron, Toledo, Dayton' },
  { name: 'Indiana', places: 'Indianapolis, Fort Wayne, South Bend, Evansville' },
  { name: 'Tennessee', places: 'Nashville, Memphis, Knoxville, Chattanooga, Tri-Cities' },
  { name: 'Georgia', places: 'Atlanta metro, Savannah, Augusta, Columbus, Macon, Athens' },
  { name: 'North Carolina', places: 'Charlotte, Raleigh-Durham, Greensboro, Winston-Salem, Wilmington, Asheville' },
  { name: 'Missouri', places: 'Kansas City, St. Louis, Springfield, Columbia' },
  { name: 'Kentucky', places: 'Louisville, Lexington, Northern Kentucky, Bowling Green' },
  { name: 'Alabama', places: 'Birmingham, Huntsville, Montgomery, Mobile, Tuscaloosa' },
];

export const CA_MARKETS: Market[] = [
  { name: 'Ontario', places: 'Headwaters, GTA, Guelph and southwestern Ontario, Ottawa, Hamilton, Niagara' },
  { name: 'Atlantic', places: 'Moncton, Halifax, Saint John, Fredericton, Charlottetown, St. John\u2019s' },
  { name: 'Alberta', places: 'Calgary, Edmonton' },
  { name: 'British Columbia', places: 'Vancouver, Lower Mainland, Victoria, Kelowna' },
  { name: 'Prairies', places: 'Winnipeg, Regina, Saskatoon' },
];

/** Schema areaServed. Countries plus the named US states, so the entity graph
 *  says the same thing the coverage page says. */
export const AREA_SERVED = [
  { '@type': 'Country', name: 'Canada' },
  { '@type': 'Country', name: 'United States' },
  ...US_MARKETS.map((m) => ({ '@type': 'State', name: m.name })),
];

export const COVERAGE_INTRO =
  'I take one property management firm per market. That means the honest answer to \u201cdo you work in my area\u201d is sometimes no, and I would rather tell you that in three seconds than in three emails.';

export const COVERAGE_QUEBEC =
  'Quebec is the one place I say no on capability rather than capacity. The syndicate framework and the OACIQ regime are different enough that I would rather decline than do it badly.';

export const COVERAGE_NOT_LISTED =
  'If your state or province is not on this list, it usually means I have not opened it yet rather than that I have ruled it out. Ask. I will tell you straight whether I can help, and if I cannot I will say so on the first call rather than after you have spent an hour.';

export const COVERAGE_WHY_ONE =
  'Because I am one operator rather than an agency with a roster, and because the firm two towns over should not be buying the same visibility work I just built for you. If your market is taken, you hear it on the first call.';
