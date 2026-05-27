import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BenefitRowProps {
  eyebrow?: ReactNode;
  heading: string;
  body: ReactNode;
  visual: ReactNode;
  /** Flip the column order so the visual sits on the left at lg+. */
  reverse?: boolean;
  className?: string;
}

/**
 * Two-column "benefit" row: text on one side, visual on the other. Live
 * site uses this alternating pattern across /brands and /providers.
 * `reverse` flips the order at lg+ for the typical zig-zag layout.
 */
export function BenefitRow({
  eyebrow,
  heading,
  body,
  visual,
  reverse,
  className,
}: BenefitRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-last",
        className,
      )}
    >
      <div className="flex flex-col gap-5">
        {eyebrow ? (
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="max-w-[480px] text-[28px] font-bold leading-[34px] text-bloom-navy sm:text-[32px] sm:leading-[38px] lg:text-[36px] lg:leading-[42px]">
          {heading}
        </h2>
        <div className="max-w-[480px] text-[16px] leading-[26px] text-bloom-navy sm:text-[18px]">
          {body}
        </div>
      </div>
      <div
        className={cn(
          "flex w-full justify-center",
          reverse ? "lg:justify-start" : "lg:justify-end",
        )}
      >
        {visual}
      </div>
    </div>
  );
}

export default BenefitRow;
