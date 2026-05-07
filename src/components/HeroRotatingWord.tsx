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
 * Two behaviors that matter:
 * 1. Fixed-width pill — all four words share one grid cell, so the pill
 *    sizes to the WIDEST word ("Manufacturing") and stays at that width
 *    regardless of which word is showing. No bouncing layout, just text
 *    swapping inside a steady navy box.
 * 2. Baseline alignment — the parent flex line (`We help make __ easier.`)
 *    ships from Framer with `align-items: flex-start`, which sits the
 *    taller pill above the surrounding text baseline. We override to
 *    `baseline` so the pill text reads on the same line as the rest.
 *
 * The 4 original Framer slots inside `.framer-2f8v2u` are display:none'd
 * on mount so they don't compete for layout.
 */
export function HeroRotatingWord() {
  const [slotEl, setSlotEl] = useState<HTMLElement | null>(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let cleanup: (() => void) | undefined

    const attach = (slot: HTMLElement) => {
      cleanup = applyToSlot(slot)
    }

    // SECTIONHERONEW now lazy-loads (dynamic ssr:false), so the Framer
    // slot we want to portal into may not be in the DOM yet on first
    // render. Try once synchronously, otherwise watch the document for
    // it to appear and attach as soon as Framer mounts the hero.
    const initial = document.querySelector('.framer-2f8v2u') as HTMLElement | null
    if (initial) {
      attach(initial)
    } else {
      const observer = new MutationObserver(() => {
        const found = document.querySelector('.framer-2f8v2u') as HTMLElement | null
        if (found) {
          observer.disconnect()
          attach(found)
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
      cleanup = () => observer.disconnect()
    }

    return () => {
      cleanup?.()
    }

    function applyToSlot(slot: HTMLElement) {
    const flexLine = slot.closest('.framer-1xlm2xu') as HTMLElement | null

    const originalSlotStyles: Record<string, string> = {
      width: slot.style.width,
      minWidth: slot.style.minWidth,
      height: slot.style.height,
      padding: slot.style.padding,
      alignItems: slot.style.alignItems,
      justifyContent: slot.style.justifyContent,
      borderRadius: slot.style.borderRadius,
      animation: slot.style.animation,
      display: slot.style.display,
    }
    const originalFlexAlign = flexLine?.style.alignItems

    const originalChildren = Array.from(slot.children) as HTMLElement[]
    const childOriginalDisplays = originalChildren.map((c) => c.style.display)
    originalChildren.forEach((c) => {
      c.style.display = 'none'
    })

    // Pill: auto-width via the grid-stacked words inside (the widest word
    // sets the cell width). We keep some inline padding so the navy box
    // still reads as a chip rather than a tight underline.
    slot.style.width = 'auto'
    slot.style.minWidth = '0'
    slot.style.height = 'auto'
    slot.style.padding = '2px 10px'
    slot.style.alignItems = 'center'
    slot.style.justifyContent = 'center'
    slot.style.borderRadius = '6px'
    slot.style.animation = 'none'
    slot.style.display = 'inline-flex'

    // Pull the pill onto the surrounding text's baseline.
    if (flexLine) flexLine.style.alignItems = 'baseline'

    setSlotEl(slot)

      return () => {
        Object.entries(originalSlotStyles).forEach(([key, value]) => {
          slot.style.setProperty(key.replace(/[A-Z]/g, '-$&').toLowerCase(), value)
        })
        originalChildren.forEach((c, i) => {
          c.style.display = childOriginalDisplays[i] || ''
        })
        if (flexLine) flexLine.style.alignItems = originalFlexAlign || ''
      }
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

  // Grid-stack all four words in a single cell; only the active one has
  // opacity 1. The cell auto-sizes to the widest word, so the navy box
  // never resizes mid-cycle.
  return createPortal(
    <span
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      }}
    >
      {WORDS.map((word, i) => (
        <span
          key={word}
          style={{
            gridColumn: 1,
            gridRow: 1,
            color: '#ffffff',
            fontFamily: 'Haffer, "Haffer Fallback", ui-sans-serif, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'inherit',
            textAlign: 'center',
            opacity: i === index && visible ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-out`,
          }}
        >
          {word}
        </span>
      ))}
    </span>,
    slotEl,
  )
}
