import type { CollectionBeforeChangeHook } from 'payload'

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

/**
 * Mutates `data` in-place so the summary is written in the same DB write
 * as the rest of the doc. Previously this was an afterChange hook that
 * did a separate `payload.update()` to backfill the summary — but on
 * draft creation that inner update's findByID couldn't see the just-
 * created draft (defaults to published-only) and threw "Not Found",
 * which surfaced as the failure mode every MCP article create hit.
 *
 * beforeChange has no separate write, no findByID, no version
 * resolution — it's just a transform on the data going to the DB.
 */
export const generateSummary: CollectionBeforeChangeHook = ({ data }) => {
  const body = (data as { body?: unknown }).body
  if (body == null) return data

  const plainText = richTextToPlainText(body)
  ;(data as { summary?: string }).summary = plainText.slice(0, 500)
  return data
}
