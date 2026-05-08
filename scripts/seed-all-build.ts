/**
 * Build-time hook that runs every deploy after migrations apply.
 *
 * Calls the consolidated seedAll() so any in-repo content changes
 * (blog post copy, customer story body, home-page hero text, etc.)
 * automatically flow into Payload. Editors can still tweak in /admin
 * afterwards — Payload becomes the source of truth for that record
 * until the next deploy that ships code-side changes to the same
 * field.
 *
 * Idempotent (every seed step upserts by key, no duplicates) and
 * non-fatal: failure here just logs and exits 0 so the build still
 * succeeds even if the DB is briefly unreachable. Pages fall back to
 * the in-repo defaults at render time anyway.
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { seedAll } from '../src/lib/seed-all'

async function main() {
  if (!process.env.DATABASE_URI) {
    console.warn('[seed-all-build] DATABASE_URI not set — skipping seed.')
    return
  }

  let payload
  try {
    payload = await getPayload({ config })
  } catch (err) {
    console.warn('[seed-all-build] Could not init Payload (DB unreachable?):', err)
    return
  }

  const startedAt = Date.now()
  try {
    const reports = await seedAll(payload)
    const created = reports.reduce((acc, r) => acc + r.created, 0)
    const updated = reports.reduce((acc, r) => acc + r.updated, 0)
    const errors = reports.reduce((acc, r) => acc + r.errors.length, 0)
    const elapsedMs = Date.now() - startedAt
    console.log(
      `[seed-all-build] done in ${elapsedMs}ms — ${created} created, ${updated} updated, ${errors} errors`,
    )
    if (errors > 0) {
      for (const r of reports) {
        for (const e of r.errors) {
          console.warn(`[seed-all-build:${r.collection}] ${e}`)
        }
      }
    }
  } catch (err) {
    console.warn('[seed-all-build] failed (non-blocking):', err)
  }
}

main()
  .catch((err) => {
    console.warn('[seed-all-build] fatal (non-blocking):', err)
  })
  .finally(() => {
    // Always exit 0 so an unreachable DB or transient seed failure
    // doesn't fail the entire deploy. The pages have fallback
    // defaults at render time.
    process.exit(0)
  })
