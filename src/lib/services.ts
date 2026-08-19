// ---------------------------------------------------------------------------
// HigherMindAI - service ladder + per-service page content (no pricing)
//
// These pages are read by both books, property and law. They stay price-free
// on purpose: the property rates are published on the property pages, and the
// legal track carries no published pricing at all. A shared page cannot print
// one without breaking the other.
//
// Component names follow the kits: The Tap, The Catchment, The Landing, The
// Watermark. AI Systems is deliberately NOT given a proper noun - every name
// is a term the reader has to learn before he can buy, and nine is the ceiling.
// The slugs stay keyword-bearing; the brand name lives in the copy.
//
// Hyphens only, never em-dashes. Solo first person.
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
    name: 'The Tap',
    line: 'Paid demand, engineered. Volume from day one while the organic position is still being built underneath it. Turn it up, turn it down, turn it off.',
    flag: false,
  },
  {
    slug: 'ai-systems',
    name: 'AI Systems',
    line: 'Custom AI built on your own knowledge, behind the desk rather than in front of it. It answers from your truth or it hands off. It never guesses.',
    flag: false,
  },
  {
    slug: 'service-area-expansion',
    name: 'The Catchment',
    line: 'Own more than your home city. Each target town built as its own ranked unit - you only invest in places I can win.',
    flag: false,
  },
  {
    slug: 'website-build',
    name: 'The Landing',
    line: 'A site with two jobs: keep the routine off your phone line, and survive a board shortlist. Not a brochure.',
    flag: false,
  },
  {
    slug: 'social-authority',
    name: 'The Watermark',
    line: 'Reviews and citations as due diligence. What a director finds when he looks your firm up before he defends the shortlist.',
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
    title: 'Custom AI Systems for Management Firms | HigherMindAI',
    desc: 'Custom AI built on your own knowledge: intake, triage, qualifying, quoting, follow-up. It answers from your truth or it hands off. It never guesses.',
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
      ['How is this different from The Desk?', 'The Desk is the intake desk - it answers, qualifies, triages and logs, on the web channel or the voice channel. AI Systems is everything behind it: the status certificate request, the eligibility check, the follow-up, the routine that eats your office. Most firms need the desk first.'],
      ['Will it make things up?', 'It is built not to. It answers from your grounded knowledge or it hands off to a human. In a clinical or legal setting that boundary is the whole design, not a feature.'],
      ['How much of my time does it take?', 'About thirty minutes of real input, then I build it. You approve it before it goes anywhere near a customer.'],
      ['What if I do not actually need this?', 'Then I will say so. I would rather tell you on the first call than take your money and watch you leave in three months. I have already had that year.'],
    ],
  },
  'service-area-expansion': {
    title: 'The Catchment - Service Area SEO Expansion | HigherMindAI',
    desc: 'Rank in more than your home city. Each target town is built as its own ranked unit with dedicated infrastructure - you only invest in places I can win.',
    h1Lead: 'Rank in every town you serve, ',
    h1Em: 'not just your own.',
    sub: 'Your Map Pack ranking is tied to where your pin sits. To win calls in the next town over, you need dedicated infrastructure built for that place - not your existing page spread thin across a map. Each target city is built to win on its own merits.',
    eyebrow: 'The Catchment',
    values: [
      ['Winnability first', 'Before you commit a dollar, I assess the competition in the target town - search density, competitor strength, realistic ranking potential. You only invest in cities I can win.'],
      ['A dedicated unit per town', 'Each city gets its own purpose-built landing page with genuine local detail - neighbourhoods, landmarks, service-area language - engineered to rank for the service in that place.'],
      ['Compounds with your core ranking', 'The Catchment sits on top of The Well. Your home city stays strong while new ground comes online, one winnable town at a time.'],
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
      ['Do I need The Well first?', 'The Catchment builds on a strong home base. I get your core profile ranked first, then widen the footprint town by town.'],
    ],
  },
  'website-build': {
    title: 'The Landing - Property Management Website Build | HigherMindAI',
    desc: 'A management firm site with two jobs: an owner portal that keeps the routine off your phone line, and a board-facing page that survives a shortlist.',
    h1Lead: 'Your site has two jobs, ',
    h1Em: 'and looking nice is neither.',
    sub: 'A management firm\u2019s website does two things that matter. It takes the routine off your phone line - fob requests, status certificates, work orders, moving bookings - so your office is not re-handling them by voice all day. And it holds up when a director opens it at ten at night with two other firms in the other tabs. Every section earns its place against one of those two jobs.',
    eyebrow: 'The Landing',
    values: [
      ['An owner portal that absorbs the routine', 'Fob and parking requests, status certificate requests, work order intake, moving and amenity bookings - logged, timestamped and routed to the right manager instead of arriving at reception as a phone call. Built as modules, so nothing holds up the launch.'],
      ['A page that survives a shortlist', 'When three names go to the board, somebody looks all three up that evening. That page needs your record, your scope, your licensing position and your response standard on it - in the language a director has to repeat back to the rest of the board.'],
      ['Fast and findable', 'Built clean and quick, tuned to the same on-page standard I rank profiles on - title, schema, consistent name and phone, a page per service. The site supports The Well rather than sitting beside it.'],
    ],
    process: [
      ['Map the two paths', 'What an owner does on your site, and what a director does on it. They are different journeys and most firm sites serve neither.'],
      ['Build', 'The site, plus whichever portal modules your office actually needs. You send buildings and communities, amenity and common areas, the team, the office.'],
      ['Tune for search', 'On-page work to the same standard the profile is held to - title, H1, schema, consistent name and phone, a page per service.'],
      ['Launch', 'You approve it, it goes live, and ongoing care keeps it fast, secure and current.'],
    ],
    faq: [
      ['Is the website enough to get me ranked?', 'No. The site supports ranking, but the local pack is its own system. The Landing and The Well work together; on its own the site is the destination, not the reason anyone arrives at it.'],
      ['Do I have to take the portal modules?', 'No. They are priced and built separately, and a firm whose office is not drowning in routine requests does not need them. I would rather tell you that than sell you a portal nobody logs into.'],
      ['Will I be able to make edits?', 'Care and hosting keep the site fast, secure and current. Tell me what needs changing and it gets handled.'],
    ],
  },
  'social-authority': {
    title: 'The Watermark - Reviews & Reputation for Managers | HigherMindAI',
    desc: 'What a board director finds when he looks your firm up the night before he defends a shortlist. Reviews and citations as due diligence, not decoration.',
    h1Lead: 'A director has to defend ',
    h1Em: 'putting you on the list.',
    sub: 'Three names go to the board. That evening somebody looks all three up, and what he finds is what he repeats in the room - and what he answers owners with when they ask him why. Your rating, your review recency, your response to the bad ones, and whether your firm appears consistently wherever it appears at all. This is due diligence he is performing on you, and it is winnable.',
    eyebrow: 'The Watermark',
    values: [
      ['The structural problem, addressed directly', 'The people most motivated to review a management firm are not the people who pay it. A tenant mid-complaint writes four paragraphs; an owner collecting rent quietly for three years writes nothing. A structured ask to the owners and the satisfied outgoing tenants is what corrects an average built from complaints.'],
      ['The response is the artefact', 'A negative review is read by the next owner and the next director, not by the person who wrote it. Every one gets a proper, plain, non-defensive response written for that reader. That is the piece most firms skip and the piece that reads loudest.'],
      ['Consistent wherever you appear', 'Same firm name, same phone, same service area across the directories and profiles a director will land on. Inconsistency does not just cost ranking - it makes a firm look smaller and less permanent than it is.'],
    ],
    process: [
      ['Audit', 'What a director actually finds tonight - rating, recency, the unanswered ones, and every place your firm appears with the wrong details.'],
      ['Ask', 'A structured, compliant request to the owners and satisfied outgoing tenants who would never think to leave one.'],
      ['Respond', 'Every review answered, and the negative ones answered properly, for the reader rather than the writer.'],
      ['Sustain', 'A rhythm that keeps the profiles reading active and current, plus the professional layer where your buyers and referrers actually are.'],
    ],
    faq: [
      ['Will you write reviews or filter who gets asked?', 'No. I will not write them, incentivise them, gate them, or pick who gets asked based on how they are likely to answer. All of it is against platform rules and all of it is detectable. The levers are volume, timing and response quality, which is slower and is the only version that survives contact with Google.'],
      ['Does this help on the condominium side?', 'It is the whole game on that side. Boards do not find a manager through search - they run an RFP. What decides who stays on the shortlist is what the committee finds when it looks each name up, which is exactly what this work governs.'],
      ['Do I need this if I am already ranking?', 'Ranking decides whether you are found. This decides whether being found does you any good. Review velocity and recency also feed local pack position, so the two compound rather than compete.'],
    ],
  },
  'paid-growth': {
    title: 'The Tap - Google & Meta Ads for Management Firms | HigherMindAI',
    desc: 'Paid demand, engineered end to end. Volume from day one while organic position is still being built underneath it. Turn it up, turn it down, turn it off.',
    h1Lead: 'Organic is a well. ',
    h1Em: 'This is the tap.',
    sub: 'The Well compounds and you keep it, but it does not fill on the day you sign. The Tap does. Paid carries the first ninety days while position is being built underneath it, and it is the right answer whenever you need volume faster than ranking can deliver. It is also the half that stops the day the spend stops, and I would rather say that here than at renewal.',
    eyebrow: 'The Tap',
    values: [
      ['Built on the language owners actually use', 'Every headline, image and landing page is built on the words an investor-owner types when he has a unit to hand over, not on the words a marketing department would choose.'],
      ['The whole path, not just the click', 'The ad, the page and the desk that answers what the page produces, engineered as one path - so when something moves you know which lever moved it.'],
      ['Structured so it can be switched off', 'A one-time build, then a monthly management rate, and the ad spend paid directly by you to Google or Meta. I never hold it and I never mark it up. Turn the tap down or off and nothing about your organic position changes.'],
    ],
    process: [
      ['Research', 'The language owners and directors actually search with, and what the firms already spending in your market are running.'],
      ['Build', 'Ad, audience and landing page engineered as one path to a booked owner enquiry.'],
      ['Launch', 'Live with tracking on the metric that matters - qualified enquiries, not impressions.'],
      ['Optimize', 'Every result reads as a lever, and the first ninety days are deliberately priced low because nothing is proven yet.'],
    ],
    faq: [
      ['How is pricing structured?', 'A one-time build, then a monthly management rate that is deliberately low for the first ninety days because nothing is proven yet, and a standing rate after that - stated at the start so day ninety is not a surprise. Ad spend is separate and paid by you directly to the platform. The figures for the property track are on the call, and they are in the agreement before anything goes live.'],
      ['Google or Meta?', 'Whichever fits how your buyers actually search. Often both, built as one funnel rather than two campaigns that do not know about each other.'],
      ['Do I need The Well first?', 'Not necessarily, and this is the one case where paid genuinely comes first - it carries the volume while the organic position is still being built. But I build the well, because the tap stops and the well does not.'],
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
    'Yes. A voice intake desk answers day or night, runs the firm\u2019s screening questions, checks the calendar, and books the consultation live on the call. Answered and qualified, with a timestamp in and a timestamp answered on every contact.',
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
