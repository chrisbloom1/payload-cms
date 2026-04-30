import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BloomPayWidget } from "@/components/widgets/BloomPayWidget";

/**
 * "Simplify and expand payment options" section.
 *
 * Two-up grid (text left, BloomPayWidget right) on desktop; stacks on mobile.
 * Server component shell wrapping the client widget via <RevealOnScroll/>.
 */
export function HomePayCard() {
  return (
    <RevealOnScroll
      as="section"
      delay={120}
      className={cn("w-full", "py-16 sm:py-20 lg:py-24")}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-8",
            "lg:grid-cols-2 lg:gap-12",
          )}
        >
          {/* Text column — no eyebrow on home Pay section per live site */}
          <div className="flex flex-col gap-5">
            <h2
              className={cn(
                "max-w-[480px]",
                "text-[32px] leading-[36px] sm:text-[36px] sm:leading-[40px]",
                "font-bold text-bloom-navy",
              )}
            >
              Simplify and expand payment options
            </h2>
            <p
              className={cn(
                "max-w-[480px]",
                "text-[18px] leading-[26px] font-normal text-bloom-navy",
              )}
            >
              Leverage BloomPay to pay all your vendors in one place and access
              extended payment terms up to 120 days.
            </p>
          </div>

          {/* Widget column */}
          <div className="flex w-full justify-center lg:justify-end">
            <BloomPayWidget className="w-full max-w-[480px]" />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomePayCard;
