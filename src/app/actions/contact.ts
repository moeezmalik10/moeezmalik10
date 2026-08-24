"use server";

import { z } from "zod";
import { sendContactEmail } from "@/lib/email/resend";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactFormState, Locale } from "@/types";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["en", "ur", "ru"]).default("en"),
});

const messages: Record<Locale, { invalid: string; sendFailed: string; success: (name: string) => string }> = {
  en: {
    invalid: "Please fill in your name, a valid email, and a message of at least 10 characters.",
    sendFailed: "Couldn't send that right now — please try WhatsApp or email me directly.",
    success: (name) => `Thanks, ${name} — your message is on its way. I'll reply soon.`,
  },
  ur: {
    invalid: "براہِ کرم اپنا نام، ایک درست ای میل، اور کم از کم 10 حروف کا پیغام درج کریں۔",
    sendFailed: "ابھی پیغام نہیں بھیجا جا سکا — براہِ کرم WhatsApp یا ای میل کے ذریعے براہِ راست رابطہ کریں۔",
    success: (name) => `شکریہ، ${name} — آپ کا پیغام روانہ کر دیا گیا ہے۔ میں جلد جواب دوں گا۔`,
  },
  ru: {
    invalid: "Meherbani karke apna naam, ek valid email, aur kam az kam 10 harfon ka message darj karein.",
    sendFailed: "Abhi message nahi bheja ja saka — meherbani karke WhatsApp ya email ke zariye seedha rabta karein.",
    success: (name) => `Shukriya, ${name} — aap ka message rawana kar diya gaya hai. Main jald jawab dunga.`,
  },
};

/**
 * Server Action bound to the contact form via `useFormState`. Validates,
 * emails via Resend, and best-effort logs the submission to Supabase (a
 * logging failure never blocks the actual email from going out). The
 * returned status message is localized to whatever language the visitor
 * had selected (passed through as a hidden "locale" field).
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    locale: formData.get("locale"),
  });

  if (!parsed.success) {
    const locale = (formData.get("locale") as Locale) || "en";
    return { status: "error", message: messages[locale].invalid };
  }

  const { name, email, message, locale } = parsed.data;

  try {
    await sendContactEmail({ name, email, message });
  } catch (error) {
    console.error("[submitContactForm] Resend failed", error);
    return { status: "error", message: messages[locale].sendFailed };
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

  return { status: "success", message: messages[locale].success(name) };
}
