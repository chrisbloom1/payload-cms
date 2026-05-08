import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CUSTOMER_STORIES, type CustomerStory } from './customer-stories'

/**
 * Unified shape used by both the /customer-stories index and the
 * /customer-stories/[slug] detail route, regardless of source. Lets
 * the routes treat Payload-backed stories and the legacy lib fallback
 * identically.
 *
 * The lib fallback still ships in the bundle so a Neon outage doesn't
 * blank the page during transitions. Once Payload has been the source
 * of truth in prod for a release cycle, src/lib/customer-stories.ts
 * (and CARD_META in the seed) can be deleted.
 */

export type CardTheme =
  | 'navy'
  | 'navyDeep'
  | 'teal'
  | 'mint'
  | 'cream'
  | 'lavender'
  | 'amber'

export type CardAlign = 'left' | 'right'

export interface ResolvedStoryCard {
  slug: string
  title: string
  hero: string
  logo: string
  logoDark?: string
  logoAlt: string
  logoType: 'monochrome' | 'color'
  logoMonoColor?: 'white' | 'black'
  cardTheme: CardTheme
  cardAlign: CardAlign
}

export interface ResolvedStoryQuote {
  text: string
  author: string
  role: string
}

export interface ResolvedStoryBenefit {
  title: string
  description: string
}

export interface ResolvedStoryDetail extends ResolvedStoryCard {
  topBenefits: string[]
  nodes: string[]
  // Lexical (richText) when sourced from Payload; null when sourced from
  // lib (in which case `legacyIntro`/`legacyBody`/etc. are used instead).
  intro: Record<string, unknown> | null
  body: Record<string, unknown> | null
  outro: Record<string, unknown> | null
  closing: Record<string, unknown> | null
  legacyIntro: readonly string[] | null
  legacyBody: readonly string[] | null
  legacyOutro: string | null
  legacyClosing: string | null
  quote: ResolvedStoryQuote
  benefits: ResolvedStoryBenefit[]
}

// ---------- Index page card metadata fallback ----------

const LIB_CARD_META: Record<string, { theme: CardTheme; align: CardAlign }> = {
  'infinite-machine': { theme: 'cream', align: 'left' },
  grounded: { theme: 'navyDeep', align: 'right' },
  birdstop: { theme: 'navyDeep', align: 'left' },
  'wheel-me': { theme: 'teal', align: 'right' },
  maeving: { theme: 'amber', align: 'left' },
  'electric-outdoors': { theme: 'navyDeep', align: 'right' },
  moonbikes: { theme: 'amber', align: 'left' },
  'dust-moto': { theme: 'mint', align: 'right' },
  cake: { theme: 'navy', align: 'left' },
  tokyobike: { theme: 'lavender', align: 'right' },
}

// ---------- Helpers ----------

function pickMediaUrl(field: unknown): string | null {
  if (field && typeof field === 'object' && field !== null) {
    const url = (field as Record<string, unknown>).url
    if (typeof url === 'string' && url) return url
  }
  return null
}

function isLexical(v: unknown): v is Record<string, unknown> {
  return Boolean(v && typeof v === 'object' && (v as Record<string, unknown>).root)
}

function asString(v: unknown): string {
  return typeof v === 'string' ? v : ''
}

function fromLibCard(story: CustomerStory): ResolvedStoryCard {
  const meta = LIB_CARD_META[story.slug] ?? { theme: 'cream' as const, align: 'left' as const }
  return {
    slug: story.slug,
    title: story.title,
    hero: story.hero,
    logo: story.logo,
    logoAlt: story.logoAlt,
    logoType: 'monochrome',
    logoMonoColor:
      story.logoMonoColor === 'white' || story.logoMonoColor === 'black'
        ? story.logoMonoColor
        : undefined,
    cardTheme: meta.theme,
    cardAlign: meta.align,
  }
}

function fromLibDetail(story: CustomerStory): ResolvedStoryDetail {
  return {
    ...fromLibCard(story),
    topBenefits: [...story.topBenefits],
    nodes: [...story.nodes],
    intro: null,
    body: null,
    outro: null,
    closing: null,
    legacyIntro: story.intro,
    legacyBody: story.body,
    legacyOutro: story.outro ?? null,
    legacyClosing: story.closing ?? null,
    quote: { text: story.quote.text, author: story.quote.author, role: story.quote.role },
    benefits: story.benefits.map((b) => ({ title: b.title, description: b.description })),
  }
}

