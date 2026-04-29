export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "linkButton"; text: string; href: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  author: string;
  hero: string;
  body: BlogBlock[];
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "brps-engineering-services-joins-bloom",
    title:
      "BRP’s Engineering Services Joins Bloom to Power the Next Generation of Electrification",
    excerpt:
      "Building hardware at scale is a team sport, requiring a diverse network of partners from rapid prototypers to full-scale contract manufacturers who can make the right play at the moment it matters most.",
    date: "2026-03-12",
    dateLabel: "Mar 12, 2026",
    category: "UPDATES",
    author: "Chris Nolte",
    hero: "/images/blog/brp-engineering.jpg",
    body: [
      {
        type: "p",
        text: "Building hardware at scale is a team sport, requiring a diverse network of partners from rapid prototypers to full-scale contract manufacturers who can make the right play at the moment it matters most.",
      },
      { type: "p", text: "Today we are taking a major step forward in expanding that network." },
      {
        type: "p",
        text: "We’re thrilled to announce that BRP’s engineering services has joined the Bloom platform, adding an exciting new layer of OEM-grade electrification expertise to our ecosystem.",
      },
      {
        type: "p",
        text: "You know BRP as the global leader behind Ski-Doo, Sea-Doo, and Can-Am. They’ve spent years building and refining electrified powertrains that perform in extreme conditions. By bringing their engineering arm onto Bloom, their expansive depth of knowledge and experience becomes accessible to hardware teams at every stage of product development.",
      },
      { type: "h3", text: "Deepening the Bench" },
      {
        type: "p",
        text: "Our members already rely on Bloom to connect with the industry's most respected engineering and manufacturing partners. Adding BRP allows us to dig even deeper into one of the hardest challenges our customers face: rugged, high-performance electrification.",
      },
      {
        type: "p",
        text: "BRP’s arrival on our platform strengthens support for teams building mobility, robotics, and industrial hardware, where performance and uncompromising reliability are tested in the most demanding conditions.",
      },
      { type: "h3", text: "Solving the Validation Gap" },
      {
        type: "p",
        text: "Too many hardware programs stall in the \"messy middle,\" that uncertain stretch between a working prototype and a production-ready product.",
      },
      {
        type: "p",
        text: "Whether the challenge calls for general engineering support or highly specialized high-voltage architecture, the answer shouldn't be \"figure it out yourself.\" It should be \"here’s a partner who has done this a thousand times.\"",
      },
      { type: "h3", text: "What BRP Brings to the Table" },
      {
        type: "p",
        text: "We’ve scoped BRP’s specific capabilities into four service modules designed to complement the existing resources on our platform:",
      },
      {
        type: "ul",
        items: [
          "Electrification Scoping & Architecture: Verified roadmaps for requirements and system interfaces to avoid costly backtracking.",
          "Battery & Power Systems: Specialized support for pack-level design, thermal management, and BMS integration in rugged environments.",
          "Software & Controls: Professional tooling and HIL/SIL verification pathways to ensure safe, reliable operation.",
          "Validation & Industrialization: Structured test plans and DFx guidance to carry your product from concept to commercial readiness.",
        ],
      },
      { type: "h3", text: "How to Get Started" },
      {
        type: "p",
        text: "We know that building complex hardware is difficult, and finding the right help shouldn't make it harder.",
      },
      {
        type: "p",
        text: "If you’re working on a hardware project, we want to hear about it. Tell us what you’re building and discover how working with BRP and the other leading teams across our network can be easier than you think with Bloom.",
      },
      { type: "linkButton", text: "START A CONVERSATION", href: "https://welcome.bloomnetwork.ai/" },
    ],
  },
  {
    slug: "two-years-of-bloom",
    title:
      "Two Years of Bloom: From “Do you know a guy?” to an AI-Native Operations Marketplace",
    excerpt:
      "Bloom started as a hands-on network helping hardware teams find the right partners and get work done. After two years and 100+ brands, we’re encoding what works into an AI-native platform that understands your project, finds the right providers, and manages the trust, coordination, and payments in between.",
    date: "2025-12-09",
    dateLabel: "Dec 9, 2025",
    category: "UPDATES",
    author: "Chris Nolte",
    hero: "/images/blog/two-years-of-bloom.png",
    body: [
      {
        type: "p",
        text: "Two years ago Justin and I started Bloom with a simple, stubborn belief: hardware teams shouldn’t have to build a world-class operations machine from scratch.",
      },
      {
        type: "p",
        text: "Since going live last year we’ve matched over 100 hardware brands with thousands of vetted partners across North America; From the largest global OEMs to incredible venture-backed companies across mobility, energy, robotics, and more, we’ve moved millions of dollars of goods through the network by supporting projects spanning across manufacturing, assembly, warehousing, logistics, after-sales services, and beyond.",
      },
      {
        type: "p",
        text: "Along the way, we have seen how brittle the old infrastructure really was. Most work started with “do you know a guy?”, moved through scattered spreadsheets and inbox chains, and depended on ad-hoc matchmaking that wasted crucial time and money on poor fits, duplicated quotes, and misaligned expectations on both sides.",
      },
      {
        type: "p",
        text: "This update is about what we’ve learned and what we’ve started building to fundamentally change how teams build, deliver, and service their hardware.",
      },
      { type: "h3", text: "What the last two years taught us" },
      {
        type: "p",
        text: "In two years of running real work through the network we have seen firsthand where things break and where Bloom can have the most impact. A few patterns stand out:",
      },
      {
        type: "ul",
        items: [
          "Hardware teams want more than another directory. A directory of logos isn’t good enough. They want someone to own the messy middle: scoping, vetting, negotiation, and coordination.",
          "The best providers are often hard to find. The shops brands actually want to work with are busy, under-marketed, have high barriers to entry and rarely showcase their true capabilities on their websites.",
          "Trust is the real bottleneck. Brands need confidence that providers can deliver on time, at quality, with clear communication and fair terms. Providers need confidence that Bloom has vetted the customer, the work is ready and real, and payments will be made reliably and on time.",
          "Ops knowledge compounds. Every successful project informs and improves upon a protocol: how to scope this kind of job, which questions to ask, what red flags to watch for, what “good” looks like.",
        ],
      },
      {
        type: "p",
        text: "For the first chapter of Bloom, our team carried most of this out manually. We ran the calls, translated messy requests into structured RFPs, hunted down the right shops, and kept both sides aligned all the way through booking and payment. It worked, and it taught us a lot, but it doesn’t scale to the size of the opportunity we see ahead of us.",
      },
      {
        type: "p",
        text: "So we did what good hardware teams do when they hit a limit: we started turning the playbook into an intelligent product. We’re scoping projects faster, matching better, growing the network, and keeping work moving, all powered by two years of detailed data from our manual operations that made it possible.",
      },
      { type: "h3", text: "Building the Bloom Intelligent Digital Experience" },
      {
        type: "p",
        text: "This next chapter of Bloom is about making everything we’ve been doing by hand available through a digital intelligence platform.",
      },
      {
        type: "p",
        text: "We took two years of multi-node service bookings, conversations, project outcomes, and transaction data and used it to train the models powering Bloom’s new AI-native platform. Very few teams see this much real workflow through one network, which gives Bloom a meaningful head start with a digital ecosystem that grows with every project, every day, and every request made by a rapidly growing list of brands and providers.",
      },
      { type: "p", text: "Think of it as the front door to the Bloom stack:" },
      {
        type: "ul",
        items: [
          "It starts with a natural conversation about a project, just like talking with one of our own seasoned ops leads.",
          "Under the hood, it’s following a protocol: pulling in enriched data about the company and project, asking targeted follow-ups, and translating stated needs into a structured service request instead of a vague “I need a manufacturer.”",
          "The real fun begins when a conversation activates our matching engines to search across thousands of providers — not just by obvious tags but by capabilities, certifications, past performance, geography, capacity, and more.",
        ],
      },
      { type: "p", text: "We’re going far deeper than “I know a guy.”" },
      {
        type: "p",
        text: "Bloom is saying: “Let’s check who in the network is actually the best fit for this specific job, at this moment, and based on real data you won’t find on a website or through generic AI tools.”",
      },
      { type: "h3", text: "An operations stack that behaves more like AWS" },
      {
        type: "p",
        text: "If AWS lets software teams stop worrying about racks and servers, Bloom is doing the same for hardware supply chains and operations.",
      },
      {
        type: "p",
        text: "Instead of building a patchwork of tools, vendors, and processes from scratch, Bloom plugs you into a vetted generative operations stack throughout the intelligent marketplace:",
      },
      {
        type: "ul",
        items: [
          "Request & Matching Engines — AI-driven workflows that turn messy asks into complete RFQs and RFPs, letting hardware teams find the right providers in a fraction of the time.",
          "Unified Intelligence Layer — A continuously enriched knowledge graph of brands, providers, capabilities, quotes, and outcomes that gets smarter with every interaction.",
          "Marketplace Agents — Agents that help negotiate scope, standardize terms, coordinate quotes, and keep both sides aligned as work moves from idea to delivery.",
          "Bloom Pay — Integrated billing, contracting, and financing options so the work keeps moving even through cash crunches, while service providers get the confidence and security of reliable payments.",
        ],
      },
      {
        type: "p",
        text: "But here’s where it really delivers. It bakes in the best practices we’ve seen across hundreds of projects and keeps refining them: every conversation, every contract, every shipment is a learning event that feeds back into the system.",
      },
      {
        type: "p",
        text: "Over time the experience starts to feel less like using a tool and more like working with a very experienced operations team that already knows project constraints, preferred partners, risk appetite, product roadmaps, and is always available.",
      },
      { type: "h3", text: "What’s next" },
      {
        type: "p",
        text: "We’ve been rolling out this digital experience to existing members, new brands, and service providers. We’ll be sharing more on specific product updates, case studies, and the teams already building on the new platform over the coming months.",
      },
      {
        type: "p",
        text: "Whether you’re a hardware company tired of stitching together supply chain infrastructure or a provider wanting a clean and more consistent way to win the right kind of work, we’d love for you to check out what we’re building. Take it for a spin at app.bloomnetwork.ai/welcome.",
      },
      {
        type: "p",
        text: "While the infrastructure for modern hardware is being re-written, Bloom is changing how hardware is built, delivered and serviced.",
      },
      { type: "linkButton", text: "TAKE IT FOR A SPIN", href: "https://app.bloomnetwork.ai/welcome" },
    ],
  },
  {
    slug: "ft-film-future-of-american-manufacturing",
    title: "Future of American Manufacturing - Financial Times",
    excerpt:
      "Bloom featured in a Financial Times film about reshoring, tariffs, and modern manufacturing in Detroit.",
    date: "2025-08-12",
    dateLabel: "Aug 12, 2025",
    category: "PRESS",
    author: "Patti Waldmeir — Financial Times",
    hero: "/images/blog/ft-trump-tariffs.png",
    body: [
      {
        type: "p",
        text: "Bloom’s co-founders Chris Nolte and Justin Kosmides were featured in an FT documentary exploring the resurgence of American manufacturing. Set in Detroit, the film investigates whether tariffs and reshoring can deliver high-tech jobs and rebuild the middle class. Filmed at Newlab, the segment highlights Bloom’s efforts to enable modern hardware companies—from drones to electric motorcycles—to manufacture domestically and sustainably. The piece emphasizes the critical role of platforms like Bloom in reshaping how and where things are made in America.",
      },
      {
        type: "linkButton",
        text: "WATCH THE FULL FT FILM",
        href: "https://www.ft.com/stream/c02e013e-8b29-447c-a62e-f027acbcff94",
      },
    ],
  },
  {
    slug: "midwestern-reindustrialization-happy-hour",
    title: "Midwestern Reindustrialization & Bloom’s Role - Manufacturing Happy Hour",
    excerpt: "Why flexibility and collaboration are key to U.S. manufacturing revival.",
    date: "2025-07-29",
    dateLabel: "Jul 29, 2025",
    category: "PODCAST",
    author: "Chris Luecke — Manufacturing Happy Hour",
    hero: "/images/blog/midwestern-happyhour.png",
    body: [
      {
        type: "p",
        text: "Chris shares his veteran journey and how Bloom helps reshape U.S. supply chains, urging America to say “yes” more to innovation and local talent.",
      },
      {
        type: "linkButton",
        text: "LISTEN TO THE EPISODE",
        href: "https://manufacturinghappyhour.com/2025/07/",
      },
    ],
  },
  {
    slug: "michigan-vc-talk-kosmides-reshoring",
    title: "Scaling Hardware & Reindustrializing Michigan - Michigan VCtalk",
    excerpt: "A tech entrepreneur’s Midwest innovation playbook.",
    date: "2025-07-23",
    dateLabel: "Jul 23, 2025",
    category: "PODCAST",
    author: "Michigan VCtalk",
    hero: "/images/blog/vc-talk-michigan.jpg",
    body: [
      {
        type: "p",
        text: "From Wall Street to e‑bikes to scaling Bloom, Justin shares his strategy for reshoring manufacturing and building hardware ecosystems.",
      },
      {
        type: "linkButton",
        text: "LISTEN TO THE EPISODE",
        href: "https://creators.spotify.com/pod/profile/mvca/episodes/Justin-Kosmides--Co-Founder--Bloom--S3--E51-e35tuo3",
      },
    ],
  },
  {
    slug: "future-in-the-making-youtube-channel",
    title: "New YouTube Channel About Building What Comes Next",
    excerpt:
      "We just released the first video on my new YouTube channel, Future in the Making, and I couldn’t be more excited to share it with you.",
    date: "2025-07-04",
    dateLabel: "Jul 4, 2025",
    category: "VIDEO",
    author: "Chris Nolte",
    hero: "/images/blog/future-in-the-making.png",
    body: [
      {
        type: "p",
        text: "We just released the first video on my new YouTube channel, Future in the Making, and I couldn’t be more excited to share it with you. The video is called “Detroit is Where the Future Will Be Built”, and it’s personal. It tells the story of how I moved to Detroit, why I co-founded Bloom, and why I believe this city — and the people building things here — are at the center of something much bigger than any one company.",
      },
      {
        type: "p",
        text: "Future in the Making is where I’ll be sharing stories from inside the ecosystem — startups, manufacturing partners, engineers, founders, and builders — all working to shape the next chapter of American innovation. Many of them are Bloom members. Some of them are just starting out, some are more established. And all of them are part of something meaningful.",
      },
      { type: "h3", text: "What’s This Channel About?" },
      {
        type: "p",
        text: "This project is about more than just products — it’s about the people, places, and systems that make it possible to build complex physical things in a world that hasn’t made that easy for a long time. From electric bikes to drones, solar to storage, and even new forms of transportation and defense — we’re in a moment where it’s possible to rethink not just what we build, but how and where we build it.",
      },
      { type: "h3", text: "Why Detroit?" },
      {
        type: "p",
        text: "The first video digs into that. But the short version is: there’s talent, space, infrastructure, and history here — not to mention momentum. At Newlab and Michigan Central, you can feel it. The future is already in progress.",
      },
      { type: "h3", text: "Why Now?" },
      {
        type: "p",
        text: "Because we need to believe that making things locally, sustainably, and intelligently isn’t just possible — it’s necessary. And we need more voices showing how it’s actually being done. This channel is my way of pulling the curtain back, sharing lessons, and hopefully connecting with more people who want to build the future — and build it better.",
      },
      {
        type: "linkButton",
        text: "WATCH THE FIRST EPISODE",
        href: "https://www.youtube.com/watch?v=ODu8pyIlkHc",
      },
      {
        type: "linkButton",
        text: "SUBSCRIBE: FUTURE IN THE MAKING",
        href: "https://www.youtube.com/@FutureintheMaking",
      },
    ],
  },
  {
    slug: "consolidated-invoicing-for-hardware-brands",
    title: "Consolidated Invoicing for Hardware Brands",
    excerpt: "Introducing a simpler way to pay for physical operations.",
    date: "2025-05-09",
    dateLabel: "May 9, 2025",
    category: "UPDATES",
    author: "Tarani Duncan",
    hero: "/images/blog/consolidated-invoicing.png",
    body: [
      {
        type: "p",
        text: "Running a hardware business is hard. Managing separate invoices for warehousing, delivery, assembly, and after-sales service shouldn’t make it harder.",
      },
      {
        type: "p",
        text: "With Bloom’s new invoice dashboard, hardware brands can now:",
      },
      {
        type: "ul",
        items: [
          "View and manage all invoices in one place",
          "Pay outstanding balances across multiple service partners in a single step.",
        ],
      },
      { type: "h3", text: "Why this matters" },
      {
        type: "p",
        text: "Most hardware brands rely on a mix of service providers. Each new vendor adds another invoice, another email thread, another system to track. Costs are hard to see in real time. Payment flows don’t match. Accountability blurs.",
      },
      {
        type: "p",
        text: "Bloom simplifies all of it. Whether you’re storing assets in Detroit, delivering in LA, or assembling in Tennessee, you now get one place to manage and pay for it all.",
      },
      {
        type: "p",
        text: "Even more important: this gives operators the ability to flex individual parts of their ops stack without spinning up new workflows every time. Need more warehousing this month, less delivery next? Dial in your operations with Bloom.",
      },
      { type: "h3", text: "Not just convenient — actually better" },
      {
        type: "p",
        text: "Consolidated invoicing solves some of the biggest structural pain points in hardware operations:",
      },
      {
        type: "ul",
        items: [
          "No visibility into total spend: Invoices scattered across inboxes, tools, and attachments make cost control nearly impossible. Bloom shows what you’re spending, where, and with whom.",
          "Manual reconciliation and billing errors: Copying invoice details, chasing context, and flagging mismatches wastes time and introduces risk. Bloom ties payment to services at the source.",
          "Fragmented payment systems: Each vendor has their own terms, methods, and portals. Bloom unifies them.",
          "Unclear ownership across teams: When finance, ops, and logistics all touch a transaction, it’s easy for details to fall through the cracks. Bloom gives everyone one place to look.",
          "Mismatched net terms: Vendors often expect payment before a product is delivered—or long before the brand gets paid. Bloom is building structured, consistent net terms so operators can stay liquid and partners get paid on time.",
          "Onboarding new vendors = starting from scratch: Bloom standardizes vendor billing through one trusted layer, reducing ramp-up and risk.",
        ],
      },
      { type: "h3", text: "Built for operators" },
      {
        type: "p",
        text: "This launch is part of Bloom’s broader mission: to build the operations system for physical hardware—one that’s flexible, transparent, and designed for the realities of modern hardware teams. Streamlining invoicing isn’t just a back-office feature. It’s another way operators get ahead of the chaos.",
      },
      {
        type: "p",
        text: "Because Bloom aggregates demand across our network of service partners, brands typically save around 20% on services compared to going direct. That’s purchasing power normally reserved for much larger companies, unlocked through collective scale.",
      },
      {
        type: "p",
        text: "No more scattered vendors. No more spreadsheet chaos. Just a network of builders making hardware less hard.",
      },
    ],
  },
  {
    slug: "bloom-x-rebuild-manufacturing",
    title: "Building Smarter, Together: Bloom × Re:Build",
    excerpt: "Announcing Bloom's Strategic Partnership with Re:Build Manufacturing.",
    date: "2025-05-05",
    dateLabel: "May 5, 2025",
    category: "PARTNERSHIPS",
    author: "Chris Nolte",
    hero: "/images/blog/re-build.png",
    body: [
      {
        type: "p",
        text: "Today, we’re excited to announce a new partnership between Bloom and Re:Build Manufacturing—a collaboration that brings unprecedented access to advanced, U.S.-based production capabilities directly to Bloom members.",
      },
      {
        type: "p",
        text: "Re:Build Manufacturing is a family of engineering and manufacturing businesses whose combined experience forms a national industrial powerhouse. Their model is built around long-term partnerships, operational excellence, and vertically integrated capabilities—from advanced battery systems and embedded electronics to lightweight composites and complex system assembly. Their mission: to rekindle American industry through modern, flexible, and world-class production infrastructure.",
      },
      {
        type: "p",
        text: "Combined with Bloom’s growing network of innovative hardware brands and operational infrastructure, this partnership unlocks a new path to building and scaling physical products—domestically, efficiently, and at any stage of growth.",
      },
      { type: "h3", text: "Why This Matters" },
      {
        type: "p",
        text: "For years, hardware companies in the U.S. have faced a simple but painful paradox: to scale, they need access to reliable, high-quality production—but accessing that production typically requires scale.",
      },
      {
        type: "p",
        text: "The result? Even the most promising companies are forced to outsource too early, compromise on quality, or cobble together a supply chain that wasn’t built for their needs.",
      },
      { type: "p", text: "With this partnership, we’re breaking that cycle." },
      { type: "h3", text: "What This Unlocks" },
      { type: "p", text: "Bloom members now gain streamlined access to:" },
      {
        type: "ul",
        items: [
          "Re:Build’s advanced engineering and vertically integrated manufacturing network",
          "Expertise in battery systems, embedded electronics, lightweight composites, and complex assemblies",
          "U.S.-based production that is built for speed, quality, and adaptability",
        ],
      },
      {
        type: "p",
        text: "Whether you're a mobility startup building your first pilot run or an enterprise brand localizing production for a new market, this partnership provides the infrastructure and operational support to move faster—without compromising on quality or control.",
      },
      { type: "h3", text: "The Bigger Picture" },
      {
        type: "p",
        text: "At Bloom, our mission is to make hardware less hard. That means replacing the fragmented workflows and siloed vendor lists with a connected ecosystem that works like an extension of your team.",
      },
      {
        type: "p",
        text: "Re:Build shares that vision—not just in theory, but in practice. They're proving that advanced manufacturing can be accessible, adaptable, and aligned with the needs of modern hardware companies.",
      },
      {
        type: "p",
        text: "Together, we're reshaping what it means to build in America.",
      },
      {
        type: "p",
        text: "If you're building something physical and want to build smarter, we're here to help.",
      },
    ],
  },
  {
    slug: "self-onboarding-for-bloom-members",
    title: "New: Self-Onboarding for Bloom Members",
    excerpt:
      "Joining Bloom just got a whole lot easier. Starting today, new members can onboard themselves directly to the platform — one step closer to a fully self-service experience.",
    date: "2025-04-08",
    dateLabel: "Apr 8, 2025",
    category: "UPDATES",
    author: "Chris Nolte",
    hero: "/images/blog/self-onboarding.jpeg",
    body: [
      {
        type: "p",
        text: "Joining Bloom just got easier. New members can now onboard themselves directly through the platform—bringing us one step closer to a fully self-service experience.",
      },
      {
        type: "p",
        text: "This update is designed to streamline the process for teams who want to move fast. Whether you're a hardware startup or a scaling brand, you can now plug into Bloom without needing a guided walkthrough.",
      },
      { type: "h3", text: "What’s Included" },
      {
        type: "p",
        text: "NDA & Membership Agreement — Members can sign all necessary agreements—including NDAs and the Bloom Membership Agreement—digitally within the onboarding flow. No email chains, no PDFs to print.",
      },
      {
        type: "p",
        text: "Document Sharing — The onboarding process prompts you to securely upload the key documents we need: W-9s, insurance certificates, and any compliance paperwork. You’ll know exactly what’s required and where to upload it.",
      },
      {
        type: "p",
        text: "Secure File Handling — All files are stored securely and tied to your member profile, ensuring privacy while keeping everything in one accessible location.",
      },
      {
        type: "p",
        text: "Service & Intent Setup — You’ll be asked to share your goals, your target use cases, and the services you’re likely to need. This helps Bloom match you with the right partners and resources from day one.",
      },
      { type: "h3", text: "Why It Matters" },
      {
        type: "p",
        text: "This rollout eliminates back-office friction and accelerates access for members ready to engage with the Bloom platform. It also sets the foundation for a more scalable, automated system that can serve hundreds of companies without sacrificing clarity or control.",
      },
      { type: "h3", text: "Coming Soon" },
      {
        type: "p",
        text: "Partner self-onboarding is in development and will soon follow. We’re also building out additional self-service tools for billing, profile management, job matching, and more.",
      },
      { type: "h3", text: "Start Now" },
      {
        type: "p",
        text: "If you’ve been invited to Bloom or are in the process of joining, you can now complete your setup independently and get started right away. Reach out to the team if you need access.",
      },
    ],
  },
  {
    slug: "climate-tech-cocktails-justin-kosmides",
    title: "Circular Hardware & Detroit’s Reshoring - Climate Tech Cocktails",
    excerpt: "Mixing climate tech with reshoring strategies.",
    date: "2025-02-03",
    dateLabel: "Feb 3, 2025",
    category: "PODCAST",
    author: "Climate Tech Cocktails",
    hero: "/images/blog/climate-tech.jpeg",
    body: [
      {
        type: "p",
        text: "Over coffee, Justin digs into manufacturing in Detroit, circular economy, and Bloom’s approach to building sustainable supply chains for hardtech.",
      },
      {
        type: "linkButton",
        text: "LISTEN TO THE EPISODE",
        href: "https://climate-tech-cocktails.simplecast.com/episodes/bloom-justin-kosmides-38TNOYMg",
      },
    ],
  },
  {
    slug: "autonocast-315-chris-nolte",
    title: "Scaling Hardware Startups with Ops Efficiency - Autonocast",
    excerpt: "Inside Bloom’s strategy for smarter supply chains.",
    date: "2024-10-08",
    dateLabel: "Oct 8, 2024",
    category: "PODCAST",
    author: "Edward Niedermeyer — Autonocast",
    hero: "/images/blog/autonocast.png",
    body: [
      {
        type: "p",
        text: "Chris Nolte discusses how Bloom gives hardtech startups a “fighting edge” by handling the operational complexity and letting them scale.",
      },
      {
        type: "linkButton",
        text: "LISTEN TO THE EPISODE",
        href: "https://www.autonocast.com/blog/2024/10/8/315-chris-nolte-of-bloom",
      },
    ],
  },
  {
    slug: "dust-moto-joins-bloom-platform",
    title: "Dust Moto Joins Bloom Platform: A New Era for Electric Dirt Bikes",
    excerpt:
      "Bloom welcomes Oregon-based electric dirt bike startup Dust Moto, leveraging our extensive network in assembly, warehousing, and distribution.",
    date: "2024-06-20",
    dateLabel: "Jun 20, 2024",
    category: "MEMBERS",
    author: "Chris Nolte",
    hero: "/images/blog/dust-moto.jpeg",
    body: [
      {
        type: "p",
        text: "Bloom is excited to announce that Oregon-based electric dirt bike startup Dust Moto is joining our platform. Dust Moto aims to bridge the powersports industry with emerging mobility tech, ultimately connecting more people with the sport. This partnership represents a significant growth moment for Dust Moto, leveraging Bloom’s extensive network in assembly, warehousing, and distribution.",
      },
      {
        type: "p",
        text: "Dust Moto has disrupted the $20 billion American powersports industry with its innovative and highly coveted electric dirt bike. Their commitment to American manufacturing and craftsmanship aligns with Bloom’s mission to create a sustainable and resilient industry. Bloom’s platform provides a critical network that closes the gap between the growing demand for micromobility products and domestic supply chains.",
      },
      {
        type: "p",
        text: "“From the start, Dust has been committed to developing a best-in-class American assembly platform to fulfill our mission of becoming the #1 US dirt bike brand, globally. Bloom is leading the pack by building an amazing ecosystem that will allow us to achieve our goals, both near-term and at scale,” said Colin Godby, CEO of Dust Moto.",
      },
      {
        type: "p",
        text: "This collaboration also highlights Michigan’s growing role as a hub for the mobility industry. Dust’s new membership with Bloom provides access to a dynamic community of mobility leaders. In addition to locating their manufacturing operations at Newlab at Michigan Central, Dust will be utilizing Shophouse Park in the Upper Peninsula to test, refine, and launch their Model_1 in late 2024.",
      },
      {
        type: "p",
        text: "Stay tuned as Dust Moto and Bloom work together to drive the future of electric dirt bikes and reshape the powersports industry!",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
