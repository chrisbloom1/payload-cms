import type { Metadata } from "next";
import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BloomPayLockup } from "@/components/BloomLogo";
import { BenefitRow } from "@/components/BenefitRow";
import { HeroImage } from "@/components/HeroImage";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/utilities/pageMetadata";
// Proofly = Framer-exported Bloom components. Animationmap is lazy
// (570KB chunk, below-fold). Pricingmatrix and Mockupterms have been
// fully replaced by hand-rolled HTML/CSS versions below, dropping
// ~3500 lines of Framer code from the /brands JS payload.
import Brandsintroanimation from "@/components/proofly/Brandsintroanimation.jsx";
import { LazyAnimationmap } from "@/components/brands/LazyBrandsSections";
import { BrandsPricingMatrix } from "@/components/brands/BrandsPricingMatrix";
import { BloomPayWidget } from "@/components/widgets/BloomPayWidget";
import { MembersTestimonials } from "@/components/widgets/MembersTestimonials";
import { FaqAccordion } from "@/components/widgets/FaqAccordion";
import { FrameworkChevrons } from "@/components/FrameworkChevrons";
import { BloomMarkGradient } from "@/components/BloomLogo";
import RichText from "@/components/RichText";
import { loadBrandsPage, type BrandsContent } from "@/lib/brands-page-resolver";
import {
  loadMarketingFaqs,
  loadTestimonials,
} from "@/lib/marketing-content-resolver";

export const metadata: Metadata = pageMetadata({
  title: "For Brands",
  description:
    "The supply chain platform purpose-built for hardware brands. Get matched with vetted manufacturing, warehousing, assembly, and logistics partners across North America.",
  path: "/brands",
  ogTag: "For Brands",
});

// ---------------------------------------------------------------------------
// Section components
// ---------------------------------------------------------------------------

