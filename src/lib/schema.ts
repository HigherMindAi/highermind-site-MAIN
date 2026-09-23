// ---------------------------------------------------------------------------
// HigherMindAI - JSON-LD builders (answer-layer / rich-result signals)
// One system; auto service, auto parts, trades and property management are built out. NO pricing in any block,
// deliberately. Published figures live in visible copy only - a price in
// structured data can be cached into a rich result against me, and visible
// copy changes in one deploy. Hyphens only, never em-dashes.
// ---------------------------------------------------------------------------
import {
  BASE, BIZ_NAME, PHONE_E164, EMAIL, LOCALITY, REGION, COUNTRY, FOUNDER,
  ORG_PROFILES, PERSON_PROFILES, WHATSAPP_URL,
} from './site';
import { City, REGION_FULL, HOME_AREA_SERVED, cityPath } from './cities';
import { AREA_SERVED } from './coverage';
import { OPENING_HOURS } from './site';
import { LADDER_ORDER, ONE_LINE } from './ladder';
import { TOWNS, type Town } from './towns';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Json = Record<string, any>;

const ORG_ID = `${BASE}/#org`;
const SERVICE_ID = `${BASE}/#service`;
const PERSON_ID = `${BASE}/#derek`;

// v15.3 - the Foundation's visible promise is a lead-in ("Everything in the
// Pin, plus:") that the page completes with a list. In structured data the
// list never arrived, so the anchor step was described to every crawler as
// "Everything in the Pin, plus:". Each offer now reads as a whole sentence.
const OFFER_DESCRIPTION: Record<string, string> = {
  foundation:
    'Found, trusted, answered, measured. Everything in the Pin, plus Facebook and Instagram rebuilt properly and kept current, a desk that answers when you cannot on the web or on your phone line, and every call and form counted. Where most start.',
};
function offerDescription(st: { key: string; line: string; promise: string }): string {
  if (OFFER_DESCRIPTION[st.key]) return OFFER_DESCRIPTION[st.key];
  return st.promise.trim().endsWith(':') ? `${st.line} ${st.promise.replace(/:\s*$/, '.')}` : st.promise;
}

// Organization + ProfessionalService as a single @graph, cross-linked by @id.
// This is the entity anchor AI engines use to confirm HigherMindAI is real.
export function orgSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: BIZ_NAME,
        url: BASE + '/',
        // `logo` feeds the Google knowledge panel and should be the BRAND MARK,
        // not the social share card. og.png is a 1200x630 headline graphic; the
        // touch icon is the actual mark on a solid field, which is what Google
        // asks for (square, >=112px, not a wordmark on a banner).
        logo: {
          '@type': 'ImageObject',
          url: `${BASE}/apple-touch-icon.png`,
          width: 180,
          height: 180,
        },
        email: EMAIL,
        telephone: PHONE_E164,
        founder: { '@id': PERSON_ID },
        // G2 - the entity, asserted from somewhere other than this site.
        sameAs: [...ORG_PROFILES],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: PHONE_E164,
            email: EMAIL,
            areaServed: ['CA', 'US'],
            availableLanguage: 'en',
          },
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: PHONE_E164,
            url: WHATSAPP_URL,
            areaServed: ['CA', 'US'],
            availableLanguage: 'en',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': SERVICE_ID,
        name: 'HigherMindAI - Local SEO, Google Business Profile and Call Answering',
        url: BASE + '/',
        image: `${BASE}/og.png`,
        description:
          'I find what is costing a local business its calls, fix it in order, and only then turn on the ads. Google Business Profile ranking, Facebook and Instagram kept current, a desk that answers when the owner cannot, every call and form counted, and websites built around how customers buy. For trades, auto parts and recyclers, and auto service and collision shops across the Headwaters, Canada and the United States. Solo operator, based in Erin, Ontario.',
        slogan: ONE_LINE,
        openingHoursSpecification: OPENING_HOURS.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'The ladder - three steps, in order',
          itemListElement: LADDER_ORDER.map((st) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: st.name,
              description: offerDescription(st),
              url: BASE + st.href,
            },
          })),
        },
        telephone: PHONE_E164,
        email: EMAIL,
        // The NAMED towns first, then the wider markets. Waypoint doctrine is
        // that a service area is a list of towns rather than a radius, and
        // these ten are the same ten the Google profile claims - so the entity
        // anchor, the visible coverage page and the listing all assert one
        // service area rather than three overlapping ones.
        areaServed: [
          ...TOWNS.map((t) => ({
            '@type': 'City',
            name: t.name,
            containedInPlace: { '@type': 'AdministrativeArea', name: `${t.area}, Ontario, Canada` },
          })),
          ...HOME_AREA_SERVED.filter((h) => !TOWNS.some((t) => t.name === h)).map((t) => ({
            '@type': 'City',
            name: t,
            containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
          })),
          ...AREA_SERVED,
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: LOCALITY,
          addressRegion: REGION,
          addressCountry: COUNTRY,
        },
        // v15.3 - the listing itself, so the site entity and the Google
        // profile resolve to one business (Waypoint G2/G5).
        hasMap: ORG_PROFILES[0],
        provider: { '@id': ORG_ID },
      },
    ],
  };
}

