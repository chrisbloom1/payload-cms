import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { headers as nextHeaders } from 'next/headers'
import { seedAll } from '@/lib/seed-all'

/**
 * One-shot endpoint to populate Payload with the live marketing-site
 * content. Idempotent (every seed step upserts by key, so calling
 * this multiple times converges the DB back to the in-repo defaults
 * rather than duplicating rows).
 *
 * Auth: requires an authenticated admin session — visit /admin/login
 * first, then GET this URL while signed in. Public access is rejected
 * with 401 because the seeds touch every editable collection and
 * global.
 *
 * Usage:
 *   POST /api/seed-content     ← preferred
 *   GET  /api/seed-content     ← also works for one-click from the
 *                                 browser address bar after login.
 */

async function runSeed() {
  const startedAt = Date.now()
  try {
    const payload = await getPayload({ config: configPromise })

    const headerList = await nextHeaders()
    const auth = await payload.auth({ headers: headerList })
    const user = auth.user

    if (!user) {
      payload.logger.warn('[seed-content] rejected: unauthenticated request')
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Not authenticated. Sign in at /admin first, then retry.',
        }),
        { status: 401, headers: { 'content-type': 'application/json' } },
      )
    }

    payload.logger.info(
      `[seed-content] starting full content seed (initiated by user ${user.email ?? user.id})`,
    )

    const reports = await seedAll(payload)

    const totalCreated = reports.reduce((acc, r) => acc + r.created, 0)
    const totalUpdated = reports.reduce((acc, r) => acc + r.updated, 0)
    const totalErrors = reports.reduce((acc, r) => acc + r.errors.length, 0)
    const elapsedMs = Date.now() - startedAt

    payload.logger.info(
      `[seed-content] done in ${elapsedMs}ms — ` +
        `${totalCreated} created, ${totalUpdated} updated, ${totalErrors} errors`,
    )
    if (totalErrors > 0) {
      for (const r of reports) {
        for (const e of r.errors) {
          payload.logger.error(`[seed-content:${r.collection}] ${e}`)
        }
      }
    }

    return new Response(
      JSON.stringify(
        {
          ok: totalErrors === 0,
          summary: {
            collections: reports.length,
            created: totalCreated,
            updated: totalUpdated,
            errors: totalErrors,
            elapsedMs,
          },
          reports,
        },
        null,
        2,
      ),
      {
        status: 200,
        headers: { 'content-type': 'application/json' },
      },
    )
  } catch (err: any) {
    const elapsedMs = Date.now() - startedAt
    console.error(`[seed-content] fatal error after ${elapsedMs}ms:`, err)
    return new Response(
      JSON.stringify({
        ok: false,
        error: err?.message ?? String(err),
        stack: err?.stack,
        elapsedMs,
      }),
      { status: 500, headers: { 'content-type': 'application/json' } },
    )
  }
}

export async function GET() {
  return runSeed()
}

export async function POST() {
  return runSeed()
}
