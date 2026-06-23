// ---------------------------------------------------------------------------
// HigherMindAI — JSON-LD builders (answer-layer / rich-result signals)
// Mirrors the schema emitted by the static generator.
// ---------------------------------------------------------------------------
import {
  BASE, BIZ_NAME, PHONE_E164, EMAIL, ADDRESS_STREET, POSTAL, LOCALITY, REGION, COUNTRY, FOUNDER,
} from './site';
import { City, REGION_FULL, HOME_AREA_SERVED } from './cities';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Json = Record<string, any>;

export function orgSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BIZ_NAME,
    image: `${BASE}/og.png`,
    url: BASE + '/',
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: '$$',
    description:
      'Local SEO and Google Business Profile ranking for local businesses. Top 3 of the Google Map Pack, engineered and maintained.',
    founder: { '@type': 'Person', name: FOUNDER },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_STREET,
      addressLocality: LOCALITY,
      addressRegion: REGION,
      postalCode: POSTAL,
      addressCountry: COUNTRY,
    },
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Local Ranking System',
        price: '600',
        priceCurrency: 'CAD',
        description:
          'Top 3 of the Google Map Pack, engineered and maintained. First page in 60 days or you stop paying. $600/mo flat, month-to-month.',
      },
    ],
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

export function serviceSchema(name: string, desc: string, url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description: desc,
    url: BASE + url,
    areaServed: { '@type': 'Country', name: 'Canada' },
    provider: {
      '@type': 'ProfessionalService',
      name: BIZ_NAME,
      telephone: PHONE_E164,
      address: {
        '@type': 'PostalAddress',
        addressLocality: LOCALITY,
        addressRegion: REGION,
        addressCountry: COUNTRY,
      },
    },
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
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_STREET,
        addressLocality: c.city,
        addressRegion: c.region,
        postalCode: POSTAL,
        addressCountry: COUNTRY,
      },
      geo: { '@type': 'GeoCoordinates', latitude: c.geo[0], longitude: c.geo[1] },
      areaServed: HOME_AREA_SERVED.map((t) => ({ '@type': 'City', name: t })),
      description: `Local SEO and Google Business Profile ranking for businesses in ${c.city} and the Headwaters region of Ontario.`,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO',
    name: `Local SEO in ${c.city}, ${c.region}`,
    url: BASE + url,
    areaServed: {
      '@type': 'City',
      name: c.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: rfull },
    },
    description: `Google Business Profile ranking and local SEO for businesses in ${c.city}, ${rfull}. Top 3 of Google Maps, first page in 60 days or you stop paying.`,
    provider: {
      '@type': 'ProfessionalService',
      name: BIZ_NAME,
      telephone: PHONE_E164,
      url: BASE + '/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: LOCALITY,
        addressRegion: REGION,
        addressCountry: COUNTRY,
      },
    },
  };
}

export function locationsItemList(cities: City[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: cities.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Local SEO in ${c.city}, ${REGION_FULL[c.region]}`,
      url: `${BASE}/local-seo/${c.slug}/`,
    })),
  };
}
