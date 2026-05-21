'use client'

import { useRef } from 'react'
import { HazmatAdvisor } from './HazmatAdvisor'
import { HazmatTemplates, type HazmatTemplatesHandle } from './HazmatTemplates'
import { HazmatChat } from './HazmatChat'

// Knowledge Hub composite. Three vertically-stacked sections:
//   1. Decision-tree advisor — narrows down a recommendation by
//      product type → destination → quantity
//   2. Email templates — copy/paste-ready outreach blocks
//   3. AI chat — for novel questions the decision tree doesn't cover
//
// The advisor can deep-link a relevant template via the
// scrollToTemplate ref, surfaced by clicking the "View email template"
// button on a result card.

export function KnowledgeHub() {
  const templatesRef = useRef<HazmatTemplatesHandle | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <SectionHeading
          eyebrow="Step 1"
          title="Hazmat shipping advisor"
          body="Walk through a few questions to land on the right playbook."
        />
        <HazmatAdvisor onJumpToTemplate={(id) => templatesRef.current?.scrollToTemplate(id)} />

        <SectionHeading
          eyebrow="Ask"
          title="Novel question?"
          body="If your situation doesn't fit the tree, ask the advisor."
          className="mt-2"
        />
        <HazmatChat />
      </div>

      <div className="flex flex-col gap-4">
        <SectionHeading
          eyebrow="Templates"
          title="Email templates"
          body="Copy-paste outreach to carriers and forwarders. Replace [bracketed] placeholders before sending."
        />
        <HazmatTemplates ref={templatesRef} />
      </div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow: string
  title: string
  body?: string
  className?: string
}) {
  return (
    <header className={className}>
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-bloom-orange">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-[18px] font-bold text-bloom-navy">{title}</h2>
      {body ? <p className="mt-1 text-[13px] text-bloom-muted">{body}</p> : null}
    </header>
  )
}
