import 'server-only'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export interface IconTile {
  imageUrl: string
  alt: string
}

export interface BenefitRow {
  eyebrow: string
  heading: string
  body: string
  imageUrl: string
  imageAlt: string
}

export interface CriterionItem {
  label: string
  title: string
  description: string
}

export interface FrameworkStep {
  label: string
  description: string
}

export interface ProvidersContent {
  hero: {
    headline: string
    body: string
    iconTiles: IconTile[]
  }
  benefits: BenefitRow[]
  criteria: { heading: string; body: string; items: CriterionItem[] }
  framework: { heading: string; body: string; steps: FrameworkStep[] }
  cta: { heading: string; buttonLabel: string; buttonHref: string }
  faqHeading: string
}

const DEFAULT_ICON_TILES: IconTile[] = [
  { imageUrl: '/images/providers/icons/icon-1.svg', alt: 'Industrial vehicle' },
  { imageUrl: '/images/providers/icons/icon-2.svg', alt: 'EV charging' },
  { imageUrl: '/images/providers/icons/icon-3.svg', alt: 'Cargo bike van' },
  { imageUrl: '/images/providers/icons/icon-4.svg', alt: 'Drone' },
  { imageUrl: '/images/providers/icons/icon-5.svg', alt: 'Electric scooter' },
]

const DEFAULT_BENEFITS: BenefitRow[] = [
  {
    eyebrow: 'QUALIFIED LEADS',
    heading: 'Targeted inbound from quality brands',
    body: 'Bloom matches you with hardware brands that fit your capacity and specialties. No cold outreach required — qualified RFQs come straight to you with funding, volume, and product context attached.',
    imageUrl: '/images/providers/targeted-inbound.avif',
    imageAlt: 'Bloom platform brand profile',
  },
  {
    eyebrow: 'BLOOMPAY',
    heading: 'Ensure faster payments',
    body: 'BloomPay centralizes invoicing and accelerates payouts so you spend less time chasing payments. Track paid, due, and late invoices — and offer terms — all from one platform.',
    imageUrl: '/images/providers/faster-payments.avif',
    imageAlt: 'Bloom platform invoices dashboard',
  },
  {
    eyebrow: 'DE-RISKED PROJECTS',
    heading: 'New hardware, lower risk',
    body: 'Every brand on the platform is pre-vetted for funding, technical readiness, and clear engineering specs — you onboard knowing the project is real.',
    imageUrl: '/images/providers/lower-risk.avif',
    imageAlt: 'Bloom de-risked project workflow',
  },
]

const DEFAULT_CRITERIA_ITEMS: CriterionItem[] = [
  { label: 'Service 01', title: 'Core Capabilities', description: 'Review of services offered (e.g., warehousing, delivery, assembly) and alignment with Bloom categories.' },
  { label: 'Service 02', title: 'Facility & Systems', description: 'Assessment of physical site readiness, cleanliness, and use of digital or manual tracking systems.' },
  { label: 'Service 03', title: 'Certifications & Compliance', description: 'Review of licenses, insurance, safety protocols, and relevant certifications for regulatory alignment.' },
  { label: 'Service 04', title: 'Capacity & Lead Times', description: 'Evaluation of available capacity, response times, and ability to meet SLAs.' },
  { label: 'Service 05', title: 'Customer Experience', description: 'Review of responsiveness, communication practices, and service-level consistency.' },
  { label: 'Service 06', title: 'Technical Fit', description: 'Evaluation of ability to follow work instructions, handle specialized products, and perform QC checks.' },
  { label: 'Service 07', title: 'Track Record', description: 'Review of previous customer types, volume handled, and relevant industry experience.' },
  { label: 'Service 08', title: 'Onboarding & Collaboration', description: 'Assessment of willingness to align with SOPs and participate in pilot programs.' },
]

export const PROVIDERS_DEFAULTS: ProvidersContent = {
  hero: {
    headline: 'Work with the most promising hardware brands, vetted by Bloom.',
    body: "Unlock a pipeline of qualified projects from fast-growing hard-tech companies, backed by Bloom's rigorous screening and centralized payments.",
    iconTiles: DEFAULT_ICON_TILES,
  },
  benefits: DEFAULT_BENEFITS,
  criteria: {
    heading: 'Bloom Service Provider Qualifying Criteria',
    body: 'Each partner is evaluated across 8 core criteria before joining the Bloom network.',
    items: DEFAULT_CRITERIA_ITEMS,
  },
  framework: {
    heading: 'Win better jobs. Get paid faster.',
    body: 'Bloom matches proven providers with vetted hardware brands and handles the back-office—RFQs, milestones, and payments—so you can focus on execution.',
    steps: [
      { label: 'APPLY', description: 'Share capabilities, certifications, references, capacity' },
      { label: 'ONBOARD', description: 'Create profile, set rates, sync BloomPay' },
      { label: 'MATCH', description: 'Get qualified RFQs from matched brands' },
      { label: 'LAUNCH', description: 'Run jobs with milestones, auto-invoicing, Bloom support' },
    ],
  },
  cta: {
    heading: "Apply to join the elite providers on Bloom's Network",
    buttonLabel: 'APPLY NOW',
    buttonHref: '/contact-us',
  },
  faqHeading: 'FAQ',
}

function asString(v: unknown, fallback = ''): string {
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

function pickMediaUrl(field: unknown): string | null {
  if (field && typeof field === 'object' && field !== null) {
    const url = (field as Record<string, unknown>).url
    if (typeof url === 'string' && url) return url
  }
  return null
}

export async function loadProvidersPage(): Promise<ProvidersContent> {
  try {
    const payload = await getPayload({ config: configPromise })
    const doc = (await payload.findGlobal({
      slug: 'providers-page' as never,
    })) as unknown as Record<string, unknown>

    if (!doc) return PROVIDERS_DEFAULTS

    const heroRaw = (doc.hero as Record<string, unknown>) ?? {}
    const criteriaRaw = (doc.criteria as Record<string, unknown>) ?? {}
    const frameworkRaw = (doc.framework as Record<string, unknown>) ?? {}
    const ctaRaw = (doc.cta as Record<string, unknown>) ?? {}

    const iconTilesRaw = heroRaw.iconTiles
    const iconTiles =
      Array.isArray(iconTilesRaw) && iconTilesRaw.length > 0
        ? iconTilesRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const imageUrl = pickMediaUrl(r.image) ?? asString(r.imageUrl)
              const alt = asString(r.alt)
              if (!imageUrl || !alt) return null
              return { imageUrl, alt } satisfies IconTile
            })
            .filter((t): t is IconTile => t !== null)
        : []

    const benefitsRaw = doc.benefits
    const benefits =
      Array.isArray(benefitsRaw) && benefitsRaw.length > 0
        ? benefitsRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const imageUrl = pickMediaUrl(r.image) ?? asString(r.imageUrl)
              const heading = asString(r.heading)
              const body = asString(r.body)
              if (!heading || !body) return null
              return {
                eyebrow: asString(r.eyebrow),
                heading,
                body,
                imageUrl,
                imageAlt: asString(r.imageAlt),
              } satisfies BenefitRow
            })
            .filter((b): b is BenefitRow => b !== null)
        : []

    const criteriaItemsRaw = criteriaRaw.items
    const criteriaItems =
      Array.isArray(criteriaItemsRaw) && criteriaItemsRaw.length > 0
        ? criteriaItemsRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const label = asString(r.label)
              const title = asString(r.title)
              const description = asString(r.description)
              if (!label || !title || !description) return null
              return { label, title, description } satisfies CriterionItem
            })
            .filter((c): c is CriterionItem => c !== null)
        : []

    const stepsRaw = frameworkRaw.steps
    const steps =
      Array.isArray(stepsRaw) && stepsRaw.length > 0
        ? stepsRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const label = asString(r.label)
              const description = asString(r.description)
              if (!label || !description) return null
              return { label, description } satisfies FrameworkStep
            })
            .filter((s): s is FrameworkStep => s !== null)
        : []

    return {
      hero: {
        headline: asString(heroRaw.headline, PROVIDERS_DEFAULTS.hero.headline),
        body: asString(heroRaw.body, PROVIDERS_DEFAULTS.hero.body),
        iconTiles: iconTiles.length > 0 ? iconTiles : PROVIDERS_DEFAULTS.hero.iconTiles,
      },
      benefits: benefits.length > 0 ? benefits : PROVIDERS_DEFAULTS.benefits,
      criteria: {
        heading: asString(criteriaRaw.heading, PROVIDERS_DEFAULTS.criteria.heading),
        body: asString(criteriaRaw.body, PROVIDERS_DEFAULTS.criteria.body),
        items: criteriaItems.length > 0 ? criteriaItems : PROVIDERS_DEFAULTS.criteria.items,
      },
      framework: {
        heading: asString(frameworkRaw.heading, PROVIDERS_DEFAULTS.framework.heading),
        body: asString(frameworkRaw.body, PROVIDERS_DEFAULTS.framework.body),
        steps: steps.length > 0 ? steps : PROVIDERS_DEFAULTS.framework.steps,
      },
      cta: {
        heading: asString(ctaRaw.heading, PROVIDERS_DEFAULTS.cta.heading),
        buttonLabel: asString(ctaRaw.buttonLabel, PROVIDERS_DEFAULTS.cta.buttonLabel),
        buttonHref: asString(ctaRaw.buttonHref, PROVIDERS_DEFAULTS.cta.buttonHref),
      },
      faqHeading: asString(doc.faqHeading, PROVIDERS_DEFAULTS.faqHeading),
    }
  } catch (err) {
    console.warn('[providers-page] global query failed, falling back to defaults:', err)
    return PROVIDERS_DEFAULTS
  }
}
