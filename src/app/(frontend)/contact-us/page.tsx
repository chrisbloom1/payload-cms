import type { Metadata } from "next";
import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkedInIcon, ArrowRightIcon } from "@/components/icons";
import { BloomMarkGradient } from "@/components/BloomLogo";
import { cn } from "@/lib/utils";
import {
  loadContactPage,
  type ContactContent,
} from "@/lib/contact-page-resolver";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "If you're a hardware brand or service provider interested in joining our platform, or if you just have questions, we'd love to hear from you!",
  alternates: { canonical: "/contact-us" },
};

function ContactHero({ hero }: { hero: ContactContent["hero"] }) {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full overflow-hidden bg-bloom-cream pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-[820px] px-6 text-center">
        <div
          aria-hidden="true"
          className="bg-bloom-cta mx-auto mb-7 flex h-[44px] w-[44px] items-center justify-center rounded-md"
        >
          <BloomMarkGradient
            className="h-6 w-auto"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
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
        <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
          {hero.body}
        </p>
      </div>
    </RevealOnScroll>
  );
}

function ContactPaths({ paths }: { paths: ContactContent["paths"] }) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {paths.map((path) => (
            <Link
              key={path.heading}
              href={path.href}
              className="group flex flex-col gap-4 rounded-md border border-bloom-navy/10 bg-white p-7 transition-colors duration-200 hover:border-bloom-navy/30 sm:p-8"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                {path.eyebrow}
              </p>
              <h3 className="text-[22px] font-bold leading-[28px] text-bloom-navy sm:text-[26px] sm:leading-[32px]">
                {path.heading}
              </h3>
              <p className="text-[15px] leading-[24px] text-bloom-navy">
                {path.body}
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-bloom-navy">
                {path.cta}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}

function ContactFormSection({ content }: { content: ContactContent }) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1080px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          {/* Left column: contact channels */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                {content.formSection.eyebrow}
              </p>
              <h2 className="text-[28px] font-bold leading-[34px] text-bloom-navy sm:text-[32px] sm:leading-[38px]">
                {content.formSection.heading}
              </h2>
              <p className="text-[16px] leading-[26px] text-bloom-navy">
                {content.formSection.body}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-bold uppercase tracking-[0.14em] text-bloom-navy">
                {content.officesHeading}
              </h3>
              <div className="flex flex-col gap-3">
                {content.offices.map((addr) => (
                  <address
                    key={addr.city}
                    className="not-italic text-[14px] leading-[20px] text-bloom-navy"
                  >
                    <span className="font-bold">{addr.city}</span>
                    <br />
                    {addr.line1}
                    <br />
                    {addr.line2}
                  </address>
                ))}
              </div>
            </div>

            {content.linkedinUrl ? (
              <div className="flex flex-col gap-3">
                <h3 className="text-[14px] font-bold uppercase tracking-[0.14em] text-bloom-navy">
                  {content.connectHeading}
                </h3>
                <a
                  href={content.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-bloom-navy hover:underline"
                  aria-label="Bloom on LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            ) : null}
          </div>

          {/* Right column: form */}
          <div className="rounded-md border border-bloom-navy/10 bg-white p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default async function ContactUsPage() {
  const content = await loadContactPage();

  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <ContactHero hero={content.hero} />
        <ContactPaths paths={content.paths} />
        <ContactFormSection content={content} />
      </main>
      <UnifiedFooter />
    </>
  );
}
