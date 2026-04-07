/**
 * Seed shipping-related KB articles
 *
 * Usage: npx tsx scripts/seed-shipping-articles.ts
 *
 * - Updates 2 existing articles (freight-shipping, final-mile-delivery)
 * - Creates 3 new articles (battery-shipment-guidelines, international-shipping-documents, customs-brokerage-services)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Load .env manually (no dotenv dependency)
const envPath = path.resolve(__dirname, '..', '.env')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match && !process.env[match[1].trim()]) {
      process.env[match[1].trim()] = match[2].trim()
    }
  }
}

// Skip Drizzle dev schema push (avoids feature_requests enum mismatch)
process.env.PAYLOAD_MIGRATING = 'true'

interface SeedUpdate {
  slug: string
  body: string
  summary: string
}

interface SeedArticle {
  title: string
  slug: string
  categorySlug: string
  audience: 'brand' | 'provider' | 'both'
  tags: string[]
  body: string
  summary: string
}

interface SeedData {
  updates: SeedUpdate[]
  articles: SeedArticle[]
}

type LexicalNode = {
  type: 'text'
  detail: number
  format: number
  mode: string
  style: string
  text: string
  version: number
}

interface LexicalBlock {
  type: string
  children: LexicalNode[] | LexicalBlock[]
  direction: 'ltr'
  format: ''
  indent: number
  version: number
  tag?: string
  textFormat?: number
  listType?: string
  start?: number
  value?: number
}

function textToLexical(text: string) {
  const lines = text.split('\n')
  const children: LexicalBlock[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Skip empty lines
    if (line.trim() === '') {
      i++
      continue
    }

    // Heading (## or ###)
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const tag = `h${level}`
      children.push({
        type: 'heading',
        tag,
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: headingMatch[2],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      })
      i++
      continue
    }

    // Bullet list: collect consecutive lines starting with "- "
    if (line.match(/^- /)) {
      const listItems: LexicalBlock[] = []
      let itemIndex = 1
      while (i < lines.length && lines[i].match(/^- /)) {
        listItems.push({
          type: 'listitem',
          value: itemIndex++,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: lines[i].replace(/^- /, ''),
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        })
        i++
      }
      children.push({
        type: 'list',
        listType: 'bullet',
        start: 1,
        tag: 'ul',
        children: listItems,
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      })
      continue
    }

    // Regular paragraph — collect lines until empty line or special line
    const paragraphLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^#{2,4}\s/) &&
      !lines[i].match(/^- /)
    ) {
      paragraphLines.push(lines[i])
      i++
    }

    if (paragraphLines.length > 0) {
      children.push({
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: paragraphLines.join(' '),
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        version: 1,
      })
    }
  }

  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

async function main() {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../src/payload.config')

  const seedPath = path.resolve(__dirname, 'shipping-seed-data.json')
  const seed: SeedData = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))

  const payload = await getPayload({ config })

  // Look up category IDs
  const categories = await payload.find({
    collection: 'kb-categories',
    where: {
      slug: { in: ['shipping-logistics', 'deliver'] },
    },
    limit: 10,
  })

  const categoryMap: Record<string, number> = {}
  for (const cat of categories.docs) {
    categoryMap[cat.slug] = cat.id
  }
  console.log('Categories found:', Object.keys(categoryMap).join(', '))

  // 1. Update existing articles
  for (const update of seed.updates) {
    try {
      console.log(`  looking up: ${update.slug}...`)
      const existing = await payload.find({
        collection: 'articles',
        where: { slug: { equals: update.slug } },
        limit: 1,
        depth: 0,
        select: { slug: true, title: true },
      })

      if (existing.docs.length === 0) {
        console.error(`  SKIP update: ${update.slug} — not found`)
        continue
      }

      const article = existing.docs[0]
      console.log(`  found: ${article.title} (id: ${article.id}), updating...`)
      await payload.update({
        collection: 'articles',
        id: article.id,
        data: {
          body: textToLexical(update.body) as any,
          summary: update.summary,
        },
        context: { skipSummaryGeneration: true },
      })
      console.log(`  updated: ${article.title} (${update.slug})`)
    } catch (err: any) {
      console.error(`  FAILED update ${update.slug}:`, err.message)
    }
  }

  // 2. Create new articles
  for (const article of seed.articles) {
    try {
      const categoryId = categoryMap[article.categorySlug]
      if (!categoryId) {
        console.error(`  SKIP: ${article.title} — category "${article.categorySlug}" not found`)
        continue
      }

      // Check if article already exists
      console.log(`  checking: ${article.slug}...`)
      const existing = await payload.find({
        collection: 'articles',
        where: { slug: { equals: article.slug } },
        limit: 1,
        depth: 0,
        select: { slug: true, title: true },
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'articles',
          id: existing.docs[0].id,
          data: {
            body: textToLexical(article.body) as any,
            summary: article.summary,
            category: categoryId,
            audience: article.audience,
            tags: article.tags.map((tag: string) => ({ tag })),
            _status: 'published',
          },
          context: { skipSummaryGeneration: true },
        })
        console.log(`  updated existing: ${article.title} (${article.slug})`)
        continue
      }

      await payload.create({
        collection: 'articles',
        draft: false,
        data: {
          title: article.title,
          slug: article.slug,
          body: textToLexical(article.body) as any,
          category: categoryId,
          audience: article.audience,
          tags: article.tags.map((tag: string) => ({ tag })),
          summary: article.summary,
          _status: 'published',
        },
        context: { skipSummaryGeneration: true },
      })
      console.log(`  created: ${article.title} (${article.slug})`)
    } catch (err: any) {
      console.error(`  FAILED ${article.title}:`, err.message)
    }
  }

  console.log('\nDone!')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
