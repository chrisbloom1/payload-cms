import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoTheme = "light" | "dark" | "darken" | "auto";

interface BrandLogoProps {
  src: string;
  alt: string;
  /** Approximate intrinsic width of the source asset in pixels (used for next/image). */
  width?: number;
  /** Approximate intrinsic height of the source asset in pixels. */
  height?: number;
  /**
   * "light" — logo sits on a LIGHT background; render natively. Use this
   *   when the source asset is already dark-on-light.
   * "dark" — logo sits on a DARK background; apply `brightness(0) invert(1)`
   *   so opaque silhouettes become solid white. Works for both transparent
   *   SVGs AND opaque white-bg PNGs (e.g. Infinite Machine), unlike
   *   `mix-blend-mode: screen` which fails on multi-color PNGs.
   * "darken" — logo sits on a LIGHT background BUT the source asset is white
   *   (or another light color). Applies `brightness(0)` to flatten the
   *   silhouette to black so it's readable. Use for white-fill SVGs being
   *   rendered against cream/white surfaces.
   * "auto" — preserve native colors regardless of bg (use for full-color
   *   marks where converting-to-white would destroy brand identity).
   */
  theme?: LogoTheme;
  className?: string;
  /** Pixel height target — keeps wordmarks of varying source dimensions on a uniform baseline. */
  heightClass?: string;
}

/**
 * Single source of truth for partner / customer logos. Normalizes height,
 * handles the "logo on dark bg" case via filter inversion (which works on
 * both transparent SVGs and opaque white-bg PNGs), and avoids the
 * `<Image fill>` collapse pattern by always passing explicit dimensions.
 */
export function BrandLogo({
  src,
  alt,
  width = 240,
  height = 80,
  theme = "light",
  className,
  heightClass = "h-8",
}: BrandLogoProps) {
  const filter =
    theme === "dark"
      ? "brightness(0) invert(1)"
      : theme === "darken"
        ? "brightness(0)"
        : undefined;

  return (
    <span
      className={cn(
        "inline-flex items-center",
        heightClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block h-full w-auto max-w-full object-contain"
        style={filter ? { filter } : undefined}
        unoptimized
      />
    </span>
  );
}

export default BrandLogo;
