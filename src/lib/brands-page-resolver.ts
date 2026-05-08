import 'server-only'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

/**
 * Resolves the BrandsPage global to a UI-friendly shape with hardcoded
 * defaults. Defaults match the in-route hardcoded copy so the page is
 * pixel-identical pre/post-migration; once the team edits in Payload,
 * those edits flow through.
 *
 * Defaults also act as a fallback when the global is empty or the DB
 * is unreachable, so /brands never blanks.
 */

export interface BrandsVertical {
  label: string
  imageUrl: string
}

export interface FrameworkStep {
  label: string
  description: string
}

export interface BrandsContent {
  hero: { headline: string; body: string }
  verticals: BrandsVertical[]
  builtFor: { heading: string; body: string }
  coastToCoast: { heading: string; body: string }
  framework: { heading: string; body: string; steps: FrameworkStep[] }
  pricing: { heading: string; body: Record<string, unknown> | null }
  bloomPay: { heading: string; body: string }
  cta: { heading: string; buttonLabel: string; buttonHref: string }
  faqHeading: string
}

export const BRANDS_DEFAULTS: BrandsContent = {
  hero: {
    headline: 'Supply chain complexity is killing your momentum',
    body: "Hardware innovation should be about breakthroughs, not spreadsheets, shipping labels, and supplier drama. Bloom unblocks your growth by giving you instant, vetted access to the domestic manufacturing, assembly, logistics, and service partners that power today's most ambitious hardware brands.",
  },
  verticals: [
    { label: 'Mobility', imageUrl: '/images/stories/dust-moto-hero.jpg' },
    { label: 'Drones', imageUrl: '/images/stories/birdstop-hero.jpg' },
    { label: 'Cleantech', imageUrl: '/images/stories/grounded-hero.jpg' },
    { label: 'Robotics', imageUrl: '/images/stories/wheel-me-hero.jpg' },
  ],
  builtFor: {
    heading: 'Built for the brands building the future',
    body: "Bloom is purpose-built to support the unique operational challenges of today's most advanced hardware categories, where complexity, regulation, and logistics often stall growth.",
  },
  coastToCoast: {
    heading: 'Coast to coast',
    body: 'Our vetted network covers the entire US, linking you to local specialists and Fortune 100 powerhouses alike. Get fast, competitive access to partners ready to build, deliver, and service for you.',
  },
  framework: {
    heading: 'Proven framework built for scaling hardware brands',
    body: "Bloom orchestrates the heavy-lift of hardware operations so you can focus on product and customers. Here's exactly what happens after you request access.",
    steps: [
      { label: 'JOIN', description: 'Sign up, share product specs' },
      { label: 'MATCH', description: 'Bloom algorithm + ops team select partners' },
      { label: 'LAUNCH', description: 'Kickoff, dashboards, milestone tracker' },
      { label: 'SCALE', description: 'QBRs, volume discounts, new markets' },
    ],
  },
  pricing: {
    heading: 'Choose your plan',
    body: null,
  },
  bloomPay: {
    heading: 'Simplify and expand payment options',
    body: 'Leverage BloomPay to pay all your vendors in one place and access on platform extended payment terms up to 120 days.',
  },
  cta: {
    heading: 'Ready to cut costs, launch faster, and de‑risk your operations?',
    buttonLabel: 'UNLOCK YOUR POTENTIAL',
    buttonHref: 'https://welcome.togetherwebloom.us/',
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

export async function loadBrandsPage(): Promise<BrandsContent> {
  try {
    const payload = await getPayload({ config: configPromise })
    const doc = (await payload.findGlobal({
      slug: 'brands-page' as never,
    })) as unknown as Record<string, unknown>

    if (!doc) return BRANDS_DEFAULTS

    const heroRaw = (doc.hero as Record<string, unknown>) ?? {}
    const builtForRaw = (doc.builtFor as Record<string, unknown>) ?? {}
    const coastRaw = (doc.coastToCoast as Record<string, unknown>) ?? {}
    const frameworkRaw = (doc.framework as Record<string, unknown>) ?? {}
    const pricingRaw = (doc.pricing as Record<string, unknown>) ?? {}
    const bloomPayRaw = (doc.bloomPay as Record<string, unknown>) ?? {}
    const ctaRaw = (doc.cta as Record<string, unknown>) ?? {}

    const verticalsRaw = doc.verticals
    const verticals: BrandsVertical[] =
      Array.isArray(verticalsRaw) && verticalsRaw.length > 0
        ? verticalsRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const imageUrl = pickMediaUrl(r.image) ?? asString(r.imageUrl)
              const label = asString(r.label)
              if (!label || !imageUrl) return null
              return { label, imageUrl } satisfies BrandsVertical
            })
            .filter((v): v is BrandsVertical => v !== null)
        : BRANDS_DEFAULTS.verticals

    const stepsRaw = frameworkRaw.steps
    const steps: FrameworkStep[] =
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
        : BRANDS_DEFAULTS.framework.steps

    const pricingBody =
      pricingRaw.body && typeof pricingRaw.body === 'object'
        ? (pricingRaw.body as Record<string, unknown>)
        : null

    return {
      hero: {
        headline: asString(heroRaw.headline, BRANDS_DEFAULTS.hero.headline),
        body: asString(heroRaw.body, BRANDS_DEFAULTS.hero.body),
      },
      verticals: verticals.length > 0 ? verticals : BRANDS_DEFAULTS.verticals,
      builtFor: {
        heading: asString(builtForRaw.heading, BRANDS_DEFAULTS.builtFor.heading),
        body: asString(builtForRaw.body, BRANDS_DEFAULTS.builtFor.body),
      },
      coastToCoast: {
        heading: asString(coastRaw.heading, BRANDS_DEFAULTS.coastToCoast.heading),
        body: asString(coastRaw.body, BRANDS_DEFAULTS.coastToCoast.body),
      },
      framework: {
        heading: asString(frameworkRaw.heading, BRANDS_DEFAULTS.framework.heading),
        body: asString(frameworkRaw.body, BRANDS_DEFAULTS.framework.body),
        steps,
      },
      pricing: {
        heading: asString(pricingRaw.heading, BRANDS_DEFAULTS.pricing.heading),
        body: pricingBody,
      },
      bloomPay: {
        heading: asString(bloomPayRaw.heading, BRANDS_DEFAULTS.bloomPay.heading),
        body: asString(bloomPayRaw.body, BRANDS_DEFAULTS.bloomPay.body),
      },
      cta: {
        heading: asString(ctaRaw.heading, BRANDS_DEFAULTS.cta.heading),
        buttonLabel: asString(ctaRaw.buttonLabel, BRANDS_DEFAULTS.cta.buttonLabel),
        buttonHref: asString(ctaRaw.buttonHref, BRANDS_DEFAULTS.cta.buttonHref),
      },
      faqHeading: asString(doc.faqHeading, BRANDS_DEFAULTS.faqHeading),
    }
  } catch (err) {
    console.warn('[brands-page] global query failed, falling back to defaults:', err)
    return BRANDS_DEFAULTS
  }
}
