import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // =====================
  // MDX Support
  // =====================
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

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
    qualities: [75, 90],
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
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vercel.com https://vitals.vercel-insights.com",
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
    optimizePackageImports: [
      'react-icons/fa',
      'react-icons/fa6',
      'react-icons/si',
    ],
  },

  // =====================
  // Production Optimization
  // =====================
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // =====================
  // Webpack Optimization (Production only)
  // =====================
  webpack: (config, { isServer, dev }) => {
    // Only apply custom webpack config in production builds
    if (dev) return config;

    // Optimize bundle splitting
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Separate chunk for React
            react: {
              name: 'react',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
            },
            // Separate chunk for UI libraries
            ui: {
              name: 'ui',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](@radix-ui|framer-motion|lucide-react)[\\/]/,
              priority: 25,
            },
          },
        },
      };
    }

    // Analyze bundle size (when ANALYZE=true)
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: isServer
            ? '../analyze/server.html'
            : './analyze/client.html',
          openAnalyzer: true,
        })
      );
    }

    return config;
  },

  // =====================
  // Turbopack Configuration (Next.js 16+)
  // =====================
  turbopack: {
    // Empty config to silence the warning
    // Turbopack handles optimization automatically
  },

  // =====================
  // Performance Budgets
  // =====================
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Adds support for GitHub Flavored Markdown (tables, task lists, etc.)
      ['remark-gfm', {}],
      // Adds support for frontmatter (YAML)
      ['remark-frontmatter', ['yaml']],
      // Removes frontmatter from the MDX output
      ['remark-mdx-frontmatter', { name: 'frontmatter' }],
    ],
    rehypePlugins: [
      // Adds IDs to headings
      ['rehype-slug', {}],
      // Adds syntax highlighting
      [
        'rehype-pretty-code',
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
      // Adds links to headings
      [
        'rehype-autolink-headings',
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)