// ---------------------------------------------------------------------------
// HigherMindAI - JSON-LD builders (answer-layer / rich-result signals)
// Law-firm positioning. NO pricing in any block, deliberately - the rate card
// lives on the page, never in the markup. Hyphens only, never em-dashes.
// ---------------------------------------------------------------------------
import {
  BASE, BIZ_NAME, PHONE_E164, EMAIL, LOCALITY, REGION, COUNTRY, FOUNDER,
} from './site';
import { City, REGION_FULL, HOME_AREA_SERVED } from './cities';

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
        logo: `${BASE}/og.png`,
        email: EMAIL,
        telephone: PHONE_E164,
        founder: { '@id': PERSON_ID },
        sameAs: [
          // Paste live profile URLs here once citation profiles are live.
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': SERVICE_ID,
        name: 'HigherMindAI - AI Intake & Lead Generation for Law Firms',
        url: BASE + '/',
        image: `${BASE}/og.png`,
        description:
          'An AI intake desk and lead-generation system for law firms. It ranks a firm so clients find it, then answers every call and message 24/7, screens it, captures it, and books the consultation.',
        telephone: PHONE_E164,
        email: EMAIL,
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Ontario, Canada' },
          { '@type': 'Country', name: 'Canada' },
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
    image: `${BASE}/derek.webp`,
    url: BASE + '/about',
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
      'legal client intake',
      'law firm marketing',
      'local SEO',
      'Google Business Profile ranking',
      'AI voice agents',
      'AI receptionist',
      'the justice system',
    ],
    description:
      'Founder of HigherMindAI. Spent close to a decade inside the justice system - courtrooms and federal casework - before building AI intake and ranking systems for law firms. Based in Ontario, Canada.',
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
    areaServed: { '@type': 'Country', name: 'Canada' },
    provider: { '@id': ORG_ID },
  };
}

export function servicesItemList(
  services: { name: string; slug: string }[]
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${BASE}/services/${s.slug}/`,
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
      description: `AI client intake and Google ranking for law firms in ${c.city} and across ${rfull}.`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Law firm lead generation and AI intake',
    name: `Law firm lead generation in ${c.city}, ${c.region}`,
    url: BASE + url,
    areaServed: {
      '@type': 'City',
      name: c.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: rfull },
    },
    description: `Google ranking and a 24/7 AI intake desk for law firms in ${c.city}, ${rfull}. First page of Google Maps in 60 days or you stop paying.`,
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
      name: `Law firm lead generation in ${c.city}, ${REGION_FULL[c.region]}`,
      url: `${BASE}/local-seo/${c.slug}/`,
    })),
  };
}
