/**
 * Self-contained smoke test for the markdown↔Lexical conversion used by the
 * Payload MCP route. Does not require a database connection — exercises the
 * most fragile piece (rich-text conversion) and prints the round-trip output.
 *
 * Run: `npx tsx scripts/payload-mcp-smoke.ts`
 */

import { lexicalToMarkdown, markdownToLexical } from '../src/lib/payload-mcp/lexical'

const inputs = [
  '# Hello world\n\nThis is a paragraph with **bold** and *italic* and `inline code`.',
  '## Steps\n\n1. First step\n2. Second step\n3. Third step\n',
  '> A blockquote with a [link](https://example.com).',
]

for (const md of inputs) {
  console.log('\n────────── INPUT ──────────')
  console.log(md)
  const lex = markdownToLexical(md)
  console.log('\n────────── LEXICAL ──────────')
  console.log(JSON.stringify(lex, null, 2).slice(0, 400) + '...')
  const back = lexicalToMarkdown(lex)
  console.log('\n────────── ROUND-TRIP MARKDOWN ──────────')
  console.log(back)
}

console.log('\n✓ smoke test complete — no exceptions thrown')
