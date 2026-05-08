/**
 * One-time seed: copy the existing TESTIMONIALS and BLOOM_FAQ data
 * into the testimonials and marketing-faqs Payload collections.
 *
 * Idempotent: testimonials are upserted by author+quote prefix;
 * marketing-faqs are upserted by question.
 *
 * Run with:  pnpm seed:testimonials-and-faqs
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { TESTIMONIALS } from '../src/components/widgets/TestimonialCarousel'
import { BLOOM_FAQ } from '../src/data/faq'

type LexicalNode = Record<string, unknown>

function textNode(text: string): LexicalNode {
  return {
    type: 'text',
    detail: 0,
    format: 0,
    mode: 'normal',
    style: '',
    text,
    version: 1,
  }
}

function paragraph(text: string): LexicalNode {
  return {
    type: 'paragraph',
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    version: 1,
  }
}

function answerToLexical(answer: string) {
  const paras = answer.split(/\n\n/).filter(Boolean)
  return {
    root: {
      type: 'root',
      children: paras.length > 0 ? paras.map(paragraph) : [paragraph(answer)],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

async function main() {
  const payload = await getPayload({ config })

  // Testimonials ----------------------------------------------------
  let i = 0
  for (const t of TESTIMONIALS) {
    const data = {
      quote: t.quote,
      author: t.author,
      title: t.title,
      company: t.company,
      avatarUrl: t.avatarSrc,
      sortOrder: i++,
      _status: 'published' as const,
    }
    try {
      const existing = await payload.find({
        collection: 'testimonials' as never,
        where: { author: { equals: t.author } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'testimonials' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`↻ Testimonial: ${t.author}`)
      } else {
        await payload.create({
          collection: 'testimonials' as never,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`✓ Testimonial: ${t.author}`)
      }
    } catch (err: any) {
      console.error(`✗ Testimonial ${t.author}:`, err.message ?? err)
    }
  }

  // Marketing FAQs --------------------------------------------------
  let j = 0
  for (const faq of BLOOM_FAQ) {
    const data = {
      question: faq.question,
      answer: answerToLexical(faq.answer),
      surfaces: ['brands', 'providers'],
      sortOrder: j++,
    }
    try {
      const existing = await payload.find({
        collection: 'marketing-faqs' as never,
        where: { question: { equals: faq.question } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'marketing-faqs' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`↻ FAQ: ${faq.question.slice(0, 60)}...`)
      } else {
        await payload.create({
          collection: 'marketing-faqs' as never,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`✓ FAQ: ${faq.question.slice(0, 60)}...`)
      }
    } catch (err: any) {
      console.error(`✗ FAQ ${faq.question.slice(0, 40)}:`, err.message ?? err)
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
