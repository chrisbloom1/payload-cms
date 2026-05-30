import { RevealOnScroll } from "@/components/RevealOnScroll";
import Animationtree from "@/components/proofly/Animationtree.jsx";
import { HOME_DEFAULTS } from "@/lib/home-page-defaults";

export interface HomeManageCardProps {
  heading?: string;
  body?: string;
}

export function HomeManageCard({
  heading = HOME_DEFAULTS.manage.heading,
  body = HOME_DEFAULTS.manage.body,
}: HomeManageCardProps = {}) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="overflow-hidden rounded-md bg-gradient-to-bl from-white via-white to-bloom-cream p-8 ring-1 ring-bloom-navy/10 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            {/* Fixed-width Framer export; scale to fit on phones (see HomeDiscover). */}
            <div className="flex w-full justify-center lg:justify-start">
              <div className="origin-center scale-[0.62] min-[528px]:scale-100">
                <Animationtree />
              </div>
            </div>
            <div className="flex max-w-[480px] flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px] lg:text-[44px] lg:leading-[48px]">
                {heading}
              </h2>
              <p className="text-[18px] leading-[28px] text-bloom-navy">
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomeManageCard;
