'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'posthog' in window) {
      ;(window as unknown as { posthog?: { capture: (e: string, p?: Record<string, unknown>) => void } }).posthog?.capture(
        '$exception',
        { message: error.message, digest: error.digest },
      )
    }
  }, [error])

  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] items-center justify-center bg-bloom-cream px-4 py-24"
    >
      <div className="mx-auto flex max-w-[560px] flex-col items-start gap-6 text-bloom-navy">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
          Something went wrong
        </p>
        <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight md:text-[44px]">
          We hit an unexpected error.
        </h1>
        <p className="text-[16px] leading-[26px] text-bloom-navy/80">
          The page couldn&apos;t load. Try again. If it keeps happening, let
          us know at{' '}
          <a
            href="mailto:hello@bloomnetwork.ai"
            className="underline underline-offset-4 hover:opacity-80"
          >
            hello@bloomnetwork.ai
          </a>
          .
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go home</Link>
          </Button>
        </div>
        {error.digest ? (
          <p className="mt-4 text-[12px] text-bloom-navy/50">
            Reference: <span className="font-mono">{error.digest}</span>
          </p>
        ) : null}
      </div>
    </main>
  )
}
