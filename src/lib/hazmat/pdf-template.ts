import type { ShipmentDraft } from '@/components/hazmat/types'

// Self-contained HTML template for the Shipper's Declaration PDF.
// All CSS is inlined so headless Chrome doesn't need to make any
// external requests — keeps cold-start fast and the output
// deterministic.
//
// Layout mirrors BL-BOMO-0036-shipper-declaration.pdf and the
// on-screen HazmatPreview. Tweaks here must stay in sync with the
// preview if pixel parity matters (we keep them visually aligned,
// not class-for-class, since one is React + Tailwind and the other
// is raw HTML + scoped CSS).

function escape(s: string | number | null | undefined): string {
  if (s === null || s === undefined) return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fmtDate(iso: string): string {
  if (!iso) return ''
  const parts = iso.split('-')
  if (parts.length !== 3) return iso
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}

export interface RenderOpts {
  /** Base64-encoded PNG signature image. Optional; falls back to typed name. */
  signaturePngBase64?: string | null
}

export function renderHazmatPdfHtml(
  draft: ShipmentDraft,
  opts: RenderOpts = {},
): string {
  const basicDesc =
    [draft.unNumber, draft.shippingName, draft.hazardClass]
      .filter(Boolean)
      .join(', ') + (draft.packingGroup ? `, ${draft.packingGroup}` : '')

  const numUnits = draft.numUnits || '1'
  const containerType = draft.containerType || 'Crate'
  const articleLine = [
    draft.productName ? `Article: ${numUnits} × ${draft.productName}` : '',
    draft.batteryWh
      ? `lithium-ion battery installed (${draft.batteryWh} Wh, UN 38.3 tested)`
      : '',
  ]
    .filter(Boolean)
    .join(' — ')

  const notesLines = draft.specialNotes
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)

  const signatureCell = opts.signaturePngBase64
    ? `<img src="data:image/png;base64,${opts.signaturePngBase64}" alt="" style="max-height: 40px; max-width: 220px;" />`
    : `<span class="sig-script">${escape(draft.signerName)}</span>`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Shipper's Declaration — ${escape(draft.bolRef)}</title>
<style>
  @page { size: Letter; margin: 0.5in; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #1a1340;
    font-size: 10px;
    line-height: 1.35;
    background: white;
  }
  .doc { padding: 0; }
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid rgba(26,19,64,0.2);
    padding-bottom: 14px;
    margin-bottom: 12px;
  }
  .brand {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.5px;
  }
  .brand .glyph { color: #ff4f1f; margin-left: 2px; }
  .brand-sub {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #666;
    margin-top: 4px;
  }
  .title { text-align: right; }
  .title h1 {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .title .sub {
    margin-top: 3px;
    font-size: 9px;
    color: #666;
  }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid rgba(26,19,64,0.18); padding: 6px 8px; vertical-align: top; }
  th { background: #f6f6f8; text-align: left; font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .field-label {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #666;
    margin-bottom: 3px;
  }
  .field-value { font-size: 11px; font-weight: 700; color: #1a1340; }
  .em-block {
    margin-top: 10px;
    border-left: 4px solid #ff4f1f;
    background: #fff4a3;
    padding: 8px 12px;
  }
  .em-block .label { font-size: 10px; font-weight: 700; }
  .em-block .sub { font-size: 9px; color: #666; margin-top: 2px; }
  .cert-quote { margin-top: 12px; font-size: 9px; font-style: italic; }
  .sig-line { margin-top: 14px; width: 100%; border-collapse: collapse; }
  .sig-line td { border: none; border-bottom: 1px solid rgba(26,19,64,0.4); padding-bottom: 4px; vertical-align: bottom; }
  .sig-line .meta { padding-top: 4px; border: none; font-size: 8px; text-transform: uppercase; letter-spacing: 0.06em; color: #666; }
  .sig-script {
    font-family: "Brush Script MT", cursive;
    font-size: 22px;
    color: #1a1340;
  }
  .notes {
    margin-top: 12px;
    border: 1px solid rgba(26,19,64,0.18);
    padding: 8px 12px;
  }
  .notes h3 {
    margin: 0 0 4px;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .notes ul { margin: 0; padding-left: 16px; }
  .notes li { font-size: 9px; margin-bottom: 1px; }
  .footer { margin-top: 12px; font-size: 8px; line-height: 1.45; color: #666; }
  .hm-mark { color: #ff4f1f; font-weight: 700; text-align: center; }
  .placeholder { color: rgba(26,19,64,0.3); font-weight: normal; }
</style>
</head>
<body>
  <div class="doc">
    <header>
      <div>
        <div class="brand">Bloom<span class="glyph">▾</span></div>
        <div class="brand-sub">Network Operations — Shipper&apos;s Agent</div>
      </div>
      <div class="title">
        <h1>Shipper&apos;s Declaration for Dangerous Goods</h1>
        <div class="sub">Attached to Carrier BOL — Per 49 CFR §172.202–204</div>
      </div>
    </header>

    <table>
      <tr>
        ${[
          { label: 'BOL Ref / Cust Ref', value: draft.bolRef },
          { label: 'Carrier Pro #', value: draft.proNumber },
          { label: 'Date Tendered', value: fmtDate(draft.dateTendered) },
          { label: 'Carrier', value: draft.carrier },
        ]
          .map(
            (c) => `<td style="width:25%;">
              <div class="field-label">${escape(c.label)}</div>
              <div class="field-value">${
                c.value ? escape(c.value) : '<span class="placeholder">—</span>'
              }</div>
            </td>`,
          )
          .join('')}
      </tr>
    </table>

    <table style="margin-top: 6px;">
      <tr>
        <td style="width:50%;">
          <div class="field-label" style="margin-bottom: 6px;">Shipper / Offeror (From)</div>
          ${[
            ['Company', draft.shipperCompany],
            ['Address', draft.shipperAddress],
            ['City / State / Zip', draft.shipperCityStateZip],
            ['Site Contact', draft.shipperSiteContact],
          ]
            .map(
              ([l, v]) =>
                `<div style="margin-top:4px"><div class="field-label">${escape(l)}</div><div class="field-value">${v ? escape(v) : '<span class="placeholder">—</span>'}</div></div>`,
            )
            .join('')}
        </td>
        <td style="width:50%;">
          <div class="field-label" style="margin-bottom: 6px;">Consignee (To)</div>
          ${[
            ['Name', draft.consigneeName],
            ['Address', draft.consigneeAddress],
            ['City / State / Zip', draft.consigneeCityStateZip],
            ['Phone', draft.consigneePhone],
          ]
            .map(
              ([l, v]) =>
                `<div style="margin-top:4px"><div class="field-label">${escape(l)}</div><div class="field-value">${v ? escape(v) : '<span class="placeholder">—</span>'}</div></div>`,
            )
            .join('')}
        </td>
      </tr>
    </table>

    <table style="margin-top: 6px;">
      <thead>
        <tr>
          <th style="width: 18%;">No. of Units<br />& Container Type</th>
          <th style="width: 5%; text-align: center;">HM</th>
          <th style="width: 59%;">Basic Description <span style="font-weight: normal; color: #666; text-transform: none; letter-spacing: 0;">§172.202(B): ID#, Shipping Name, Hazard Class, Packing Group</span></th>
          <th style="width: 18%;">Total Quantity<br />(Net Weight)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style="font-weight:700;">${escape(numUnits)} ${escape(containerType)}</div>
            ${draft.dimensions ? `<div style="color: #666; margin-top: 2px;">${escape(draft.dimensions)} in</div>` : ''}
          </td>
          <td class="hm-mark">X</td>
          <td>
            <div style="font-weight: 700;">${basicDesc ? escape(basicDesc) : '<span class="placeholder">—</span>'}</div>
            ${articleLine ? `<div style="font-style: italic; color: #666; margin-top: 4px;">${escape(articleLine)}${draft.productName ? '. Battery securely fastened in vehicle frame; terminals protected against short circuit per §173.220.' : ''}</div>` : ''}
          </td>
          <td>
            <div style="font-weight: 700;">${draft.totalWeight ? `${escape(draft.totalWeight)} lbs` : '<span class="placeholder">—</span>'}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="em-block">
      <div class="label">EMERGENCY CONTACT: ${draft.emergencyPhone ? escape(draft.emergencyPhone) : '<span class="placeholder">—</span>'}${draft.chemtrecContract ? `&nbsp;&nbsp;<span style="font-weight:normal;color:#666;">(CHEMTREC contract #${escape(draft.chemtrecContract)})</span>` : ''}</div>
      <div class="sub">Offeror: ${draft.shipperCompany ? escape(draft.shipperCompany) : 'Shipper'} — Bloom acting as authorized shipping agent</div>
    </div>

    <p class="cert-quote">&ldquo;This is to certify that the above-named materials are properly classified, described, packaged, marked and labeled, and are in proper condition for transportation according to the applicable regulations of the Department of Transportation.&rdquo;</p>

    <table class="sig-line">
      <tr>
        <td style="width: 40%;">${signatureCell}</td>
        <td style="width: 30%; padding-left: 12px; font-weight: 700;">${escape(draft.signerName)}</td>
        <td style="width: 20%; padding-left: 12px; font-weight: 700;">${escape(draft.signerTitle)}</td>
        <td style="width: 10%; padding-left: 12px; font-weight: 700;">${escape(fmtDate(draft.dateTendered))}</td>
      </tr>
      <tr>
        <td class="meta">Signature of Shipper&apos;s Authorized Agent</td>
        <td class="meta" style="padding-left: 12px;">Printed Name</td>
        <td class="meta" style="padding-left: 12px;">Title</td>
        <td class="meta" style="padding-left: 12px;">Date</td>
      </tr>
    </table>

    <p style="margin-top: 6px; font-size: 8px; font-style: italic; color: #666;">
      Electronically signed by ${escape(draft.signerName)}, ${escape(draft.signerTitle)} — ${escape(fmtDate(draft.dateTendered)) || '—'}. Signed in accordance with 49 CFR §172.204(d)(2): &ldquo;certifications may be signed manually, by typewriter, or by other mechanical means.&rdquo;
    </p>

    ${
      notesLines.length > 0
        ? `<div class="notes">
            <h3>Handling &amp; Compliance Notes</h3>
            <ul>${notesLines.map((n) => `<li>${escape(n)}</li>`).join('')}</ul>
          </div>`
        : ''
    }

    <p class="footer">
      This Shipper&apos;s Declaration is attached to and incorporated with ${escape(draft.carrier) || 'the carrier'} Non-Negotiable Waybill${draft.proNumber ? ` (Pro# ${escape(draft.proNumber)})` : ''} and travels with the shipment. Shipper retains a copy for 2 years per §172.201(e). Prepared in accordance with 49 CFR Parts 100–185 (HMR).${draft.unNumber === 'UN3171' ? ' UN3171 applies under Special Provision 240 (49 CFR §172.102) for self-propelled vehicles powered by lithium-ion batteries.' : ''}
    </p>
  </div>
</body>
</html>`
}
