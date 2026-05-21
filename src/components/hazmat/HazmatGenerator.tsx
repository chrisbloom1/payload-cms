'use client'

import { useCallback, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  EMPTY_DRAFT,
  PRODUCT_TYPE_LABELS,
  applyProductType,
  type ProductType,
  type ShipmentDraft,
} from './types'
import { HazmatPreview } from './HazmatPreview'

// Top-level Generator component. Left panel = form sections, right
// panel = live preview that mirrors the Shipper's Declaration PDF
// layout. State lives here so the preview updates on every keystroke
// without prop-drilling through every field.
//
// PDF generation (Step 5) will POST the same draft to /api/hazmat/generate.
// BOL extraction (Step 4) will POST a file to /api/hazmat/extract and
// merge the response into draft via setDraft({...draft, ...response}).

export function HazmatGenerator() {
  const [draft, setDraft] = useState<ShipmentDraft>(EMPTY_DRAFT)
  const [isExtracting, setIsExtracting] = useState(false)
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)

  const set = useCallback(
    <K extends keyof ShipmentDraft>(key: K, value: ShipmentDraft[K]) =>
      setDraft((d) => ({ ...d, [key]: value })),
    [],
  )

  const onProductTypeChange = useCallback(
    (next: ProductType) => setDraft((d) => applyProductType(d, next)),
    [],
  )

  const onClear = useCallback(() => {
    if (!confirm('Clear all fields?')) return
    // Keep persistent defaults (signer, emergency, carrier prefs)
    setDraft((d) => ({
      ...EMPTY_DRAFT,
      signerName: d.signerName,
      signerTitle: d.signerTitle,
      emergencyPhone: d.emergencyPhone,
      chemtrecContract: d.chemtrecContract,
      carrier: d.carrier,
    }))
    setToast({ msg: 'Cleared.', type: 'ok' })
    setTimeout(() => setToast(null), 2000)
  }, [])

  const onBolUpload = useCallback(async (file: File) => {
    setIsExtracting(true)
    setToast(null)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/hazmat/extract', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || `extract failed (${res.status})`)
      }
      const extracted = data.extracted as Partial<ShipmentDraft>
      // Shallow-merge only non-empty fields so the user's defaults
      // (signer, emergency phone, special notes) survive an extract.
      setDraft((d) => {
        const next = { ...d }
        for (const [k, v] of Object.entries(extracted)) {
          if (typeof v === 'string' && v.length > 0 && k in next) {
            ;(next as Record<string, unknown>)[k] = v
          }
        }
        // Re-derive UN# / shipping name / class if productType arrived
        if (typeof extracted.productType === 'string') {
          return applyProductType(next, extracted.productType as ProductType)
        }
        return next
      })
      setToast({ msg: 'BOL extracted — review fields and adjust.', type: 'ok' })
      setTimeout(() => setToast(null), 3500)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'extraction failed'
      setToast({ msg, type: 'err' })
      setTimeout(() => setToast(null), 4000)
    } finally {
      setIsExtracting(false)
    }
  }, [])

  const onGeneratePdf = useCallback(() => {
    setToast({ msg: 'PDF generation wires in Step 5.', type: 'err' })
    setTimeout(() => setToast(null), 2000)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <FormPanel
        draft={draft}
        set={set}
        onProductTypeChange={onProductTypeChange}
        onBolUpload={onBolUpload}
        onGeneratePdf={onGeneratePdf}
        onClear={onClear}
        isExtracting={isExtracting}
      />
      <PreviewPanel draft={draft} />

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            'fixed bottom-6 right-6 z-50 rounded-md px-4 py-2 text-[13px] font-medium shadow-lg',
            toast.type === 'ok'
              ? 'bg-bloom-mint text-bloom-navy'
              : 'bg-bloom-orange text-white',
          )}
        >
          {toast.msg}
        </div>
      ) : null}
    </div>
  )
}

// =============================================================
// Form (left)
// =============================================================

interface FormPanelProps {
  draft: ShipmentDraft
  set: <K extends keyof ShipmentDraft>(key: K, value: ShipmentDraft[K]) => void
  onProductTypeChange: (next: ProductType) => void
  onBolUpload: (file: File) => Promise<void>
  onGeneratePdf: () => void
  onClear: () => void
  isExtracting: boolean
}

