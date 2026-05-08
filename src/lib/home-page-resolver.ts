import configPromise from '@payload-config'
import { getPayload } from 'payload'

/**
 * Server-side loader for the HomePage global. Returns a fully-resolved
 * data shape that the home page server component can hand to each
 * section as serializable props.
 *
 * The defaults below match the values currently hardcoded in the home
 * components, so until the team edits anything in /admin, the rendered
 * page is byte-identical to the pre-migration version. This also means
 * that a Neon outage doesn't blank the home page — the loader returns
 * the defaults if the global query fails.
 */

export interface HomeLogo {
  src: string
  alt: string
  width: number
  height: number
}

export type StatLabelColor = 'orange' | 'coral' | 'red' | 'navy'

export interface HomeStat {
  value: number
  suffix: string
  label: string
  description: string
  labelColor: StatLabelColor
}

export interface HomeContent {
  hero: {
    headline: string
    subheadingPrefix: string
    rotatingWords: string[]
    subheadingSuffix: string
    chatPlaceholder: string
    chatButtonLabel: string
    chatPrefillUrl: string
    badgeText: string
    tagline: string
  }
  logoMarqueeRow1: HomeLogo[]
  logoMarqueeRow2: HomeLogo[]
  discover: { heading: string; body: string }
  manage: { heading: string; body: string }
  pay: { heading: string; body: string }
  ecosystem: { heading: string; body: string; stats: HomeStat[] }
}

const DEFAULT_LOGOS_ROW_1: HomeLogo[] = [
  { src: 'https://framerusercontent.com/images/zOU0s3HDH3nSML4Xy125bAqSgY.svg?width=216&height=16', alt: 'Boaz Bikes', width: 216, height: 16 },
  { src: 'https://framerusercontent.com/images/5zu3Iz824S6q6ht47TTJPbJljZc.svg?width=202&height=64', alt: 'DUST', width: 202, height: 64 },
  { src: 'https://framerusercontent.com/images/v0EIHszp30eu4nqYKuVlDvy32no.svg?width=136&height=42', alt: 'tokyobike', width: 136, height: 42 },
  { src: 'https://framerusercontent.com/images/92Gt2GLdGujypVTujIOUe3uSdwY.svg?width=80&height=57', alt: 'Civilized Cycles', width: 80, height: 57 },
  { src: 'https://framerusercontent.com/images/67rBqwLG8X5Rf2B3EcMbwq8sSzU.svg?width=183&height=36', alt: 'Electric Plant Co', width: 183, height: 36 },
  { src: 'https://framerusercontent.com/images/nquQYqc6S2OZaM9ZkqAv6YWVWA.svg?width=207&height=55', alt: 'Toyota', width: 207, height: 55 },
  { src: 'https://framerusercontent.com/images/7rx8tX8GFdgtExQizpPxn8X9vLM.svg?width=127&height=91', alt: 'Forecast Sardinia', width: 127, height: 91 },
  { src: 'https://framerusercontent.com/images/DgMiPYDc7FGjihJbZGcGw7rKZ0s.svg?width=376&height=91', alt: 'cake', width: 376, height: 91 },
  { src: 'https://framerusercontent.com/images/gpFud7o1WyPiR2bfQcWgsw4GySU.png?width=200&height=41', alt: 'CLIP', width: 200, height: 41 },
]

