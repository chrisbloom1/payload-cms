'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

// Top-level hub component. Hosts the two-tab interface from the
// prototype (Generator + Knowledge). Each tab is a separate client
// component so we can code-split as the surface grows.
//
// State strategy: the active tab is just useState. Form / preview /
// chat state lives inside each tab component for now. When we wire
// shipment persistence in Step 6 we'll lift the Generator's shipment
// state up so the URL can drive load/save (e.g. `?shipment=<id>`).

type TabId = 'generator' | 'knowledge'

const TABS: Array<{ id: TabId; label: string }> = [
  { id: 'generator', label: 'Generator' },
  { id: 'knowledge', label: 'Knowledge Hub' },
]

export function HazmatHub() {
  const [activeTab, setActiveTab] = useState<TabId>('generator')

  return (
    <div className="flex flex-col gap-6 px-6 py-6">
      <header className="flex flex-col gap-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bloom-orange">
          Bloom Ops
        </p>
        <h1 className="text-[28px] font-bold leading-tight text-bloom-navy">
          Hazmat Hub
        </h1>
        <p className="text-[14px] text-bloom-muted">
          Domestic ground shipping paperwork + knowledge base for the
          dangerous goods we move every day.
        </p>
      </header>

      <nav
        role="tablist"
        aria-label="Hazmat Hub sections"
        className="flex gap-1 border-b border-bloom-navy/15"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2.5 text-[14px] font-bold transition-colors',
              activeTab === tab.id
                ? 'border-b-2 border-bloom-navy text-bloom-navy'
                : 'text-bloom-muted hover:text-bloom-navy',
              '-mb-px',
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section
        id={`tab-${activeTab}`}
        role="tabpanel"
        aria-labelledby={activeTab}
        className="min-h-[480px]"
      >
        {activeTab === 'generator' ? <GeneratorPlaceholder /> : <KnowledgePlaceholder />}
      </section>
    </div>
  )
}

// Placeholders — replaced in Step 3 (Generator UI port) and a later
// step (Knowledge hub data-driven content). Keeping them inline for
// now so the skeleton is one file to review.

function GeneratorPlaceholder() {
  return (
    <div className="rounded-md bg-white p-8 ring-1 ring-bloom-navy/10">
      <h2 className="text-[18px] font-bold text-bloom-navy">Generator</h2>
      <p className="mt-2 text-[14px] text-bloom-muted">
        BOL upload → AI extraction → Shipper&apos;s Declaration PDF. UI ports
        in Step 3; extraction wires in Step 4; PDF generation in Step 5.
      </p>
    </div>
  )
}

function KnowledgePlaceholder() {
  return (
    <div className="rounded-md bg-white p-8 ring-1 ring-bloom-navy/10">
      <h2 className="text-[18px] font-bold text-bloom-navy">Knowledge Hub</h2>
      <p className="mt-2 text-[14px] text-bloom-muted">
        Decision tree, email templates, AI advisor chat. Ported from the
        prototype in a later step, once the Generator round-trip is solid.
      </p>
    </div>
  )
}
