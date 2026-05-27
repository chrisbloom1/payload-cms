"use client";

import { Popover } from "@base-ui/react/popover";
import { GLOSSARY } from "./glossaryTerms";

export function Term({ children }: { children: string }) {
  const key = String(children).trim();
  const def = GLOSSARY[key];
  if (!def) return <>{children}</>;
  return (
    <Popover.Root>
      <Popover.Trigger
        render={(props) => (
          <button
            {...props}
            type="button"
            className="border-b border-dotted border-bloom-navy/40 text-bloom-navy underline-offset-2 hover:border-solid"
          >
            {children}
          </button>
        )}
      />
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={6}>
          <Popover.Popup className="z-50 max-w-[280px] rounded-xl border border-bloom-grey bg-white p-3 text-[13px] leading-[1.5] text-bloom-navy shadow-lg outline-none">
            <div className="mb-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-bloom-orange uppercase">
              {key}
            </div>
            {def}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
