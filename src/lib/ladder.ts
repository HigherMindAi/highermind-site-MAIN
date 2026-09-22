// ---------------------------------------------------------------------------
// THE LADDER - v13 (Outreach + Onboarding v6.0, 22 September 2026)
//
// Mirrors LADDER_v13.json word for word. The buyer is shown three steps in a
// fixed order and asked which one fits - never a menu of eight lines. The
// Read is the way in, The Tap is last. The eight lines still exist, but only
// as what sits INSIDE a step (see LINE_TO_STEP below).
//
// Figure-free by construction. No price, range or "from" ever reaches this
// file - figures are said in the nine minutes and written only after it.
// ---------------------------------------------------------------------------

export const ONE_LINE =
  'I find what is costing a local business its calls, fix it in order, and only then turn on the ads.';

export const THE_QUESTION = 'Not whether you want it - which one fits where you are.';

export const CTA_LABEL = 'Take the nine minutes';
export const CTA_HREF = '/book/';

/** The Rank Lock, in the words the agreements use. The only outcome promise. */
export const RANK_LOCK =
  'The Rank Lock: first page on the agreed term inside sixty days - ninety in the hardest markets - or the monthly pauses until it lands.';

/** The Launch Lock, as written in the agreements. */
export const LAUNCH_LOCK =
  'Live in 14 days on the web and 21 on the phone, counted from the last thing I need from you.';

export const TAP_LINE =
  'I will not spend your money sending traffic to a profile with the wrong hours and a website that does not convert. Fix that first, then we turn the tap on - on your own accounts, your spend on your own card, and I am paid on what it sells.';

export interface Step {
  key: 'read' | 'pin' | 'foundation' | 'storefront' | 'tap';
  name: string;
  position: string;
  /** The one line, in public words. */
  line: string;
  /** Longer promise sentence. */
  promise: string;
  /** What he will be able to see. */
  see: string[];
  guarantee: string;
  href: string;
  anchor?: boolean;
}

export const READ: Step = {
  key: 'read',
  name: 'The Read',
  position: 'The way in',
  line: 'Everything you have online, gone through properly, in a week.',
  promise:
    'Everything you have online, gone through properly in a week. What is wrong, what it costs, and a fixed price on the right step.',
  see: [
    'What is wrong, in writing, ranked by what it costs you',
    'Where you actually stand against the businesses above you',
    'A fixed price on the right step, and the reason it is that one',
  ],
  guarantee: 'Three real findings or it is free.',
  href: '/the-read/',
};

export const PIN: Step = {
  key: 'pin',
  name: 'The Pin',
  position: 'Step one',
  line: 'Found, and held.',
  promise: 'Your Google profile rebuilt against the businesses above you, then held.',
  see: [
    'Your profile in the map for the agreed term',
    'Every review answered, and new ones asked for properly',
    'Where you started, recorded before anything is touched',
  ],
  guarantee: RANK_LOCK,
  href: '/how-it-works/#the-pin',
};

export const FOUNDATION: Step = {
  key: 'foundation',
  name: 'The Foundation',
  position: 'Step two',
  line: 'Found, trusted, answered, measured.',
  promise: 'Everything in the Pin, plus:',
  see: [
    'Facebook and Instagram rebuilt properly and kept current from your own job photos',
    'A desk that answers when you cannot - on the web or on your phone line',
    'Every call and form counted, so you see exactly what it did',
  ],
  guarantee: 'The Rank Lock on the profile, and the Launch Lock on the desk.',
  href: '/how-it-works/#the-foundation',
  anchor: true,
};

export const STOREFRONT: Step = {
  key: 'storefront',
  name: 'The Storefront',
  position: 'Step three',
  line: 'The Foundation, and a site that sells.',
  promise:
    'Everything in the Foundation, plus a website built around how your customers buy and how you actually close. Not a brochure. Hosted and cared for.',
  see: [
    'Everything in the Foundation',
    'A site that answers a buyer’s questions on a phone in the time it takes to decide',
    'Every enquiry through it counted and answered',
  ],
  guarantee:
    'The Rank Lock, the Launch Lock, and no monthly until the site is live if it runs late on my side.',
  href: '/how-it-works/#the-storefront',
};

export const TAP: Step = {
  key: 'tap',
  name: 'The Tap',
  position: 'Last',
  line: 'Now turn it on.',
  promise:
    'Paid campaigns on your own accounts, on top of a Foundation that is already working. Last, always.',
  see: [
    'Paid campaigns on your own accounts',
    'Spend on your own card, visible without asking',
    'Paid on what it sells, not on what it spends',
  ],
  guarantee: 'Tracking before spend, or the build comes back.',
  href: '/how-it-works/#the-tap',
};

