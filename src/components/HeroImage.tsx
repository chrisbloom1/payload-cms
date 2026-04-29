import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  src: string;
  alt: string;
  /** Source width in px — required for next/image when not using `fill`. */
  width: number;
  /** Source height in px. */
  height: number;
  /** Tailwind class to lock height (e.g. `h-[420px]`). When provided, `object-cover` crops to fit. */
  fixedHeightClass?: string;
  className?: string;
  priority?: boolean;
  rounded?: "none" | "lg" | "xl" | "2xl" | "3xl";
  sizes?: string;
}

const ROUNDED: Record<NonNullable<HeroImageProps["rounded"]>, string> = {
  none: "",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

/**
 * Standard wrapper for any image that's wider than ~200px on the page.
 * Uses explicit width/height (never `fill`) so the intrinsic aspect ratio
 * always reserves correct space — `<Image fill>` inside an aspect-ratio
 * container has burned us multiple times by collapsing to 0.
 *
 * For fixed-height card hero rows, pass `fixedHeightClass="h-[280px]"` and
 * the image will crop with object-cover. Otherwise it scales to full width
 * with intrinsic aspect ratio preserved.
 */
export function HeroImage({
  src,
  alt,
  width,
  height,
  fixedHeightClass,
  className,
  priority,
  rounded = "none",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px",
}: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn(
        "block w-full object-cover",
        fixedHeightClass ?? "h-auto",
        ROUNDED[rounded],
        className,
      )}
    />
  );
}

export default HeroImage;
