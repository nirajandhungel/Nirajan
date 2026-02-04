import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend lazily to avoid build-time errors when API key is missing
let resendInstance: Resend | null = null;

function getResend() {
    if (!resendInstance && process.env.RESEND_API_KEY) {
        resendInstance = new Resend(process.env.RESEND_API_KEY);
    }
    return resendInstance;
}

// Rate limiting store (in-memory - for production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit config
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

// Recipient email
const RECIPIENT_EMAIL = "subashdhungel555@gmail.com";

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    subject?: string;
    service?: string;
    formSource: "Quick Enquiry" | "Contact Page";
    honeypot?: string; // Hidden field for spam detection
}

function getClientIP(request: NextRequest): string {
    // Try various headers for IP detection
    const forwarded = request.headers.get("x-forwarded-for");
    const realIP = request.headers.get("x-real-ip");
    const cfIP = request.headers.get("cf-connecting-ip");

    if (cfIP) return cfIP;
    if (realIP) return realIP;
    if (forwarded) return forwarded.split(",")[0].trim();

    return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();
    const record = rateLimitStore.get(ip);

    // Clean up expired entries periodically
    if (rateLimitStore.size > 10000) {
        for (const [key, value] of rateLimitStore.entries()) {
            if (now > value.resetTime) {
                rateLimitStore.delete(key);
            }
        }
    }

    if (!record || now > record.resetTime) {
        // Create new record or reset expired one
        rateLimitStore.set(ip, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        });
        return { allowed: true };
    }

    if (record.count >= MAX_REQUESTS) {
        const retryAfter = Math.ceil((record.resetTime - now) / 1000);
        return { allowed: false, retryAfter };
    }

    // Increment count
    record.count++;
    return { allowed: true };
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
    <p style="color: #666; margin: 0; font-size: 14px;">Source: ${data.formSource}</p>
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
      ${data.phone
            ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Phone:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
          <a href="tel:${escapeHtml(data.phone)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(data.phone)}</a>
        </td>
      </tr>
      `
            : ""
        }
      ${data.subject
            ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Subject:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #1a1a1a;">${escapeHtml(data.subject)}</td>
      </tr>
      `
            : ""
        }
      ${data.service
            ? `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #555;">Service:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #1a1a1a;">${escapeHtml(data.service)}</td>
      </tr>
      `
            : ""
        }
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #555; vertical-align: top;">Message:</td>
        <td style="padding: 12px 0; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; font-size: 12px; color: #666;">
    <p style="margin: 0;">This message was sent from the <strong>${data.formSource}</strong> on your website.</p>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char] || char);
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const clientIP = getClientIP(request);

        // Check rate limit
        const rateLimit = checkRateLimit(clientIP);
        if (!rateLimit.allowed) {
            // Silently fail for potential spam (return success to not reveal rate limiting)
            return NextResponse.json(
                { success: true, message: "Message sent successfully." },
                { status: 200 }
            );
        }

        // Parse request body
        const body: ContactFormData = await request.json();

        // Honeypot check - if filled, it's likely a bot
        if (body.honeypot && body.honeypot.trim() !== "") {
            // Silently fail for spam bots (return success to not reveal detection)
            return NextResponse.json(
                { success: true, message: "Message sent successfully." },
                { status: 200 }
            );
        }

        // Validate required fields
        if (!body.name || !body.email || !body.message || !body.formSource) {
            return NextResponse.json(
                { success: false, message: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { success: false, message: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        // Validate form source
        if (!["Quick Enquiry", "Contact Page"].includes(body.formSource)) {
            return NextResponse.json(
                { success: false, message: "Invalid form source." },
                { status: 400 }
            );
        }

        // Check if Resend API key is configured
        const resend = getResend();
        if (!resend) {
            console.error("RESEND_API_KEY is not configured");
            return NextResponse.json(
                {
                    success: false,
                    message: "Email service is not configured. Please try again later.",
                },
                { status: 500 }
            );
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: "Website Contact <onboarding@resend.dev>",
            to: [RECIPIENT_EMAIL],
            reply_to: body.email,
            subject: `New Website Enquiry — ${body.formSource}`,
            html: generateEmailHTML(body),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                {
                    success: false,
                    message: "Failed to send message. Please try again later.",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message:
                "Your message has been sent successfully. We'll get back to you shortly.",
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "An unexpected error occurred. Please try again later.",
            },
            { status: 500 }
        );
    }
}
