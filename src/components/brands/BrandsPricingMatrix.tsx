import Link from "next/link";
import { cn } from "@/lib/utils";

// Hand-rolled replacement for the Framer-exported Pricingmatrix.jsx
// widget. Content matches the Framer canvas 1:1 so the page is
// pixel-content identical pre/post-migration. Dropping the Framer
// version removes ~2039 lines of @proofly-framer/runtime + motion code
// from the /brands JS payload.

interface Tier {
  id: "seed" | "growth" | "full";
  name: string;
  price: string;
  blurb: string;
  featured?: boolean;
}

interface FeatureRow {
  label: string;
  subLabel?: string;
  values: readonly [string, string, string];
}

const TIERS: readonly Tier[] = [
  {
    id: "seed",
    name: "SEED",
    price: "$500",
    blurb:
      "Best for hardware brands to get full access to Bloom's network, with limited access to finance tools.",
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "$2,000",
    blurb:
      "Best for hardware companies with operational spend over $50,000/month and more complex supply chains.",
    featured: true,
  },
  {
    id: "full",
    name: "FULL BLOOM",
    price: "$6,000",
    blurb:
      "Best for enterprise and rapid growth hardware brands with custom solutions.",
  },
];

const ROWS: readonly FeatureRow[] = [
  {
    label: "Build partners",
    subLabel: "Contract manufacturing, assembly",
    values: [
      "Bloom's Preferred Pricing",
      "Bloom's Preferred Pricing",
      "Bloom's Preferred Pricing",
    ],
  },
  {
    label: "Delivery partners",
    subLabel: "Logistics, warehousing, shipping",
    values: [
      "Bloom's Preferred Pricing",
      "Bloom's Preferred Pricing with volume discount",
      "Custom",
    ],
  },
  {
    label: "Support",
    values: ["Limited", "Guided", "Dedicated"],
  },
  {
    label: "Invoice terms",
    values: ["Auto Pay", "Net 30*", "Custom"],
  },
  {
    label: "Extended payment terms",
    values: ["Not available", "Up to net 120*", "Up to net 120*"],
  },
];

interface BrandsPricingMatrixProps {
  /** Where each tier's Select Plan CTA links. */
  ctaHref?: string;
  className?: string;
}

function TierHeader({ tier }: { tier: Tier }) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.14em]",
          tier.featured ? "text-bloom-orange" : "text-bloom-muted",
        )}
      >
        {tier.name}
      </p>
      <p className="flex items-baseline gap-1">
        <span className="text-[28px] font-bold leading-none text-bloom-navy sm:text-[32px]">
          {tier.price}
        </span>
        <span className="text-[13px] text-bloom-muted">/month</span>
      </p>
      <p className="text-[13px] leading-[18px] text-bloom-muted">
        {tier.blurb}
      </p>
    </div>
  );
}

function SelectPlanLink({
  href,
  featured,
}: {
  href: string;
  featured?: boolean;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-opacity duration-200 hover:opacity-90",
        featured
          ? "bg-bloom-navy text-white"
          : "border border-bloom-navy text-bloom-navy",
      )}
    >
      Select Plan →
    </Link>
  );
}

export function BrandsPricingMatrix({
  ctaHref = "https://welcome.bloomnetwork.ai/",
  className,
}: BrandsPricingMatrixProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[960px] overflow-hidden rounded-md bg-white ring-1 ring-bloom-navy/10",
        className,
      )}
    >
      {/* Desktop / tablet: 4-column comparison grid with tier headers,
          shared feature rows, and a CTA strip. Hidden < md where the
          stacked card layout takes over. */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] border-b border-bloom-grey">
          <div className="px-6 py-7" />
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "px-5 py-7",
                tier.featured && "bg-bloom-mint-soft/60",
              )}
            >
              <TierHeader tier={tier} />
            </div>
          ))}
        </div>

        {ROWS.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] border-b border-bloom-grey last:border-b-0"
          >
            <div className="flex flex-col justify-center gap-1 px-6 py-5">
              <p className="text-[14px] font-bold text-bloom-navy">{row.label}</p>
              {row.subLabel ? (
                <p className="text-[12px] text-bloom-muted">{row.subLabel}</p>
              ) : null}
            </div>
            {row.values.map((value, i) => (
              <div
                key={`${row.label}-${i}`}
                className={cn(
                  "flex items-center px-5 py-5 text-[13px] leading-[18px] text-bloom-navy",
                  TIERS[i]?.featured && "bg-bloom-mint-soft/60",
                )}
              >
                {value}
              </div>
            ))}
          </div>
        ))}

        <div className="grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] border-t border-bloom-grey bg-white">
          <div className="px-6 py-5" />
          {TIERS.map((tier) => (
            <div
              key={`cta-${tier.id}`}
              className={cn(
                "px-5 py-5",
                tier.featured && "bg-bloom-mint-soft/60",
              )}
            >
              <SelectPlanLink href={ctaHref} featured={tier.featured} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked tier cards. Each card repeats the feature list
          inline so users don't have to mentally cross-reference rows
          against tier columns on a small screen. */}
      <div className="flex flex-col divide-y divide-bloom-grey md:hidden">
        {TIERS.map((tier) => (
          <article
            key={`mobile-${tier.id}`}
            className={cn(
              "flex flex-col gap-5 px-5 py-6",
              tier.featured && "bg-bloom-mint-soft/60",
            )}
          >
            <TierHeader tier={tier} />
            <dl className="flex flex-col gap-3 text-[13px] leading-[18px]">
              {ROWS.map((row, i) => (
                <div
                  key={`${tier.id}-${row.label}`}
                  className="flex flex-col gap-0.5"
                >
                  <dt className="text-[12px] font-bold text-bloom-navy">
                    {row.label}
                    {row.subLabel ? (
                      <span className="ml-1 font-normal text-bloom-muted">
                        ({row.subLabel})
                      </span>
                    ) : null}
                  </dt>
                  <dd className="text-bloom-navy">
                    {row.values[TIERS.indexOf(tier)]}
                  </dd>
                </div>
              ))}
            </dl>
            <SelectPlanLink href={ctaHref} featured={tier.featured} />
          </article>
        ))}
      </div>

      <p className="border-t border-bloom-grey bg-bloom-cream px-6 py-3 text-[11px] text-bloom-muted">
        *Extended terms subject to credit approval.
      </p>
    </div>
  );
}

export default BrandsPricingMatrix;
