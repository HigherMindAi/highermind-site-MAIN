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
    slug: 'the-catchment',
    name: 'The Catchment',
    line: 'Demand engineering welded to an AI front desk. I make the phone ring, and then I answer it. The whole loop, one operator.',
    flag: true,
  },
  {
    slug: 'cortex',
    name: 'Cortex',
    line: 'An AI front desk that answers, qualifies and books every enquiry in under 60 seconds. Day or night. Miss one and the month is free.',
    flag: false,
  },
  {
    slug: 'local-ranking-system',
    name: 'Local Ranking System',
    line: 'Top 3 of the Google Map Pack, engineered and held there. The organic half of the inflow, and an asset you own outright.',
    flag: false,
  },
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
    line: 'Not a brochure - a salesperson. A fast, conversion-built site that turns the people already searching into booked appointments.',
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
  'the-catchment': {
    title: 'The Catchment: Demand Engineering + AI Front Desk | HigherMindAI',
    desc: 'Demand engineering welded to an AI front desk. I engineer the people already searching to find you, then answer, qualify and book every one of them. Any enquiry missed, that month is free.',
    h1Lead: 'I make the phone ring. ',
    h1Em: 'Then I answer it.',
    sub: 'A catchment is the whole territory that drains into a single point. Yours is every person nearby already searching for what you do. Most of it drains somewhere else right now - either because they cannot find you, or because nobody picks up when they do. Those are two different problems, and almost every agency sells a fix for one and walks away from the other.',
    eyebrow: 'The Catchment',
    values: [
      ['The inflow', 'Organic, paid, or both. Organic engineers your Google Business Profile into the top three of the Map Pack and holds it there. It is an asset you own - it compounds, and it does not stop the day you stop paying. Paid builds Google and Meta funnels on research into the exact words your real buyers use. Faster, and you control the tap.'],
      ['The catch', 'Cortex. An AI front desk trained on your practice. It answers from your knowledge rather than guessing, asks your qualifying questions, screens out the people you do not want, and books the ones you do while they are still in the conversation. Every enquiry answered in under sixty seconds, day or night.'],
      ['The report', 'The Catchment Report, on the first of every month. Every enquiry that arrived, every one that was caught, every one that came in after you had gone home, and every appointment booked, with the times on them. The work never goes invisible again.'],
    ],
    process: [
      ['The audit', 'Before anything is quoted, I run the Catchment Audit. A rank read across your service area, and a leak log where I become your customer and time how long you take to answer. You keep it either way.'],
      ['The build', 'Two weeks. Profile rebuilt or funnels engineered, conversion pages live, and Cortex trained on your actual knowledge, your qualifying questions, your calendar. Live in 14 days or the build fee comes back in full.'],
      ['The loop', 'The inflow runs and the catch holds. Rankings compound, enquiries arrive, and every one of them is answered and offered a booking. Any month one goes unanswered is free.'],
      ['The report', 'The first of every month, the Catchment Report lands. You will never have to wonder whether this is working. You will be holding the answer.'],
    ],
    faq: [
      ['Do I have to take the whole thing?', 'No. Organic and paid can be bought on their own, and Cortex runs standalone for a practice that already has the traffic and cannot catch it. But every configuration includes the catch, because demand without a catch is the hole I just described.'],
      ['What is the Catch Lock?', 'Every enquiry that arrives gets answered and offered a booking. If one goes unanswered, that month is free. Not a credit, not a discount. Free. The logs are the record and you can see them any time.'],
      ['How long before it works?', 'Cortex is live in fourteen days and starts catching enquiries the day it goes on. Ranking is slower because it compounds - early movement, then position, then holding it. The clock is 60 days and it starts the day I have what I need, not the day you sign.'],
      ['Is there a contract?', 'Ninety days, then month-to-month with thirty days notice. The build takes two weeks and a ranking needs a fair run to compound. Ninety days is the shortest honest window in which you can judge whether this works.'],
      ['What does it cost?', 'It depends on the inflow you need, and I will not quote you a number before I have looked at your market. Run the Catchment Audit first. It is free, it takes me forty minutes, and then the number means something.'],
    ],
  },
  cortex: {
    title: 'Cortex: AI Receptionist & Front Desk for Practices | HigherMindAI',
    desc: 'An AI front desk that answers your phone, your web chat and your forms in under 60 seconds, day or night. Trained on your practice. It qualifies, it books, and it never guesses.',
    h1Lead: 'The call that came in at nine at night ',
    h1Em: 'went somewhere.',
    sub: 'It went to whoever answered first. Cortex is an AI front desk trained on your practice - it answers from your own knowledge, asks your qualifying questions in your words, screens out the people you do not want, and books the ones you do straight into your calendar. It is not a chatbot that guesses. It answers from your truth or it hands off cleanly.',
    eyebrow: 'Cortex',
    values: [
      ['It answers from your truth', 'Built on your actual knowledge - your services, your prices, your policies, the things you say a hundred times a week. When it does not know, it hands off to a human rather than inventing an answer. A bot that guesses about a medical procedure is worse than no bot.'],
      ['It qualifies before it books', 'Your qualifying questions, asked in your words. The people who are not a fit get a courteous no. The people who are get a slot in your calendar while they are still in the conversation, before they think to call anybody else.'],
      ['It never sleeps, and it never gets busy', 'Nine at night, Saturday morning, or while your front desk is with a patient. Every enquiry answered in under sixty seconds. Your receptionist is good. She is also one person, and she goes home.'],
    ],
    process: [
      ['Ground it', 'About thirty minutes of your time. Your knowledge, your qualifying questions, your calendar, your escalation rules - the edge where it stops and hands off to you.'],
      ['Build it', 'Trained, tested against the real questions your customers ask, and tuned until it sounds like your practice rather than a machine.'],
      ['Deploy it', 'Live on your site and one more channel inside 14 days, or the build fee comes back in full. No conditions.'],
      ['Prove it', 'The Catchment Report, on the first of every month. Every enquiry, every catch, every after-hours arrival, every booking, with the times on them.'],
    ],
    faq: [
      ['Will an AI answering my phone put people off?', 'They want an answer. Right now, at nine at night, they get a ring tone. A voice that picks up, knows your practice, takes their details and books them in is not competing with a person. It is competing with nobody.'],
      ['I already have a chatbot.', 'You have a form that says hello. Most of them cannot tell a visitor whether you even offer the service they are asking about, cannot book, and hand everything to a human who is busy. That is not a chatbot. It is a mailbox with an avatar.'],
      ['I already have a receptionist.', 'You do, and she is good. She is also one person who takes lunch, goes home at five, and cannot pick up while she is with a patient. I am not replacing her. I am covering the calls she never got the chance to take.'],
      ['What if it gets something wrong?', 'It answers from your knowledge or it hands off. It is built not to invent. Where the risk is real - anything clinical, anything legal - it is configured to escalate to a human rather than have an opinion.'],
      ['What happens if it misses an enquiry?', 'That month is free. That is the Catch Lock, and it is the only guarantee I make that does not expire the day it comes true. I have to keep it every morning, forever.'],
    ],
  },
  'ai-systems': {
    title: 'Custom AI Systems & Automation for Practices | HigherMindAI',
    desc: 'Custom AI built on your own knowledge. Intake, triage, qualifying, quoting, follow-up. It answers from your truth or it hands off cleanly. It never guesses, and it never invents.',
    h1Lead: 'The same forty answers, ',
    h1Em: 'a hundred times a week.',
    sub: 'Every practice runs on one signature motion - an intake, a triage, a quote, a match, a follow-up - and it eats the day. I build the AI that runs it, on your own knowledge, so it answers from your truth rather than a plausible guess. Where the stakes are real, it hands off to a human instead of having an opinion.',
    eyebrow: 'AI Systems',
    values: [
      ['Grounded in your knowledge', 'It answers from the truth of your practice - your services, your criteria, your policies - or it hands off. It is engineered not to invent, because an invented answer in a medical or legal context is not a bug, it is a liability.'],
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
      ['How is this different from Cortex?', 'Cortex is the front desk - it answers, qualifies and books. AI Systems is everything behind it: the intake, the triage, the quote, the follow-up. Most practices need the front desk first.'],
      ['Will it make things up?', 'It is built not to. It answers from your grounded knowledge or it hands off to a human. In a clinical or legal setting that boundary is the whole design, not a feature.'],
      ['How much of my time does it take?', 'About thirty minutes of real input, then I build it. You approve it before it goes anywhere near a customer.'],
      ['What if I do not actually need this?', 'Then I will say so. I would rather tell you on the first call than take your money and watch you leave in three months. I have already had that year.'],
    ],
  },
  'local-ranking-system': {
    title: 'Google Maps Ranking & Local SEO | HigherMindAI',
    desc: 'Get your business into the top 3 of the Google Map Pack and keep it there. The Local Ranking System, engineered and maintained. First page in 60 days or you stop paying.',
    h1Lead: 'Google Maps ranking & local SEO ',
    h1Em: 'that holds.',
    sub: 'Your Google Business Profile is the single most powerful tool you have for capturing local customers - the people already searching, ready to call. Most businesses claim it, fill in the basics, and walk away. I engineer it into a top-3 position in the Map Pack, then keep it there.',
    eyebrow: 'The Local Ranking System',
    values: [
      ['Built on the levers Google rewards', 'Primary category, proximity signals, review velocity, citation consistency, behavioural signals. No guesswork, no tricks that risk your profile - the deliberate-upgrade standard.'],
      ['Measured on a locked heatmap', 'A 7x7 grid on your exact search term, run at day 0, 30, 40, and 60. You see the trend, not a vibe - the same before/after I show on my own profile.'],
      ['Held to a real guarantee', 'First page in 60 days on a winnable term, or you stop paying until you are there. The risk sits with me, where it belongs.'],
    ],
    process: [
      ['Audit & rebuild', 'Full teardown of your profile and your top three competitors, then a rebuild engineered for maximum local relevance.'],
      ['Citations & authority', 'Deep-tier citation cleanup across the directories Google uses to verify a business, plus the answer-layer foundations that feed AI search.'],
      ['Reviews that rank', 'A structured, policy-clean system for consistent 5-star reviews, each responded to with service and city woven in.'],
      ['Weekly signals', 'Three high-authority posts a week and a weekly profile ritual - the activity that keeps you ranked once you arrive.'],
    ],
    faq: [
      ['How fast can I rank?', 'It depends on your category and competition, which is why the guarantee exists. The work compounds - early movement, then ranking, then holding. My fastest build, a security systems installer in Atlantic Canada, went from a profile that did not exist to the top three in 30 days. Your clock runs 60.'],
      ['What if I am not on the first page in 60 days?', 'You stop paying the monthly and I keep working at no charge until you are ranked. Billing starts at onboarding; the 60-day clock starts when onboarding completes.'],
      ['Do you work outside your home area?', 'Yes. I am based in Erin and serve local businesses across Canada, with expansion into the US and UK. The system is location-specific - your pin and service area drive the build.'],
      ['Will this risk my Google profile?', 'No. No name-stuffing, no fake photo data, no junk-citation blasts. I hold your profile to the same clean standard I hold my own.'],
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
      ['Which platforms?', 'The ones your customers actually check before calling. I start where it matters most for your category.'],
      ['Do I need this if I am already ranking?', 'Ranking gets you found; social closes the trust gap. The two compound - a ranked profile plus a credible page closes more of the calls you earn.'],
    ],
  },
  'paid-growth': {
    title: 'Google & Meta Ads Management, Headwaters | HigherMindAI',
    desc: 'Engineered ad funnels built on the exact language your real customers use. Ad spend that compounds into a pipeline you can count on, not a monthly gamble.',
    h1Lead: 'Ad spend that compounds ',
    h1Em: 'into pipeline.',
    sub: 'Most ad spend is guesswork with a dashboard. Money goes in, impressions come out, and nobody can tell you why it worked or why it quietly stopped. I engineer the entire path a buyer travels - from a stranger\u2019s first scroll to a booked sale.',
    eyebrow: 'Paid Growth',
    values: [
      ['Built on real customer language', 'Every headline, image, and page is built on the words your real customers use and the proven structures of the top players in your category.'],
      ['The whole path, not just the click', 'From first scroll to booked sale - the ad, the page, and the follow-through engineered as one system, so you know which lever to pull when something moves.'],
      ['Aligned incentives', 'Structured as a performance share - I win when you win. Spend that builds a pipeline you can count on, not a gamble you re-roll and hope on.'],
    ],
    process: [
      ['Research', 'Your real customers\u2019 language and the top performers in your category, decoded.'],
      ['Build', 'Ad, audience, and landing page engineered as one path to a booked sale.'],
      ['Launch', 'Live with clear tracking on the metric that matters - booked work, not impressions.'],
      ['Optimize', 'Every result reads as a lever. When something moves, I know precisely why.'],
    ],
    faq: [
      ['How is pricing structured?', 'Paid Growth is structured as a performance share, so the incentives line up - I am paid to make your spend work, not to spend it.'],
      ['Google or Meta?', 'Whichever fits how your customers buy. Often both, built as one funnel rather than two disconnected campaigns.'],
      ['Do I need ranking first?', 'Not necessarily, but ranking and ads compound. Organic builds a durable base; ads add controllable volume on top.'],
    ],
  },
};

export const PHASE_LABELS = ['Phase one', 'Phase two', 'Phase three', 'Phase four'];
