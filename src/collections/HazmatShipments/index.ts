import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

/**
 * HazmatShipments — DOT Shipper's Declaration records for domestic
 * ground hazardous-material shipments handled by Bloom as offeror /
 * authorized shipping agent.
 *
 * Source: bloom-hazmat-production-spec.md "Data model" section. Stored
 * in Payload so the team gets a free admin browse view alongside the
 * dedicated /ops/hazmat workflow page.
 *
 * 49 CFR §172.201(e) requires retaining a copy of each declaration for
 * 2 years, so this collection is the system of record for audit.
 */

const PRODUCT_TYPES = [
  { value: 'escooter', label: 'E-scooter (UN3171)' },
  { value: 'ebike', label: 'E-bike (UN3171)' },
  { value: 'emotorcycle', label: 'E-motorcycle (UN3171)' },
  { value: 'ev_other', label: 'Other electric vehicle (UN3171)' },
  { value: 'drone', label: 'Drone (UN3481)' },
  { value: 'robot', label: 'Robot (UN3481)' },
  { value: 'equipment_installed', label: 'Equipment with battery installed (UN3481)' },
  { value: 'battery_packed', label: 'Battery packed with equipment (UN3481)' },
  { value: 'battery_alone', label: 'Lithium-ion battery standalone (UN3480)' },
  { value: 'lithium_metal_alone', label: 'Lithium metal battery standalone (UN3090)' },
] as const

const WEIGHT_TIERS = [
  { value: 'small', label: '< 1,001 lb (non-placarded)' },
  { value: 'placarded', label: '≥ 1,001 lb (placards required)' },
  { value: 'ftl', label: 'FTL / container load' },
] as const

const STATUSES = [
  { value: 'draft', label: 'Draft' },
  { value: 'signed', label: 'Signed' },
  { value: 'transmitted', label: 'Transmitted to carrier' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'archived', label: 'Archived' },
] as const

