import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
      {
        hostname: 'cdn.loom.com',
        protocol: 'https',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'node_modules')],
  },
  reactStrictMode: true,
  // Tree-shake large icon / UI / animation packages so the initial JS
  // bundle doesn't pull in the entire library when only a few exports
  // are referenced.
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-label',
      '@radix-ui/react-select',
      '@radix-ui/react-slot',
    ],
  },
  redirects,
}

export default withPayload(nextConfig)
