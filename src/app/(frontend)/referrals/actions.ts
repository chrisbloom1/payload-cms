"use server";

/**
 * Server action for the referrals apply form.
 *
 * Logs structured JSON to the server console and POSTs to
 * REFERRALS_SUBMISSIONS_WEBHOOK if set (Slack/Linear compatible).
 * Honeypot field "company" blocks naive bot spam.
 */

type SubmissionResult = { ok: true } | { ok: false; error: string };

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
