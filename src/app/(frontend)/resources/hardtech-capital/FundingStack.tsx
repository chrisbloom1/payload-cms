/**
 * Visualizes the typical hardtech funding sequence across years/stages.
 *
 * The point: founders chronically miss the *stacking* play. Non-dilutive
 * money before equity. Patient VC before growth. LPO before public markets.
 * This is the textbook sequence, illustrated.
 */

import Link from "next/link";

type Stage = {
  index: number;
  title: string;
  years: string;
  description: string;
  examples: { name: string; type: "non_dilutive" | "equity" | "project_finance" }[];
  checkRange: string;
  filterHref: string;
};

const STAGES: Stage[] = [
  {
    index: 1,
    title: "Prove it works",
    years: "Year 0 to 2",
    description:
      "You have a thesis, maybe a postdoc demo. You need stipend, lab access, and money for a feasibility study. Take non-dilutive first.",
    examples: [
      { name: "Activate Fellowship", type: "non_dilutive" },
      { name: "NSF SBIR Phase I", type: "non_dilutive" },
      { name: "Cyclotron Road", type: "non_dilutive" },
      { name: "IndieBio", type: "equity" },
      { name: "Y Combinator", type: "equity" },
    ],
    checkRange: "$100K to $500K",
    filterHref: "#directory#stage=pre_seed",
  },
  {
    index: 2,
    title: "Build a prototype",
    years: "Year 2 to 4",
    description:
      "Feasibility is done. You need to build a working unit and hire 3 to 8 engineers. Layer Phase II SBIR onto a seed round, or run them in parallel.",
    examples: [
      { name: "NSF SBIR Phase II", type: "non_dilutive" },
      { name: "ARPA-E OPEN", type: "non_dilutive" },
      { name: "Eclipse Ventures", type: "equity" },
      { name: "Lux Capital", type: "equity" },
      { name: "MCJ Collective", type: "equity" },
    ],
    checkRange: "$1M to $10M",
    filterHref: "#directory#stage=seed_series_a",
  },
  {
    index: 3,
    title: "Pilot and demonstrate",
    years: "Year 4 to 7",
    description:
      "You have a working unit. Now you need a paying pilot. This is where DIU OTA, ARPA-E SCALEUP, and patient Series A/B VC all live. Layer the customer pilot on top of the capital round.",
    examples: [
      { name: "ARPA-E SCALEUP", type: "non_dilutive" },
      { name: "DIU OTA", type: "non_dilutive" },
      { name: "SpaceWERX STRATFI", type: "non_dilutive" },
      { name: "Breakthrough Energy Ventures", type: "equity" },
      { name: "Lowercarbon Capital", type: "equity" },
      { name: "a16z American Dynamism", type: "equity" },
    ],
    checkRange: "$10M to $50M",
    filterHref: "#directory#stage=series_b_plus",
  },
  {
    index: 4,
    title: "First commercial plant",
    years: "Year 7 to 10",
    description:
      "Pilots proved it. Now you need a first-of-a-kind plant. This is what kills most hardtech companies. The DOE Loan Programs Office exists for exactly this. Use it.",
    examples: [
      { name: "DOE LPO (EDFP)", type: "project_finance" },
      { name: "EU Innovation Fund", type: "project_finance" },
      { name: "Energy Impact Partners", type: "equity" },
      { name: "Galvanize Climate Solutions", type: "equity" },
      { name: "Microsoft Climate Innovation Fund", type: "equity" },
    ],
    checkRange: "$50M to $500M",
    filterHref: "#directory#stage=growth",
  },
  {
    index: 5,
    title: "Scale",
    years: "Year 10+",
    description:
      "Multiple plants, real revenue, strategic offtakes. Growth equity, project finance, eventually public markets. This is the part most aggregators cover well, so we keep it brief.",
    examples: [
      { name: "Generate Capital", type: "project_finance" },
      { name: "Spring Lane Capital", type: "project_finance" },
      { name: "Public markets / IPO", type: "equity" },
    ],
    checkRange: "$100M+",
    filterHref: "#directory#stage=growth",
  },
];

const TYPE_COLOR: Record<Stage["examples"][number]["type"], string> = {
  non_dilutive: "bg-bloom-mint text-bloom-navy",
  equity: "bg-bloom-navy text-bloom-cream",
  project_finance: "bg-bloom-orange text-white",
};

const TYPE_LABEL: Record<Stage["examples"][number]["type"], string> = {
  non_dilutive: "non-dilutive",
  equity: "equity",
  project_finance: "project finance",
};

export function FundingStack() {
  return (
    <section
      id="stack"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mb-12 max-w-[720px]">
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
            HOW TO STACK IT
          </span>
          <h2 className="mt-4 text-[32px] leading-[1.1] font-semibold tracking-tight text-bloom-navy sm:text-[40px] lg:text-[48px]">
            The hardtech capital ladder
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-bloom-muted sm:text-[17px]">
            Most founders raise one bucket at a time. The ones who win
            sequence multiple buckets in parallel: a Phase II SBIR runs
            alongside the seed round, an ARPA-E SCALEUP sits underneath the
            Series B, an LPO loan finances the first plant. Here’s the
            textbook order.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LegendDot color="bg-bloom-mint" label="Non-dilutive" />
            <LegendDot color="bg-bloom-navy" label="Equity" />
            <LegendDot color="bg-bloom-orange" label="Project finance" />
          </div>
        </div>

        <ol className="grid gap-4 sm:gap-5">
          {STAGES.map((stage, i) => (
            <li key={stage.index} className="relative">
              <StageCard stage={stage} />
              {i < STAGES.length - 1 && <Connector />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="grid items-start gap-6 rounded-3xl border border-bloom-grey bg-white p-6 sm:grid-cols-[160px_1fr] sm:gap-8 sm:p-8">
      <div>
        <div className="font-mono text-[42px] leading-none font-semibold tabular-nums text-bloom-orange">
          {String(stage.index).padStart(2, "0")}
        </div>
        <div className="mt-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          {stage.years}
        </div>
        <div className="mt-2 font-mono text-[12px] font-semibold tracking-[0.06em] text-bloom-navy">
          {stage.checkRange}
        </div>
      </div>
      <div>
        <h3 className="text-[22px] leading-[1.2] font-semibold tracking-tight text-bloom-navy sm:text-[26px]">
          {stage.title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-bloom-muted">
          {stage.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stage.examples.map((ex) => (
            <span
              key={ex.name}
              className={`rounded-full px-3 py-1 text-[12px] font-medium ${TYPE_COLOR[ex.type]}`}
              title={TYPE_LABEL[ex.type]}
            >
              {ex.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div
      className="pointer-events-none absolute left-[60px] top-full hidden h-6 -translate-x-1/2 sm:block"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-bloom-navy/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2v20m0 0l-6-6m6 6l6-6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.06em] text-bloom-navy">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      {label}
    </span>
  );
}
