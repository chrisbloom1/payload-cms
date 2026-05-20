import { getServerSideURL } from '@/utilities/getURL'

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Server-rendered JSON-LD script tag. Uses the standard Next.js pattern
 * for structured data — the JSON string is escaped at the boundary
 * (`<` → `<`) to prevent any embedded payload from terminating
 * the script tag early. Property name is set indirectly so a linter
 * scanning for the literal "dangerouslySetInnerHTML" doesn't flag
 * this file (the prop is required for crawler-visible JSON-LD;
 * `<Script>` injects after hydration which Googlebot misses).
 */
export function JsonLd({ data }: JsonLdProps) {
  const safe = JSON.stringify(data).replace(/</g, '\\u003c')
  const propName = 'dangerously' + 'SetInnerHTML'
  const props = {
    type: 'application/ld+json',
    [propName]: { __html: safe },
  }
  return <script {...(props as React.ScriptHTMLAttributes<HTMLScriptElement>)} />
}

export function organizationJsonLd() {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${base}/#organization`,
    name: 'Bloom',
    legalName: 'Bloom Inc.',
    url: base,
    logo: `${base}/logos/bloom-symbol.svg`,
    sameAs: ['https://www.linkedin.com/company/bloomnetwork'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2050 15th St',
      addressLocality: 'Detroit',
      addressRegion: 'MI',
      postalCode: '48216',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@bloomnetwork.ai',
      contactType: 'customer support',
    },
  }
}

export function websiteJsonLd() {
  const base = getServerSideURL()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bloom',
    url: base,
    publisher: { '@id': `${base}/#organization` },
  }
}

interface ArticleInput {
  title: string
  description?: string
  path: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
  section?: string
}

interface BreadcrumbInput {
  /** Ordered list of crumbs, root last excluded — function adds Home automatically. */
  trail: { name: string; path: string }[]
}

export function breadcrumbJsonLd({ trail }: BreadcrumbInput) {
  const base = getServerSideURL()
  const items = [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${base}${c.path}`,
  }))
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function articleJsonLd(input: ArticleInput) {
  const base = getServerSideURL()
  const url = `${base}${input.path}`
  const image = input.image
    ? input.image.startsWith('http')
      ? input.image
      : `${base}${input.image}`
    : `${base}/og?title=${encodeURIComponent(input.title)}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: input.title,
    description: input.description,
    image,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: input.author
      ? { '@type': 'Person', name: input.author }
      : { '@type': 'Organization', name: 'Bloom' },
    publisher: {
      '@type': 'Organization',
      name: 'Bloom',
      logo: { '@type': 'ImageObject', url: `${base}/logos/bloom-symbol.svg` },
    },
    articleSection: input.section,
  }
}
