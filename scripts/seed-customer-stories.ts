/**
 * One-time migration: copy CUSTOMER_STORIES (src/lib/customer-stories.ts)
 * into the Payload `customer-stories` collection so the team can edit
 * stories in the admin instead of via PRs.
 *
 * Combines two existing data sources:
 *   - src/lib/customer-stories.ts                  — detail content
 *     (intro/body/quote/benefits/etc.)
 *   - src/app/(frontend)/customer-stories/page.tsx — index card
 *     metadata (cardTheme, cardAlign, logoDark, logoType)
 *
 * Idempotent: re-running upserts by slug.
 *
 * Run with:  pnpm seed:customer-stories
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import {
  CUSTOMER_STORIES,
  type CustomerStory,
} from '../src/lib/customer-stories'

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

function paragraphsToLexical(paragraphs: readonly string[]) {
  return {
    root: {
      type: 'root',
      children: paragraphs.map(paragraph),
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

function singleParagraphLexical(text: string | undefined) {
  if (!text) return undefined
  return paragraphsToLexical([text])
}

/**
 * Card-page presentation metadata, mirrored from the STORIES const in
 * src/app/(frontend)/customer-stories/page.tsx so the index page keeps
 * its current visual layout when wired to Payload.
 */
type CardMeta = {
  cardTheme:
    | 'navy'
    | 'navyDeep'
    | 'teal'
    | 'mint'
    | 'cream'
    | 'lavender'
    | 'amber'
  cardAlign: 'left' | 'right'
  logoType: 'monochrome' | 'color'
  logoDarkUrl?: string
}

const CARD_META: Record<string, CardMeta> = {
  'infinite-machine': { cardTheme: 'cream', cardAlign: 'left', logoType: 'monochrome' },
  grounded: { cardTheme: 'navyDeep', cardAlign: 'right', logoType: 'monochrome' },
  birdstop: { cardTheme: 'navyDeep', cardAlign: 'left', logoType: 'monochrome' },
  'wheel-me': { cardTheme: 'teal', cardAlign: 'right', logoType: 'monochrome' },
  maeving: { cardTheme: 'amber', cardAlign: 'left', logoType: 'monochrome' },
  'electric-outdoors': { cardTheme: 'navyDeep', cardAlign: 'right', logoType: 'monochrome' },
  moonbikes: { cardTheme: 'amber', cardAlign: 'left', logoType: 'monochrome' },
  'dust-moto': { cardTheme: 'mint', cardAlign: 'right', logoType: 'monochrome' },
  cake: { cardTheme: 'navy', cardAlign: 'left', logoType: 'monochrome' },
  tokyobike: { cardTheme: 'lavender', cardAlign: 'right', logoType: 'monochrome' },
}

function buildPayload(story: CustomerStory, index: number) {
  const card = CARD_META[story.slug] ?? {
    cardTheme: 'cream',
    cardAlign: 'left' as const,
    logoType: 'monochrome' as const,
  }

  return {
    title: story.title,
    slug: story.slug,
    cardTheme: card.cardTheme,
    cardAlign: card.cardAlign,
    sortOrder: index,
    heroUrl: story.hero,
    logoUrl: story.logo,
    logoDarkUrl: card.logoDarkUrl,
    logoAlt: story.logoAlt,
    logoType: card.logoType,
    logoMonoColor:
      story.logoMonoColor === 'white' || story.logoMonoColor === 'black'
        ? story.logoMonoColor
        : 'black',
    topBenefits: story.topBenefits.map((benefit) => ({ benefit })),
    nodes: story.nodes.map((value) => ({ value })),
    intro: paragraphsToLexical(story.intro),
    body: paragraphsToLexical(story.body),
    quote: {
      text: story.quote.text,
      author: story.quote.author,
      role: story.quote.role,
    },
    outro: singleParagraphLexical(story.outro),
    benefits: story.benefits.map((b) => ({ title: b.title, description: b.description })),
    closing: singleParagraphLexical(story.closing),
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  }
}

async function main() {
  const payload = await getPayload({ config })

  let i = 0
  for (const story of CUSTOMER_STORIES) {
    const data = buildPayload(story, i++)
    try {
      const existing = await payload.find({
        collection: 'customer-stories',
        where: { slug: { equals: story.slug } },
        limit: 1,
        overrideAccess: true,
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'customer-stories',
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`↻ Updated: ${story.slug}`)
      } else {
        await payload.create({
          collection: 'customer-stories',
          data: data as any,
          overrideAccess: true,
        })
        console.log(`✓ Created: ${story.slug}`)
      }
    } catch (err: any) {
      console.error(`✗ ${story.slug}:`, err.message ?? err)
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
