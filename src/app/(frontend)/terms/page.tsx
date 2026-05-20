import type { Metadata } from "next";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The Terms of Service that govern your use of Bloom's platform, websites, and related Services.",
  path: "/terms",
  ogTag: "Terms",
});

export default function TermsPage() {
  return (
    <>
      <HelpHeader />

      <main id="main-content" className="bg-bloom-cream">
        <section className="pt-32 pb-12">
          <div className="mx-auto max-w-[960px] px-4">
            <h1 className="text-[40px] font-bold leading-[44px] tracking-[-0.01em] text-bloom-navy md:text-[48px] md:leading-[52px]">
              Terms of Service
            </h1>
            <p className="mt-6 text-[14px] uppercase tracking-wider text-bloom-muted">
              Last updated:
              <br />
              <span className="text-bloom-navy normal-case tracking-normal">
                Coming soon
              </span>
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[720px] space-y-6 px-4 pb-24 text-[16px] leading-[26px] text-bloom-navy">
          <p>
            Our Terms of Service are being finalized in coordination with our
            legal team. In the meantime, your use of Bloom&apos;s platform,
            websites, and related Services is governed by the agreements you
            have signed with Bloom Inc., our{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Privacy Policy
            </a>
            , and applicable law.
          </p>
          <p>
            For questions about how Bloom&apos;s Services may be used, please
            contact us at{" "}
            <a
              href="mailto:hello@bloomnetwork.ai"
              className="underline underline-offset-4 hover:opacity-80"
            >
              hello@bloomnetwork.ai
            </a>
            . We&apos;ll publish the full Terms of Service on this page as soon
            as they&apos;re ready.
          </p>
        </div>
      </main>

      <UnifiedFooter />
    </>
  );
}
