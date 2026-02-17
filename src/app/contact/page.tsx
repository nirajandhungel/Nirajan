import React from "react";
import { Metadata } from 'next';
import { localBusinessSchema } from "@/lib/structured-data";
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Nirajan Dhungel | Software Engineer & Web Developer',
  description: 'Get in touch with Nirajan Dhungel for web development, mobile app projects, or software engineering consultation in Kathmandu, Nepal.',
  keywords: [
    'Contact Nirajan Dhungel',
    'Hire Software Engineer Nepal',
    'Web Developer Contact',
    'Freelance Developer Kathmandu',
    'IT Consultation Nepal'
  ],
  openGraph: {
    title: 'Let\'s Start Your Project | Nirajan Dhungel',
    description: 'Ready to build something amazing? Contact me today for a free consultation.',
    url: 'https://nirajandhungel.com.np/contact',
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
