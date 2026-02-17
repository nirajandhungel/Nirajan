import { Metadata } from 'next';

const SITE_URL = 'https://nirajandhungel.com.np';
const SITE_NAME = 'Nirajan Dhungel';

interface PageSEOConfig {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    ogImage?: string;
    structuredData?: Record<string, unknown>;
}

/**
 * SEO Metadata Generator for All Pages
 * Optimized for target keywords and organic visibility
 */

export const SEOMetadata = {
    // Homepage
    home: (): Metadata => ({
        title: 'Nirajan Dhungel | Software Engineer & Web Developer in Kathmandu, Nepal',
        description: 'Nirajan Dhungel is a top-tier Software Engineer and Full Stack Developer in Kathmandu, Nepal, offering expert website development, custom mobile apps, and organic SEO services to boost your business growth.',
        keywords: [
            'Nirajan Dhungel',
            'Software Engineer Kathmandu',
            'Web Developer Nepal',
            'Full Stack Developer Nepal',
            'Website Development Nepal',
            'Mobile App Development Kathmandu',
            'SEO Services Nepal',
        ],
        alternates: {
            canonical: SITE_URL,
        },
        openGraph: {
            title: 'Nirajan Dhungel | Expert Software Engineer & Web Developer in Nepal',
            description: 'Looking for the best software engineer in Nepal? Nirajan Dhungel delivers high-performance websites, mobile apps, and SEO solutions tailored to your business needs.',
            url: SITE_URL,
            siteName: SITE_NAME,
            images: [
                {
                    url: '/optimized/nirajandhungel3.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Nirajan Dhungel - Professional Software Engineer in Nepal',
                },
            ],
            type: 'website',
        },
    }),

    // About Page
    about: (): Metadata => ({
        title: 'About Nirajan Dhungel | Full Stack Developer Nepal',
        description: 'Meet Nirajan Dhungel, a passionate Full Stack Developer and Software Engineer from Kathmandu, Nepal. Specializing in React, Next.js, and modern web technologies with 2+ years of experience.',
        keywords: [
            'Nirajan Dhungel',
            'About Nirajan Dhungel',
            'Full Stack Developer Nepal',
            'Software Engineer Kathmandu',
            'React Developer Nepal',
            'Next.js Developer',
        ],
        alternates: {
            canonical: `${SITE_URL}/about`,
        },
        openGraph: {
            title: 'About Nirajan Dhungel | Full Stack Developer Nepal',
            description: 'Experienced software engineer specializing in full-stack development, delivering high-quality web solutions to clients worldwide.',
            url: `${SITE_URL}/about`,
            images: ['/optimized/nirajandhungel.webp'],
        },
    }),

    // Work/Portfolio Page
    work: (): Metadata => ({
        title: 'Portfolio: Web Developer Nepal | Nirajan Dhungel',
        description: 'Explore the portfolio of Nirajan Dhungel, showcasing successful web development projects, mobile applications, and SEO campaigns delivered to clients in Nepal and internationally.',
        keywords: [
            'Web Developer Portfolio Nepal',
            'Nirajan Dhungel Projects',
            'Website Development Portfolio',
            'Nepal Web Developer Work',
            'Full Stack Projects',
        ],
        alternates: {
            canonical: `${SITE_URL}/work`,
        },
        openGraph: {
            title: 'Portfolio: Web Developer Nepal | Nirajan Dhungel',
            description: 'View successful web development projects and applications built by Nirajan Dhungel.',
            url: `${SITE_URL}/work`,
            images: ['/optimized/media/website-development-portfolio.webp'],
        },
    }),

    // Pricing Page
    pricing: (): Metadata => ({
        title: 'Development Packages & Pricing - Nirajan Dhungel',
        description: 'Transparent pricing for web development, mobile app development, and SEO services in Nepal. Custom packages tailored to your business needs with competitive rates.',
        keywords: [
            'Web Development Pricing Nepal',
            'Website Development Cost Kathmandu',
            'App Development Pricing',
            'SEO Services Cost Nepal',
            'Development Packages Nepal',
        ],
        alternates: {
            canonical: `${SITE_URL}/pricing`,
        },
        openGraph: {
            title: 'Development Packages & Pricing - Nirajan Dhungel',
            description: 'Affordable web development and SEO packages for businesses in Nepal.',
            url: `${SITE_URL}/pricing`,
        },
    }),

    // Web Design Pricing
    webDesignPricing: (): Metadata => ({
        title: 'Web Development Packages Nepal | Nirajan Dhungel',
        description: 'Professional web development packages starting from NPR 15,000. Custom websites, e-commerce solutions, and web applications built with modern technologies.',
        keywords: [
            'Web Development Packages Nepal',
            'Website Design Pricing Kathmandu',
            'Custom Website Development',
            'E-commerce Development Nepal',
            'Web Application Development',
        ],
        alternates: {
            canonical: `${SITE_URL}/pricing/web-design`,
        },
        openGraph: {
            title: 'Web Development Packages Nepal | Nirajan Dhungel',
            description: 'Affordable and professional web development packages for businesses in Nepal.',
            url: `${SITE_URL}/pricing/web-design`,
        },
    }),

    // SEO Pricing
    seoPricing: (): Metadata => ({
        title: 'SEO Services Pricing Nepal | Nirajan Dhungel',
        description: 'Organic SEO services and packages for businesses in Nepal. Improve your Google rankings, increase traffic, and grow your online presence with proven SEO strategies.',
        keywords: [
            'SEO Services Nepal',
            'SEO Pricing Kathmandu',
            'Organic SEO Nepal',
            'Search Engine Optimization Cost',
            'Google Ranking Services Nepal',
        ],
        alternates: {
            canonical: `${SITE_URL}/pricing/seo`,
        },
        openGraph: {
            title: 'SEO Services Pricing Nepal | Nirajan Dhungel',
            description: 'Professional SEO services to boost your online visibility in Nepal.',
            url: `${SITE_URL}/pricing/seo`,
        },
    }),

    // Team Page
    team: (): Metadata => ({
        title: 'Development Team Nepal | Nirajan Dhungel',
        description: 'Meet the talented development team behind successful web projects in Nepal. Expert developers, designers, and SEO specialists working together to deliver exceptional results.',
        keywords: [
            'Development Team Nepal',
            'Web Development Team Kathmandu',
            'Nirajan Dhungel Team',
            'Software Engineers Nepal',
        ],
        alternates: {
            canonical: `${SITE_URL}/team`,
        },
        openGraph: {
            title: 'Development Team Nepal | Nirajan Dhungel',
            description: 'Expert development team delivering high-quality web solutions.',
            url: `${SITE_URL}/team`,
        },
    }),

    // Contact Page
    contact: (): Metadata => ({
        title: 'Contact Nirajan Dhungel | Software Engineer Kathmandu',
        description: 'Get in touch with Nirajan Dhungel for your next web development, mobile app, or SEO project. Based in Kathmandu, Nepal, available for remote work worldwide.',
        keywords: [
            'Contact Nirajan Dhungel',
            'Hire Software Engineer Nepal',
            'Web Developer Contact Kathmandu',
            'Freelance Developer Nepal',
        ],
        alternates: {
            canonical: `${SITE_URL}/contact`,
        },
        openGraph: {
            title: 'Contact Nirajan Dhungel | Software Engineer Kathmandu',
            description: 'Reach out for professional web development services.',
            url: `${SITE_URL}/contact`,
        },
    }),

    // Services Page
    services: (): Metadata => ({
        title: 'Website Development Services in Nepal | Nirajan Dhungel',
        description: 'Professional website development services in Nepal. Custom web applications, e-commerce solutions, mobile apps, and SEO services delivered with excellence.',
        keywords: [
            'Website Development Services Nepal',
            'Web Development Kathmandu',
            'Custom Web Applications Nepal',
            'E-commerce Development',
            'Mobile App Development Nepal',
        ],
        alternates: {
            canonical: `${SITE_URL}/services/website-development-in-nepal`,
        },
        openGraph: {
            title: 'Website Development Services in Nepal | Nirajan Dhungel',
            description: 'Comprehensive web development services for businesses in Nepal.',
            url: `${SITE_URL}/services/website-development-in-nepal`,
        },
    }),
};

/**
 * Generate structured data for specific page types
 */

export const StructuredDataGenerators = {
    // FAQ Schema
    faq: (faqs: Array<{ question: string; answer: string }>) => ({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }),

    // Product Schema for Packages
    product: (name: string, description: string, price: number) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'NPR',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Person',
                name: 'Nirajan Dhungel',
                url: SITE_URL,
            },
        },
    }),

    // HowTo Schema for Process
    howTo: (name: string, steps: Array<{ name: string; text: string }>) => ({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
        })),
    }),

    // Review Schema
    review: (rating: number, reviewCount: number) => ({
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount,
        bestRating: 5,
        worstRating: 1,
    }),
};
