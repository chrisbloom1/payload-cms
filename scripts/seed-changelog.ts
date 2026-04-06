/**
 * Seed an initial changelog entry
 *
 * Usage: npx tsx scripts/seed-changelog.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envPath = path.resolve(__dirname, '..', '.env')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match && !process.env[match[1].trim()]) {
      process.env[match[1].trim()] = match[2].trim()
    }
  }
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
  if (!res.ok) throw new Error(`Login failed: ${res.status}`)
  const data = await res.json()
  return data.token
}

const entries = [
  {
    title: 'Knowledge Base Launch',
    version: '1.0',
    releaseDate: '2026-04-01',
    breakingChanges: false,
    features: [
      { feature: 'Knowledge Base with categorized articles for brands and providers' },
      { feature: 'Frequently Asked Questions with search and category filtering' },
      { feature: 'Glossary of platform terminology with related terms' },
      { feature: 'Video guides powered by Loom walkthroughs' },
      { feature: 'Changelog to track platform updates' },
      { feature: 'Feature request roadmap with community voting' },
    ],
  },
]

async function main() {
  const token = await login()
  console.log('Authenticated.\n')

  // Check if any entries exist
  const checkRes = await fetch(`${PAYLOAD_URL}/api/release-notes?limit=1`, {
    headers: { Authorization: `JWT ${token}` },
  })
  const checkData = await checkRes.json()
  if (checkData.docs?.length > 0) {
    console.log('Changelog already has entries, skipping.')
    return
  }

  for (const entry of entries) {
    const res = await fetch(`${PAYLOAD_URL}/api/release-notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
      body: JSON.stringify(entry),
    })

    if (res.ok) {
      console.log(`  created: ${entry.title}`)
    } else {
      const err = await res.text()
      console.error(`  FAILED: ${entry.title} — ${res.status}: ${err}`)
    }
  }

  console.log('\nDone.')
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
