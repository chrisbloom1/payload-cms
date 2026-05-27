import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Hazmat Shipments — Bloom Ops',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

interface ShipmentRow {
  id: string | number
  bolRef?: string
  proNumber?: string
  dateTendered?: string
  carrier?: string
  productType?: string
  status?: string
  consignee?: { name?: string }
  updatedAt?: string
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-bloom-navy/10 text-bloom-navy',
  signed: 'bg-bloom-mint text-bloom-navy',
  transmitted: 'bg-bloom-orange/15 text-bloom-orange-deep',
  delivered: 'bg-emerald-100 text-emerald-800',
  archived: 'bg-bloom-muted/15 text-bloom-muted',
}

function fmtDate(iso: string | undefined): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

// Server component — runs at request time (force-dynamic) so the
// list reflects the latest Payload state without a stale-cache problem
// when somebody saves a draft a few seconds earlier.
export default async function ShipmentsPage() {
  const payload = await getPayload({ config: configPromise })
  const result = (await payload.find({
    collection: 'hazmat-shipments' as never,
    limit: 50,
    sort: '-updatedAt',
  })) as unknown as { docs: ShipmentRow[]; totalDocs: number }

  return (
    <div className="flex flex-col gap-6 px-6 py-6">
      <header className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bloom-orange">
            Bloom Ops
          </p>
          <h1 className="text-[28px] font-bold leading-tight text-bloom-navy">
            Hazmat Shipments
          </h1>
          <p className="text-[14px] text-bloom-muted">
            {result.totalDocs} total — retained 2 years per §172.201(e).
          </p>
        </div>
        <Link
          href="/ops/hazmat"
          className="inline-flex items-center gap-1 rounded-md bg-bloom-navy px-4 py-2 text-[13px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
        >
          New shipment →
        </Link>
      </header>

      {result.docs.length === 0 ? (
        <div className="rounded-md bg-white p-10 text-center text-[14px] text-bloom-muted ring-1 ring-bloom-navy/10">
          No shipments yet. Start one from the{' '}
          <Link
            href="/ops/hazmat"
            className="font-bold text-bloom-navy underline-offset-4 hover:underline"
          >
            Generator
          </Link>
          .
        </div>
      ) : (
        <div className="overflow-hidden rounded-md bg-white ring-1 ring-bloom-navy/10">
          <table className="w-full text-[13px]">
            <thead className="bg-bloom-cream/60 text-left text-[10px] font-bold uppercase tracking-[0.08em] text-bloom-muted">
              <tr>
                <th className="px-4 py-3">BOL Ref</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Carrier</th>
                <th className="px-4 py-3">Consignee</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bloom-navy/8">
              {result.docs.map((s) => (
                <tr key={String(s.id)} className="hover:bg-bloom-cream/40">
                  <td className="px-4 py-3">
                    <Link
                      href={`/ops/hazmat?id=${s.id}`}
                      className="font-bold text-bloom-navy underline-offset-4 hover:underline"
                    >
                      {s.bolRef || `#${s.id}`}
                    </Link>
                    {s.proNumber ? (
                      <div className="mt-0.5 text-[11px] text-bloom-muted">
                        PRO {s.proNumber}
                      </div>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-bloom-navy">{fmtDate(s.dateTendered)}</td>
                  <td className="px-4 py-3 text-bloom-navy">{s.carrier || ''}</td>
                  <td className="px-4 py-3 text-bloom-navy">{s.consignee?.name || ''}</td>
                  <td className="px-4 py-3 text-bloom-navy">{s.productType || ''}</td>
                  <td className="px-4 py-3">
                    {s.status ? (
                      <span
                        className={cn(
                          'inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]',
                          STATUS_COLORS[s.status] || 'bg-bloom-muted/15 text-bloom-muted',
                        )}
                      >
                        {s.status}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-[11px] text-bloom-muted">
                    {fmtDate(s.updatedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
