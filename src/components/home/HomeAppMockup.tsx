import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

/**
 * HomeAppMockup — auto-playing demo video of the Bloom dashboard,
 * shown between the LogoMarquee and the ServiceWheel section on the
 * home page. Sized to mirror the live site's centered hero loop.
 *
 * The video is muted + autoplay + loop + playsInline so it behaves
 * like an inline animated mockup across browsers (Safari requires
 * playsInline + muted to autoplay on iOS).
 */
export function HomeAppMockup() {
  return (
    <RevealOnScroll
      as="section"
      className={cn(
        "w-full bg-bloom-cream",
        "py-12 md:py-16 lg:py-20",
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-md ring-1 ring-bloom-navy/10">
          <video
            poster="/videos/bloom-app-demo-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Demo of the Bloom platform dashboard"
            className="block h-auto w-full"
          >
            <source src="/videos/bloom-app-demo.mp4" type="video/mp4" />
            {/* See HomeAppDemo for rationale — silent demo, captions
                track describes the on-screen activity. */}
            <track
              kind="captions"
              src="/videos/bloom-app-demo.en.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>
        </div>
      </div>
    </RevealOnScroll>
  );
}
