import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BloomPayLockup } from "@/components/BloomLogo";
import { BenefitRow } from "@/components/BenefitRow";
import { HeroImage } from "@/components/HeroImage";
import { cn } from "@/lib/utils";
// Proofly = Framer-exported Bloom components
import Brandsintroanimation from "@/components/proofly/Brandsintroanimation.jsx";
import Animationmap from "@/components/proofly/Animationmap.jsx";
import Pricingmatrix from "@/components/proofly/Pricingmatrix.jsx";
import Mockupterms from "@/components/proofly/Mockupterms.jsx";
import { MembersTestimonials } from "@/components/widgets/MembersTestimonials";
import { FaqAccordion } from "@/components/widgets/FaqAccordion";
import { BLOOM_FAQ } from "@/data/faq";
import { FrameworkChevrons } from "@/components/FrameworkChevrons";
import { BloomMarkGradient } from "@/components/BloomLogo";

// ---------------------------------------------------------------------------
// Section components
// ---------------------------------------------------------------------------

function VerticalsTagRow() {
  return (
    <div
      aria-label="Hardware verticals served"
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-medium text-bloom-orange sm:text-[15px]"
    >
      <span>Mobility</span>
      <span aria-hidden="true" className="text-bloom-orange/40">|</span>
      <span>Drones</span>
      <span aria-hidden="true" className="text-bloom-orange/40">|</span>
      <span>Cleantech</span>
      <span aria-hidden="true" className="text-bloom-orange/40">|</span>
      <span>Robotics</span>
    </div>
  );
}

// 2x2 collage of hardware brand product imagery, used as the visual for the
// "Built for the brands building the future" row. Pulls existing story heroes
// so we don't ship more assets just for this section.
function VerticalsCollage() {
  const tiles = [
    { label: "Mobility", src: "/images/stories/dust-moto-hero.jpg" },
    { label: "Drones", src: "/images/stories/birdstop-hero.jpg" },
    { label: "Cleantech", src: "/images/stories/grounded-hero.jpg" },
    { label: "Robotics", src: "/images/stories/wheel-me-hero.jpg" },
  ] as const;
  return (
    <div className="grid w-full max-w-[480px] grid-cols-2 gap-3">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="group relative aspect-square overflow-hidden rounded-2xl bg-bloom-navy/5"
        >
          <HeroImage
            src={tile.src}
            alt={tile.label}
            width={600}
            height={600}
            fixedHeightClass="h-full"
            className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bloom-navy/70 via-bloom-navy/15 to-transparent" />
          <span className="absolute bottom-3 left-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white sm:text-[13px]">
            {tile.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function BrandsHero() {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full overflow-hidden bg-bloom-cream pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div className="flex flex-col gap-6">
          <h1
            className={cn(
              "max-w-[600px] font-extrabold text-bloom-navy",
              "text-[36px] leading-[40px]",
              "sm:text-[44px] sm:leading-[48px]",
              "lg:text-[56px] lg:leading-[60px]",
            )}
          >
            Supply chain complexity is killing your momentum
          </h1>
          <p className="max-w-[560px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Hardware innovation should be about breakthroughs, not spreadsheets,
            shipping labels, and supplier drama. Bloom unblocks your growth by
            giving you instant, vetted access to the domestic manufacturing,
            assembly, logistics, and service partners that power today&apos;s
            most ambitious hardware brands.
          </p>
        </div>

        {/* Brandsintroanimation = Framer-exported widget. Internal "Turn on →"
            transitions the 6 service cards into a connected hexagonal network
            with the orange Bloom mark in the center — interaction is owned by
            the widget itself, no external CTA needed. */}
        <div className="w-full">
          <Brandsintroanimation />
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsBuiltForCoast() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 sm:px-6 lg:gap-28">
        <BenefitRow
          eyebrow={<VerticalsTagRow />}
          heading="Built for the brands building the future"
          body="Bloom is purpose-built to support the unique operational challenges of today's most advanced hardware categories, where complexity, regulation, and logistics often stall growth."
          visual={<VerticalsCollage />}
        />
        <BenefitRow
          reverse
          heading="Coast to coast"
          body="Our vetted network covers the entire US, linking you to local specialists and Fortune 100 powerhouses alike. Get fast, competitive access to partners ready to build, deliver, and service for you."
          visual={<Animationmap />}
        />
      </div>
    </RevealOnScroll>
  );
}

interface FrameworkStep {
  label: string;
  description: string;
}

const FRAMEWORK_STEPS: readonly FrameworkStep[] = [
  { label: "JOIN", description: "Sign up, share product specs" },
  { label: "MATCH", description: "Bloom algorithm + ops team select partners" },
  { label: "LAUNCH", description: "Kickoff, dashboards, milestone tracker" },
  { label: "SCALE", description: "QBRs, volume discounts, new markets" },
] as const;

function BrandsFramework() {
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
            Proven framework built for scaling hardware brands
          </h1>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Bloom orchestrates the heavy‑lift of hardware operations so you
            can focus on product and customers. Here&apos;s exactly what
            happens after you request access.
          </p>
        </header>

        <FrameworkChevrons className="mt-12 lg:mt-16" steps={FRAMEWORK_STEPS} />
      </div>
    </RevealOnScroll>
  );
}

function BrandsPricing() {
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
            Choose your plan
          </h1>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            Bloom gives members access to a vetted network of hundreds of
            manufacturers, logistics providers, and service partners across
            North America. Through aggregated volume and strategic
            partnerships, we developed{" "}
            <strong className="font-bold">Bloom Preferred Pricing</strong>{" "}
            which includes preferred rates with carriers, manufacturers, and
            service providers, passing those savings directly to our members.
            In addition to leveraging the Bloom platform, our teams are
            available to assist with requests, bookings, matchmaking,
            billing, and more. With{" "}
            <strong className="font-bold">BloomPay</strong>, members can pay
            all their vendors in one place and access extended payment terms,
            right from the platform.
          </p>
        </header>

        {/* Pricing comparison matrix from Proofly — full $500 / $2,000 / $6,000
            tiers + comparison rows. The matrix already includes the
            "*Extended terms subject to credit approval." footnote, so we don't
            duplicate it below. */}
        <div className="mt-12 flex w-full justify-center lg:mt-16">
          <Pricingmatrix />
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsBloomPay() {
  return (
    <RevealOnScroll
      as="section"
      delay={120}
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <BloomPayLockup className="h-[28px] w-auto self-start" />
            <h2 className="max-w-[480px] text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
              Simplify and expand payment options
            </h2>
            <p className="max-w-[480px] text-[18px] leading-[26px] text-bloom-navy">
              Leverage BloomPay to pay all your vendors in one place and access
              on platform extended payment terms up to 120 days.
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <Mockupterms />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsCTA() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-7 px-6 text-center">
        {/* Small orange Bloom mark anchored above the heading per live design */}
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
          Ready to cut costs, launch faster, and de‑risk your operations?
        </h2>
        <Link
          href="https://welcome.togetherwebloom.us/"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex items-center gap-2 rounded-full",
            "bg-bloom-navy text-white",
            "px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em]",
            "transition-transform duration-200 hover:scale-[1.02]",
          )}
        >
          UNLOCK YOUR POTENTIAL
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </RevealOnScroll>
  );
}

export default function BrandsPage() {
  return (
    <>
      <FloatingNav />
      <main className="flex flex-col bg-bloom-cream">
        <BrandsHero />
        <BrandsBuiltForCoast />
        <BrandsFramework />
        <BrandsPricing />
        <BrandsBloomPay />
        <MembersTestimonials />
        <BrandsCTA />
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
