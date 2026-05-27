/**
 * One-shot script: downscale + WebP-encode oversized hero images in
 * /public so Vercel's image optimizer pulls a smaller source on
 * cache miss. Idempotent — skips files already smaller than the
 * target.
 *
 * Run with: npx tsx scripts/optimize-images.ts
 *
 * Sources flagged in the pre-launch audit:
 *   public/images/stories/wheel-me-hero.jpg          2.9 MB
 *   public/images/stories/infinite-machine-hero.jpg  1.8 MB
 *   public/images/brands/hero-banner.png             1.78 MB
 *   public/images/stories/cake-hero.webp             1.0 MB
 *   public/images/stories/birdstop-hero.jpg          895 KB
 *
 * Anything under 300 KB is left alone. Everything else is resampled
 * to MAX_WIDTH (default 1600 px) and re-encoded as WebP at quality 78,
 * which is the sweet spot for hero photography. JPEGs and PNGs are
 * replaced in-place — the original extension is kept in the filename
 * so consuming code (next/image src strings) doesn't need to change.
 */
import { readdir, stat, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const ROOT = 'public/images'
const MAX_WIDTH = 1600
const TARGET_KB = 300
const SKIP_BELOW_BYTES = 300 * 1024 // don't touch files already small

const STATS = {
  scanned: 0,
  optimized: 0,
  skipped: 0,
  bytesSavedTotal: 0,
}

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (e) => {
      const p = join(dir, e.name)
      if (e.isDirectory()) return walk(p)
      if (/\.(jpe?g|png|webp)$/i.test(e.name)) return [p]
      return []
    }),
  )
  return files.flat()
}

async function optimize(path: string): Promise<void> {
  STATS.scanned++
  const info = await stat(path)
  if (info.size < SKIP_BELOW_BYTES) {
    STATS.skipped++
    return
  }

  const buf = await readFile(path)
  const img = sharp(buf, { failOn: 'none' })
  const meta = await img.metadata()
  if (!meta.width || meta.width <= MAX_WIDTH && info.size < TARGET_KB * 1024 * 1.5) {
    STATS.skipped++
    return
  }

  const resized = img.resize({
    width: Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH),
    withoutEnlargement: true,
  })

  // Preserve the original extension so consumers don't break. webp is
  // recommended for photographic hero content; PNG inputs targeting
  // photography can also become webp via the same .png url.
  const ext = path.split('.').pop()!.toLowerCase()
  let out: Buffer
  if (ext === 'webp') {
    out = await resized.webp({ quality: 78, effort: 5 }).toBuffer()
  } else if (ext === 'png') {
    // Try webp first; if it shrinks the file, write that — otherwise
    // keep the PNG encoding. PNGs of photographic content commonly
    // shrink 5-10x via webp.
    const asWebp = await resized.clone().webp({ quality: 78, effort: 5 }).toBuffer()
    const asPng = await resized.png({ compressionLevel: 9, palette: true }).toBuffer()
    out = asWebp.length < asPng.length ? asWebp : asPng
  } else {
    out = await resized.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
  }

  if (out.length < info.size) {
    await writeFile(path, out)
    STATS.optimized++
    STATS.bytesSavedTotal += info.size - out.length
    const before = (info.size / 1024).toFixed(0)
    const after = (out.length / 1024).toFixed(0)
    console.log(`  ${path}: ${before} KB → ${after} KB`)
  } else {
    STATS.skipped++
  }
}

async function main() {
  console.log(`Scanning ${ROOT}/ for images > ${SKIP_BELOW_BYTES / 1024} KB…`)
  const files = await walk(ROOT)
  for (const f of files) {
    await optimize(f)
  }
  console.log()
  console.log(`Scanned:    ${STATS.scanned}`)
  console.log(`Optimized:  ${STATS.optimized}`)
  console.log(`Skipped:    ${STATS.skipped}`)
  console.log(`Saved:      ${(STATS.bytesSavedTotal / 1024 / 1024).toFixed(2)} MB`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
