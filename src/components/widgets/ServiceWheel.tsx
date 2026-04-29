import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Warehouse",
  "After-Sales\nService",
  "Engineering",
  "Manufacturing\n& Assembly",
  "Component Sourcing",
  "Delivery",
] as const;

// Duplicate the list so the marquee can loop seamlessly via translateX(-50%).
const MARQUEE_ITEMS: ReadonlyArray<{ id: string; label: string }> = [
  ...CATEGORIES.map((label, i) => ({ id: `a-${i}`, label })),
  ...CATEGORIES.map((label, i) => ({ id: `b-${i}`, label })),
];

const ORB_STYLE: React.CSSProperties = {
  background:
    "radial-gradient(circle at center, rgba(254, 14, 52, 0.45) 0%, rgba(255, 130, 5, 0.3) 45%, transparent 70%)",
  width: 320,
  height: 320,
  filter: "blur(60px)",
};

const TRACK_STYLE: React.CSSProperties = {
  animationDuration: "60s",
  width: "max-content",
};

interface ServiceWheelProps {
  /** Override the headline (the /brands page uses slightly different framing). */
  heading?: string;
  /** Override the intro paragraph. */
  intro?: string;
  className?: string;
}

const DEFAULT_HEADING =
  "Discover and access a vetted supply chain network ready to scale";
const DEFAULT_INTRO =
  "Bloom intelligently matches brands with vetted supply chain and operations partners tailored to their products requirements throughout its lifecycle.";

/**
 * ServiceWheel — pure CSS marquee of service-category pills with a blurred
 * radial-gradient orb decoration behind. Server component (no client state).
 *
 * Animation honors `prefers-reduced-motion` via Tailwind's `motion-reduce`.
 */
export function ServiceWheel({
  heading = DEFAULT_HEADING,
  intro = DEFAULT_INTRO,
  className,
}: ServiceWheelProps) {
  return (
    <section
      className={cn(
        "bg-bloom-cream relative w-full overflow-hidden py-20 md:py-28",
        className,
      )}
    >
      <RevealOnScroll
        as="header"
        className="mx-auto max-w-[720px] px-6 text-center"
      >
        <h2 className="text-bloom-navy text-[28px] font-bold leading-tight md:text-[36px] md:leading-10">
          {heading}
        </h2>
        <p className="text-bloom-muted mt-4 text-base leading-[26px] md:text-[18px]">
          {intro}
        </p>
      </RevealOnScroll>

      <div className="relative mt-12 flex min-h-[140px] items-center justify-center md:mt-16">
        {/* Decorative gradient orb (behind pills) — subtle accent only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={ORB_STYLE}
        />

        {/* Marquee track */}
        <div className="relative z-10 w-full overflow-hidden">
          <div
            className="animate-bloom-marquee motion-reduce:animate-none flex items-center gap-4 md:gap-8"
            style={TRACK_STYLE}
          >
            {MARQUEE_ITEMS.map(({ id, label }) => (
              <span
                key={id}
                className="text-bloom-navy shadow-bloom-card inline-flex shrink-0 items-center justify-center whitespace-pre-line rounded-full bg-white px-4 py-2 text-center text-sm font-bold leading-tight md:px-6 md:py-3 md:text-[18px]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
