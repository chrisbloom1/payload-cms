"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/RevealOnScroll";
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
      <motion.div
        className={cn(
          "flex h-[88px] w-[256px] items-center justify-center overflow-hidden",
          "rounded-[4px] bg-bloom-navy",
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
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
      </motion.div>
    </Link>
  );
}

export function RolesSplit() {
  return (
    <RevealOnScroll
      as="section"
      className="w-full bg-bloom-cream py-12 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 px-4 md:gap-12">
        {ROLES.map((role) => (
          <RolePill key={role.href} role={role} />
        ))}
      </div>
    </RevealOnScroll>
  );
}
