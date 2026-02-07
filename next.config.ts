import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // =====================
  // TypeScript Safety
  // =====================
  typescript: {
    ignoreBuildErrors: false,
  },

  // =====================
  // Image Optimization (SEO + LCP)
  // =====================
  images: {
    formats: ["image/avif", "image/webp"] as const,
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // quality: 80,
    // ADD THIS to handle www redirects
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'nirajandhungel.com.np',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'www.nirajandhungel.com.np',
        pathname: '/**',
      },
    ],
  },

  // =====================
  // Compression
  // =====================
  compress: true,

  // =====================
  // SEO & Security Headers
  // =====================
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://vercel.com https://vitals.vercel-insights.com",
              "frame-src https://vercel.live",
              "worker-src 'self' blob:",
              "media-src 'self'",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Add these for performance
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "X-Download-Options", value: "noopen" },
        ],
      },
      // Special headers for sitemap
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
      {
        source: "/sitemap-images.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
    ]
  },

  // =====================
  // Redirects (Fix www issue)
  // =====================
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ]
  },

  // =====================
  // Canonical URL Handling
  // =====================
  trailingSlash: false,

  // =====================
  // Experimental
  // =====================
  experimental: {
    scrollRestoration: true,
  },
  
  // =====================
  // Production Optimization
  // =====================
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig