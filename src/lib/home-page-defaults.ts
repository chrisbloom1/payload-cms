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
  { src: '/images/marquee-logos/boaz-bikes.svg', alt: 'Boaz Bikes', width: 216, height: 16 },
  { src: '/images/marquee-logos/dust.svg', alt: 'DUST', width: 202, height: 64 },
  { src: '/images/marquee-logos/tokyobike.svg', alt: 'tokyobike', width: 136, height: 42 },
  { src: '/images/marquee-logos/civilized-cycles.svg', alt: 'Civilized Cycles', width: 80, height: 57 },
  { src: '/images/marquee-logos/electric-plant-co.svg', alt: 'Electric Plant Co', width: 183, height: 36 },
  { src: '/images/marquee-logos/toyota.svg', alt: 'Toyota', width: 207, height: 55 },
  { src: '/images/marquee-logos/forecast-sardinia.svg', alt: 'Forecast Sardinia', width: 127, height: 91 },
  { src: '/images/marquee-logos/cake.svg', alt: 'cake', width: 376, height: 91 },
  { src: '/images/marquee-logos/clip.png', alt: 'CLIP', width: 200, height: 41 },
  { src: '/images/marquee-logos/bicycle-transit.png', alt: 'Bicycle Transit Systems', width: 133, height: 48 },
  { src: '/images/marquee-logos/biomega.png', alt: 'Biomega', width: 405, height: 48 },
  { src: '/images/marquee-logos/birdstop.png', alt: 'Birdstop', width: 148, height: 48 },
  { src: '/images/marquee-logos/bo.svg', alt: 'Bo', width: 70, height: 48 },
  { src: '/images/marquee-logos/electric-outdoors.svg', alt: 'Electric Outdoors', width: 181, height: 48 },
  { src: '/images/marquee-logos/esspi.png', alt: 'ESSPI', width: 140, height: 48 },
  { src: '/images/marquee-logos/fauna-robotics.png', alt: 'Fauna Robotics', width: 116, height: 48 },
  { src: '/images/marquee-logos/hayla.png', alt: 'Hayla', width: 143, height: 48 },
  { src: '/images/marquee-logos/infinite-machine.svg', alt: 'Infinite Machine', width: 67, height: 48 },
  { src: '/images/marquee-logos/jatco.png', alt: 'JATCO', width: 181, height: 48 },
  { src: '/images/marquee-logos/lightfoot.png', alt: 'Lightfoot', width: 357, height: 48 },
  { src: '/images/marquee-logos/maeving.png', alt: 'Maeving', width: 337, height: 48 },
]

export const DEFAULT_LOGOS_ROW_2: HomeLogo[] = [
  { src: '/images/marquee-logos/forward-x-robotics.svg', alt: 'Forward X Robotics', width: 246, height: 41 },
  { src: '/images/marquee-logos/time.png', alt: 'TIME', width: 220, height: 81 },
  { src: '/images/marquee-logos/emoto-supply-co.svg', alt: 'emoto Supply Co', width: 185, height: 33 },
  { src: '/images/marquee-logos/grounded.svg', alt: 'GROUNDED', width: 152, height: 25 },
  { src: '/images/marquee-logos/brand-1.svg', alt: 'Brand', width: 444, height: 501 },
  { src: '/images/marquee-logos/moonbikes.png', alt: 'MOONBIKES', width: 500, height: 106 },
  { src: '/images/marquee-logos/glid.svg', alt: 'GLĪD', width: 363, height: 100 },
  { src: '/images/marquee-logos/brand-2.svg', alt: 'Brand', width: 870, height: 600 },
  { src: '/images/marquee-logos/land.png', alt: 'LAND', width: 218, height: 41 },
  { src: '/images/marquee-logos/vela.svg', alt: 'Vela', width: 117, height: 27 },
  { src: '/images/marquee-logos/its-electric.png', alt: "It's Electric", width: 130, height: 46 },
  { src: '/images/marquee-logos/tubular-network.svg', alt: 'tubular.network', width: 110, height: 22 },
  { src: '/images/marquee-logos/brand-3.png', alt: 'Brand', width: 268, height: 199 },
  { src: '/images/marquee-logos/envo.png', alt: 'ENVO', width: 120, height: 17 },
  { src: '/images/marquee-logos/mavrik.png', alt: 'MAVRIK', width: 266, height: 48 },
  { src: '/images/marquee-logos/n-bikes.png', alt: 'n+ Bikes', width: 98, height: 48 },
  { src: '/images/marquee-logos/nox-metals.svg', alt: 'Nox Metals', width: 626, height: 48 },
  { src: '/images/marquee-logos/openroad.png', alt: 'OpenRoad', width: 43, height: 48 },
  { src: '/images/marquee-logos/pave-motors.png', alt: 'Pave Motors', width: 170, height: 48 },
  { src: '/images/marquee-logos/stoneridge.png', alt: 'Stoneridge', width: 109, height: 48 },
  { src: '/images/marquee-logos/unlimited-biking.png', alt: 'Unlimited Biking', width: 408, height: 48 },
  { src: '/images/marquee-logos/vassla.png', alt: 'Vässla', width: 206, height: 48 },
  { src: '/images/marquee-logos/vue-mobility.png', alt: 'Vue Mobility', width: 572, height: 48 },
  { src: '/images/marquee-logos/western-magnetics.png', alt: 'Western Magnetics', width: 68, height: 48 },
  { src: '/images/marquee-logos/wheelme.svg', alt: 'wheel.me', width: 239, height: 48 },
  { src: '/images/marquee-logos/whizzer.png', alt: 'Whizzer', width: 156, height: 48 },
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
