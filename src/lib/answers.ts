// ---------------------------------------------------------------------------
// ANSWER-FIRST PAGES  (Waypoint GEO, lever G3)
//
// A service page argues. An answer page ANSWERS, in the first forty words,
// before it has earned anything - because that is the block a model lifts when
// somebody asks the question out loud, and because a person who typed a
// question wants the answer rather than a pitch.
//
// The rules these pages are built to:
//
//   1. ONE question per URL, phrased the way somebody actually types it.
//      Not "Local Pack Optimisation" - "why does my competitor show up above
//      me on Google Maps".
//   2. The direct answer is the FIRST thing on the page, in plain sentences,
//      self-contained enough to be quoted without the rest of the page. If it
//      only makes sense in context, it will not get quoted.
//   3. The answer is true even when it costs a sale. The one that says "check
//      whether you are already at capacity first" is the one that gets cited,
//      because it is the only version of the answer nobody else publishes.
//   4. No pricing. Ever. The arithmetic is done live.
//
// These are not blog posts and they do not get dated. They are reference
// pages, and each one ends with a plain text link to the step that fixes the
// thing it explained (never a second button - the page closes on the
// nine minutes).
// ---------------------------------------------------------------------------

import { LAUNCH_LOCK } from './ladder';

export interface Answer {
  slug: string;
  /** The question, as typed. Becomes the H1 and the schema question. */
  q: string;
  /** Title tag. Kept under 60 characters. */
  title: string;
  /** Meta description. Under 158 characters. */
  desc: string;
  /** THE ANSWER. First block on the page. Quotable on its own. */
  answer: string;
  /** Short label for the hub and the cross-links. */
  short: string;
  /** The body: heading plus paragraph. */
  body: [string, string][];
  /** Follow-ups a person asks next. Feeds FAQ schema. */
  more: [string, string][];
  /** The step that fixes it. Rendered as an inline text link, not a button. */
  cta: { label: string; href: string };
}

