import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BloomMarkGradient } from "@/components/BloomLogo";

/**
 * Bloom platform app demo video, anchored above the Discover section.
 *
 * Live layout: an orange Bloom mark "drops" from above with a thin red
 * line into a 720×496 video preview of the app chat UI.
 */
export function HomeAppDemo() {
  return (
    <RevealOnScroll
      as="section"
      className="relative w-full bg-bloom-cream pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center px-4 sm:px-6">
        <div className="relative flex flex-col items-center">
          {/* Mark + line connector */}
          <div className="relative flex h-[120px] w-12 flex-col items-center">
            <div
              aria-hidden="true"
              className="bg-bloom-cta absolute top-0 flex h-[44px] w-[44px] items-center justify-center rounded-[8px] shadow-[0_8px_24px_rgba(254,5,62,0.25)]"
            >
              <BloomMarkGradient
                className="h-6 w-auto"
                preserveAspectRatio="xMidYMid meet"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute top-[44px] h-[76px] w-px bg-bloom-rose/70"
            />
          </div>

          {/* Video / poster */}
          <div className="relative w-full overflow-hidden rounded-md shadow-bloom-card ring-1 ring-bloom-navy/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/bloom-app-demo-poster.webp"
              className="block h-auto w-full"
            >
              <source src="/videos/bloom-app-demo.mp4" type="video/mp4" />
              {/* Static fallback if video can't load */}
              <Image
                src="/videos/bloom-app-demo-poster.webp"
                alt="Bloom platform interface"
                width={1440}
                height={992}
                className="block h-auto w-full"
              />
            </video>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default HomeAppDemo;
