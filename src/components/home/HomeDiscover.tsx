import { RevealOnScroll } from "@/components/RevealOnScroll";
import Animationweb from "@/components/proofly/Animationweb.jsx";

export function HomeDiscover() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="overflow-hidden rounded-md bg-gradient-to-br from-white via-white to-bloom-cream p-8 shadow-bloom-card ring-1 ring-bloom-navy/5 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="flex max-w-[480px] flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[36px] text-bloom-navy sm:text-[36px] sm:leading-[40px]">
                Discover and access a vetted supply chain network ready to scale
              </h2>
              <p className="text-[18px] leading-[28px] text-bloom-navy">
                Bloom intelligently matches brands with vetted supply chain and
                operations partners tailored to their products requirements
                throughout its lifecycle.
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
