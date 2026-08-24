"use server";

import { z } from "zod";
import { sendContactEmail } from "@/lib/email/resend";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactFormState } from "@/types";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

/**
 * Server Action bound to the contact form via `useFormState`. Validates,
 * emails via Resend, and best-effort logs the submission to Supabase (a
 * logging failure never blocks the actual email from going out).
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Please check your input.";
    return { status: "error", message: firstError };
  }

  const { name, email, message } = parsed.data;

  try {
    await sendContactEmail({ name, email, message });
  } catch (error) {
    console.error("[submitContactForm] Resend failed", error);
    return {
      status: "error",
      message: "Couldn't send that right now — please try WhatsApp or email me directly.",
    };
  }

  try {
    const supabase = getSupabaseServerClient();
    if (supabase) {
      await supabase.from("contact_submissions").insert({ name, email, message });
    }
  } catch (error) {
    // Logging is best-effort — the email already sent, so don't fail the UX.
    console.error("[submitContactForm] Supabase log failed", error);
  }

  return { status: "success", message: `Thanks, ${name} — your message is on its way. I'll reply soon.` };
}
