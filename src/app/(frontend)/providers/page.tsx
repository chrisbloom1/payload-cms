import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BloomMarkGradient } from "@/components/BloomLogo";
import { HeroImage } from "@/components/HeroImage";
import { FrameworkChevrons } from "@/components/FrameworkChevrons";
import { BenefitRow } from "@/components/BenefitRow";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/widgets/FaqAccordion";
import { CriteriaCarousel } from "@/components/widgets/CriteriaCarousel";
import {
  loadProvidersPage,
  type ProvidersContent,
} from "@/lib/providers-page-resolver";
import { loadMarketingFaqs } from "@/lib/marketing-content-resolver";
import { pageMetadata } from "@/utilities/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: "For Providers",
  description:
    "Win better hardware jobs. Get matched with vetted, fast-growing hardware brands and accelerate payments through Bloom's centralized platform.",
  path: "/providers",
  ogTag: "For Providers",
});

function HeroIconTiles({ tiles }: { tiles: ProvidersContent["hero"]["iconTiles"] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
      {tiles.map((icon, i) => (
        <div
          key={`${icon.imageUrl}-${i}`}
          className="animate-bloom-hero-rise group flex aspect-square items-center justify-center rounded-md bg-bloom-mint p-6 text-bloom-navy transition-colors duration-300 hover:bg-bloom-mint/80 sm:p-7 lg:p-8"
          style={{ animationDelay: `${120 + i * 90}ms` }}
        >
          <Image
            src={icon.imageUrl}
            alt={icon.alt}
            width={150}
            height={120}
            className="h-full w-full object-contain"
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

function ProvidersHero({ hero }: { hero: ProvidersContent["hero"] }) {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full overflow-hidden bg-bloom-cream pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
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
            {hero.headline}
          </h1>
          <p className="max-w-[760px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            {hero.body}
          </p>
        </div>

        <HeroIconTiles tiles={hero.iconTiles} />
      </div>
    </RevealOnScroll>
  );
}

function ProvidersBenefits({ benefits }: { benefits: ProvidersContent["benefits"] }) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 sm:px-6 lg:gap-28">
        {benefits.map((benefit, i) => (
          <BenefitRow
            key={`${benefit.heading}-${i}`}
            reverse={i % 2 === 1}
            eyebrow={benefit.eyebrow || undefined}
            heading={benefit.heading}
            body={benefit.body}
            visual={
              benefit.imageUrl ? (
                <div className="w-full max-w-[640px]">
                  <HeroImage
                    src={benefit.imageUrl}
                    alt={benefit.imageAlt || benefit.heading}
                    width={2048}
                    height={1148}
                  />
                </div>
              ) : null
            }
          />
        ))}
      </div>
    </RevealOnScroll>
  );
}

function ProvidersCriteria({ criteria }: { criteria: ProvidersContent["criteria"] }) {
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
            {criteria.heading}
          </h2>
          <p className="mt-5 text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
            {criteria.body}
          </p>
        </header>

        <CriteriaCarousel className="mt-12 lg:mt-16" items={criteria.items} />
      </div>
    </RevealOnScroll>
  );
}

function ProvidersFramework({ framework }: { framework: ProvidersContent["framework"] }) {
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

function ProvidersCTA({ cta }: { cta: ProvidersContent["cta"] }) {
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

export default async function ProvidersPage() {
  const [content, faqs] = await Promise.all([
    loadProvidersPage(),
    loadMarketingFaqs("providers"),
  ]);

  return (
    <>
      <HelpHeader />
      <main id="main-content" className="flex flex-col bg-bloom-cream">
        <ProvidersHero hero={content.hero} />
        <ProvidersBenefits benefits={content.benefits} />
        <ProvidersCriteria criteria={content.criteria} />
        <ProvidersFramework framework={content.framework} />
        <ProvidersCTA cta={content.cta} />
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
