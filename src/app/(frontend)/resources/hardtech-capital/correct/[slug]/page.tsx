import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "node:fs";
import path from "node:path";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";
import { CorrectionForm } from "./CorrectionForm";
import type { Resource } from "../../types";

async function loadResources(): Promise<Resource[]> {
  const file = path.join(
    process.cwd(),
    "public",
    "data",
    "hardtech-capital.json",
  );
  return JSON.parse(await fs.readFile(file, "utf-8")) as Resource[];
}

function slugFromId(id: string): string {
  return id.replace(/^(curated|sbir|grant|corp-grant|openvc)-/, "");
}

async function findBySlug(slug: string): Promise<Resource | null> {
  const data = await loadResources();
  return (
    data.find(
      (r) => r.source === "curated" && slugFromId(r.id) === slug,
    ) ?? null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = await findBySlug(slug);
  return pageMetadata({
    title: `Correct ${r?.name ?? "funder"} : Hardtech Capital`,
    description: "Flag stale info or send us a correction.",
    path: `/resources/hardtech-capital/correct/${slug}`,
    ogTag: "Correct",
  });
}

export default async function CorrectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = await findBySlug(slug);
  if (!r) notFound();
  const backHref = `/resources/hardtech-capital/${slug}`;
  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <div className="mx-auto w-full max-w-[760px] px-6 pt-20 pb-24 sm:pt-24">
          <Link
            href={backHref}
            className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase underline-offset-4 hover:underline"
          >
            ← {r.name}
          </Link>
          <header className="mt-6 border-b border-bloom-grey pb-8">
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
              FLAG STALE INFO
            </span>
            <h1 className="mt-3 text-[32px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[40px]">
              Something off about {r.name}?
            </h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.55] text-bloom-muted">
              Tell us what’s wrong. We update the directory weekly. The more
              specific you can be, the faster we can fix it.
            </p>
          </header>

          <CorrectionForm targetSlug={slug} targetName={r.name} />
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}
