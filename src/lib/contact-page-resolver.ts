import configPromise from '@payload-config'
import { getPayload } from 'payload'

export interface PathCard {
  eyebrow: string
  heading: string
  body: string
  href: string
  cta: string
}

export interface OfficeAddress {
  city: string
  line1: string
  line2: string
}

export interface ContactContent {
  hero: { headline: string; body: string }
  paths: PathCard[]
  formSection: { eyebrow: string; heading: string; body: string }
  officesHeading: string
  offices: OfficeAddress[]
  connectHeading: string
  linkedinUrl: string
}

export const CONTACT_DEFAULTS: ContactContent = {
  hero: {
    headline: "Let's build hardware, together.",
    body: "Whether you're a hardware brand, a service provider, or just have a question — drop us a line and the right person at Bloom will get back to you.",
  },
  paths: [
    {
      eyebrow: 'FOR BRANDS',
      heading: 'Looking for a partner?',
      body: 'Get matched with vetted manufacturers, warehouses, assembly partners, and logistics providers across North America.',
      href: '/brands',
      cta: 'Explore for brands',
    },
    {
      eyebrow: 'FOR PROVIDERS',
      heading: 'Want to win better jobs?',
      body: 'Apply to join the Bloom network and get connected to qualified, fast-growing hardware brands ready to ship.',
      href: '/providers',
      cta: 'Apply to providers',
    },
  ],
  formSection: {
    eyebrow: 'Get in touch',
    heading: 'Send us a message',
    body: "Fill out the form and we'll route your message to the right team — usually a same-day response on weekdays.",
  },
  officesHeading: 'Offices',
  offices: [
    { city: 'Detroit, MI', line1: '2050 15th St', line2: 'Detroit, MI 48216' },
    { city: 'Brooklyn, NY', line1: '19 Morris Ave', line2: 'Brooklyn, NY 10019' },
  ],
  connectHeading: 'Connect',
  linkedinUrl: 'https://www.linkedin.com/company/bloomnetworkai',
}

function asString(v: unknown, fallback = ''): string {
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

export async function loadContactPage(): Promise<ContactContent> {
  try {
    const payload = await getPayload({ config: configPromise })
    const doc = (await payload.findGlobal({
      slug: 'contact-page' as never,
    })) as unknown as Record<string, unknown>

    if (!doc) return CONTACT_DEFAULTS

    const heroRaw = (doc.hero as Record<string, unknown>) ?? {}
    const formRaw = (doc.formSection as Record<string, unknown>) ?? {}

    const pathsRaw = doc.paths
    const paths: PathCard[] =
      Array.isArray(pathsRaw) && pathsRaw.length > 0
        ? pathsRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const eyebrow = asString(r.eyebrow)
              const heading = asString(r.heading)
              const body = asString(r.body)
              const href = asString(r.href)
              const cta = asString(r.cta)
              if (!eyebrow || !heading || !body || !href || !cta) return null
              return { eyebrow, heading, body, href, cta } satisfies PathCard
            })
            .filter((p): p is PathCard => p !== null)
        : CONTACT_DEFAULTS.paths

    const officesRaw = doc.offices
    const offices: OfficeAddress[] =
      Array.isArray(officesRaw) && officesRaw.length > 0
        ? officesRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const city = asString(r.city)
              const line1 = asString(r.line1)
              const line2 = asString(r.line2)
              if (!city || !line1 || !line2) return null
              return { city, line1, line2 } satisfies OfficeAddress
            })
            .filter((o): o is OfficeAddress => o !== null)
        : CONTACT_DEFAULTS.offices

    return {
      hero: {
        headline: asString(heroRaw.headline, CONTACT_DEFAULTS.hero.headline),
        body: asString(heroRaw.body, CONTACT_DEFAULTS.hero.body),
      },
      paths: paths.length > 0 ? paths : CONTACT_DEFAULTS.paths,
      formSection: {
        eyebrow: asString(formRaw.eyebrow, CONTACT_DEFAULTS.formSection.eyebrow),
        heading: asString(formRaw.heading, CONTACT_DEFAULTS.formSection.heading),
        body: asString(formRaw.body, CONTACT_DEFAULTS.formSection.body),
      },
      officesHeading: asString(doc.officesHeading, CONTACT_DEFAULTS.officesHeading),
      offices: offices.length > 0 ? offices : CONTACT_DEFAULTS.offices,
      connectHeading: asString(doc.connectHeading, CONTACT_DEFAULTS.connectHeading),
      linkedinUrl: asString(doc.linkedinUrl, CONTACT_DEFAULTS.linkedinUrl),
    }
  } catch (err) {
    console.warn('[contact-page] global query failed, falling back to defaults:', err)
    return CONTACT_DEFAULTS
  }
}
