/**
 * Pure data + types for the HomePage global. Split out from
 * home-page-resolver.ts so client components (HomeHeroNative,
 * EcosystemStats, LazyHomeSections) can import HOME_DEFAULTS / types
 * without dragging in the server-only Payload SDK (which references
 * `node:fs` and breaks the client bundler).
 *
 * The resolver imports + re-exports from here for backward compat in
 * server-component code.
 */

export interface HomeLogo {
  src: string
  alt: string
  width: number
  height: number
}

export type StatLabelColor = 'orange' | 'coral' | 'red' | 'navy'

export interface HomeStat {
  value: number
  suffix: string
  label: string
  description: string
  labelColor: StatLabelColor
}

export interface HomeContent {
  hero: {
    headline: string
    subheadingPrefix: string
    rotatingWords: string[]
    subheadingSuffix: string
    chatPlaceholder: string
    chatButtonLabel: string
    chatPrefillUrl: string
    badgeText: string
    tagline: string
  }
  logoMarqueeRow1: HomeLogo[]
  logoMarqueeRow2: HomeLogo[]
  discover: { heading: string; body: string }
  manage: { heading: string; body: string }
  pay: { heading: string; body: string }
  ecosystem: { heading: string; body: string; stats: HomeStat[] }
}

export const DEFAULT_LOGOS_ROW_1: HomeLogo[] = [
  { src: 'https://framerusercontent.com/images/zOU0s3HDH3nSML4Xy125bAqSgY.svg?width=216&height=16', alt: 'Boaz Bikes', width: 216, height: 16 },
  { src: 'https://framerusercontent.com/images/5zu3Iz824S6q6ht47TTJPbJljZc.svg?width=202&height=64', alt: 'DUST', width: 202, height: 64 },
  { src: 'https://framerusercontent.com/images/v0EIHszp30eu4nqYKuVlDvy32no.svg?width=136&height=42', alt: 'tokyobike', width: 136, height: 42 },
  { src: 'https://framerusercontent.com/images/92Gt2GLdGujypVTujIOUe3uSdwY.svg?width=80&height=57', alt: 'Civilized Cycles', width: 80, height: 57 },
  { src: 'https://framerusercontent.com/images/67rBqwLG8X5Rf2B3EcMbwq8sSzU.svg?width=183&height=36', alt: 'Electric Plant Co', width: 183, height: 36 },
  { src: 'https://framerusercontent.com/images/nquQYqc6S2OZaM9ZkqAv6YWVWA.svg?width=207&height=55', alt: 'Toyota', width: 207, height: 55 },
  { src: 'https://framerusercontent.com/images/7rx8tX8GFdgtExQizpPxn8X9vLM.svg?width=127&height=91', alt: 'Forecast Sardinia', width: 127, height: 91 },
  { src: 'https://framerusercontent.com/images/DgMiPYDc7FGjihJbZGcGw7rKZ0s.svg?width=376&height=91', alt: 'cake', width: 376, height: 91 },
  { src: 'https://framerusercontent.com/images/gpFud7o1WyPiR2bfQcWgsw4GySU.png?width=200&height=41', alt: 'CLIP', width: 200, height: 41 },
]

