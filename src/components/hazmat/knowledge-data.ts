// Source-of-truth data for the Hazmat Knowledge Hub. Inlined as TS
// constants for now (one deploy to edit), per the working prototype.
//
// Spec calls for moving these to Payload globals so Anna/Jimmy can
// update wording without a deploy — that's a follow-up. The shapes
// below match the global field schema in the spec, so the migration
// to Payload will be mechanical.

// =============================================================
// Decision tree advisor
// =============================================================

export interface AdvisorOption {
  label: string
  next: string
  meta?: Record<string, string>
}

export interface AdvisorQuestionNode {
  isResult?: false
  breadcrumb?: string
  question: string
  options: AdvisorOption[]
}

export interface AdvisorResultNode {
  isResult: true
  breadcrumb?: string
  kind: 'ok' | 'warn' | 'info' | 'err'
  title: string
  summary: string
  steps?: string[]
  facts?: Record<string, string>
  emailTemplate?: string
  cta?: { label: string; action: 'goto_generator' }
}

export type AdvisorNode = AdvisorQuestionNode | AdvisorResultNode

export const ADVISOR: Record<string, AdvisorNode> = {
  start: {
    breadcrumb: 'Step 1 of 3',
    question: 'What are you shipping?',
    options: [
      { label: '🛴 Complete vehicle (e-bike, scooter, motorcycle)', next: 'vehicle_dest' },
      { label: '🤖 Equipment with battery installed (drone, robot, device)', next: 'equipment_dest' },
      { label: '🔋 Battery shipped with equipment (not installed)', next: 'battery_dest' },
      { label: '🔋 Standalone battery only', next: 'battery_alone_dest' },
    ],
  },
  vehicle_dest: {
    breadcrumb: 'Step 2 of 3 — Vehicle',
    question: 'Where is it going?',
    options: [
      { label: '🇺🇸 Within the US', next: 'vehicle_us_qty' },
      { label: '🇨🇦 To Canada', next: 'result_canada', meta: { itemKind: 'vehicle' } },
      { label: '🇲🇽 To Mexico', next: 'result_mexico', meta: { itemKind: 'vehicle' } },
      { label: '🚢 Overseas — ocean freight', next: 'result_ocean', meta: { itemKind: 'vehicle' } },
      { label: '✈️ Overseas — air freight', next: 'result_air', meta: { itemKind: 'vehicle' } },
    ],
  },
  equipment_dest: {
    breadcrumb: 'Step 2 of 3 — Equipment',
    question: 'Where is it going?',
    options: [
      { label: '🇺🇸 Within the US', next: 'equipment_us_qty' },
      { label: '🇨🇦 To Canada', next: 'result_canada', meta: { itemKind: 'equipment' } },
      { label: '🇲🇽 To Mexico', next: 'result_mexico', meta: { itemKind: 'equipment' } },
      { label: '🚢 Overseas — ocean freight', next: 'result_ocean', meta: { itemKind: 'equipment' } },
      { label: '✈️ Overseas — air freight', next: 'result_air', meta: { itemKind: 'equipment' } },
    ],
  },
  battery_dest: {
    breadcrumb: 'Step 2 of 3 — Battery with equipment',
    question: 'Where is it going?',
    options: [
      { label: '🇺🇸 Within the US', next: 'battery_us_qty' },
      { label: '🇨🇦 To Canada', next: 'result_canada', meta: { itemKind: 'battery_packed' } },
      { label: '🇲🇽 To Mexico', next: 'result_mexico', meta: { itemKind: 'battery_packed' } },
      { label: '🚢 Overseas — ocean freight', next: 'result_ocean', meta: { itemKind: 'battery_packed' } },
      { label: '✈️ Overseas — air freight', next: 'result_air_battery', meta: { itemKind: 'battery_packed' } },
    ],
  },
  battery_alone_dest: {
    breadcrumb: 'Step 2 of 3 — Standalone battery',
    question: 'Where is it going?',
    options: [
      { label: '🇺🇸 Within the US', next: 'battery_alone_us_qty' },
      { label: '🇨🇦 To Canada', next: 'result_canada', meta: { itemKind: 'battery_alone' } },
      { label: '🇲🇽 To Mexico', next: 'result_mexico', meta: { itemKind: 'battery_alone' } },
      { label: '🚢 Overseas — ocean freight', next: 'result_ocean', meta: { itemKind: 'battery_alone' } },
      { label: '✈️ Overseas — air freight', next: 'result_air_battery_alone', meta: { itemKind: 'battery_alone' } },
    ],
  },
  vehicle_us_qty: {
    breadcrumb: 'Step 3 of 3 — Vehicle, US domestic',
    question: 'How much are you shipping (total aggregate weight)?',
    options: [
      { label: 'Under 1,001 lbs total', next: 'result_us_small', meta: { itemKind: 'vehicle', un: 'UN3171' } },
      { label: '1,001 lbs or more total', next: 'result_us_large', meta: { itemKind: 'vehicle', un: 'UN3171' } },
      { label: 'Full truckload / full container', next: 'result_us_ftl', meta: { itemKind: 'vehicle', un: 'UN3171' } },
    ],
  },
  equipment_us_qty: {
    breadcrumb: 'Step 3 of 3 — Equipment, US domestic',
    question: 'How much are you shipping (total aggregate weight)?',
    options: [
      { label: 'Under 1,001 lbs total', next: 'result_us_small', meta: { itemKind: 'equipment', un: 'UN3481' } },
      { label: '1,001 lbs or more total', next: 'result_us_large', meta: { itemKind: 'equipment', un: 'UN3481' } },
      { label: 'Full truckload / full container', next: 'result_us_ftl', meta: { itemKind: 'equipment', un: 'UN3481' } },
    ],
  },
  battery_us_qty: {
    breadcrumb: 'Step 3 of 3 — Battery + equipment, US domestic',
    question: 'How much are you shipping?',
    options: [
      { label: 'Under 1,001 lbs total', next: 'result_us_small', meta: { itemKind: 'battery_packed', un: 'UN3481' } },
      { label: '1,001 lbs or more total', next: 'result_us_large', meta: { itemKind: 'battery_packed', un: 'UN3481' } },
    ],
  },
  battery_alone_us_qty: {
    breadcrumb: 'Step 3 of 3 — Standalone battery, US domestic',
    question: 'How much are you shipping?',
    options: [
      { label: 'Under 1,001 lbs total', next: 'result_us_battery_small', meta: { itemKind: 'battery_alone', un: 'UN3480' } },
      { label: '1,001 lbs or more total', next: 'result_us_battery_large', meta: { itemKind: 'battery_alone', un: 'UN3480' } },
    ],
  },

  // ===== RESULT NODES =====
  result_us_small: {
    isResult: true, kind: 'ok',
    title: 'Domestic Ground LTL — Standard',
    summary: 'Straightforward case. You prepare the shipping paper, attach it to the carrier BOL, and the carrier handles the rest.',
    steps: [
      "Open the Generator tab and create the Shipper's Declaration",
      'Confirm Class 9 hazard label is physically on the package (with UN# marking)',
      'Confirm 24/7 emergency response number (CHEMTREC or staffed line)',
      'Attach the declaration PDF to the carrier BOL at pickup',
      'Retain a copy for 2 years per §172.201(e)',
    ],
    facts: { 'What you provide': "Shipper's Declaration + carrier BOL + SDS", 'Who prepares paperwork': 'Bloom (us)', 'Placards on truck': 'Not required (<1,001 lb)' },
    cta: { label: 'Open Generator →', action: 'goto_generator' },
  },
  result_us_large: {
    isResult: true, kind: 'warn',
    title: 'Domestic Ground — Placarding Required',
    summary: 'Aggregate weight ≥1,001 lbs triggers Class 9 placard requirements on the vehicle and a hazmat-endorsed driver. Talk to the carrier before pickup.',
    steps: [
      "Generate the Shipper's Declaration as normal in the Generator tab",
      'Notify the carrier that this is a placarded Class 9 shipment — they need a HAZMAT-endorsed driver',
      'Confirm carrier will apply Class 9 placards to all 4 sides of the trailer',
      'Provide SDS to carrier in advance for their driver briefing',
      'Confirm emergency response number is 24/7 staffed (CHEMTREC strongly recommended at this volume)',
    ],
    facts: { 'What you provide': 'Declaration + carrier BOL + SDS + placard heads-up', 'Who prepares paperwork': 'Bloom prepares declaration; carrier handles placards', 'Driver requirement': 'HAZMAT endorsement on CDL' },
    cta: { label: 'Open Generator →', action: 'goto_generator' },
  },
  result_us_ftl: {
    isResult: true, kind: 'warn',
    title: 'Domestic FTL / Container — High Coordination',
    summary: 'Full truckload or container of hazmat. Significant logistics — handle as a planned project, not an ad-hoc shipment.',
    steps: [
      'Build the manifest first — every unit/UN# combo listed, aggregate weight calculated',
      'Request a hazmat-experienced carrier (Pilot/Maersk, FedEx Freight, XPO usually fine; smaller LTLs may decline)',
      "Generate per-line items in the Shipper's Declaration OR use a multi-item version",
      'Coordinate placarding with carrier — Class 9 on 4 sides of trailer',
      'Confirm CHEMTREC contract is active and contract # is on the declaration',
      'If intermodal (rail+truck): also need Container Packing Certificate from the shipper',
    ],
    facts: { 'What you provide': 'Manifest + Declaration + SDS + CPC (if intermodal)', 'Who prepares paperwork': 'Bloom + carrier collaborate', 'Lead time': '3–5 days minimum' },
    cta: { label: 'Open Generator →', action: 'goto_generator' },
  },
  result_us_battery_small: {
    isResult: true, kind: 'warn',
    title: 'Standalone Li-ion Battery — US Ground',
    summary: "Standalone batteries (UN3480) get stricter scrutiny than batteries installed in vehicles. Some carriers won't accept; most will but only with proper packaging.",
    steps: [
      "Generate the Shipper's Declaration — productType = 'Standalone Li-ion battery' → UN3480",
      'Confirm UN-spec packaging (4G/4GV box with proper inner cushioning) — not just any cardboard box',
      'Apply Class 9 Lithium label + UN3480 marking on package',
      'Confirm carrier accepts UN3480 — call carrier before booking pickup',
      'Provide UN 38.3 test summary if carrier requests',
    ],
    facts: { 'What you provide': 'Declaration + carrier BOL + SDS + UN 38.3 summary if requested', Packaging: 'UN-spec 4G/4GV (NOT generic cardboard)', 'Carrier check': 'Confirm acceptance before pickup' },
    cta: { label: 'Open Generator →', action: 'goto_generator' },
  },
  result_us_battery_large: {
    isResult: true, kind: 'warn',
    title: 'Standalone Li-ion Battery — Bulk Ground',
    summary: 'Standalone batteries ≥1,001 lbs aggregate. Combines UN3480 packaging requirements with full placarding. Verify everything upfront.',
    steps: [
      'Confirm with carrier that they accept UN3480 in bulk before booking',
      "Generate the Shipper's Declaration in the Generator tab",
      'Confirm UN-spec packaging on every package',
      'Confirm Class 9 placards on 4 sides of trailer + HAZMAT-endorsed driver',
      'Active CHEMTREC contract (or equivalent 24/7 response) is essentially required at this volume',
    ],
    facts: { 'What you provide': 'Declaration + SDS + UN 38.3 + carrier coordination', Packaging: 'UN-spec, all packages', 'Lead time': '5+ days' },
    cta: { label: 'Open Generator →', action: 'goto_generator' },
  },
  result_canada: {
    isResult: true, kind: 'info',
    title: 'US → Canada Ground',
    summary: 'USMCA cross-border. Canada uses TDG (Transportation of Dangerous Goods). Carrier typically handles the bilingual TDG paperwork — you provide SDS + product details.',
    steps: [
      'Send the carrier (Pilot, Maersk, Day & Ross, etc.) the SDS and product details upfront',
      'Carrier will prepare TDG-compliant declaration with French translations as needed',
      'You still prepare the US-side ground declaration for the leg up to the border (same as domestic)',
      'Customs broker handles the cross-border filing (B3 form etc.)',
      'Confirm Class 9 placards on trailer once crossed (TDG placards differ slightly)',
    ],
    facts: { 'What you provide': 'SDS + product spec + your US declaration', 'Who prepares TDG paperwork': 'Carrier (most often)', Customs: 'Broker handles B3' },
    emailTemplate: 'intl_ocean',
  },
  result_mexico: {
    isResult: true, kind: 'info',
    title: 'US → Mexico Ground',
    summary: 'USMCA cross-border. Mexico uses SCT regulations with bilingual (Spanish) documentation requirements. Carrier almost always handles the SCT paperwork.',
    steps: [
      'Send the carrier the SDS (preferably in Spanish — most manufacturers have one) and product details',
      'Carrier prepares the SCT-compliant bilingual declaration',
      'You prepare the US-side ground declaration for the US leg',
      'Customs broker handles the pedimento and other Mexican customs filings',
      'Driver crossing border needs CTPAT or similar credentialing — coordinate with carrier',
    ],
    facts: { 'What you provide': 'SDS (Spanish preferred) + product spec + US declaration', 'Who prepares SCT paperwork': 'Carrier (most often)', Customs: 'Pedimento required' },
    emailTemplate: 'intl_ocean',
  },
  result_ocean: {
    isResult: true, kind: 'info',
    title: 'Overseas — Ocean Freight',
    summary: 'Ocean freight forwarders have in-house DG specialists. You provide the SDS and product details; they prepare the IMO Multimodal Dangerous Goods Form and Container Packing Certificate.',
    steps: [
      'Get a quote from a freight forwarder that handles hazmat (Maersk, MSC, Flexport, etc.)',
      'Send the SDS + product details + UN 38.3 test summary upfront',
      'Forwarder prepares: IMO Multimodal DG Form + Container Packing Certificate + ocean BOL',
      "Confirm packaging meets IMDG requirements (the forwarder will tell you what's needed)",
      "You sign the Shipper's Declaration on the IMO form — that's the only paperwork on your side",
    ],
    facts: { 'What you provide': 'SDS + UN 38.3 + product info', 'Who prepares IMO paperwork': 'Freight forwarder', 'Documents needed': 'IMO MMD, CPC, ocean BOL, commercial invoice' },
    emailTemplate: 'intl_ocean',
  },
  result_air: {
    isResult: true, kind: 'warn',
    title: 'Overseas — Air Freight (Vehicle)',
    summary: 'Air shipping vehicles with Li-ion batteries installed is heavily restricted. Lithium batteries must be ≤30% state of charge. Many carriers refuse outright. Confirm acceptance first.',
    steps: [
      'BEFORE BOOKING: Contact carrier to confirm they accept UN3171 vehicles with installed Li-ion batteries',
      'Confirm battery state of charge can be brought to ≤30% before shipment',
      'Provide SDS + UN 38.3 test summary + state of charge declaration',
      "Carrier (IATA-certified) prepares the IATA Shipper's Declaration — the pink-bordered form",
      "Expect: 'Cargo Aircraft Only' marking, specific packaging requirements, possibly Section II constraints",
    ],
    facts: { 'What you provide': 'SDS + UN 38.3 + SoC declaration + product info', 'Who prepares IATA paperwork': 'Carrier (IATA-certified shipper)', Critical: 'Confirm acceptance BEFORE booking' },
    emailTemplate: 'intl_air',
  },
  result_air_battery: {
    isResult: true, kind: 'warn',
    title: 'Overseas Air — Battery + Equipment',
    summary: 'Li-ion batteries packed with equipment by air is allowed but tightly regulated. Section II provisions may apply for small batteries; full DGR rules for larger ones. Carrier handles the paperwork.',
    steps: [
      'Confirm carrier accepts UN3481 by air for your battery size',
      'Provide SDS + UN 38.3 + watt-hour rating + product details',
      "Carrier prepares IATA Shipper's Declaration",
      'Confirm packaging meets IATA requirements (often UN-spec)',
      'Watch for Section II vs Section IB classification — affects markings and quantity limits',
    ],
    facts: { 'What you provide': 'SDS + UN 38.3 + Wh rating', 'Who prepares IATA paperwork': 'Carrier', 'Section II eligibility': 'Depends on Wh rating' },
    emailTemplate: 'intl_air',
  },
  result_air_battery_alone: {
    isResult: true, kind: 'err',
    title: '⚠️ Standalone Li-ion Battery by Air — Restricted',
    summary: "Standalone Li-ion batteries (UN3480) are BANNED on passenger aircraft as cargo. Cargo aircraft only. Many carriers won't accept at all. Default answer: ship by ground or ocean.",
    steps: [
      'First: ask whether ground or ocean is viable. Air should be a last resort for standalone batteries.',
      'If air is required: contact a cargo-aircraft-only forwarder (FedEx Express CAO, DHL Cargo, etc.)',
      'Provide SDS + UN 38.3 + state of charge ≤30% + Wh rating',
      'Expect significant cost premium and longer lead time',
      "Carrier prepares IATA Shipper's Declaration with 'Cargo Aircraft Only' marking",
    ],
    facts: { 'What you provide': 'SDS + UN 38.3 + SoC + Wh rating', 'Aircraft restriction': 'Cargo aircraft only', Recommendation: 'Use ground or ocean if possible' },
    emailTemplate: 'intl_air',
  },
}

