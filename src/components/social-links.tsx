import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nirajandhungel',
    icon: <Github className="w-5 h-5" />,
    color: 'hover:text-gray-900 hover:bg-gray-100'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nirajan-dhungel',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'hover:text-blue-600 hover:bg-blue-50'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nirajan.dhungel19',
    icon: <Instagram className="w-5 h-5" />,
    color: 'hover:text-pink-600 hover:bg-pink-50'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/subash.dhungel.712',
    icon: <Facebook className="w-5 h-5" />,
    color: 'hover:text-blue-700 hover:bg-blue-50'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/SubashDhungel18',
    icon: <Twitter className="w-5 h-5" />,
    color: 'hover:text-sky-500 hover:bg-sky-50'
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
          className={`${sizeClasses[iconSize]} flex items-center justify-center rounded-full border border-border bg-white transition-all duration-300 ${link.color}`}
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
          className={`flex items-center gap-3 px-4 py-2 rounded-lg border border-border bg-white transition-all duration-300 ${link.color} group`}
        >
          <span className="flex-shrink-0">{link.icon}</span>
          <span className="text-sm font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
