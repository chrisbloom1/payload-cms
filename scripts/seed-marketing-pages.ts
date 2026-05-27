/**
 * One-time seed: populate the brands-page and providers-page globals
 * with the same defaults the routes fall back to. After this runs the
 * team can edit every field via /admin instead of via PR.
 *
 * Idempotent (updateGlobal overwrites).
 *
 * Run with:  pnpm seed:marketing-pages
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { BRANDS_DEFAULTS } from '../src/lib/brands-page-resolver'
import { PROVIDERS_DEFAULTS } from '../src/lib/providers-page-resolver'

async function main() {
  const payload = await getPayload({ config })

  // Brands ----------------------------------------------------------
  await payload.updateGlobal({
    slug: 'brands-page' as never,
    overrideAccess: true,
    data: {
      hero: BRANDS_DEFAULTS.hero,
      verticals: BRANDS_DEFAULTS.verticals.map((v) => ({
        label: v.label,
        imageUrl: v.imageUrl,
      })),
      builtFor: BRANDS_DEFAULTS.builtFor,
      coastToCoast: BRANDS_DEFAULTS.coastToCoast,
      framework: {
        heading: BRANDS_DEFAULTS.framework.heading,
        body: BRANDS_DEFAULTS.framework.body,
        steps: BRANDS_DEFAULTS.framework.steps,
      },
      pricing: {
        heading: BRANDS_DEFAULTS.pricing.heading,
        // Lexical body is left empty — editor can paste/format the
        // long pricing copy in admin. The route falls back to the
        // hardcoded plain-text version when body is empty.
      },
      bloomPay: BRANDS_DEFAULTS.bloomPay,
      cta: BRANDS_DEFAULTS.cta,
      faqHeading: BRANDS_DEFAULTS.faqHeading,
    } as any,
  })
  console.log('✓ Seeded brands-page global')

  // Providers -------------------------------------------------------
  await payload.updateGlobal({
    slug: 'providers-page' as never,
    overrideAccess: true,
    data: {
      hero: {
        headline: PROVIDERS_DEFAULTS.hero.headline,
        body: PROVIDERS_DEFAULTS.hero.body,
        iconTiles: PROVIDERS_DEFAULTS.hero.iconTiles.map((t) => ({
          imageUrl: t.imageUrl,
          alt: t.alt,
        })),
      },
      benefits: PROVIDERS_DEFAULTS.benefits.map((b) => ({
        eyebrow: b.eyebrow,
        heading: b.heading,
        body: b.body,
        imageUrl: b.imageUrl,
        imageAlt: b.imageAlt,
      })),
      criteria: {
        heading: PROVIDERS_DEFAULTS.criteria.heading,
        body: PROVIDERS_DEFAULTS.criteria.body,
        items: PROVIDERS_DEFAULTS.criteria.items,
      },
      framework: {
        heading: PROVIDERS_DEFAULTS.framework.heading,
        body: PROVIDERS_DEFAULTS.framework.body,
        steps: PROVIDERS_DEFAULTS.framework.steps,
      },
      cta: PROVIDERS_DEFAULTS.cta,
      faqHeading: PROVIDERS_DEFAULTS.faqHeading,
    } as any,
  })
  console.log('✓ Seeded providers-page global')

  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
