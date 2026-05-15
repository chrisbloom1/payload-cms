import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@payloadcms/richtext-lexical/lexical/markdown'
import { createHeadlessEditor } from '@payloadcms/richtext-lexical/lexical/headless'
import { HeadingNode, QuoteNode } from '@payloadcms/richtext-lexical/lexical/rich-text'
import { ListItemNode, ListNode } from '@payloadcms/richtext-lexical/lexical/list'
import { LinkNode } from '@payloadcms/richtext-lexical/lexical/link'

// CodeNode is intentionally omitted: Payload doesn't re-export @lexical/code
// and code-block round-tripping isn't required for help-article workflows.
// Inline code (`like this`) still works via the default text transformers.
const editorNodes = [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode]

export function markdownToLexical(markdown: string): unknown {
  const editor = createHeadlessEditor({ nodes: editorNodes })
  editor.update(
    () => {
      $convertFromMarkdownString(markdown, TRANSFORMERS)
    },
    { discrete: true },
  )
  return editor.getEditorState().toJSON()
}

export function lexicalToMarkdown(state: unknown): string {
  if (!state || typeof state !== 'object') return ''
  const editor = createHeadlessEditor({ nodes: editorNodes })
  let parsed
  try {
    parsed = editor.parseEditorState(state as Parameters<typeof editor.parseEditorState>[0])
  } catch {
    return ''
  }
  let out = ''
  editor.setEditorState(parsed)
  editor.update(
    () => {
      out = $convertToMarkdownString(TRANSFORMERS)
    },
    { discrete: true },
  )
  return out
}

export function looksLikeLexicalState(value: unknown): value is { root: unknown } {
  return Boolean(value && typeof value === 'object' && 'root' in (value as object))
}
