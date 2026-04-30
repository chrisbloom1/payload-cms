import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroImage } from "@/components/HeroImage";
import { cn } from "@/lib/utils";

type CardTheme =
  | "navy"
  | "navyDeep"
  | "teal"
  | "mint"
  | "cream"
  | "lavender"
  | "amber";

interface Story {
  slug: string;
  title: string;
  hero: string;
  logo: string;
  /** Use the white-version logo on dark themes when one exists. */
  logoDark?: string;
  logoAlt: string;
  logoType: "monochrome" | "color";
  /**
   * Source color of the mono asset. White-fill SVGs need a `brightness(0)`
   * filter when shown on a light card so they're not invisible. Defaults
   * to "black" (no filter on light bg).
   */
  logoMonoColor?: "white" | "black";
  theme: CardTheme;
  /** Which side the overlapping info card sits on. Alternates per story. */
  align: "left" | "right";
}

const STORIES: readonly Story[] = [
  {
    slug: "infinite-machine",
    title:
      "Bloom supports Infinite Machine’s launch with roll-on/roll-off delivery and global logistics network",
    hero: "/images/stories/infinite-machine-hero.jpg",
    logo: "/images/stories/infinite-machine-logo.png",
    logoAlt: "Infinite Machine",
    logoType: "monochrome",
    theme: "cream",
    align: "left",
  },
  {
    slug: "grounded",
    title:
      "Bloom amplifies Grounded's production capabilities and nationwide delivery",
    hero: "/images/stories/grounded-hero.jpg",
    logo: "/images/stories/grounded-logo.svg",
    logoAlt: "Grounded",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "navyDeep",
    align: "right",
  },
  {
    slug: "birdstop",
    title:
      "Bloom supports and accelerates Birdstop's domestic production, flight testing, and scaling",
    hero: "/images/stories/birdstop-hero.jpg",
    logo: "/images/stories/birdstop-logo.svg",
    logoAlt: "Birdstop",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "navyDeep",
    align: "left",
  },
  {
    slug: "wheel-me",
    title:
      "wheel.me scales their industrial robotics business with Bloom’s network of flexible manufacturing and logistics partners.",
    hero: "/images/stories/wheel-me-hero.jpg",
    logo: "/images/stories/wheel-me-logo.svg",
    logoAlt: "wheel.me",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "teal",
    align: "right",
  },
  {
    slug: "maeving",
    title:
      "When Maeving needed immediate support Bloom mobilized its network to receive shipments and ensure seamless customer handoffs.",
    hero: "/images/stories/maeving-hero.webp",
    logo: "/images/stories/maeving-logo.webp",
    logoAlt: "Maeving",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "amber",
    align: "left",
  },
  {
    slug: "electric-outdoors",
    title:
      "Electric Outdoors scales with Bloom’s network of flexible manufacturing and logistics partners.",
    hero: "/images/stories/electric-outdoors-hero.jpg",
    logo: "/images/stories/electric-outdoors-logo.svg",
    logoAlt: "Electric Outdoors",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "navyDeep",
    align: "right",
  },
  {
    slug: "moonbikes",
    title:
      "Bloom's platform matched Moonbikes with the best partner network to relaunch into the North American markets efficiently.",
    hero: "/images/stories/moonbikes-hero.jpg",
    logo: "/images/stories/moonbikes-logo.svg",
    logoAlt: "Moonbikes",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "amber",
    align: "left",
  },
  {
    slug: "dust-moto",
    title:
      "Dust Moto leverages Bloom’s extensive network in assembly, warehousing, and shipping.",
    hero: "/images/stories/dust-moto-hero.jpg",
    logo: "/images/stories/dust-moto-logo.png",
    logoAlt: "Dust Moto",
    logoType: "monochrome",
    theme: "mint",
    align: "right",
  },
  {
    slug: "cake",
    title:
      "Bloom onboarded Cake quickly to assist with warehousing, re-work, inventory inspection and cataloging of the inventory.",
    hero: "/images/stories/cake-hero.webp",
    logo: "/images/stories/cake-logo.svg",
    logoAlt: "Cake",
    logoType: "monochrome",
    logoMonoColor: "white",
    theme: "navy",
    align: "left",
  },
  {
    slug: "tokyobike",
    title:
      "Tokyobike US leverages Bloom to efficiently manage their warehouses and shipments on a single consolidated platform.",
    hero: "/images/stories/tokyobike-hero.webp",
    logo: "/images/stories/tokyobike-logo.svg",
    logoAlt: "Tokyobike US",
    logoType: "monochrome",
    theme: "lavender",
    align: "right",
  },
];

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
  // Live site uses a deep teal/blue-green for wheel.me — distinct from
  // navy. Keep the value local rather than promoting a token until we
  // see it reused on more cards.
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

function StoryRow({ story }: { story: Story }) {
  const t = THEME_STYLES[story.theme];
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
  const isRight = story.align === "right";

  return (
    <Link
      href={`/stories/${story.slug}`}
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

export default function CustomerStoriesPage() {
  return (
    <>
      <FloatingNav />
      <main className="flex-1 bg-bloom-cream pb-24 pt-32">
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
          {STORIES.map((story) => (
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
