import Link from "next/link";
import { notFound } from "next/navigation";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroImage } from "@/components/HeroImage";
import { BloomMarkGradient } from "@/components/BloomLogo";
import RichText from "@/components/RichText";
import { cn } from "@/lib/utils";
import {
  loadAllSlugs,
  loadStoryDetail,
} from "@/lib/customer-story-resolver";

export async function generateStaticParams() {
  const slugs = await loadAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const story = await loadStoryDetail(slug);
  if (!story) return { title: "Story Not Found - Bloom" };
  // Prefer the legacy intro string if present (richer); else just title.
  const description = story.legacyIntro?.[0]?.slice(0, 160);
  return {
    title: `${story.title} - Bloom`,
    description,
  };
}

export default async function StoryPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const story = await loadStoryDetail(slug);
  if (!story) notFound();

  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        {/* Hero: title left, hero image right + key benefits + nodes panel */}
        <section className="pt-28 pb-12 sm:pt-32 lg:pt-36">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-12">
              <div className="flex flex-col gap-4">
                <Link
                  href="/customer-stories"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange hover:underline"
                >
                  <ArrowRightIcon className="h-3 w-3 rotate-180" />
                  All Customer Stories
                </Link>
                <BrandLogo
                  src={story.logo}
                  alt={story.logoAlt}
                  theme={story.logoMonoColor === "white" ? "darken" : "light"}
                  heightClass="h-10"
                  className="max-w-[220px]"
                  width={300}
                  height={60}
                />
                <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight text-bloom-navy md:text-[40px] md:leading-[1.1]">
                  {story.title}
                </h1>
              </div>
              <div className="overflow-hidden rounded-md ring-1 ring-bloom-navy/10">
                <HeroImage
                  src={story.hero}
                  alt=""
                  width={1200}
                  height={750}
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top benefits + nodes band */}
        <section className="pb-12">
          <div className="bg-bloom-navy text-bloom-cream">
            <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-10 lg:py-14">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                  Key Benefits of Operating with Bloom
                </p>
                <ul className="mt-5 space-y-3">
                  {story.topBenefits.map((b, i) => (
                    <li
                      key={i}
                      className="text-[13px] font-medium uppercase leading-[20px] tracking-[0.04em] text-bloom-cream md:text-[14px] md:leading-[22px]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-bloom-cream/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                  Nodes Used
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {story.nodes.map((n) => (
                    <li
                      key={n}
                      className="rounded-md bg-bloom-cream/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-bloom-cream"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="pb-16">
          <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6">
            {story.intro ? (
              <RichText
                content={story.intro}
                enableGutter={false}
                enableProse
                className="prose-headings:text-bloom-navy prose-p:text-bloom-navy prose-p:mt-4 prose-li:text-bloom-navy prose-strong:text-bloom-navy prose-a:text-bloom-orange"
              />
            ) : (
              story.legacyIntro?.map((p, i) => (
                <p
                  key={`intro-${i}`}
                  className="mt-4 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
                >
                  {p}
                </p>
              ))
            )}
            {story.body ? (
              <RichText
                content={story.body}
                enableGutter={false}
                enableProse
                className="prose-headings:text-bloom-navy prose-p:text-bloom-navy prose-p:mt-6 prose-li:text-bloom-navy prose-strong:text-bloom-navy prose-a:text-bloom-orange"
              />
            ) : (
              story.legacyBody?.map((p, i) => (
                <p
                  key={`body-${i}`}
                  className="mt-6 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
                >
                  {p}
                </p>
              ))
            )}

            {/* Quote */}
            {story.quote.text ? (
              <figure className="mt-12 border-l-4 border-bloom-orange pl-6 md:mt-14 md:pl-8">
                <blockquote className="text-[20px] font-medium leading-[30px] text-bloom-navy md:text-[24px] md:leading-[34px]">
                  “{story.quote.text}”
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.14em] text-bloom-navy/70">
                  {story.quote.author ? (
                    <span className="font-bold text-bloom-navy">
                      {story.quote.author}
                    </span>
                  ) : null}
                  {story.quote.role ? <span> — {story.quote.role}</span> : null}
                </figcaption>
              </figure>
            ) : null}

            {story.outro ? (
              <RichText
                content={story.outro}
                enableGutter={false}
                enableProse
                className="prose-p:text-bloom-navy prose-p:mt-10 prose-strong:text-bloom-navy prose-a:text-bloom-orange"
              />
            ) : story.legacyOutro ? (
              <p className="mt-10 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]">
                {story.legacyOutro}
              </p>
            ) : null}
          </div>
        </section>

        {/* Detail benefits */}
        <section className="pb-12 lg:pb-20">
          <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
            <h2 className="text-[24px] font-bold leading-tight text-bloom-navy md:text-[28px]">
              Key Benefits of Operating with Bloom
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {story.benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-md border border-bloom-navy/10 bg-white p-6"
                >
                  <h3 className="text-[18px] font-bold leading-snug text-bloom-navy">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[22px] text-bloom-muted md:text-[16px] md:leading-[24px]">
                    {b.description}
                  </p>
                </li>
              ))}
            </ul>
            {story.closing ? (
              <RichText
                content={story.closing}
                enableGutter={false}
                enableProse
                className="prose-p:text-bloom-navy prose-p:mt-10 prose-strong:text-bloom-navy prose-a:text-bloom-orange"
              />
            ) : story.legacyClosing ? (
              <p className="mt-10 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]">
                {story.legacyClosing}
              </p>
            ) : null}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-24">
          <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-7 px-4 text-center sm:px-6">
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
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-bloom-navy md:text-[36px]">
              Ready to make hardware less hard?
            </h2>
            <Link
              href="https://welcome.togetherwebloom.us/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-md",
                "bg-bloom-navy text-white hover:opacity-90",
                "px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em]",
                "transition-opacity duration-200",
              )}
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