const DEFAULT_LOGOS_ROW_2: HomeLogo[] = [
  { src: 'https://framerusercontent.com/images/JFCMKhQY1cM88fhddb3nkOKY.svg?width=246&height=41', alt: 'Forward X Robotics', width: 246, height: 41 },
  { src: 'https://framerusercontent.com/images/lDgBE3TMybzd3s0Fb6Sukn7c4zw.png?width=220&height=81', alt: 'TIME', width: 220, height: 81 },
  { src: 'https://framerusercontent.com/images/2Qe4cxisK4TvuGAOlzUR9xynuXQ.svg?width=185&height=33', alt: 'emoto Supply Co', width: 185, height: 33 },
  { src: 'https://framerusercontent.com/images/n696g0ZwfNyZ2Sonp7GZkfeYdg.svg?width=152&height=25', alt: 'GROUNDED', width: 152, height: 25 },
  { src: 'https://framerusercontent.com/images/4Tn3Wd1Y3B29DLkui0cm775VRIk.svg?width=444&height=501', alt: 'Brand', width: 444, height: 501 },
  { src: 'https://framerusercontent.com/images/8SVNnZsZJzlex74wHBUCGfl4t6s.png?width=500&height=106', alt: 'MOONBIKES', width: 500, height: 106 },
  { src: 'https://framerusercontent.com/images/roMWh32P8PO0Laeve9lz5ESnWnc.svg?width=363&height=100', alt: 'GLĪD', width: 363, height: 100 },
  { src: 'https://framerusercontent.com/images/i1nNnbxIqz7kxapTHKxQckMx5A.svg?width=870&height=600', alt: 'Brand', width: 870, height: 600 },
  { src: 'https://framerusercontent.com/images/q1E5JJeezbHty7QWcG2KAtq6s.png?width=218&height=41', alt: 'LAND', width: 218, height: 41 },
  { src: 'https://framerusercontent.com/images/aAfjWgYyKluPFIZWkD5Ze3CGDk.svg?width=117&height=27', alt: 'Vela', width: 117, height: 27 },
  { src: 'https://framerusercontent.com/images/NQ4fKEZ3mTgsFC4kUoIKAWWkTA.png?width=130&height=46', alt: "It's Electric", width: 130, height: 46 },
  { src: 'https://framerusercontent.com/images/msfZWsUknmu6ZDVetqXa6UtkKRw.svg?width=110&height=22', alt: 'tubular.network', width: 110, height: 22 },
  { src: 'https://framerusercontent.com/images/mFPc2jSqPh5spd5K19UjxTat7vI.png?width=268&height=199', alt: 'Brand', width: 268, height: 199 },
  { src: 'https://framerusercontent.com/images/1ZJXbZsqCC7R5tIIfzBW0cYYoI.png?width=120&height=17', alt: 'ENVO', width: 120, height: 17 },
]

export const HOME_DEFAULTS: HomeContent = {
  hero: {
    headline: "Hardware shouldn't be hard.",
    subheadingPrefix: 'We help make',
    rotatingWords: ['Manufacturing', 'Warehousing', 'Assembly', 'Logistics'],
    subheadingSuffix: 'easier.',
    chatPlaceholder: "Describe your product's supply chain needs",
    chatButtonLabel: 'Chat now',
    chatPrefillUrl: 'https://app.bloomnetwork.ai/marketplace/request/new',
    badgeText: 'Start for free now!',
    tagline:
      'Bloom helps leading mobility, energy, robotics brands scale faster through our vetted network',
  },
  logoMarqueeRow1: DEFAULT_LOGOS_ROW_1,
  logoMarqueeRow2: DEFAULT_LOGOS_ROW_2,
  discover: {
    heading:
      'Discover and access a vetted supply chain network ready to scale',
    body: 'Bloom intelligently matches brands with vetted supply chain and operations partners tailored to their products requirements throughout its lifecycle.',
  },
  manage: {
    heading: "Easily manage partners with Bloom's platform.",
    body: 'Discover, bid, book, and pay supply chain and operation partners all on a single platform.',
  },
  pay: {
    heading: 'Simplify and expand payment options',
    body: 'Leverage BloomPay to pay all your vendors in one place and access extended payment terms up to 120 days.',
  },
  ecosystem: {
    heading: 'Cultivating an ecosystem',
    body: 'With deep roots in the hardware industry, we provide the support and connections you need to flourish, ensuring your business blossoms in an ever-evolving landscape.',
    stats: [
      { value: 40, suffix: '%', label: 'Reduction', description: 'in lead times', labelColor: 'orange' },
      { value: 25, suffix: '%', label: 'Lower', description: 'fulfillment costs', labelColor: 'coral' },
      { value: 80, suffix: '%', label: 'Faster', description: 'supplier on-boarding', labelColor: 'red' },
    ],
  },
}

function asString(v: unknown, fallback = ''): string {
  return typeof v === 'string' && v.length > 0 ? v : fallback
}

function asNumber(v: unknown, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback
}

function pickMediaUrl(field: unknown): string | null {
  if (field && typeof field === 'object' && field !== null) {
    const url = (field as Record<string, unknown>).url
    if (typeof url === 'string' && url) return url
  }
  return null
}

function resolveLogoArray(
  raw: unknown,
  defaults: HomeLogo[],
): HomeLogo[] {
  if (!Array.isArray(raw)) return defaults
  if (raw.length === 0) return defaults

  return raw
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const r = item as Record<string, unknown>
      const src = pickMediaUrl(r.logoImage) ?? asString(r.logoUrl)
      const alt = asString(r.alt)
      if (!src || !alt) return null
      return {
        src,
        alt,
        width: asNumber(r.width, 200),
        height: asNumber(r.height, 60),
      } satisfies HomeLogo
    })
    .filter((l): l is HomeLogo => l !== null)
}

