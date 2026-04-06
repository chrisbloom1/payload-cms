/**
 * Seed feature requests from roadmap-seed.json
 *
 * Usage: npx tsx scripts/seed-roadmap.ts
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

interface SeedFeatureRequest {
  title: string
  slug: string
  description: string
  status: string
  votes: number
  audience?: string
  submitterName?: string
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

async function requestExists(token: string, slug: string): Promise<boolean> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/feature-requests?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } },
  )

  if (!res.ok) return false
  const data = await res.json()
  return (data.docs?.length || 0) > 0
}

async function main() {
  const seedPath = path.resolve(__dirname, 'roadmap-seed.json')
  const seed = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))
  const requests: SeedFeatureRequest[] = seed.featureRequests || []

  if (requests.length === 0) {
    console.log('No feature requests found in roadmap-seed.json.')
    process.exit(0)
  }

  console.log(`Found ${requests.length} feature requests to seed.`)

  const token = await login()
  console.log('Authenticated.\n')

  let created = 0
  let skipped = 0

  for (const req of requests) {
    if (await requestExists(token, req.slug)) {
      console.log(`  skip: ${req.title} (already exists)`)
      skipped++
      continue
    }

    const body: Record<string, unknown> = {
      title: req.title,
      slug: req.slug,
      description: req.description,
      status: req.status,
      votes: req.votes,
      audience: req.audience || 'both',
      submitterName: req.submitterName || '',
      _status: 'published',
    }

    const res = await fetch(`${PAYLOAD_URL}/api/feature-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      console.log(`  created: ${req.title}`)
      created++
    } else {
      const err = await res.text()
      console.error(`  FAILED: ${req.title} — ${res.status}: ${err}`)
    }
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
