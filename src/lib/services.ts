// ---------------------------------------------------------------------------
// HigherMindAI - the delivery lines + per-line page content (no pricing)
//
// v15 (22 September 2026). The buyer is no longer shown a menu. The site sells
// three steps in order - The Pin, The Foundation, The Storefront - with The
// Read as the way in and The Tap last (see ladder.ts). The eight delivery
// lines below still exist, but ONLY as "what sits inside step X". Every line
// and every page in this file says which step it lives in first, and none of
// them is offered as a thing to pick on its own.
//
// Line -> step mapping lives in LINE_TO_STEP (ladder.ts). ServicePage reads it
// by slug and puts the step tag above the H1.
//
// REPUTATION IS NOT A SELLABLE LINE. Review capture, review response and
// listing consistency sit inside The Pin. The page at
// /services/reputation-management/ is KEPT and still resolves - it ranks for
// reputation queries and eight 301s in _redirects point at it. It carries
// `hidden: true`, which drops it from the footer while leaving the route
// alive. ServicePage resolves a slug against BOTH SERVICE_PAGES and SERVICES,
// so the entry must stay in the array.
//
// `term` is what a person actually types. It feeds schema (alternateName and
// serviceType) and never renders as visible copy. The one retained search
// term with the two letters in it is "AI search optimization", the allowed
// exception for its own page.
//
// NO PRICING ANYWHERE ON THIS SITE. Not a figure, not a range, not a "from".
// Slugs stay keyword-bearing - they rank, and re-slugging costs authority.
//
// Hyphens only, never the long dashes. Solo first person. No promise other
// than RANK_LOCK and LAUNCH_LOCK from ladder.ts.
// ---------------------------------------------------------------------------

import { TAP_LINE } from './ladder';

export interface ServiceListItem {
  slug: string;
  name: string;
  tag: string;
  /**
   * What a person actually TYPES, as opposed to what the line is called.
   * Used in schema only. The name is the plain label; the term is what makes
   * the entry eligible for a search. They live on the same row so they can
   * never drift apart.
   */
  term: string;
  line: string;
  flag: boolean;
  /** Set where the line already owns a dedicated, keyword-bearing page. */
  href?: string;
  /**
   * Retired as a line of its own but the page stays live and indexed. Hidden
   * from the footer; still routable.
   */
  hidden?: boolean;
}


/** The canonical URL for a line, wherever its page actually lives. */
export function serviceHref(s: ServiceListItem): string {
  return s.href ?? `/services/${s.slug}/`;
}

export const SERVICES: ServiceListItem[] = [
  {
    slug: 'property-management-seo',
    name: 'Local search',
    tag: 'Inside The Pin',
    term: 'local SEO',
    line: 'What sits inside The Pin. Your Google profile rebuilt against the businesses above you, then held, with the review work carried in the same step.',
    flag: false,
    href: '/property-management-seo/',
  },
  {
    slug: 'service-area-expansion',
    name: 'More Cities',
    tag: 'After you have chosen',
    term: 'service area expansion',
    line: 'Offered after you have chosen. The next town built as its own ranked unit, once the first one holds.',
    flag: false,
  },
  {
    slug: 'website-build',
    name: 'Website',
    tag: 'The Storefront',
    term: 'website design',
    line: 'What sits inside The Storefront. A site built around how your customers buy and how you actually close. Not a brochure. Hosted and cared for.',
    flag: false,
  },
  {
    slug: 'property-management-intake',
    name: 'The desk',
    tag: 'Inside The Foundation',
    term: 'phone answering and web intake',
    line: 'What sits inside The Foundation. A desk that answers when you cannot - on the web or on your phone line - and routes anything real to a person.',
    flag: false,
    href: '/property-management-intake/',
  },
  {
    slug: 'reputation-management',
    name: 'Reviews',
    tag: 'Inside The Pin',
    term: 'review management',
    line: 'What sits inside The Pin. Every review answered, new ones asked for properly, and the same details everywhere you appear.',
    flag: false,
    hidden: true,
  },
  {
    slug: 'social-media-management',
    name: 'Social Media',
    tag: 'Inside The Foundation',
    term: 'social media management',
    line: 'What sits inside The Foundation. Facebook and Instagram rebuilt properly and kept current from your own job photos.',
    flag: false,
  },
  {
    slug: 'ai-search-optimization',
    name: 'Getting named',
    tag: 'After you have chosen',
    term: 'AI search optimization',
    line: 'Offered after you have chosen. Getting named when people ask an assistant instead of searching.',
    flag: false,
    href: '/ai-search-optimization/',
  },
  {
    slug: 'paid-growth',
    name: 'Paid ads',
    tag: 'The Tap',
    term: 'Google Ads management',
    line: 'What sits inside The Tap, and it comes last, always. Paid campaigns on your own accounts, on top of a Foundation that is already working.',
    flag: false,
  },
  {
    slug: 'ai-systems',
    name: 'Custom systems',
    tag: 'After you have chosen',
    term: 'custom business systems',
    line: 'Offered after you have chosen. Custom systems for the job that eats your week. Scoped on its own.',
    flag: false,
  },
];

