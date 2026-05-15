import type { Payload, Field } from 'payload'

import { lexicalToMarkdown, looksLikeLexicalState, markdownToLexical } from './lexical'

type FieldsHaver = { fields?: Field[]; tabs?: Array<{ fields?: Field[] }> }

function collectFields(node: FieldsHaver | undefined): Field[] {
  if (!node) return []
  const out: Field[] = []
  if (node.fields) out.push(...node.fields)
  if (node.tabs) {
    for (const tab of node.tabs) {
      if (tab.fields) out.push(...tab.fields)
    }
  }
  return out
}

function richTextFieldPaths(fields: Field[], prefix: string[] = []): string[][] {
  const paths: string[][] = []
  for (const field of fields) {
    if (!('type' in field)) continue
    if (field.type === 'richText' && 'name' in field) {
      paths.push([...prefix, field.name])
      continue
    }
    if (field.type === 'tabs') {
      for (const tab of field.tabs ?? []) {
        const tabPrefix =
          'name' in tab && typeof tab.name === 'string' ? [...prefix, tab.name] : prefix
        paths.push(...richTextFieldPaths(tab.fields ?? [], tabPrefix))
      }
      continue
    }
    if (field.type === 'group' && 'name' in field) {
      paths.push(...richTextFieldPaths(field.fields ?? [], [...prefix, field.name]))
      continue
    }
    if (field.type === 'array' && 'name' in field) {
      // Array items are addressed by index; we mark with '[]' so the walker can iterate.
      paths.push(...richTextFieldPaths(field.fields ?? [], [...prefix, field.name, '[]']))
    }
  }
  return paths
}

function getRichTextPathsForCollection(payload: Payload, collection: string): string[][] {
  const config = payload.collections[collection]?.config
  if (!config) return []
  return richTextFieldPaths(config.fields)
}

function getRichTextPathsForGlobal(payload: Payload, slug: string): string[][] {
  const config = payload.config.globals.find((g) => g.slug === slug)
  if (!config) return []
  return richTextFieldPaths(config.fields)
}

function applyAtPath(
  obj: Record<string, unknown>,
  path: string[],
  transform: (value: unknown) => unknown,
): void {
  if (path.length === 0) return
  const [head, ...rest] = path
  if (head === '[]') {
    if (!Array.isArray(obj)) return
    for (const item of obj as unknown as Record<string, unknown>[]) {
      if (rest.length === 0) continue
      applyAtPath(item, rest, transform)
    }
    return
  }
  if (rest.length === 0) {
    if (head in obj) obj[head] = transform(obj[head])
    return
  }
  const next = obj[head]
  if (next && typeof next === 'object') {
    applyAtPath(next as Record<string, unknown>, rest, transform)
  }
}

/**
 * Convert markdown strings provided in `data` into Lexical JSON for any
 * richText field discovered on the collection schema. Leaves existing
 * Lexical objects untouched so callers can mix raw JSON with markdown.
 */
export function inflateRichText(
  payload: Payload,
  collection: string,
  data: Record<string, unknown>,
  kind: 'collection' | 'global' = 'collection',
): Record<string, unknown> {
  const paths =
    kind === 'collection'
      ? getRichTextPathsForCollection(payload, collection)
      : getRichTextPathsForGlobal(payload, collection)
  for (const path of paths) {
    applyAtPath(data, path, (value) => {
      if (typeof value === 'string') return markdownToLexical(value)
      return value
    })
  }
  return data
}

/**
 * Walk a document and replace Lexical editor state objects with markdown
 * strings so MCP responses are readable in chat. Adds a `__rich_text_paths`
 * meta field listing where the originals lived in case the caller wants
 * to round-trip back to JSON.
 */
export function deflateRichText(doc: Record<string, unknown>): Record<string, unknown> {
  const richPaths: string[] = []
  const walk = (value: unknown, path: string): unknown => {
    if (Array.isArray(value)) {
      return value.map((item, idx) => walk(item, `${path}[${idx}]`))
    }
    if (value && typeof value === 'object') {
      if (looksLikeLexicalState(value)) {
        richPaths.push(path || '<root>')
        return lexicalToMarkdown(value)
      }
      const out: Record<string, unknown> = {}
      for (const [k, v] of Object.entries(value)) {
        out[k] = walk(v, path ? `${path}.${k}` : k)
      }
      return out
    }
    return value
  }
  const transformed = walk(doc, '') as Record<string, unknown>
  if (richPaths.length > 0) transformed.__rich_text_paths = richPaths
  return transformed
}
