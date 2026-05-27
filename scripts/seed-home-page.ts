/**
 * One-time seed: populate the `home-page` global with the same defaults
 * the components fall back to. After this runs the team can edit every
 * field in the admin instead of via PR.
 *
 * Idempotent: rerunning overwrites the global with the same content.
 *
 * Run with:  pnpm seed:home-page
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { HOME_DEFAULTS } from '../src/lib/home-page-resolver'

async function main() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'home-page' as never,
    overrideAccess: true,
    data: {
      hero: {
        headline: HOME_DEFAULTS.hero.headline,
        subheadingPrefix: HOME_DEFAULTS.hero.subheadingPrefix,
        rotatingWords: HOME_DEFAULTS.hero.rotatingWords.map((word) => ({ word })),
        subheadingSuffix: HOME_DEFAULTS.hero.subheadingSuffix,
        chatPlaceholder: HOME_DEFAULTS.hero.chatPlaceholder,
        chatButtonLabel: HOME_DEFAULTS.hero.chatButtonLabel,
        chatPrefillUrl: HOME_DEFAULTS.hero.chatPrefillUrl,
        badgeText: HOME_DEFAULTS.hero.badgeText,
        tagline: HOME_DEFAULTS.hero.tagline,
      },
      logoMarqueeRow1: HOME_DEFAULTS.logoMarqueeRow1.map((logo) => ({
        logoUrl: logo.src,
        alt: logo.alt,
        width: logo.width,
        height: logo.height,
      })),
      logoMarqueeRow2: HOME_DEFAULTS.logoMarqueeRow2.map((logo) => ({
        logoUrl: logo.src,
        alt: logo.alt,
        width: logo.width,
        height: logo.height,
      })),
      discover: HOME_DEFAULTS.discover,
      manage: HOME_DEFAULTS.manage,
      pay: HOME_DEFAULTS.pay,
      ecosystem: {
        heading: HOME_DEFAULTS.ecosystem.heading,
        body: HOME_DEFAULTS.ecosystem.body,
        stats: HOME_DEFAULTS.ecosystem.stats.map((s) => ({
          value: s.value,
          suffix: s.suffix,
          label: s.label,
          description: s.description,
          labelColor: s.labelColor,
        })),
      },
    } as any,
  })

  console.log('✓ Seeded home-page global')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
