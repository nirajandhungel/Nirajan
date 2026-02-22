import type { Metadata, Viewport } from 'next'
import { Poppins, Outfit, Lora, JetBrains_Mono, Big_Shoulders, Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import ClientWrapper from './ClientWrapper'

import { CursorProvider } from "../providers/CursorProvider";
import { ServiceWorkerRegistration } from "../components/ServiceWorkerRegistration";
import { WebVitalsMonitor } from "../components/WebVitalsMonitor";

import './globals.css'
import { CONTACT } from "@/data/contact"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
  preload: false,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
})

// JetBrains Mono — high-contrast for code blocks
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
})

// Lora — editorial serif for blog content
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
  preload: false, // Only needed on blog pages
})

// Big Shoulders — reference site primary display font (planetofmetal.com uses Big Shoulders Display)
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

// Noto Sans — reference site secondary/body font (Latin equivalent of Noto Sans JP)
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
})

// ========== DYNAMIC METADATA IMPROVEMENTS ==========
const SITE_URL = 'https://nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // Required for proper URL resolution
  
  title: {
    default: 'Nirajan Dhungel | Full Stack Developer & Co-founder at Lingo Tech Solutions',
    template: '%s | Nirajan Dhungel - Expert Software Engineer',
  },
  
  description: 'Portfolio of Nirajan Dhungel, Full Stack Developer and Co-founder of Lingo Tech Solutions. Expert in building SEO-optimised web applications and digital products.',
  
  keywords: [
    'Nirajan Dhungel', 
    'Full Stack Developer Nepal',
    'Lingo Tech Solutions Co-founder',
    'CTO Kathmandu',
    'Next.js SEO Expert',
    'React Developer Kathmandu',
    'Custom Software Development Nepal',
    'SEO Optimization Services',
    'Best Software Engineer in Nepal',
    'IT Consultant Kathmandu'
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
    title: 'Nirajan Dhungel | Expert Software Engineer & Web Developer in Nepal',
    description: 'Looking for the best software engineer in Nepal? Nirajan Dhungel delivers high-performance websites, mobile apps, and SEO solutions tailored to your business needs.',
    images: [
      {
        url: '/optimized/nirajandhungel3.webp',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel - Professional Software Engineer in Nepal',
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
    title: 'Nirajan Dhungel | Software Engineer & Tech Consultant',
    description: 'Expert web and mobile app development services in Nepal by Nirajan Dhungel. Transforming ideas into digital reality.',
    images: ['/optimized/nirajandhungel3.webp'],
  },
  
  // ========== MODERN SEO TAGS ==========
  category: 'Technology & Computing',
  classification: 'Software Development, Web Design, SEO Services, IT Consulting',
  
  // ========== APP INTEGRATION ==========
  appleWebApp: {
    capable: true,
    title: 'Nirajan Dhungel',
    statusBarStyle: 'black-translucent',
  },
  
  // ========== ICONS & PWA ==========
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/optimized/favicon.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: '/optimized/favicon.webp',
    other: [
      {
        rel: 'icon',
        type: 'image/webp',
        sizes: '192x192',
        url: '/optimized/android-chrome-192x192.webp',
      },
      {
        rel: 'icon',
        type: 'image/webp',
        sizes: '512x512',
        url: '/optimized/android-chrome-512x512.webp',
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
      "description": "Full Stack Developer and Co-founder of Lingo Tech Solutions, specializing in building robust, scalable web applications and SEO-optimized digital platforms.",
      "url": SITE_URL,
      "image": [
        `${SITE_URL}/nirajandhungel.jpeg`,
        `${SITE_URL}/nirajandhungel3.png`,
      ],
      "email": CONTACT.email,
      "telephone": CONTACT.phone.display,
      "jobTitle": "Full Stack Developer & CTO",
      "worksFor": {
        "@type": "Organization",
        "name": "Lingo Tech Solutions",
        "url": "https://lingotechsolutions.com/"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "addressCountry": "NP"
      },
      "areaServed": { "@type": "Place", "name": "Global" },
      "knowsAbout": [
        "Full Stack Development",
        "Next.js",
        "React",
        "Node.js",
        "SEO Optimization",
        "Software Engineering"
      ],
      "sameAs": [
        "https://linkedin.com/in/nirajan-dhungel",
        "https://github.com/nirajandhungel",
        "https://nirajandhungel.com.np",
        "https://lingotechsolutions.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Nirajan Dhungel",
      "description": "Expert Software Engineering, UI/UX Design & SEO Optimization",
      "publisher": { "@id": `${SITE_URL}/#person` },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/blog?query={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },

    {
      "@type": "Service",
      "serviceType": "Software Development",
      "provider": { "@id": `${SITE_URL}/#person` },
      "areaServed": "Global",
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
      className={`${poppins.variable} ${outfit.variable} ${lora.variable} ${jetbrainsMono.variable} ${bigShoulders.variable} ${notoSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* ========== CRITICAL PERFORMANCE OPTIMIZATION ========== */}
        {/* ========== CRITICAL PERFORMANCE OPTIMIZATION ========== */}

        {/* Prefetch after load - use low priority to avoid competing with LCP */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/contact" />
        
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

        <meta name="yandex-verification" content="172b32e8df31e24a" />
        
        {/* ========== SECURITY HEADERS (via next.config.js) ========== */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      
      <body className={`
        font-sans antialiased 
        bg-black 
        text-white
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
        <ServiceWorkerRegistration />
        <WebVitalsMonitor />
        <Analytics />
        {/* <SpeedInsights /> */}
        
        {/* Google Analytics - Deferred for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QPW4V2HWFE"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QPW4V2HWFE');
          `}
        </Script>
        
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