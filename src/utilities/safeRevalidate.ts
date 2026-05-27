/**
 * Safe wrappers around `revalidateTag` / `revalidatePath` that
 * swallow the "Invariant: static generation store missing" error.
 *
 * Why: Payload's collection / global afterChange hooks call these
 * Next.js cache helpers when an editor saves in /admin (request
 * context is present, the call works). The same hooks ALSO fire
 * when our build-time seed script (scripts/seed-all-build.ts) does
 * `payload.update()` / `payload.updateGlobal()` — but at build time
 * there's no request context, and Next.js throws.
 *
 * The actual revalidation isn't needed at build time anyway: the
 * very next thing the build does is `next build`, which prerenders
 * everything fresh. So silently no-op'ing in that context is the
 * right behavior.
 */
import { revalidatePath, revalidateTag } from 'next/cache'

function isMissingStoreError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const message = (err as { message?: unknown }).message
  return (
    typeof message === 'string' &&
    message.includes('static generation store missing')
  )
}

export function safeRevalidateTag(...args: Parameters<typeof revalidateTag>): void {
  try {
    revalidateTag(...args)
  } catch (err) {
    if (isMissingStoreError(err)) return
    throw err
  }
}

export function safeRevalidatePath(
  ...args: Parameters<typeof revalidatePath>
): void {
  try {
    revalidatePath(...args)
  } catch (err) {
    if (isMissingStoreError(err)) return
    throw err
  }
}
