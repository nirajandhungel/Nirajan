import { WithContext, Person, ProfessionalService, WebSite, LocalBusiness, BreadcrumbList } from 'schema-dts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nirajandhungel.com.np';

// Person Schema - Nirajan Dhungel
export const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": "Nirajan Dhungel",
    "alternateName": "Nirajan Dhungel - Web Developer",
    "description": "Professional Full Stack Web Developer and Software Engineer specializing in React, Next.js, Node.js, and TypeScript. Providing website development services in Nepal.",
    "url": SITE_URL,
    "image": [
        `${SITE_URL}/nirajandhungel2.jpeg`,
        `${SITE_URL}/nirajandhungel3.png`,
        `${SITE_URL}/nirajandhungel.png`
    ],
    "email": "info@nirajandhungel.com.np",
    "telephone": "+977-9825883910",
    "jobTitle": "Full Stack Web Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati Province",
        "addressCountry": "NP",
        "postalCode": "44600"
    },
    "sameAs": [
        "https://github.com/nirajandhungel",
        "https://www.linkedin.com/in/nirajan-dhungel",
        "https://x.com/SubashDhungel18",
        "https://www.instagram.com/nirajan.dhungel19",
        "https://www.facebook.com/subash.dhungel.712",
        "https://medium.com/@nirajandhungel"
    ],
    "knowsAbout": [
        "Web Development",
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Website Development",
        "SEO",
        "UI/UX Design"
    ]
};

// Professional Service Schema
export const professionalServiceSchema: WithContext<ProfessionalService> & { serviceType?: string[]; provider?: any } = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    "name": "Nirajan Dhungel - Website Development Services",
    "description": "Professional website development services including custom web applications, e-commerce solutions, and full stack development using modern technologies like React, Next.js, and Node.js.",
    "url": SITE_URL,
    "image": `${SITE_URL}/nirajandhungel2.jpeg`,
    "priceRange": "$$",
    "telephone": "+977-9825883910",
    "email": "info@nirajandhungel.com.np",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati Province",
        "addressCountry": "NP"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Nepal"
    },
    "serviceType": [
        "Website Development",
        "Web Application Development",
        "Full Stack Development",
        "React Development",
        "Next.js Development",
        "E-commerce Development",
        "UI/UX Design",
        "SEO Services"
    ],
    "provider": {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`
    }
};

// WebSite Schema with Search Action
export const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Nirajan Dhungel - Web Developer Portfolio",
    "description": "Professional portfolio of Nirajan Dhungel, a Full Stack Web Developer offering website development services in Nepal.",
    "url": SITE_URL,
    "inLanguage": "en-US",
    "publisher": {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    } as any
};

// LocalBusiness Schema for Contact Page
export const localBusinessSchema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    "name": "Nirajan Dhungel - Web Development Services",
    "description": "Professional web development services in Kathmandu, Nepal. Specializing in custom websites, web applications, and full stack development.",
    "url": SITE_URL,
    "telephone": "+977-9825883910",
    "email": "info@nirajandhungel.com.np",
    "image": `${SITE_URL}/nirajandhungel2.jpeg`,
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati Province",
        "addressCountry": "NP",
        "postalCode": "44600"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.7017,
        "longitude": 85.3206
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
    }
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${SITE_URL}${item.url}`
        }))
    };
}
