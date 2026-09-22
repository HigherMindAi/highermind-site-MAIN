// ---------------------------------------------------------------------------
// HigherMindAI - property & condominium management book
// One of four named books (auto service, auto parts, trades, property). Source of truth for
// the property tags, the guarantee wording, and the property FAQ set.
//
// PRICING RULE, SEPTEMBER 2026: there is NO pricing on this site. Not a figure,
// not a range, not a "starting from", not in copy and not in JSON-LD. The
// arithmetic is done live, on the prospect's own numbers, inside the nine
// minutes. The old published ladder is retired and must not return.
//
// v15 NAMING: the property work sits inside the ladder like everything else.
// Visibility and reviews are inside The Pin; the intake desk and the record of
// every call and form are inside The Foundation; the site is The Storefront;
// paid is The Tap, last. The Rank Lock and the Launch Lock are the ladder's own
// words and are re-exported from ladder.ts rather than retyped here.
//
// Hyphens only, never em-dashes. Solo first person. No client names, and no
// result claims - the only proof on the site is a build (PROOF_PLAIN).
// ---------------------------------------------------------------------------

import { RANK_LOCK, LAUNCH_LOCK } from './ladder';

/* -------------------------------------------------------------- guarantees */

// The Rank Lock and the Launch Lock, word for word from ladder.ts.
export { RANK_LOCK, LAUNCH_LOCK };

export const RECORD_LOCK =
  'Logged and reported from month one, at no extra cost and never as a separate line. If I cannot show you what came in and how fast it was answered, you are not being asked to take my word for any of it.';

export const NO_DOORS_PROMISE =
  'No promise of a number of doors. That depends on your fees, your close rate and your capacity. Saying so is part of the pitch.';

/* --------------------------------------------------------- scaling + upsell */

// Price-free by rule. The number moves with the portfolio and gets worked out
// on the call, against the firm's own corporation count.
export const PORTFOLIO_SCALING =
  'Every desk covers a set number of corporations. Past that, intake volume genuinely changes and so does what it takes to carry it - agreed in writing before go-live, and never applied retroactively. What that comes to for your portfolio is worked out on the call rather than guessed at here.';

// The whole upsell, in one sentence. Web now, phone later - and later costs
// exactly what day one would have. Say it plainly or it reads as a trap.
export const DESK_ADD_CHANNEL =
  'Start on the web or on the phone line, and add the second whenever you want it - it costs exactly what it would have cost on day one. No upgrade premium, nothing renegotiated, a one-line amendment.';

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
    'That depends on what you want at the end of three years. Purchased leads are frequently shared with your competitors, priced the same every month forever, and they stop dead when payment stops - nothing accrues. Ranking is slower to start, it compounds, and the position stays yours. One is rent and one is an asset, and at the end of a three-year run only one of them is still working for you. What one owner is actually worth to you is arithmetic I do on the call, on your fees rather than mine.',
  ],
  [
    'Does Google ranking help a condominium management firm win board work?',
    'Not the way it helps a rental firm, and I will not pretend otherwise. Boards do not find a manager through search - they run an RFP through a selection committee. What search does on that side is defensive: when three names go to the board, somebody looks all three up that evening, and what they find decides who receives the package. On the condominium track the work is reputation and record first, and visibility third.',
  ],
  [
    'Can an intake desk handle condominium enquiries without breaching CMRAO rules?',
    'It can, because it never performs a licensed function. It answers from the corporation\u2019s own documents, triages on the corporation\u2019s own criteria, logs the contact, routes to a licensed manager, and stops. It does not interpret a declaration, decide common element versus unit, commit the corporation to a dollar, touch another owner\u2019s file, put dates on statutory processes, or accept service. Where a jurisdiction licenses management, the desk routes and stops.',
  ],
  [
    'How long does it take to go live?',
    LAUNCH_LOCK +
      ' The phone takes longer by design, because every corporation\u2019s emergency criteria and escalation order has to be loaded and tested before a phone answers.',
  ],
];
