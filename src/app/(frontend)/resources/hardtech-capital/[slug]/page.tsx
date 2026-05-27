import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";
import {
  BLOOM_FOCUS_LABELS,
  GEOGRAPHY_LABELS,
  KIND_LABELS,
  STAGE_LABELS,
  VERTICAL_LABELS,
  type Resource,
} from "../types";
import { withGlossary } from "../glossaryTerms";
import { ShortlistButton } from "../ShortlistButton";
import { ShortlistCounter } from "../ShortlistButton";
import { CalendarButton } from "../CalendarButton";

async function loadResources(): Promise<Resource[]> {
  const file = path.join(
    process.cwd(),
    "public",
    "data",
    "hardtech-capital.json",
  );
  const raw = await fs.readFile(file, "utf-8");
  return JSON.parse(raw) as Resource[];
}

type Enrichment = {
  name: string;
  domain?: string;
  url?: string;
  apollo_org_id?: string;
  linkedin_url?: string;
  employees?: number;
  founded_year?: number;
  industry?: string;
  total_funding?: number;
  latest_funding_stage?: string;
  description?: string;
  partners?: {
    name: string;
    title: string;
    email_status?: "verified" | "unavailable";
    _note?: string;
  }[];
};

async function loadEnrichment(): Promise<Record<string, Enrichment>> {
  try {
    const file = path.join(
      process.cwd(),
      "public",
      "data",
      "apollo-enrichment.json",
    );
    const raw = await fs.readFile(file, "utf-8");
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    // Strip _meta and any other underscore-prefixed keys.
    const out: Record<string, Enrichment> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (!k.startsWith("_")) out[k] = v as Enrichment;
    }
    return out;
  } catch {
    return {};
  }
}

