import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
    escapeHtml,
    isValidEmail,
    getClientIP,
    checkRateLimit,
} from "../_lib/route-utils";

// Lazy Resend init so build succeeds when API key is missing
let resendInstance: Resend | null = null;

function getResend(): Resend | null {
    if (!resendInstance && process.env.RESEND_API_KEY) {
        resendInstance = new Resend(process.env.RESEND_API_KEY);
    }
    return resendInstance;
}

const RECIPIENT_EMAIL = "subashdhungel555@gmail.com";

// Rate limit: 3 requests per minute per IP for contact form
const CONTACT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject?: string;
    service?: string;
    formSource: "Quick Enquiry" | "Contact Page";
    honeypot?: string;
}

function generateEmailHTML(data: ContactFormData): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #1a1a1a; margin: 0 0 10px 0; font-size: 24px;">New Website Enquiry</h1>
    <p style="color: #666; margin: 0; font-size: 14px;">Source: ${escapeHtml(data.formSource)}</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555; width: 120px;">Name:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #1a1a1a;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Email:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
          <a href="mailto:${escapeHtml(data.email)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(data.email)}</a>
        </td>
      </tr>
      ${data.phone ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Phone:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
          <a href="tel:${escapeHtml(data.phone)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(data.phone)}</a>
        </td>
      </tr>
      ` : ""}
      ${data.subject ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Subject:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #1a1a1a;">${escapeHtml(data.subject)}</td>
      </tr>
      ` : ""}
      ${data.service ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Service:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #1a1a1a;">${escapeHtml(data.service)}</td>
      </tr>
      ` : ""}
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #555; vertical-align: top;">Message:</td>
        <td style="padding: 12px 0; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666;">
    <p style="margin: 0;">This message was sent from the <strong>${escapeHtml(data.formSource)}</strong> on your website.</p>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
    try {
        const clientIP = getClientIP(request);

        // Rate limiting: reduce spam and abuse; return generic success if over limit
        const rateLimit = checkRateLimit(clientIP, CONTACT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS);
        if (!rateLimit.allowed) {
            return NextResponse.json(
                { success: true, message: "Your message has been sent. We'll get back to you shortly." },
                { status: 200 }
            );
        }

        const body = (await request.json()) as ContactFormData;

        // Honeypot: hidden field filled = bot; fail silently so bots don't adapt
        if (body.honeypot != null && String(body.honeypot).trim() !== "") {
            return NextResponse.json(
                { success: true, message: "Your message has been sent. We'll get back to you shortly." },
                { status: 200 }
            );
        }

        // Required fields
        const name = body.name != null ? String(body.name).trim() : "";
        const email = body.email != null ? String(body.email).trim() : "";
        const message = body.message != null ? String(body.message).trim() : "";
        const formSource = body.formSource;

        if (!name || !email || !message || !formSource) {
            return NextResponse.json(
                { success: false, message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Email validation: avoid malformed addresses and bounces
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        if (!["Quick Enquiry", "Contact Page"].includes(formSource)) {
            return NextResponse.json(
                { success: false, message: "Invalid form source." },
                { status: 400 }
            );
        }

        const resend = getResend();
        if (!resend) {
            console.error("[Contact] RESEND_API_KEY is not configured");
            return NextResponse.json(
                { success: false, message: "We're temporarily unable to send messages. Please try again later." },
                { status: 500 }
            );
        }

        // Normalize optional fields for email (all escaped in generateEmailHTML)
        const payload: ContactFormData = {
            name,
            email,
            message,
            formSource,
            phone: body.phone != null ? String(body.phone).trim() : undefined,
            subject: body.subject != null ? String(body.subject).trim() : undefined,
            service: body.service != null ? String(body.service).trim() : undefined,
        };

        const { data, error } = await resend.emails.send({
            from: "Website Contact <contact@mail.nirajandhungel.com.np>",
            to: [RECIPIENT_EMAIL],
            reply_to: email,
            subject: `New Website Enquiry — ${formSource}`,
            html: generateEmailHTML(payload),
        });

        if (error) {
            console.error("[Contact] Resend error:", error);
            return NextResponse.json(
                { success: false, message: "We couldn't send your message. Please try again later." },
                { status: 500 }
            );
        }

        // Auto-reply: thank user; do not let failure affect main flow
        try {
            await resend.emails.send({
                from: "Nirajan Dhungel <contact@mail.nirajandhungel.com.np>",
                to: [email],
                subject: "Thanks for contacting me",
                html: `
<p>Hi ${escapeHtml(name)},</p>
<p>Thank you for reaching out. I've received your message and will reply shortly.</p>
<p>— Nirajan</p>
                `.trim(),
            });
        } catch (autoReplyErr) {
            // Log only; user already sees success
            console.error("[Contact] Auto-reply failed (non-fatal):", autoReplyErr);
        }

        return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully. We'll get back to you shortly.",
            id: data?.id,
        });
    } catch (error) {
        // Log internally; never expose stack or details to client
        console.error("[Contact] Unexpected error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