function FormPanel({
  draft,
  set,
  onProductTypeChange,
  onBolUpload,
  onGeneratePdf,
  onClear,
  isExtracting,
}: FormPanelProps) {
  return (
    <section className="flex flex-col gap-4">
      <BolDropzone onFile={onBolUpload} isProcessing={isExtracting} />

      <Panel num={2} title="Shipment Identifiers">
        <Grid cols={2}>
          <Field label="BOL Ref / Customer Ref">
            <Input
              value={draft.bolRef}
              onChange={(v) => set('bolRef', v)}
              placeholder="BL-BOMO-XXXX"
            />
          </Field>
          <Field label="Carrier Pro #">
            <Input value={draft.proNumber} onChange={(v) => set('proNumber', v)} />
          </Field>
          <Field label="Date Tendered">
            <Input
              type="date"
              value={draft.dateTendered}
              onChange={(v) => set('dateTendered', v)}
            />
          </Field>
          <Field label="Carrier">
            <Input
              value={draft.carrier}
              onChange={(v) => set('carrier', v)}
              placeholder="Pilot Freight Services"
            />
          </Field>
        </Grid>
      </Panel>

      <Panel num={3} title="Shipper / Offeror (FROM)">
        <Grid cols={2}>
          <Field label="Company" colSpan={2}>
            <Input
              value={draft.shipperCompany}
              onChange={(v) => set('shipperCompany', v)}
            />
          </Field>
          <Field label="Address" colSpan={2}>
            <Input
              value={draft.shipperAddress}
              onChange={(v) => set('shipperAddress', v)}
            />
          </Field>
          <Field label="City, State, ZIP" colSpan={2}>
            <Input
              value={draft.shipperCityStateZip}
              onChange={(v) => set('shipperCityStateZip', v)}
            />
          </Field>
          <Field label="Site Contact + Phone" colSpan={2}>
            <Input
              value={draft.shipperSiteContact}
              onChange={(v) => set('shipperSiteContact', v)}
              placeholder="Larry — 586-883-0670"
            />
          </Field>
        </Grid>
      </Panel>

      <Panel num={4} title="Consignee (TO)">
        <Grid cols={2}>
          <Field label="Name / Company" colSpan={2}>
            <Input
              value={draft.consigneeName}
              onChange={(v) => set('consigneeName', v)}
            />
          </Field>
          <Field label="Address" colSpan={2}>
            <Input
              value={draft.consigneeAddress}
              onChange={(v) => set('consigneeAddress', v)}
            />
          </Field>
          <Field label="City, State, ZIP" colSpan={2}>
            <Input
              value={draft.consigneeCityStateZip}
              onChange={(v) => set('consigneeCityStateZip', v)}
            />
          </Field>
          <Field label="Phone" colSpan={2}>
            <Input
              value={draft.consigneePhone}
              onChange={(v) => set('consigneePhone', v)}
            />
          </Field>
        </Grid>
      </Panel>

      <Panel num={5} title="Hazmat Description">
        <Field label="Product Type">
          <Select
            value={draft.productType}
            onChange={(v) => onProductTypeChange(v as ProductType)}
          >
            {Object.entries(PRODUCT_TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Field>
        <Grid cols={3}>
          <Field label="UN #">
            <Input
              value={draft.unNumber}
              onChange={(v) => set('unNumber', v)}
              className="font-bold"
            />
          </Field>
          <Field label="Proper Shipping Name" colSpan={2}>
            <Input
              value={draft.shippingName}
              onChange={(v) => set('shippingName', v)}
            />
          </Field>
          <Field label="Hazard Class">
            <Input
              value={draft.hazardClass}
              onChange={(v) => set('hazardClass', v)}
            />
          </Field>
          <Field label="Packing Group">
            <Input
              value={draft.packingGroup}
              onChange={(v) => set('packingGroup', v)}
              placeholder="(none for Class 9)"
            />
          </Field>
          <Field label="Article Name">
            <Input
              value={draft.productName}
              onChange={(v) => set('productName', v)}
              placeholder="e.g. Bo E-Scooter"
            />
          </Field>
        </Grid>
        <Grid cols={2}>
          <Field label="No. of Units">
            <Input
              type="number"
              value={draft.numUnits}
              onChange={(v) => set('numUnits', v)}
            />
          </Field>
          <Field label="Container Type">
            <Input
              value={draft.containerType}
              onChange={(v) => set('containerType', v)}
            />
          </Field>
          <Field label="Dimensions (L × W × H in)">
            <Input
              value={draft.dimensions}
              onChange={(v) => set('dimensions', v)}
              placeholder="47 × 15 × 47"
            />
          </Field>
          <Field label="Total Weight (lbs)">
            <Input
              type="number"
              value={draft.totalWeight}
              onChange={(v) => set('totalWeight', v)}
            />
          </Field>
          <Field label="Battery Wh (informational)" colSpan={2}>
            <Input
              value={draft.batteryWh}
              onChange={(v) => set('batteryWh', v)}
              placeholder="e.g. 672"
            />
          </Field>
        </Grid>
      </Panel>

      <Panel num={6} title="Emergency Response Contact">
        <Field label="24/7 Emergency Phone">
          <Input
            value={draft.emergencyPhone}
            onChange={(v) => set('emergencyPhone', v)}
          />
        </Field>
        <Field label="CHEMTREC Contract # (optional)">
          <Input
            value={draft.chemtrecContract}
            onChange={(v) => set('chemtrecContract', v)}
          />
        </Field>
        <p className="-mt-1 text-[10px] leading-relaxed text-bloom-muted">
          Per §172.604, must be monitored 24/7 by someone with hazmat
          knowledge or immediate access to it. CHEMTREC (1-800-424-9300)
          is the standard option if you don&apos;t have in-house coverage.
        </p>
      </Panel>

      <Panel num={7} title="Shipper's Certification">
        <Grid cols={2}>
          <Field label="Signed By (Name)">
            <Input
              value={draft.signerName}
              onChange={(v) => set('signerName', v)}
            />
          </Field>
          <Field label="Title">
            <Input
              value={draft.signerTitle}
              onChange={(v) => set('signerTitle', v)}
            />
          </Field>
          <Field label="Handling / Compliance Notes (one per line)" colSpan={2}>
            <Textarea
              value={draft.specialNotes}
              onChange={(v) => set('specialNotes', v)}
              rows={5}
            />
          </Field>
        </Grid>
      </Panel>

      <div className="flex flex-wrap items-center justify-end gap-2 pb-4">
        <button
          type="button"
          onClick={onClear}
          className="rounded-md border border-bloom-navy/20 bg-white px-4 py-2 text-[13px] font-medium text-bloom-navy transition-colors hover:border-bloom-navy"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={onGeneratePdf}
          className="rounded-md bg-bloom-navy px-5 py-2 text-[13px] font-bold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
        >
          Generate PDF
        </button>
      </div>
    </section>
  )
}

// =============================================================
// Preview (right)
// =============================================================

function PreviewPanel({ draft }: { draft: ShipmentDraft }) {
  return (
    <section className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-bloom-muted">
        Live preview
      </p>
      <HazmatPreview draft={draft} />
    </section>
  )
}

// =============================================================
// Reusable UI primitives — kept inline so the form file is one
// shop-around-able unit. Promote to /components/hazmat/ui.tsx if
// they end up reused by Knowledge Hub or shipment list views.
// =============================================================

function Panel({
  num,
  title,
  children,
}: {
  num: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-md bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="mb-3 flex items-center justify-between border-b-2 border-bloom-navy pb-1.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-bloom-navy">
          {title}
        </span>
        <span className="rounded-full bg-bloom-navy px-2 py-0.5 text-[10px] font-bold text-white">
          {num}
        </span>
      </div>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function Grid({
  cols,
  children,
}: {
  cols: 2 | 3
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'grid gap-3',
        cols === 2 ? 'grid-cols-2' : 'grid-cols-3',
      )}
    >
      {children}
    </div>
  )
}

function Field({
  label,
  colSpan,
  children,
}: {
  label: string
  colSpan?: 2
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col', colSpan === 2 && 'col-span-2')}>
      <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.05em] text-bloom-muted">
        {label}
      </label>
      {children}
    </div>
  )
}

function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  className,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: 'text' | 'number' | 'date'
  className?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn(
        'w-full rounded-md border border-bloom-navy/15 bg-white px-2.5 py-1.5 text-[13px] text-bloom-navy transition-colors',
        'focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10',
        className,
      )}
    />
  )
}

