import "./globals.css";
import Head from "next/head";
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
  description: "Portfolio showcasing my projects and skills in Next.js, Tailwind CSS, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E9F5E9" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nirajandhungel.com" />
    </Head>
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
