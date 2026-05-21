'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ADVISOR, type AdvisorNode } from './knowledge-data'

// Decision-tree advisor. User answers a chain of multiple-choice
// questions, gets a result card with action steps, facts, and an
// optional pointer to a relevant email template.
//
// State = the path of node ids traversed so far. We never mutate
// previous entries; back-button = pop, restart = reset to ['start'].

interface HazmatAdvisorProps {
  onJumpToTemplate?: (templateId: string) => void
}

const RESULT_BADGE: Record<string, { label: string; classes: string }> = {
  ok: { label: '✓ Standard flow', classes: 'bg-emerald-100 text-emerald-800' },
  warn: { label: '⚠ Heads-up', classes: 'bg-bloom-orange/15 text-bloom-orange-deep' },
  info: { label: 'ℹ Carrier handles', classes: 'bg-bloom-mint text-bloom-navy' },
  err: { label: '⛔ Restricted', classes: 'bg-red-100 text-red-800' },
}

export function HazmatAdvisor({ onJumpToTemplate }: HazmatAdvisorProps) {
  const router = useRouter()
  const [path, setPath] = useState<string[]>(['start'])

  const node = useMemo<AdvisorNode | undefined>(
    () => ADVISOR[path[path.length - 1]],
    [path],
  )

  const pick = useCallback((nextId: string) => setPath((p) => [...p, nextId]), [])
  const back = useCallback(() => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p)), [])
  const reset = useCallback(() => setPath(['start']), [])

  if (!node) {
    return (
      <div className="rounded-md bg-white p-6 text-[13px] text-bloom-muted ring-1 ring-bloom-navy/10">
        Unknown step. <button onClick={reset} className="font-bold text-bloom-navy underline">Start over</button>.
      </div>
    )
  }

  return (
    <div className="rounded-md bg-white p-6 ring-1 ring-bloom-navy/10">
      {path.length > 1 ? (
        <button
          type="button"
          onClick={back}
          className="mb-3 inline-flex items-center gap-1 text-[12px] font-medium text-bloom-muted hover:text-bloom-navy"
        >
          ← Back
        </button>
      ) : null}

      {node.breadcrumb ? (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-bloom-orange">
          {node.breadcrumb}
        </p>
      ) : null}

      {node.isResult ? (
        <ResultCard node={node} onJumpToTemplate={onJumpToTemplate} onReset={reset} router={router} />
      ) : (
        <>
          <h3 className="mb-4 text-[18px] font-bold text-bloom-navy">{node.question}</h3>
          <div className="flex flex-col gap-2">
            {node.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => pick(opt.next)}
                className="flex w-full items-center justify-between rounded-md border border-bloom-navy/15 bg-white px-4 py-3 text-left text-[13px] text-bloom-navy transition-colors hover:border-bloom-navy hover:bg-bloom-cream/60"
              >
                <span>{opt.label}</span>
                <span className="text-bloom-muted">→</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ResultCard({
  node,
  onJumpToTemplate,
  onReset,
  router,
}: {
  node: Extract<AdvisorNode, { isResult: true }>
  onJumpToTemplate?: (id: string) => void
  onReset: () => void
  router: ReturnType<typeof useRouter>
}) {
  const badge = RESULT_BADGE[node.kind] || RESULT_BADGE.info
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-2">
        <span
          className={cn(
            'inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]',
            badge.classes,
          )}
        >
          {badge.label}
        </span>
      </div>
      <h3 className="text-[18px] font-bold leading-tight text-bloom-navy">{node.title}</h3>
      <p className="text-[14px] leading-[20px] text-bloom-navy">{node.summary}</p>

      {node.steps && node.steps.length > 0 ? (
        <div>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-bloom-muted">
            Steps
          </p>
          <ol className="ml-5 list-decimal space-y-1 text-[13px] leading-[19px] text-bloom-navy">
            {node.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {node.facts && Object.keys(node.facts).length > 0 ? (
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Object.entries(node.facts).map(([k, v]) => (
            <div key={k} className="rounded-md bg-bloom-cream/60 px-3 py-2">
              <dt className="text-[10px] font-bold uppercase tracking-[0.05em] text-bloom-muted">
                {k}
              </dt>
              <dd className="mt-0.5 text-[12px] font-medium text-bloom-navy">{v}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="flex flex-wrap items-center gap-2 border-t border-bloom-navy/10 pt-4">
        {node.cta?.action === 'goto_generator' ? (
          <button
            type="button"
            onClick={() => router.push('/ops/hazmat')}
            className="rounded-md bg-bloom-navy px-4 py-2 text-[12px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
          >
            {node.cta.label}
          </button>
        ) : null}
        {node.emailTemplate && onJumpToTemplate ? (
          <button
            type="button"
            onClick={() => onJumpToTemplate(node.emailTemplate!)}
            className="rounded-md border border-bloom-navy px-4 py-2 text-[12px] font-bold text-bloom-navy transition-colors hover:bg-bloom-navy hover:text-white"
          >
            View email template
          </button>
        ) : null}
        <button
          type="button"
          onClick={onReset}
          className="ml-auto text-[12px] text-bloom-muted underline-offset-4 hover:text-bloom-navy hover:underline"
        >
          Start over
        </button>
      </div>
    </div>
  )
}
