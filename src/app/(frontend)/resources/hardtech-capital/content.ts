/**
 * Editorial content for the Hardtech Capital resource page.
 *
 * Voice: warm but brief, operator-to-operator. Short sentences. Specific
 * nouns. No corporate jargon. No em-dashes.
 *
 * Banned: marketplace, micromobility, unlock, empower, transform, seamlessly,
 * leverage (verb), synergy, robust, revolutionary, cutting-edge,
 * best-in-class, ecosystem (one per page max), at scale, solutions, journey,
 * delight, "it's not just X, it's Y", "imagine a world where", em-dashes.
 */

export type Section = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  featured: string[]; // resource IDs from /data/hardtech-capital.json
};

export const hero = {
  eyebrow: "RESOURCE",
  title: "Capital for the people who actually make things.",
  subhead:
    "The funding map for hardware companies looks nothing like the SaaS one. Check sizes are bigger. Timelines are longer. The most useful money often isn’t equity. This is a working list of who funds hardtech in 2026: VCs, accelerators, federal programs, corporate venture arms, and foundations. Built for founders working in atoms.",
  stats: [
    { value: "1,702", label: "FUNDERS" },
    { value: "404", label: "DEEP PROFILES" },
    { value: "May 22, 2026", label: "LAST UPDATED" },
  ] as { value: string; label: string }[],
};

