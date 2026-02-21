import React from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, SOCIAL_LINKS } from "@/data/contact";
const Footer: React.FC = () => {

  return (
    <footer className="relative bg-background border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-black text-heading-gold">N</span>
                <div>
                  <span className="text-xl font-bold text-white">Nirajan</span>
                  <span className="block text-xs text-white/50 tracking-widest">DHUNGEL</span>
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Software Engineer & Web Developer based in Kathmandu, Nepal. 
              Building exceptional digital experiences for international clients.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Github, href: SOCIAL_LINKS.github.url },
                { Icon: Linkedin, href: SOCIAL_LINKS.linkedin.url },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram.url },
                { Icon: Facebook, href: SOCIAL_LINKS.facebook.url },
                { Icon: Twitter, href: SOCIAL_LINKS.twitter.url },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              {/* <span className="w-2 h-2 bg-primary rounded-full"></span> */}
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Website Development", href: "/services/website-development-in-nepal" },
                { label: "App Development", href: "/services/mobile-app-development" },
                { label: "System/Software Development", href: "/services/system-software-development" },
                { label: "SEO Services", href: "/services/seo-in-nepal" },
                { label: "GSO AI (SEO Services)", href: "/services/gso-ai" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              {/* <span className="w-2 h-2 bg-accent rounded-full"></span> */}
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Me", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/about#experience" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              {/* <span className="w-2 h-2 bg-primary rounded-full"></span> */}
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href={`tel:${CONTACT.phone.tel}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href={`mailto:${CONTACT.email}?subject=Inquiry from Website`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/50 pt-2">{CONTACT.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} <span className="text-white/60">Nirajan Dhungel</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>Free Bird</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
