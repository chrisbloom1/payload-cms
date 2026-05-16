"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const ROLE_OPTIONS = [
  { value: "hardware-brand", label: "Hardware Brand" },
  { value: "service-partner", label: "Service Partner" },
  { value: "other", label: "Other" },
] as const;

const SEEKING_OPTIONS = [
  { value: "network-access", label: "Network Access" },
  { value: "additional-information", label: "Additional Information" },
  { value: "press-contact", label: "Press Contact" },
] as const;

const FIELD_BASE_CLASSES = cn(
  "block w-full rounded-md border border-bloom-grey bg-white",
  "px-4 py-3 text-[14px] leading-[1.4] text-bloom-navy",
  "placeholder:text-bloom-muted",
  "transition-colors duration-150",
  "focus:outline-none focus:ring-2 focus:ring-bloom-navy focus:border-bloom-navy",
  "disabled:cursor-not-allowed disabled:opacity-60",
);

const LABEL_CLASSES = "block text-[14px] font-bold leading-[1.3] text-bloom-navy";

interface FieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={LABEL_CLASSES}>
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * ContactForm — client-side contact form for the Bloom site.
 *
 * Two select dropdowns (role + intent), four required text inputs,
 * a required message textarea, a privacy-policy checkbox, a honeypot
 * field, and a submit button. POSTs to /api/contact which delivers via
 * Resend.
 */
export function ContactForm() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMsg(null);
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const payload = {
      role: formData.get("role"),
      seeking: formData.get("seeking"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      website: formData.get("website"), // honeypot — bots fill this
    };
    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(
          data.error === "validation_failed"
            ? "Please check your entries and try again."
            : "Something went wrong. Please try again or email hello@bloomnetwork.ai.",
        );
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex w-full max-w-[640px] flex-col gap-5"
      aria-label="Contact Bloom"
    >
      <Field label="I am a…" htmlFor={`${formId}-role`}>
        <select
          id={`${formId}-role`}
          name="role"
          required
          defaultValue=""
          className={cn(FIELD_BASE_CLASSES, "appearance-none pr-10")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23221742' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
          }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="I am seeking…" htmlFor={`${formId}-seeking`}>
        <select
          id={`${formId}-seeking`}
          name="seeking"
          required
          defaultValue=""
          className={cn(FIELD_BASE_CLASSES, "appearance-none pr-10")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23221742' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
          }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {SEEKING_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor={`${formId}-first-name`}>
          <input
            id={`${formId}-first-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={FIELD_BASE_CLASSES}
          />
        </Field>
        <Field label="Last name" htmlFor={`${formId}-last-name`}>
          <input
            id={`${formId}-last-name`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={FIELD_BASE_CLASSES}
          />
        </Field>
      </div>

      <Field label="Email" htmlFor={`${formId}-email`}>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          className={FIELD_BASE_CLASSES}
        />
      </Field>

      <Field label="Company" htmlFor={`${formId}-company`}>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          required
          className={FIELD_BASE_CLASSES}
        />
      </Field>

      <Field label="Message" htmlFor={`${formId}-message`}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          minLength={10}
          className={cn(FIELD_BASE_CLASSES, "min-h-[8rem] resize-y")}
        />
      </Field>

      {/* Honeypot — hidden from real users, bots will fill it. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor={`${formId}-website`}>Website (leave blank)</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label
        htmlFor={`${formId}-privacy`}
        className="flex items-start gap-3 text-[14px] leading-[1.5] text-bloom-navy"
      >
        <input
          id={`${formId}-privacy`}
          name="privacy"
          type="checkbox"
          required
          className={cn(
            "mt-[3px] h-4 w-4 shrink-0 rounded border border-bloom-grey",
            "text-bloom-navy accent-bloom-navy",
            "focus:outline-none focus:ring-2 focus:ring-bloom-navy",
          )}
        />
        <span>
          Accept{" "}
          <Link
            href="/privacy"
            className="font-bold underline underline-offset-2 hover:opacity-70"
          >
            Privacy Policy
          </Link>
        </span>
      </label>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={busy}
          className={cn(
            "inline-flex w-fit items-center justify-center rounded-md",
            "bg-bloom-navy text-white uppercase tracking-[0.08em] hover:opacity-90",
            "px-8 py-3.5 text-[14px] font-bold leading-none",
            "transition-opacity duration-200",
            "focus:outline-none focus:ring-2 focus:ring-bloom-navy focus:ring-offset-2",
            "disabled:cursor-wait disabled:opacity-70",
          )}
        >
          {busy ? "SENDING…" : "SUBMIT"}
        </button>

        {submitted && (
          <p
            role="status"
            aria-live="polite"
            className="text-[14px] font-bold text-bloom-navy"
          >
            Thanks — we&apos;ll be in touch shortly.
          </p>
        )}
        {errorMsg && (
          <p
            role="alert"
            aria-live="assertive"
            className="text-[14px] font-bold text-[#c53030]"
          >
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
