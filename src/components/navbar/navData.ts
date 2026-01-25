export const NAV_ITEMS = {
  regular: [
    // { href: "/", label: "Home" },
    { href: "/work", label: "How We Work" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  about: [
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "My Projects" },
  ],
  pricing: [
    { href: "/pricing/web-design", label: "Web Packages" },
    { href: "/pricing/seo", label: "SEO Packages" },
  ],
} as const;

export const SERVICE_DATA = {
  development: [
    { name: "Website Development", href: "/services/website-development-in-nepal", icon: "🌐" },
    { name: "App Development", href: "/services/mobile-app-development", icon: "📱" },
    { name: "System/Software Development", href: "/services/system-software-development", icon: "💻" },
    { name: "UI/UX Design", href: "/services/ui-ux-design", icon: "🎨" },
  ],
  marketing: [
    { name: "Search Engine Optimization (SEO)", href: "/services/seo-in-nepal", icon: "🔍" },
    { name: "Social Media Marketing (SMM)", href: "/services/social-media-marketing", icon: "📢" },
    { name: "Graphic Design", href: "/services/graphics-design", icon: "✏️" },
    { name: "Content Writing", href: "/services/content-writing", icon: "📝" },
  ],
} as const;