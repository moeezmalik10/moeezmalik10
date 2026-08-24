import { Resend } from "resend";

let client: Resend | null = null;

function getClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — add it to .env.local");
  }
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export interface ContactEmailInput {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactEmailInput) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  if (!to) throw new Error("CONTACT_TO_EMAIL is not set");

  return getClient().emails.send({
    from: `Portfolio Contact Form <${from}>`,
    to,
    reply_to: email,
    subject: `New portfolio message from ${name}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
