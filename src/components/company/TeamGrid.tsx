"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LinkedInIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { TEAM, type TeamMember } from "@/data/team";
export type { TeamMember };
export { TEAM };

function nameLines(name: string): [string, string] {
  const parts = name.split(" ");
  if (parts.length === 1) return [parts[0], ""];
  const last = parts.pop()!;
  return [parts.join(" "), last];
}

function TeamCard({ member, onOpenBio }: { member: TeamMember; onOpenBio: (m: TeamMember) => void }) {
  const [first, last] = nameLines(member.name);

  return (
    <article
      className={cn(
        "flex w-full flex-col bg-bloom-cream p-5",
        "sm:w-[350px]",
      )}
    >
      <div className="flex h-[150px] gap-4">
        <div className="relative h-[150px] w-[150px] flex-none overflow-hidden border-2 border-white">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="150px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <h5 className="text-[24px] font-normal leading-[100%] tracking-[-0.005em] text-bloom-navy">
              {first}
              {last && (
                <>
                  <br />
                  {last}
                </>
              )}
            </h5>
            <p className="mt-3 text-[13px] leading-[120%] text-bloom-navy">
              {member.title}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="inline-flex h-5 w-5 items-center justify-center text-bloom-navy transition-opacity duration-150 hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => onOpenBio(member)}
              className="rounded-md border border-bloom-navy/20 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-bloom-navy transition-colors duration-150 hover:bg-bloom-navy hover:text-bloom-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream"
            >
              Bio
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function BioModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  // Body scroll lock while open + ESC to close
  useEffect(() => {
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const [first, last] = nameLines(member.name);

  // Portal to <body> so the fixed positioning isn't trapped inside an
  // ancestor with a transform (RevealOnScroll's will-change-transform creates
  // a containing block, breaking position: fixed for descendants).
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close bio"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-bloom-navy/60 backdrop-blur-sm transition-opacity duration-200 motion-safe:animate-[fade-in_180ms_ease-out]"
      />
      {/* Dialog */}
      <div className="relative flex max-h-[90vh] w-full max-w-[720px] flex-col overflow-hidden rounded-md bg-bloom-cream shadow-2xl ring-1 ring-bloom-navy/10 motion-safe:animate-[fade-in-up_220ms_ease-out]">
        {/* Header */}
        <div className="flex items-start gap-5 border-b border-bloom-navy/10 bg-white p-6 sm:p-8">
          <div className="relative h-[88px] w-[88px] flex-none overflow-hidden border-2 border-white shadow-bloom-card sm:h-[120px] sm:w-[120px]">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
            <h2
              id="bio-modal-title"
              className="text-[24px] font-normal leading-tight tracking-tight text-bloom-navy sm:text-[28px]"
            >
              {first}
              {last && (
                <>
                  <br />
                  {last}
                </>
              )}
            </h2>
            <p className="text-[14px] text-bloom-navy/80 sm:text-[16px]">
              {member.title}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="mt-1 inline-flex h-5 w-5 items-center justify-center text-bloom-navy transition-opacity duration-150 hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bloom-navy/5 text-bloom-navy transition-colors hover:bg-bloom-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* Bio body */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6 text-[15px] leading-[1.6] text-bloom-navy sm:p-8 sm:text-[16px] sm:leading-[1.65]">
          {member.bio.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function TeamGrid({ members }: { members?: readonly TeamMember[] } = {}) {
  const list = members && members.length > 0 ? members : TEAM;
  const [active, setActive] = useState<TeamMember | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {list.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            onOpenBio={setActive}
          />
        ))}
      </div>
      {active ? <BioModal member={active} onClose={close} /> : null}
    </>
  );
}
