'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const WORDS = ['Manufacturing', 'Warehousing', 'Assembly', 'Logistics'] as const
const HOLD_MS = 1600
const FADE_MS = 140

/**
 * Replaces the Proofly/Framer rotating-word column inside the home hero
 * navy pill with a clean React-driven word swap.
 *
 * The Framer DOM:
 *   .framer-175oaup (outer wrapper, border-radius only — no bg)
 *     .framer-2f8v2u (inner; HAS the navy backgroundColor; clipped to a
 *                     fixed 149×42 box; contains 4 absolute-positioned
 *                     word slots that originally translateY-cycled)
 *
 * Strategy: keep `.framer-2f8v2u` (so we keep the navy bg + rounded
 * corners that surround the word), hide its children (the buggy 4-slot
 * column), reset its sizing to auto, and portal a single React-managed
 * word into it. The pill now auto-sizes to whichever word is current,
 * crossfades in ~140ms, and never reveals a blank slot.
 */
export function HeroRotatingWord() {
  const [slotEl, setSlotEl] = useState<HTMLElement | null>(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const slot = document.querySelector('.framer-2f8v2u') as HTMLElement | null
    if (!slot) return

    // Snapshot original inline styles so we can restore on unmount
    const originalStyles: Record<string, string> = {
      width: slot.style.width,
      minWidth: slot.style.minWidth,
      height: slot.style.height,
      padding: slot.style.padding,
      alignItems: slot.style.alignItems,
      justifyContent: slot.style.justifyContent,
      borderRadius: slot.style.borderRadius,
      animation: slot.style.animation,
    }

    // Hide each pre-existing 4-slot word (the buggy translateY column)
    const originalChildren = Array.from(slot.children) as HTMLElement[]
    const childOriginalDisplays = originalChildren.map((c) => c.style.display)
    originalChildren.forEach((c) => {
      c.style.display = 'none'
    })

    // Let the slot auto-size to whichever word we render. Keep its navy bg
    // (which is set inline via Framer's `style.backgroundColor`).
    slot.style.width = 'auto'
    slot.style.minWidth = '0'
    slot.style.height = 'auto'
    slot.style.padding = '6px 12px'
    slot.style.alignItems = 'center'
    slot.style.justifyContent = 'center'
    slot.style.borderRadius = '6px'
    slot.style.animation = 'none'

    setSlotEl(slot)

    return () => {
      Object.entries(originalStyles).forEach(([key, value]) => {
        slot.style.setProperty(key.replace(/[A-Z]/g, '-$&').toLowerCase(), value)
      })
      originalChildren.forEach((c, i) => {
        c.style.display = childOriginalDisplays[i] || ''
      })
    }
  }, [])

  useEffect(() => {
    if (!slotEl) return

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
  }, [slotEl])

  if (!slotEl) return null

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
    slotEl,
  )
}