function resolveStats(raw: unknown): HomeStat[] {
  if (!Array.isArray(raw) || raw.length === 0) return HOME_DEFAULTS.ecosystem.stats
  const validColors: StatLabelColor[] = ['orange', 'coral', 'red', 'navy']
  return raw
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const r = item as Record<string, unknown>
      const value = asNumber(r.value, NaN)
      const label = asString(r.label)
      const description = asString(r.description)
      if (!Number.isFinite(value) || !label || !description) return null
      const color = asString(r.labelColor, 'orange') as StatLabelColor
      return {
        value,
        suffix: asString(r.suffix, '%'),
        label,
        description,
        labelColor: validColors.includes(color) ? color : 'orange',
      } satisfies HomeStat
    })
    .filter((s): s is HomeStat => s !== null)
}

export async function loadHomePage(): Promise<HomeContent> {
  try {
    const payload = await getPayload({ config: configPromise })
    const doc = (await payload.findGlobal({
      slug: 'home-page' as never,
    })) as unknown as Record<string, unknown>

    if (!doc) return HOME_DEFAULTS

    const heroRaw = (doc.hero as Record<string, unknown>) ?? {}
    const ecoRaw = (doc.ecosystem as Record<string, unknown>) ?? {}
    const discoverRaw = (doc.discover as Record<string, unknown>) ?? {}
    const manageRaw = (doc.manage as Record<string, unknown>) ?? {}
    const payRaw = (doc.pay as Record<string, unknown>) ?? {}

    const rotatingRaw = heroRaw.rotatingWords
    const rotatingWords = Array.isArray(rotatingRaw)
      ? rotatingRaw
          .map((it) =>
            asString((it as Record<string, unknown> | undefined)?.word),
          )
          .filter(Boolean)
      : []

    return {
      hero: {
        headline: asString(heroRaw.headline, HOME_DEFAULTS.hero.headline),
        subheadingPrefix: asString(
          heroRaw.subheadingPrefix,
          HOME_DEFAULTS.hero.subheadingPrefix,
        ),
        rotatingWords:
          rotatingWords.length > 0 ? rotatingWords : HOME_DEFAULTS.hero.rotatingWords,
        subheadingSuffix: asString(
          heroRaw.subheadingSuffix,
          HOME_DEFAULTS.hero.subheadingSuffix,
        ),
        chatPlaceholder: asString(
          heroRaw.chatPlaceholder,
          HOME_DEFAULTS.hero.chatPlaceholder,
        ),
        chatButtonLabel: asString(
          heroRaw.chatButtonLabel,
          HOME_DEFAULTS.hero.chatButtonLabel,
        ),
        chatPrefillUrl: asString(
          heroRaw.chatPrefillUrl,
          HOME_DEFAULTS.hero.chatPrefillUrl,
        ),
        badgeText: asString(heroRaw.badgeText, HOME_DEFAULTS.hero.badgeText),
        tagline: asString(heroRaw.tagline, HOME_DEFAULTS.hero.tagline),
      },
      logoMarqueeRow1: resolveLogoArray(
        doc.logoMarqueeRow1,
        HOME_DEFAULTS.logoMarqueeRow1,
      ),
      logoMarqueeRow2: resolveLogoArray(
        doc.logoMarqueeRow2,
        HOME_DEFAULTS.logoMarqueeRow2,
      ),
      discover: {
        heading: asString(discoverRaw.heading, HOME_DEFAULTS.discover.heading),
        body: asString(discoverRaw.body, HOME_DEFAULTS.discover.body),
      },
      manage: {
        heading: asString(manageRaw.heading, HOME_DEFAULTS.manage.heading),
        body: asString(manageRaw.body, HOME_DEFAULTS.manage.body),
      },
      pay: {
        heading: asString(payRaw.heading, HOME_DEFAULTS.pay.heading),
        body: asString(payRaw.body, HOME_DEFAULTS.pay.body),
      },
      ecosystem: {
        heading: asString(ecoRaw.heading, HOME_DEFAULTS.ecosystem.heading),
        body: asString(ecoRaw.body, HOME_DEFAULTS.ecosystem.body),
        stats: resolveStats(ecoRaw.stats),
      },
    }
  } catch (err) {
    console.warn('[home-page] global query failed, falling back to defaults:', err)
    return HOME_DEFAULTS
  }
}
