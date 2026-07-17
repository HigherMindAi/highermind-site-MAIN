// ---------------------------------------------------------------------------
// HigherMindAI - service ladder + per-service page content (no pricing)
// Copy ported verbatim from the static build. Hyphens only, never em-dashes.
// ---------------------------------------------------------------------------

export interface ServiceListItem {
  slug: string;
  name: string;
  line: string;
  flag: boolean;
}

export const SERVICES: ServiceListItem[] = [
  {
    slug: 'paid-growth',
    name: 'Paid Growth',
    line: 'Engineered ad funnels built on the language your real buyers use. Spend that compounds into pipeline, not a gamble.',
    flag: false,
  },
  {
    slug: 'ai-systems',
    name: 'AI Systems',
    line: 'Custom AI built on your own knowledge. Intake, triage, qualifying, follow-up. It answers from your truth or it hands off. It never guesses.',
    flag: false,
  },
  {
    slug: 'service-area-expansion',
    name: 'Service Area Expansion',
    line: 'Own more than your home city. Each target town built as its own ranked unit - you only invest in places I can win.',
    flag: false,
  },
  {
    slug: 'website-build',
    name: 'Website Build',
    line: 'Not a brochure - a salesperson. A fast, conversion-built site that turns the people already searching into booked consultations.',
    flag: false,
  },
  {
    slug: 'social-authority',
    name: 'Social Authority',
    line: 'Google decides if they find you. Your profile decides if they trust you. A searchable, always-credible storefront.',
    flag: false,
  },
];

