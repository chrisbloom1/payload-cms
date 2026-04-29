import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BloomMarkGradient } from "@/components/BloomLogo";
import { HeroImage } from "@/components/HeroImage";
import { FrameworkChevrons } from "@/components/FrameworkChevrons";
import { BenefitRow } from "@/components/BenefitRow";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/widgets/FaqAccordion";
import { BLOOM_FAQ } from "@/data/faq";
import { CriteriaCarousel } from "@/components/widgets/CriteriaCarousel";

// 8 qualifying criteria pulled from the Stepsslider Framer export so we can
// render them with the same arrow + faded-edge pattern as MembersTestimonials
// instead of the variant-driven Framer slider, which had no visible controls.
const QUALIFYING_CRITERIA = [
  {
    label: "Service 01",
    title: "Core Capabilities",
    description:
      "Review of services offered (e.g., warehousing, delivery, assembly) and alignment with Bloom categories.",
  },
  {
    label: "Service 02",
    title: "Facility & Systems",
    description:
      "Assessment of physical site readiness, cleanliness, and use of digital or manual tracking systems.",
  },
  {
    label: "Service 03",
    title: "Certifications & Compliance",
    description:
      "Review of licenses, insurance, safety protocols, and relevant certifications for regulatory alignment.",
  },
  {
    label: "Service 04",
    title: "Capacity & Lead Times",
    description:
      "Evaluation of available capacity, response times, and ability to meet SLAs.",
  },
  {
    label: "Service 05",
    title: "Customer Experience",
    description:
      "Review of responsiveness, communication practices, and service-level consistency.",
  },
  {
    label: "Service 06",
    title: "Technical Fit",
    description:
      "Evaluation of ability to follow work instructions, handle specialized products, and perform QC checks.",
  },
  {
    label: "Service 07",
    title: "Track Record",
    description:
      "Review of previous customer types, volume handled, and relevant industry experience.",
  },
  {
    label: "Service 08",
    title: "Onboarding & Collaboration",
    description:
      "Assessment of willingness to align with SOPs and participate in pilot programs.",
  },
];

// Five line-art delivery icons pulled from the live providers hero —
// (street sweeper, EV charging, cargo van, drone, scooter). Rendered with
// `currentColor` so the stroke inherits text-bloom-navy from the parent.
const HERO_ICONS = [
  { src: "/images/providers/icons/icon-1.svg", alt: "Industrial vehicle" },
  { src: "/images/providers/icons/icon-2.svg", alt: "EV charging" },
  { src: "/images/providers/icons/icon-3.svg", alt: "Cargo bike van" },
  { src: "/images/providers/icons/icon-4.svg", alt: "Drone" },
  { src: "/images/providers/icons/icon-5.svg", alt: "Electric scooter" },
] as const;