/**
 * The lines still shown anywhere - SERVICES minus anything retired. Retiring a
 * line is one `hidden: true` rather than an edit in four components.
 */
export const LADDER: ServiceListItem[] = SERVICES.filter((s) => !s.hidden);

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
    title: 'Custom Business Systems for Local Firms | HigherMindAI',
    desc: 'Custom systems for the job that eats your week, built on your own knowledge. It answers from your truth or hands off to a person. Scoped on its own.',
    h1Lead: 'The same forty answers, ',
    h1Em: 'a hundred times a week.',
    sub: 'Every business runs on one repeated motion - an intake, a screen, a booking, a follow-up - and it eats the day. I build the system that carries it, on your own knowledge, so it answers from the truth of your business rather than a plausible guess. Where the stakes are real, it hands off to a person. This is offered after you have chosen a step, once the profile and the desk are already doing their job.',
    eyebrow: 'Custom systems',
    tag: 'The Motion',
    values: [
      ['Grounded in your knowledge', 'It answers from the truth of your business - your services, your criteria, your policies - or it hands off. It is built not to invent, because an invented answer about a price, a permit or a claim is not a small error. It is a liability.'],
      ['Built around one repeated motion', 'Not a general helper. The one thing your business actually lives on: the intake, the eligibility check, the scheduling, the triage. I build that one thing, and I build it properly.'],
      ['It hands off at the edge', 'The most important thing a system like this does is know where it stops. Yours has a hard edge, and a person on the other side of it.'],
    ],
    process: [
      ['Find the motion', 'The one repeated job costing you the most hours. Usually it is not the one you would guess, and I will tell you if the honest answer is that you do not need this.'],
      ['Ground it', 'Your knowledge, your rules, your escalation edge. About thirty minutes of input from you.'],
      ['Build and test it', 'Run against the real questions and the real edge cases, then tuned until it behaves the way you would.'],
      ['Approve it', 'You see it working before it goes anywhere near a customer. It is scoped and timed on its own, in writing, before anything starts.'],
    ],
    faq: [
      ['How is this different from the desk?', 'The desk sits inside The Foundation. It answers, qualifies, triages and logs, on the web or on your phone line. A custom system is everything behind it: the document request, the eligibility check, the follow-up, the routine that eats your office. Most businesses need the desk first, which is why this comes after you have chosen a step.'],
      ['Will it make things up?', 'It is built not to. It answers from your own knowledge or it hands off to a person. Where a wrong answer costs real money, that boundary is the whole design, not a feature.'],
      ['How much of my time does it take?', 'About thirty minutes of real input, then I build it. You approve it before it goes anywhere near a customer.'],
      ['What if I do not actually need this?', 'Then I will say so. I would rather tell you in the nine minutes than take your money and watch you leave in three months. I have already had that year.'],
    ],
  },
  'service-area-expansion': {
    title: 'Multi-City Local SEO & Service Areas | HigherMindAI',
    desc: 'Rank in more than your home town. Each target town built as its own ranked unit once the first one holds. You only invest in places I can win.',
    h1Lead: 'Own the next town, ',
    h1Em: 'once the first one holds.',
    sub: 'Your map ranking is tied to where your pin sits. To win work in the next town over, that town needs its own page and its own signals, built for that place - not your existing page spread thin across a map. This is offered after you have chosen a step and the home town is holding. Each target town is then built to win on its own merits.',
    eyebrow: 'More Cities',
    tag: 'The Second Pin',
    values: [
      ['Winnable towns first', 'Before anything is spent, I look at the competition in the target town - how many people search there, how strong the businesses above you are, and whether the town can realistically be won. You only invest in towns I can win.'],
      ['One unit per town', 'Each town gets its own purpose-built page with genuine local detail - neighbourhoods, landmarks, the way people there describe the work - built to rank for the work in that place.'],
      ['Built on top of the home position', 'The second pin sits on top of the first. Your home town stays strong while new ground comes online, one winnable town at a time.'],
    ],
    process: [
      ['Assess', 'Competition and winnability scored for each target town before anything is built.'],
      ['Build', 'A dedicated, locally detailed town page, built for the work plus the town.'],
      ['Rank', 'On-page and authority signals pointed at the new term until the pin competes.'],
      ['Hold', 'The town joins the same weekly work as the rest, and you see where it stands alongside the home town.'],
    ],
    faq: [
      ['How is this different from adding towns to my profile?', 'Stuffing extra towns into one profile or one page dilutes everything. I build each town as its own ranked unit so each one competes on its own merits.'],
      ['Which towns should I target first?', 'The winnable ones. I score competition and search volume before recommending where to widen, so the work goes where it can rank.'],
      ['Do I need the home town ranked first?', 'Yes, in almost every case. That is why this is offered after you have chosen a step rather than as a step of its own. The Pin gets your home profile ranked and held first, then the footprint widens town by town.'],
    ],
  },
  'website-build': {
    title: 'Website Build, Hosting and Care | HigherMindAI',
    desc: 'The site inside The Storefront: built around how your customers buy and how you actually close. Not a brochure. Hosted and cared for.',
    h1Lead: 'A site that sells, ',
    h1Em: 'instead of a brochure that does not.',
    sub: 'The website sits inside The Storefront, on top of everything in The Foundation. It does two jobs. It takes the routine off your phone line - the request, the document, the booking, the question you answer forty times a week. And it holds up when somebody opens it at ten at night with two other names in the other tabs. Every section earns its place against one of those two jobs.',
    eyebrow: 'Website',
    tag: 'The Storefront',
    values: [
      ['It takes the routine off the phone', 'The requests, the documents, the bookings and the same four questions - logged, timestamped and routed to the right person instead of arriving at your desk as a phone call. Built in parts, so nothing holds up the launch.'],
      ['It survives a comparison', 'When your name goes on a shortlist, somebody looks all of them up that evening. The page they land on needs your record, your scope and what happens when they get in touch, in the language they have to repeat back to whoever asked them.'],
      ['Fast and findable', 'Built clean and quick, to the same on-page standard I rank profiles on - title, schema, the same name and phone everywhere, a page per service. The site supports the work on your profile rather than sitting beside it.'],
      ['It can carry a working tool', 'Some sites need to read well. Some need to do a job - a configurator, a parts matcher, a quoting tool, a live catalogue wired to your own stock. Which one you need comes out of the nine minutes, against your figures rather than guessed at here.'],
    ],
    process: [
      ['Map the two paths', 'What a customer does on your site, and what somebody checking you out does on it. They are different journeys and most sites serve neither.'],
      ['Build', 'The site, plus whichever parts your office actually needs. You send the work, the crew, the premises, the finished jobs.'],
      ['Tune for search', 'On-page work to the same standard the profile is held to - title, H1, schema, the same name and phone, a page per service.'],
      ['Launch', 'You approve it, it goes live, and ongoing care keeps it fast, secure and current.'],
    ],
    faq: [
      ['How much does a website build cost?', 'Each step has a fixed price, said plainly on the nine minutes once I have seen what you have. What decides it is honest to say in advance: how many pages the business actually needs, whether a page per service is needed for ranking, and above all whether the site has to carry a working tool rather than only read well. A five-page site and a site running a live parts matcher are not the same job, and pricing them the same way would be dishonest in one direction or the other.'],
      ['Can you repair the site I have instead of rebuilding it?', 'Often, yes, and I will say so if that is the right call. Where the existing site is structurally sound and you intend to keep it, the work is a repair rather than a build - the on-page and schema corrected, speed fixed, the enquiry path added. I would rather do that than talk you into a rebuild you did not need.'],
      ['Is the website enough to get me ranked?', 'No. The site supports ranking, but the map is its own system. That is why the website sits inside The Storefront, on top of The Pin and The Foundation, rather than on its own. On its own the site is the destination, not the reason anyone arrives at it.'],
      ['Do I have to take the extra parts?', 'No. They are built separately, and a business whose office is not drowning in routine requests does not need them. I would rather tell you that than sell you something nobody logs into.'],
      ['Will I be able to make edits?', 'Care and hosting keep the site fast, secure and current. Tell me what needs changing and it gets handled.'],
    ],
  },
  // This page does not sell a line. It ranks for reputation queries and eight
  // aliases in _redirects point at it, so it stays live - but what it argues is
  // that the work sits inside The Pin, and that being billed for it twice is
  // the thing to watch for.
  'reputation-management': {
    title: 'Reviews and Online Reputation Management | HigherMindAI',
    desc: 'What somebody reads about you before they call. Reviews, responses and consistent details, carried inside The Pin and never billed as a second line.',
    h1Lead: 'What they read ',
    h1Em: 'before they call you.',
    sub: 'Two or three names get considered, and that evening somebody looks all of them up. What they find is what they repeat to whoever asked them. Your rating, how recent it is, how you answered the bad one, and whether your business appears the same way wherever it appears at all. This is due diligence being done on you, it is winnable, and I do not sell it separately. It sits inside The Pin, because that is where it actually lives.',
    eyebrow: 'Reviews',
    tag: 'Inside The Pin',
    values: [
      ['It is not a separate invoice, and it should not be', 'How often reviews arrive, how recent they are and whether your details match everywhere are ranking signals. They are not a parallel service that happens to sit beside local search - they are part of how the pin is won and held. So the asking, the responses and the consistency work are inside The Pin, and there is no second line to buy. If somebody has quoted you for reputation management on top of local SEO, look closely at what the two quotes actually contain.'],
      ['The structural problem, addressed directly', 'The people most motivated to write a review are the ones with a complaint. A customer mid-dispute writes four paragraphs; a satisfied one who paid on time writes nothing. A structured ask to the quiet, happy majority is what corrects an average built out of complaints.'],
      ['The response is the artefact', 'A negative review is read by the next person considering you, not by the one who wrote it. Every one gets a proper, plain, non-defensive response written for that reader. That is the piece most businesses skip and the piece that reads loudest.'],
      ['The same details wherever you appear', 'Same name, same phone, same service area across the directories and profiles somebody will land on. Mismatched details do not only cost ranking. They make a business look smaller and less permanent than it is.'],
    ],
    process: [
      ['Look', 'What somebody actually finds tonight - rating, recency, the unanswered ones, and every place your business appears with the wrong details. Recorded before anything is touched.'],
      ['Ask', 'A structured, compliant request to the satisfied customers who would never think to leave one.'],
      ['Respond', 'Every review answered, and the negative ones answered properly, for the reader rather than the writer.'],
      ['Hold', 'A steady rhythm that keeps the profile reading active and current, so you can see it working alongside where you rank.'],
    ],
    faq: [
      ['So how much is reputation management?', 'It has no price of its own, because I do not sell it on its own. It sits inside The Pin along with the profile work, the listings and the local pages. One step, one invoice. Each step has a fixed price, said plainly on the nine minutes once I have seen what you have.'],
      ['Why not sell it separately? Everybody else does.', 'Because the work overlaps almost completely with the work that wins the pin, and charging twice for one job is not something I would want to explain in a room. If reviews are genuinely your only problem and ranking is not, say so in the nine minutes and I will tell you plainly whether you need a step at all.'],
      ['Will you write reviews or filter who gets asked?', 'No. I will not write them, pay for them, gate them, or pick who gets asked based on how they are likely to answer. All of it is against platform rules and all of it is detectable. The levers are volume, timing and response quality, which is slower and is the only version that survives contact with Google.'],
      ['Does this matter if my work comes from referrals?', 'More, not less. A referral gets looked up before the call. The referral opens the tab; what is in the tab decides whether the phone rings.'],
      ['Do I need this if I am already ranking?', 'Ranking decides whether you are found. This decides whether being found does you any good. How often reviews arrive and how recent they are also feed map position, so the two build on each other rather than compete - which is exactly why they sit in the same step.'],
    ],
  },
  'social-media-management': {
    title: 'Social Media Management for Local Trades | HigherMindAI',
    desc: 'Inside The Foundation: Facebook and Instagram rebuilt properly and kept current from your own job photos, for the buyer who checks you before calling.',
    h1Lead: 'What they find when they check you ',
    h1Em: 'between finding you and calling you.',
    sub: 'Social media sits inside The Foundation. Almost nobody in the trades buys directly from a social post, and I am not going to tell you they do. What these pages do is get checked - after the search, before the call, by somebody deciding whether you are real, current and busy. A page frozen fourteen months ago answers that badly, and it answers it worse than having no page at all. The job is keeping it current with real work, not chasing reach.',
    eyebrow: 'Social Media',
    tag: 'The Current',
    values: [
      ['Facebook and Instagram, done properly', 'Two surfaces done properly beat five done thinly. Both are rebuilt with the same details as everywhere else you appear. A third surface is only added after you have chosen, and only where your buyers actually look.'],
      ['A rhythm you can keep up', 'Built around what your business genuinely produces in a week, batched ahead rather than scrambled daily. You approve a batch, not a post. A rhythm that collapses in month three is worse than the dormant page it replaced.'],
      ['Your own job photos, and anything else is disclosed', 'Real work, real crews, real sites, from your own phone. Where any generated image or video is used it is disclosed in the caption, on every surface, every time. No generated person is ever presented as a customer, and no generated testimonial exists.'],
    ],
    process: [
      ['Rebuild the pages', 'Facebook and Instagram rebuilt, details made the same as everywhere else you appear, and anything dead closed properly.'],
      ['Set the rhythm', 'A posting rhythm built around your actual week rather than an aspirational one, agreed in writing before anything is published.'],
      ['Build the first batch', 'Posts produced ahead of schedule from your own material - about twenty minutes of phone video and job photos a month is the most valuable input there is.'],
      ['Publish and look after it', 'Posted to the agreed rhythm, with comments and direct messages watched and routed. A real enquiry goes to a person or to the desk, never answered on a guess.'],
    ],
    faq: [
      ['Will this actually bring me work?', 'Not directly, in most trades, and I will not pretend otherwise. What it does is survive the check that happens between the search and the call. The calls come from being found - that is The Pin - and from being answered when you cannot, which is the desk sitting beside this inside The Foundation.'],
      ['How is this different from the review work?', 'Reviews are what strangers write about you, and that work sits inside The Pin. Social media is what you publish yourself. They get checked in the same evening by the same person, and they answer different halves of the same question.'],
      ['Do you track follower counts?', 'They are counted, and they are not the point, and I will not dress them up as the point. The measure is whether a page reads as active, consistent and real to somebody checking you out.'],
      ['Do I have to be in the videos?', 'No, though the ones with a real person in them do better than the ones without. Work, crews and finished sites carry it perfectly well if you would rather stay off camera.'],
      ['What if I do not want generated material used?', 'Then none is used. Some owners want none of it and that is a perfectly good answer. Where any is used it carries a disclosure in the caption without exception.'],
    ],
  },
  'paid-growth': {
    title: 'Google & Meta Ads for Local Business | HigherMindAI',
    desc: 'The Tap: paid campaigns on your own accounts, on top of a Foundation that is already working. Last, always. Your spend on your own card.',
    h1Lead: 'Now turn it on. ',
    h1Em: 'Last, always.',
    sub: 'Organic is a well and paid is a tap. The well builds and you keep it, but it does not fill on the day you sign. The tap does. That is exactly why it comes last. I will not spend your money sending traffic to a profile with the wrong hours and a website that does not convert. Fix that first, then the tap goes on.',
    eyebrow: 'Paid ads',
    tag: 'The Tap',
    values: [
      ['Last, always', 'Never before the profile, the desk and the tracking are working. If I can rank you for the term instead, that is the cheaper answer and I will say so, even though it costs me the sale. Paid carries volume on top of a position that already holds - it does not replace the position.'],
      ['Built on the words people actually type', 'Every headline, image and landing page is built on the language somebody uses when they have decided they need this done, not on the language an agency would choose.'],
      ['Your accounts, your card', 'Campaigns run on your own Google and Meta accounts, and the spend goes on your own card, visible without asking. I never hold it and I never mark it up. Turn the tap down or off and nothing about your organic position changes.'],
    ],
    process: [
      ['Research', 'The language your buyers actually search with, and what the businesses already spending in your market are running.'],
      ['Build', 'Ad, audience and landing page built as one path to a booked enquiry.'],
      ['Launch', 'Live only once every call and form is counted, so the measure is qualified enquiries, not impressions.'],
      ['Tune', 'Every result reads as a lever, and the first ninety days are treated as the proving period, because nothing is proven yet.'],
    ],
    faq: [
      ['How is this structured?', TAP_LINE],
      ['Google or Meta?', 'Whichever fits how your buyers actually search. Sometimes both, built as one path rather than two campaigns that do not know about each other.'],
      ['Do I need to be ranking first?', 'In almost every case, yes, and paid is the one thing I will actively talk you out of buying first. The Tap sits last in the order for a reason: the profile, the desk and the counting have to be working before money goes in, or the spend leaks straight out the other side.'],
    ],
  },
};