export interface ServicePageData {
  title: string;
  desc: string;
  h1Lead: string;
  h1Em: string;
  sub: string;
  eyebrow: string;
  values: [string, string][];
  process: [string, string][];
  faq: [string, string][];
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  'ai-systems': {
    title: 'Custom AI Systems & Automation for Law Firms | HigherMindAI',
    desc: 'Custom AI built on your own knowledge. Intake, triage, qualifying, quoting, follow-up. It answers from your truth or it hands off cleanly. It never guesses, and it never invents.',
    h1Lead: 'The same forty answers, ',
    h1Em: 'a hundred times a week.',
    sub: 'Every firm runs on one signature motion - an intake, a conflict check, a screen, a booking, a follow-up - and it eats the day. I build the AI that runs it, on your own knowledge, so it answers from your truth rather than a plausible guess. Where the stakes are real, it hands off to a human instead of having an opinion.',
    eyebrow: 'AI Systems',
    values: [
      ['Grounded in your knowledge', 'It answers from the truth of your firm - your services, your criteria, your policies - or it hands off. It is engineered not to invent, because an invented answer in a medical or legal context is not a bug, it is a liability.'],
      ['Built around one signature motion', 'Not a generic assistant. The one thing your business actually lives on: the intake form, the eligibility check, the quote, the triage. I build that, and I build it properly.'],
      ['It hands off at the edge', 'The most important thing an AI system does is know where it stops. Yours will have a hard edge, and a human on the other side of it.'],
    ],
    process: [
      ['Find the motion', 'The one repeated action costing you the most hours. Usually it is not the one you would guess, and I will tell you if the honest answer is that you do not need this.'],
      ['Ground it', 'Your knowledge, your rules, your escalation edge. About thirty minutes of input from you.'],
      ['Build and test it', 'Run against the real questions and the real edge cases, then tuned until it behaves the way you would.'],
      ['Ship it', 'Live in 14 days, or the build fee comes back in full.'],
    ],
    faq: [
      ['How is this different from Cortex?', 'Cortex is the intake desk - it answers, qualifies and books. AI Systems is everything behind it: the intake, the triage, the quote, the follow-up. Most firms need the intake desk first.'],
      ['Will it make things up?', 'It is built not to. It answers from your grounded knowledge or it hands off to a human. In a clinical or legal setting that boundary is the whole design, not a feature.'],
      ['How much of my time does it take?', 'About thirty minutes of real input, then I build it. You approve it before it goes anywhere near a customer.'],
      ['What if I do not actually need this?', 'Then I will say so. I would rather tell you on the first call than take your money and watch you leave in three months. I have already had that year.'],
    ],
  },
  'service-area-expansion': {
    title: 'Service Area SEO Expansion, Headwaters Ontario | HigherMindAI',
    desc: 'Rank in more than your home city. Each target town is built as its own ranked unit with dedicated infrastructure - you only invest in places I can win.',
    h1Lead: 'Rank in every town you serve, ',
    h1Em: 'not just your own.',
    sub: 'Your Map Pack ranking is tied to where your pin sits. To win calls in the next town over, you need dedicated infrastructure built for that place - not your existing page spread thin across a map. Each target city is built to win on its own merits.',
    eyebrow: 'Service Area Expansion',
    values: [
      ['Winnability first', 'Before you commit a dollar, I assess the competition in the target town - search density, competitor strength, realistic ranking potential. You only invest in cities I can win.'],
      ['A dedicated unit per town', 'Each city gets its own purpose-built landing page with genuine local detail - neighbourhoods, landmarks, service-area language - engineered to rank for the service in that place.'],
      ['Compounds with your core ranking', 'Expansion sits on top of the Local Ranking System. Your home base stays strong while new territory comes online, one winnable town at a time.'],
    ],
    process: [
      ['Assess', 'Competition and winnability scored for each target town before anything is built.'],
      ['Build', 'A dedicated, locally-detailed city page, engineered for the service plus the town.'],
      ['Rank', 'On-page and authority signals pointed at the new term until the pin competes.'],
      ['Hold', 'The town joins your weekly run and monthly heatmap, same as the rest.'],
    ],
    faq: [
      ['How is this different from just adding cities to my profile?', 'Stuffing extra cities into one profile or page dilutes everything. I build each town as its own ranked unit so each one competes on its own merits.'],
      ['Which towns should I target first?', 'The winnable ones. I score competition and search density before recommending where to expand, so your investment goes where it can rank.'],
      ['Do I need the Local Ranking System first?', 'Expansion builds on a strong home base. I get your core profile ranked, then widen the footprint town by town.'],
    ],
  },
  'website-build': {
    title: 'Conversion Website Design, Headwaters Ontario | HigherMindAI',
    desc: 'A fast, conversion-built website that turns the people already searching for you into phone calls and booked jobs. Not a brochure - a salesperson.',
    h1Lead: 'A website that earns the call, ',
    h1Em: 'not just the visit.',
    sub: 'A pretty site nobody calls is a cost. A fast, focused site that turns a stranger on their phone into a call, a booking, or a quote is an asset. Every section earns its place against one question - does it move a visitor closer to contacting you?',
    eyebrow: 'Website Build',
    values: [
      ['Built for the phone call', 'Click-to-call that works on mobile, your offer and number above the fold, real trust signals - reviews, licensing, the guarantee. Nothing decorative for its own sake.'],
      ['Fast and findable', 'Built clean and quick, tuned to the same on-page SEO standard I rank profiles on - title, schema, NAP, a page per service. The site supports the ranking, not just the eye.'],
      ['Approve it before it goes live', 'You see the finished site and sign off before launch. The work is done right the first time, on a clear, fixed scope.'],
    ],
    process: [
      ['Map the path', 'The exact route a buyer travels from landing to calling - structured before a pixel is placed.'],
      ['Build', 'A fast, conversion-built site with your offer, proof, and call-to-action where they convert.'],
      ['Tune for search', 'On-page SEO to the W2 standard - title, H1, schema, NAP, a page per service.'],
      ['Launch', 'You approve it, it goes live, and ongoing care keeps it fast and secure.'],
    ],
    faq: [
      ['Is the website enough to get me ranked?', 'The site supports ranking but the Map Pack is its own system. The strongest results come from the website and the Local Ranking System working together.'],
      ['Will I be able to make edits?', 'Care and hosting keep the site fast, secure, and updated. Tell me what you need changed and it gets handled.'],
      ['How long does a build take?', 'A focused launch site moves quickly. Timeline depends on content and approvals, both of which I keep tight.'],
    ],
  },
  'social-authority': {
    title: 'Social Media Authority for Local Business | HigherMindAI',
    desc: 'Google decides if they find you. Your profile decides if they trust you. A searchable, always-credible storefront that confirms the decision the search already started.',
    h1Lead: 'The trust check, ',
    h1Em: 'passed before they call.',
    sub: 'A customer searches, lands on you, and does one more thing before they call: they open your Instagram to see if you are real, active, and worth trusting. If the last post was eighteen months ago, the call you earned on Google quietly goes to whoever looked alive.',
    eyebrow: 'Social Authority',
    values: [
      ['A searchable storefront', 'Optimized bio, name, and highlights, with a sustaining content rhythm - so the profile confirms the decision the search started, every time.'],
      ['Credible, not viral', 'This is not a go-viral service and it does not dance for an algorithm. It is the same discipline behind your ranking, pointed at trust.'],
      ['Managed, not abandoned', 'DMs and comments handled so no interested customer is left on read. The page reads active and real because it is.'],
    ],
    process: [
      ['Foundation', 'The searchable, always-credible profile - bio, name, highlights, set up to be found.'],
      ['Rhythm', 'A sustaining content cadence that keeps the page reading active and on-brand.'],
      ['Engage', 'DMs and comments managed so earned attention turns into conversation.'],
      ['Build', 'Authority layered on over time as the work justifies moving up a tier.'],
    ],
    faq: [
      ['Will you promise me followers or going viral?', 'No. I never promise followers, reach, or virality. The job is a credible, active, searchable profile that passes the trust check and confirms your ranking.'],
      ['Which platforms?', 'The ones your callers actually check before calling. I start where it matters most for your category.'],
      ['Do I need this if I am already ranking?', 'Ranking gets you found; social closes the trust gap. The two compound - a ranked profile plus a credible page closes more of the calls you earn.'],
    ],
  },
  'paid-growth': {
    title: 'Google & Meta Ads Management, Headwaters | HigherMindAI',
    desc: 'Engineered ad funnels built on the exact language your real clients use. Ad spend that compounds into a pipeline you can count on, not a monthly gamble.',
    h1Lead: 'Ad spend that compounds ',
    h1Em: 'into pipeline.',
    sub: 'Most ad spend is guesswork with a dashboard. Money goes in, impressions come out, and nobody can tell you why it worked or why it quietly stopped. I engineer the entire path a buyer travels - from a stranger\u2019s first scroll to a booked sale.',
    eyebrow: 'Paid Growth',
    values: [
      ['Built on real customer language', 'Every headline, image, and page is built on the words your real clients use and the proven structures of the top players in your category.'],
      ['The whole path, not just the click', 'From first scroll to booked sale - the ad, the page, and the follow-through engineered as one system, so you know which lever to pull when something moves.'],
      ['Aligned incentives', 'Structured as a performance share - I win when you win. Spend that builds a pipeline you can count on, not a gamble you re-roll and hope on.'],
    ],
    process: [
      ['Research', 'Your real clients\u2019 language and the top performers in your category, decoded.'],
      ['Build', 'Ad, audience, and landing page engineered as one path to a booked sale.'],
      ['Launch', 'Live with clear tracking on the metric that matters - booked work, not impressions.'],
      ['Optimize', 'Every result reads as a lever. When something moves, I know precisely why.'],
    ],
    faq: [
      ['How is pricing structured?', 'Paid Growth is structured as a performance share, so the incentives line up - I am paid to make your spend work, not to spend it.'],
      ['Google or Meta?', 'Whichever fits how your callers buy. Often both, built as one funnel rather than two disconnected campaigns.'],
      ['Do I need ranking first?', 'Not necessarily, but ranking and ads compound. Organic builds a durable base; ads add controllable volume on top.'],
    ],
  },
};

