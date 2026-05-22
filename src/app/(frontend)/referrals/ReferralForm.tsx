"use client";

import { useState, useTransition } from "react";
import { submitReferral } from "./actions";

export function ReferralForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<
    { ok: true } | { ok: false; error: string } | null
  >(null);

  const handle = (formData: FormData) => {
    startTransition(async () => {
      setResult(await submitReferral(formData));
    });
  };

  if (result?.ok) {
    return (
      <div className="mt-10 rounded-2xl bg-bloom-mint p-10 text-center text-bloom-navy">
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-bloom-orange uppercase">
          THANK YOU
        </span>
        <h3 className="mt-3 text-[28px] leading-[1.15] font-semibold tracking-tight sm:text-[32px]">
          We got it.
        </h3>
        <p className="mt-4 text-[15px] leading-[1.6] text-bloom-muted">
          We review every application. Expect to hear back within a week.
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-8 inline-block rounded-full border border-bloom-navy/20 bg-white px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bloom-navy uppercase transition-colors hover:border-bloom-navy/40"
        >
          Refer another brand
        </button>
      </div>
    );
  }

  return (
    <form action={handle} className="mt-10 flex flex-col gap-4">
      {result?.ok === false && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[14px] text-red-900">
          {result.error}
        </div>
      )}
      {/* honeypot */}
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[10000px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <Field name="name" required placeholder="Your full name" />
      <Field name="email" type="email" required placeholder="Your email" />
      <Field name="role" placeholder="Your role / company (optional)" />

      <Field name="brand" required placeholder="The brand you want to refer" />
      <Field name="brandUrl" type="url" placeholder="Their website (optional)" />

      <Textarea
        name="why"
        required
        rows={5}
        placeholder="How are you connected to the hardware ecosystem? Why is this brand a fit for Bloom?"
      />

      <button
        type="submit"
        disabled={pending}
        className="bg-bloom-cta mt-4 inline-block w-full rounded-lg px-8 py-5 text-[16px] font-extrabold tracking-tight text-white shadow-bloom-card transition-transform hover:scale-[1.01] disabled:scale-100 disabled:opacity-50"
      >
        {pending ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}

function Field({
  name,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="h-14 rounded-lg border border-transparent bg-bloom-grey/60 px-5 text-[15px] text-bloom-navy placeholder:text-bloom-muted/80 focus:border-bloom-navy/30 focus:bg-white focus:outline-none"
    />
  );
}

function Textarea({
  name,
  required,
  placeholder,
  rows = 4,
}: {
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="rounded-lg border border-transparent bg-bloom-grey/60 px-5 py-4 text-[15px] leading-[1.55] text-bloom-navy placeholder:text-bloom-muted/80 focus:border-bloom-navy/30 focus:bg-white focus:outline-none"
    />
  );
}
