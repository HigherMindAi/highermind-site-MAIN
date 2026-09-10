// ---------------------------------------------------------------------------
// HigherMindAI - service ladder + per-service page content (no pricing)
//
// SEPTEMBER 2026, v10 alignment. One pillar, no niches. The ladder carries the
// same public labels the onboarding kits and the call now use - Visibility,
// More Cities, Website, Intake, Reputation, Social Media, AI Search, Paid,
// Custom AI Systems - so a prospect reads one word on the site, hears the same
// word on the call, and reads the same word in the document.
//
// Plain leads, the creative name is a tag. The Pin, The Second Pin, The
// Storefront, The Line, The Word, The Current, The Mention, The Tap and The
// Motion appear as small tags beside the plain word and never headline a
// public surface.
//
// NO PRICING ANYWHERE ON THIS SITE. Not a figure, not a range, not a "from".
// The arithmetic is done live, on the prospect's own numbers, inside the nine
// minutes. Slugs stay keyword-bearing - they rank, and re-slugging for a
// cosmetic gain costs authority. The one deliberate exception is Reputation,
// which was squatting on /services/social-authority/ and is moved to its own
// keyword-bearing slug so Social Media can take the surface it describes. The
// old path 301s.
//
// Lines with a dedicated page of their own carry an explicit href. Everything
// else renders through ServicePage from SERVICE_PAGES below.
//
// The word "marketing" is permitted in title tags, meta descriptions, schema
// and alt text. Never in an H1, a headline, body copy or a button.
//
// Hyphens only, never em-dashes. Solo first person.
// ---------------------------------------------------------------------------

export interface ServiceListItem {
  slug: string;
  name: string;
  tag: string;
  line: string;
  flag: boolean;
  /** Set where the line already owns a dedicated, keyword-bearing page. */
  href?: string;
}

/** The canonical URL for a ladder line, wherever its page actually lives. */
export function serviceHref(s: ServiceListItem): string {
  return s.href ?? `/services/${s.slug}/`;
}

