/**
 * One-time seed: populate company-page global and team-members
 * collection from the in-repo defaults.
 *
 * Idempotent: team upserted by name; global is updateGlobal.
 *
 * Run with:  pnpm seed:company
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { TEAM } from '../src/data/team'
import { COMPANY_DEFAULTS } from '../src/lib/company-page-resolver'

type LexicalNode = Record<string, unknown>

function textNode(text: string): LexicalNode {
  return {
    type: 'text',
    detail: 0,
    format: 0,
    mode: 'normal',
    style: '',
    text,
    version: 1,
  }
}

function paragraph(text: string): LexicalNode {
  return {
    type: 'paragraph',
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    version: 1,
  }
}

function bioToLexical(bio: string) {
  const paras = bio.split(/\n\n/).filter(Boolean)
  return {
    root: {
      type: 'root',
      children: paras.length > 0 ? paras.map(paragraph) : [paragraph(bio)],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

async function main() {
  const payload = await getPayload({ config })

  // Team members ----------------------------------------------------
  let i = 0
  for (const member of TEAM) {
    const data = {
      name: member.name,
      title: member.title,
      linkedin: member.linkedin,
      photoUrl: member.photo,
      bio: bioToLexical(member.bio),
      sortOrder: i++,
      _status: 'published' as const,
    }
    try {
      const existing = await payload.find({
        collection: 'team-members' as never,
        where: { name: { equals: member.name } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'team-members' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`↻ Team member: ${member.name}`)
      } else {
        await payload.create({
          collection: 'team-members' as never,
          data: data as any,
          overrideAccess: true,
        })
        console.log(`✓ Team member: ${member.name}`)
      }
    } catch (err: any) {
      console.error(`✗ Team member ${member.name}:`, err.message ?? err)
    }
  }

  // Company page global ---------------------------------------------
  await payload.updateGlobal({
    slug: 'company-page' as never,
    overrideAccess: true,
    data: {
      hero: COMPANY_DEFAULTS.hero,
      whatWeDo: COMPANY_DEFAULTS.whatWeDo,
      whoWeAre: COMPANY_DEFAULTS.whoWeAre,
      ecosystem: {
        heading: COMPANY_DEFAULTS.ecosystem.heading,
        paragraphs: COMPANY_DEFAULTS.ecosystem.paragraphs.map((text) => ({ text })),
      },
      resources: COMPANY_DEFAULTS.resources.map((r) => ({
        title: r.title,
        body: r.body,
        href: r.href,
        comingSoon: r.comingSoon ?? false,
      })),
      teamEyebrow: COMPANY_DEFAULTS.teamEyebrow,
    } as any,
  })
  console.log('✓ Seeded company-page global')

  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
