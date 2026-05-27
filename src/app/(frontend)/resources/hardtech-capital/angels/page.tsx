import type { Metadata } from "next";
import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";
import { withGlossary } from "../glossaryTerms";
import { ShortlistCounter } from "../ShortlistButton";
import { KIND_LABELS, VERTICAL_LABELS, type Resource } from "../types";
import { angelsHero, angelsSections } from "./content";

export const metadata: Metadata = pageMetadata({
  title: "How to find a hardtech angel : Hardtech Capital",
  description:
    "The half-life of an angel's stated thesis is twelve months. Here's how to find the people who can write you a $50K first check, plus the organized vehicles you can apply to.",
  path: "/resources/hardtech-capital/angels",
  ogTag: "Angels",
});

async function loadResources(): Promise<Resource[]> {
  const file = path.join(
    process.cwd(),
    "public",
    "data",
    "hardtech-capital.json",
  );
  return JSON.parse(await fs.readFile(file, "utf-8")) as Resource[];
}

export default async function AngelsPage() {
  const data = await loadResources();
  const angelGroups = data.filter(
    (r) => r.kind === "angel" && r.source === "curated",
  );

  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <section className="border-b border-bloom-grey bg-bloom-cream pt-24 pb-12 sm:pt-28 sm:pb-16">
          <div className="mx-auto w-full max-w-[820px] px-6">
            <Link
              href="/resources/hardtech-capital"
              className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase underline-offset-4 hover:underline"
            >
              ← Hardtech Capital
            </Link>
            <div className="mt-6">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                {angelsHero.eyebrow}
              </span>
              <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[56px]">
                {angelsHero.title}
              </h1>
              <p className="mt-6 text-[17px] leading-[1.55] text-bloom-muted sm:text-[19px]">
                {angelsHero.subhead}
              </p>
            </div>
          </div>
        </section>

        {angelsSections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="border-b border-bloom-grey bg-bloom-cream py-16 sm:py-20"
          >
            <div className="mx-auto w-full max-w-[820px] px-6">
              <h2 className="text-[28px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[36px]">
                {s.title}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                {s.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[16px] leading-[1.7] text-bloom-navy/85"
                  >
                    {withGlossary(p)}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section
          id="angel-groups"
          className="bg-bloom-cream py-16 sm:py-20"
        >
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-10">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                ORGANIZED VEHICLES
              </span>
              <h2 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[36px]">
                Where to apply
              </h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-[1.6] text-bloom-muted">
                Angel networks, syndicates, and alumni-led groups with public
                application processes. {angelGroups.length} listed. Filter the
                full directory by Type: Angel for the broader set.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {angelGroups.map((r) => (
                <AngelCard key={r.id} r={r} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <ShortlistCounter />
      <UnifiedFooter />
    </>
  );
}

function AngelCard({ r }: { r: Resource }) {
  const slug = r.id.replace(/^curated-/, "");
  return (
    <li>
      <Link
        href={`/resources/hardtech-capital/${slug}`}
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
        <h3 className="mt-3 text-[17px] leading-[1.25] font-semibold tracking-tight text-bloom-navy">
          {r.name}
        </h3>
        {r.notes && (
          <p className="mt-3 line-clamp-4 text-[13px] leading-[1.55] text-bloom-muted">
            {r.notes}
          </p>
        )}
        <div className="mt-auto pt-4 flex flex-wrap items-end justify-between gap-2 border-t border-bloom-grey">
          <div className="flex flex-wrap gap-1.5">
            {(r.verticals ?? []).slice(0, 2).map((v) => (
              <span
                key={v}
                className="rounded-full bg-bloom-mint px-2 py-0.5 text-[11px] font-medium text-bloom-navy"
              >
                {VERTICAL_LABELS[v] ?? v}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase opacity-70 transition-opacity group-hover:opacity-100">
            Deep dive →
          </span>
        </div>
      </Link>
    </li>
  );
}
