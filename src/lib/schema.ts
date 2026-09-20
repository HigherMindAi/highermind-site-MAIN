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

/* eslint-disable @typescript-eslint/no-explicit-any */
type Json = Record<string, any>;

const ORG_ID = `${BASE}/#org`;
const SERVICE_ID = `${BASE}/#service`;
const PERSON_ID = `${BASE}/#derek`;

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
        name: 'HigherMindAI - Local Search Marketing & AI Intake',
        url: BASE + '/',
        image: `${BASE}/og.png`,
        description:
          'Local search marketing, AI intake and website builds for trades and service businesses across Canada and the United States. Four named books - auto service and collision, auto parts and recyclers, trades and home services, and property and condominium management - and any business where one won client is worth having. I get a business found when somebody nearby goes looking, and make sure every enquiry that lands is answered and qualified rather than lost. One firm per trade, per market.',
        telephone: PHONE_E164,
        email: EMAIL,
        // The NAMED towns first, then the wider markets. Waypoint doctrine is
        // that a service area is a list of towns rather than a radius, and
        // these ten are the same ten the Google profile claims - so the entity
        // anchor, the visible coverage page and the listing all assert one
        // service area rather than three overlapping ones.
        areaServed: [
          ...HOME_AREA_SERVED.map((t) => ({
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
      'AI intake and answering services',
      'AI voice agents',
      'AI receptionist',
      'the justice system',
    ],
    description:
      'Founder of HigherMindAI. Spent ten months contracted inside a property management operation on the sales, CRM and maintenance side, and close to a decade inside the justice system before that, in courtrooms and federal casework. Now builds local search visibility, AI intake and websites for trades and service businesses across Canada and the United States, with named books for auto service and collision, auto parts and recyclers, trades and home services, and property and condominium management. Based in Erin, Ontario, Canada.',
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
      description: `Google ranking and AI intake systems for property management firms in ${c.city} and across ${rfull}.`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local search marketing and AI intake',
    name: `Property management lead generation in ${c.city}, ${c.region}`,
    url: BASE + url,
    areaServed: {
      '@type': 'City',
      name: c.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: rfull },
    },
    description: `Google ranking and a 24/7 AI intake desk for property management firms in ${c.city}, ${rfull}. First page in 60 days on the agreed primary term, or the monthly pauses until it lands.`,
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