export const ANSWERS: Answer[] = [
  {
    slug: 'why-does-my-competitor-rank-above-me-on-google-maps',
    q: 'Why does my competitor show up above me on Google Maps?',
    title: 'Why Does My Competitor Outrank Me on Google Maps?',
    desc: 'Usually one setting rather than one hundred. The category, the service area and review recency decide most local pack positions. How to check yours.',
    short: 'Why a competitor outranks you on Maps',
    answer:
      'Almost always because of one setting rather than a hundred small things, and the setting is usually the primary category. A business listed in a broad category cannot rank for the specific thing it sells, so a smaller competitor in the correct category beats a bigger business in the wrong one. The next two most common causes are a service area that was never drawn, which leaves a profile competing only in the postal code its address sits in, and review recency, because a profile whose last review is fourteen months old reads as dormant. Proximity to the searcher also matters and you cannot change it, which is exactly why the settings you can change are worth getting right.',
    body: [
      [
        'The category is the eligibility gate, not a label',
        'Google uses the primary category to decide which searches a profile is allowed to appear for at all. It is not a description of the business, it is a filter. Most profiles were claimed years ago and the category was picked in a hurry from a list, and nothing since then has flagged it. A collision centre listed as a general auto shop, a paving contractor listed as a general contractor and a mobile mechanic listed as an auto repair shop are all invisible for the specific work they actually want. Check what the three businesses ranking above you are listed as, because that comparison usually ends the argument in about a minute.',
      ],
      [
        'A service area is named towns, not a radius',
        'If the interface allows named towns, use named towns. A radius is a guess and it is frequently a guess that does not match where the vans actually go. The gap between where a business works and where its profile claims to work is the most common finding there is, and it shows up as a business that ranks in its own town and vanishes one town over, which the owner then reads as a competitor being better rather than as a blank field.',
      ],
      [
        'Reviews decide the tie, and recency is half of it',
        'Volume matters less than most owners expect, and recency matters more. A profile with forty reviews where the last one is from last year loses to a profile with eighteen where three arrived this month. The fix is not buying reviews, which is detectable and against platform rules. It is asking the satisfied majority who would never think to leave one, on a rhythm, and answering every review that arrives - including the bad ones, which are read by the next customer rather than by the person who wrote them.',
      ],
      [
        'Proximity is real, and it is the part you cannot fix',
        'A searcher standing closer to your competitor will sometimes see him first no matter what you do. That is worth saying plainly, because a lot of local marketing is sold on the pretence that position is fully controllable. It is not. What is controllable is being eligible at all, which is the category, and being the obvious choice among the businesses the searcher does see, which is the profile and the reviews.',
      ],
    ],
    more: [
      [
        'How long does it take to change position once the category is fixed?',
        'A category correction can move things within days because it changes what the profile is eligible for rather than how well it scores. The rest - service area, reviews, citations, on-page work - compounds over weeks. Sixty days is the honest horizon for a first-page position on an agreed primary term, and any timeline shorter than that is being sold rather than estimated.',
      ],
      [
        'Can I fix this myself?',
        'Yes, and for a single-location business with one obvious category you probably should. Open the profile, compare your primary category against the three above you, draw your real service area as named towns, and start asking for reviews properly. If that gets it done, it got done and you owe nobody anything.',
      ],
      [
        'Does my website affect the map pack?',
        'Yes, less directly than people assume. The local pack is its own system, but the site supports it - a page per service in the language customers use, consistent name and phone with the profile, and pages that load quickly on a phone. A site alone will not win the pack, and a profile with nothing behind it struggles to hold a position once it has one.',
      ],
    ],
    cta: { label: 'The Pin, where the profile is rebuilt and held', href: '/how-it-works/#the-pin' },
  },

  {
    slug: 'why-doesnt-my-shop-show-up-for-collision-repair',
    q: 'Why does my shop not show up for collision repair?',
    title: 'Why Does My Shop Not Show Up for Collision Repair?',
    desc: 'Collision and mechanical repair are separate Google categories. A shop that does both and is listed as one is invisible for half of what it does.',
    short: 'Why a shop is invisible for collision',
    answer:
      'Because collision repair and mechanical repair are two different categories on Google, and most shops that do both are listed as only one. A shop sitting in a general auto repair category is effectively invisible for auto body and collision searches, which is usually the higher-ticket half of its work. It is one setting, it was almost certainly chosen when the listing was first claimed, and nothing about it ever announces itself - the work simply goes to whoever is listed correctly. Open your profile, look at the primary category, then look at what the three shops ranking above you for collision are listed as.',
    body: [
      [
        'Drivers search for the two jobs as different things',
        'Nobody with a dented quarter panel searches for auto repair, and nobody with a failing transmission searches for auto body. Google mirrors that split, so the categories are separate and a profile can only be primary in one of them. The fix is to set the primary category to whichever work you actually want more of, and to carry the other as a secondary category rather than leaving it off entirely.',
      ],
      [
        'Secondary categories open doors, and wrong ones dilute',
        'A secondary category makes a profile eligible for another set of searches, which is why a shop doing both should carry both. It is not free, though: every category that does not describe real work weakens the signal about what the business mainly is. Two accurate categories beat five aspirational ones, and a shop that lists tyre fitting because it sometimes fits tyres is spending relevance it needs elsewhere.',
      ],
      [
        'The services list is the inventory, and most are empty',
        'Underneath the category sits a services list, and on most shop profiles it is blank or carries three generic entries. That list is read as an inventory: brake repair, transmission repair, collision repair, auto body, paintless dent repair, frame straightening, insurance estimates. Each entry named the way a driver would type it is another surface the profile can be matched on, and it costs nothing but the time to write it.',
      ],
      [
        'Then check whether the phone is answered',
        'Being found is half of it. A driver whose car is undrivable rings three shops and takes whoever answers, and a shop counter is one person who is also writing estimates in a building with air tools running. Fixing the category and leaving the phone as it is produces more missed calls rather than more work, which is why a busy shop usually starts with The Foundation, where the desk sits beside the profile work.',
      ],
    ],
    more: [
      [
        'Should the primary category be collision or mechanical?',
        'Whichever you want more of, not whichever is bigger today. Collision carries a higher average ticket and the insurer is usually paying, which takes the customer’s budget out of the decision entirely. Mechanical is higher volume and repeats. Pick on the direction you want the shop to go, carry the other as a secondary, and give both a full services list.',
      ],
      [
        'Does this matter if most of my collision work comes from insurers?',
        'More, not less. When an insurer is paying, price stops being the constraint and the only question left is which shop the driver found and got through to first. A driver choosing between three names on a map is not comparing quotes, because the quote is not his problem.',
      ],
      [
        'I am booked three weeks out. Should I still fix this?',
        'Fix the category anyway, because it costs nothing and it changes what you are eligible for whenever you do want the work. Do not buy ranking work while you are at capacity with no plan to add a bay or a tech - more calls you cannot take produces a worse review profile than you started with. Sort out who answers first, so the calls you do take stop going nowhere.',
      ],
    ],
    cta: { label: 'How this is set up for auto service and collision', href: '/auto-service-collision/' },
  },

  {
    slug: 'what-is-a-virtual-receptionist',
    q: 'What is a virtual receptionist for a trades business?',
    title: 'What Is a Virtual Receptionist for Trades?',
    desc: 'The desk that answers your line and your site when you cannot, takes the enquiry down properly and routes it to a person. What it does and where it stops.',
    short: 'What a virtual receptionist does',
    answer:
      'A virtual receptionist is the desk that answers when you cannot - on your phone line, on your website, or both - while you are on a roof or under a sink. A properly set up one answers the routine question in your own words, takes the enquiry down against the criteria you set (what the job is, which town, how urgent), books what should be booked, logs the contact, and routes anything real to a person on your own escalation order. It does administrative intake and nothing else. It never quotes a price, never diagnoses a problem, never says whether something is covered by insurance, and never does anything a licence is reserved for. Those go straight to a person. It earns its place on the calls that currently become nothing: the ones that land while you are on a job.',
    body: [
      [
        'It is not a voicemail box with a better greeting',
        'What it replaces is usually an answering service that takes a name and a number and passes it on in the morning, or a voicemail nobody leaves. The difference is the questions it asks: what kind of job, which town, how urgent, and whether this is a real enquiry or somebody shopping a price. An enquiry that arrives already sorted is a different thing from a message that says "call John back". For a trades business, that is the difference between a van rolling to the right job first and a morning spent phoning people back to find out what they wanted.',
      ],
      [
        'The web and the phone are one desk',
        'Most trades businesses have a form that goes to an inbox and a phone that goes to voicemail, and the two know nothing about each other. Set up properly it is one desk with one set of answers, one set of screening questions and one escalation order, so a customer gets the same answer whether he types it or says it, and nothing arrives twice.',
      ],
      [
        'Where it stops',
        'Anything where a wrong answer is expensive. It never quotes a price, never estimates a job, never tells somebody whether damage is covered by a policy, never commits a crew or a completion date nobody authorised, and never performs a function reserved to a licensed person. Those are not soft guidelines. They are set up as hard handoffs to a person, and anybody selling you a desk who will not write down where it stops is telling you something.',
      ],
      [
        'What decides whether it is worth it',
        'One number: what a won job is worth to you. If a signed job is worth real money and enquiries arrive while nobody can answer them, the arithmetic is usually obvious, and it is your arithmetic rather than a vendor’s. If your work is low-value and high-volume, or somebody already answers reliably at the hours enquiries actually arrive, it probably is not worth it, and anybody honest will say so.',
      ],
    ],
    more: [
      [
        'Will callers know it is not me answering?',
        'Nobody is deceived about it. The desk does not pretend to be you or to be somebody it is not. In practice most callers care whether they got an answer and whether somebody is coming, not who took the details down. Where it goes wrong is a desk that oversells itself and tries to handle something it should have handed over.',
      ],
      [
        'Does it replace my staff?',
        'No. It covers the hours and the overflow your people cannot, and hands everything real to a person. What it usually replaces is the voicemail box and the answering service already being paid for - one that writes down a message rather than sorting it, and leaves nothing behind.',
      ],
      [
        'How long does it take to set up?',
        `${LAUNCH_LOCK} The phone takes longer than the web for a good reason: every escalation rule has to be loaded and tested before a phone answers. A burst pipe at eleven at night is not a thing to get approximately right.`,
      ],
    ],
    cta: { label: 'The Foundation, where the desk sits', href: '/how-it-works/#the-foundation' },
  },

  {
    slug: 'why-dont-i-show-up-in-the-next-town-over',
    q: 'Why do I not show up in the next town over?',
    title: 'Why Do I Not Show Up in the Next Town Over?',
    desc: 'Because your profile competes where your address is, not where your vans go. Named service areas, and why each town has to be built as its own unit.',
    short: 'Why you vanish one town over',
    answer:
      'Because a Google Business Profile competes from where its address sits, not from where the work actually goes. If the service area was never drawn, or was drawn as a radius rather than named towns, the profile is effectively a local business in one postal code. Proximity is a real ranking factor and distance genuinely works against you, so the next town is not simply a weaker version of your own - it is a separate contest, with different competitors, that has to be entered deliberately. Naming the towns is the first step; having something on your website that is genuinely about that town is what makes the claim hold.',
    body: [
      [
        'Name the towns, do not draw a circle',
        'Where the interface allows named towns, name them. A radius is a guess that usually does not match where the vans go, and it includes places you do not serve while missing places you do. Ten accurate towns is a stronger and more honest claim than a twenty-five kilometre circle, and it is also checkable, which matters more than it sounds.',
      ],
      [
        'A named area is a claim, not a ranking',
        'Adding a town to the service area makes you eligible there. It does not put you in the pack. The businesses already ranking in that town have proximity, reviews from people in that town and usually a page that mentions it. Eligibility is the entry fee, and the rest is the work.',
      ],
      [
        'One page per town, and it has to be a real page',
        'The temptation is to take one page and swap the town name into it twenty times. Google names that pattern specifically and it does not work. A page that earns a position says something true about that market that is not true of the one next door - who the competitors are, what the demand actually looks like, why the work differs. If a town cannot carry a few genuinely distinct paragraphs, it does not need a page, it needs a mention.',
      ],
      [
        'Expand one town at a time, and only where it is winnable',
        'The right order is to hold the home town first, then take the next most winnable market rather than the biggest one. A competitive city with four established players and a decade of reviews is a long campaign; a town of eight thousand with three weak profiles is a fast one. Work out which is which before spending anything, and be prepared to be told your target market is not worth entering yet.',
      ],
    ],
    more: [
      [
        'How many towns can one business realistically rank in?',
        'More than most expect, and not all at once. Each town is its own contest and each one takes attention, so a sensible expansion is a couple of markets at a time with the home position already holding. A business trying to rank in fifteen towns simultaneously usually ranks properly in none of them.',
      ],
      [
        'Will adding service areas hurt my ranking at home?',
        'Not by itself. What hurts is claiming towns you do not serve, because the profile then reads as less specific and you get enquiries you have to turn down, which is its own kind of damage. Claim what is true and it costs you nothing at home.',
      ],
      [
        'Does a second physical location work better?',
        'Only if it is a real location with real staff. A virtual office or a mailbox used to claim a second profile is against platform rules, it is detectable, and the penalty is losing the listing rather than losing a position. It is not a shortcut, it is a risk taken with the asset the whole business depends on.',
      ],
    ],
    cta: { label: 'More Cities, offered once the home town holds', href: '/services/service-area-expansion/' },
  },
];

export const answerPath = (slug: string) => `/answers/${slug}/`;
