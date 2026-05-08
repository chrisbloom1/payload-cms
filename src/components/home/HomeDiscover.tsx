import { RevealOnScroll } from "@/components/RevealOnScroll";
import Animationweb from "@/components/proofly/Animationweb.jsx";
import { HOME_DEFAULTS } from "@/lib/home-page-resolver";

export interface HomeDiscoverProps {
  heading?: string;
  body?: string;
}

export function HomeDiscover({
  heading = HOME_DEFAULTS.discover.heading,
  body = HOME_DEFAULTS.discover.body,
}: HomeDiscoverProps = {}) {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="overflow-hidden rounded-md bg-gradient-to-br from-white via-white to-bloom-cream p-8 ring-1 ring-bloom-navy/10 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex max-w-[480px] flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
                {heading}
              </h2>
              <p className="text-[18px] leading-[28px] text-bloom-navy">
                {body}
              </p>
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <Animationweb />
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomeDiscover;
