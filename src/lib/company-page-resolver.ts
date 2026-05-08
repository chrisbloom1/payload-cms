import 'server-only'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
// Import TEAM from the data file (NOT TeamGrid.tsx, which is
// "use client" — Turbopack tree-shakes the const out of the server
// chunk and the import resolves to undefined at runtime).
import { TEAM, type TeamMember } from '@/data/team'

export interface ResourceCard {
  title: string
  body: string
  href?: string
  comingSoon?: boolean
}

export interface CompanyContent {
  hero: { headline: string; body: string }
  whatWeDo: { eyebrow: string; heading: string; body: string }
  whoWeAre: { eyebrow: string; heading: string; body: string }
  ecosystem: { heading: string; paragraphs: string[] }
  resources: ResourceCard[]
  teamEyebrow: string
  team: TeamMember[]
}

const DEFAULT_RESOURCES: ResourceCard[] = [
  {
    title: 'Newsroom',
    body: 'We power innovation across the hardware industry.',
    href: '/newsroom',
  },
  {
    title: 'Customer Stories',
    body: 'We support hardware brands, no matter their stage or size.',
    href: '/customer-stories',
  },
  {
    title: 'Social Impact',
    body: 'We are committed to exploring the full potential of hardware products.',
    comingSoon: true,
  },
  {
    title: 'Sustainability',
    body: 'We decarbonize hard tech by optimizing the services it needs to thrive.',
    comingSoon: true,
  },
]

export const COMPANY_DEFAULTS: CompanyContent = {
  hero: {
    headline: "Hi. We're Bloom.",
    body: "Bloom brings hard tech brands into an operations ecosystem that nurtures every stage of their product's growth.",
  },
  whatWeDo: {
    eyebrow: 'What We Do',
    heading: 'We provide the support and connections you need to flourish.',
    body: "Just as a thriving natural ecosystem relies on interconnected relationships and balanced processes to flourish, Bloom's operations ecosystem is built on a foundation of collaboration and resilience. By nurturing a network that thrives on the diverse capabilities of our partners, we ensure that the hard tech industry can thrive, adapt, and grow.",
  },
  whoWeAre: {
    eyebrow: 'Who We Are',
    heading: 'We are committed to exploring the full potential of hardware.',
    body: 'We are a global team of builders and connectors with deep roots in the hardware industry. Together, we are exploring the full potential of hard tech products, optimizing their places within our daily lives.',
  },
  ecosystem: {
    heading: 'Bloom is an ecosystem of operations services',
    paragraphs: [
      'We equip hard tech brands to build, deliver, and service their products using a high-quality network of service providers, no matter their stage or size.',
      'Bloom is a technology company operating globally. We deliver services to customers across hardware, third-party logistics, contract manufacturing, and after-sales service.',
    ],
  },
  resources: DEFAULT_RESOURCES,
  teamEyebrow: 'Meet the Bloom Team',
  team: [...TEAM],
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

function lexicalToPlainText(content: unknown): string {
  if (!content || typeof content !== 'object') return ''
  const root = (content as Record<string, unknown>).root as
    | Record<string, unknown>
    | undefined
  if (!root || !Array.isArray(root.children)) return ''
  const parts: string[] = []
  for (const node of root.children as Array<Record<string, unknown>>) {
    if (Array.isArray(node.children)) {
      const text = (node.children as Array<Record<string, unknown>>)
        .map((c) => (typeof c.text === 'string' ? c.text : ''))
        .join('')
      if (text) parts.push(text)
    }
  }
  return parts.join('\n\n')
}

async function loadTeamMembers(): Promise<TeamMember[]> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'team-members' as never,
      limit: 100,
      sort: 'sortOrder',
      where: { _status: { equals: 'published' } },
    })

    if (result.docs.length === 0) return [...TEAM]

    const out: TeamMember[] = []
    for (const doc of result.docs) {
      const d = doc as unknown as Record<string, unknown>
      const name = asString(d.name)
      const title = asString(d.title)
      if (!name || !title) continue
      const photo = pickMediaUrl(d.photoImage) ?? asString(d.photoUrl)
      const linkedin = asString(d.linkedin)
      const bio = lexicalToPlainText(d.bio)
      out.push({
        name,
        title,
        linkedin,
        photo,
        bio,
      })
    }
    return out
  } catch (err) {
    console.warn('[team-members] Payload query failed, falling back to lib:', err)
    return [...TEAM]
  }
}

export async function loadCompanyPage(): Promise<CompanyContent> {
  const team = await loadTeamMembers()

  try {
    const payload = await getPayload({ config: configPromise })
    const doc = (await payload.findGlobal({
      slug: 'company-page' as never,
    })) as unknown as Record<string, unknown>

    if (!doc) return { ...COMPANY_DEFAULTS, team }

    const heroRaw = (doc.hero as Record<string, unknown>) ?? {}
    const whatRaw = (doc.whatWeDo as Record<string, unknown>) ?? {}
    const whoRaw = (doc.whoWeAre as Record<string, unknown>) ?? {}
    const ecoRaw = (doc.ecosystem as Record<string, unknown>) ?? {}

    const ecoParagraphsRaw = ecoRaw.paragraphs
    const paragraphs =
      Array.isArray(ecoParagraphsRaw) && ecoParagraphsRaw.length > 0
        ? ecoParagraphsRaw
            .map((p) => asString((p as Record<string, unknown>)?.text))
            .filter(Boolean)
        : COMPANY_DEFAULTS.ecosystem.paragraphs

    const resourcesRaw = doc.resources
    const resources: ResourceCard[] =
      Array.isArray(resourcesRaw) && resourcesRaw.length > 0
        ? resourcesRaw
            .map((it) => {
              const r = it as Record<string, unknown>
              const title = asString(r.title)
              const body = asString(r.body)
              if (!title || !body) return null
              const card: ResourceCard = { title, body }
              const href = asString(r.href)
              if (href) card.href = href
              if (r.comingSoon === true) card.comingSoon = true
              return card
            })
            .filter((c): c is ResourceCard => c !== null)
        : COMPANY_DEFAULTS.resources

    return {
      hero: {
        headline: asString(heroRaw.headline, COMPANY_DEFAULTS.hero.headline),
        body: asString(heroRaw.body, COMPANY_DEFAULTS.hero.body),
      },
      whatWeDo: {
        eyebrow: asString(whatRaw.eyebrow, COMPANY_DEFAULTS.whatWeDo.eyebrow),
        heading: asString(whatRaw.heading, COMPANY_DEFAULTS.whatWeDo.heading),
        body: asString(whatRaw.body, COMPANY_DEFAULTS.whatWeDo.body),
      },
      whoWeAre: {
        eyebrow: asString(whoRaw.eyebrow, COMPANY_DEFAULTS.whoWeAre.eyebrow),
        heading: asString(whoRaw.heading, COMPANY_DEFAULTS.whoWeAre.heading),
        body: asString(whoRaw.body, COMPANY_DEFAULTS.whoWeAre.body),
      },
      ecosystem: {
        heading: asString(ecoRaw.heading, COMPANY_DEFAULTS.ecosystem.heading),
        paragraphs,
      },
      resources,
      teamEyebrow: asString(doc.teamEyebrow, COMPANY_DEFAULTS.teamEyebrow),
      team,
    }
  } catch (err) {
    console.warn('[company-page] global query failed, falling back to defaults:', err)
    return { ...COMPANY_DEFAULTS, team }
  }
}
