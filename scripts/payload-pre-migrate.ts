/**
 * Pre-migrate hook for Vercel builds.
 *
 * Payload's drizzle migrate code shows an interactive "It looks like
 * you've run Payload in dev mode" confirmation prompt when the
 * `payload_migrations` table contains a marker row with `batch = -1`.
 * That marker is added when Payload runs in dev-push mode (which this
 * project did before formal migrations existed). The
 * --force-accept-warning CLI flag is NOT plumbed into that specific
 * prompt, and in non-TTY environments (Vercel CI) the prompts library
 * auto-cancels with exit 0 — so `payload migrate` returns success
 * without actually applying any pending migrations.
 *
 * Result: schema changes added in code never reach the prod DB,
 * and queries fail with "column does not exist" at runtime.
 *
 * Fix: run this script before `payload migrate`. It deletes the
 * dev-mode marker so the prompt no longer fires and migrate proceeds
 * normally. Idempotent (no rows match → 0-affected delete).
 *
 * Safe: removing the batch=-1 row only removes a tracking flag;
 * the actual schema columns it tracked remain in the DB unchanged.
 * After this runs, Payload migrate sees the formal migration files
 * and applies any that haven't been recorded as applied yet.
 *
 * Uses Payload's own initialized adapter so we don't need to add a
 * direct `pg` dependency — the connection string and driver are
 * already configured in payload.config.
 */
import { sql } from '@payloadcms/db-postgres'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function main() {
  if (!process.env.DATABASE_URI) {
    console.warn('[pre-migrate] DATABASE_URI not set — skipping marker cleanup.')
    return
  }

  let payload
  try {
    payload = await getPayload({ config: configPromise })
  } catch (err) {
    console.warn('[pre-migrate] Could not init Payload (DB unreachable?):', err)
    return
  }

  try {
    // The migrations table may not exist yet on a fresh DB; tolerate.
    const exists = await payload.db.drizzle.execute<{ exists: boolean }>(
      sql`SELECT EXISTS (
            SELECT FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'payload_migrations'
          ) AS exists`,
    )
    const tableExists = (exists as { rows?: Array<{ exists: boolean }> }).rows?.[0]?.exists
    if (!tableExists) {
      console.log('[pre-migrate] payload_migrations table not present yet — nothing to clear.')
      return
    }

    const result = await payload.db.drizzle.execute(
      sql`DELETE FROM payload_migrations WHERE batch = -1`,
    )
    const rowCount = (result as { rowCount?: number }).rowCount ?? 0
    if (rowCount > 0) {
      console.log(
        `[pre-migrate] Cleared ${rowCount} dev-mode marker row(s) so migrate can proceed non-interactively.`,
      )
    } else {
      console.log('[pre-migrate] No dev-mode marker rows found — nothing to clear.')
    }
  } catch (err) {
    // Don't fail the build for this — log and continue. If migrate
    // still hits the prompt it'll exit 0 like before.
    console.warn('[pre-migrate] Failed to clear dev-mode marker:', err)
  }

  process.exit(0)
}

main().catch((err) => {
  console.warn('[pre-migrate] Fatal error (non-blocking):', err)
  process.exit(0)
})
