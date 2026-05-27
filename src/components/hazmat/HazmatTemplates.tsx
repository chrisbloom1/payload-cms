'use client'

import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { EMAIL_TEMPLATES, type EmailTemplate } from './knowledge-data'

// Email templates surface. Each template renders as a card with the
// subject, when-to-use note, and a body in a monospace block. Buttons:
// copy subject, copy body, copy both.

export interface HazmatTemplatesHandle {
  scrollToTemplate: (id: string) => void
}

interface HazmatTemplatesProps {
  templates?: EmailTemplate[]
}

export const HazmatTemplates = forwardRef<HazmatTemplatesHandle, HazmatTemplatesProps>(
  function HazmatTemplates({ templates = EMAIL_TEMPLATES }, ref) {
    const refs = useRef<Record<string, HTMLDivElement | null>>({})

    useImperativeHandle(ref, () => ({
      scrollToTemplate: (id: string) => {
        const el = refs.current[id]
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Quick highlight pulse
        el.classList.add('ring-2', 'ring-bloom-orange')
        setTimeout(() => el.classList.remove('ring-2', 'ring-bloom-orange'), 1500)
      },
    }))

    return (
      <div className="flex flex-col gap-3">
        {templates.map((t) => (
          <TemplateCard
            key={t.id}
            template={t}
            registerRef={(el) => {
              refs.current[t.id] = el
            }}
          />
        ))}
      </div>
    )
  },
)

function TemplateCard({
  template,
  registerRef,
}: {
  template: EmailTemplate
  registerRef: (el: HTMLDivElement | null) => void
}) {
  const [copied, setCopied] = useState<'subject' | 'body' | 'both' | null>(null)

  const copy = useCallback(
    async (kind: 'subject' | 'body' | 'both') => {
      const text =
        kind === 'subject'
          ? template.subject
          : kind === 'body'
            ? template.body
            : `Subject: ${template.subject}\n\n${template.body}`
      try {
        await navigator.clipboard.writeText(text)
        setCopied(kind)
        setTimeout(() => setCopied(null), 1500)
      } catch {
        // Silent — clipboard API may be disabled in some browsers
      }
    },
    [template],
  )

  return (
    <div
      id={`tmpl-${template.id}`}
      ref={registerRef}
      className="rounded-md bg-white p-5 ring-1 ring-bloom-navy/10 transition-shadow"
    >
      <h3 className="text-[15px] font-bold text-bloom-navy">{template.title}</h3>
      <p className="mt-1 text-[12px] italic text-bloom-muted">{template.when}</p>

      <dl className="mt-3 flex flex-col gap-1">
        <div>
          <dt className="inline text-[10px] font-bold uppercase tracking-[0.06em] text-bloom-muted">
            Subject:&nbsp;
          </dt>
          <dd className="inline text-[12px] font-medium text-bloom-navy">{template.subject}</dd>
        </div>
      </dl>

      <pre className="mt-3 max-h-[260px] overflow-y-auto rounded-md bg-bloom-cream/60 p-3 font-mono text-[11px] leading-[16px] text-bloom-navy">
        {template.body}
      </pre>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => copy('subject')}
          className={cn(
            'rounded-md border border-bloom-navy/20 bg-white px-3 py-1.5 text-[11px] font-medium text-bloom-navy transition-colors hover:border-bloom-navy',
            copied === 'subject' && 'border-emerald-500 bg-emerald-50',
          )}
        >
          {copied === 'subject' ? '✓ Copied' : 'Copy subject'}
        </button>
        <button
          type="button"
          onClick={() => copy('body')}
          className={cn(
            'rounded-md border border-bloom-navy/20 bg-white px-3 py-1.5 text-[11px] font-medium text-bloom-navy transition-colors hover:border-bloom-navy',
            copied === 'body' && 'border-emerald-500 bg-emerald-50',
          )}
        >
          {copied === 'body' ? '✓ Copied' : 'Copy body'}
        </button>
        <button
          type="button"
          onClick={() => copy('both')}
          className={cn(
            'rounded-md bg-bloom-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90',
            copied === 'both' && 'bg-emerald-600',
          )}
        >
          {copied === 'both' ? '✓ Copied' : 'Copy both'}
        </button>
      </div>
    </div>
  )
}
