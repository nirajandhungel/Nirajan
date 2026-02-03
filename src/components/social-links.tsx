import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/contact';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: SOCIAL_LINKS.github.name,
    url: SOCIAL_LINKS.github.url,
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: SOCIAL_LINKS.linkedin.name,
    url: SOCIAL_LINKS.linkedin.url,
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: SOCIAL_LINKS.instagram.name,
    url: SOCIAL_LINKS.instagram.url,
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: SOCIAL_LINKS.facebook.name,
    url: SOCIAL_LINKS.facebook.url,
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: SOCIAL_LINKS.twitter.name,
    url: SOCIAL_LINKS.twitter.url,
    icon: <Twitter className="w-5 h-5" />,
  },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
}

export function SocialLinks({ className = '', iconSize = 'md' }: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[iconSize]} flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export function SocialLinksVertical({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-primary/10 hover:border-primary/20 hover:text-white transition-all duration-300 group"
        >
          <span className="flex-shrink-0">{link.icon}</span>
          <span className="text-sm font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
