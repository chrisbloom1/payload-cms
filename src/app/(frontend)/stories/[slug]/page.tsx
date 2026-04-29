import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroImage } from "@/components/HeroImage";
import { BloomMarkGradient } from "@/components/BloomLogo";
import { cn } from "@/lib/utils";
import {
  CUSTOMER_STORIES,
  getStoryBySlug,
} from "@/lib/customer-stories";

export function generateStaticParams() {
  return CUSTOMER_STORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found - Bloom" };
  return {
    title: `${story.title} - Bloom`,
    description: story.intro[0]?.slice(0, 160),
  };
}

export default async function StoryPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <>
      <FloatingNav />
      <main className="bg-bloom-cream">
        {/* Hero: title left, hero image right + key benefits + nodes panel */}
        <section className="pt-28 pb-16 sm:pt-32 lg:pt-36">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
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
              <div className="overflow-hidden rounded-2xl shadow-bloom-card ring-1 ring-bloom-navy/10">
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

            {/* Top benefits + nodes band */}
            <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl bg-bloom-navy p-6 text-bloom-cream lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-10 lg:p-10">
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
                      className="rounded-full bg-bloom-cream/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-bloom-cream"
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
            {story.intro.map((p, i) => (
              <p
                key={`intro-${i}`}
                className="mt-4 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
              >
                {p}
              </p>
            ))}
            {story.body.map((p, i) => (
              <p
                key={`body-${i}`}
                className="mt-6 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
              >
                {p}
              </p>
            ))}

            {/* Quote */}
            <figure className="mt-12 rounded-2xl bg-bloom-navy px-7 py-8 text-bloom-cream md:px-10 md:py-10">
              <blockquote className="text-[16px] leading-[26px] md:text-[18px] md:leading-[28px]">
                “{story.quote.text}”
              </blockquote>
              <figcaption className="mt-6 text-[13px] uppercase tracking-[0.12em] text-bloom-cream">
                <span className="font-bold">{story.quote.author}</span>
                {story.quote.role ? (
                  <span className="text-bloom-cream/70"> — {story.quote.role}</span>
                ) : null}
              </figcaption>
            </figure>

            {story.outro ? (
              <p className="mt-10 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]">
                {story.outro}
              </p>
            ) : null}
          </div>
        </section>

        {/* Detail benefits */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
            <h2 className="text-[24px] font-bold leading-tight text-bloom-navy md:text-[28px]">
              Key Benefits of Operating with Bloom
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {story.benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-2xl bg-white p-6 shadow-bloom-card"
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
              <p className="mt-10 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]">
                {story.closing}
              </p>
            ) : null}
          </div>
        </section>

        {/* Bottom CTA — consistent with /brands and /providers: gradient mark on top, navy button. */}
        <section className="pb-24">
          <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-7 px-4 text-center sm:px-6">
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
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-bloom-navy md:text-[36px]">
              Ready to make hardware less hard?
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
