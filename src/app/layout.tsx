import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirajan Dhungel | Full Stack Developer in Kathmandu, Nepal",
  description:
    "Expert Full Stack Developer specializing in React, Next.js, Node.js & TypeScript. Building high-performance web applications with modern tech stack. Based in Kathmandu, Nepal.",
   keywords: [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Web Developer Nepal",
  "MERN Stack",
  "Nirajan Dhungel",
  "Kathmandu Developer",
  "Node.js Developer"
],

  authors: [{ name: "Nirajan Dhungel" }],
  creator: "Nirajan Dhungel",
  publisher: "Nirajan Dhungel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    openGraph: {
    title: "Nirajan Dhungel | Full Stack Developer",
    description:
      "Expert Full Stack Developer building modern, fast, and scalable web applications with React, Next.js & TypeScript. View my portfolio and latest projects.",
    url: "https://nirajandhungel.com.np",
    siteName: "Nirajan Dhungel Portfolio",
    images: [
      {
        url: "https://nirajandhungel.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nirajan Dhungel - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SubashDhungel18",
    title: "Nirajan Dhungel | Full Stack Developer",
    description: "Web developer sharing projects and blogs on React, Next.js, and AI.",
    images: ["https://nirajandhungel.com.np/og-image.png"],
  },
    alternates: {
    canonical: "https://nirajandhungel.com.np",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<head>
   <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="me" href="https://www.linkedin.com/in/nirajan-dhungel" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#E9F5E9" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nirajandhungel.com.np" />

        {/* Preload critical assets */}
      <link rel="preload" href="/og-image.png" as="image" />
      <link rel="preload" href="/favicon.png" as="image" />

  {/* Structured Data */}

  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nirajan Dhungel",
      "url": "https://nirajandhungel.com.np",
      "sameAs": [
        "https://www.linkedin.com/in/nirajan-dhungel",
        "https://github.com/nirajandhungel",
        "https://www.instagram.com/nirajan.dhungel19",
        "https://www.facebook.com/subash.dhungel.712",
        "https://x.com/SubashDhungel18",
        "https://medium.com/@nirajandhungel"
      ],

      "jobTitle": "Full Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "knowsAbout": [
            "Web Development",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Full Stack Development"
          ],
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kathmandu",
              "addressCountry": "Nepal"
            }
          }

    }
  ` }} />
</head>

    <body className={`bg-[#E9F5E9] transition-colors dark:bg-[#050D05] dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-green-900/20 dark:to-blue-900/20">
            {children}
          </main>
          <Footer ></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
