/**
 * One-time seed: populate the contact-page global with defaults.
 * Run with:  pnpm seed:contact
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { CONTACT_DEFAULTS } from '../src/lib/contact-page-resolver'

async function main() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'contact-page' as never,
    overrideAccess: true,
    data: {
      hero: CONTACT_DEFAULTS.hero,
      paths: CONTACT_DEFAULTS.paths,
      formSection: CONTACT_DEFAULTS.formSection,
      officesHeading: CONTACT_DEFAULTS.officesHeading,
      offices: CONTACT_DEFAULTS.offices,
      connectHeading: CONTACT_DEFAULTS.connectHeading,
      linkedinUrl: CONTACT_DEFAULTS.linkedinUrl,
    } as any,
  })
  console.log('✓ Seeded contact-page global')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
