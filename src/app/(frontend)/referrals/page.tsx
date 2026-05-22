import type { Metadata } from "next";
import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
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

const TIERS = [
  {
    name: "Seed tier",
    payout: "$1,000",
    membership: "$500 / month membership",
  },
  {
    name: "Growth tier",
    payout: "$4,000",
    membership: "$2,000 / month membership",
  },
];

const FITS = [
  "A current Bloom member who knows another brand that could benefit",
  "An accelerator or incubator working with hardware startups",
  "An industry advisor, consultant, or community lead",
  "Anyone with a warm relationship to a brand that fits",
];

export default function ReferralsPage() {
  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        {/* Hero */}
        <section className="border-b border-bloom-grey bg-bloom-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="mx-auto w-full max-w-[920px] px-6 text-center">
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
              REFERRAL PROGRAM
            </span>
            <h1 className="mt-5 text-[40px] leading-[1.05] font-semibold tracking-tight text-bloom-navy sm:text-[56px] lg:text-[64px]">
              Know a hardware brand that should join Bloom?
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.55] text-bloom-muted sm:text-[19px]">
              Get paid for the intro. Simple process, real compensation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#apply"
                className="inline-block rounded-full bg-bloom-navy px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-cream uppercase transition-opacity hover:opacity-90"
              >
                Apply to refer
              </a>
              <a
                href="#how-it-works"
                className="inline-block rounded-full border border-bloom-navy/20 px-6 py-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-b border-bloom-grey bg-bloom-cream py-20 sm:py-24"
        >
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-12">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                HOW IT WORKS
              </span>
              <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[40px]">
                Four steps from intro to payout.
              </h2>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-bloom-grey bg-white p-6"
                >
                  <div className="font-mono text-[28px] leading-none font-semibold text-bloom-orange tabular-nums">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-[18px] leading-[1.25] font-semibold tracking-tight text-bloom-navy">
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
        <section className="border-b border-bloom-grey bg-bloom-mint-soft py-20 sm:py-24">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-12">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                WHAT YOU EARN
              </span>
              <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[40px]">
                Two tiers, paid in cash.
              </h2>
              <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-bloom-muted">
                Compensation equals two months of the new member’s membership
                fee, paid after their second month of active membership.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {TIERS.map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl border border-bloom-grey bg-white p-8"
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-muted uppercase">
                    {t.name}
                  </span>
                  <div className="mt-4 text-[56px] leading-none font-semibold tracking-tight text-bloom-navy sm:text-[64px]">
                    {t.payout}
                  </div>
                  <p className="mt-4 text-[14px] text-bloom-muted">
                    For brands on a {t.membership}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for */}
        <section className="border-b border-bloom-grey bg-bloom-cream py-20 sm:py-24">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                  WHO IT’S FOR
                </span>
                <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-tight text-bloom-navy sm:text-[40px]">
                  People close to hardware brands.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.6] text-bloom-muted">
                  This program is for individuals and communities connected to
                  the hardware world. People who know brands building in
                  electric mobility, energy, robotics, drones, and beyond.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {FITS.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-2xl border border-bloom-grey bg-white px-5 py-4 text-[15px] leading-[1.55] text-bloom-navy"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-bloom-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Apply */}
        <section
          id="apply"
          className="bg-bloom-navy py-20 text-bloom-cream sm:py-24"
        >
          <div className="mx-auto w-full max-w-[760px] px-6">
            <div className="text-center">
              <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
                READY TO JOIN?
              </span>
              <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-tight sm:text-[40px]">
                Apply to become a Bloom referral partner.
              </h2>
              <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6] text-bloom-cream/70">
                Once approved, we will set you up and send you everything you
                need to start making referrals.
              </p>
            </div>
            <ReferralForm />
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
