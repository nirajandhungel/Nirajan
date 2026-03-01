import type { Metadata } from 'next';
import type { ServiceData } from './servicesData';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

/**
 * Generate SEO keywords from service title, description, content heading, and benefits.
 * Adds common variants like "in Nepal", "Nepal", "Kathmandu" for local SEO.
 */
export function generateServiceKeywords(
  service: ServiceData,
  slug: string
): string[] {
  const words = new Set<string>();

  // Title words (e.g. "Website Development" -> "website development", "Website Development Nepal")
  const titleLower = service.title.toLowerCase();
  words.add(service.title);
  words.add(titleLower);
  words.add(`${service.title} Nepal`);
  words.add(`${service.title} Kathmandu`);

  // Slug-derived (e.g. "website-development-in-nepal" -> "website development in Nepal")
  const slugPhrase = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
  if (slugPhrase && slugPhrase !== service.title) {
    words.add(slugPhrase);
  }

  // Description: take first 10 meaningful words
  const descWords = service.description
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 10);
  descWords.forEach((w) => words.add(w));

  // Content heading (short phrase)
  if (service.content.heading) {
    words.add(service.content.heading);
  }

  // Benefits: first 3–4 words of each
  service.content.benefits.forEach((b) => {
    const firstWords = b.split(/\s+/).slice(0, 4).join(' ');
    if (firstWords.length > 3) words.add(firstWords);
  });

  // Common SEO phrases
  words.add('Nirajan Dhungel');
  words.add('SEO-friendly websites');
  words.add('professional services');

  return Array.from(words).filter(Boolean).slice(0, 20);
}

/**
 * Build full URL for a service page (canonical, og:url).
 */
export function getServiceCanonicalUrl(slug: string): string {
  return `${SITE_URL}/services/${slug}`;
}

/**
 * Build absolute image URL for OG/Twitter (use service content image or icon).
 */
export function getServiceImageUrl(service: ServiceData): string {
  const path = service.content.image || service.icon;
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

/**
 * Generate Next.js Metadata for a service page.
 */
export function buildServiceMetadata(
  service: ServiceData,
  slug: string
): Metadata {
  const title = `${service.title} | ${SITE_NAME}`;
  const description = service.description;
  const keywords = generateServiceKeywords(service, slug);
  const canonical = getServiceCanonicalUrl(slug);
  const imageUrl = getServiceImageUrl(service);

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} - ${SITE_NAME}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Generate JSON-LD Service schema for the page.
 */
export function buildServiceStructuredData(
  service: ServiceData,
  slug: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    image: getServiceImageUrl(service),
    url: getServiceCanonicalUrl(slug),
    provider: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    serviceType: service.title,
  };
}