export const SERVICES: ServiceListItem[] = [
  {
    slug: 'the-whole-operation',
    name: 'The Whole Operation',
    tag: 'The Flagship',
    line: 'Both ends of the same problem, closed in one build. Visibility brings the enquiry, the desk answers and qualifies it, the site holds up when somebody checks, and the record on the first of the month makes all of it arguable rather than claimed.',
    flag: true,
    href: '/the-whole-operation/',
  },
  {
    slug: 'property-management-seo',
    name: 'Visibility',
    tag: 'The Pin',
    line: 'Found first when somebody nearby goes looking. The profile rebuilt properly, and the signals that actually decide which three businesses land in the box.',
    flag: false,
    href: '/property-management-seo/',
  },
  {
    slug: 'service-area-expansion',
    name: 'More Cities',
    tag: 'The Second Pin',
    line: 'Own the next town, not just the one you are in. Each target town built as its own ranked unit - you only invest in places I can win.',
    flag: false,
  },
  {
    slug: 'website-build',
    name: 'Website',
    tag: 'The Storefront',
    line: 'A site that answers, instead of a brochure that does not. Two jobs: keep the routine off your phone line, and survive a shortlist.',
    flag: false,
  },
  {
    slug: 'property-management-intake',
    name: 'Intake',
    tag: 'The Line',
    line: 'One desk, two channels. It answers and qualifies the enquiry on the web, on the phone, or on both, books what should be booked, and routes anything real to a person on your own escalation order.',
    flag: false,
    href: '/property-management-intake/',
  },
  {
    slug: 'reputation-management',
    name: 'Reputation',
    tag: 'The Word',
    line: 'What they read before they call you. Reviews, responses and consistent details, treated as the due diligence somebody is performing on you.',
    flag: false,
  },
  {
    slug: 'social-media-management',
    name: 'Social Media',
    tag: 'The Current',
    line: 'The surfaces they check between finding you and calling you. Cadence and evidence rather than reach, and I will argue for two surfaces done properly over three done thinly.',
    flag: false,
  },
  {
    slug: 'ai-search-optimization',
    name: 'AI Search Visibility',
    tag: 'The Mention',
    line: 'Whether you get named when somebody asks an assistant instead of Google. There is no second page here - one answer, two or three names, and you are in it or you are not.',
    flag: false,
    href: '/ai-search-optimization/',
  },
  {
    slug: 'paid-growth',
    name: 'Paid',
    tag: 'The Tap',
    line: 'Demand you can turn on, and off. Volume while the organic position is still being built underneath it. Sold last, never before organic has moved.',
    flag: false,
  },
  {
    slug: 'ai-systems',
    name: 'Custom AI Systems',
    tag: 'The Motion',
    line: 'The job that eats your week, running by itself. Built on your own knowledge, behind the desk rather than in front of it. It answers from your truth or it hands off.',
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
  tag: string;
  values: [string, string][];
  process: [string, string][];
  faq: [string, string][];
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  'ai-systems': {
    title: 'Custom AI Systems for Trades and Service Businesses | HigherMindAI',
    desc: 'Custom AI built on your own knowledge: intake, triage, qualifying, scheduling, follow-up. It answers from your truth or it hands off. It never guesses.',
    h1Lead: 'The same forty answers, ',
    h1Em: 'a hundred times a week.',
    sub: 'Every business runs on one signature motion - an intake, a screen, a booking, a follow-up - and it eats the day. I build the AI that runs it, on your own knowledge, so it answers from your truth rather than a plausible guess. Where the stakes are real, it hands off to a person instead of having an opinion.',
    eyebrow: 'Custom AI Systems',
    tag: 'The Motion',
    values: [
      ['Grounded in your knowledge', 'It answers from the truth of your business - your services, your criteria, your policies - or it hands off. It is engineered not to invent, because an invented answer about a price, a permit or a claim is not a bug, it is a liability.'],
      ['Built around one signature motion', 'Not a generic assistant. The one thing your business actually lives on: the intake, the eligibility check, the scheduling, the triage. I build that, and I build it properly.'],
      ['It hands off at the edge', 'The most important thing an AI system does is know where it stops. Yours will have a hard edge, and a person on the other side of it.'],
    ],
    process: [
      ['Find the motion', 'The one repeated action costing you the most hours. Usually it is not the one you would guess, and I will tell you if the honest answer is that you do not need this.'],
      ['Ground it', 'Your knowledge, your rules, your escalation edge. About thirty minutes of input from you.'],
      ['Build and test it', 'Run against the real questions and the real edge cases, then tuned until it behaves the way you would.'],
      ['Ship it', 'Live in 14 days, or the build fee comes back in full.'],
    ],
    faq: [
      ['How is this different from the intake desk?', 'The intake desk answers, qualifies, triages and logs, on the web channel or the voice channel. Custom AI Systems is everything behind it: the document request, the eligibility check, the follow-up, the routine that eats your office. Most businesses need the desk first.'],
      ['Will it make things up?', 'It is built not to. It answers from your grounded knowledge or it hands off to a person. Where a wrong answer costs real money, that boundary is the whole design, not a feature.'],
      ['How much of my time does it take?', 'About thirty minutes of real input, then I build it. You approve it before it goes anywhere near a customer.'],
      ['What if I do not actually need this?', 'Then I will say so. I would rather tell you on the first call than take your money and watch you leave in three months. I have already had that year.'],
    ],
  },
  'service-area-expansion': {
    title: 'Multi-City Local Search & Service Area Marketing | HigherMindAI',
    desc: 'Rank in more than your home town. Each target city is built as its own ranked unit with dedicated infrastructure - you only invest in places I can win.',
    h1Lead: 'Own the next town, ',
    h1Em: 'not just the one you are in.',
    sub: 'Your Map Pack ranking is tied to where your pin sits. To win work in the next town over, you need dedicated infrastructure built for that place - not your existing page spread thin across a map. Each target city is built to win on its own merits.',
    eyebrow: 'More Cities',
    tag: 'The Second Pin',
    values: [
      ['Winnability first', 'Before you commit a dollar, I assess the competition in the target town - search density, competitor strength, realistic ranking potential. You only invest in cities I can win.'],
      ['A dedicated unit per town', 'Each city gets its own purpose-built page with genuine local detail - neighbourhoods, landmarks, service-area language - engineered to rank for the work in that place.'],
      ['Compounds with your home position', 'The second pin sits on top of the first. Your home town stays strong while new ground comes online, one winnable town at a time.'],
    ],
    process: [
      ['Assess', 'Competition and winnability scored for each target town before anything is built.'],
      ['Build', 'A dedicated, locally-detailed city page, engineered for the work plus the town.'],
      ['Rank', 'On-page and authority signals pointed at the new term until the pin competes.'],
      ['Hold', 'The town joins your weekly run and monthly heatmap, same as the rest.'],
    ],
    faq: [
      ['How is this different from just adding cities to my profile?', 'Stuffing extra cities into one profile or page dilutes everything. I build each town as its own ranked unit so each one competes on its own merits.'],
      ['Which towns should I target first?', 'The winnable ones. I score competition and search density before recommending where to expand, so your investment goes where it can rank.'],
      ['Do I need the home town ranked first?', 'Yes, in almost every case. This builds on a strong home base. I get your core profile ranked first, then widen the footprint town by town.'],
    ],
  },
  'website-build': {
    title: 'Website Build, Hosting and Care for Local Businesses | HigherMindAI',
    desc: 'A site with two jobs: keep the routine off your phone line, and hold up when somebody is checking you against two other names. Not a brochure.',
    h1Lead: 'A site that answers, ',
    h1Em: 'instead of a brochure that does not.',
    sub: 'Your website does two things that matter. It takes the routine off your phone line - the request, the document, the booking, the question you answer forty times a week - so your office is not re-handling all of it by voice. And it holds up when somebody opens it at ten at night with two other names in the other tabs. Every section earns its place against one of those two jobs.',
    eyebrow: 'Website',
    tag: 'The Storefront',
    values: [
      ['It absorbs the routine', 'The requests, the documents, the bookings and the same four questions - logged, timestamped and routed to the right person instead of arriving at reception as a phone call. Built as modules, so nothing holds up the launch.'],
      ['It survives a comparison', 'When your name goes on a shortlist, somebody looks all of them up that evening. That page needs your record, your scope and your response standard on it, in the language he has to repeat back to whoever asked him.'],
      ['Fast and findable', 'Built clean and quick, tuned to the same on-page standard I rank profiles on - title, schema, consistent name and phone, a page per service. The site supports the ranking work rather than sitting beside it.'],
    ],
    process: [
      ['Map the two paths', 'What a customer does on your site, and what somebody checking you up does on it. They are different journeys and most sites serve neither.'],
      ['Build', 'The site, plus whichever modules your office actually needs. You send the work, the crew, the premises, the finished jobs.'],
      ['Tune for search', 'On-page work to the same standard the profile is held to - title, H1, schema, consistent name and phone, a page per service.'],
      ['Launch', 'You approve it, it goes live, and ongoing care keeps it fast, secure and current.'],
    ],
    faq: [
      ['Is the website enough to get me ranked?', 'No. The site supports ranking, but the local pack is its own system. The two work together; on its own the site is the destination, not the reason anyone arrives at it.'],
      ['Do I have to take the extra modules?', 'No. They are built separately, and a business whose office is not drowning in routine requests does not need them. I would rather tell you that than sell you something nobody logs into.'],
      ['Will I be able to make edits?', 'Care and hosting keep the site fast, secure and current. Tell me what needs changing and it gets handled.'],
    ],
  },
  'reputation-management': {
    title: 'Reviews and Online Reputation Management | HigherMindAI',
    desc: 'What somebody reads about you before he calls. Reviews, responses and consistent details, treated as due diligence rather than decoration.',
    h1Lead: 'What they read ',
    h1Em: 'before they call you.',
    sub: 'Two or three names get considered, and that evening somebody looks all of them up. What he finds is what he repeats to whoever asked him. Your rating, how recent it is, how you answered the bad one, and whether your business appears consistently wherever it appears at all. This is due diligence being performed on you, and it is winnable.',
    eyebrow: 'Reputation',
    tag: 'The Word',
    values: [
      ['The structural problem, addressed directly', 'The people most motivated to write a review are the ones with a complaint. A customer mid-dispute writes four paragraphs; a satisfied one who paid on time writes nothing. A structured ask to the quiet, happy majority is what corrects an average built out of complaints.'],
      ['The response is the artefact', 'A negative review is read by the next person considering you, not by the one who wrote it. Every one gets a proper, plain, non-defensive response written for that reader. That is the piece most businesses skip and the piece that reads loudest.'],
      ['Consistent wherever you appear', 'Same name, same phone, same service area across the directories and profiles somebody will land on. Inconsistency does not just cost ranking - it makes a business look smaller and less permanent than it is.'],
    ],
    process: [
      ['Audit', 'What somebody actually finds tonight - rating, recency, the unanswered ones, and every place your business appears with the wrong details.'],
      ['Ask', 'A structured, compliant request to the satisfied customers who would never think to leave one.'],
      ['Respond', 'Every review answered, and the negative ones answered properly, for the reader rather than the writer.'],
      ['Sustain', 'A rhythm that keeps the profiles reading active and current, plus the professional layer where your buyers and referrers actually are.'],
    ],
    faq: [
      ['Will you write reviews or filter who gets asked?', 'No. I will not write them, incentivise them, gate them, or pick who gets asked based on how they are likely to answer. All of it is against platform rules and all of it is detectable. The levers are volume, timing and response quality, which is slower and is the only version that survives contact with Google.'],
      ['Does this matter if my work comes from referrals?', 'More, not less. A referral gets looked up before the call. The referral opens the tab; what is in the tab decides whether the phone rings.'],
      ['Do I need this if I am already ranking?', 'Ranking decides whether you are found. This decides whether being found does you any good. Review velocity and recency also feed local pack position, so the two compound rather than compete.'],
    ],
  },
  'social-media-management': {
    title: 'Social Media Management for Trades and Service Businesses | HigherMindAI',
    desc: 'The surfaces a buyer checks after the search and before the call. Cadence, evidence and consistency on the one or two surfaces your buyers actually use.',
    h1Lead: 'What they find when they check you ',
    h1Em: 'between finding you and calling you.',
    sub: 'Almost nobody in the trades buys directly from a social post, and I am not going to tell you they do. What these surfaces do is get checked - after the search, before the call, by somebody deciding whether you are real, current and busy. A page frozen fourteen months ago answers that badly, and it answers it worse than having no page at all. The job is cadence and evidence, not reach.',
    eyebrow: 'Social Media',
    tag: 'The Current',
    values: [
      ['Two surfaces done properly, not five done thinly', 'Very few businesses need three. I will tell you which surfaces your buyers actually use, which ones to close, and which ones to leave dormant on purpose - and yes, that argument usually reduces what you pay me.'],
      ['Cadence you can survive, not a posting quota', 'A rhythm built around what your business genuinely produces in a week, batched ahead rather than scrambled daily. You approve a batch, not a post. A cadence that collapses in month three is worse than the dormant profile it replaced.'],
      ['Evidence, and it is disclosed', 'Real work, real crews, real sites. Where any generated image or video is used it is disclosed in the caption, on every surface, every time. No generated person is ever presented as a customer, and no generated testimonial exists.'],
    ],
    process: [
      ['Choose the surfaces', 'Which ones your buyers check, which ones get closed, and which ones are deliberately left alone. Profiles rebuilt, details made consistent with everywhere else you appear.'],
      ['Design the cadence', 'A publishing rhythm built around your actual week rather than an aspirational one, agreed in writing before anything is published.'],
      ['Build the first batch', 'Content produced ahead of schedule from your raw material - about twenty minutes of phone video a month is the highest-value input there is.'],
      ['Publish and manage', 'Posted to the agreed cadence, with comments and direct messages monitored and routed. A real enquiry goes to a person or to your intake desk, never answered speculatively.'],
    ],
    faq: [
      ['Will this actually bring me work?', 'Not directly, in most trades, and I will not pretend otherwise. What it does is survive the check that happens between the search and the call. If you want a line that generates enquiries, that is Visibility or Paid, and I would rather point you at those than sell you this one on a promise it will not keep.'],
      ['How is this different from Reputation?', 'Reputation is what strangers write about you - reviews, responses, consistent details. Social Media is what you publish yourself. They get checked in the same evening by the same person, and they answer different halves of the same question.'],
      ['Do you report follower counts?', 'They are reported, and they are not the point, and I will not dress them up as the point. The measure is whether a surface reads as active, consistent and real to somebody performing a check on you.'],
      ['Do I have to be in the videos?', 'No, though the ones with a real person in them do better than the ones without. Work, crews and finished sites carry it perfectly well if you would rather stay off camera.'],
      ['What if I do not want AI-produced material used?', 'Then none is used. Some owners want none of it and that is a perfectly good answer. Where any is used it carries a disclosure in the caption without exception.'],
    ],
  },
  'paid-growth': {
    title: 'Google and Meta Advertising for Local Businesses | HigherMindAI',
    desc: 'Paid demand, engineered end to end, and sold last. Volume while the organic position is still being built underneath it. Turn it up, down, or off.',
    h1Lead: 'Demand you can turn on, ',
    h1Em: 'and off.',
    sub: 'Organic is a well and paid is a tap. The well compounds and you keep it, but it does not fill on the day you sign. The tap does. This is the right answer whenever you need volume faster than ranking can deliver, and it is also the half that stops the day the spend stops. I would rather say that here than at renewal.',
    eyebrow: 'Paid',
    tag: 'The Tap',
    values: [
      ['Paid is sold last', 'Never before organic has moved. If I can rank you for the term instead, that is the cheaper answer and I will say so, even though this line costs me the sale. Paid carries volume while the position is being built underneath it - it does not replace the position.'],
      ['Built on the words people actually type', 'Every headline, image and landing page is built on the language somebody uses when he has just decided he needs this done, not on the language an agency would choose.'],
      ['Structured so it can be switched off', 'A one-time build, then a monthly management rate, and the ad spend paid directly by you to Google or Meta. I never hold it and I never mark it up. Turn the tap down or off and nothing about your organic position changes.'],
    ],
    process: [
      ['Research', 'The language your buyers actually search with, and what the businesses already spending in your market are running.'],
      ['Build', 'Ad, audience and landing page engineered as one path to a booked enquiry.'],
      ['Launch', 'Live with tracking on the metric that matters - qualified enquiries, not impressions.'],
      ['Optimize', 'Every result reads as a lever, and the first ninety days are deliberately treated as the proving period, because nothing is proven yet.'],
    ],
    faq: [
      ['How is this structured?', 'A one-time build, then a monthly management rate for as long as the tap is open, stated at the start so nothing is a surprise later. Ad spend is separate and paid by you directly to the platform. The numbers get worked out on the call, against your figures, and they are in the agreement before anything goes live.'],
      ['Google or Meta?', 'Whichever fits how your buyers actually search. Sometimes both, built as one funnel rather than two campaigns that do not know about each other.'],
      ['Do I need to be ranking first?', 'In almost every case, yes, and paid is the one thing here I will actively talk you out of buying first. The exception is a business that needs volume this month and cannot wait sixty days for it. Even then I build the well, because the tap stops and the well does not.'],
    ],
  },
};

export const PHASE_LABELS = ['Phase one', 'Phase two', 'Phase three', 'Phase four'];

// The general FAQ. Trade-agnostic, answer-first, and it must match the FAQPage
// schema character for character. No worked figures - there is no pricing on
// this site and the old door arithmetic was written against a retired ladder.
export const GENERAL_FAQ: [string, string][] = [
  [
    'How do local businesses get more work from Google?',
    'By owning the local pack for the searches people actually run - the work plus the town - rather than buying those enquiries per lead. That means the Google Business Profile claimed and rebuilt with the correct category, every service named the way customers search for it, the service area mapped properly, steady review velocity, and consistent details everywhere the business appears. Position compounds and you keep it. A purchased lead stops the day payment stops.',
  ],
  [
    'What does an after-hours answering service actually do?',
    'Most take a name and a number and pass it on in the morning. The desk I build answers and qualifies the contact, triages it against the criteria you set, books what should be booked straight into your calendar, logs everything with a timestamp in and a timestamp answered, and routes anything real to a person on your own escalation order. It is administrative intake and nothing else.',
  ],
  [
    'Is local search worth paying for when I already buy leads?',
    'That depends on what you want at the end of three years. Purchased leads are frequently sold to your competitors as well, cost the same every month forever, and stop dead when payment stops - nothing accrues. Ranking is slower to start, it compounds, and the position stays yours. One is rent and one is an asset, and at the end of a three-year run only one of them is still working for you.',
  ],
  [
    'Do you only work with property managers?',
    'No. It is one system, and three trades already have the scripts, the seasons and the vocabulary worked out because I built for them first - property and condominium management, roofing, and arborists and tree care. Every other business runs on the same two failures: they never find you, or nobody answers. If one won client is worth having in your business, the arithmetic works.',
  ],
  [
    'What will the intake desk not do?',
    'It performs administrative intake and nothing else. It never quotes a price, never commits a crew to a time, never gives advice reserved to a licensed person, never states whether damage is covered by insurance, and never assesses whether a tree is safe. Every one of those is a hard escalation to a person, written into the agreement rather than promised on a call. The full list is on the scope limits page.',
  ],
  [
    'How long does it take to go live?',
    'Fourteen to twenty-one days. Web intake is live in fourteen. Voice takes twenty-one by design, because your emergency criteria and escalation order have to be loaded and tested before a phone answers. If it is not live in that window, the launch half of the build is not owed.',
  ],
  [
    'How do I know in nine minutes whether this is for me?',
    'Because I will have already looked before I call, and the nine minutes is me showing you what I found rather than asking you for anything. Nothing to prepare, nothing to send me first. Most of these end with a thank-you and nothing else, and that is a fine outcome.',
  ],
];