export function personSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: FOUNDER,
    jobTitle: 'Founder',
    worksFor: { '@id': ORG_ID },
    // LinkedIn is Derek's, not the company's. It resolves the PERSON.
    sameAs: [...PERSON_PROFILES],
    image: `${BASE}/derek.webp`,
    url: BASE + '/about/',
    telephone: PHONE_E164,
    email: EMAIL,
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: LOCALITY,
        addressRegion: REGION,
        addressCountry: COUNTRY,
      },
    },
    knowsAbout: [
      'auto repair shop marketing',
      'collision centre marketing',
      'auto body shop SEO',
      'auto recycler and salvage yard websites',
      'auto parts finder and vehicle fitment tools',
      'trades and home services marketing',
      'property management marketing',
      'condominium management marketing',
      'property management answering service',
      'local search marketing',
      'local SEO',
      'Google Business Profile ranking',
      'after-hours call answering',
      'website design for local businesses',
      'Google Ads for local businesses',
      'the justice system',
    ],
    description:
      'Founder of HigherMindAI. Built and ran a produce delivery business across twenty-six cities, then worked as general manager inside a property management and maintenance operation. Background in law enforcement and the Canadian Armed Forces. Now builds local search visibility, call answering desks and websites for trades and service businesses across Canada and the United States, with named books for auto service and collision, auto parts and recyclers, trades and home services, and property and condominium management. Based in Erin, Ontario, Canada.',
  };
}

export function breadcrumbs(trail: [string, string][]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, url], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: BASE + url,
    })),
  };
}

export function faqSchema(qa: [string, string][]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// Service schema. NO offers/price fields - the guarantee, not the rate, is the
// public promise, and pricing never goes in the markup.
export function serviceSchema(name: string, desc: string, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description: desc,
    url: BASE + url,
    areaServed: AREA_SERVED,
    provider: { '@id': ORG_ID },
  };
}

/**
 * For a page that explains something INCLUDED in an engagement rather than
 * something sold. The Record is the case: it is the reporting that ships
 * inside the managed lines, never a line of its own.
 *
 * Marking it up as a Service tells an answering engine there is a product here
 * and invites it to quote one - which is exactly the contradiction a prospect
 * finds when he runs the proposal and the website through the same model. So
 * it is a WebPage that is ABOUT the business, not an offer from it.
 */
