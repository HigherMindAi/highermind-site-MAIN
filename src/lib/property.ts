// ---------------------------------------------------------------------------
// HigherMindAI - property & condominium management track
// Single source of truth for the property book: engine names, published
// figures, guarantee wording, and the FAQ set.
//
// PRICING RULE: figures render in visible copy only. They never enter JSON-LD.
// A price in structured data can be cached into a rich result against me;
// visible copy changes in one deploy. Keep them apart. See schema.ts.
//
// Source of truth for every figure below: Onboarding kit v7.0 (Property).
// If a number here ever disagrees with the kit, the kit wins.
//
// Hyphens only, never em-dashes. Solo first person. No client names.
// ---------------------------------------------------------------------------

/* -------------------------------------------------------------- guarantees */

// The corrected Rank Lock. Use this string, do not paraphrase it.
// The old site copy said "60 days or you stop paying", which overstated it.
export const RANK_LOCK =
  'First page inside 60 days on the agreed primary term, or the monthly pauses until it lands. Toronto, Vancouver and Montreal carry a 90-day provision, agreed at kickoff.';

export const RANK_LOCK_SHORT =
  'First page in 60 days or the monthly pauses until it lands';

// Property launch window. Chat is 14, voice is 21 by design.
export const LAUNCH_LOCK =
  'Live in 14 to 21 days, or the launch half of the build is not owed.';

export const LAUNCH_WINDOW = 'Live in 14-21 days';

export const RECORD_LOCK =
  'The Record from month one. If I cannot show you what came in and how fast it was answered, you are not being asked to take my word for it.';

export const NO_DOORS_PROMISE =
  'No promise of a number of doors. That depends on your fees, your close rate and your capacity. Saying so is part of the pitch.';

/* ------------------------------------------------------------ published $ */

// What renders on the site. The whole-Keystone monthly is deliberately NOT
// here: portfolio scaling makes a single figure misleading on a firm carrying
// nine corporations, and founding-four scarcity reads as pressure in print.
export const PRICE = {
  seoMonthly: '$900/mo',
  seoSprint: '$1,150 one-time',
  cortex: '$450/mo',
  cortexSetup: '$1,400 setup',
  operator: '$600/mo',
  operatorSetup: '$2,000 setup',
  deskWhole: '$900/mo',
  deskWholeSetup: '$2,800 setup',
  trustFrom: 'from $800 per platform',
  from: 'from $900 a month',
} as const;

// Geo-scoped deliberately. These are Canadian rates in Canadian dollars, and a
// US reader who converts them and then hears a USD number on a call would be
// right to ask why. Saying it first is cheaper than being asked.
export const PRICE_FOOTNOTE =
  'All figures CAD, and they are the rates for Canadian firms. US firms are priced separately in USD - different market, different rate, and I will give you the number on the call rather than make you convert this one. Annual prepay is charged as ten months. Where paid demand is configured, ad spend is separate and paid directly by you to the platform - I never hold it or mark it up.';

export const KEYSTONE_WHOLE_NOTE =
  'The whole Keystone is bundled below the sum of the parts, on founding terms held twelve months, for the first four firms only. What it comes to depends on how many corporations the desk carries, so I will give you the number on the call rather than guess at it here.';

export const PORTFOLIO_SCALING =
  'Every desk tier covers up to five corporations. Past that, intake volume genuinely changes and so does the price: an additional $60 a month per corporation on Cortex and $80 on The Operator, plus a one-time $150 or $200 to load that corporation\u2019s documents. Agreed in writing before go-live, and never applied retroactively.';

/* ------------------------------------------------------------ the arithmetic */

export const DOOR_MATH: [string, string, string][] = [
  ['One door, monthly management', '$2,400 rent at 10 percent', '$240'],
  ['One door, first-year value', 'Management plus one placement', '$4,080'],
  ['Four doors held three years', 'Management only, no turnover counted', '$34,560'],
];

/* ---------------------------------------------------------------- the scope */

// Published, not buried. This is the differentiator and it costs nothing.
export const SCOPE_DOES: string[] = [
  'Answers from the corporation\u2019s or the firm\u2019s own documents',
  'Triages against criteria you set, not criteria I assume',
  'Logs every contact with a timestamp in and a timestamp answered',
  'Routes anything real to a licensed manager on your escalation order',
  'Books owner enquiries into your calendar',
];