// =============================================================
// Email templates
// =============================================================

export interface EmailTemplate {
  id: string
  title: string
  when: string
  subject: string
  body: string
}

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: 'intl_ocean',
    title: 'Request ocean freight quote (international hazmat)',
    when: 'Sending to a freight forwarder for an ocean container with lithium batteries.',
    subject: 'Quote request — ocean freight, Class 9 lithium batteries',
    body: `Hi [Forwarder Name],

We need a quote for ocean freight from [Origin Port, US] to [Destination Port, Country] for the following hazmat shipment:

— Product: [e.g. 50 × Bo electric scooters, complete vehicles with Li-ion batteries installed]
— UN classification: UN3171, Battery-powered vehicle, Class 9
— Battery: [e.g. 672 Wh lithium-ion, UN 38.3 tested]
— Total weight: [X] lbs / [Y] kg
— Container: [FCL 20' / FCL 40' / LCL — confirm with us]
— Target ship date: [date]

Attached:
— SDS for the battery / product
— UN 38.3 test summary

Please confirm: (1) you can accommodate Class 9 lithium batteries, (2) what packaging marks/specs we need on our end, (3) whether you'll prepare the IMO Multimodal DG Form and Container Packing Certificate.

Thanks,
[Your Name]
Bloom`,
  },
  {
    id: 'intl_air',
    title: 'Air freight acceptance check (Class 9 lithium)',
    when: 'Before booking any air shipment with lithium batteries. Confirm carrier will accept BEFORE you commit.',
    subject: 'Air freight acceptance check — UN[3171/3480/3481], Class 9',
    body: `Hi [Carrier Contact],

Before we book, can you confirm acceptance of the following hazmat air shipment:

— UN classification: UN[3171/3480/3481]
— Description: [e.g. Battery-powered vehicle / Lithium ion batteries contained in equipment]
— Battery: [Wh rating, Li-ion]
— State of charge: can be brought to ≤30% before shipment
— Quantity: [units, weight]
— Origin → Destination: [city → city]
— Target ship date: [date]

Specific questions:
1. Do you accept this UN classification by air on your network?
2. Is this Section II eligible, or full DGR Section IA/IB?
3. Will you prepare the IATA Shipper's Declaration once we provide SDS + UN 38.3?
4. Cargo aircraft only or also passenger? (If standalone battery: CAO required.)

Attached: SDS and UN 38.3 test summary.

Thanks,
[Your Name]
Bloom`,
  },
  {
    id: 'sds_to_carrier',
    title: 'Send SDS to carrier (general)',
    when: 'Carrier asks for the SDS to support pickup or to prepare paperwork.',
    subject: 'SDS — [Product name] — [Pro# or BOL ref]',
    body: `Hi [Carrier Contact],

Attached is the SDS for [Product name] on shipment [Pro# or BOL ref].

Key details from the SDS:
— UN: [e.g. UN3171]
— Proper shipping name: [e.g. Battery-powered vehicle]
— Class: 9
— Battery: [Wh rating, type]

Let me know if you need anything else before pickup.

Thanks,
[Your Name]
Bloom`,
  },
  {
    id: 'carrier_unblock',
    title: 'Following up on hazmat hold / non-compliance',
    when: 'A carrier has blocked or paused your shipments pending paperwork clarification.',
    subject: 'Re: [Shipment ref] — shipping paper / compliance update',
    body: `Hi [Carrier Ops Contact],

Following up on [shipment ref / pro #]. We've prepared the proper DOT shipper's declaration per 49 CFR §172.202–204 and are attaching it here.

Key items:
— Basic description: [e.g. UN3171, Battery-powered vehicle, 9]
— Emergency response: 24/7 line at [number] / CHEMTREC contract # [###]
— Signed by [Name, Title] as authorized shipping agent
— Class 9 hazard labels confirmed on package

Please let us know if anything additional is needed and confirm when pickup can be resumed.

Thanks,
[Your Name]
Bloom`,
  },
]

// =============================================================
// AI advisor system prompt (Anthropic)
// =============================================================

export const CHAT_SYSTEM = `You are a hazmat shipping advisor for Bloom — an operations network connecting hardware brands (e-bikes, e-scooters, e-motorcycles, drones, robots, batteries) with US supply chain partners.

Context:
- Bloom is the shipping agent for partners like Beacon Manufacturing (Detroit)
- Most shipments are domestic ground LTL via Pilot/Maersk, FedEx Freight, XPO
- Lithium-ion batteries dominate — UN3171 (vehicles), UN3481 (equipment), UN3480 (standalone)
- International shipping is delegated to freight forwarders/carriers via SDS handoff
- Chris Nolte (President) signs shipping papers as authorized agent
- Current emergency response: 313-473-7499; CHEMTREC setup pending

Style:
- Direct, practical, no fluff
- Cite specific 49 CFR sections when helpful
- Flag when something requires real DG specialist judgment vs. routine handling
- Short answers (3-5 sentences typical, longer only when truly needed)
- Always remind: regulations change, verify with carrier and current 49 CFR if stakes are high`