export const PHASE_LABELS = ['Phase one', 'Phase two', 'Phase three', 'Phase four'];

// The six answer-first law-firm FAQs. Visible text + FAQPage schema must match.
export const LAW_FAQ: [string, string][] = [
  [
    'How can a law firm stop missing new client calls after hours?',
    'An AI intake desk answers every call and web message 24/7, screens it against the firm\u2019s criteria, and books the consultation - so the person who calls at 2am is captured instead of lost to the next firm.',
  ],
  [
    'What does AI client intake involve for a small law firm?',
    'It answers every call and message the moment it arrives, day or night, runs the firm\u2019s screening questions, captures the enquiry into the case system, and books the consultation. The firm goes live in 14 days, and one signed file typically covers the year.',
  ],
  [
    'Does an AI intake desk give legal advice?',
    'No. It performs administrative intake only - it answers, screens, captures the enquiry into the firm\u2019s case-management system, and books a consultation. It never gives legal advice or implies a solicitor-client relationship; the lawyer stays the responsible licensee.',
  ],
  [
    'Can AI answer a law firm\u2019s phone and book consultations?',
    'Yes. A voice intake desk answers on the first ring day or night, runs the firm\u2019s screening questions, checks the calendar, and books the consultation live on the call.',
  ],
  [
    'How do law firms rank higher on Google Maps?',
    'With a managed Google Business Profile - correct category, complete practice-area services, consistent name, address and phone across directories, steady reviews, and local content - engineered into the Map Pack top three and held there.',
  ],
  [
    'Which practice areas is this best for?',
    'Highest impact for personal injury, family and divorce, criminal defence, and immigration - urgent, high-value work where the first firm to answer usually gets retained.',
  ],
];
