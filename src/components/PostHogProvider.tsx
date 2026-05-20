'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef } from 'react'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

/**
 * Loads posthog-js dynamically only after the page is interactive and
 * only when a key is configured. Top-level imports of posthog-js cost
 * ~30 KB on the critical bundle and ~200ms of mainthread scripting on
 * mobile, all of which counts against TBT even before any event fires.
 * Deferring keeps the marketing pages fast; once analytics matters
 * (after first paint), the SDK loads and replays the queued pageview.
 */

type PostHogClient = {
  init: (key: string, opts: Record<string, unknown>) => void
  capture: (event: string, props?: Record<string, unknown>) => void
  debug: () => void
}

let phPromise: Promise<PostHogClient | null> | null = null

function loadPostHog(): Promise<PostHogClient | null> {
  if (typeof window === 'undefined' || !POSTHOG_KEY) return Promise.resolve(null)
  if (phPromise) return phPromise
  phPromise = import('posthog-js').then((mod) => {
    const ph = (mod.default ?? mod) as unknown as PostHogClient
    ph.init(POSTHOG_KEY!, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: 'identified_only',
      loaded: (loaded: PostHogClient) => {
        if (process.env.NODE_ENV === 'development') loaded.debug()
      },
    })
    return ph
  })
  return phPromise
}

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastUrl = useRef<string | null>(null)

  useEffect(() => {
    if (!POSTHOG_KEY) return
    const qs = searchParams?.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    if (url === lastUrl.current) return
    lastUrl.current = url

    // Defer SDK load + first-pageview capture to idle so it doesn't
    // compete with hydration for the main thread. Falls back to a
    // 1.5s timeout on browsers without requestIdleCallback.
    const fire = () => {
      loadPostHog().then((ph) => {
        ph?.capture('$pageview', { $current_url: window.location.origin + url })
      })
    }
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }
    if (typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(fire, { timeout: 1500 })
    } else {
      setTimeout(fire, 1500)
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider() {
  if (!POSTHOG_KEY) return null
  return (
    <Suspense fallback={null}>
      <PageviewTracker />
    </Suspense>
  )
}
