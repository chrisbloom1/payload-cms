import Image from "next/image";

const LOGOS = [
  "/images/logos/logo-1.svg",
  "/images/logos/logo-2.svg",
  "/images/logos/logo-3.svg",
  "/images/logos/logo-4.svg",
  "/images/logos/logo-5.svg",
  "/images/logos/logo-6.svg",
  "/images/logos/logo-7.svg",
  "/images/logos/logo-8.svg",
  "/images/logos/logo-9.png",
  "/images/logos/logo-10.svg",
  "/images/logos/logo-11.png",
  "/images/logos/logo-12.svg",
  "/images/logos/logo-13.svg",
  "/images/logos/logo-14.svg",
  "/images/logos/logo-15.png",
  "/images/logos/logo-16.svg",
  "/images/logos/logo-17.svg",
  "/images/logos/logo-18.png",
  "/images/logos/logo-19.svg",
  "/images/logos/logo-20.png",
  "/images/logos/logo-21.svg",
  "/images/logos/logo-22.png",
  "/images/logos/logo-23.png",
] as const;

type LogoListProps = {
  ariaHidden: boolean;
};

function LogoList({ ariaHidden }: LogoListProps) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="m-0 flex shrink-0 list-none items-center p-0"
    >
      {LOGOS.map((src, i) => (
        <li
          key={`${src}-${ariaHidden ? "dup" : "orig"}-${i}`}
          className="flex h-[68px] items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <Image
            src={src}
            alt=""
            width={120}
            height={40}
            unoptimized
            className="h-7 w-auto object-contain sm:h-8 lg:h-10"
          />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section
      aria-label="Trusted by hardware brands"
      className="relative w-full overflow-hidden py-8 md:py-12"
    >
      <div className="flex w-max animate-bloom-marquee motion-reduce:animate-none">
        <LogoList ariaHidden={false} />
        <LogoList ariaHidden={true} />
      </div>
    </section>
  );
}
