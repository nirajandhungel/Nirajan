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
  title: "Nirajan Dhungel | Full Stack Developer",
  description: "Portfolio showcasing my projects and skills in modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
   <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="me" href="https://www.linkedin.com/in/nirajan-dhungel" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#E9F5E9" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://nirajandhungel.com" />

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
        "https://x.com/SubashDhungel18"
      ]
    }
  ` }} />
</head>

    <body className={`bg-[#E9F5E9] transition-colors dark:bg-[#050D05] dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer ></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
