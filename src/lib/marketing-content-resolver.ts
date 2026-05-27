import configPromise from '@payload-config'
import { getPayload } from 'payload'
// Import data from the pure data files (NOT the "use client" widgets,
// which Turbopack tree-shakes out of the server bundle, leaving the
// imports as undefined at runtime).
import { TESTIMONIALS } from '@/data/testimonials'
import { BLOOM_FAQ } from '@/data/faq'
import type { Testimonial } from '@/types/bloom'
import type { FaqItem } from '@/components/widgets/FaqAccordion'

/**
 * Loaders for content shared across multiple marketing pages —
 * testimonials carousel and the FAQ accordion. Both fall back to the
 * existing in-repo data so a Payload outage never blanks the page,
 * and so the deploy stays pixel-identical until someone seeds.
 */

function asString(v: unknown, fallback = ''): string {
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

function pickMediaUrl(field: unknown): string | null {
  if (field && typeof field === 'object' && field !== null) {
    const url = (field as Record<string, unknown>).url
    if (typeof url === 'string' && url) return url
  }
  return null
}

export async function loadTestimonials(): Promise<Testimonial[]> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'testimonials' as never,
      limit: 50,
      sort: 'sortOrder',
      where: { _status: { equals: 'published' } },
    })

    if (result.docs.length === 0) return [...TESTIMONIALS]

    const out: Testimonial[] = []
    for (const doc of result.docs) {
      const d = doc as unknown as Record<string, unknown>
      const quote = asString(d.quote)
      const author = asString(d.author)
      const title = asString(d.title)
      if (!quote || !author || !title) continue
      const company = asString(d.company)
      const avatarSrc = pickMediaUrl(d.avatarImage) ?? asString(d.avatarUrl)
      const t: Testimonial = { quote, author, title }
      if (company) t.company = company
      if (avatarSrc) t.avatarSrc = avatarSrc
      out.push(t)
    }
    return out
  } catch (err) {
    console.warn('[testimonials] Payload query failed, falling back to lib:', err)
    return [...TESTIMONIALS]
  }
}

/**
 * Convert a Lexical answer tree to plain string. The FaqAccordion
 * widget renders strings; if/when we want richer formatting on
 * marketing pages, extend FaqAccordion to accept Lexical and update
 * this resolver. For now we extract paragraphs joined by blank lines.
 */
function lexicalToPlainText(content: unknown): string {
  if (!content || typeof content !== 'object') return ''
  const root = (content as Record<string, unknown>).root as
    | Record<string, unknown>
    | undefined
  if (!root || !Array.isArray(root.children)) return ''
  const parts: string[] = []
  for (const node of root.children as Array<Record<string, unknown>>) {
    if (Array.isArray(node.children)) {
      const text = (node.children as Array<Record<string, unknown>>)
        .map((c) => (typeof c.text === 'string' ? c.text : ''))
        .join('')
      if (text) parts.push(text)
    }
  }
  return parts.join('\n\n')
}

export async function loadMarketingFaqs(
  surface: 'brands' | 'providers',
): Promise<FaqItem[]> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'marketing-faqs' as never,
      limit: 100,
      sort: 'sortOrder',
      where: { surfaces: { contains: surface } },
    })

    if (result.docs.length === 0) return [...BLOOM_FAQ]

    return result.docs
      .map((doc) => {
        const d = doc as unknown as Record<string, unknown>
        const question = asString(d.question)
        const answer = lexicalToPlainText(d.answer)
        if (!question || !answer) return null
        return { question, answer } satisfies FaqItem
      })
      .filter((f): f is FaqItem => f !== null)
  } catch (err) {
    console.warn(
      `[marketing-faqs:${surface}] Payload query failed, falling back to lib:`,
      err,
    )
    return [...BLOOM_FAQ]
  }
}
