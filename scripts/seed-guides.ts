/**
 * Seed guides from kb-seed-data.json
 *
 * Usage: npx tsx scripts/seed-guides.ts
 *
 * Requires PAYLOAD_URL, PAYLOAD_ADMIN_EMAIL, PAYLOAD_ADMIN_PASSWORD in .env
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

interface SeedGuide {
  title: string
  slug: string
  description?: string
  loomUrl: string
  loomEmbedId: string
  audience?: 'brand' | 'provider' | 'ops' | 'both'
  categorySlug?: string
  sortOrder?: number
}

const PAYLOAD_URL = process.env.PAYLOAD_URL || 'http://localhost:3000'
const EMAIL = process.env.PAYLOAD_ADMIN_EMAIL
const PASSWORD = process.env.PAYLOAD_ADMIN_PASSWORD

if (!EMAIL || !PASSWORD) {
  console.error('Missing PAYLOAD_ADMIN_EMAIL or PAYLOAD_ADMIN_PASSWORD in .env')
  process.exit(1)
}

async function login(): Promise<string> {
  const res = await fetch(`${PAYLOAD_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })

  if (!res.ok) {
    throw new Error(`Login failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return data.token
}

async function getCategoryId(token: string, slug: string): Promise<number | null> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/kb-categories?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } },
  )

  if (!res.ok) return null
  const data = await res.json()
  return data.docs?.[0]?.id || null
}

async function guideExists(token: string, slug: string): Promise<boolean> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/guides?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } },
  )

  if (!res.ok) return false
  const data = await res.json()
  return (data.docs?.length || 0) > 0
}

async function main() {
  const seedPath = path.resolve(__dirname, 'kb-seed-data.json')
  const seed = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))
  const guides: SeedGuide[] = seed.guides || []

  if (guides.length === 0) {
    console.log('No guides found in kb-seed-data.json. Add a "guides" array to the file.')
    process.exit(0)
  }

  console.log(`Found ${guides.length} guides to seed.`)

  const token = await login()
  console.log('Authenticated.\n')

  let created = 0
  let skipped = 0

  for (const guide of guides) {
    // Skip if already exists
    if (await guideExists(token, guide.slug)) {
      console.log(`  skip: ${guide.title} (already exists)`)
      skipped++
      continue
    }

    // Look up category
    let categoryId: number | null = null
    if (guide.categorySlug) {
      categoryId = await getCategoryId(token, guide.categorySlug)
    }

    const body: Record<string, unknown> = {
      title: guide.title,
      slug: guide.slug,
      description: guide.description || '',
      loomUrl: guide.loomUrl,
      loomEmbedId: guide.loomEmbedId,
      audience: guide.audience || 'both',
      sortOrder: guide.sortOrder || 0,
      _status: 'published',
    }

    if (categoryId) {
      body.category = categoryId
    }

    const res = await fetch(`${PAYLOAD_URL}/api/guides`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      console.log(`  created: ${guide.title}`)
      created++
    } else {
      const err = await res.text()
      console.error(`  FAILED: ${guide.title} — ${res.status}: ${err}`)
    }
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
