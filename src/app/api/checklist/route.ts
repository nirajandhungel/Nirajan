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

// Rate limit: 5 requests per minute per IP for checklist (slightly higher than contact)
const CHECKLIST_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

// Public URL for the SEO checklist PDF (ready-to-download)
const SEO_CHECKLIST_PDF_URL = "https://www.nirajandhungel.com.np/downloads/seo-checklist.pdf";

interface ChecklistBody {
    email?: string;
    name?: string;
    website?: string;
}

function buildChecklistEmailHTML(email: string, name?: string, website?: string): string {
    const displayName = name?.trim() ? escapeHtml(name.trim()) : escapeHtml(email);
    const websiteNote =
        website != null && String(website).trim() !== ""
            ? `<p>You mentioned your site: <strong>${escapeHtml(String(website).trim())}</strong>. I'll review it and send you a personalised audit with actionable fixes.</p>`
            : "";

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #1a1a1a; margin: 0 0 10px 0; font-size: 24px;">Here is your Free SEO Checklist!</h1>
    <p style="color: #666; margin: 0; font-size: 14px;">Actionable steps to improve your site's search rankings.</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
    <p>Hi ${displayName},</p>
    <p>Thank you for requesting the SEO checklist.</p>
    ${websiteNote}
    <p>You can download it using the button below:</p>
    <div style="margin: 30px 0; text-align: center;">
      <a href="${escapeHtml(SEO_CHECKLIST_PDF_URL)}" style="display:inline-block; padding: 12px 24px; background-color: #c41e3a; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">Download SEO Checklist (PDF)</a>
    </div>
    <p>If you have any questions or want a deeper SEO audit, feel free to book a strategy call!</p>
    <p>Best,<br/>Nirajan Dhungel</p>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
    try {
        const clientIP = getClientIP(request);

        // Rate limiting: reduce abuse and bulk downloads
        const rateLimit = checkRateLimit(clientIP, CHECKLIST_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS);
        if (!rateLimit.allowed) {
            return NextResponse.json(
                { success: false, message: "Too many requests. Please try again in a minute." },
                {
                    status: 429,
                    headers: rateLimit.retryAfter
                        ? { "Retry-After": String(rateLimit.retryAfter) }
                        : undefined,
                }
            );
        }

        const body = (await request.json()) as ChecklistBody;
        const email = body.email != null ? String(body.email).trim() : "";

        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email is required." },
                { status: 400 }
            );
        }

        // Email validation: avoid malformed addresses
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        const resend = getResend();
        if (!resend) {
            console.error("[Checklist] RESEND_API_KEY is not configured");
            return NextResponse.json(
                { success: false, message: "We're temporarily unable to send the checklist. Please try again later." },
                { status: 500 }
            );
        }

        const name = body.name != null ? String(body.name).trim() : undefined;
        const website = body.website != null ? String(body.website).trim() : undefined;

        // Single email to user with PDF link; wrapped in try/catch so send errors don't leak to client
        const { data, error } = await resend.emails.send({
            from: "Nirajan Dhungel <contact@mail.nirajandhungel.com.np>",
            to: [email],
            subject: "Your Free SEO Checklist",
            html: buildChecklistEmailHTML(email, name, website),
        });

        if (error) {
            console.error("[Checklist] Resend error:", error);
            return NextResponse.json(
                { success: false, message: "We couldn't send the checklist. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Checklist sent! Check your inbox for the download link.",
            id: data?.id,
        });
    } catch (error) {
        console.error("[Checklist] Unexpected error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
