/**
 * One-time migration: copy BLOG_POSTS (src/lib/blog-posts.ts) into the
 * Payload `posts` collection so the team can edit them in the admin
 * instead of via PRs.
 *
 * Idempotent: re-running upserts by slug, so it's safe to run after
 * editing the source data or after a failed first run.
 *
 * Run with:  pnpm seed:blog-posts
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { BLOG_POSTS, type BlogBlock } from '../src/lib/blog-posts'

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

// Render a CTA-style "linkButton" as a paragraph containing a Lexical
// link node. Editors can later restyle these via the Lexical toolbar.
function linkParagraph(text: string, href: string): LexicalNode {
  return {
    type: 'paragraph',
    children: [
      {
        type: 'link',
        fields: {
          linkType: 'custom',
          newTab: true,
          url: href,
        },
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

function blocksToLexical(blocks: readonly BlogBlock[]) {
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

async function main() {
  const payload = await getPayload({ config })

  for (const post of BLOG_POSTS) {
    const data = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      heroUrl: post.hero,
      displayCategory: post.category,
      displayAuthor: post.author,
      content: blocksToLexical(post.body) as any,
      publishedAt: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
      _status: 'published' as const,
    }

    try {
      const existing = await payload.find({
        collection: 'posts',
        where: { slug: { equals: post.slug } },
        limit: 1,
        overrideAccess: true,
      })

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'posts',
          id: existing.docs[0].id,
          data,
          overrideAccess: true,
        })
        console.log(`↻ Updated: ${post.slug}`)
      } else {
        await payload.create({
          collection: 'posts',
          data,
          overrideAccess: true,
        })
        console.log(`✓ Created: ${post.slug}`)
      }
    } catch (err: any) {
      console.error(`✗ ${post.slug}:`, err.message ?? err)
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
