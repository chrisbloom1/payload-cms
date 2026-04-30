import { RevealOnScroll } from "@/components/RevealOnScroll";
import Animationtree from "@/components/proofly/Animationtree.jsx";

/**
 * "Easily manage partners with Bloom's platform." section.
 *
 * Live layout: visual on the left (3×2 service grid + BRANDS badge connected
 * by a vertical line + orange Bloom mark), text on the right (BRANDS eyebrow
 * + h2 + body).
 */
export function HomeManageCard() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="overflow-hidden rounded-md bg-gradient-to-bl from-white via-white to-bloom-cream p-8 ring-1 ring-bloom-navy/10 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex w-full justify-center lg:justify-start">
              <Animationtree />
            </div>
            <div className="flex max-w-[480px] flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px] lg:text-[44px] lg:leading-[48px]">
                Easily manage partners with Bloom&rsquo;s platform.
              </h2>
              <p className="text-[18px] leading-[28px] text-bloom-navy">
                Discover, bid, book, and pay supply chain and operation partners
                all on a single platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomeManageCard;
