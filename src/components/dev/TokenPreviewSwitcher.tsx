'use client'

/*
  Dev-only A/B preview for the proposed design-system token sync.
  Visit any marketing page with `?preview=tokens` to see how it would
  look under the web app's Storybook-published tokens. The override
  lives in `/public/dev/preview-tokens.css` so this component never
  ships CSS strings — it just toggles a class and a stylesheet link.

  Remove the file at `public/dev/preview-tokens.css`, this component,
  and its mount in `(frontend)/layout.tsx` once the design discussion
  concludes.
*/

import { useEffect, useState } from 'react'

export function TokenPreviewSwitcher() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requested = params.get('preview') === 'tokens'
    setActive(requested)

    if (requested) {
      document.documentElement.classList.add('preview-tokens')
    }

    return () => {
      document.documentElement.classList.remove('preview-tokens')
    }
  }, [])

  if (!active) return null

  const offHref = (() => {
    if (typeof window === 'undefined') return '?'
    const url = new URL(window.location.href)
    url.searchParams.delete('preview')
    return url.pathname + (url.search || '') + url.hash
  })()

  return (
    <>
      <link rel="stylesheet" href="/dev/preview-tokens.css" />
      <div
        role="status"
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 9999,
          background: 'rgba(15, 15, 20, 0.92)',
          color: 'white',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          fontSize: 12,
          lineHeight: 1.4,
          padding: '10px 14px',
          borderRadius: 8,
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          maxWidth: 320,
        }}
      >
        <span
          aria-hidden
          style={{ width: 8, height: 8, borderRadius: 9999, background: '#22d3aa' }}
        />
        <span>
          <strong style={{ display: 'block', marginBottom: 2 }}>Token preview ON</strong>
          <span style={{ opacity: 0.75 }}>
            Storybook tokens applied. Append/remove <code>?preview=tokens</code> to compare.
          </span>
        </span>
        <a
          href={offHref}
          style={{
            color: '#fff',
            background: 'rgba(255,255,255,0.12)',
            padding: '4px 8px',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Off
        </a>
      </div>
    </>
  )
}
