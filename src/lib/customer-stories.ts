export interface KeyBenefit {
  text: string;
}

export interface BenefitCard {
  title: string;
  description: string;
}

export interface StoryQuote {
  text: string;
  author: string;
  role: string;
}

export interface CustomerStory {
  slug: string;
  title: string;
  hero: string;
  logo: string;
  logoAlt: string;
  /**
   * Source asset color of the mono logo. White-fill SVGs (e.g. Grounded,
   * Birdstop) need a `brightness(0)` filter when displayed on light
   * backgrounds; otherwise they render invisible. Defaults to "black".
   */
  logoMonoColor?: "white" | "black" | "color";
  /** Top 3 ALL-CAPS benefit lines that appear in the dark navy band */
  topBenefits: readonly string[];
  /** "Build" / "Deliver" / "Service" pills shown next to top benefits */
  nodes: readonly string[];
  /** First narrative paragraph(s) introducing the brand */
  intro: readonly string[];
  /** Body paragraphs after the intro image */
  body: readonly string[];
  quote: StoryQuote;
  /** Closing summary paragraph after quote */
  outro?: string;
  /** Numbered/bulleted detail benefits at the bottom */
  benefits: readonly BenefitCard[];
  /** Final closing line */
  closing?: string;
}

export const CUSTOMER_STORIES: readonly CustomerStory[] = [
  {
    slug: "infinite-machine",
    title:
      "Bloom supports Infinite Machine’s launch with roll-on/roll-off delivery and global logistics network",
    hero: "/images/stories/infinite-machine-hero.jpg",
    logo: "/images/stories/infinite-machine-logo.png",
    logoAlt: "Infinite Machine",
    topBenefits: [
      "Infinite Machine leverages Bloom’s no box, roll-on/roll-off delivery network so vehicles arrive fully assembled, tested, and ready to ride.",
      "Bloom's logistics network ensures timely, white-glove delivery of completed electric vehicles to customers across the U.S.",
      "International shipping, customs support, and reverse logistics give Infinite Machine a scalable path as their business grows.",
    ],
    nodes: ["Deliver", "Service"],
    intro: [
      "Infinite Machine is redefining urban mobility with two flagship models it calls the “best non-cars on Earth.” P1 is a high-performance, design-forward electric scooter, while the Olto applies the same design language and technology to an e-bike.",
      "With demand growing rapidly for both vehicles, the next step was to scale up without compromising their premium customer experience and keeping the core team focused on vehicles, riders, and brand.",
    ],
    body: [
      "Bloom mobilized its powersports-ready logistics network to manage the complex movement of completed vehicles, ensuring a seamless journey from the factory floor to the customer's driveway and becoming an extension of Infinite Machine's operations.",
      "No crates. No assembly. Customers receive the P1 and Olto fully built, charged, and ready to ride. Roll-on/roll-off delivery partners within Bloom’s network are already experienced in handling powersports and electric vehicles, and operate under clear standards for storage, preparation, and handoff. Infinite Machine also leverages routing inventory through Bloom’s warehouse and 3PL partners who specialize in storing, staging, and moving high-value vehicles, eliminating the need to build and operate warehouse facilities city by city.",
    ],
    quote: {
      text: "As we scale P1 and Olto across the United States and into new markets, we knew we did not want to become a logistics company on top of everything else we are building. Working with Bloom lets us plug into partners who understand electric vehicles, from warehouses to last mile delivery and customs. Our riders get a fully built, premium delivery experience and our team stays focused on building the best non-cars on earth.",
      author: "Nolan Fawthorp",
      role: "COO",
    },
    benefits: [
      {
        title: "Premium no box delivery",
        description:
          "The P1 and Olto arrive fully assembled, checked, and road-ready, ensuring the last mile experience reflects the care put into both the product and the brand. In addition to roll-on/roll-off deliveries, Bloom also supports premium freight services with uncrating, room-of-choice, and debris removal included.",
      },
      {
        title: "Powersports ready 3PL network",
        description:
          "Tapping into an existing nationwide logistics network built around powersports and electric vehicles allows Infinite Machine to scale shipments through proven partners instead of investing heavily in developing and maintaining its own logistics infrastructure.",
      },
      {
        title: "International and reverse logistics support",
        description:
          "Targeted freight and customs support unlocks early international growth, while a shared framework for returns and refurbishment creates a scalable path for long-term fleet management.",
      },
    ],
  },
  {
    slug: "grounded",
    title:
      "Bloom amplifies Grounded's production capabilities and nationwide delivery",
    hero: "/images/stories/grounded-hero.jpg",
    logo: "/images/stories/grounded-logo.svg",
    logoAlt: "Grounded",
    logoMonoColor: "white",
    topBenefits: [
      "Grounded augmented their internal teams with on-demand access to specialized metal fabrication, welding, and laser cutting.",
      "Bloom's logistics network ensures timely, white-glove delivery of completed electric vehicles to customers across the U.S.",
      "Streamlined supply chain operations allowing Grounded to focus on innovation and customer experience.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Grounded is revolutionizing the electric vehicle industry with smart, modular vans designed for both commercial applications and sustainable adventure. As demand for their customizable platforms ranging from mobile medical clinics to camper vans grew, they faced the dual challenge of scaling complex manufacturing processes while ensuring their finished vehicles reached customers across the U.S. on time and in pristine condition.",
    ],
    body: [
      "To bridge the gap between Grounded’s production and delivery, Bloom started by connecting Grounded with specialized contract manufacturers that Grounded could leverage for specific sub-assemblies on an on-demand basis, augmenting their internal team with critical capabilities; including metal fabrication, extrusions, welding, and laser tube cutting. Simultaneously, Bloom mobilized our logistics network to manage the complex movement of completed vehicles, ensuring a seamless journey from the factory floor to the customer's driveway and becoming an extension of Grounded's operations.",
    ],
    quote: {
      text: "Leveraging Bloom’s network of specialized manufacturing capabilities on-demand has been invaluable for us as we scale up manufacturing from a small startup to a manufacturer producing several vehicles per month, and inevitably face all the growing pains that go along with that. Plus, knowing our vehicles are being delivered with care gives us peace of mind.",
      author: "Sam Shapiro",
      role: "Co-Founder, Grounded",
    },
    outro:
      "Bloom’s ecosystem amplified Grounded’s ability to in-house more of the overall manufacturing and assembly process by allowing Grounded to easily outsource specific subassemblies on-demand, so that they can continue iterating on the engineering design of the product at a lightning fast pace critical to innovation.",
    benefits: [
      {
        title: "Scalable Manufacturing Support",
        description:
          "Grounded augmented their internal production with Bloom's network of vetted partners for specialized tasks like welding, laser tube cutting, and metal fabrication, effectively expanding their factory's capabilities without excessive capital and resource expenditure.",
      },
      {
        title: "Seamless Nationwide Logistics",
        description:
          "Bloom's transportation network handled the movement of completed vehicles throughout the U.S., ensuring timely delivery and a premium handover experience for the final customer.",
      },
      {
        title: "Optimized Operational Efficiency",
        description:
          "By streamlining both production support and final delivery through our single Bloom platform, Grounded reduced lead times and maintained high quality standards across their entire fleet.",
      },
    ],
    closing:
      "With Bloom's agile manufacturing and logistics network, Grounded is now well positioned to continue redefining the electric vehicle market, delivering sustainable transportation solutions to an increasing demand of customers, not having to compromise on quality or reliability.",
  },
  {
    slug: "birdstop",
    title:
      "Bloom supports and accelerates Birdstop's drone domestic production, testing, and scaling",
    hero: "/images/stories/birdstop-hero.jpg",
    logo: "/images/stories/birdstop-logo.svg",
    logoAlt: "Birdstop",
    logoMonoColor: "white",
    topBenefits: [
      "Bloom connected Birdstop to a partner with dedicated drone flight testing space allowing them to test their most cutting edge features before rolling them out to customers.",
      "Augmented Birdstop’s in-house engineering team with strategic partner sourcing on batteries, PCBs, and onboard electronics.",
      "Supported Birdstop’s rapid scaling by helping identify outsource-ready build elements while safeguarding in-house ownership of core drone engineering and assembly.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Birdstop is an American drone manufacturer. Birdstop systems are operated from hundreds of miles away safely in national airspace. Used by enterprises and governments across the country and overseas. A “click-to-coverage” user experience gives non-expert operators eyes on any scene in 60 seconds or less, driven by Birdstop’s tight engineering of reliable airframes, robust autonomy, and integrated electronics and vision systems.",
      "Birdstop designs and builds much of this system in-house and is one of the few companies in the U.S. with the highest approvals for autonomous aviation in the United States, backed by nine FAA approvals for BVLOS operations, allowing them to deploy strategically in sensitive and high-value environments. As Birdstop rapidly scales to meet significant demand, the challenge isn’t how to build drones, but how to scale a sophisticated drone network without diluting what makes it special — that’s where Bloom comes in.",
    ],
    body: [
      "Bloom mobilized its network to provide Birdstop with the critical infrastructure and partners needed to innovate at speed. By securing a dedicated test site within Metro Detroit's Aerial Mobility Innovation Zone, Bloom enabled Birdstop to test take-offs and landings with significantly fewer restrictions, accelerating their R&D timeline and tightening the loop between software, autonomy, and real-world operations. The most cutting edge features of Birdstop technology are now tested and validated here first in an operational environment before they roll out to customers.",
      "Birdstop also leaned into Bloom's ecosystem for support with targeted engineering, manufacturing and sourcing needs. Birdstop owns the architecture of their platform; Bloom helps them scale it. Bloom acted as a strategic partner by helping their team navigate complex “make vs. buy” decisions and optimizing their supply chain architecture, keeping the highest-value engineering work in-house while peeling off specific elements of the build to trusted partners. This collaboration extends to critical component engineering, where Bloom has identified and vetted specialized domestic battery partners to meet Birdstop’s unique power and regulatory requirements and has begun supporting the sourcing and standardization of key electronics, including PCBs and the broader onboard electronics and vision systems that tie together cameras, stabilization, and sensing.",
    ],
    quote: {
      text: "Choosing Detroit for our next phase of growth was a big step, and Bloom helped us hit the ground running really fast. From securing our first flight testing facility in Detroit to finding excellent domestic partners for batteries, PCBs, and our electronics, Bloom’s network has allowed us to move faster and scale with confidence.",
      author: "Keith Miao",
      role: "CEO, Birdstop",
    },
    outro:
      "By leveraging Bloom's platform, Birdstop has been able to bypass the typical hurdles associated with scaling hardware. Access to high-level engineering support, standardized electronics and vision subsystems, and a clear path to offloading non-core build work through a single partner allows Birdstop to stay focused on what they do best: building some of the most capable and easy-to-operate BVLOS drone systems in the country while simultaneously expanding their automated drone network to critical sites across the United States.",
    benefits: [
      {
        title: "Engineering Advisory and In-House Focus",
        description:
          "Bloom provided critical engineering and supply chain guidance to help Birdstop decide what to keep in-house and what to outsource, ensuring their internal team stays focused on the highest-value work.",
      },
      {
        title: "Sourcing Specialized Electronics and Battery systems",
        description:
          "Bloom leveraged its network to fill key technical gaps, connecting Birdstop with domestic suppliers for batteries, PCBs, and the broader electronics and vision systems that underpin their “click-to-coverage” experience.",
      },
      {
        title: "Scaling Support",
        description:
          "As demand grows, Bloom will continue to support Birdstop in peeling off specific aspects of the build to specialist partners, enabling Birdstop to focus on scaling production and deployment without compromising the sophistication or reliability of their core system.",
      },
    ],
  },
  {
    slug: "wheel-me",
    title:
      "wheel.me scales their industrial robotics business with Bloom’s network of flexible manufacturing and logistics partners",
    hero: "/images/stories/wheel-me-hero.jpg",
    logo: "/images/stories/wheel-me-logo.svg",
    logoAlt: "wheel.me",
    logoMonoColor: "white",
    topBenefits: [
      "Space unlocked: Bloom’s partner picked up inventory directly from wheel.me’s facility, freeing floor space for core operations.",
      "Fast, local, competitive fabrication: Connected wheel.me with a U.S. manufacturer to produce robot parts quickly and cost-effectively.",
      "Operational flexibility: Shifted fixed costs to variable, scaling smoothly with deployments.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "wheel.me builds intelligent robotics solutions that turn industrial carts, racks, fixtures, and other equipment into autonomous, move-anywhere systems. While the technology is broadly adaptable, wheel.me primarily serves industrial applications where autonomy boosts safety, throughput, and flexibility.",
    ],
    body: [
      "Bloom assembled a turnkey operational layer without new internal infrastructure so wheel.me could stay focused on innovation and deployments: Freed floor space via specialty warehousing with white-glove pickup. Fabricated parts domestically at competitive pricing to support faster installs. Shipped sensitive robotic systems through vetted parcel, LTL, and white-glove carriers.",
    ],
    quote: {
      text: "Bloom helped us move faster without building a new facility from scratch. Their partners freed up space, produced parts quickly, and moved robots reliably.",
      author: "Rasmus Noraas Bendvold",
      role: "US Managing Director, wheel.me",
    },
    benefits: [
      {
        title: "Storage & Fulfillment",
        description:
          "Flexible racked and floor storage scales with deployment cadence. White-glove pickup keeps teams focused on installs while maintaining “as-if in-house” access to inventory.",
      },
      {
        title: "Domestic Fabrication (On-Demand)",
        description:
          "Through Bloom’s manufacturing partner, wheel.me produced parts on short timelines and at competitive U.S. pricing, supporting faster installs and consistent deployments.",
      },
      {
        title: "Shipping & Delivery",
        description:
          "Bloom coordinates multimodal shipping — parcels for spares, LTL for kits, white-glove for complete robots — with damage-mitigation packaging so systems arrive ready to roll. The 3PL network is set to support broader distribution.",
      },
    ],
    closing:
      "With Bloom’s partner network, wheel.me scaled U.S. operations efficiently — freeing space, sourcing parts locally, and delivering robots with confidence. As growth accelerates, Bloom provides the logistics, warehousing, and fabrication capacity to scale faster, smarter, and with less friction.",
  },
  {
    slug: "maeving",
    title:
      "Bloom amplifies Maeving’s U.S. expansion with scalable logistics & seamless delivery",
    hero: "/images/stories/maeving-hero.webp",
    logo: "/images/stories/maeving-logo.webp",
    logoAlt: "Maeving",
    logoMonoColor: "white",
    topBenefits: [
      "Maeving leverages Bloom’s logistics platform to scale in the U.S. without the need for physical infrastructure.",
      "Bloom’s no-box delivery ensures Maeving customers receive road-ready bikes fully assembled and pre-inspected.",
      "Activated U.S.-based warehousing, final assembly, and A/B kit handling to simplify launch logistics and scale efficiently.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Maeving is redefining electric motorcycles with its stunning, retro-inspired designs and groundbreaking swappable battery technology. Expanding into the U.S. presented unique challenges: how to scale quickly, deliver a premium customer experience, and build a service ecosystem—all without traditional infrastructure.",
    ],
    body: [
      "Bloom’s innovative logistics and service platform enabled Maeving to launch strategically in key regions, leveraging warehousing, last-mile delivery, and an expansive service network to provide a frictionless ownership experience.",
    ],
    quote: {
      text: "This partnership has been instrumental for Maeving as we bring our Built in Britain electric motorcycles to the U.S. By leveraging Bloom’s platform, we can scale quickly, streamline our operations, and deliver an exceptional experience to our riders. We’re excited to expand our reach and make Maeving accessible to more and more riders.",
      author: "Augustin Brajeux",
      role: "US General Manager, Maeving",
    },
    outro:
      "By eliminating the need for physical warehousing and handling all operational logistics, Bloom allowed Maeving to focus on its core mission—providing high-quality, sustainable urban mobility solutions. With scalable infrastructure in place, Maeving is now primed for accelerated growth and nationwide expansion.",
    benefits: [
      {
        title: "Instant Market Presence",
        description:
          "Maeving gained immediate operational capability on the East Coast without the need for warehouses or logistics hubs.",
      },
      {
        title: "Flawless Fulfillment & Delivery",
        description:
          "Bloom’s no-box delivery solution ensured every bike arrived fully assembled, pre-inspected, and ready to ride.",
      },
      {
        title: "Scalable Service Infrastructure",
        description:
          "Leveraging Bloom’s network to provide expert maintenance and support, increasing customer confidence and satisfaction.",
      },
      {
        title: "Optimized Growth Strategy",
        description:
          "With Bloom handling logistics and after-sales support, Maeving can focus on product innovation and expanding its footprint nationwide.",
      },
    ],
    closing:
      "With Bloom’s agile logistics, expert service network, and scalable infrastructure, Maeving is set to continue to bring their innovative bikes to more riders in the most efficient and effective way possible.",
  },
  {
    slug: "electric-outdoors",
    title:
      "Electric Outdoors scales with Bloom’s network of flexible manufacturing and logistics partners",
    hero: "/images/stories/electric-outdoors-hero.jpg",
    logo: "/images/stories/electric-outdoors-logo.svg",
    logoAlt: "Electric Outdoors",
    logoMonoColor: "white",
    topBenefits: [
      "Discovered, scoped, and booked expanded contract manufacturing capacity within one week, while activating warehousing and workspace in Detroit to support rapid deployment.",
      "Multi-region distribution capabilities across coastal and central warehouses, enabling efficient delivery without building internal infrastructure.",
      "Access to advanced prototyping and fabrication tools to support rapid product iteration and pilot production, cutting development timelines.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Electric Outdoors designs deployable, solar-powered systems that enable hospitality in remote, off-grid environments. The team behind the brand has an industrial design ethos and a deep commitment to sustainability, pushing the limits of all-electric applications in the outdoors.",
    ],
    body: [
      "To support its U.S. expansion, Electric Outdoors partnered with Bloom’s network to quickly stand up warehousing, fulfillment, and assembly operations—without needing to build internal infrastructure or sign long-term agreements. They leveraged one of Bloom's partner facilities in Detroit as a critical stepping stone—bridging early production needs while preparing to scale into larger contract manufacturing partnerships as growth accelerates.",
    ],
    quote: {
      text: "We are in a phase where we need to keep our team focused on product and user experience—not on logistics and facilities. Bloom is a perfect partner for this and gives us the freedom to be product and customer focused while staying agile and scaling fast.",
      author: "Josef Hjelmaker",
      role: "Founder & CEO, Electric Outdoors",
    },
    benefits: [
      {
        title: "Warehousing, Fulfillment & Modular Assembly",
        description:
          "Bloom’s network provides Electric Outdoors with flexible access to secure warehousing, pallet and container storage, and optional use of technical staff—whether it's outbound fulfillment or on-site assembly. All of it is built around flexibility and speed. Through Bloom’s network, the team can also access fully-equipped fabrication tools — CNC machines, laser cutters, welders, and more — making it easy to build jigs, tweak parts, or test new components on the fly.",
      },
      {
        title: "Distributed Warehousing & Flatbed-Ready Delivery",
        description:
          "With access to both coastal and central warehousing, Electric Outdoors can stage its large-format units closer to end markets — reducing transit times and avoiding unnecessary handoffs between fragmented logistics providers. Bloom’s infrastructure supports flatbed-ready delivery, enabling these deployable systems to ship direct-to-site, fully prepped for setup and activation.",
      },
      {
        title: "Scalable Infrastructure for Explosive Growth",
        description:
          "Whether launching a new product or responding to surging demand, Electric Outdoors now has the additional operational runway to grow quickly. Bloom’s flexible model allows the team to scale up or down based on seasonality or geography — without overextending.",
      },
    ],
    closing:
      "From day-one warehousing to on-site tooling and skilled labor, Bloom gives Electric Outdoors a full-stack operational layer that bends with the business.",
  },
  {
    slug: "moonbikes",
    title: "Bloom powers Moonbikes' expansion into North America",
    hero: "/images/stories/moonbikes-hero.jpg",
    logo: "/images/stories/moonbikes-logo.svg",
    logoAlt: "Moonbikes",
    logoMonoColor: "white",
    topBenefits: [
      "Moonbikes leverages Bloom's platform to centralize North American operations at one strategic location.",
      "Bloom’s warehouse and delivery network offers Moonbikes strategic proximity to key geographies to improve delivery costs.",
      "Moonbikes utilizes Bloom's operations resources on an as-needed basis, including testing, rework, assembly, reverse logistics.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Launched in 2020, Moonbikes developed the world’s first electric snowbike, expanding from Europe to the U.S. to meet growing demand. In 2024, they joined Bloom’s platform to streamline North American operations, allowing their team to invest more deeply in branding and marketing while Bloom took on essential logistics, supply chain, and operational support.",
    ],
    body: [
      "For Moonbikes, Bloom's network brings efficiency and adaptability. With access to Bloom’s network of warehousing and delivery partners, Moonbikes strategically positions its logistics to reduce costs and improve service across key geographies. This arrangement converts traditionally high fixed costs—like warehousing and assembly—into variable costs, thanks to flexible options like monthly assembly station rentals and seasonal “hibernation mode” for peak and off-peak demand.",
    ],
    quote: {
      text: "This partnership represents an important step for Moonbikes’ next chapter. By leveraging Bloom’s platform we are confident in our ability to accelerate growth in the U.S., streamline operations, and enhance our customer experience. We are excited to continue to deliver sustainable, all-electric, winter snow sports offerings in North America while expanding our innovation in the mobility space.",
      author: "Nicolas Muron",
      role: "CEO and Founder, Moonbikes",
    },
    benefits: [
      {
        title: "Consolidated Operations",
        description:
          "Bloom enables Moonbikes to centralize their North American operations at one strategic location, minimizing the need for a large footprint.",
      },
      {
        title: "Strategic Proximity",
        description:
          "Bloom’s warehouse and delivery network optimizes Moonbikes' supply chain by providing strategic locations that reduce delivery costs and speed up service times.",
      },
      {
        title: "Flexible Resource Access",
        description:
          "Moonbikes accesses Bloom's operational resources as needed, including testing, rework, assembly, reverse logistics, and more—allowing them to remain agile and focus on growth.",
      },
    ],
    closing:
      "By leveraging Bloom’s Build and Deliver nodes, Moonbikes strengthens its North American presence while keeping its operations light and efficient.",
  },
  {
    slug: "dust-moto",
    title:
      "Dust Moto leverages Bloom's extensive network in assembly, warehousing, and shipping",
    hero: "/images/stories/dust-moto-hero.jpg",
    logo: "/images/stories/dust-moto-logo.png",
    logoAlt: "Dust Moto",
    topBenefits: [
      "Assembling via Bloom’s network enables more efficient early production batches.",
      "Bloom’s nationwide warehouse network offers Dust Moto strategic proximity to key geographies.",
      "No box distribution ensures Dust Moto has high-quality expedient delivery both direct-to-consumer and to retailers.",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "Dust Moto has taken the American powersports industry by storm with its sought-after electric dirt bike, tapping into a $20 billion market with innovation and a commitment to American manufacturing. Aligning closely with Bloom's mission of building a sustainable, resilient industry, Dust Moto's approach meets the rising demand for microHardware products with domestic supply chain solutions.",
    ],
    body: [
      "Dust Moto isn’t just making bikes—they’re bridging traditional powersports with cutting-edge hardware tech, inviting more people into the sport with a fresh, eco-friendly twist. Partnering with Bloom gives Dust Moto critical access to Bloom’s extensive network, from assembly and warehousing to distribution, fueling their growth as they prepare to launch the Model_1 in 2025.",
      "Through Bloom, Dust Moto is gaining operational agility and tapping into Michigan’s expanding role as a hub for hardware innovation. By locating their manufacturing operations at Newlab in Michigan Central and leveraging Shophouse Park in the Upper Peninsula for testing and refinement, Dust Moto is set to connect enthusiasts nationwide.",
    ],
    quote: {
      text: "From the start, Dust has been committed to developing a best-in-class American assembly platform to fulfill our mission of becoming the #1 US dirt bike brand, globally. Bloom is leading the pack by building an amazing ecosystem that will allow us to achieve our goals, both near-term and at scale.",
      author: "Colin Godby",
      role: "CEO and Founder, Dust Moto",
    },
    benefits: [
      {
        title: "Efficient Early Production Batches",
        description:
          "Through Bloom's assembly network, Dust Moto can streamline early production, reducing costs and time to market.",
      },
      {
        title: "Strategic Proximity through Nationwide Warehousing",
        description:
          "Bloom's warehouse network enables Dust Moto to position its products closer to key regions, optimizing delivery times and reducing shipping costs.",
      },
      {
        title: "No-Box Distribution",
        description:
          "Bloom’s “no-box” delivery model ensures high-quality, rapid distribution directly to consumers and retailers, enhancing Dust Moto’s brand experience.",
      },
    ],
    closing:
      "By leveraging Bloom’s Build and Deliver nodes, Dust Moto can focus on what they do best: innovating high-quality, American-made electric dirt bikes that inspire new connections to powersports.",
  },
  {
    slug: "cake",
    title:
      "Bloom onboarded Cake quickly to assist with warehousing, re-work, inventory inspection and cataloging",
    hero: "/images/stories/cake-hero.webp",
    logo: "/images/stories/cake-logo.svg",
    logoAlt: "Cake",
    logoMonoColor: "white",
    topBenefits: [
      "Bloom’s nationwide warehouse network can be quickly utilized to support with variable needs with short notice.",
      "Cake leverages Bloom's various delivery options including freight and no-box options to customers and retailers.",
      "Additional support for wrap-around services including reverse logistics, re-work and complete knock-down kits (CKD).",
    ],
    nodes: ["Build", "Deliver"],
    intro: [
      "In 2024, beloved Scandinavian mobility brand Cake joined forces with Bloom to relaunch its North American operations under new ownership, Emoto Supply Co. Known globally for its class-leading electric scooters, motorcycles, and e-bikes, Cake needed a partner who could ensure a swift, seamless return to market. Bloom’s platform enabled just that—providing essential warehousing, logistics, and rework solutions that minimized downtime and maximized efficiency for Cake’s relaunch.",
    ],
    body: [
      "Within two weeks, Bloom onboarded Cake, establishing a robust support network for warehousing, inventory inspection, and cataloging. Cake quickly leveraged Bloom’s platform not only to fulfill immediate needs like replacement parts for existing customers but also to ensure future scalability through flexible, wrap-around services.",
    ],
    quote: {
      text: "Upon acquiring the assets for CAKE North America, we faced the task of relocating and establishing a comprehensive logistics operation. Fortunately, we found an invaluable partner in Bloom, our third-party logistics provider. Their expertise has streamlined every aspect of our warehousing and logistics — from setup and staffing to software implementation — saving us significant time and resources. As we venture into new horizons in the micromobility space, we are thrilled to have Bloom at the forefront, supporting our efforts in warehousing, logistics, assembly, and service.",
      author: "Michael Joyce",
      role: "Managing Partner & Founder, Emoto Supply Co.",
    },
    outro:
      "As Cake’s North American presence grows, Bloom’s adaptable infrastructure grows with it. The platform provides nationwide warehousing and multiple delivery options, including no-box distribution, to seamlessly connect Cake’s products to both customers and retailers. Bloom’s Complete Knock-Down (CKD) Kits and final goods fulfillment further enhance Cake’s ability to scale efficiently while exploring new operational needs and partner services.",
    benefits: [
      {
        title: "Flexible Warehousing",
        description:
          "Cake taps into Bloom’s extensive warehouse network, allowing for immediate support across locations and quick access to inventory.",
      },
      {
        title: "Diverse Delivery Options",
        description:
          "Freight, no-box, and reverse logistics solutions ensure that Cake’s products reach customers and retailers efficiently, with flexibility for new channels.",
      },
      {
        title: "Assembly & CKD Kits",
        description:
          "Bloom supports Cake with advanced assembly options, including Complete Knock-Down Kits, to streamline inventory and fulfillment as Cake expands in North America.",
      },
    ],
    closing:
      "By joining Bloom’s platform, Cake is empowered to remain focused on product innovation and customer experience, backed by a logistics network designed to scale at every step.",
  },
  {
    slug: "tokyobike",
    title:
      "Bloom’s platform presents tokyobike US with immediate operational efficiencies, automation, and optimization of services",
    hero: "/images/stories/tokyobike-hero.webp",
    logo: "/images/stories/tokyobike-logo.svg",
    logoAlt: "Tokyobike US",
    topBenefits: [
      "Streamlined ops: Bloom’s platform enables tokyobike US to automate and optimize logistics, reducing overhead costs and improving supply chain management.",
      "Scalability and growth: Leveraging Bloom’s extensive network, tokyobike US will scale its North American presence while enhancing product development and expanding market reach.",
      "Multiple delivery options ensure tokyobike US has high-quality expedient delivery both direct-to-consumer and to retailers.",
    ],
    nodes: ["Deliver"],
    intro: [
      "Founded in 2002 in Tokyo’s Yanaka suburb, tokyobike has captivated urban cyclists with its minimalist, stylish designs and commitment to sustainability. Since entering the U.S. market in 2014, tokyobike has quickly gained a loyal following among city riders. By integrating Bloom’s platform into their operations, tokyobike US has successfully enhanced its North American presence through optimized logistics and warehousing strategies.",
    ],
    body: [
      "Joining Bloom’s platform provides tokyobike US with immediate access to a suite of warehousing and logistics services designed to streamline operations and enhance efficiency. With Bloom’s extensive network, tokyobike benefits from improved inventory management, allowing them to position their products closer to U.S. customers. This strategic placement not only reduces shipping costs but also enhances response times to market demands, empowering tokyobike to scale quickly while maintaining a focus on sustainable practices.",
    ],
    quote: {
      text: "Bloom’s warehousing and logistics expertise gave us the runway to elevate operational efficiency and meet the growing demand for stylish, sustainable urban mobility solutions.",
      author: "tokyobike US Team",
      role: "",
    },
    benefits: [
      {
        title: "Enhanced Inventory Management",
        description:
          "Bloom’s network of strategically located warehouses enables tokyobike to efficiently manage inventory. This allows for quicker response times to market demands and reduces shipping costs by positioning products closer to customers.",
      },
      {
        title: "Optimized Fulfillment Processes",
        description:
          "By leveraging Bloom’s logistics capabilities, tokyobike can automate order fulfillment and streamline shipping processes. This ensures that customers receive their bikes and accessories in a timely manner, enhancing customer satisfaction and driving repeat business.",
      },
      {
        title: "Scalable Growth Opportunities",
        description:
          "Bloom’s warehousing solutions provide the flexibility to scale operations up or down based on demand. This adaptability allows tokyobike to enter new markets or expand product lines without incurring the high fixed costs typically associated with building and maintaining extensive warehousing facilities.",
      },
      {
        title: "Sustainability",
        description:
          "Bloom’s commitment to eco-friendly logistics supports tokyobike’s mission of reducing carbon emissions. By utilizing Bloom’s green warehousing practices, tokyobike enhances its reputation as a leader in sustainable urban mobility.",
      },
    ],
    closing:
      "With Bloom’s warehousing and logistics expertise, tokyobike US is equipped to elevate its operational efficiency and meet the growing demand for stylish, sustainable urban mobility solutions. Together, we’re driving innovation and inspiring a greener future.",
  },
];

export function getStoryBySlug(slug: string): CustomerStory | undefined {
  return CUSTOMER_STORIES.find((s) => s.slug === slug);
}
