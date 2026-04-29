'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const WORDS = ['Manufacturing', 'Warehousing', 'Assembly', 'Logistics'] as const
const HOLD_MS = 1600
const FADE_MS = 140

/**
 * Replaces the Proofly/Framer rotating-word column inside the home hero
 * navy pill (`.framer-175oaup`) with a clean React-driven word swap.
 *
 * Why a portal-injection rather than editing the Framer JSX:
 * the export is a 4000-line generated file with internal layout
 * dependencies. Rather than fork it, we keep its layout intact
 * (the navy pill provides position + bg + the surrounding "We help
 * make ___ easier." flex line) and replace only the word-cycling
 * contents. That gets us:
 *   - Pill auto-sizes to the current word (no awkward right-side gap
 *     when the word is shorter than "Manufacturing")
 *   - Tight ~140ms crossfade between words (vs. the original 400ms
 *     translateY scrub through stacked slots)
 *   - No invisible 5th-slot sliding past the bottom on each loop
 *
 * The original Framer rotating column (`.framer-2f8v2u`) is hidden via
 * `display:none` once we mount, so it doesn't compete for layout.
 */
export function HeroRotatingWord() {
  const [pillEl, setPillEl] = useState<HTMLElement | null>(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const pill = document.querySelector('.framer-175oaup') as HTMLElement | null
    if (!pill) return

    const innerSlot = pill.querySelector('.framer-2f8v2u') as HTMLElement | null
    if (innerSlot) innerSlot.style.display = 'none'

    pill.style.width = 'auto'
    pill.style.minWidth = '0'
    pill.style.height = 'auto'
    pill.style.padding = '6px 12px'
    pill.style.alignItems = 'center'
    pill.style.justifyContent = 'center'

    setPillEl(pill)

    return () => {
      if (innerSlot) innerSlot.style.display = ''
      pill.style.width = ''
      pill.style.minWidth = ''
      pill.style.height = ''
      pill.style.padding = ''
      pill.style.alignItems = ''
      pill.style.justifyContent = ''
    }
  }, [])

  useEffect(() => {
    if (!pillEl) return

    let cancelled = false

    const cycle = () => {
      if (cancelled) return
      setVisible(false)
      window.setTimeout(() => {
        if (cancelled) return
        setIndex((i) => (i + 1) % WORDS.length)
        setVisible(true)
      }, FADE_MS)
    }

    const interval = window.setInterval(cycle, HOLD_MS + FADE_MS)
    return () => {
      cancelled = true
      window.clearInterval(interval)
    }
  }, [pillEl])

  if (!pillEl) return null

  return createPortal(
    <span
      style={{
        display: 'inline-block',
        color: '#ffffff',
        fontFamily: 'Haffer, "Haffer Fallback", ui-sans-serif, system-ui, sans-serif',
        fontWeight: 700,
        fontSize: 'inherit',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        opacity: visible ? 1 : 0,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
    >
      {WORDS[index]}
    </span>,
    pillEl,
  )
}
