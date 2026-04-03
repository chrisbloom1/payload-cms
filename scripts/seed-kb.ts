import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface SeedCategory {
  name: string
  slug: string
  description: string
  sortOrder: number
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

interface SeedFAQ {
  question: string
  answer: string
  categorySlug: string
}

interface SeedGlossaryTerm {
  term: string
  slug: string
  definition: string
}

interface SeedData {
  categories: SeedCategory[]
  articles: SeedArticle[]
  faqs: SeedFAQ[]
  glossary: SeedGlossaryTerm[]
}

function textToLexical(text: string) {
  const paragraphs = text.split('\n\n').filter(Boolean)

  return {
    root: {
      type: 'root',
      children: paragraphs.map((p) => ({
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: p.replace(/\n/g, ' '),
            version: 1,
          },
        ],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        textFormat: 0,
        version: 1,
      })),
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

async function main() {
  const seedPath = path.resolve(__dirname, 'kb-seed-data.json')
  const seed: SeedData = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))

  const payload = await getPayload({ config })

  // 1. Categories
  const categoryMap: Record<string, number> = {}

  for (const cat of seed.categories) {
    try {
      const doc = await payload.create({
        collection: 'kb-categories',
        data: {
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          sortOrder: cat.sortOrder,
        },
      })
      categoryMap[cat.slug] = doc.id
      console.log(`✓ Category: ${cat.name} (id: ${doc.id})`)
    } catch (err: any) {
      console.error(`✗ Category ${cat.name}:`, err.message)
    }
  }

  // 2. Glossary
  for (const term of seed.glossary) {
    try {
      await payload.create({
        collection: 'glossary',
        data: {
          term: term.term,
          slug: term.slug,
          definition: textToLexical(term.definition),
        },
      })
      console.log(`✓ Glossary: ${term.term}`)
    } catch (err: any) {
      console.error(`✗ Glossary ${term.term}:`, err.message)
    }
  }

  // 3. FAQs
  for (const faq of seed.faqs) {
    try {
      const categoryId = categoryMap[faq.categorySlug]
      await payload.create({
        collection: 'faqs',
        data: {
          question: faq.question,
          answer: textToLexical(faq.answer),
          category: categoryId || undefined,
        },
      })
      console.log(`✓ FAQ: ${faq.question.slice(0, 60)}...`)
    } catch (err: any) {
      console.error(`✗ FAQ ${faq.question.slice(0, 40)}:`, err.message)
    }
  }

  // 4. Articles
  for (const article of seed.articles) {
    try {
      const categoryId = categoryMap[article.categorySlug]
      if (!categoryId) {
        console.error(`✗ Article ${article.title}: no category found for ${article.categorySlug}`)
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
          _status: 'published',
        },
        context: { skipSummaryGeneration: true },
      })
      console.log(`✓ Article: ${article.title}`)
    } catch (err: any) {
      console.error(`✗ Article ${article.title}:`, err.message)
    }
  }

  console.log('\nDone!')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
