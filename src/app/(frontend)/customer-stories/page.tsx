import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroImage } from "@/components/HeroImage";
import { cn } from "@/lib/utils";
import {
  loadStoryCards,
  type CardTheme,
  type ResolvedStoryCard,
} from "@/lib/customer-story-resolver";

export const metadata = {
  title: "Customer Stories — Bloom",
  description:
    "How hardware brands like Infinite Machine, Grounded, Birdstop, Maeving, and more scaled with Bloom's network of vetted manufacturing, warehousing, and logistics partners.",
  alternates: { canonical: "/customer-stories" },
};

const THEME_STYLES: Record<
  CardTheme,
  { bg: string; text: string; arrow: string; logoTheme: "light" | "dark" }
> = {
  navy: {
    bg: "bg-bloom-navy",
    text: "text-white",
    arrow: "text-bloom-cream",
    logoTheme: "dark",
  },
  navyDeep: {
    bg: "bg-bloom-navy-deep",
    text: "text-white",
    arrow: "text-bloom-cream",
    logoTheme: "dark",
  },
  teal: {
    bg: "bg-[#1E4D55]",
    text: "text-white",
    arrow: "text-bloom-cream",
    logoTheme: "dark",
  },
  mint: {
    bg: "bg-bloom-mint",
    text: "text-bloom-navy",
    arrow: "text-bloom-navy",
    logoTheme: "light",
  },
  cream: {
    bg: "bg-bloom-cream",
    text: "text-bloom-navy",
    arrow: "text-bloom-navy",
    logoTheme: "light",
  },
  lavender: {
    bg: "bg-[#B7B0CB]",
    text: "text-bloom-navy",
    arrow: "text-bloom-navy",
    logoTheme: "light",
  },
  amber: {
    bg: "bg-[#E8B845]",
    text: "text-bloom-navy",
    arrow: "text-bloom-navy",
    logoTheme: "light",
  },
};

function StoryRow({ story }: { story: ResolvedStoryCard }) {
  const t = THEME_STYLES[story.cardTheme];
  const logoSrc =
    t.logoTheme === "dark" && story.logoDark ? story.logoDark : story.logo;
  // White-source mono logos need `darken` (brightness(0)) on light cards
  // so they're visible. On dark cards, "dark" inversion still gives a
  // white silhouette as before.
  const logoTheme: "light" | "dark" | "darken" =
    t.logoTheme === "dark"
      ? story.logoDark
        ? "light"
        : "dark"
      : story.logoMonoColor === "white"
        ? "darken"
        : "light";
  const isRight = story.cardAlign === "right";

  return (
    <Link
      href={`/customer-stories/${story.slug}`}
      aria-label={story.title}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-4 focus-visible:ring-offset-bloom-cream"
    >
      <div className="relative">
        <div className="overflow-hidden">
          <HeroImage
            src={story.hero}
            alt=""
            width={1600}
            height={900}
            fixedHeightClass="h-[420px] sm:h-[520px] lg:h-[640px]"
            className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div
          className={cn(
            "absolute bottom-0 flex w-full max-w-[560px] flex-col gap-4 p-6 sm:gap-5 sm:p-8 lg:p-10",
            isRight ? "right-0" : "left-0",
            t.bg,
            t.text,
          )}
        >
          <BrandLogo
            src={logoSrc}
            alt={story.logoAlt}
            theme={logoTheme}
            heightClass="h-7 sm:h-8 lg:h-9"
            className="max-w-[200px]"
            width={300}
            height={60}
          />
          <h3
            className={cn(
              "text-[18px] font-bold leading-[24px] sm:text-[22px] sm:leading-[28px] lg:text-[26px] lg:leading-[32px]",
              t.text,
            )}
          >
            {story.title}
          </h3>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em]",
              t.arrow,
            )}
          >
            Read Story
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function CustomerStoriesPage() {
  const stories = await loadStoryCards();

  return (
    <>
      <FloatingNav />
      <main className="flex-1 bg-bloom-cream pb-16 pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
          <RevealOnScroll
            as="section"
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-tight text-bloom-navy md:text-[56px] md:leading-[60px]">
              Customer Stories
            </h1>
            <p className="mt-6 text-[18px] leading-[26px] text-bloom-navy">
              Bloom supports hardware brands, no matter their stage or size.
            </p>
          </RevealOnScroll>
        </div>

        <section className="flex flex-col">
          {stories.map((story) => (
            <RevealOnScroll key={story.slug}>
              <StoryRow story={story} />
            </RevealOnScroll>
          ))}
        </section>
      </main>
      <UnifiedFooter />
    </>
  );
}