function formatFunding(n: number | undefined): string | null {
  if (!n) return null;
  if (n >= 1_000_000_000)
    return `$${(n / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (n >= 1_000_000)
    return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  return `$${n.toLocaleString()}`;
}

function slugFromId(id: string): string {
  // Curated IDs look like "curated-mit-the-engine". Strip the source prefix.
  return id.replace(/^(curated|sbir|grant|corp-grant|openvc)-/, "");
}

async function findBySlug(slug: string): Promise<Resource | null> {
  const data = await loadResources();
  // Only curated entries get deep pages. Match by stripped slug.
  return (
    data.find(
      (r) => r.source === "curated" && slugFromId(r.id) === slug,
    ) ?? null
  );
}

export async function generateStaticParams() {
  const data = await loadResources();
  return data
    .filter((r) => r.source === "curated")
    .map((r) => ({ slug: slugFromId(r.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = await findBySlug(slug);
  if (!r) return { title: "Funder not found" };
  const kindLabel = KIND_LABELS[r.kind] ?? "Funder";
  return pageMetadata({
    title: `${r.name} : ${kindLabel} on Hardtech Capital`,
    description:
      r.notes?.slice(0, 160) ?? `${r.name}, a ${kindLabel.toLowerCase()} backing hardtech.`,
    path: `/resources/hardtech-capital/${slug}`,
    ogTag: r.name,
  });
}

export default async function FunderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = await findBySlug(slug);
  if (!r) notFound();

  const all = await loadResources();
  const enrichmentMap = await loadEnrichment();
  const enrichment = enrichmentMap[r.id];
  const related = all
    .filter(
      (x) =>
        x.id !== r.id &&
        x.source === "curated" &&
        x.kind === r.kind &&
        (x.verticals ?? []).some((v) => (r.verticals ?? []).includes(v)),
    )
    .slice(0, 6);

  const apply = r.apply_url ?? r.url;

  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <article className="mx-auto w-full max-w-[1100px] px-6 pt-20 pb-24 sm:pt-24">
          <Link
            href="/resources/hardtech-capital"
            className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase underline-offset-4 hover:underline"
          >
            ← Hardtech Capital
          </Link>

          <header className="mt-6 flex flex-col gap-4 border-b border-bloom-grey pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
                {KIND_LABELS[r.kind]}
              </span>
              {r.last_verified && (
                <span className="rounded-full bg-bloom-mint px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-navy uppercase">
                  ✓ Verified {r.last_verified}
                </span>
              )}
              {r.renamed_from && (
                <span className="rounded-full bg-bloom-orange/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
                  Renamed from {r.renamed_from}
                </span>
              )}
              {r.dormant && (
                <span className="rounded-full bg-bloom-grey px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
                  Dormant
                </span>
              )}
              {r.needs_verification && (
                <span className="rounded-full bg-bloom-orange/15 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
                  Needs manual verification
                </span>
              )}
            </div>
            <h1 className="text-[40px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[56px]">
              {r.name}
            </h1>
            {r.notes && (
              <p className="max-w-[760px] text-[17px] leading-[1.55] text-bloom-muted sm:text-[19px]">
                {withGlossary(r.notes)}
              </p>
            )}
            <div className="mt-2 flex flex-wrap gap-3">
              {apply && (
                <a
                  href={apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-bloom-navy px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
                >
                  Visit site →
                </a>
              )}
              {r.apply_url && r.url && r.url !== r.apply_url && (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-bloom-navy/20 px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
                >
                  About this fund →
                </a>
              )}
              <ShortlistButton id={r.id} variant="full" />
            </div>
          </header>

          {r.correction_note && (
            <div className="mt-8 rounded-2xl border border-bloom-orange/20 bg-bloom-orange/5 p-5">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                Editor’s note
              </p>
              <p className="mt-2 text-[14px] leading-[1.55] text-bloom-navy/85">
                {withGlossary(r.correction_note)}
              </p>
            </div>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="order-2 lg:order-1">
              {r.deadline && (
                <Block title="Current deadline" tone="orange">
                  <p className="text-[15px] leading-[1.6] text-bloom-navy">
                    {withGlossary(r.deadline)}
                  </p>
                  <div className="mt-4">
                    <CalendarButton
                      name={r.name}
                      deadline={r.deadline}
                      url={r.apply_url ?? r.url}
                    />
                  </div>
                </Block>
              )}

              {r.notes && (
                <Block title="What they back">
                  <p className="text-[15px] leading-[1.65] text-bloom-navy/85">
                    {r.notes}
                  </p>
                </Block>
              )}

              {r.thesis && (
                <Block title="Thesis">
                  <p className="text-[15px] leading-[1.65] text-bloom-navy/85 italic">
                    {withGlossary(r.thesis)}
                  </p>
                </Block>
              )}

              {r.notes && (
                <Block title="About the firm">
                  <p className="text-[15px] leading-[1.65] text-bloom-navy/85">
                    {withGlossary(r.notes)}
                  </p>
                </Block>
              )}

              {r.url_was_corrected && r.original_url && (
                <div className="-mt-4 mb-8 rounded-xl border border-bloom-orange/20 bg-bloom-orange/5 p-4">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                    URL CORRECTED
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.55] text-bloom-navy/80">
                    The originally listed URL ({r.original_url}) was stale or
                    misdirected. We verified the canonical site as{" "}
                    <a
                      href={apply}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bloom-navy underline-offset-2 hover:underline"
                    >
                      {r.url}
                    </a>
                    {r.deep_scraped_at && (
                      <> on {r.deep_scraped_at}</>
                    )}
                    .
                  </p>
                </div>
              )}

              {r.recent_activity && (
                <Block title="What they've been doing">
                  <p className="text-[15px] leading-[1.65] text-bloom-navy/85">
                    {withGlossary(r.recent_activity)}
                  </p>
                </Block>
              )}

              {(r.past_awardees?.length ?? 0) > 0 && (
                <Block title="Recent awardees">
                  <p className="mb-4 text-[13px] text-bloom-muted">
                    A sample of companies this program has funded, and what
                    each one is actually building.
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {r.past_awardees!.map((a, i) => {
                      const Tag = a.url ? "a" : "div";
                      const tagProps = a.url
                        ? {
                            href: a.url,
                            target: "_blank" as const,
                            rel: "noopener noreferrer",
                          }
                        : {};
                      return (
                        <li key={i}>
                          <Tag
                            {...tagProps}
                            className="group block rounded-2xl border border-bloom-grey bg-white p-4 transition-colors hover:border-bloom-navy/30"
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <span className="text-[14px] font-semibold text-bloom-navy">
                                {a.name}
                              </span>
                              {a.amount && (
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
                                  {a.amount}
                                  {a.year ? ` · ${a.year}` : ""}
                                </span>
                              )}
                            </div>
                            {a.description && (
                              <p className="mt-2 text-[12px] leading-[1.55] text-bloom-muted">
                                {a.description}
                              </p>
                            )}
                          </Tag>
                        </li>
                      );
                    })}
                  </ul>
                </Block>
              )}

              {(r.portfolio_sample?.length ?? 0) > 0 && (
                <Block title="Portfolio sample">
                  <p className="mb-3 text-[13px] text-bloom-muted">
                    A selection of companies they back. Not exhaustive.
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {r.portfolio_sample!.map((co) => (
                      <li
                        key={co}
                        className="rounded-full bg-bloom-mint px-3 py-1 text-[13px] text-bloom-navy"
                      >
                        {co}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {(r.team_sample?.length ?? 0) > 0 ? (
                <Block title="Team">
                  <p className="mb-4 text-[13px] text-bloom-muted">
                    From the firm’s own site
                    {r.deep_scraped_at ? `, as of ${r.deep_scraped_at}` : ""}.
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {r.team_sample!.map((p, i) => (
                      <li
                        key={i}
                        className="rounded-xl border border-bloom-grey bg-white px-4 py-3"
                      >
                        <div className="text-[14px] font-medium text-bloom-navy">
                          {p.name}
                        </div>
                        {p.title && (
                          <div className="mt-0.5 text-[12px] text-bloom-muted">
                            {p.title}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  {enrichment?.linkedin_url && (
                    <a
                      href={enrichment.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase underline-offset-4 hover:underline"
                    >
                      Firm LinkedIn →
                    </a>
                  )}
                </Block>
              ) : (
                <Block title="Team">
                  <p className="text-[14px] leading-[1.6] text-bloom-muted">
                    No team list yet for this firm.{" "}
                    {r.url && (
                      <>
                        Their{" "}
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bloom-navy underline-offset-2 hover:underline"
                        >
                          site
                        </a>{" "}
                        usually lists partners. Or{" "}
                      </>
                    )}
                    <a
                      href={`/resources/hardtech-capital/correct/${r.id.replace(/^curated-/, "")}`}
                      className="text-bloom-navy underline-offset-2 hover:underline"
                    >
                      add a contact
                    </a>
                    .
                  </p>
                  {enrichment?.linkedin_url && (
                    <a
                      href={enrichment.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase underline-offset-4 hover:underline"
                    >
                      Firm LinkedIn →
                    </a>
                  )}
                </Block>
              )}

              {!(r.portfolio_sample?.length ?? 0) && (
                <Block title="Portfolio">
                  <p className="text-[14px] leading-[1.6] text-bloom-muted">
                    No portfolio list for this firm yet.{" "}
                    <a
                      href={`/resources/hardtech-capital/correct/${r.id.replace(/^curated-/, "")}`}
                      className="text-bloom-navy underline-offset-2 hover:underline"
                    >
                      Add one
                    </a>
                    .
                  </p>
                </Block>
              )}

              {related.length > 0 && (
                <Block title="Similar funders">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {related.map((rel) => (
                      <li key={rel.id}>
                        <Link
                          href={`/resources/hardtech-capital/${slugFromId(rel.id)}`}
                          className="flex items-center justify-between gap-3 rounded-xl border border-bloom-grey bg-white px-4 py-3 transition-colors hover:border-bloom-navy/40"
                        >
                          <span className="text-[14px] font-medium text-bloom-navy">
                            {rel.name}
                          </span>
                          <span className="font-mono text-[10px] tracking-[0.14em] text-bloom-muted uppercase">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
            </div>

            <aside className="order-1 lg:order-2">
              <div className="sticky top-6 rounded-2xl border border-bloom-grey bg-white p-6">
                <h2 className="font-mono text-[10px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
                  Key facts
                </h2>
                <dl className="mt-4 flex flex-col gap-4 text-[13px]">
                  <Fact label="Type" value={KIND_LABELS[r.kind]} />
                  {r.hq && <Fact label="HQ" value={r.hq} />}
                  {r.geography && (
                    <Fact
                      label="Invests in"
                      value={
                        GEOGRAPHY_LABELS[r.geography] ?? r.geography
                      }
                    />
                  )}
                  {(r.bloom_focus?.length ?? 0) > 0 && (
                    <div>
                      <dt className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
                        Bloom focus
                      </dt>
                      <dd className="mt-1 flex flex-wrap gap-1.5">
                        {r.bloom_focus!.map((v) => (
                          <span
                            key={v}
                            className="rounded-full bg-bloom-mint px-2 py-0.5 text-[11px] font-medium text-bloom-navy"
                          >
                            {BLOOM_FOCUS_LABELS[v] ?? v}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                  {(r.verticals?.length ?? 0) > 0 && (
                    <Fact
                      label="Verticals"
                      value={(r.verticals ?? [])
                        .map((v) => VERTICAL_LABELS[v] ?? v)
                        .join(", ")}
                    />
                  )}
                  {(r.stages?.length ?? 0) > 0 && (
                    <Fact
                      label="Stages"
                      value={(r.stages ?? [])
                        .map((s) => STAGE_LABELS[s] ?? s)
                        .join(", ")}
                    />
                  )}
                  {r.award && <Fact label="Check / award" value={r.award} />}
                  {enrichment?.employees && (
                    <Fact
                      label="Team size"
                      value={`${enrichment.employees} ${enrichment.employees === 1 ? "person" : "people"}`}
                    />
                  )}
                  {enrichment?.founded_year && (
                    <Fact label="Founded" value={String(enrichment.founded_year)} />
                  )}
                  {enrichment?.total_funding && (
                    <Fact
                      label="Fund size raised"
                      value={formatFunding(enrichment.total_funding) ?? "n/a"}
                    />
                  )}
                  {enrichment?.linkedin_url && (
                    <div>
                      <dt className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
                        LinkedIn
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={enrichment.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bloom-navy underline-offset-2 hover:underline"
                        >
                          Firm page →
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </aside>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-bloom-grey pt-8">
            <p className="text-[13px] text-bloom-muted">
              Something off about this entry? Let us know and we’ll fix it.
            </p>
            <Link
              href={`/resources/hardtech-capital/correct/${slug}`}
              className="font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-orange uppercase underline-offset-4 hover:underline"
            >
              Flag this entry →
            </Link>
          </div>
        </article>
      </main>
      <ShortlistCounter />
      <UnifiedFooter />
    </>
  );
}

function Block({
  title,
  tone,
  children,
}: {
  title: string;
  tone?: "orange";
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 last:mb-0">
      <h2
        className={`font-mono text-[10px] font-semibold tracking-[0.18em] uppercase ${tone === "orange" ? "text-bloom-orange" : "text-bloom-muted"}`}
      >
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-muted uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-bloom-navy">{value}</dd>
    </div>
  );
}
