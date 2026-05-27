"use server";

import { Resend } from "resend";

/**
 * Server action for the referrals apply form.
 *
 * Logs structured JSON to the server console, emails the team via Resend,
 * and POSTs to REFERRALS_SUBMISSIONS_WEBHOOK if set (Slack/Linear compatible).
 * Honeypot field "company" blocks naive bot spam.
 */

type SubmissionResult = { ok: true } | { ok: false; error: string };

const REFERRAL_RECIPIENTS = [
  "chris@bloomnetwork.ai",
  "kevin@bloomnetwork.ai",
];

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!,
  );
}

function notEmpty(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function tooLong(s: string, max: number): boolean {
  return s.length > max;
}

export async function submitReferral(
  formData: FormData,
): Promise<SubmissionResult> {
  if (notEmpty(formData.get("company")).length > 0) {
    return { ok: false, error: "Submission blocked." };
  }
  const name = notEmpty(formData.get("name"));
  const email = notEmpty(formData.get("email"));
  const role = notEmpty(formData.get("role"));
  const brand = notEmpty(formData.get("brand"));
  const brandUrl = notEmpty(formData.get("brandUrl"));
  const relationship = notEmpty(formData.get("relationship"));
  const why = notEmpty(formData.get("why"));

  if (!name) return { ok: false, error: "Your name is required." };
  if (!email) return { ok: false, error: "Email is required." };
  if (!brand) return { ok: false, error: "Tell us which brand you want to refer." };
  if (
    tooLong(name, 200) ||
    tooLong(email, 200) ||
    tooLong(brand, 200) ||
    tooLong(why, 2000) ||
    tooLong(relationship, 1000)
  ) {
    return { ok: false, error: "Submission is too long." };
  }

  const payload = {
    event: "referrals_submission",
    submittedAt: new Date().toISOString(),
    fields: { name, email, role, brand, brandUrl, relationship, why },
  };
  console.log(JSON.stringify(payload));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[referrals] RESEND_API_KEY is not set");
    return {
      ok: false,
      error:
        "We couldn't send your referral right now. Please email it to hello@bloomnetwork.ai and we'll take it from there.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ?? "noreply@bloomnetwork.ai";
    const rows = Object.entries(payload.fields)
      .filter(([, v]) => v && v.length)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#718096;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;white-space:pre-wrap;">${escapeHtml(v)}</td></tr>`,
      )
      .join("");
    await resend.emails.send({
      from: fromAddress,
      to: REFERRAL_RECIPIENTS,
      replyTo: email,
      subject: `Referral: ${brand} (from ${name})`,
      text: Object.entries(payload.fields)
        .filter(([, v]) => v && v.length)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
      html: `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif;color:#1a2238;padding:24px;max-width:600px;"><h2 style="margin:0 0 16px;">New referral application</h2><table style="border-collapse:collapse;width:100%;">${rows}</table></body></html>`,
    });
  } catch (e) {
    console.error("referrals_email_failed", e);
    return {
      ok: false,
      error:
        "Something went wrong sending your referral. Please email it to hello@bloomnetwork.ai and we'll follow up.",
    };
  }

  const webhook = process.env.REFERRALS_SUBMISSIONS_WEBHOOK;
  if (webhook) {
    try {
      const lines = Object.entries(payload.fields)
        .filter(([, v]) => v && v.length)
        .map(([k, v]) => `• *${k}*: ${v}`)
        .join("\n");
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: `New referral application from *${name}* (${email}) for *${brand}*`,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*New referral application*\n${lines}`,
              },
            },
          ],
        }),
      });
    } catch (e) {
      console.error("referrals_webhook_failed", e);
    }
  }

  return { ok: true };
}