function payloadDocToCard(d: Record<string, unknown>): ResolvedStoryCard | null {
  const slug = asString(d.slug)
  const title = asString(d.title)
  if (!slug || !title) return null

  const hero = pickMediaUrl(d.heroImage) ?? asString(d.heroUrl) ?? ''
  const logo = pickMediaUrl(d.logoImage) ?? asString(d.logoUrl) ?? ''
  const logoDark = pickMediaUrl(d.logoDarkImage) ?? asString(d.logoDarkUrl)

  const cardTheme = (asString(d.cardTheme) || 'cream') as CardTheme
  const cardAlign = (asString(d.cardAlign) || 'left') as CardAlign
  const logoType = (asString(d.logoType) || 'monochrome') as 'monochrome' | 'color'
  const logoMonoStr = asString(d.logoMonoColor)
  const logoMonoColor =
    logoMonoStr === 'white' || logoMonoStr === 'black' ? logoMonoStr : undefined

  return {
    slug,
    title,
    hero: hero || '/images/stories/placeholder.jpg',
    logo,
    logoDark: logoDark || undefined,
    logoAlt: asString(d.logoAlt) || title,
    logoType,
    logoMonoColor,
    cardTheme,
    cardAlign,
  }
}

function payloadDocToDetail(d: Record<string, unknown>): ResolvedStoryDetail | null {
  const card = payloadDocToCard(d)
  if (!card) return null

  const topBenefitsArr = Array.isArray(d.topBenefits)
    ? (d.topBenefits as Array<Record<string, unknown>>)
        .map((it) => asString(it?.benefit))
        .filter(Boolean)
    : []
  const nodesArr = Array.isArray(d.nodes)
    ? (d.nodes as Array<Record<string, unknown>>)
        .map((it) => asString(it?.value))
        .filter(Boolean)
    : []
  const benefitsArr = Array.isArray(d.benefits)
    ? (d.benefits as Array<Record<string, unknown>>).map((b) => ({
        title: asString(b?.title),
        description: asString(b?.description),
      }))
    : []
  const quoteRaw = (d.quote as Record<string, unknown>) ?? {}

  return {
    ...card,
    topBenefits: topBenefitsArr,
    nodes: nodesArr,
    intro: isLexical(d.intro) ? d.intro : null,
    body: isLexical(d.body) ? d.body : null,
    outro: isLexical(d.outro) ? d.outro : null,
    closing: isLexical(d.closing) ? d.closing : null,
    legacyIntro: null,
    legacyBody: null,
    legacyOutro: null,
    legacyClosing: null,
    quote: {
      text: asString(quoteRaw.text),
      author: asString(quoteRaw.author),
      role: asString(quoteRaw.role),
    },
    benefits: benefitsArr,
  }
}

// ---------- Public API ----------

export async function loadStoryCards(): Promise<ResolvedStoryCard[]> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      // 'customer-stories' isn't in payload-types.ts yet (added by
      // `payload generate:types` after the migration runs). Cast to
      // satisfy the typed collection slug; the runtime value is correct.
      collection: 'customer-stories' as never,
      sort: 'sortOrder',
      limit: 100,
      where: { _status: { equals: 'published' } },
    })

    if (result.docs.length === 0) return CUSTOMER_STORIES.map(fromLibCard)

    return result.docs
      .map((doc) => payloadDocToCard(doc as unknown as Record<string, unknown>))
      .filter((c): c is ResolvedStoryCard => c !== null)
  } catch (err) {
    console.warn('[customer-stories] index Payload query failed, falling back to lib:', err)
    return CUSTOMER_STORIES.map(fromLibCard)
  }
}

export async function loadStoryDetail(slug: string): Promise<ResolvedStoryDetail | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      // 'customer-stories' isn't in payload-types.ts yet (added by
      // `payload generate:types` after the migration runs). Cast to
      // satisfy the typed collection slug; the runtime value is correct.
      collection: 'customer-stories' as never,
      where: { slug: { equals: slug }, _status: { equals: 'published' } },
      limit: 1,
    })
    const doc = result.docs[0]
    if (doc) {
      const detail = payloadDocToDetail(doc as unknown as Record<string, unknown>)
      if (detail) return detail
    }
  } catch (err) {
    console.warn(`[customer-stories/${slug}] Payload query failed:`, err)
  }

  const lib = CUSTOMER_STORIES.find((s) => s.slug === slug)
  return lib ? fromLibDetail(lib) : null
}

export async function loadAllSlugs(): Promise<string[]> {
  let payloadSlugs: string[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      // 'customer-stories' isn't in payload-types.ts yet (added by
      // `payload generate:types` after the migration runs). Cast to
      // satisfy the typed collection slug; the runtime value is correct.
      collection: 'customer-stories' as never,
      limit: 1000,
      where: { _status: { equals: 'published' } },
    })
    payloadSlugs = result.docs
      .map((d) => {
        const slug = (d as unknown as { slug?: unknown }).slug
        return typeof slug === 'string' ? slug : null
      })
      .filter((s): s is string => Boolean(s))
  } catch (err) {
    console.warn('[customer-stories] generateStaticParams Payload failed:', err)
  }
  return Array.from(
    new Set([...payloadSlugs, ...CUSTOMER_STORIES.map((s) => s.slug)]),
  )
}
