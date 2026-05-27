import Link from "next/link";
import { cn } from "@/lib/utils";

interface Role {
  href: string;
  label: string;
}

const ROLES: readonly Role[] = [
  { href: "/brands", label: "For Brands" },
  { href: "/providers", label: "For Providers" },
];

function RolePill({ role }: { role: Role }) {
  return (
    <Link href={role.href} aria-label={role.label} className="group block">
      <div
        className={cn(
          "flex h-[88px] w-[256px] items-center justify-center overflow-hidden",
          "rounded-[4px] bg-bloom-navy transition-transform duration-[250ms]",
          "ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]",
        )}
      >
        <span
          className={cn(
            "block whitespace-nowrap text-center font-normal text-bloom-cream",
            "text-[40px] leading-none",
          )}
          style={{ fontFamily: "Haffer, sans-serif", fontWeight: 430 }}
        >
          {role.label}
        </span>
      </div>
    </Link>
  );
}

export function RolesSplit() {
  return (
    <section className="w-full bg-bloom-cream py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 px-4 md:gap-12">
        {ROLES.map((role) => (
          <RolePill key={role.href} role={role} />
        ))}
      </div>
    </section>
  );
}