function Textarea({
  value,
  onChange,
  rows = 3,
}: {
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full rounded-md border border-bloom-navy/15 bg-white px-2.5 py-1.5 text-[13px] text-bloom-navy transition-colors focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10"
    />
  )
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string
  onChange: (v: string) => void
  children: React.ReactNode
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-bloom-navy/15 bg-white px-2.5 py-1.5 text-[13px] text-bloom-navy transition-colors focus:border-bloom-navy focus:outline-none focus:ring-2 focus:ring-bloom-navy/10"
    >
      {children}
    </select>
  )
}

function BolDropzone({
  onFile,
  isProcessing,
}: {
  onFile: (file: File) => Promise<void>
  isProcessing: boolean
}) {
  const [dragging, setDragging] = useState(false)

  return (
    <div className="rounded-md bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="mb-3 flex items-center justify-between border-b-2 border-bloom-navy pb-1.5">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-bloom-navy">
          Auto-fill from carrier BOL
        </span>
        <span className="rounded-full bg-bloom-navy px-2 py-0.5 text-[10px] font-bold text-white">
          1
        </span>
      </div>

      <label
        onDragOver={(e) => {
          e.preventDefault()
          if (!isProcessing) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (isProcessing) return
          const f = e.dataTransfer.files[0]
          if (f && f.type === 'application/pdf') onFile(f)
        }}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed px-6 py-7 text-center transition-colors',
          dragging
            ? 'border-bloom-orange bg-bloom-orange/5'
            : 'border-bloom-navy/20 bg-bloom-cream/50 hover:border-bloom-navy/40',
          isProcessing && 'pointer-events-none opacity-70',
        )}
      >
        <input
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) onFile(f)
          }}
        />
        {isProcessing ? (
          <div className="flex items-center gap-2 text-[13px] text-bloom-navy">
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-bloom-navy border-t-transparent" />
            Reading BOL and extracting fields…
          </div>
        ) : (
          <>
            <p className="text-[14px] font-semibold text-bloom-navy">
              Drop a carrier BOL PDF here
            </p>
            <p className="mt-1 text-[12px] text-bloom-muted">
              Pilot, FedEx Freight, XPO, Old Dominion — Claude reads it and
              fills the form.
            </p>
            <p className="mt-2 text-[11px] text-bloom-muted/70">or click to browse</p>
          </>
        )}
      </label>
    </div>
  )
}
