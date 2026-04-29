import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { TeamGrid } from "@/components/company/TeamGrid";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Static metadata
// ---------------------------------------------------------------------------

export const metadata = {
  title: "Company — Bloom",
  description:
    "Bloom brings hard tech brands into an operations ecosystem that nurtures every stage of their product's growth.",
};

// ---------------------------------------------------------------------------
// Resource cards data
// ---------------------------------------------------------------------------

interface ResourceCard {
  title: string;
  body: string;
  href?: string;
  comingSoon?: boolean;
}

const RESOURCES: readonly ResourceCard[] = [
  {
    title: "Newsroom",
    body: "We power innovation across the hardware industry.",
    href: "/newsroom",
  },
  {
    title: "Customer Stories",
    body: "We support hardware brands, no matter their stage or size.",
    href: "/customer-stories",
  },
  {
    title: "Social Impact",
    body: "We are committed to exploring the full potential of hardware products.",
    comingSoon: true,
  },
  {
    title: "Sustainability",
    body: "We decarbonize hard tech by optimizing the services it needs to thrive.",
    comingSoon: true,
  },
] as const;

// ---------------------------------------------------------------------------
// Local atoms
// ---------------------------------------------------------------------------

function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.18em] text-bloom-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CompanyPage() {
  return (
    <>
      <FloatingNav />
      <main className="flex-1 bg-bloom-cream pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero -------------------------------------------------------- */}
          <RevealOnScroll as="section" className="mb-20 max-w-4xl">
            <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight text-bloom-navy md:text-[72px]">
              Hi. We&apos;re Bloom.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bloom-muted">
              Bloom brings hard tech brands into an operations ecosystem that
              nurtures every stage of their product&apos;s growth.
            </p>
          </RevealOnScroll>

          {/* Mission 2-up ----------------------------------------------- */}
          <RevealOnScroll
            as="section"
            className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
          >
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-bloom-navy md:text-[40px]">
                We provide the support and connections you need to flourish.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-bloom-muted">
                Just as a thriving natural ecosystem relies on interconnected
                relationships and balanced processes to flourish, Bloom&apos;s
                operations ecosystem is built on a foundation of collaboration
                and resilience. By nurturing a network that thrives on the
                diverse capabilities of our partners, we ensure that the hard
                tech industry can thrive, adapt, and grow.
              </p>
            </div>
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-bloom-navy md:text-[40px]">
                We are committed to exploring the full potential of hardware.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-bloom-muted">
                We are a global team of builders and connectors with deep roots
                in the hardware industry. Together, we are exploring the full
                potential of hard tech products, optimizing their places within
                our daily lives.
              </p>
            </div>
          </RevealOnScroll>

          {/* Ecosystem statement ---------------------------------------- */}
          <RevealOnScroll as="section" className="mb-20 max-w-4xl">
            <h1 className="text-[44px] font-bold leading-[1.08] tracking-tight text-bloom-navy md:text-[56px]">
              Bloom is an ecosystem of operations services
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bloom-muted">
              <p>
                We equip hard tech brands to build, deliver, and service their
                products using a high-quality network of service providers, no
                matter their stage or size.
              </p>
              <p>
                Bloom is a technology company operating globally. We deliver
                services to customers across hardware, third-party logistics,
                contract manufacturing, and after-sales service.
              </p>
            </div>
          </RevealOnScroll>

          {/* Resources grid --------------------------------------------- */}
          <RevealOnScroll
            as="section"
            className="mb-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {RESOURCES.map((card) => (
              <ResourceTile key={card.title} card={card} />
            ))}
          </RevealOnScroll>

          {/* Team — full grid of 13 members with verbatim bios from live site */}
          <RevealOnScroll as="section">
            <div className="mb-10 text-center">
              <Eyebrow>Meet the Bloom Team</Eyebrow>
            </div>
            <TeamGrid />
          </RevealOnScroll>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Resource tile — link variant when href is set, static card otherwise.
// ---------------------------------------------------------------------------

function ResourceTile({ card }: { card: ResourceCard }) {
  const cardChrome =
    "flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-bloom-card";

  if (card.href) {
    return (
      <Link
        href={card.href}
        className={cn(
          cardChrome,
          "group transition-transform duration-200 ease-out hover:scale-[1.01] focus-visible:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream",
        )}
      >
        <div>
          <h5 className="text-[19px] font-bold leading-snug text-bloom-navy">
            {card.title}
          </h5>
          <p className="mt-3 text-sm leading-relaxed text-bloom-muted">
            {card.body}
          </p>
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-bloom-orange">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    );
  }

  return (
    <div className={cardChrome}>
      <div>
        <h5 className="text-[19px] font-bold leading-snug text-bloom-navy">
          {card.title}
        </h5>
        <p className="mt-3 text-sm leading-relaxed text-bloom-muted">
          {card.body}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center self-start rounded-full border border-bloom-grey px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-bloom-muted">
        Coming soon
      </span>
    </div>
  );
}