export const PHASE_LABELS = ['Phase one', 'Phase two', 'Phase three', 'Phase four'];

// The general FAQ. Trade-agnostic, answer-first, and it must match the FAQPage
// schema character for character. No worked figures - there is no pricing on
// this site and the old door arithmetic was written against a retired ladder.
export const GENERAL_FAQ: [string, string][] = [
  [
    'What does HigherMindAI actually do?',
    'I find what is costing a local business its calls, fix it in order, and only then turn on the ads. In practice that is three steps. The Pin gets your Google profile into the map for the term people type and holds it there. The Foundation adds Facebook and Instagram kept current from your own job photos, a desk that answers when you cannot, and every call and form counted. The Storefront adds a website built around how your customers buy. Most businesses start on the Foundation.',
  ],
  [
    'How do local businesses get more calls from Google?',
    'By owning the map pack for the searches people actually run - the work plus the town - rather than buying those enquiries per lead. That means the Google Business Profile rebuilt with the correct category, every service named the way customers search for it, the service area drawn properly, reviews asked for and answered, and consistent details everywhere the business appears. Position compounds and it stays yours. A purchased lead stops the day payment stops.',
  ],
  [
    'What does the desk do when I cannot answer?',
    'It answers on the web or on your phone line, takes the details of the job against the questions you set, and sends them to you so the enquiry is waiting when you come off the tools. It is administrative intake only. It never quotes a price, never commits a crew to a time, and never gives advice reserved to a licensed person - those go straight to you. The full list is on the scope limits page.',
  ],
  [
    'How long does it take to go live?',
    'Live in 14 days on the web and 21 on the phone, counted from the last thing I need from you. The phone takes longer by design, because your questions and your escalation order are loaded and tested before a line is answered.',
  ],
];