export const DEFAULT_LOGOS_ROW_2: HomeLogo[] = [
  { src: 'https://framerusercontent.com/images/JFCMKhQY1cM88fhddb3nkOKY.svg?width=246&height=41', alt: 'Forward X Robotics', width: 246, height: 41 },
  { src: 'https://framerusercontent.com/images/lDgBE3TMybzd3s0Fb6Sukn7c4zw.png?width=220&height=81', alt: 'TIME', width: 220, height: 81 },
  { src: 'https://framerusercontent.com/images/2Qe4cxisK4TvuGAOlzUR9xynuXQ.svg?width=185&height=33', alt: 'emoto Supply Co', width: 185, height: 33 },
  { src: 'https://framerusercontent.com/images/n696g0ZwfNyZ2Sonp7GZkfeYdg.svg?width=152&height=25', alt: 'GROUNDED', width: 152, height: 25 },
  { src: 'https://framerusercontent.com/images/4Tn3Wd1Y3B29DLkui0cm775VRIk.svg?width=444&height=501', alt: 'Brand', width: 444, height: 501 },
  { src: 'https://framerusercontent.com/images/8SVNnZsZJzlex74wHBUCGfl4t6s.png?width=500&height=106', alt: 'MOONBIKES', width: 500, height: 106 },
  { src: 'https://framerusercontent.com/images/roMWh32P8PO0Laeve9lz5ESnWnc.svg?width=363&height=100', alt: 'GLĪD', width: 363, height: 100 },
  { src: 'https://framerusercontent.com/images/i1nNnbxIqz7kxapTHKxQckMx5A.svg?width=870&height=600', alt: 'Brand', width: 870, height: 600 },
  { src: 'https://framerusercontent.com/images/q1E5JJeezbHty7QWcG2KAtq6s.png?width=218&height=41', alt: 'LAND', width: 218, height: 41 },
  { src: 'https://framerusercontent.com/images/aAfjWgYyKluPFIZWkD5Ze3CGDk.svg?width=117&height=27', alt: 'Vela', width: 117, height: 27 },
  { src: 'https://framerusercontent.com/images/NQ4fKEZ3mTgsFC4kUoIKAWWkTA.png?width=130&height=46', alt: "It's Electric", width: 130, height: 46 },
  { src: 'https://framerusercontent.com/images/msfZWsUknmu6ZDVetqXa6UtkKRw.svg?width=110&height=22', alt: 'tubular.network', width: 110, height: 22 },
  { src: 'https://framerusercontent.com/images/mFPc2jSqPh5spd5K19UjxTat7vI.png?width=268&height=199', alt: 'Brand', width: 268, height: 199 },
  { src: 'https://framerusercontent.com/images/1ZJXbZsqCC7R5tIIfzBW0cYYoI.png?width=120&height=17', alt: 'ENVO', width: 120, height: 17 },
]

export const HOME_DEFAULTS: HomeContent = {
  hero: {
    headline: "Hardware shouldn't be hard.",
    subheadingPrefix: 'We help make',
    rotatingWords: ['Manufacturing', 'Warehousing', 'Assembly', 'Logistics'],
    subheadingSuffix: 'easier.',
    chatPlaceholder: "Describe your product's supply chain needs",
    chatButtonLabel: 'Chat now',
    chatPrefillUrl: 'https://app.bloomnetwork.ai/marketplace/request/new',
    badgeText: 'Start for free now!',
    tagline:
      'Bloom helps leading mobility, energy, robotics brands scale faster through our vetted network',
  },
  logoMarqueeRow1: DEFAULT_LOGOS_ROW_1,
  logoMarqueeRow2: DEFAULT_LOGOS_ROW_2,
  discover: {
    heading:
      'Discover and access a vetted supply chain network ready to scale',
    body: 'Bloom intelligently matches brands with vetted supply chain and operations partners tailored to their products requirements throughout its lifecycle.',
  },
  manage: {
    heading: "Easily manage partners with Bloom's platform.",
    body: 'Discover, bid, book, and pay supply chain and operation partners all on a single platform.',
  },
  pay: {
    heading: 'Simplify and expand payment options',
    body: 'Leverage BloomPay to pay all your vendors in one place and access extended payment terms up to 120 days.',
  },
  ecosystem: {
    heading: 'Cultivating an ecosystem',
    body: 'With deep roots in the hardware industry, we provide the support and connections you need to flourish, ensuring your business blossoms in an ever-evolving landscape.',
    stats: [
      { value: 40, suffix: '%', label: 'Reduction', description: 'in lead times', labelColor: 'orange' },
      { value: 25, suffix: '%', label: 'Lower', description: 'fulfillment costs', labelColor: 'coral' },
      { value: 80, suffix: '%', label: 'Faster', description: 'supplier on-boarding', labelColor: 'red' },
    ],
  },
}
