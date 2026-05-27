import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

const DEFAULT_TITLE = "Hardware shouldn't be hard."
const DEFAULT_TAGLINE =
  'The supply chain platform for hardware companies. Discover, bid, book, and pay vetted manufacturing, warehousing, assembly, and logistics partners, all in one place.'

/**
 * Dynamic OG image generator.
 *
 * Defaults to the marketing tagline; per-page overrides come in as
 * query params:
 *   /og                                             → marketing default
 *   /og?title=Article%20title&tag=Knowledge+Base    → KB / blog override
 *   /og?title=Customer+Story&tag=Stories            → customer story
 *
 * Using query params keeps the route a single edge function — no
 * separate /og/kb, /og/blog routes needed.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || DEFAULT_TITLE
  const tagline = searchParams.get('description') || DEFAULT_TAGLINE
  const tag = searchParams.get('tag') // e.g. "Knowledge Base", "Stories", "Guides"

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: '#F6F4F0',
          padding: '72px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <svg width="44" height="44" viewBox="832 134 114 84" fill="none">
            <path
              d="M938.803 153.434L903.491 188.746L922.602 142.608L913.2 138.714L894.089 184.851V134.912H883.911V184.851L864.8 138.714L855.398 142.608L874.509 188.746L839.197 153.434L832 160.63L889 217.63L946 160.63L938.803 153.434Z"
              fill="#EE2737"
            />
          </svg>
          <span style={{ fontSize: '32px', fontWeight: 700, color: '#221742' }}>
            Bloom
          </span>
          {tag ? (
            <span
              style={{
                marginLeft: '6px',
                padding: '4px 12px',
                borderRadius: '6px',
                background: '#221742',
                color: '#F6F4F0',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          ) : null}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: title.length > 50 ? '60px' : '76px',
              fontWeight: 700,
              color: '#221742',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: '1056px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#221742',
              opacity: 0.8,
              lineHeight: 1.4,
              maxWidth: '1056px',
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#221742',
            opacity: 0.6,
            fontSize: '20px',
          }}
        >
          <span>bloomnetwork.ai</span>
          <span>For brands · For providers</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