function VerticalsTagRow({ verticals }: { verticals: BrandsContent["verticals"] }) {
  return (
    <div
      aria-label="Hardware verticals served"
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-medium text-bloom-orange sm:text-[15px]"
    >
      {verticals.map((v, i) => (
        <span key={`${v.label}-${i}`} className="contents">
          <span>{v.label}</span>
          {i < verticals.length - 1 ? (
            <span aria-hidden="true" className="text-bloom-orange/40">|</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

// 2x2 collage of hardware brand product imagery, used as the visual for the
// "Built for the brands building the future" row. Tiles come from the
// BrandsPage global so the team can swap verticals without a deploy.
function VerticalsCollage({ verticals }: { verticals: BrandsContent["verticals"] }) {
  return (
    <div className="grid w-full max-w-[480px] grid-cols-2 gap-3">
      {verticals.slice(0, 4).map((v) => (
        <div
          key={v.label}
          className="relative aspect-square overflow-hidden rounded-md bg-bloom-navy/5"
        >
          <HeroImage
            src={v.imageUrl}
            alt={v.label}
            width={600}
            height={600}
            fixedHeightClass="h-full"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bloom-navy/70 via-bloom-navy/15 to-transparent" />
          <span className="absolute bottom-3 left-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white sm:text-[13px]">
            {v.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function BrandsHero({ headline, body }: { headline: string; body: string }) {
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
            {headline}
          </h1>
          <p className="max-w-[560px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            {body}
          </p>
        </div>

        {/* Brandsintroanimation = Framer-exported widget. Internal "Turn on →"
            transitions the 6 service cards into a connected hexagonal network
            with the orange Bloom mark in the center.

            Above-the-fold, so content-visibility isn't appropriate — use a
            real min-height to hard-reserve space. The widget hydrates to
            ~488px on mobile and ~600px on desktop, so we match. Without
            this lock the hero section was the worst CLS offender on /brands
            (0.144) per the launch Lighthouse audit. */}
        <div className="flex w-full justify-center min-h-[500px] lg:min-h-[620px]">
          <Brandsintroanimation />
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsBuiltForCoast({
  builtFor,
  coastToCoast,
  verticals,
}: {
  builtFor: BrandsContent["builtFor"];
  coastToCoast: BrandsContent["coastToCoast"];
  verticals: BrandsContent["verticals"];
}) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 sm:px-6 lg:gap-28">
        <BenefitRow
          eyebrow={<VerticalsTagRow verticals={verticals} />}
          heading={builtFor.heading}
          body={builtFor.body}
          visual={<VerticalsCollage verticals={verticals} />}
        />
        <BenefitRow
          reverse
          heading={coastToCoast.heading}
          body={coastToCoast.body}
          visual={
            <div className="cv-auto-section cv-h-560 flex w-full justify-center">
              <LazyAnimationmap />
            </div>
          }
        />
      </div>
    </RevealOnScroll>
  );
}

function BrandsFramework({ framework }: { framework: BrandsContent["framework"] }) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <header className="mx-auto max-w-[820px] text-center">
          <h2
            className={cn(
              "font-bold text-bloom-navy",
              "text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[52px]",
            )}
          >
            {framework.heading}
          </h2>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            {framework.body}
          </p>
        </header>

        <FrameworkChevrons className="mt-12 lg:mt-16" steps={framework.steps} />
      </div>
    </RevealOnScroll>
  );
}

function BrandsPricing({
  pricing,
  ctaHref,
}: {
  pricing: BrandsContent["pricing"];
  ctaHref: string;
}) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <header className="mx-auto max-w-[820px] text-center">
          <h2
            className={cn(
              "font-bold text-bloom-navy",
              "text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[52px]",
            )}
          >
            {pricing.heading}
          </h2>
          {pricing.body ? (
            <RichText
              content={pricing.body}
              enableGutter={false}
              enableProse
              className="mt-5 prose-p:text-[16px] prose-p:leading-[26px] prose-p:text-bloom-navy sm:prose-p:text-[18px] prose-strong:font-bold"
            />
          ) : (
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
          )}
        </header>

        {/* Hand-rolled comparison matrix — Seed / Growth / Full Bloom
            tiers + feature rows. Includes the "*Extended terms subject
            to credit approval." footnote, so we don't duplicate it
            below. */}
        <div className="mt-12 flex w-full justify-center lg:mt-16">
          <BrandsPricingMatrix ctaHref={ctaHref} />
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsBloomPay({ bloomPay }: { bloomPay: BrandsContent["bloomPay"] }) {
  return (
    <RevealOnScroll
      as="section"
      delay={120}
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <BloomPayLockup className="h-[28px] w-auto self-start" />
            <h2 className="max-w-[480px] text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
              {bloomPay.heading}
            </h2>
            <p className="max-w-[480px] text-[18px] leading-[26px] text-bloom-navy">
              {bloomPay.body}
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            {/* BloomPayWidget is the hand-rolled responsive replacement
                for the Framer Mockupterms widget. Used at all
                breakpoints so the Framer chunk isn't in /brands' JS
                payload at all. */}
            <BloomPayWidget className="w-full max-w-[480px]" />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function BrandsCTA({ cta }: { cta: BrandsContent["cta"] }) {
  const isExternal =
    cta.buttonHref.startsWith("http://") || cta.buttonHref.startsWith("https://");
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-7 px-6 text-center">
        <div
          aria-hidden="true"
          className="bg-bloom-cta flex h-[44px] w-[44px] items-center justify-center rounded-md"
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
          {cta.heading}
        </h2>
        <Link
          href={cta.buttonHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className={cn(
            "inline-flex items-center gap-2 rounded-md",
            "bg-bloom-navy text-white hover:opacity-90",
            "px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em]",
            "transition-opacity duration-200",
          )}
        >
          {cta.buttonLabel}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </RevealOnScroll>
  );
}

export default async function BrandsPage() {
  // Fetch all editable content in parallel — brand-page global +
  // shared testimonials + brand-surface FAQ entries.
  const [content, testimonials, faqs] = await Promise.all([
    loadBrandsPage(),
    loadTestimonials(),
    loadMarketingFaqs("brands"),
  ]);

  return (
    <>
      <HelpHeader />
      <main id="main-content" className="flex flex-col bg-bloom-cream">
        <BrandsHero headline={content.hero.headline} body={content.hero.body} />
        <BrandsBuiltForCoast
          builtFor={content.builtFor}
          coastToCoast={content.coastToCoast}
          verticals={content.verticals}
        />
        <BrandsFramework framework={content.framework} />
        <BrandsPricing pricing={content.pricing} ctaHref={content.cta.buttonHref} />
        <BrandsBloomPay bloomPay={content.bloomPay} />
        <MembersTestimonials testimonials={testimonials} />
        <BrandsCTA cta={content.cta} />
        <section className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
              <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-bloom-navy md:text-[48px]">
                {content.faqHeading}
              </h2>
              <div className="w-full">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
