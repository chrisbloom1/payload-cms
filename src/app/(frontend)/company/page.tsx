import Link from "next/link";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRightIcon } from "@/components/icons";
import { TeamGrid } from "@/components/company/TeamGrid";
import { cn } from "@/lib/utils";
import {
  loadCompanyPage,
  type ResourceCard,
} from "@/lib/company-page-resolver";

// ---------------------------------------------------------------------------
// Static metadata
// ---------------------------------------------------------------------------

export const metadata = {
  title: "Company",
  description:
    "Bloom brings hard tech brands into an operations ecosystem that nurtures every stage of their product's growth.",
  alternates: { canonical: "/company" },
};

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

export default async function CompanyPage() {
  const content = await loadCompanyPage();

  return (
    <>
      <HelpHeader />
      <main className="flex-1 bg-bloom-cream pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero -------------------------------------------------------- */}
          <RevealOnScroll as="section" className="mb-20 max-w-4xl">
            <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight text-bloom-navy md:text-[72px]">
              {content.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bloom-muted">
              {content.hero.body}
            </p>
          </RevealOnScroll>

          {/* Mission 2-up ----------------------------------------------- */}
          <RevealOnScroll
            as="section"
            className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16"
          >
            <div>
              <Eyebrow>{content.whatWeDo.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-bloom-navy md:text-[40px]">
                {content.whatWeDo.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-bloom-muted">
                {content.whatWeDo.body}
              </p>
            </div>
            <div>
              <Eyebrow>{content.whoWeAre.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-bloom-navy md:text-[40px]">
                {content.whoWeAre.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-bloom-muted">
                {content.whoWeAre.body}
              </p>
            </div>
          </RevealOnScroll>

          {/* Ecosystem statement ---------------------------------------- */}
          <RevealOnScroll as="section" className="mb-20 max-w-4xl">
            <h2 className="text-[44px] font-bold leading-[1.08] tracking-tight text-bloom-navy md:text-[56px]">
              {content.ecosystem.heading}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bloom-muted">
              {content.ecosystem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Resources grid --------------------------------------------- */}
          <RevealOnScroll
            as="section"
            className="mb-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {content.resources.map((card) => (
              <ResourceTile key={card.title} card={card} />
            ))}
          </RevealOnScroll>

          <RevealOnScroll as="section">
            <div className="mb-10 text-center">
              <Eyebrow>{content.teamEyebrow}</Eyebrow>
            </div>
            <TeamGrid members={content.team} />
          </RevealOnScroll>
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Resource tile — link variant when href is set, static card otherwise.
// ---------------------------------------------------------------------------

function ResourceTile({ card }: { card: ResourceCard }) {
  const cardChrome =
    "flex h-full flex-col justify-between rounded-md border border-bloom-navy/10 bg-white p-6";

  if (card.href) {
    return (
      <Link
        href={card.href}
        className={cn(
          cardChrome,
          "group transition-colors duration-200 ease-out hover:border-bloom-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream",
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
      <span className="mt-6 inline-flex items-center self-start rounded-md border border-bloom-grey px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-bloom-muted">
        Coming soon
      </span>
    </div>
  );
}