export const HazmatShipments: CollectionConfig = {
  slug: 'hazmat-shipments',
  labels: { singular: 'Hazmat Shipment', plural: 'Hazmat Shipments' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'Operations',
    description:
      'DOT Shipper’s Declarations for domestic ground hazmat shipments. Edited primarily via the /ops/hazmat workflow page; this view exists for browse/audit/compliance retention.',
    defaultColumns: ['bolRef', 'dateTendered', 'carrier', 'productType', 'status', 'updatedAt'],
    useAsTitle: 'bolRef',
  },
  fields: [
    // ----- Identifiers -----
    {
      type: 'row',
      fields: [
        {
          name: 'bolRef',
          type: 'text',
          required: true,
          index: true,
          admin: { description: 'BOL reference / customer ref (e.g. BL-BOMO-0036).' },
        },
        {
          name: 'proNumber',
          type: 'text',
          index: true,
          admin: { description: 'Carrier PRO / waybill number.' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'dateTendered',
          type: 'date',
          required: true,
          admin: { date: { pickerAppearance: 'dayOnly' } },
        },
        { name: 'carrier', type: 'text', required: true, admin: { description: 'Carrier name (e.g. Pilot Freight Services).' } },
      ],
    },

    // ----- Quantity tier (drives placarding logic) -----
    {
      name: 'weightTier',
      type: 'select',
      defaultValue: 'small',
      options: [...WEIGHT_TIERS],
      admin: {
        description: 'Drives placarding requirement under §172.504. Auto-derived from totalWeight on save.',
      },
    },

    // ----- Parties -----
    {
      name: 'shipper',
      type: 'group',
      label: 'Shipper / Offeror',
      fields: [
        { name: 'company', type: 'text' },
        { name: 'address', type: 'text' },
        { name: 'cityStateZip', type: 'text' },
        { name: 'siteContact', type: 'text', admin: { description: 'On-site contact + phone (e.g. "Larry — 586-883-0670").' } },
      ],
    },
    {
      name: 'consignee',
      type: 'group',
      label: 'Consignee',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'address', type: 'text' },
        { name: 'cityStateZip', type: 'text' },
        { name: 'phone', type: 'text' },
      ],
    },

    // ----- Hazmat description (single item for now; multi-item Phase 6) -----
    {
      type: 'collapsible',
      label: 'Hazmat description',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'productType',
          type: 'select',
          required: true,
          options: [...PRODUCT_TYPES],
          admin: { description: 'Drives UN number + shipping name + hazard class defaults.' },
        },
        { name: 'productName', type: 'text', admin: { description: 'Free-text item description (e.g. "Bo electric scooter").' } },
        {
          type: 'row',
          fields: [
            { name: 'unNumber', type: 'text', admin: { description: 'e.g. UN3171.' } },
            { name: 'shippingName', type: 'text' },
            { name: 'hazardClass', type: 'text', admin: { description: 'e.g. "9" for misc lithium batteries.' } },
            { name: 'packingGroup', type: 'text', admin: { description: 'I / II / III, or blank if N/A.' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'numUnits', type: 'number', defaultValue: 1, min: 1 },
            { name: 'containerType', type: 'text', defaultValue: 'Crate' },
            { name: 'dimensions', type: 'text', admin: { description: 'L × W × H in inches.' } },
            { name: 'totalWeight', type: 'number', admin: { description: 'Net weight in lbs. Triggers placarding if ≥1,001 lb.' } },
            { name: 'batteryWh', type: 'number', admin: { description: 'Battery watt-hours (UN 38.3 reference).' } },
          ],
        },
        {
          name: 'specialNotes',
          type: 'textarea',
          admin: { description: 'Free-text handling/compliance notes appended to the declaration.' },
        },
      ],
    },

    // ----- Emergency response (49 CFR §172.604) -----
    {
      type: 'row',
      fields: [
        {
          name: 'emergencyPhone',
          type: 'text',
          defaultValue: '313-473-7499',
          admin: { description: '24-hour emergency response phone. Must remain active for the duration of transport.' },
        },
        {
          name: 'chemtrecContract',
          type: 'text',
          admin: { description: 'CHEMTREC contract number (when active). Required at ≥1,001 lb or for any §172.604(b) basis.' },
        },
      ],
    },

    // ----- Certification (§172.204) -----
    {
      name: 'signerName',
      type: 'text',
      defaultValue: 'Christopher J Nolte II',
    },
    {
      name: 'signerTitle',
      type: 'text',
      defaultValue: 'President, Bloom',
    },
    {
      name: 'signatureImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optional per-shipment override. Defaults to the team-wide signer image in public/hazmat.' },
    },
    { name: 'signedAt', type: 'date' },

    // ----- Output -----
    {
      name: 'generatedPdf',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Most recent generated declaration PDF. Replaced on regenerate.' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [...STATUSES],
    },
    {
      type: 'row',
      fields: [
        { name: 'transmittedAt', type: 'date' },
        { name: 'transmittedTo', type: 'text', admin: { description: 'Carrier contact the PDF was sent to.' } },
      ],
    },

    // ----- Audit trail -----
    {
      name: 'auditTrail',
      type: 'array',
      admin: {
        readOnly: true,
        description: 'Append-only event log. Written by API routes on create / sign / generate / transmit / status changes.',
      },
      fields: [
        { name: 'event', type: 'text' },
        { name: 'user', type: 'relationship', relationTo: 'users' },
        { name: 'timestamp', type: 'date' },
        { name: 'changes', type: 'json' },
      ],
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-derive weightTier from totalWeight so the placarding
        // logic in the generator + downstream consumers always agrees
        // with the canonical number, regardless of who edits.
        const w = typeof data.totalWeight === 'number' ? data.totalWeight : 0
        if (w >= 1001) {
          data.weightTier = data.weightTier === 'ftl' ? 'ftl' : 'placarded'
        } else if (w > 0) {
          data.weightTier = 'small'
        }
        return data
      },
    ],
  },
}
