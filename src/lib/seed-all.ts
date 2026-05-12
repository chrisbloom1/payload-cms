import type { Payload } from 'payload'
import { BLOG_POSTS, type BlogBlock } from '@/lib/blog-posts'
import { CUSTOMER_STORIES, type CustomerStory } from '@/lib/customer-stories'
import { TEAM } from '@/data/team'
import { TESTIMONIALS } from '@/data/testimonials'
import { BLOOM_FAQ } from '@/data/faq'
import { HOME_DEFAULTS } from '@/lib/home-page-defaults'
import { BRANDS_DEFAULTS } from '@/lib/brands-page-resolver'
import { PROVIDERS_DEFAULTS } from '@/lib/providers-page-resolver'
import { COMPANY_DEFAULTS } from '@/lib/company-page-resolver'
import { CONTACT_DEFAULTS } from '@/lib/contact-page-resolver'

/**
 * Consolidated seed runner used by /api/seed-content. Mirrors the
 * standalone scripts in /scripts/seed-* but accepts an existing
 * Payload instance so the API route can reuse the request-bound
 * payload reference instead of spinning up a new one.
 *
 * All upserts are idempotent (find-by-key, then update or create) so
 * calling this endpoint multiple times is safe — it converges the DB
 * back to the in-repo defaults rather than duplicating rows.
 */

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

function heading(text: string, tag: 'h2' | 'h3' | 'h4' = 'h3'): LexicalNode {
  return {
    type: 'heading',
    tag,
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  }
}

function bulletList(items: string[]): LexicalNode {
  return {
    type: 'list',
    listType: 'bullet',
    start: 1,
    tag: 'ul',
    children: items.map((item, index) => ({
      type: 'listitem',
      value: index + 1,
      checked: undefined,
      children: [textNode(item)],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    })),
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  }
}