export const sections: Section[] = [
  {
    id: "patient-capital",
    eyebrow: "01 / VENTURE",
    title: "When you need patient capital",
    paragraphs: [
      "You’re building something that will take seven years to break even and ten to print money. Most VC funds run on a ten-year clock and need a 3-5x within their fund cycle. That math doesn’t work for a fusion reactor, a new battery chemistry, or a clinical-stage device.",
      "The funds that do work are a small subset. They write longer checks. They sit on the cap table for fifteen years if they have to. They tell their LPs upfront that this is patient capital. Look for dedicated tough-tech vehicles like MIT The Engine, Lowercarbon Capital, and Breakthrough Energy Ventures. Strategic corporate venture arms work too if the parent company benefits from the technology being commercialized: BMW i Ventures, Shell Ventures, Microsoft Climate Innovation Fund. Family offices that have made hardtech bets before are a third pool.",
      "A signal worth reading: how many of their portfolio companies are still pre-revenue past Series A. If most have product revenue at A, the fund is structured for software risk. If a third are still mid-pilot at B, you’ve found a patient fund.",
    ],
    featured: [
      "curated-mit-the-engine",
      "curated-breakthrough-energy-ventures",
      "curated-lowercarbon-capital",
      "curated-energy-impact-partners-eip",
      "curated-prelude-ventures",
      "curated-galvanize-climate-solutions",
      "curated-arch-venture-partners",
      "curated-flagship-pioneering",
      "curated-eclipse-ventures",
      "curated-future-ventures",
      "curated-playground-global",
      "curated-dcvc-data-collective",
    ],
  },
  {
    id: "non-dilutive",
    eyebrow: "02 / NON-DILUTIVE",
    title: "Non-dilutive paths: SBIR vs ARPA-E vs DIU",
    paragraphs: [
      "Non-dilutive money is the cheat code in hardtech. Done well, it pays for the years of de-risking no VC will fund. Done badly, it consumes 18 months of your team to win $300K. The difference is knowing which vehicle fits which stage.",
      "SBIR/STTR is the workhorse. Every science agency runs one: NSF, NIH, NASA, DoD, DOE, USDA. Phase I is roughly $300K for feasibility, Phase II is $1-2M for a prototype, Phase III is a sole-source contract with no statutory ceiling. The NSF Project Pitch model turns around in three weeks. The DoD program pays the most. Reauthorized in April 2026 for five more years, so applications are flowing again.",
      "ARPA-E is for energy moonshots. Concept papers are short. The program managers are technically literate. Awards run $250K-$10M. SCALEUP Ready bridges from ARPA-E grants to industrial-scale deployment with $20M+ checks. IGNIITE is the early-career on-ramp. DIU is what you use when the customer is the Department of Defense. OTA contracts close in weeks instead of years and run $1-50M. AFWERX and SpaceWERX layer on STRATFI matching, which turns a $30M private raise into a $60M project budget.",
      "Rule of thumb: never write a single proposal. Build a stack. Phase I SBIR pays for the prototype. Phase II buys the team. ARPA-E or DIU pays for the demonstration. The DOE Loan Programs Office finances the first commercial plant. The companies that compound non-dilutive capital are the ones that win.",
    ],
    featured: [
      "sbir-nsf-sbir-phase-i",
      "sbir-nsf-sbir-phase-ii",
      "sbir-nsf-sbir-sttr-fast-track",
      "curated-arpa-e-scaleup",
      "curated-defense-innovation-unit-diu",
      "curated-afwerx",
      "curated-spacewerx",
      "curated-doe-tech-commercialization-fund-tcf",
      "curated-nsf-regional-innovation-engines-nsf-engines",
      "curated-barda-drive",
      "curated-cdmrp-dod-congressionally-directed-medical-research",
      "curated-nih-radx",
    ],
  },
  {
    id: "defense-dual-use",
    eyebrow: "03 / DEFENSE",
    title: "Defense and dual-use playbook",
    paragraphs: [
      "The defense capital landscape changed in 2024-25 and again in 2026. Funds that wouldn’t touch hardware five years ago, including a16z, Sequoia, Lux, Khosla, and 8VC, now have defense or American Dynamism practices. The two largest American hardtech exits of the decade (Anduril, SpaceX) rewrote what venture-fundable defense looks like.",
      "The pattern that works: lead with a commercial use case, deliver a working product to the DoD via an SBIR or OTA, then layer on classified or program-of-record work. Funds want to see commercial revenue or a clear path to it. They will not back a single-customer DoD-only company unless you’ve already won a Program of Record.",
      "If your tech has dual-use potential, even from an adjacent industry like mobility or robotics, the federal path looks like this: file an SBIR Phase I with the agency closest to your use case (AFWERX for Air Force, Navy SBIR for maritime, ARMY for ground vehicles, DIU for cross-cutting commercial). Win the $75K to $300K feasibility check. Use it to build a working prototype while you pursue a private seed round in parallel. Phase II (~$1.9M) buys you the team. Phase III is the sole-source production contract and is uncapped. The STRATFI matching pool can turn a $30M private raise into a $60M project. Most dual-use winners stack three to five of these vehicles before they ever go on a single Program of Record.",
      "On the non-dilutive side: DIU (currently between cycles as of May 2026), AFWERX, SpaceWERX, DARPA programs, CDMRP for medical, and DASA in the UK. Federal procurement reform conversations and the renamed “Under Secretary of War” terminology in 2026 announcements signal continued political support for commercial-tech pipelines.",
    ],
    featured: [
      "curated-a16z-american-dynamism",
      "curated-founders-fund",
      "curated-lux-capital",
      "curated-shield-capital",
      "curated-razor-s-edge-ventures",
      "curated-8vc",
      "curated-in-q-tel",
      "curated-america-s-frontier-fund-aff",
      "curated-squadra-ventures",
      "curated-decisive-point",
      "curated-seraphim-space",
      "curated-defense-innovation-unit-diu",
      "curated-afwerx",
      "curated-spacewerx",
      "curated-dasa-uk-defence-and-security-accelerator",
    ],
  },
  {
    id: "climate-stack",
    eyebrow: "04 / CLIMATE",
    title: "The climate-tech capital stack",
    paragraphs: [
      "Climate has the deepest non-VC capital pool in hardtech. Build the stack accordingly across three phases.",
      "Early R&D and prototype (years 0-3): ARPA-E, NSF SBIR, and the DOE Technology Commercialization Fund for national-lab spinouts. National-lab fellowships sit here too: Activate, Cyclotron Road, Chain Reaction Innovations, Innovation Crossroads, West Gate. Add Greentown Labs membership, Third Derivative, IndieBio NYC, and the EU EIC Accelerator if you have an EU presence.",
      "Pilot and demonstration (years 3-7): ARPA-E SCALEUP, DOE Office of Clean Energy Demonstrations grants, the EU Innovation Fund (up to 60% of project costs, €20M-€100M+ project sizes), state-level cleantech accelerators. On equity: Breakthrough Energy Ventures, Lowercarbon, Prelude, EIP, Galvanize, Khosla, DCVC, 2150, Pale Blue Dot.",
      "First commercial plant and scale (years 7+): the DOE Loan Programs Office, now branded the Office of Energy Dominance Financing, offers loan guarantees up to $5B per project. This is the largest non-dilutive vehicle for hardtech, full stop. The 2026 policy shift expanded eligibility beyond pure clean energy to clean coal, gas, oil power generation, and nuclear. The pool of eligible projects roughly doubled. If you’re building at gigafactory scale in any of those categories, file with LPO before you raise growth equity. The loan changes the cost of capital materially.",
    ],
    featured: [
      "curated-breakthrough-energy-ventures",
      "curated-lowercarbon-capital",
      "curated-energy-impact-partners-eip",
      "curated-galvanize-climate-solutions",
      "curated-prelude-ventures",
      "curated-generate-capital",
      "curated-microsoft-climate-innovation-fund",
      "curated-amazon-climate-pledge-fund",
      "curated-shell-ventures",
      "curated-bmw-i-ventures",
      "curated-toyota-ventures",
      "curated-doe-loan-programs-office-lpo",
      "curated-arpa-e-scaleup",
      "curated-eu-innovation-fund",
      "curated-2150",
      "curated-elemental-excelerator-elemental-impact",
    ],
  },
  {
    id: "national-labs",
    eyebrow: "05 / NATIONAL LABS",
    title: "Inside the national lab system",
    paragraphs: [
      "There are seventeen DOE national labs and one DOC lab (NIST). They run thirty billion-plus dollars of R&D per year and they are wildly under-utilized by hardtech founders.",
      "Fellowships are the first door. Activate runs at LBNL, NREL, ARL, and several other sites (it absorbed Cyclotron Road). Innovation Crossroads runs at ORNL, Chain Reaction Innovations at Argonne, West Gate at PNNL. Each gives you 24 months of stipend, free lab access, and a senior mentor. They are the single best non-dilutive starting point for a hardtech founder with a science background.",
      "The Technology Commercialization Fund (TCF) is the second door. $100K-$1.5M per topic, 50% non-federal match required, proposals originate from a national lab with the founder as the teaming partner. The FY26 deadline for the Commercialization Enabling track is June 16, 2026. If you have lab IP that needs to cross the valley of death, this is the vehicle.",
      "User Facilities are the third door, and the most overlooked. Every DOE lab runs one. The Molecular Foundry at LBNL, SNS at ORNL, ALCF at Argonne. Beam time and supercomputer time are free for non-proprietary research and cheap for proprietary. If you need a synchrotron, a clean room, or a 100-petaflop cluster, this is how you get it.",
      "Manufacturing USA Institutes are the harder-to-find fourth leg. Seventeen institutes specialize by topic: BioMADE for bioindustrial, AIM Photonics for integrated photonics, ARM for advanced robotics, MxD for cyber-physical, America Makes for additive manufacturing (next open call: $14.5M materials, deadline June 2, 2026). Slow but real.",
    ],
    featured: [
      "curated-activate-fellowship",
      "curated-cyclotron-road-at-lawrence-berkeley-national-lab",
      "curated-chain-reaction-innovations-argonne-national-lab",
      "curated-innovation-crossroads-oak-ridge-national-lab",
      "curated-west-gate-pacific-northwest-national-lab",
      "curated-doe-tech-commercialization-fund-tcf",
      "curated-manufacturing-usa-institutes-17-institutes",
      "curated-doe-loan-programs-office-lpo",
      "curated-nsf-regional-innovation-engines-nsf-engines",
      "curated-berkeley-skydeck",
      "curated-stanford-startx",
      "curated-mit-the-engine",
    ],
  },
  {
    id: "international",
    eyebrow: "06 / INTERNATIONAL",
    title: "EU and international programs",
    paragraphs: [
      "If you have any European nexus, whether a co-founder, a customer, or a partner, there is serious money on the table. American founders chronically underestimate this.",
      "The EU EIC Accelerator is the headline product. Up to €2.5M grant plus up to €10M equity in a blended package. The 2026 budget is €414M for the Open track and €220M for Challenges. The final 2026 cutoff is November 4. Eligibility is strict: EU-based or associated-country-based company, deep-tech innovation with EU strategic relevance.",
      "EIC Pathfinder funds the pre-commercial stage at up to €4M for consortia of three or more entities from different member states. Challenges closes October 28, 2026. The EU Innovation Fund is the climate scale-up vehicle: up to 60% of project costs for net-zero technology demonstration, €20M-€100M+ project sizes. IF25 closed in April; the next call is expected late 2026.",
      "UK ARIA is the most interesting new program. It is the UK’s ARPA equivalent: high-risk, programmatic, programme directors picked for taste rather than peer review. Three programs are currently open: Enduring Atmospheric Platforms (May 22), Safeguarded AI Cybersecurity (July 1), and rolling Opportunity Seeds up to £500K.",
      "Canada: NRC IRAP for industrial R&D (in transition to the new Canada Innovation Corporation), SDTC for climate, Strategic Innovation Fund for $10M-$500M+ industrial projects. Asia: A*STAR Singapore, NEDO Japan, the Israel Innovation Authority’s 50% R&D matching grants. BIRD Foundation pairs US and Israeli companies on joint R&D.",
    ],
    featured: [
      "curated-eu-eic-accelerator",
      "curated-eu-eic-pathfinder",
      "curated-eu-innovation-fund",
      "curated-aria-uk-advanced-research-and-invention-agency",
      "curated-innovate-uk-smart-grants",
      "curated-uk-catapult-network",
      "curated-dasa-uk-defence-and-security-accelerator",
      "curated-nrc-irap",
      "curated-sustainable-development-technology-canada-sdtc",
      "curated-strategic-innovation-fund-ised-canada",
      "curated-bird-foundation",
      "curated-arena-australian-renewable-energy-agency",
      "curated-israel-innovation-authority",
      "curated-a-star-singapore",
      "curated-nedo-japan",
      "curated-esa-bic-european-space-agency-business-incubation-centres",
    ],
  },
];

export const closing = {
  title: "What’s missing?",
  body: "We update this monthly. If you know a fund, grant, lab, or program that belongs on the list, or if a deadline is wrong, send it to chris@bloomnetwork.ai. The point is to be useful, not exhaustive.",
};