function HeroIconTiles() {
  // Each tile gets a staggered entrance via inline animation-delay so the
  // row reads left-to-right on first paint — same `bloom-hero-rise`
  // keyframe used on the home page so the timing feels native.
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
      {HERO_ICONS.map((icon, i) => (
        <div
          key={icon.src}
          className="animate-bloom-hero-rise group flex aspect-square items-center justify-center rounded-lg bg-bloom-mint p-6 text-bloom-navy transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-bloom-card sm:p-7 lg:p-8"
          style={{ animationDelay: `${120 + i * 90}ms` }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={150}
            height={120}
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section components
// ---------------------------------------------------------------------------

function ProvidersHero() {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full overflow-hidden bg-bloom-cream pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-6 text-center lg:gap-14">
        <div className="flex max-w-[920px] flex-col items-center gap-6">
          <h1
            className={cn(
              "font-extrabold text-bloom-navy",
              "text-[36px] leading-[40px]",
              "sm:text-[44px] sm:leading-[48px]",
              "lg:text-[56px] lg:leading-[60px]",
            )}
          >
            Work with the most promising hardware brands, vetted by Bloom.
          </h1>
          <p className="max-w-[760px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Unlock a pipeline of qualified projects from fast&#8209;growing
            hard&#8209;tech companies, backed by Bloom&apos;s rigorous
            screening and centralized payments.
          </p>
        </div>

        {/* 5 mint-tinted square tiles, each with one of the line-art
            delivery icons pulled from the live site. Staggered entrance
            via bloom-hero-rise so the row reads left-to-right on load. */}
        <HeroIconTiles />
      </div>
    </RevealOnScroll>
  );
}

function ProvidersBenefits() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 sm:px-6 lg:gap-28">
        {/* Targeted inbound — show the in-platform brand-profile screen so
            providers see a real qualified RFQ (services needed, funding stage,
            volume projections) instead of a marketing illustration. */}
        <BenefitRow
          eyebrow="QUALIFIED LEADS"
          heading="Targeted inbound from quality brands"
          body="Bloom matches you with hardware brands that fit your capacity and specialties. No cold outreach required — qualified RFQs come straight to you with funding, volume, and product context attached."
          visual={
            <div className="w-full max-w-[640px]">
              <HeroImage
                src="/images/providers/targeted-inbound.avif"
                alt="Bloom platform brand profile"
                width={2048}
                height={1148}
              />
            </div>
          }
        />

        {/* Faster payments — show the in-platform invoices dashboard
            (PAID / LATE statuses, totals, due dates). Cropped to drop the
            purple gradient frame from the marketing PNG, and shown without
            an outer card chrome so the screen reads as just the screen. */}
        <BenefitRow
          reverse
          eyebrow="BLOOMPAY"
          heading="Ensure faster payments"
          body="BloomPay centralizes invoicing and accelerates payouts so you spend less time chasing payments. Track paid, due, and late invoices — and offer terms — all from one platform."
          visual={
            <div className="w-full max-w-[640px]">
              <HeroImage
                src="/images/providers/faster-payments.avif"
                alt="Bloom platform invoices dashboard"
                width={1266}
                height={864}
              />
            </div>
          }
        />

        <BenefitRow
          eyebrow="DE-RISKED PROJECTS"
          heading="New hardware, lower risk"
          body="Every brand on the platform is pre-vetted for funding, technical readiness, and clear engineering specs — you onboard knowing the project is real."
          visual={
            <div className="w-full max-w-[640px]">
              <HeroImage
                src="/images/providers/lower-risk.avif"
                alt="Bloom de-risked project workflow"
                width={1767}
                height={1142}
              />
            </div>
          }
        />
      </div>
    </RevealOnScroll>
  );
}

function ProvidersCriteria() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <header className="mx-auto max-w-[820px] text-center">
          <h1
            className={cn(
              "font-bold text-bloom-navy",
              "text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[52px]",
            )}
          >
            Bloom Service Provider Qualifying Criteria
          </h1>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Each partner is evaluated across 8 core criteria before joining the
            Bloom network.
          </p>
        </header>

        <CriteriaCarousel className="mt-12 lg:mt-16" items={QUALIFYING_CRITERIA} />

      </div>
    </RevealOnScroll>
  );
}

interface FrameworkStep {
  label: string;
  description: string;
}

const FRAMEWORK_STEPS: readonly FrameworkStep[] = [
  { label: "APPLY", description: "Share capabilities, certifications, references, capacity" },
  { label: "ONBOARD", description: "Create profile, set rates, sync BloomPay" },
  { label: "MATCH", description: "Get qualified RFQs from matched brands" },
  { label: "LAUNCH", description: "Run jobs with milestones, auto-invoicing, Bloom support" },
] as const;

function ProvidersFramework() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <header className="mx-auto max-w-[820px] text-center">
          <h1
            className={cn(
              "font-bold text-bloom-navy",
              "text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[52px]",
            )}
          >
            Win better jobs. Get paid faster.
          </h1>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Bloom matches proven providers with vetted hardware brands and
            handles the back-office&mdash;RFQs, milestones, and
            payments&mdash;so you can focus on execution.
          </p>
        </header>

        <FrameworkChevrons className="mt-12 lg:mt-16" steps={FRAMEWORK_STEPS} />
      </div>
    </RevealOnScroll>
  );
}

function ProvidersCTA() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-7 px-6 text-center">
        <div
          aria-hidden="true"
          className="bg-bloom-cta flex h-[44px] w-[44px] items-center justify-center rounded-[8px] shadow-[0_8px_24px_rgba(254,5,62,0.25)]"
        >
          <BloomMarkGradient
            className="h-6 w-auto"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <h2
          className={cn(
            "max-w-[820px] font-bold text-bloom-navy",
            "text-[28px] leading-[34px] sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[50px]",
          )}
        >
          Apply to join the elite providers on Bloom&apos;s Network
        </h2>
        <Link
          href="/contact-us"
          className={cn(
            "inline-flex items-center gap-2 rounded-full",
            "bg-bloom-navy text-white",
            "px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em]",
            "transition-transform duration-200 hover:scale-[1.02]",
          )}
        >
          APPLY NOW
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </RevealOnScroll>
  );
}

export default function ProvidersPage() {
  return (
    <>
      <FloatingNav />
      <main className="flex flex-col bg-bloom-cream">
        <ProvidersHero />
        <ProvidersBenefits />
        <ProvidersCriteria />
        <ProvidersFramework />
        <ProvidersCTA />
        <section className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
              <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-bloom-navy md:text-[48px]">
                FAQ
              </h1>
              <div className="w-full">
                <FaqAccordion items={BLOOM_FAQ} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
