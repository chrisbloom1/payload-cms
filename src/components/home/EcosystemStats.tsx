"use client";

import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

/**
 * "Cultivating an ecosystem" section.
 *
 * Heading + lede centered above three mint-bg stat cards in a
 * row. Each card animates its number from 0 to its target value
 * when the section enters the viewport.
 *
 * Live-site reference: cards are #DCEBEC mint, 8px radius, 24px padding,
 * arranged in a 3-up grid below a centered heading.
 */
export function EcosystemStats() {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px]">
        <RevealOnScroll className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
          <h2 className="text-[36px] font-bold leading-[40px] tracking-[-0.01em] text-bloom-navy md:text-[44px] md:leading-[48px]">
            Cultivating an ecosystem
          </h2>
          <p className="text-[16px] leading-[24px] text-bloom-navy/80 md:text-[18px] md:leading-[26px]">
            With deep roots in the hardware industry, we provide the support
            and connections you need to flourish, ensuring your business
            blossoms in an ever-evolving landscape.
          </p>
        </RevealOnScroll>

        {/* Target values verified from live site (animated to 40 / 25 / 80) */}
        <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          <StatCard
            target={40}
            suffix="%"
            label="Reduction"
            description="in lead times"
            labelColor="text-[#FF9800]"
          />
          <StatCard
            target={25}
            suffix="%"
            label="Lower"
            description="fulfillment costs"
            labelColor="text-[#FC4C01]"
          />
          <StatCard
            target={80}
            suffix="%"
            label="Faster"
            description="supplier on-boarding"
            labelColor="text-[#FE053E]"
          />
        </ul>
      </div>
    </section>
  );
}

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
  description: string;
  labelColor: string;
}

function StatCard({ target, suffix, label, description, labelColor }: StatCardProps) {
  return (
    <li className="flex flex-col items-start justify-between gap-3 rounded-lg bg-bloom-mint p-6 min-h-[200px]">
      <div className="text-[64px] font-bold leading-none tracking-[-0.02em] text-bloom-navy md:text-[92px]">
        <AnimatedStat target={target} suffix={suffix} />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className={`text-[20px] font-normal capitalize leading-tight md:text-[24px] ${labelColor}`}>
          {label}
        </h5>
        <span className="text-[14px] leading-[20px] text-bloom-navy/70 md:text-[16px] md:leading-[22px]">
          {description}
        </span>
      </div>
    </li>
  );
}

interface AnimatedStatProps {
  target: number;
  suffix?: string;
}

/**
 * Counter that animates from 0 to `target` over ~1500ms when it
 * enters the viewport. One-shot — does not re-animate on re-entry.
 * Uses easeOutCubic for a natural deceleration.
 */
function AnimatedStat({ target, suffix }: AnimatedStatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1500;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - t) ** 3; // easeOutCubic
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
