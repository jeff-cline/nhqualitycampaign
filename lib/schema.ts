import { SITE_NAME, SITE_URL } from './utils'

type Page = {
  path: string
  title: string
  metaDesc?: string | null
  quickAnswer?: string | null
  pageType: string
  publishedAt?: Date | null
  updatedAt?: Date
  author?: { name?: string | null } | null
  faq?: { question: string; answer: string }[]
  ogImage?: string | null
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Independent healthcare resource providing evidence-based guides on Medicare, nursing home quality, and senior care.',
    sameAs: [],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

export function articleSchema(p: Page) {
  const isMedical = /medicare|health|nursing|care/i.test(p.path)
  return {
    '@context': 'https://schema.org',
    '@type': isMedical ? 'MedicalWebPage' : 'Article',
    headline: p.title,
    description: p.metaDesc ?? p.quickAnswer ?? '',
    url: `${SITE_URL}${p.path}`,
    datePublished: p.publishedAt?.toISOString(),
    dateModified: (p.updatedAt ?? p.publishedAt)?.toISOString(),
    author: { '@type': 'Organization', name: p.author?.name ?? 'NHQC Editorial Team' },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    ...(isMedical && { audience: { '@type': 'PeopleAudience', audienceType: 'Patient' } }),
    ...(p.ogImage && { image: p.ogImage }),
  }
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

export function comparisonSchema(p: Page, items: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: p.title,
    itemListElement: items.map((n, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: n,
    })),
  }
}

export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}
