// ---------------------------------------------------------------------------
// THE HEADWATERS TOWN PAGES - /local-seo/<town>/
//
// These are the ten service areas on the Google Business Profile, in the same
// order, so the site and the listing tell one story. Each page is written to
// stand on its own - the town's own geography, the communities inside it, the
// way a map search actually resolves there - because a page that only swaps
// the town name is a doorway page and Google filters it.
//
// The terms each page leads on come from the Waypoint referee terms: "local
// SEO Erin", "Google Maps ranking Orangeville", "marketing agency Caledon".
//
// Geography only. No population figures, no rankings claimed, no clients named.
// ---------------------------------------------------------------------------

export interface Town {
  slug: string;
  name: string;
  /** County or region, as a local would say it. */
  area: string;
  /** Lead search term this page is written for. */
  term: string;
  /** Communities and places inside or around it a buyer would type. */
  places: string[];
  /** The unique paragraph - what a map search looks like there. */
  ground: string;
  /** Why proximity plays out the way it does in this town. */
  map: string;
  near: string[];
  geo: [number, number];
}

export const TOWNS: Town[] = [
  {
    slug: 'erin',
    name: 'Erin',
    area: 'Wellington County',
    term: 'local SEO Erin',
    places: ['Erin village', 'Hillsburgh', 'Ballinafad', 'Brisbane', 'Orton'],
    ground:
      'Erin is where I work from. The Town of Erin takes in the village of Erin on the West Credit, Hillsburgh a few minutes north, and a spread of hamlets and rural roads in between. Most of the trades that serve it are based somewhere else - Orangeville, Georgetown, Guelph - which means a search run from a kitchen in Hillsburgh is often answered by a business twenty minutes away that happens to have a better profile.',
    map:
      'In a rural town the map pack is decided on a wide radius. The three names that come up for "furnace repair" in Erin are rarely three Erin businesses, and the one with the complete profile, the right category and the steady reviews takes the call from whoever is closer.',
    near: ['orangeville', 'caledon', 'halton-hills', 'guelph'],
    geo: [43.7667, -80.0667],
  },
  {
    slug: 'orangeville',
    name: 'Orangeville',
    area: 'Dufferin County',
    term: 'Google Maps ranking Orangeville',
    places: ['Orangeville', 'Mono', 'Amaranth', 'Island Lake', 'Hockley Valley'],
    ground:
      'Orangeville is the market town for Dufferin County, where Highway 9 meets Highway 10, and it is where most of the county goes to find a trade, a shop or a service. That concentration is exactly why the map is competitive here: a lot of businesses are within a short drive of the same searches, and the pack for any common trade is decided by the details most owners never touch.',
    map:
      'A search in Orangeville returns businesses from the town itself and from Mono, Amaranth and Shelburne around it. Category, services named the way people type them, a service area drawn properly and reviews that keep arriving decide who holds the three spots.',
    near: ['mono', 'shelburne', 'grand-valley', 'caledon', 'erin'],
    geo: [43.9197, -80.0943],
  },
  {
    slug: 'caledon',
    name: 'Caledon',
    area: 'Region of Peel',
    term: 'marketing agency Caledon',
    places: ['Bolton', 'Caledon East', 'Caledon Village', 'Inglewood', 'Alton', 'Palgrave', 'Cheltenham'],
    ground:
      'Caledon is one town made of many communities - Bolton in the southeast, Caledon East, Caledon Village on Highway 10, Inglewood, Alton, Palgrave - spread across a large piece of northern Peel. A buyer rarely types "Caledon". They type the community they live in, or nothing at all and let the phone decide where they are.',
    map:
      'That makes Caledon two or three separate map markets under one name. A business in Bolton can own the pack in Bolton and be invisible in Caledon Village. The profile, the service area and the pages behind it have to account for each community on its own.',
    near: ['orangeville', 'erin', 'halton-hills', 'mono'],
    geo: [43.8668, -79.8597],
  },
  {
    slug: 'guelph',
    name: 'Guelph',
    area: 'Wellington County',
    term: 'local SEO Guelph',
    places: ['Guelph', 'Puslinch', 'Rockwood', 'Eden Mills', 'Guelph/Eramosa'],
    ground:
      'Guelph is the biggest market near the Headwaters, and it behaves like a city: dense, crowded map packs, national franchises with large review counts, and search results that change block by block. An independent in Guelph is competing with every business that has a pin inside the city limits, and with the ones outside it that serve Rockwood and Puslinch.',
    map:
      'In a city the pack radius is tight. Proximity decides a lot, and what is left is decided by the profile itself - category, services, review volume and recency, and whether the business looks active. An independent that gets those right beats a bigger name that neglects them.',
    near: ['erin', 'fergus', 'elora', 'halton-hills'],
    geo: [43.5448, -80.2482],
  },
  {
    slug: 'halton-hills',
    name: 'Halton Hills',
    area: 'Halton Region',
    term: 'local SEO Halton Hills',
    places: ['Georgetown', 'Acton', 'Glen Williams', 'Limehouse', 'Terra Cotta'],
    ground:
      'Halton Hills is Georgetown and Acton and the villages between them, sitting between Brampton and the Headwaters. Georgetown in particular borders a very large market to the east, which means the pack for a common trade can be pulled toward Brampton businesses with far bigger footprints than a local shop.',
    map:
      'A business in Georgetown or Acton wins its own town by being unmistakably local - the right service area, pages for the communities it actually serves, and reviews from customers in those places - rather than trying to outspend the city next door.',
    near: ['erin', 'caledon', 'guelph'],
    geo: [43.6488, -79.9212],
  },
  {
    slug: 'mono',
    name: 'Mono',
    area: 'Dufferin County',
    term: 'local SEO Mono',
    places: ['Mono Centre', 'Hockley Valley', 'Mono Mills', 'Camilla', 'Mono Cliffs'],
    ground:
      'Mono wraps around the east and north of Orangeville - the Hockley Valley, Mono Centre, the country around Mono Cliffs Provincial Park. It is mostly rural and residential, and most of the businesses that serve it list an Orangeville address.',
    map:
      'For a Mono homeowner the map usually answers with Orangeville. A business based in Mono competes by being complete where others are thin, and a business in Orangeville that wants Mono has to draw its service area to include it and give it a page of its own.',
    near: ['orangeville', 'shelburne', 'caledon'],
    geo: [44.0, -80.0667],
  },
  {
    slug: 'shelburne',
    name: 'Shelburne',
    area: 'Dufferin County',
    term: 'local SEO Shelburne',
    places: ['Shelburne', 'Melancthon', 'Mulmur', 'Primrose'],
    ground:
      'Shelburne sits north of Orangeville where Highway 10 meets Highway 89, and it serves a wide rural area to the north and west. It is small enough that a single good profile can own a trade here, and far enough from Orangeville that the big Orangeville profiles do not always reach.',
    map:
      'A small town with a wide catchment is the easiest map to win and the easiest to lose. The first business to get its profile right tends to hold it, because there are only a handful of real competitors for any one trade.',
    near: ['orangeville', 'mono', 'grand-valley'],
    geo: [44.0783, -80.2044],
  },
  {
    slug: 'fergus',
    name: 'Fergus',
    area: 'Centre Wellington',
    term: 'local SEO Fergus',
    places: ['Fergus', 'Elora', 'Belwood', 'Salem', 'Centre Wellington'],
    ground:
      'Fergus is one half of Centre Wellington, on the Grand River with Elora a few minutes downstream. A lot of the trades and shops that serve the whole township sit in Fergus, and the two towns share one set of customers who search by either name.',
    map:
      'Because Fergus and Elora sit so close together, a business in one competes in both. The profile and the pages behind it have to name both towns and the township, or half of the searches go to someone who did.',
    near: ['elora', 'guelph', 'erin'],
    geo: [43.7059, -80.3777],
  },
  {
    slug: 'elora',
    name: 'Elora',
    area: 'Centre Wellington',
    term: 'local SEO Elora',
    places: ['Elora', 'Fergus', 'Salem', 'Elora Gorge', 'Centre Wellington'],
    ground:
      'Elora is the other half of Centre Wellington - the gorge, the historic core on the Grand River, and a lot of newer housing around it. It draws visitors as well as residents, which means the searches here come from people who have never heard of a local business before they pick up the phone.',
    map:
      'A visitor has no referral to lean on. The map decides for them, on what the profile shows in the few seconds they look: category, photos, hours, reviews and whether anyone answers them.',
    near: ['fergus', 'guelph', 'erin'],
    geo: [43.6849, -80.4306],
  },
  {
    slug: 'grand-valley',
    name: 'Grand Valley',
    area: 'Dufferin County',
    term: 'local SEO Grand Valley',
    places: ['Grand Valley', 'East Luther', 'Amaranth'],
    ground:
      'Grand Valley is the upper Grand River town in Dufferin County, west of Orangeville, with a growing residential core and a wide rural township around it. Most searches from here are answered by businesses based in Orangeville or further, simply because so few list Grand Valley at all.',
    map:
      'That gap is the opportunity. A business that serves Grand Valley and says so - in its service area, on a page of its own and in the reviews it collects there - is often competing with nobody for the pack.',
    near: ['orangeville', 'shelburne', 'fergus'],
    geo: [43.8964, -80.3147],
  },
];

export const townBySlug = (slug: string) => TOWNS.find((t) => t.slug === slug);
export const townPath = (slug: string) => `/local-seo/${slug}/`;