function linkParagraph(text: string, href: string): LexicalNode {
  return {
    type: 'paragraph',
    children: [
      {
        type: 'link',
        fields: { linkType: 'custom', newTab: true, url: href },
        children: [textNode(text)],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 2,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    version: 1,
  }
}

function blogBlocksToLexical(blocks: readonly BlogBlock[]) {
  const children: LexicalNode[] = blocks.map((block) => {
    switch (block.type) {
      case 'p':
        return paragraph(block.text)
      case 'h3':
        return heading(block.text, 'h3')
      case 'ul':
        return bulletList([...block.items])
      case 'linkButton':
        return linkParagraph(block.text, block.href)
      default: {
        const _exhaustive: never = block
        return paragraph(JSON.stringify(_exhaustive))
      }
    }
  })
  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

function paragraphsToLexical(paragraphs: readonly string[]) {
  return {
    root: {
      type: 'root',
      children: paragraphs.length > 0 ? paragraphs.map(paragraph) : [paragraph('')],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

function singleParagraphLexical(text: string | undefined) {
  if (!text) return undefined
  return paragraphsToLexical([text])
}

function answerStringToLexical(answer: string) {
  const paras = answer.split(/\n\n/).filter(Boolean)
  return {
    root: {
      type: 'root',
      children: paras.length > 0 ? paras.map(paragraph) : [paragraph(answer)],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

const CARD_META: Record<
  string,
  {
    cardTheme: 'navy' | 'navyDeep' | 'teal' | 'mint' | 'cream' | 'lavender' | 'amber'
    cardAlign: 'left' | 'right'
  }
> = {
  'infinite-machine': { cardTheme: 'cream', cardAlign: 'left' },
  grounded: { cardTheme: 'navyDeep', cardAlign: 'right' },
  birdstop: { cardTheme: 'navyDeep', cardAlign: 'left' },
  'wheel-me': { cardTheme: 'teal', cardAlign: 'right' },
  maeving: { cardTheme: 'amber', cardAlign: 'left' },
  'electric-outdoors': { cardTheme: 'navyDeep', cardAlign: 'right' },
  moonbikes: { cardTheme: 'amber', cardAlign: 'left' },
  'dust-moto': { cardTheme: 'mint', cardAlign: 'right' },
  cake: { cardTheme: 'navy', cardAlign: 'left' },
  tokyobike: { cardTheme: 'lavender', cardAlign: 'right' },
}

interface SeedReport {
  collection: string
  created: number
  updated: number
  errors: string[]
}

async function seedBlogPosts(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'posts', created: 0, updated: 0, errors: [] }
  const keepSlugs = new Set(BLOG_POSTS.map((p) => p.slug))

  // 1) Upsert each post in the seed list
  for (const post of BLOG_POSTS) {
    const data = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      heroUrl: post.hero,
      displayCategory: post.category,
      displayAuthor: post.author,
      content: blogBlocksToLexical(post.body) as any,
      publishedAt: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
      _status: 'published' as const,
    }
    try {
      const existing = await (payload as any).find({
        collection: 'posts',
        where: { slug: { equals: post.slug } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await (payload as any).update({ collection: 'posts', id: existing.docs[0].id, data, overrideAccess: true })
        r.updated++
      } else {
        await (payload as any).create({ collection: 'posts', data, overrideAccess: true })
        r.created++
      }
    } catch (err: any) {
      r.errors.push(`${post.slug}: ${err.message ?? err}`)
    }
  }

  // 2) Purge any posts in the DB whose slug is NOT in the seed list. This
  //    lets us empty BLOG_POSTS (or remove individual entries) and have the
  //    next build delete the corresponding rows. Drafts + versions are
  //    cascaded by the collection config.
  try {
    const all = await (payload as any).find({
      collection: 'posts',
      limit: 1000,
      depth: 0,
      overrideAccess: true,
    })
    for (const doc of all.docs ?? []) {
      const slug = (doc as any).slug as string | undefined
      if (slug && keepSlugs.has(slug)) continue
      try {
        await (payload as any).delete({ collection: 'posts', id: (doc as any).id, overrideAccess: true })
      } catch (err: any) {
        r.errors.push(`delete ${slug ?? doc.id}: ${err.message ?? err}`)
      }
    }
  } catch (err: any) {
    r.errors.push(`purge: ${err.message ?? err}`)
  }

  return r
}

function buildCustomerStoryPayload(story: CustomerStory, index: number) {
  const card = CARD_META[story.slug] ?? { cardTheme: 'cream' as const, cardAlign: 'left' as const }
  return {
    title: story.title,
    slug: story.slug,
    cardTheme: card.cardTheme,
    cardAlign: card.cardAlign,
    sortOrder: index,
    heroUrl: story.hero,
    logoUrl: story.logo,
    logoAlt: story.logoAlt,
    logoType: 'monochrome' as const,
    logoMonoColor:
      story.logoMonoColor === 'white' || story.logoMonoColor === 'black'
        ? story.logoMonoColor
        : 'black',
    topBenefits: story.topBenefits.map((benefit) => ({ benefit })),
    nodes: story.nodes.map((value) => ({ value })),
    intro: paragraphsToLexical(story.intro),
    body: paragraphsToLexical(story.body),
    quote: { text: story.quote.text, author: story.quote.author, role: story.quote.role },
    outro: singleParagraphLexical(story.outro),
    benefits: story.benefits.map((b) => ({ title: b.title, description: b.description })),
    closing: singleParagraphLexical(story.closing),
    publishedAt: new Date().toISOString(),
    _status: 'published' as const,
  }
}

async function seedCustomerStories(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'customer-stories', created: 0, updated: 0, errors: [] }
  let i = 0
  for (const story of CUSTOMER_STORIES) {
    const data = buildCustomerStoryPayload(story, i++)
    try {
      const existing = await (payload as any).find({
        collection: 'customer-stories' as never,
        where: { slug: { equals: story.slug } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await (payload as any).update({
          collection: 'customer-stories' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        r.updated++
      } else {
        await (payload as any).create({
          collection: 'customer-stories' as never,
          data: data as any,
          overrideAccess: true,
        })
        r.created++
      }
    } catch (err: any) {
      r.errors.push(`${story.slug}: ${err.message ?? err}`)
    }
  }
  return r
}

async function seedTestimonials(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'testimonials', created: 0, updated: 0, errors: [] }
  let i = 0
  for (const t of TESTIMONIALS) {
    const data = {
      quote: t.quote,
      author: t.author,
      title: t.title,
      company: t.company,
      avatarUrl: t.avatarSrc,
      sortOrder: i++,
      _status: 'published' as const,
    }
    try {
      const existing = await (payload as any).find({
        collection: 'testimonials' as never,
        where: { author: { equals: t.author } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await (payload as any).update({
          collection: 'testimonials' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        r.updated++
      } else {
        await (payload as any).create({
          collection: 'testimonials' as never,
          data: data as any,
          overrideAccess: true,
        })
        r.created++
      }
    } catch (err: any) {
      r.errors.push(`${t.author}: ${err.message ?? err}`)
    }
  }
  return r
}

async function seedMarketingFaqs(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'marketing-faqs', created: 0, updated: 0, errors: [] }
  let j = 0
  for (const faq of BLOOM_FAQ) {
    const data = {
      question: faq.question,
      answer: answerStringToLexical(faq.answer),
      surfaces: ['brands', 'providers'],
      sortOrder: j++,
    }
    try {
      const existing = await (payload as any).find({
        collection: 'marketing-faqs' as never,
        where: { question: { equals: faq.question } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await (payload as any).update({
          collection: 'marketing-faqs' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        r.updated++
      } else {
        await (payload as any).create({
          collection: 'marketing-faqs' as never,
          data: data as any,
          overrideAccess: true,
        })
        r.created++
      }
    } catch (err: any) {
      r.errors.push(`${faq.question.slice(0, 40)}: ${err.message ?? err}`)
    }
  }
  return r
}

async function seedTeamMembers(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'team-members', created: 0, updated: 0, errors: [] }
  let i = 0
  for (const member of TEAM) {
    const data = {
      name: member.name,
      title: member.title,
      linkedin: member.linkedin,
      photoUrl: member.photo,
      bio: paragraphsToLexical(member.bio.split(/\n\n/).filter(Boolean)),
      sortOrder: i++,
      _status: 'published' as const,
    }
    try {
      const existing = await (payload as any).find({
        collection: 'team-members' as never,
        where: { name: { equals: member.name } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length > 0) {
        await (payload as any).update({
          collection: 'team-members' as never,
          id: existing.docs[0].id,
          data: data as any,
          overrideAccess: true,
        })
        r.updated++
      } else {
        await (payload as any).create({
          collection: 'team-members' as never,
          data: data as any,
          overrideAccess: true,
        })
        r.created++
      }
    } catch (err: any) {
      r.errors.push(`${member.name}: ${err.message ?? err}`)
    }
  }
  return r
}

async function seedHomePage(payload: Payload): Promise<SeedReport> {
  const r: SeedReport = { collection: 'home-page', created: 0, updated: 1, errors: [] }
  try {
    await (payload as any).updateGlobal({
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
  } catch (err: any) {
    r.updated = 0
    r.errors.push(`home-page: ${err.message ?? err}`)
  }
  return r
}

async function seedMarketingPages(payload: Payload): Promise<SeedReport[]> {
  const reports: SeedReport[] = []

  // Brands
  const brandsR: SeedReport = { collection: 'brands-page', created: 0, updated: 1, errors: [] }
  try {
    await (payload as any).updateGlobal({
      slug: 'brands-page' as never,
      overrideAccess: true,
      data: {
        hero: BRANDS_DEFAULTS.hero,
        verticals: BRANDS_DEFAULTS.verticals.map((v) => ({ label: v.label, imageUrl: v.imageUrl })),
        builtFor: BRANDS_DEFAULTS.builtFor,
        coastToCoast: BRANDS_DEFAULTS.coastToCoast,
        framework: {
          heading: BRANDS_DEFAULTS.framework.heading,
          body: BRANDS_DEFAULTS.framework.body,
          steps: BRANDS_DEFAULTS.framework.steps,
        },
        pricing: { heading: BRANDS_DEFAULTS.pricing.heading },
        bloomPay: BRANDS_DEFAULTS.bloomPay,
        cta: BRANDS_DEFAULTS.cta,
        faqHeading: BRANDS_DEFAULTS.faqHeading,
      } as any,
    })
  } catch (err: any) {
    brandsR.updated = 0
    brandsR.errors.push(err.message ?? String(err))
  }
  reports.push(brandsR)

  // Providers
  const providersR: SeedReport = { collection: 'providers-page', created: 0, updated: 1, errors: [] }
  try {
    await (payload as any).updateGlobal({
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
  } catch (err: any) {
    providersR.updated = 0
    providersR.errors.push(err.message ?? String(err))
  }
  reports.push(providersR)

  // Company
  const companyR: SeedReport = { collection: 'company-page', created: 0, updated: 1, errors: [] }
  try {
    await (payload as any).updateGlobal({
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
        resources: COMPANY_DEFAULTS.resources.map((rc) => ({
          title: rc.title,
          body: rc.body,
          href: rc.href,
          comingSoon: rc.comingSoon ?? false,
        })),
        teamEyebrow: COMPANY_DEFAULTS.teamEyebrow,
      } as any,
    })
  } catch (err: any) {
    companyR.updated = 0
    companyR.errors.push(err.message ?? String(err))
  }
  reports.push(companyR)

  // Contact
  const contactR: SeedReport = { collection: 'contact-page', created: 0, updated: 1, errors: [] }
  try {
    await (payload as any).updateGlobal({
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
  } catch (err: any) {
    contactR.updated = 0
    contactR.errors.push(err.message ?? String(err))
  }
  reports.push(contactR)

  return reports
}

export async function seedAll(payload: Payload): Promise<SeedReport[]> {
  const reports: SeedReport[] = []
  reports.push(await seedBlogPosts(payload))
  reports.push(await seedCustomerStories(payload))
  reports.push(await seedTestimonials(payload))
  reports.push(await seedMarketingFaqs(payload))
  reports.push(await seedTeamMembers(payload))
  reports.push(await seedHomePage(payload))
  reports.push(...(await seedMarketingPages(payload)))
  return reports
}
