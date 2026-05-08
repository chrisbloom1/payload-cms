import 'server-only'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import {
  HOME_DEFAULTS,
  type HomeContent,
  type HomeLogo,
  type HomeStat,
  type StatLabelColor,
} from './home-page-defaults'

/**
 * Server-only loader for the HomePage global. Returns a fully-resolved
 * HomeContent shape that the home page server component can hand to
 * each section as serializable props.
 *
 * Defaults live in ./home-page-defaults so client components can
 * import them without dragging in `payload` (which references
 * `node:fs` and breaks the client bundler). The `'server-only'`
 * import at the top guarantees this file is never bundled into the
 * client.
 */

// Re-export the types + defaults so existing server-side imports keep
// working without a sweep.
export {
  HOME_DEFAULTS,
  type HomeContent,
  type HomeLogo,
  type HomeStat,
  type StatLabelColor,
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
