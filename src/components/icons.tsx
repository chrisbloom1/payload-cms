import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Four-petal "bloom" flower mark — extracted from the live site's
 * inline-SVG background. Used as the brand symbol in the nav and footer.
 * viewBox: 0 0 25 18 (path covers the full box).
 */
export function BloomMark({ ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 25 18"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M 23.422 4.03 L 15.678 11.715 L 19.869 1.675 L 17.807 0.827 L 13.616 10.867 L 13.616 0 L 11.384 0 L 11.384 10.867 L 7.193 0.827 L 5.131 1.675 L 9.322 11.715 L 1.578 4.03 L 0 5.596 L 12.5 18 L 25 5.596 Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 12H5M11 5l-7 7 7 7" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 18.5v-9h-3v9h3zM7 8a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 7 8zm11.5 10.5v-5.1c0-2.7-1.4-3.95-3.3-3.95-1.5 0-2.2.83-2.6 1.41V9.5h-3v9h3v-5.1c0-1.27.7-1.95 1.7-1.95s1.7.6 1.7 1.95v5.1h2.5z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
