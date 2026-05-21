'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

// Append-only audit trail viewer. Shown on the Generator when a saved
// shipment is loaded. The data is written by the API routes; this is
// pure read-only display so the team can see who did what without
// jumping into the Payload admin.

export interface AuditEvent {
  id?: string
  event?: string
  user?: number | string | { id?: number | string; email?: string } | null
  timestamp?: string
  changes?: Record<string, unknown> | null
}

const EVENT_LABELS: Record<string, string> = {
  created: 'Created',
  edited: 'Edited',
  patched: 'Patched',
  generated_pdf: 'Generated PDF',
  signed: 'Signed',
  transmitted: 'Transmitted to carrier',
}

const EVENT_COLORS: Record<string, string> = {
  created: 'bg-bloom-mint text-bloom-navy',
  edited: 'bg-bloom-navy/10 text-bloom-navy',
  patched: 'bg-bloom-navy/10 text-bloom-navy',
  generated_pdf: 'bg-bloom-orange/15 text-bloom-orange-deep',
  signed: 'bg-emerald-100 text-emerald-800',
  transmitted: 'bg-emerald-100 text-emerald-800',
}

function fmtTimestamp(iso: string | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
}

function actorOf(ev: AuditEvent): string {
  const fromChanges = ev.changes && typeof (ev.changes as { actor?: unknown }).actor === 'string'
    ? ((ev.changes as { actor: string }).actor)
    : null
  if (fromChanges) return fromChanges
  if (ev.user && typeof ev.user === 'object' && (ev.user as { email?: string }).email) {
    return (ev.user as { email: string }).email
  }
  return 'unknown'
}

export function HazmatAuditTrail({ events }: { events: AuditEvent[] }) {
  const [open, setOpen] = useState(false)

  if (!events || events.length === 0) return null

  // Most recent first — list comes from Payload in insertion order.
  const ordered = [...events].reverse()

  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      className="rounded-md bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
    >
      <summary className="flex cursor-pointer items-center justify-between text-[11px] font-bold uppercase tracking-[0.1em] text-bloom-navy">
        <span>Audit Trail ({events.length})</span>
        <span className="text-bloom-muted">{open ? '−' : '+'}</span>
      </summary>
      <ul className="mt-3 flex flex-col gap-2">
        {ordered.map((ev, i) => {
          const label = ev.event ? EVENT_LABELS[ev.event] || ev.event : 'Unknown'
          const color = ev.event ? EVENT_COLORS[ev.event] || 'bg-bloom-muted/15 text-bloom-muted' : 'bg-bloom-muted/15 text-bloom-muted'
          return (
            <li
              key={ev.id ?? i}
              className="flex flex-col gap-1 border-b border-bloom-navy/8 pb-2 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2 text-[12px]">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]',
                      color,
                    )}
                  >
                    {label}
                  </span>
                  <span className="text-bloom-navy">{actorOf(ev)}</span>
                </div>
                <span className="text-[11px] text-bloom-muted">{fmtTimestamp(ev.timestamp)}</span>
              </div>
              {ev.changes && Object.keys(ev.changes).filter((k) => k !== 'actor').length > 0 ? (
                <div className="text-[11px] text-bloom-muted">
                  {Object.entries(ev.changes)
                    .filter(([k]) => k !== 'actor')
                    .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`)
                    .join(' · ')}
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </details>
  )
}
