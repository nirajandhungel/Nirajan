import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ClientWrapper from './ClientWrapper'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CursorProvider } from "../providers/CursorProvider";

// import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { CONTACT } from "@/data/contact"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap', // Better for CLS
  preload: true,
});

// ========== DYNAMIC METADATA IMPROVEMENTS ==========
// Consider fetching these from CMS or API
const SITE_URL = 'https://nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // Required for proper URL resolution
  
  title: {
    default: 'Nirajan Dhungel | Software Engineer & Web Developer in Kathmandu, Nepal',
    template: '%s | Nirajan Dhungel',
  },
  
  description: 'Expert Software Engineer and Full Stack Developer in Kathmandu, Nepal. Professional website development, mobile app development, and SEO services for businesses. Ranking top for IT services in Nepal.',
  
  keywords: [
    'Nirajan Dhungel', 'Software Developer Kathmandu Nepal', 'Software Engineer Kathmandu',
    'Freelance App Developer Nepal', 'Website Development Nepal', 'Web & App Development Services Kathmandu',
    'Best Web Developer in Nepal', 'React Developer Kathmandu', 'Next.js Expert Nepal',
    'IT Services Kathmandu', 'Software Solutions Nepal',
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
    title: 'Nirajan Dhungel | Full Stack Developer',
    description: 'Expert Full Stack Developer building modern, fast, and scalable web applications with React, Next.js & TypeScript. View my portfolio and latest projects.',
    images: [
      {
        url: '/nirajandhungel3.png',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel - Digital Services Portfolio',
      },
    ],
    emails: [CONTACT.email],
    phoneNumbers: [CONTACT.phone.display],
    countryName: 'Nepal',
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@SubashDhungel18',
    creator: '@SubashDhungel18',
    title: 'Nirajan Dhungel | Full Stack Developer',
    description: 'Web developer sharing projects and blogs on React, Next.js, and AI.',
    images: ['/nirajandhungel3.png'],
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
  // ========== ICONS & PWA ==========
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  // ========== ADDITIONAL SEO ==========
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: [
        `mailto:${CONTACT.email}`,
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
// Extract to separate file for maintainability
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Nirajan Dhungel",
      "description": " Software Engineer and Web Developer specializing in Website Development, App Development, and SEO Services in Kathmandu, Nepal.",
      "url": SITE_URL,
      "image": [
        `${SITE_URL}/nirajandhungel.jpeg`,
        `${SITE_URL}/nirajandhungel2.jpeg`,
        `${SITE_URL}/nirajandhungel3.png`,
        `${SITE_URL}/kathmandu-youth-conclave.jpeg`
      ],
      "email": CONTACT.email,
      "telephone": CONTACT.phone.display,
      "jobTitle": "Software Engineer, Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": SITE_NAME
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "addressCountry": "NP",
        "postalCode": "44600"
      },
      "knowsAbout": [
        "Website Development",
        "Mobile App Development",
        "Search Engine Optimization",
        "Software Engineering",
        "React",
        "Next.js",
        "Nepal IT Market"
      ],
      "sameAs": [
        "https://github.com/nirajandhungel",
        "https://www.linkedin.com/in/nirajan-dhungel",
        "https://x.com/SubashDhungel18",
        "https://www.instagram.com/nirajandhungel.exe",
        "https://www.facebook.com/subash.dhungel.712",
        "https://medium.com/@nirajandhungel"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": "Professional Software Development Services in Kathmandu, Nepal",
      "publisher": { "@id": `${SITE_URL}/#person` },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "serviceType": "Software Development",
      "provider": { "@id": `${SITE_URL}/#person` },
      "areaServed": "Nepal",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software & Web Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Optimization"
            }
          }
        ]
      }
    }
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QPW4V2HWFE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QPW4V2HWFE');
            `,
          }}
        />
        {/* ========== PERFORMANCE OPTIMIZATION ========== */}
        {/* Preconnect critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical assets */}

        
        {/* ========== STRUCTURED DATA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          key="structured-data"
        />
        
        {/* ========== ADDITIONAL SCHEMAS ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nirajan Dhungel",
              "description": metadata.description,
              "url": SITE_URL,
              "telephone": "+977-9825883910",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati Province",
                "addressCountry": "NP"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "05:00",
                "closes": "21:00"
              },
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Nepal"
              }
            })
          }}
          key="service-schema"
        />
        
        {/* ========== MOBILE OPTIMIZATION ========== */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Nirajan Dhungel" />
        
        {/* ========== SECURITY HEADERS (via next.config.js) ========== */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      
      <body className={`
        font-sans antialiased 
        bg-background 
        text-foreground
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
                className="text-primary hover:underline"
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