// ---------------------------------------------------------------------------
// SELECTED WORK
//
// Real sites, described honestly. What was built and what it does - never a
// performance figure, because a performance figure on a portfolio card is the
// one claim a prospect can check and the one nobody ever sources.
//
// `shot` points at a real screenshot under /work/. If the file is not there the
// card falls back to a designed frame rather than a broken box, so the page is
// never wrong-looking while a screenshot is pending.
//
// v15: every build here is described as a BUILD, never a result. The Brampton
// parts build carries PROOF_PLAIN from ladder.ts word for word, and is tagged
// with the ladder step it belongs to (The Storefront).
// ---------------------------------------------------------------------------

import { PROOF_PLAIN, STOREFRONT } from './ladder';

export interface WorkItem {
  slug: string;
  name: string;
  url: string;
  href: string;
  tag: string;
  line: string;
  body: string;
  built: string[];
  /**
   * Path to a real screenshot under /public/work/. EMPTY means there is not
   * one yet, and the card renders its designed frame instead - which is what
   * every new entry starts as.
   *
   * This is deliberately empty rather than pointing at a missing file. On a
   * prerendered page the img error fires BEFORE React hydrates, so an onError
   * handler never runs and the visitor sees a broken-image glyph. The only
   * reliable answer is not to reference a file that is not there.
   */
  shot: string;
  /** Brand hue pulled from the site itself, for the fallback frame. */
  tone: string;
  feature: boolean;
}

export const WORK: WorkItem[] = [
  {
    slug: 'canada-car-part',
    name: 'Canada Car Parts',
    url: 'canadacarpart.com',
    href: 'https://canadacarpart.com/',
    tag: STOREFRONT.name,
    line: 'An auto parts counter in Brampton, rebuilt as a part finder.',
    body:
      PROOF_PLAIN +
      ' A buyer picks the vehicle, sees what fits it, and sends the request with photographs attached where the part depends on the damage - so the first call is about the part rather than about what car it is.',
    built: [
      'Year, make, model and trim part matcher',
      'A page for each vehicle it stocks for',
      'Requests to the counter by text',
      'Photographs attached where the damage decides the part',
      'LocalBusiness and catalogue schema',
    ],
    shot: '/work/canadacarpart.webp',
    tone: 'linear-gradient(160deg,#151518,#0B0B0D 58%,#050506)',
    feature: true,
  },
  {
    slug: 'bubbles-window-cleaning',
    name: 'Bubbles Window Cleaning',
    url: 'bubblescleaningservices.com',
    href: 'https://bubblescleaningservices.com/',
    tag: STOREFRONT.name,
    line: 'A window cleaner in East York, rebuilt so the price and the quote come first.',
    body:
      'A window and eavestrough cleaner in East York serving the Greater Toronto Area, rebuilt around the two things a homeowner wants before they call: roughly what it costs for a house like theirs, and a quote without the back and forth. The price guide is set out by storey, a three-step quote builder sends the request by text, and every neighbourhood it serves has its own page. The glass on the site is real job photography, not stock.',
    built: [
      'Price guide set out by storey',
      'Three-step quote builder, sent by text',
      'A page for each neighbourhood it serves',
      'Service pages for windows, eavestroughs and screens',
      'Real job photography and a short film of the work',
    ],
    // Hosted with the rest of the site's media on the CDN.
    shot: 'https://d2ol7oe51mr4n9.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/5a1d7529-2c4c-44a5-9be7-2040828ec859.webp',
    tone: 'linear-gradient(160deg,#16305E,#0B1A3A 58%,#060D1F)',
    feature: true,
  },
];

export const FEATURED = WORK.filter((w) => w.feature);
