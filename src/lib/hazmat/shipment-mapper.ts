import type { ShipmentDraft, ProductType } from '@/components/hazmat/types'
import { EMPTY_DRAFT } from '@/components/hazmat/types'

// Convert between the UI's flat ShipmentDraft and the nested
// HazmatShipments Payload document. Pure functions; keeps the route
// handlers focused on auth + I/O.
//
// The draft uses snake_case-free camelCase keys + everything-as-string
// (since values come from <input> elements). The collection has groups
// (shipper/consignee) + typed numbers/dates.

type HazmatDoc = Record<string, unknown> & {
  shipper?: Record<string, string>
  consignee?: Record<string, string>
}

function num(s: string | number | undefined | null): number | undefined {
  if (s === undefined || s === null || s === '') return undefined
  const n = typeof s === 'number' ? s : Number(s)
  return Number.isFinite(n) ? n : undefined
}

function dateIso(s: string | undefined | null): string | undefined {
  if (!s) return undefined
  // <input type="date"> emits YYYY-MM-DD already. Payload normalizes
  // to UTC midnight which is the right behavior for a tendered-on
  // date field.
  return s
}

export function coerceDraftToCollection(
  draft: ShipmentDraft,
): Record<string, unknown> {
  return {
    bolRef: draft.bolRef,
    proNumber: draft.proNumber || undefined,
    dateTendered: dateIso(draft.dateTendered),
    carrier: draft.carrier,

    shipper: {
      company: draft.shipperCompany || undefined,
      address: draft.shipperAddress || undefined,
      cityStateZip: draft.shipperCityStateZip || undefined,
      siteContact: draft.shipperSiteContact || undefined,
    },
    consignee: {
      name: draft.consigneeName || undefined,
      address: draft.consigneeAddress || undefined,
      cityStateZip: draft.consigneeCityStateZip || undefined,
      phone: draft.consigneePhone || undefined,
    },

    productType: draft.productType,
    productName: draft.productName || undefined,
    unNumber: draft.unNumber || undefined,
    shippingName: draft.shippingName || undefined,
    hazardClass: draft.hazardClass || undefined,
    packingGroup: draft.packingGroup || undefined,
    numUnits: num(draft.numUnits),
    containerType: draft.containerType || undefined,
    dimensions: draft.dimensions || undefined,
    totalWeight: num(draft.totalWeight),
    batteryWh: num(draft.batteryWh),
    specialNotes: draft.specialNotes || undefined,

    emergencyPhone: draft.emergencyPhone || undefined,
    chemtrecContract: draft.chemtrecContract || undefined,

    signerName: draft.signerName || undefined,
    signerTitle: draft.signerTitle || undefined,
  }
}

export function coerceDocToDraft(doc: HazmatDoc): ShipmentDraft {
  const shipper = doc.shipper ?? {}
  const consignee = doc.consignee ?? {}
  return {
    ...EMPTY_DRAFT,
    bolRef: (doc.bolRef as string) ?? '',
    proNumber: (doc.proNumber as string) ?? '',
    dateTendered: typeof doc.dateTendered === 'string'
      ? doc.dateTendered.slice(0, 10)
      : '',
    carrier: (doc.carrier as string) ?? '',

    shipperCompany: shipper.company ?? '',
    shipperAddress: shipper.address ?? '',
    shipperCityStateZip: shipper.cityStateZip ?? '',
    shipperSiteContact: shipper.siteContact ?? '',

    consigneeName: consignee.name ?? '',
    consigneeAddress: consignee.address ?? '',
    consigneeCityStateZip: consignee.cityStateZip ?? '',
    consigneePhone: consignee.phone ?? '',

    productType: ((doc.productType as ProductType) ?? 'escooter'),
    productName: (doc.productName as string) ?? '',
    unNumber: (doc.unNumber as string) ?? '',
    shippingName: (doc.shippingName as string) ?? '',
    hazardClass: (doc.hazardClass as string) ?? '',
    packingGroup: (doc.packingGroup as string) ?? '',
    numUnits: doc.numUnits != null ? String(doc.numUnits) : '1',
    containerType: (doc.containerType as string) ?? 'Crate',
    dimensions: (doc.dimensions as string) ?? '',
    totalWeight: doc.totalWeight != null ? String(doc.totalWeight) : '',
    batteryWh: doc.batteryWh != null ? String(doc.batteryWh) : '',
    specialNotes: (doc.specialNotes as string) ?? '',

    emergencyPhone: (doc.emergencyPhone as string) ?? EMPTY_DRAFT.emergencyPhone,
    chemtrecContract: (doc.chemtrecContract as string) ?? '',

    signerName: (doc.signerName as string) ?? EMPTY_DRAFT.signerName,
    signerTitle: (doc.signerTitle as string) ?? EMPTY_DRAFT.signerTitle,
  }
}
