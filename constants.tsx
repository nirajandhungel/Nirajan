
import React from 'react';
import { Service, Testimonial, Partner, Blog } from './types';

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Website Development',
        description: 'Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.',
        icon: 'https://softbenz.com/media/services/Website_developlent.svg',
        link: '/services/website-development-in-nepal',
        category: 'Development'
    },
    {
        id: '2',
        title: 'App Development',
        description: 'Cross-platform mobile applications using React Native and modern frameworks.',
        icon: 'https://softbenz.com/media/services/App_Development.svg',
        link: '/services/mobile-app-development',
        category: 'Development'
    },
    {
        id: '3',
        title: 'System/Software Development',
        description: 'Custom software solutions tailored to your business needs using Java, Python, and Node.js.',
        icon: 'https://softbenz.com/media/services/Programmer-amico.svg',
        link: '/services/system-software-development',
        category: 'Development'
    },
    {
        id: '4',
        title: 'UI/UX Design',
        description: 'User-centered design that creates intuitive and engaging digital experiences.',
        icon: 'https://softbenz.com/media/services/UI_UX.svg',
        link: '/services/ui-ux-design',
        category: 'Development'
    },
    {
        id: '5',
        title: 'Search Engine Optimization (SEO)',
        description: 'Improve your website visibility and ranking on search engines with proven SEO strategies.',
        icon: 'https://softbenz.com/media/services/SEO_analytics_team-amico.svg',
        link: '/services/seo-in-nepal',
        category: 'Marketing'
    },
    {
        id: '6',
        title: 'Social Media Marketing (SMM)',
        description: 'Build your brand presence and engage with your audience across social platforms.',
        icon: 'https://softbenz.com/media/services/Mobile_Marketing-pana.svg',
        link: '/services/social-media-marketing',
        category: 'Marketing'
    },
    {
        id: '7',
        title: 'Graphic Design',
        description: 'Professional graphic design services for branding, marketing materials, and digital assets.',
        icon: 'https://softbenz.com/media/design/Website_Creator-pana.svg',
        link: '/services/graphics-design',
        category: 'Marketing'
    },
    {
        id: '8',
        title: 'Content Writing',
        description: 'High-quality, SEO-optimized content that engages your audience and drives results.',
        icon: 'https://softbenz.com/media/content-marketing/Blog_post-bro.svg',
        link: '/services/content-writing',
        category: 'Marketing'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Client Name',
        role: 'CEO / Founder',
        content: 'Nirajan delivered an exceptional website that exceeded our expectations. His technical expertise and attention to detail are outstanding.',
        image: 'https://softbenz.com/media/misc-testimonials/testimonial-1623385122.jpg'
    },
    {
        id: '2',
        name: 'Another Client',
        role: 'Business Owner',
        content: 'Professional, reliable, and highly skilled. Nirajan transformed our digital presence with a modern, responsive website.',
        image: 'https://softbenz.com/media/misc-testimonials/misc-testimonials/50955.webp'
    }
];

export const PARTNERS: Partner[] = [];

export const BLOGS: Blog[] = [];
