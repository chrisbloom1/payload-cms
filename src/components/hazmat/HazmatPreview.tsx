import type { ShipmentDraft } from './types'

// Live preview matching the BL-BOMO-0036-shipper-declaration.pdf
// reference. Pure presentational — props in, JSX out, no state.
//
// The exact same markup will be reused server-side in /api/hazmat/generate
// (Step 5) to feed Puppeteer for PDF export, so pixel-tight Tailwind
// classes here ⇢ pixel-tight PDF.

interface HazmatPreviewProps {
  draft: ShipmentDraft
}

function fmtDate(iso: string): string {
  if (!iso) return ''
  const parts = iso.split('-')
  if (parts.length !== 3) return iso
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}

export function HazmatPreview({ draft }: HazmatPreviewProps) {
  const basicDescription = [
    draft.unNumber,
    draft.shippingName,
    draft.hazardClass,
  ]
    .filter(Boolean)
    .join(', ') + (draft.packingGroup ? `, ${draft.packingGroup}` : '')

  const numUnits = draft.numUnits || '1'
  const containerType = draft.containerType || 'Crate'
  const articleLine = [
    draft.productName ? `Article: ${numUnits} × ${draft.productName}` : '',
    draft.batteryWh ? `lithium-ion battery installed (${draft.batteryWh} Wh, UN 38.3 tested)` : '',
  ]
    .filter(Boolean)
    .join(' — ')

  const notesLines = draft.specialNotes
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)

  return (
    <article
      id="hazmat-preview"
      className="font-helvetica mx-auto w-full max-w-[840px] rounded-md bg-white p-8 text-[10px] leading-tight text-bloom-navy shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
    >
      <header className="flex items-start justify-between border-b border-bloom-navy/15 pb-4">
        <div>
          <p className="text-[20px] font-bold leading-none text-bloom-navy">
            Bloom
            <span className="ml-0.5 inline-block translate-y-[-2px] text-bloom-orange">▾</span>
          </p>
          <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-bloom-muted">
            Network Operations — Shipper&apos;s Agent
          </p>
        </div>
        <div className="text-right">
          <p className="text-[13px] font-bold uppercase tracking-[0.04em] text-bloom-navy">
            Shipper&apos;s Declaration for Dangerous Goods
          </p>
          <p className="mt-1 text-[9px] text-bloom-muted">
            Attached to Carrier BOL — Per 49 CFR §172.202–204
          </p>
        </div>
      </header>

      {/* Header row: BOL ref, PRO#, date, carrier */}
      <table className="mt-4 w-full border-collapse border border-bloom-navy/15 text-[10px]">
        <tbody>
          <tr>
            {[
              { label: 'BOL Ref / Cust Ref', value: draft.bolRef },
              { label: 'Carrier Pro #', value: draft.proNumber },
              { label: 'Date Tendered', value: fmtDate(draft.dateTendered) },
              { label: 'Carrier', value: draft.carrier },
            ].map((c) => (
              <td
                key={c.label}
                className="w-1/4 border border-bloom-navy/15 px-2.5 py-2 align-top"
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-muted">
                  {c.label}
                </p>
                <p className="mt-1 text-[11px] font-bold text-bloom-navy">
                  {c.value || <span className="text-bloom-muted/40">—</span>}
                </p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Shipper + consignee */}
      <table className="mt-2 w-full border-collapse border border-bloom-navy/15 text-[10px]">
        <tbody>
          <tr>
            <td className="w-1/2 border border-bloom-navy/15 px-3 py-2 align-top">
              <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-muted">
                Shipper / Offeror (From)
              </p>
              <FieldRow label="Company" value={draft.shipperCompany} />
              <FieldRow label="Address" value={draft.shipperAddress} />
              <FieldRow label="City / State / Zip" value={draft.shipperCityStateZip} />
              <FieldRow label="Site Contact" value={draft.shipperSiteContact} />
            </td>
            <td className="w-1/2 border border-bloom-navy/15 px-3 py-2 align-top">
              <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-muted">
                Consignee (To)
              </p>
              <FieldRow label="Name" value={draft.consigneeName} />
              <FieldRow label="Address" value={draft.consigneeAddress} />
              <FieldRow label="City / State / Zip" value={draft.consigneeCityStateZip} />
              <FieldRow label="Phone" value={draft.consigneePhone} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Hazmat description block */}
      <table className="mt-2 w-full border-collapse border border-bloom-navy/15 text-[10px]">
        <thead>
          <tr className="bg-bloom-cream/60">
            <th className="w-[18%] border border-bloom-navy/15 px-2 py-1 text-left text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-navy">
              No. of Units<br />& Container Type
            </th>
            <th className="w-[5%] border border-bloom-navy/15 px-2 py-1 text-center text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-navy">
              HM
            </th>
            <th className="w-[59%] border border-bloom-navy/15 px-2 py-1 text-left text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-navy">
              Basic Description
              <span className="ml-1 text-bloom-muted font-normal normal-case tracking-normal">
                §172.202(B): ID#, Shipping Name, Hazard Class, Packing Group
              </span>
            </th>
            <th className="w-[18%] border border-bloom-navy/15 px-2 py-1 text-left text-[8px] font-bold uppercase tracking-[0.06em] text-bloom-navy">
              Total Quantity<br />(Net Weight)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-bloom-navy/15 px-2 py-2 align-top">
              <p className="font-bold">
                {numUnits} {containerType}
              </p>
              {draft.dimensions ? (
                <p className="mt-0.5 text-bloom-muted">{draft.dimensions} in</p>
              ) : null}
            </td>
            <td className="border border-bloom-navy/15 px-2 py-2 text-center align-top">
              <span className="font-bold text-bloom-orange">X</span>
            </td>
            <td className="border border-bloom-navy/15 px-2 py-2 align-top">
              <p className="font-bold text-bloom-navy">
                {basicDescription || (
                  <span className="text-bloom-muted/40">—</span>
                )}
              </p>
              {articleLine ? (
                <p className="mt-1 italic text-bloom-muted">
                  {articleLine}
                  {draft.productName
                    ? '. Battery securely fastened in vehicle frame; terminals protected against short circuit per §173.220.'
                    : ''}
                </p>
              ) : null}
            </td>
            <td className="border border-bloom-navy/15 px-2 py-2 align-top">
              <p className="font-bold">
                {draft.totalWeight ? `${draft.totalWeight} lbs` : (
                  <span className="text-bloom-muted/40">—</span>
                )}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Emergency contact highlight */}
      <div className="mt-2 rounded-sm border-l-4 border-bloom-orange bg-bloom-cream/60 px-3 py-2">
        <p className="text-[10px] font-bold">
          Emergency Contact: {draft.emergencyPhone || <span className="text-bloom-muted/40">—</span>}
          {draft.chemtrecContract ? (
            <span className="ml-2 font-normal text-bloom-muted">
              (CHEMTREC contract #{draft.chemtrecContract})
            </span>
          ) : null}
        </p>
        <p className="mt-0.5 text-[9px] text-bloom-muted">
          Offeror: {draft.shipperCompany || 'Shipper'} — Bloom acting as authorized shipping agent
        </p>
      </div>

      {/* Certification block */}
      <p className="mt-3 text-[9px] italic text-bloom-navy">
        &ldquo;This is to certify that the above-named materials are properly
        classified, described, packaged, marked and labeled, and are in proper
        condition for transportation according to the applicable regulations of
        the Department of Transportation.&rdquo;
      </p>
      <table className="mt-3 w-full border-collapse text-[9px]">
        <tbody>
          <tr>
            <td className="w-[40%] border-b border-bloom-navy/40 px-1 pb-1 align-bottom">
              {/* Signature image plugs in here in Step 5 (PDF). For the
                  preview we just show the typed name. */}
              <span className="text-[14px] font-bold italic text-bloom-navy">
                {draft.signerName}
              </span>
            </td>
            <td className="w-[30%] border-b border-bloom-navy/40 px-3 pb-1 align-bottom font-bold">
              {draft.signerName}
            </td>
            <td className="w-[20%] border-b border-bloom-navy/40 px-3 pb-1 align-bottom font-bold">
              {draft.signerTitle}
            </td>
            <td className="w-[10%] border-b border-bloom-navy/40 px-3 pb-1 align-bottom font-bold">
              {fmtDate(draft.dateTendered)}
            </td>
          </tr>
          <tr className="text-[8px] uppercase tracking-[0.06em] text-bloom-muted">
            <td className="px-1 pt-1">Signature of Shipper&apos;s Authorized Agent</td>
            <td className="px-3 pt-1">Printed Name</td>
            <td className="px-3 pt-1">Title</td>
            <td className="px-3 pt-1">Date</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-2 text-[8px] italic text-bloom-muted">
        Electronically signed by {draft.signerName}, {draft.signerTitle} —{' '}
        {fmtDate(draft.dateTendered) || '—'}. Signed in accordance with 49 CFR
        §172.204(d)(2): &ldquo;certifications may be signed manually, by typewriter,
        or by other mechanical means.&rdquo;
      </p>

      {/* Handling notes */}
      {notesLines.length > 0 ? (
        <div className="mt-3 rounded-sm border border-bloom-navy/15 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-[0.06em] text-bloom-navy">
            Handling & Compliance Notes
          </p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-[9px] text-bloom-navy">
            {notesLines.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Footer */}
      <p className="mt-3 text-[8px] leading-snug text-bloom-muted">
        This Shipper&apos;s Declaration is attached to and incorporated with{' '}
        {draft.carrier || 'the carrier'} Non-Negotiable Waybill
        {draft.proNumber ? ` (Pro# ${draft.proNumber})` : ''} and travels with
        the shipment. Shipper retains a copy for 2 years per §172.201(e).
        Prepared in accordance with 49 CFR Parts 100–185 (HMR).
        {draft.unNumber === 'UN3171'
          ? ' UN3171 applies under Special Provision 240 (49 CFR §172.102) for self-propelled vehicles powered by lithium-ion batteries.'
          : ''}
      </p>
    </article>
  )
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-1 first:mt-0">
      <p className="text-[8px] uppercase tracking-[0.06em] text-bloom-muted">
        {label}
      </p>
      <p className="text-[11px] font-bold text-bloom-navy">
        {value || <span className="font-normal text-bloom-muted/40">—</span>}
      </p>
    </div>
  )
}
