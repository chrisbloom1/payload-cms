import type { Metadata } from "next";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/utilities/pageMetadata";
import { ReferralForm } from "./ReferralForm";

export const metadata: Metadata = pageMetadata({
  title: "Referrals : Bloom",
  description:
    "Know a hardware brand that should join Bloom? Get paid for the intro. Simple process, real compensation.",
  path: "/referrals",
  ogTag: "Referrals",
});

const STEPS = [
  {
    n: "01",
    title: "Tell us about them",
    body: "Share what you know about the brand. Why they fit, what they need, the context that helps us move fast.",
  },
  {
    n: "02",
    title: "Make the intro",
    body: "Join a short call to connect us directly. A warm intro builds trust and shortens the onboarding cycle.",
  },
  {
    n: "03",
    title: "Stay available",
    body: "Be reachable for follow-ups as the brand onboards. Your relationship keeps things moving.",
  },
  {
    n: "04",
    title: "Get compensated",
    body: "Once the brand completes their second month of active membership, you get paid.",
  },
];

const FITS = [
  "A current Bloom member who knows another brand that could benefit",
  "An accelerator or incubator working with hardware startups",
  "An industry advisor, consultant, or community lead",
  "Anyone with a warm relationship to a brand that fits",
];

const headingDisplay = cn(
  "font-extrabold text-bloom-navy",
  "text-[32px] leading-[36px]",
  "sm:text-[40px] sm:leading-[44px]",
  "lg:text-[48px] lg:leading-[52px]",
);

export default function ReferralsPage() {
  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        {/* Hero */}
        <RevealOnScroll
          as="section"
          className="relative w-full overflow-hidden bg-bloom-cream pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
        >
          <div className="mx-auto w-full max-w-[1280px] px-6">
            <h1
              className={cn(
                "font-extrabold text-bloom-navy",
                "text-[44px] leading-[48px]",
                "sm:text-[60px] sm:leading-[64px]",
                "lg:text-[80px] lg:leading-[84px]",
              )}
            >
              Referral Program
            </h1>
            <p className="mt-6 max-w-[680px] text-[18px] leading-[1.5] text-bloom-muted sm:text-[22px]">
              Know a hardware brand that should join Bloom? Get paid for the
              intro. Simple process, real compensation.
            </p>
          </div>
        </RevealOnScroll>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="w-full bg-bloom-cream pb-16 sm:pb-20 lg:pb-24"
        >
          <div className="mx-auto w-full max-w-[1280px] px-6">
            <h2 className={cn(headingDisplay, "text-center")}>How It Works</h2>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-xl bg-bloom-mint-soft p-7 transition-colors hover:bg-bloom-mint/60 sm:p-8"
                >
                  <div className="font-mono text-[22px] leading-none font-bold tracking-wide text-bloom-navy/25 tabular-nums">
                    {s.n}
                  </div>
                  <h3 className="mt-10 text-[18px] leading-[1.25] font-extrabold tracking-tight text-bloom-navy sm:text-[19px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bloom-muted">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What You Earn */}
        <RevealOnScroll
          as="section"
          className="w-full bg-bloom-mint py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1280px] px-6">
            <h2 className={cn(headingDisplay, "text-center")}>What You Earn</h2>
            <div className="mx-auto mt-12 grid max-w-[920px] gap-5 sm:grid-cols-2">
              {/* Seed Tier */}
              <div className="bg-bloom-cta relative overflow-hidden rounded-2xl p-10 text-center text-white shadow-bloom-card sm:p-12">
                <span className="font-mono text-[12px] font-bold tracking-[0.16em] uppercase opacity-90">
                  Seed Tier
                </span>
                <div className="mt-5 text-[72px] leading-none font-extrabold tracking-tight sm:text-[88px]">
                  $1,000
                </div>
                <p className="mt-5 text-[14px] leading-[1.5] opacity-85">
                  Members on a $500 / month plan
                </p>
              </div>
              {/* Growth Tier */}
              <div className="relative overflow-hidden rounded-2xl bg-bloom-navy p-10 text-center text-bloom-cream shadow-bloom-card sm:p-12">
                <span className="font-mono text-[12px] font-bold tracking-[0.16em] uppercase opacity-80">
                  Growth Tier
                </span>
                <div className="mt-5 text-[72px] leading-none font-extrabold tracking-tight sm:text-[88px]">
                  $4,000
                </div>
                <p className="mt-5 text-[14px] leading-[1.5] opacity-75">
                  Members on a $2,000 / month plan
                </p>
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-[680px] text-center text-[14px] leading-[1.6] text-bloom-muted">
              Compensation equals two months of the new member’s membership
              fee, paid after their second month of active membership.
            </p>
          </div>
        </RevealOnScroll>

        {/* Who is this for */}
        <RevealOnScroll
          as="section"
          className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[820px] px-6">
            <h2 className={headingDisplay}>Who is this for?</h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-bloom-muted sm:text-[18px]">
              This program is for individuals and communities connected to the
              hardware world. People who know brands building in electric
              mobility, energy, robotics, drones, and beyond.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-[16px] leading-[1.6] text-bloom-navy">
              {FITS.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="bg-bloom-cta mt-2.5 inline-block h-2 w-2 shrink-0 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Apply */}
        <section id="apply" className="w-full bg-bloom-cream pb-24">
          <div className="mx-auto w-full max-w-[680px] px-6">
            <h2 className={headingDisplay}>Ready to Join?</h2>
            <p className="mt-5 text-[17px] leading-[1.6] text-bloom-muted sm:text-[18px]">
              Apply to become a Bloom referral partner. Once approved, we will
              set you up and send you everything you need to start making
              referrals.
            </p>
            <ReferralForm />
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
