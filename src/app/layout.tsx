import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ClientWrapper from './ClientWrapper'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CursorProvider } from "../providers/CursorProvider";
import { personSchema, professionalServiceSchema, websiteSchema } from '@/lib/structured-data';

// import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap', // Better for CLS
  preload: true,
});

// ========== DYNAMIC METADATA IMPROVEMENTS ==========
// Consider fetching these from CMS or API
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // Required for proper URL resolution
  
  title: {
    default: 'Nirajan Dhungel | Web Developer & Full Stack Developer in Nepal',
    template: '%s | Nirajan Dhungel',
  },
  
  description: 'Nirajan Dhungel is a professional Web Developer and Full Stack Developer in Kathmandu, Nepal. Offering expert website development services using React, Next.js, Node.js & TypeScript. Transform your business with modern web solutions.',
  
  keywords: [
    'Nirajan Dhungel',
    'Web Developer Nirajan Dhungel',
    'Full Stack Developer Nirajan Dhungel',
    'Website Development Services',
    'Website Development Services Nepal',
    'Web Developer Nepal',
    'Web Developer Kathmandu',
    'Full Stack Developer Nepal',
    'React Developer Nepal',
    'Next.js Developer Nepal',
    'Professional Web Developer',
    'Custom Website Development',
    'MERN Stack Developer',
    'Software Engineer Nepal',
  ],
  
  authors: [{ name: 'Nirajan Dhungel', url: SITE_URL }],
  creator: 'Nirajan Dhungel',
  publisher: 'Nirajan Dhungel',
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
      'notranslate': true,
    },
  },
  
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Nirajan Dhungel | Web Developer & Website Development Services',
    description: 'Professional Web Developer Nirajan Dhungel offers expert website development services in Nepal. Specializing in React, Next.js & TypeScript. View portfolio and get a custom web solution.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel - Digital Services Portfolio',
      },
    ],
    emails: ['info@nirajandhungel.com.np'],
    phoneNumbers: ['+977-9825883910'],
    countryName: 'Nepal',
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@SubashDhungel18',
    creator: '@SubashDhungel18',
    title: 'Nirajan Dhungel | Web Developer & Full Stack Developer',
    description: 'Professional Web Developer offering website development services. Expert in React, Next.js, Node.js & modern web technologies.',
    images: ['/og-image.png'],
  },
  
  // ========== MODERN SEO TAGS ==========
  category: 'Technology & Computing',
  classification: 'Web Development, Digital Marketing, SEO Services',
  
  // ========== APP INTEGRATION ==========
  appleWebApp: {
    capable: true,
    title: 'Nirajan Dhungel',
    statusBarStyle: 'black-translucent',
  },
  
  // ========== ICONS & PWA ==========
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  
  manifest: '/manifest.json',
  
  // ========== ADDITIONAL SEO ==========
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: [
        'mailto:info@nirajandhungel.com.np',
        SITE_URL,
      ],
    },
  },
  
  // ========== SEARCH ENGINE SPECIFIC ==========
  other: {
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'facebook-domain-verification': 'your-facebook-verification',
    'p:domain_verify': 'your-pinterest-verification',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  colorScheme: 'light dark',
}

// ========== SCHEMA.ORG DATA ==========
// Using centralized structured data from lib
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    professionalServiceSchema,
    websiteSchema
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* ========== PERFORMANCE OPTIMIZATION ========== */}
        {/* Preconnect critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/hero-bg.jpg"
          imageSrcSet="/images/hero-bg-400.jpg 400w, /images/hero-bg-800.jpg 800w, /images/hero-bg-1200.jpg 1200w"
          imageSizes="(max-width: 768px) 100vw, 1200px"
        />
        
        {/* ========== STRUCTURED DATA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          key="structured-data"
        />
        

        
        {/* ========== MOBILE OPTIMIZATION ========== */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Nirajan Dhungel" />
        
        {/* ========== SECURITY HEADERS (via next.config.js) ========== */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      
      <body className={`
        font-sans antialiased 
        bg-linear-to-br from-blue-50 via-white to-emerald-50 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        text-gray-900 dark:text-gray-100
        min-h-screen
      `}>
        {/* ========== ACCESSIBILITY SKIP LINK ========== */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
          focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white 
          focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        
        <main 
          id="main-content"
          className="min-h-screen "
          role="main"
        >
          <CursorProvider>

          <ClientWrapper>
          {children}
        </ClientWrapper>
          </CursorProvider>

          {/* {children} */}
        </main>
        
        {/* ========== PERFORMANCE & ANALYTICS ========== */}
        <Analytics />
        {/* <SpeedInsights /> */}
        
        {/* ========== PROGRESSIVE ENHANCEMENT ========== */}
        <noscript>
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
            <div className="max-w-md text-center">
              <h1 className="text-2xl font-bold mb-4">JavaScript is disabled</h1>
              <p className="mb-4">
                This website works best with JavaScript enabled. Please enable JavaScript 
                for the full experience.
              </p>
              <a 
                href="https://www.enable-javascript.com/" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn how to enable JavaScript
              </a>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  )
}