export function featurePageSchema(name: string, desc: string, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: desc,
    url: BASE + url,
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/**
 * The services inventory - Waypoint lever G4.
 *
 * This was emitting bare ListItems carrying a brand name and a URL, which a
 * model reads as navigation rather than inventory: it learned that something
 * called "Visibility" exists and nothing about what it is or what anybody
 * would type to find it.
 *
 * Each row now carries the TERM a person actually searches beside the name,
 * and each item is a Service provided by the Organization, so the block
 * answers "what does this business sell" rather than "what pages exist here".
 * The terms are the same strings the listing pack uses, which is what keeps
 * the website and the Google profile telling one story.
 */
export function servicesItemList(
  services: { name: string; slug: string; term: string; line: string; href?: string }[]
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Services provided by ${BIZ_NAME}`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        alternateName: s.term,
        serviceType: s.term,
        description: s.line,
        url: BASE + (s.href ?? `/services/${s.slug}/`),
        areaServed: AREA_SERVED,
        provider: { '@id': ORG_ID },
      },
    })),
  };
}

export function locationSchema(c: City, url: string): Json {
  const rfull = REGION_FULL[c.region];
  if (c.tier === 'home') {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: BIZ_NAME,
      image: `${BASE}/og.png`,
      url: BASE + url,
      telephone: PHONE_E164,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: c.city,
        addressRegion: c.region,
        addressCountry: COUNTRY,
      },
      geo: { '@type': 'GeoCoordinates', latitude: c.geo[0], longitude: c.geo[1] },
      areaServed: HOME_AREA_SERVED.map((t) => ({ '@type': 'City', name: t })),
      description: `Google ranking and a call answering desk for property management firms in ${c.city} and across ${rfull}.`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local search marketing and call answering',
    name: `Property management lead generation in ${c.city}, ${c.region}`,
    url: BASE + url,
    areaServed: {
      '@type': 'City',
      name: c.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: rfull },
    },
    description: `Google ranking and a desk that answers when the office cannot, for property management firms in ${c.city}, ${rfull}. The Rank Lock: first page on the agreed term inside sixty days - ninety in the hardest markets - or the monthly pauses until it lands.`,
    provider: { '@id': ORG_ID },
  };
}

export function locationsItemList(cities: City[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: cities.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Property management lead generation in ${c.city}, ${REGION_FULL[c.region]}`,
      url: BASE + cityPath(c.slug),
    })),
  };
}


/**
 * /work/ as an ItemList of built sites.
 *
 * A portfolio with no markup is a page of pictures to a model. Typed, it
 * becomes a list of things this business made, each with a live URL it can
 * verify - which is the corroboration lever (G6) expressed in a way a crawler
 * can actually read.
 *
 * No performance figures here either. Nothing in this graph is a claim that
 * cannot be checked by opening the link.
 */
export function workSchema(
  items: ReadonlyArray<{ name: string; url: string; line: string; built: readonly string[] }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE}/work/#collection`,
    name: 'Selected work by HigherMindAI',
    url: `${BASE}/work/`,
    isPartOf: { '@id': `${BASE}/#org` },
    about: { '@id': SERVICE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: items.length,
      itemListElement: items.map((w, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'WebSite',
          name: w.name,
          url: w.url,
          description: w.line,
          creator: { '@id': `${BASE}/#org` },
          keywords: w.built.join(', '),
        },
      })),
    },
  };
}

/** The ladder as an ItemList - what this business sells, in order. */
export function ladderSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `How ${BIZ_NAME} works - three steps, in order`,
    numberOfItems: LADDER_ORDER.length,
    itemListElement: LADDER_ORDER.map((st, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: st.name,
        description: st.key === 'foundation' || st.promise.trim().endsWith(':') ? offerDescription(st) : `${st.line} ${st.promise}`,
        url: BASE + st.href,
        provider: { '@id': ORG_ID },
        areaServed: AREA_SERVED,
      },
    })),
  };
}

/** A Headwaters town page: local SEO offered in that town, by the org. */
export function townServiceSchema(t: Town, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Local SEO in ${t.name}`,
    serviceType: 'Local SEO',
    alternateName: [t.term, `Google Maps ranking ${t.name}`, `Google Business Profile ${t.name}`],
    description: `Google map pack ranking, a desk that answers when the owner cannot, and every call and form counted, for businesses in ${t.name} and ${t.places.filter((p) => p !== t.name).join(', ')}.`,
    url: BASE + url,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: t.name,
      geo: { '@type': 'GeoCoordinates', latitude: t.geo[0], longitude: t.geo[1] },
      containedInPlace: { '@type': 'AdministrativeArea', name: `${t.area}, Ontario, Canada` },
    },
  };
}
