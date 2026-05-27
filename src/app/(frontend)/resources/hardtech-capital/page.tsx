import type { Metadata } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { pageMetadata } from "@/utilities/pageMetadata";
import { closing, hero, sections } from "./content";
import { ClosingSoon } from "./ClosingSoon";
import { Directory } from "./Directory";
import { FundingStack } from "./FundingStack";
import { withGlossary } from "./glossaryTerms";
import { Recommender } from "./Recommender";
import { ShortlistCounter } from "./ShortlistButton";
import {
  GEOGRAPHY_LABELS,
  KIND_LABELS,
  VERTICAL_LABELS,
  type Resource,
} from "./types";

export const metadata: Metadata = pageMetadata({
  title: "Hardtech Capital: funders, grants, and programs for hardware founders",
  description:
    "A working list of 1,702+ VCs, accelerators, federal programs, and grants that back hardtech in 2026. Built for founders building atoms, not bits.",
  path: "/resources/hardtech-capital",
  ogTag: "Hardtech Capital",
});

async function loadResources(): Promise<Resource[]> {
  const file = path.join(process.cwd(), "public", "data", "hardtech-capital.json");
  const raw = await fs.readFile(file, "utf-8");
  return JSON.parse(raw) as Resource[];
}

export default async function HardtechCapitalPage() {
  const data = await loadResources();
  const byId = new Map(data.map((r) => [r.id, r]));

  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <Hero />
        <ClosingSoon />
        <Recommender />
        <SectionNav />
        {sections.map((s) => (
          <Section
            key={s.id}
            section={s}
            resources={s.featured
              .map((id) => byId.get(id))
              .filter((r): r is Resource => Boolean(r))}
          />
        ))}
        <FundingStack />
        <Directory />
        <Closing />
      </main>
      <ShortlistCounter />
      <UnifiedFooter />
    </>
  );
}

function Hero() {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full overflow-hidden bg-bloom-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-6">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
          {hero.eyebrow}
        </span>
        <h1 className="mt-5 text-[40px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[56px] lg:text-[72px]">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-[760px] text-[17px] leading-[1.55] text-bloom-muted sm:text-[19px]">
          {hero.subhead}
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
                {s.label}
              </dt>
              <dd className="mt-2 text-[28px] leading-tight font-semibold tracking-tight text-bloom-navy sm:text-[32px]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </RevealOnScroll>
  );
}

function SectionNav() {
  return (
    <section className="border-y border-bloom-grey bg-bloom-mint-soft">
      <nav className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-x-6 gap-y-3 px-6 py-5">
        <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
          THE PLAYBOOK
        </span>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-[13px] font-medium text-bloom-navy underline-offset-4 hover:underline"
          >
            {s.title}
          </a>
        ))}
        <a
          href="#stack"
          className="text-[13px] font-medium text-bloom-navy underline-offset-4 hover:underline"
        >
          The capital ladder
        </a>
        <a
          href="/resources/hardtech-capital/angels"
          className="text-[13px] font-medium text-bloom-navy underline-offset-4 hover:underline"
        >
          How to find an angel
        </a>
        <a
          href="#directory"
          className="ml-auto rounded-full bg-bloom-navy px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.12em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
        >
          Browse all 1,702 →
        </a>
      </nav>
    </section>
  );
}

function Section({
  section,
  resources,
}: {
  section: (typeof sections)[number];
  resources: Resource[];
}) {
  return (
    <section
      id={section.id}
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
              {section.eyebrow}
            </span>
            <h2 className="mt-4 text-[32px] leading-[1.1] font-semibold tracking-tight text-bloom-navy sm:text-[40px] lg:text-[48px]">
              {section.title}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.65] text-bloom-muted"
                >
                  {withGlossary(p)}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resources.map((r) => (
              <FeaturedCard key={r.id} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ r }: { r: Resource }) {
  // Curated entries get an internal deep-page link; non-curated link out.
  const internal =
    r.source === "curated"
      ? `/resources/hardtech-capital/${r.id.replace(/^curated-/, "")}`
      : null;
  const external = r.apply_url || r.url;
  const href = internal ?? external;
  const vertical =
    (r.verticals ?? [])
      .slice(0, 2)
      .map((v) => VERTICAL_LABELS[v] ?? v)
      .join(" · ") || null;
  const Tag = href ? "a" : "div";
  const tagProps = href
    ? internal
      ? { href: internal }
      : { href: external!, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...tagProps}
      className="group flex h-full flex-col rounded-2xl border border-bloom-grey bg-white p-6 transition-colors hover:border-bloom-navy/30"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
          {KIND_LABELS[r.kind]}
        </span>
        {r.last_verified && (
          <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
            ✓ Verified
          </span>
        )}
      </div>
      <h3 className="mt-3 text-[18px] leading-[1.25] font-semibold tracking-tight text-bloom-navy">
        {r.name}
      </h3>
      {vertical && (
        <p className="mt-2 text-[12px] text-bloom-muted">{vertical}</p>
      )}
      {r.notes && (
        <p className="mt-4 line-clamp-4 text-[13px] leading-[1.55] text-bloom-muted">
          {r.notes}
        </p>
      )}
      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-bloom-grey pt-4">
        <div>
          {r.award && (
            <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase">
              {truncate(r.award, 70)}
            </p>
          )}
          {r.hq && (
            <p className="mt-1 text-[11px] text-bloom-muted">{r.hq}</p>
          )}
          {r.geography && !r.hq && (
            <p className="mt-1 text-[11px] text-bloom-muted">
              {GEOGRAPHY_LABELS[r.geography] ?? r.geography}
            </p>
          )}
        </div>
        {href && (
          <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase opacity-70 transition-opacity group-hover:opacity-100">
            {internal ? "Deep dive →" : "Visit →"}
          </span>
        )}
      </div>
      {r.deadline && (
        <p className="mt-3 text-[12px] text-bloom-orange">⏱ {r.deadline}</p>
      )}
    </Tag>
  );
}

function Closing() {
  return (
    <section className="w-full bg-bloom-navy py-20 text-bloom-cream sm:py-24">
      <div className="mx-auto w-full max-w-[820px] px-6 text-center">
        <h2 className="text-[32px] leading-[1.15] font-semibold tracking-tight sm:text-[40px]">
          {closing.title}
        </h2>
        <p className="mt-6 text-[16px] leading-[1.65] text-bloom-cream/70 sm:text-[18px]">
          {closing.body}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/resources/hardtech-capital/submit"
            className="inline-block rounded-full bg-bloom-cream px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-opacity hover:opacity-90"
          >
            Suggest a funder
          </a>
          <a
            href="mailto:chris@bloomnetwork.ai?subject=Hardtech%20Capital%20feedback"
            className="inline-block rounded-full border border-bloom-cream/30 px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-colors hover:border-bloom-cream/60"
          >
            Send feedback
          </a>
        </div>
      </div>
    </section>
  );
}

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n).trimEnd() + "…";
}
