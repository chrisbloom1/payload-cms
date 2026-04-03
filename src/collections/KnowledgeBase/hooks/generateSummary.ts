import type { CollectionAfterChangeHook } from 'payload'

/**
 * Extracts plain text from Lexical rich text JSON by recursively
 * walking the node tree and concatenating text node values.
 */
function extractPlainText(node: Record<string, unknown>): string {
  if (node.type === 'text' && typeof node.text === 'string') {
    return node.text
  }

  if (Array.isArray(node.children)) {
    return (node.children as Record<string, unknown>[])
      .map(extractPlainText)
      .join(' ')
  }

  return ''
}

function richTextToPlainText(richText: unknown): string {
  if (!richText || typeof richText !== 'object') return ''

  const root = (richText as Record<string, unknown>).root as
    | Record<string, unknown>
    | undefined

  if (!root || !Array.isArray(root.children)) return ''

  return (root.children as Record<string, unknown>[])
    .map(extractPlainText)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const generateSummary: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation !== 'create' && operation !== 'update') return doc

  const plainText = richTextToPlainText(doc.body)
  const summary = plainText.slice(0, 500)

  if (summary !== doc.summary) {
    await req.payload.update({
      collection: 'articles',
      id: doc.id,
      data: { summary },
      // Prevent infinite loop — skip hooks on this update
      context: { skipSummaryGeneration: true },
    })
    doc.summary = summary
  }

  return doc
}
