import { cn } from "@/lib/utils";

export interface FrameworkChevronStep {
  label: string;
  description: string;
}

/** Color treatments for the four chevrons, mirroring the live site's palette. */
const CHEVRON_VARIANTS = [
  // JOIN — mint
  {
    fill: "bg-bloom-mint",
    text: "text-bloom-navy",
  },
  // MATCH — lavender
  {
    fill: "bg-[#B7B0CB]",
    text: "text-bloom-navy",
  },
  // LAUNCH — navy
  {
    fill: "bg-bloom-navy",
    text: "text-white",
  },
  // SCALE — orange-rose gradient
  {
    fill: "bg-gradient-to-br from-bloom-orange to-bloom-rose",
    text: "text-white",
  },
] as const;

interface FrameworkChevronsProps {
  steps: readonly FrameworkChevronStep[];
  className?: string;
}

/**
 * Four chevron-shaped step cards used on /brands (JOIN/MATCH/LAUNCH/SCALE)
 * and /providers (APPLY/ONBOARD/MATCH/LAUNCH).
 *
 * Each chevron is shaped via clip-path (rightward arrow). Description sits
 * centered under the chevron. On <md the row collapses to a 2x2 grid, then
 * a single column on mobile.
 */
export function FrameworkChevrons({ steps, className }: FrameworkChevronsProps) {
  return (
    <ol
      className={cn(
        "grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2",
        className,
      )}
    >
      {steps.map((step, i) => {
        const v = CHEVRON_VARIANTS[Math.min(i, CHEVRON_VARIANTS.length - 1)];
        return (
          <li key={step.label} className="flex flex-col items-center gap-5">
            <div
              className={cn(
                "flex h-[80px] w-full items-center justify-center text-[20px] font-bold tracking-[0.04em] sm:h-[88px] sm:text-[22px]",
                v.fill,
                v.text,
              )}
              style={{
                clipPath:
                  "polygon(0% 0%, calc(100% - 28px) 0%, 100% 50%, calc(100% - 28px) 100%, 0% 100%, 28px 50%)",
              }}
            >
              {step.label}
            </div>
            <p className="max-w-[200px] text-center text-[15px] leading-[22px] text-bloom-navy">
              {step.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
