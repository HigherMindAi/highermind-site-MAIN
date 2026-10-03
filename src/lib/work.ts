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
  /**
   * Spans both columns of the /work/ grid on desktop, image left and copy
   * right. Used for one lead concept so an odd number of cards never strands
   * one. Phones render it as an ordinary card.
   */
  wide?: boolean;
  /** With `wide`: image on the right instead of the left. */
  flip?: boolean;
  /** Overrides the generated alt text when a card needs its own wording. */
  alt?: string;
}

/** Alt text that never calls a film still or a concept a client's website. */
export function shotAlt(w: WorkItem): string {
  if (w.alt) return w.alt;
  if (w.still) return `A still from the ${w.name} site`;
  if (w.kind === 'concept') return `The ${w.name} concept site`;
  return `The ${w.name} website`;
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

  // Signed 3 Oct 2026: the Honeydew concept went live for the client at
  // honeydewltd.ca. Every feature named here was read off the live site that
  // day. The owner's lead board from the concept is NOT on the live site, so it
  // is not claimed. The image is the site's own Higgsfield kitchen frame.
  {
    slug: 'honeydew-contracting',
    name: 'Honeydew Contracting',
    url: 'honeydewltd.ca',
    href: 'https://honeydewltd.ca/',
    tag: 'Website build',
    line: 'A renovator in Erin, Mono and Caledon, built so the project arrives planned before the first call.',
    body:
      'A basement, bathroom and kitchen renovator working Erin, Mono and Caledon. The site is built around the consultation: a homeowner tells the planner the room, the size and the finish they have in mind, adds a few photos of the space, and it goes straight to the owner, with a permit check by town built in. There is no price guessing on the page by design - the number comes after he has seen the space - and the way a job runs is set out in four steps, from consultation to walkthrough.',
    built: [
      'Project planner: room, size, finish and photos',
      'Permit check by town, built into the planner',
      'How a job runs, in four steps',
      'Basement finishing and Erin pages',
      'A short film on the home page',
    ],
    shot: 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/hf_20260928_181658_3fa1ef1f-65a0-4f07-8546-eccb72cd68ec_min.webp',
    still: true,
    tone: 'linear-gradient(160deg,#2A2418,#141210 58%,#0A0908)',
    feature: true,
    wide: true,
  },

  // --- Concept builds (28 Sept 2026) ---------------------------------------
  // Built on spec, not bought. Every feature named here was read off the live
  // demo on 28 Sept 2026. The stills are the demos' own Higgsfield hero frames.
  {
    slug: 'halvorn-industrial-lighting',
    name: 'Halvorn Industrial Lighting',
    url: 'halvorn-lighting.netlify.app',
    href: 'https://halvorn-lighting.netlify.app',
    tag: 'Concept build',
    line: 'An industrial LED lighting concept where the buyer plans the job before asking for a quote.',
    body:
      'A concept I built on a fictional brand, for the kind of industrial LED lighting maker whose fixtures go into showrooms, service bays, paint booths, lots, mines and off-grid sites. The centre of it is a lighting planner: pick the space, enter the size and the mounting height, and it returns a fixture count, the series to use, the energy saving against what is there today and any flag the site raises, worked on the standard lumen method. The quote request goes in with a reference number, and a quote desk behind the site follows every request from new to quoted to won against a two-hour call-back window.',
    built: [
      'Lighting planner: fixture count, series and energy saving',
      'Quote requests with a reference number',
      'Quote desk from new to quoted to won',
      'Four product series, each with its own page',
      'Ten application pages, showroom to off-grid',
      'The night shift, a film from the showroom to the open pit',
    ],
    // The demo's own hero frame (Higgsfield 45aeda6d): the showroom sedan under
    // the LED grid, without the UI. No brand name or logo in the frame.
    // Halvorn is a fictional brand - never describe it as a client.
    shot: 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/hf_20260929_004338_45aeda6d-dea2-453b-aeec-5a35eca97a94_min.webp',
    still: true,
    tone: 'linear-gradient(160deg,#1E1E22,#0F0F12 58%,#07070A)',
    feature: false,
    kind: 'concept',
    wide: true,
    flip: true,
    alt: 'Halvorn Industrial Lighting concept site - showroom hero',
  },
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
  // Added 3 Oct 2026. S Gill Tire Services is a real business and this is a
  // pitch demo (its own banner says "Concept demo - prepared for S Gill Tire
  // Services by HigherMindAI"). Features read off the live demo that day. If
  // they do not go ahead, do what was done for Enduralite: take the name off.
  {
    slug: 'sgill-tire-services',
    name: 'S Gill Tire Services',
    url: 'sgill-preview.netlify.app',
    href: 'https://sgill-preview.netlify.app/',
    tag: 'Concept build',
    line: 'A mobile tire service concept where a truck down becomes one message with the whole ticket in it.',
    body:
      'A concept I built for a mobile tire service covering the Greater Toronto Area, trucks and trailers first. A driver on the shoulder answers three things - where they are, the size on the sidewall and which wheel, picked off a diagram - and it arrives as a text or a WhatsApp message with the whole ticket in it. A tire size reader turns the sidewall size back into width, profile and rim. Behind the site, a board puts every call-out in a lane with a clock on it, and one load list adds up every tire size on the open tickets.',
    built: [
      'Three-step call-out: location, tire size, which wheel',
      'Tire size reader for the sidewall',
      'Owner board with lanes, clocks and a load list',
      'Seven service pages, roadside to brakes',
      'A page for each of eight towns it covers',
      'Official sources quoted in place of made-up reviews',
      'One night on the road, a film in chapters',
    ],
    // The demo's own hero frame (Higgsfield fd0129ed): a semi-trailer on a wet
    // shoulder at night with a flat. No lettering or plates in the frame.
    shot: 'https://d8j0ntlcm91z4.cloudfront.net/user_2vxHkVim9pDZL3FfvXCfzWCkqG7/hf_20261002_012326_fd0129ed-db8a-48d9-a739-4ee8fcdf32f5_min.webp',
    still: true,
    tone: 'linear-gradient(160deg,#1B1D21,#0B0C0E 58%,#050506)',
    feature: false,
    kind: 'concept',
  },
];

export const FEATURED = WORK.filter((w) => w.feature);
