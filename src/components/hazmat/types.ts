/**
 * Shared types and lookup tables for the hazmat hub. Mirrors the
 * HazmatShipments collection so we can round-trip cleanly.
 *
 * Source of truth for PRODUCT_TYPES: bloom-hazmat-hub.html prototype.
 * Each product type maps to a UN number, proper shipping name, hazard
 * class, packing group (blank for Class 9), and a CFR note.
 */

export type ProductType =
  | 'escooter'
  | 'ebike'
  | 'emotorcycle'
  | 'ev_other'
  | 'drone'
  | 'robot'
  | 'equipment_installed'
  | 'battery_packed'
  | 'battery_alone'
  | 'lithium_metal_alone'

export interface ProductSpec {
  un: string
  name: string
  cls: string
  pg: string
  note: string
}

export const PRODUCT_TYPES: Record<ProductType, ProductSpec> = {
  escooter: {
    un: 'UN3171',
    name: 'Battery-powered vehicle',
    cls: '9',
    pg: '',
    note: 'Special Provision 240 — self-propelled vehicle, Li-ion installed',
  },
  ebike: {
    un: 'UN3171',
    name: 'Battery-powered vehicle',
    cls: '9',
    pg: '',
    note: 'Special Provision 240 — self-propelled vehicle, Li-ion installed',
  },
  emotorcycle: {
    un: 'UN3171',
    name: 'Battery-powered vehicle',
    cls: '9',
    pg: '',
    note: 'Special Provision 240 — self-propelled vehicle, Li-ion installed',
  },
  ev_other: {
    un: 'UN3171',
    name: 'Battery-powered vehicle',
    cls: '9',
    pg: '',
    note: 'Special Provision 240 — self-propelled vehicle, Li-ion installed',
  },
  drone: {
    un: 'UN3481',
    name: 'Lithium ion batteries contained in equipment',
    cls: '9',
    pg: '',
    note: 'Battery contained in equipment per §173.185',
  },
  robot: {
    un: 'UN3481',
    name: 'Lithium ion batteries contained in equipment',
    cls: '9',
    pg: '',
    note: 'Battery contained in equipment per §173.185',
  },
  equipment_installed: {
    un: 'UN3481',
    name: 'Lithium ion batteries contained in equipment',
    cls: '9',
    pg: '',
    note: 'Battery contained in equipment per §173.185',
  },
  battery_packed: {
    un: 'UN3481',
    name: 'Lithium ion batteries packed with equipment',
    cls: '9',
    pg: '',
    note: 'Battery packed with equipment per §173.185',
  },
  battery_alone: {
    un: 'UN3480',
    name: 'Lithium ion batteries',
    cls: '9',
    pg: '',
    note: 'Standalone Li-ion battery per §173.185',
  },
  lithium_metal_alone: {
    un: 'UN3090',
    name: 'Lithium metal batteries',
    cls: '9',
    pg: '',
    note: 'Standalone Li-metal battery per §173.185',
  },
}

export const PRODUCT_TYPE_LABELS: Record<ProductType, string> = {
  escooter: 'E-Scooter (complete, Li-ion installed) → UN3171',
  ebike: 'E-Bike (complete, Li-ion installed) → UN3171',
  emotorcycle: 'E-Motorcycle (complete, Li-ion installed) → UN3171',
  ev_other: 'Other Battery-Powered Vehicle → UN3171',
  drone: 'Drone / UAS (Li-ion installed) → UN3481',
  robot: 'Robot / Equipment (Li-ion installed) → UN3481',
  equipment_installed: 'Equipment with battery installed → UN3481',
  battery_packed: 'Battery packed with equipment (not installed) → UN3481',
  battery_alone: 'Standalone Li-ion battery → UN3480',
  lithium_metal_alone: 'Standalone Li-metal battery → UN3090',
}

// The full state of an in-progress shipment draft. Field names align
// with the Payload collection so a serialized draft maps 1:1 to a
// collection document. Numbers stored as strings here because they
// come from <input> elements; we coerce on save.
export interface ShipmentDraft {
  bolRef: string
  proNumber: string
  dateTendered: string
  carrier: string

  shipperCompany: string
  shipperAddress: string
  shipperCityStateZip: string
  shipperSiteContact: string

  consigneeName: string
  consigneeAddress: string
  consigneeCityStateZip: string
  consigneePhone: string

  productType: ProductType
  productName: string
  unNumber: string
  shippingName: string
  hazardClass: string
  packingGroup: string
  numUnits: string
  containerType: string
  dimensions: string
  totalWeight: string
  batteryWh: string
  specialNotes: string

  emergencyPhone: string
  chemtrecContract: string

  signerName: string
  signerTitle: string
}

export const DEFAULT_SPECIAL_NOTES = [
  'Liftgate delivery required at destination.',
  'Class 9 hazard label affixed to crate per §172.400+.',
  'Class 9 vehicle placard NOT required — single non-bulk package under 1,001 lb aggregate threshold (§172.504(c)).',
  'Emergency Response Information: ERG Guide 147 applies; SDS available on request.',
  'Battery conforms to UN 38.3 testing; equipment designed to prevent unintentional activation in transit.',
].join('\n')

export const EMPTY_DRAFT: ShipmentDraft = {
  bolRef: '',
  proNumber: '',
  dateTendered: '',
  carrier: '',

  shipperCompany: '',
  shipperAddress: '',
  shipperCityStateZip: '',
  shipperSiteContact: '',

  consigneeName: '',
  consigneeAddress: '',
  consigneeCityStateZip: '',
  consigneePhone: '',

  productType: 'escooter',
  productName: '',
  unNumber: PRODUCT_TYPES.escooter.un,
  shippingName: PRODUCT_TYPES.escooter.name,
  hazardClass: PRODUCT_TYPES.escooter.cls,
  packingGroup: PRODUCT_TYPES.escooter.pg,
  numUnits: '1',
  containerType: 'Crate',
  dimensions: '',
  totalWeight: '',
  batteryWh: '',
  specialNotes: DEFAULT_SPECIAL_NOTES,

  emergencyPhone: '313-473-7499',
  chemtrecContract: '',

  signerName: 'Christopher J Nolte II',
  signerTitle: 'President, Bloom',
}

// Apply the UN/name/class auto-fill when the user changes productType.
// Pure function — leaves the rest of the draft alone, only overwrites
// the three derived fields.
export function applyProductType(
  draft: ShipmentDraft,
  next: ProductType,
): ShipmentDraft {
  const spec = PRODUCT_TYPES[next]
  return {
    ...draft,
    productType: next,
    unNumber: spec.un,
    shippingName: spec.name,
    hazardClass: spec.cls,
    packingGroup: spec.pg,
  }
}
