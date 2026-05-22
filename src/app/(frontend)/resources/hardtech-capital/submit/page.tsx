import type { Metadata } from "next";
import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";
import { AddFunderForm } from "./AddFunderForm";

export const metadata: Metadata = pageMetadata({
  title: "Suggest a funder : Hardtech Capital",
  description: "Add a missing funder to Bloom's Hardtech Capital directory.",
  path: "/resources/hardtech-capital/submit",
  ogTag: "Suggest a funder",
});

export default function SubmitPage() {
  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <div className="mx-auto w-full max-w-[760px] px-6 pt-20 pb-24 sm:pt-24">
          <Link
            href="/resources/hardtech-capital"
            className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase underline-offset-4 hover:underline"
          >
            ← Hardtech Capital
          </Link>
          <header className="mt-6 border-b border-bloom-grey pb-8">
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
              SUGGEST A FUNDER
            </span>
            <h1 className="mt-3 text-[36px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[48px]">
              Help us grow the list.
            </h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.55] text-bloom-muted">
              Know a fund, grant, lab, or program that belongs here? Tell us
              about it. We review every submission and add the ones that fit.
            </p>
          </header>

          <AddFunderForm />
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}
