// ---------------------------------------------------------------------------
// HigherMindAI - JSON-LD builders (answer-layer / rich-result signals)
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
    priceRange: '$$$',
    description:
      'Demand engineering welded to an AI front desk. I engineer the people already searching to find you, then answer, qualify and book every enquiry that arrives, day or night. First page of the Map Pack in 60 days, or you stop paying until you are there.',
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
    // No price fields, deliberately. The rate card lives on the page, not in the
    // markup. Offers are ordered highest-value first, everywhere on this site.
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'The Catchment - Total',
        description:
          'Organic and paid demand engineering welded to Cortex, the AI front desk. Every route in is covered, and every enquiry that takes one of them is answered, qualified and booked. Includes the Catchment Report on the first of every month.',
      },
      {
        '@type': 'Offer',
        name: 'The Catchment - Paid',
        description:
          'Google and Meta funnels built on the language your real buyers use, conversion pages, and Cortex catching every enquiry they send.',
      },
      {
        '@type': 'Offer',
        name: 'The Catchment - Organic',
        description:
          'Your Google Business Profile engineered into the top 3 of the Map Pack and held there, every winnable town built as its own ranked unit, and Cortex catching what it brings in.',
      },
      {
        '@type': 'Offer',
        name: 'Cortex - AI front desk',
        description:
          'An AI front desk trained on your practice. Answers from your knowledge, asks your qualifying questions, screens out timewasters and books the rest straight into your calendar. Every web enquiry answered in under 60 seconds, day or night.',
      },
    ],
  };
}

export function personSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Derek',
    jobTitle: 'Demand Engineer & AI Systems Operator',
    image: `${BASE}/derek.webp`,
    url: BASE + '/',
    telephone: PHONE_E164,
    email: EMAIL,
    worksFor: { '@type': 'ProfessionalService', name: BIZ_NAME, url: BASE + '/' },
    homeLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: LOCALITY, addressRegion: REGION, addressCountry: COUNTRY },
    },
    knowsAbout: [
      'Local SEO',
      'Google Business Profile ranking',
      'Google Map Pack',
      'AI receptionist',
      'AI front desk',
      'Conversational AI',
      'Paid search and social advertising',
      'Marketing automation',
    ],
    description:
      'Sole operator of HigherMindAI. Engineers local demand and welds it to an AI front desk that answers, qualifies and books every enquiry. Based in Erin, Ontario; works with practices across Canada, the US and the UK.',
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