export const SCOPE_STOPS: string[] = [
  'It does not interpret a declaration',
  'It does not decide common element versus unit',
  'It does not commit the corporation to a dollar',
  'It does not touch another owner\u2019s file',
  'It does not put dates on statutory processes',
  'It does not accept service of anything',
];

export const CMRAO_LINE =
  'Where a jurisdiction licenses management - the CMRAO in Ontario, equivalents elsewhere - the desk routes to a licensed manager and stops. It does not perform, and is never presented as performing, any function requiring a licence.';

/* ------------------------------------------------------------------- proof */

// Sector and region only. No client is ever named on the site.
export const PROPERTY_PROOF: { head: string; body: string; note: string }[] = [
  {
    head: 'A property management firm, Moncton, New Brunswick',
    body: 'Ranks first for property management in its city. 4.9 stars across 57 reviews. Between February and June: 1,098 profile interactions, 88 calls, 743 website clicks.',
    note: 'The honest note: year over year, interactions are down about eight percent and clicks about seventeen. The position and the volume are real. The trend is not a straight line, and I would rather you hear that from me now than find it later. This is a live engagement and the dashboard is open on a call.',
  },
  {
    head: 'A security systems installer, Atlantic Canada',
    body: 'From a profile that did not exist to number two in Google Maps inside thirty days, and to first for both primary terms by the fifth month. 5.0 stars across 14 reviews. Monthly profile interactions climbed from roughly 18 to roughly 96 over that period, and the profile is live today.',
    note: 'Different industry, same engine, and it is the cleanest evidence I have of a profile going from nothing to first - which is the position most firms I speak to are actually in. It also beat the 60-day guarantee by a month, which is over-delivery on one build rather than a promise I will repeat to you.',
  },
];

/* --------------------------------------------------------------------- FAQ */

// Six answer-first FAQs on the buyer-side terms. Visible text and FAQPage
// schema must stay identical.
export const PROPERTY_FAQ: [string, string][] = [
  [
    'How do property management companies get more doors from Google?',
    'By owning the local pack for the searches owners actually run - "property management company" plus their city - rather than buying those enquiries per lead. That means the Google Business Profile claimed and rebuilt with the correct category, every service named the way owners search for it, the service area mapped properly, steady review velocity, and consistent details everywhere the firm appears. Position compounds and the firm keeps it. A purchased lead stops the day payment stops.',
  ],
  [
    'What does a property management answering service actually do after hours?',
    'Most take a name and a number and pass it on in the morning. The desk I build answers and qualifies the contact, triages it against the criteria the firm sets, books owner enquiries straight into the calendar, logs everything with a timestamp in and a timestamp answered, and routes anything real to a licensed manager on the firm\u2019s own escalation order. It is administrative intake and nothing else.',
  ],
  [
    'Is property management SEO worth paying for when I already buy owner leads?',
    'That depends on what you want at the end of three years. Purchased leads are frequently shared with your competitors, priced the same every month forever, and they stop dead when payment stops - nothing accrues. Ranking is slower to start, it compounds, and the position stays yours. On a $2,400 door at ten percent, one owner won and kept is about $240 a month and roughly $4,080 in year one. The arithmetic only has to work once.',
  ],
  [
    'Does Google ranking help a condominium management firm win board work?',
    'Not the way it helps a rental firm, and I will not pretend otherwise. Boards do not find a manager through search - they run an RFP through a selection committee. What search does on that side is defensive: when three names go to the board, somebody looks all three up that evening, and what they find decides who receives the package. On the condominium track the work is reputation and record first, and visibility third.',
  ],
  [
    'Can an AI intake desk handle condominium enquiries without breaching CMRAO rules?',
    'It can, because it never performs a licensed function. It answers from the corporation\u2019s own documents, triages on the corporation\u2019s own criteria, logs the contact, routes to a licensed manager, and stops. It does not interpret a declaration, decide common element versus unit, commit the corporation to a dollar, touch another owner\u2019s file, put dates on statutory processes, or accept service. Where a jurisdiction licenses management, the desk routes and stops.',
  ],
  [
    'How long does it take to go live?',
    'Fourteen to twenty-one days. Chat intake is live in fourteen. Voice takes twenty-one by design, because every corporation\u2019s emergency criteria and escalation order has to be loaded and tested before a phone answers. If it is not live in that window, the launch half of the build is not owed.',
  ],
];