/** The three steps, in order. */
export const STEPS: Step[] = [PIN, FOUNDATION, STOREFRONT];

/** The whole ladder in its fixed order. */
export const LADDER_ORDER: Step[] = [READ, PIN, FOUNDATION, STOREFRONT, TAP];

/** Offered only after the choice. Never the menu. */
export const AFTER_YOU_CHOOSE: { name: string; line: string; href?: string }[] = [
  {
    name: 'More Cities',
    line: 'The next town built as its own ranked unit, once the first one holds.',
    href: '/services/service-area-expansion/',
  },
  {
    name: 'The Mention',
    line: 'Getting named when people ask an assistant instead of searching.',
    href: '/ai-search-optimization/',
  },
  {
    name: 'Extra social surfaces',
    line: 'A third surface, a video layer or a LinkedIn lane - only where your buyers actually look.',
    href: '/services/social-media-management/',
  },
  {
    name: 'Custom systems',
    line: 'Custom systems for the job that eats your week. Scoped on its own.',
    href: '/services/ai-systems/',
  },
];

/** Which step each of the eight delivery lines sits inside. */
export const LINE_TO_STEP: Record<string, { step: string; href: string }> = {
  visibility: { step: 'The Pin', href: '/how-it-works/#the-pin' },
  'service-area-expansion': { step: 'After you have chosen', href: '/how-it-works/#after' },
  'website-build': { step: 'The Storefront', href: '/how-it-works/#the-storefront' },
  intake: { step: 'The Foundation', href: '/how-it-works/#the-foundation' },
  'social-media-management': { step: 'The Foundation', href: '/how-it-works/#the-foundation' },
  'reputation-management': { step: 'The Pin', href: '/how-it-works/#the-pin' },
  'ai-search-optimization': { step: 'After you have chosen', href: '/how-it-works/#after' },
  'paid-growth': { step: 'The Tap', href: '/how-it-works/#the-tap' },
  'ai-systems': { step: 'After you have chosen', href: '/how-it-works/#after' },
};

/** The flip - which story a surface tells. A single section never mixes them. */
export const FLIP = {
  leaky: {
    who: 'Busy, slow to answer, calls ringing out',
    hook: 'You are losing the calls you already get.',
    recommend: 'The Foundation',
  },
  empty: {
    who: 'Good at the work, strong rating, nobody knows you',
    hook: 'You close nearly everyone who finds you. Almost nobody does.',
    recommend: 'The Pin - or The Storefront if the site is weak too',
  },
};

export const VERTICALS = [
  { key: 'trades', name: 'Trades', href: '/trades/', landsOn: 'The Foundation' },
  {
    key: 'auto_parts',
    name: 'Auto Parts and Recyclers',
    href: '/auto-parts-recyclers/',
    landsOn: 'The Read, then The Storefront',
  },
  {
    key: 'auto_service',
    name: 'Auto Service and Collision',
    href: '/auto-service-collision/',
    landsOn: 'The Foundation',
  },
];

/** The proof, described as a build - never a result. */
export const PROOF_PLAIN =
  'An auto parts business in Brampton whose site was a phone number and an address now runs a part matcher on year, make, model and trim, a page for each vehicle it stocks for, and a request that reaches the counter by text already carrying everything needed to quote it.';

/** The four FAQ additions from the handoff, word for word. */
export const LADDER_FAQ: [string, string][] = [
  [
    'What does it cost?',
    'Each step has a fixed price, said plainly on the nine minutes once I have seen what you have. You will not get a range from me before I have looked.',
  ],
  [
    'What is The Read?',
    'Everything you have online, gone through properly in a week. What is wrong, what it costs, and a fixed price on the right step. Three real findings or it is free. The findings are yours either way, and the fee comes off whichever step you choose within thirty days.',
  ],
  ['Why not start with ads?', TAP_LINE],
  [
    'Do I have to sign a contract?',
    'Month to month, fourteen days notice either way, and you own every account from day one.',
  ],
];

/** Booking-source options - they map onto the Source column of The Choice. */
export const BOOKING_SOURCES = [
  'Phone call',
  'Email',
  'Website',
  'Google',
  'Facebook or Instagram',
  'LinkedIn',
  'X',
  'WhatsApp',
  'Referral',
  'Already know Derek',
];
