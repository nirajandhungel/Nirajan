export const NAV_ITEMS = {
  regular: [
    { href: "/work", label: "How We Work" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  about: [
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "My Projects" },
    { href: "/about#experience", label: "My Experience" },
  ],
  pricing: [
    { href: "/pricing/web-design", label: "Web Packages" },
    { href: "/pricing/seo", label: "SEO Packages" },
  ],
} as const;
