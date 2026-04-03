import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function fix() {
  const payload = await getPayload({ config })

  // Load seed data to get slug -> categorySlug mapping
  const seedPath = path.resolve(__dirname, 'kb-seed-data.json')
  const seed = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))

  // Get current categories and build slug -> id map
  const cats = await payload.find({ collection: 'kb-categories', limit: 100 })
  const catMap = new Map<string, number>()
  for (const cat of cats.docs) {
    catMap.set(cat.slug ?? '', cat.id)
    console.log(`Category: ${cat.slug} -> id ${cat.id}`)
  }

  // Get all articles
  const articles = await payload.find({ collection: 'articles', limit: 100, draft: true })
  console.log(`\nArticles: ${articles.totalDocs}`)

  // Build article slug -> categorySlug from seed data
  const articleCatMap = new Map<string, string>()
  for (const a of seed.articles) {
    articleCatMap.set(a.slug, a.categorySlug)
  }

  // Update each article
  for (const article of articles.docs) {
    const categorySlug = articleCatMap.get(article.slug ?? '')
    if (!categorySlug) {
      console.log(`  Skip: ${article.title} (no mapping)`)
      continue
    }

    const categoryId = catMap.get(categorySlug)
    if (!categoryId) {
      console.log(`  Skip: ${article.title} (category ${categorySlug} not found)`)
      continue
    }

    const currentCat = article.category
    if (currentCat === categoryId) {
      console.log(`  OK: ${article.title} (already ${categoryId})`)
      continue
    }

    await payload.update({
      collection: 'articles',
      id: article.id,
      data: { category: categoryId },
      context: { skipSummaryGeneration: true },
    })
    console.log(`  Fixed: ${article.title} -> category ${categorySlug} (id ${categoryId})`)
  }

  // Also fix FAQ categories
  const faqs = await payload.find({ collection: 'faqs', limit: 200 })
  console.log(`\nFAQs: ${faqs.totalDocs}`)

  const faqCatMap = new Map<string, string>()
  for (const f of seed.faqs) {
    faqCatMap.set(f.question, f.categorySlug)
  }

  for (const faq of faqs.docs) {
    const categorySlug = faqCatMap.get(faq.question)
    if (!categorySlug) continue

    const categoryId = catMap.get(categorySlug)
    if (!categoryId) continue

    const currentCat = typeof faq.category === 'object' ? faq.category?.id : faq.category
    if (currentCat === categoryId) {
      console.log(`  OK: ${faq.question.slice(0, 50)}`)
      continue
    }

    await payload.update({
      collection: 'faqs',
      id: faq.id,
      data: { category: categoryId },
    })
    console.log(`  Fixed: ${faq.question.slice(0, 50)} -> ${categorySlug}`)
  }

  console.log('\nDone!')
  process.exit(0)
}

fix().catch((e) => {
  console.error(e)
  process.exit(1)
})
