import React from "react";
import { Metadata } from 'next';
import { localBusinessSchema } from "@/lib/structured-data";
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Nirajan Dhungel',
  description: 'Get in touch with Nirajan Dhungel for full-stack development, SEO, and technical consultation.',
  keywords: [
    'Contact Nirajan Dhungel',
    'Hire Software Engineer Nepal',
    'Web Developer Contact',
    'Freelance Developer Kathmandu',
    'IT Consultation Nepal'
  ],
  alternates: {
    canonical: 'https://www.nirajandhungel.com.np/contact',
  },
  openGraph: {
    title: 'Contact | Nirajan Dhungel',
    description: 'Ready to build something amazing? Contact me today for a free consultation.',
    url: 'https://www.nirajandhungel.com.np/contact',
    siteName: 'Nirajan Dhungel',
    images: [
      {
        url: '/optimized/nirajandhungel3.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Nirajan Dhungel',
      },
    ],
  },
  icons: {
    icon: '/optimized/favicon.webp',
    shortcut: '/optimized/favicon.webp',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <ContactForm />
    </>
  );
}
