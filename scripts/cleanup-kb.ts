import { getPayload } from 'payload'
import config from '../src/payload.config'

async function cleanup() {
  const payload = await getPayload({ config })

  // Categories
  const cats = await payload.find({ collection: 'kb-categories', limit: 100, sort: 'slug' })
  console.log('Categories found:', cats.totalDocs)

  const slugMap = new Map<string, number[]>()
  for (const cat of cats.docs) {
    const slug = cat.slug ?? ''
    const ids = slugMap.get(slug) || []
    ids.push(cat.id)
    slugMap.set(slug, ids)
  }

  let catDel = 0
  for (const [, ids] of slugMap) {
    if (ids.length > 1) {
      for (const id of ids.slice(0, -1)) {
        await payload.delete({ collection: 'kb-categories', id })
        catDel++
      }
    }
  }
  console.log('Deleted duplicate categories:', catDel)

  // Glossary
  const glo = await payload.find({ collection: 'glossary', limit: 200, sort: 'slug' })
  console.log('Glossary found:', glo.totalDocs)

  const termMap = new Map<string, number[]>()
  for (const t of glo.docs) {
    const slug = t.slug ?? ''
    const ids = termMap.get(slug) || []
    ids.push(t.id)
    termMap.set(slug, ids)
  }

  let gloDel = 0
  for (const [, ids] of termMap) {
    if (ids.length > 1) {
      for (const id of ids.slice(0, -1)) {
        await payload.delete({ collection: 'glossary', id })
        gloDel++
      }
    }
  }
  console.log('Deleted duplicate glossary:', gloDel)

  // FAQs
  const faqs = await payload.find({ collection: 'faqs', limit: 200 })
  console.log('FAQs found:', faqs.totalDocs)

  const faqMap = new Map<string, number[]>()
  for (const f of faqs.docs) {
    const ids = faqMap.get(f.question) || []
    ids.push(f.id)
    faqMap.set(f.question, ids)
  }

  let faqDel = 0
  for (const [, ids] of faqMap) {
    if (ids.length > 1) {
      for (const id of ids.slice(0, -1)) {
        await payload.delete({ collection: 'faqs', id })
        faqDel++
      }
    }
  }
  console.log('Deleted duplicate FAQs:', faqDel)

  // Final counts
  const c = await payload.find({ collection: 'kb-categories', limit: 0 })
  const g = await payload.find({ collection: 'glossary', limit: 0 })
  const f = await payload.find({ collection: 'faqs', limit: 0 })
  const a = await payload.find({ collection: 'articles', limit: 0 })
  console.log('\nFinal counts:')
  console.log('  Categories:', c.totalDocs)
  console.log('  Glossary:', g.totalDocs)
  console.log('  FAQs:', f.totalDocs)
  console.log('  Articles:', a.totalDocs)

  process.exit(0)
}

cleanup().catch((e) => {
  console.error(e)
  process.exit(1)
})
