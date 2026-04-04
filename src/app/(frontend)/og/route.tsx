import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          backgroundColor: '#F2FBF9',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <svg width="48" height="48" viewBox="832 134 114 84" fill="none">
            <path
              d="M938.803 153.434L903.491 188.746L922.602 142.608L913.2 138.714L894.089 184.851V134.912H883.911V184.851L864.8 138.714L855.398 142.608L874.509 188.746L839.197 153.434L832 160.63L889 217.63L946 160.63L938.803 153.434Z"
              fill="#EE2737"
            />
          </svg>
          <span style={{ fontSize: '36px', fontWeight: 700, color: '#1D122A' }}>Bloom</span>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#1D122A',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Knowledge Base
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#6B7280',
            lineHeight: 1.4,
          }}
        >
          Guides, articles, and answers for the Bloom platform
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
