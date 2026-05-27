"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** unused — kept for backwards compatibility with existing call sites */
  delay?: number;
  /** unused — kept for backwards compatibility with existing call sites */
  offset?: number;
  /** unused — kept for backwards compatibility with existing call sites */
  direction?: "y" | "x" | "none";
  /** unused — kept for backwards compatibility with existing call sites */
  threshold?: number;
  /** unused — kept for backwards compatibility with existing call sites */
  repeat?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer";
}

/**
 * Section wrapper — previously did a fade+slide-up on viewport entry, but
 * the IntersectionObserver-driven opacity:0 caused a "blank slot" feel as
 * users scrolled the home page. Content now renders fully visible at all
 * times; we keep this component as a stable section primitive in case a
 * future motion treatment is reintroduced.
 */
export function RevealOnScroll({
  children,
  className,
  as: Tag = "div",
}: RevealOnScrollProps) {
  return <Tag className={cn(className)}>{children}</Tag>;
}
