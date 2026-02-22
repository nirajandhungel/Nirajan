import { NextRequest } from "next/server";

// --- Email validation: reject malformed addresses to avoid bounces and abuse ---
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
    if (typeof email !== "string" || email.length > 254) return false;
    return EMAIL_REGEX.test(email.trim());
}

// --- HTML escaping: prevent XSS when rendering user input in emails ---
const HTML_ESCAPE_MAP: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
};

export function escapeHtml(text: string): string {
    if (typeof text !== "string") return "";
    return text.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] ?? char);
}

// --- Rate limiting: in-memory store per IP (no Redis); limits abuse and spam ---
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_DEFAULT = 5; // configurable per-route

export function getClientIP(request: NextRequest): string {
    const cfIP = request.headers.get("cf-connecting-ip");
    const realIP = request.headers.get("x-real-ip");
    const forwarded = request.headers.get("x-forwarded-for");
    if (cfIP) return cfIP;
    if (realIP) return realIP;
    if (forwarded) return forwarded.split(",")[0].trim();
    return "unknown";
}

export function checkRateLimit(
    ip: string,
    maxRequests: number = MAX_REQUESTS_DEFAULT,
    windowMs: number = RATE_LIMIT_WINDOW_MS
): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();

    // Periodic cleanup to avoid unbounded memory growth
    if (rateLimitStore.size > 10_000) {
        for (const [key, value] of rateLimitStore.entries()) {
            if (now > value.resetTime) rateLimitStore.delete(key);
        }
    }

    const record = rateLimitStore.get(ip);
    if (!record || now > record.resetTime) {
        rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
        return { allowed: true };
    }

    if (record.count >= maxRequests) {
        const retryAfter = Math.ceil((record.resetTime - now) / 1000);
        return { allowed: false, retryAfter };
    }

    record.count++;
    return { allowed: true };
}
