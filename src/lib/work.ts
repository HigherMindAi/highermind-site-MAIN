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
// parts build carries PROOF_PLAIN from ladder.ts word for word.
// v15.9: tagged "Website build", not "The Storefront". Both clients bought the
// website only; The Storefront is the full step (profile, desk, Meta,
// tracking and site), and a prospect's own assistant will check the claim.
// ---------------------------------------------------------------------------

import { PROOF_PLAIN } from './ladder';

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
  /**
   * 'client' (default) is a site a business bought. 'concept' is a site I
   * built on spec to show what a trade site can do. Concepts are tagged
   * "Concept build", close on "The demo is live at", stay off the home grid
   * (feature: false) and never borrow a client's result or PROOF_PLAIN.
   */
  kind?: 'client' | 'concept';
  /**
   * true when `shot` is a still from the site's own film rather than a
   * screenshot of the page. It renders inside a browser bar carrying the URL,
   * so it reads as the site and is never passed off as a screen capture.
   */
  still?: boolean;
}

export const WORK: WorkItem[] = [
  {
    slug: 'canada-car-part',
    name: 'Canada Car Parts',
    url: 'canadacarpart.com',
    href: 'https://canadacarpart.com/',
    tag: 'Website build',
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
    tag: 'Website build',
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

  // --- Concept builds (28 Sept 2026) ---------------------------------------
  // Built on spec, not bought. Every feature named here was read off the live
  // demo on 28 Sept 2026. The stills are the demos' own Higgsfield hero frames.
  {
    slug: 'emberline-heating-cooling',
    name: 'Emberline Heating & Cooling',
    url: 'hvacwebdesign.netlify.app',
    href: 'https://hvacwebdesign.netlify.app/',
    tag: 'Concept build',
    line: 'A heating and cooling concept built around the call that comes at 2 a.m.',
    body:
      'A concept I built to show what a heating and cooling site can do when a furnace quits on a freezing night. The homeowner gets through a no-heat triage in six taps - symptom, system, age, town and a photo - and it lands on the on-call tech\'s phone. Anyone pricing a replacement gets an installed range and a monthly figure in about ten seconds. Behind the site sits a dispatch board that puts no heat on a freezing night at the top and flags the replacements.',
    built: [
      'No-heat triage in six taps, sent to the on-call tech',
      'Installed price range with a monthly figure',
      'Dispatch board that puts no heat at the top',
      'A maintenance plan with priority dispatch',
      'Heat pump and Orangeville landing pages',
      'The 2 a.m. call, a 77 second film',
    ],
    shot: 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/hf_20260928_185059_b3910d12-8c8f-4930-9713-963bfbeadb4c_min.webp',
    still: true,
    tone: 'linear-gradient(160deg,#1C2748,#0B1A3A 58%,#060D1F)',
    feature: false,
    kind: 'concept',
  },
  {
    slug: 'honeydew-contracting',
    name: 'Honeydew Contracting',
    url: 'contractorwebdesign.netlify.app',
    href: 'https://contractorwebdesign.netlify.app/',
    tag: 'Concept build',
    line: 'A renovation concept where the project arrives planned, photos attached, before the first call.',
    body:
      'A concept I built for a kitchen, bathroom and basement renovator working Erin, Mono and Caledon. The homeowner spends two minutes in the project planner - the room, the size, the finish they have in mind and a few photos of the space - and it lands on the owner\'s phone as a text. The page carries no prices by design; it sells the consultation. Behind it sits a lead board that lists every request oldest first against a two-hour call-back clock, with permit checks and out-of-area jobs flagged.',
    built: [
      'Two-minute project planner with photos, sent by text',
      'Lead board with a two-hour call-back clock',
      'A four-step process, consultation to walkthrough',
      'Permit checks and out-of-area jobs flagged',
      'Erin and basement finishing landing pages',
    ],
    shot: 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/hf_20260928_181658_3fa1ef1f-65a0-4f07-8546-eccb72cd68ec_min.webp',
    still: true,
    tone: 'linear-gradient(160deg,#2A2418,#141210 58%,#0A0908)',
    feature: false,
    kind: 'concept',
  },
];

export const FEATURED = WORK.filter((w) => w.feature);
