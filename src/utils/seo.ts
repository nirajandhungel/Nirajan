// ─── SEO Utilities ───────────────────────────────────────────────────────────

const BASE_URL = 'https://www.nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
  author?: string;
}

/**
 * Build JSON-LD structured data for a blog post
 */
export function buildBlogJsonLd({
  title,
  description,
  coverImage,
  date,
  slug,
  tags,
  author = 'Nirajan Dhungel',
}: {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  slug: string;
  tags?: string[];
  author?: string;
}) {
  const imageUrl = coverImage.startsWith('http')
    ? coverImage
    : `${BASE_URL}${coverImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      '@type': 'Person',
      name: author,
      url: BASE_URL,
      sameAs: [
        'https://twitter.com/nirajandhungel',
        'https://linkedin.com/in/nirajandhungel',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    keywords: tags?.join(', '),
    url: `${BASE_URL}/blog/${slug}`,
    inLanguage: 'en-US',
  };
}

/**
 * Build JSON-LD for blog listing page
 */
export function buildBlogListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} - Blog`,
    url: `${BASE_URL}/blog`,
    description:
      'Insights on web development, SEO, Next.js, and digital marketing strategies.',
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: BASE_URL,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Build breadcrumb JSON-LD
 */
export function buildBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Build FAQ schema for GSO (Generative Search Optimisation)
 */
export function buildFAQJsonLd(
  faqs: { question: string; answer: string }[]
) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

/**
 * Build Article schema with publisher (Organization) for better GSO
 */
export function buildArticleJsonLd({
  title,
  description,
  coverImage,
  date,
  slug,
  tags,
  author = 'Nirajan Dhungel',
  dateModified,
}: {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  slug: string;
  tags?: string[];
  author?: string;
  dateModified?: string;
}) {
  const imageUrl = coverImage.startsWith('http')
    ? coverImage
    : `${BASE_URL}${coverImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: new Date(date).toISOString(),
    dateModified: dateModified
      ? new Date(dateModified).toISOString()
      : new Date(date).toISOString(),
    author: {
      '@type': 'Person',
      name: author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/optimized/favicon.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    keywords: tags?.join(', '),
    url: `${BASE_URL}/blog/${slug}`,
    inLanguage: 'en-US',
  };
}

/**
 * Build Person schema with areaServed: Global for GSO
 */
export function buildPersonJsonLd(author = SITE_NAME) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author,
    url: BASE_URL,
    description: 'Remote SEO & web developer from Nepal. Next.js SEO optimized websites for global startups.',
    areaServed: { '@type': 'Place', name: 'Global' },
    sameAs: [
      'https://linkedin.com/in/nirajan-dhungel',
      'https://github.com/nirajandhungel',
    ],
  };
}

/**
 * Build Service schema with areaServed: Global
 */
export function buildServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: { '@type': 'Person', name: SITE_NAME, url: BASE_URL },
    areaServed: { '@type': 'Place', name: 'Global' },
  };
}

export { BASE_URL, SITE_NAME };