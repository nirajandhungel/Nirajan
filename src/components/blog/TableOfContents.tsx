'use client';

// TableOfContents.tsx — Minimal, organic sidebar navigation
// Philosophy: subtle, non-intrusive. Highlights active section with red accent.
// Mobile: collapsible "On this page" above article. Desktop: sticky sidebar.

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  /** When true, render as mobile collapsible (shown above article on small screens) */
  mobile?: boolean;
}

export function TableOfContents({ mobile = false }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const elements: Heading[] = [];
    const idSet = new Set<string>();

    Array.from(document.querySelectorAll('article h2, article h3')).forEach((element) => {
      let id = element.id;
      const text = element.textContent || '';

      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
      }

      if (idSet.has(id)) {
        let suffix = 1;
        while (idSet.has(`${id}-${suffix}`)) suffix++;
        id = `${id}-${suffix}`;
      }

      if (element.id !== id) element.id = id;
      idSet.add(id);

      elements.push({ id, text, level: Number(element.tagName[1]) });
    });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '0% 0% -78% 0%' }
    );

    elements.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  const navContent = (
    <ul
      className={cn(
        'space-y-0.5',
        !mobile && 'border-l-2',
        mobile ? 'space-y-1' : ''
      )}
      style={!mobile ? { borderLeftColor: 'var(--blog-border)' } : undefined}
    >
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          return (
            <li key={`${heading.id}-${index}`}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  setActiveId(heading.id);
                }}
                className={cn(
                  'block py-1 pl-4 text-[13px] leading-snug border-l-2 -ml-[2px] transition-all duration-200',
                  heading.level === 3 && 'pl-7'
                )}
                style={
                  isActive
                    ? { borderLeftColor: 'var(--blog-accent)', color: 'var(--blog-accent)', fontWeight: 600 }
                    : { borderLeftColor: 'transparent', color: 'var(--blog-text-soft)' }
                }
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
  );

  if (mobile) {
    return (
      <nav aria-label="Table of contents" className="lg:hidden mb-8">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left"
          style={{
            background: 'var(--blog-bg-card)',
            border: '1px solid var(--blog-border)',
            color: 'var(--blog-text)',
          }}
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <List className="w-4 h-4" style={{ color: 'var(--blog-accent)' }} />
            On this page
          </span>
          <ChevronDown
            className={cn('w-4 h-4 transition-transform', mobileOpen && 'rotate-180')}
            style={{ color: 'var(--blog-text-faint)' }}
          />
        </button>
        {mobileOpen && (
          <div
            className="mt-2 rounded-xl px-4 py-3"
            style={{
              background: 'var(--blog-bg-card)',
              border: '1px solid var(--blog-border)',
            }}
          >
            {navContent}
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className="sticky self-start overflow-y-auto"
      style={{ top: '6rem', maxHeight: 'calc(100vh - 7rem)' }}
    >
      <p
        className="text-[11px] font-bold uppercase mb-4 px-3"
        style={{ color: 'var(--blog-text-faint)', letterSpacing: '0.14em' }}
      >
        On this page
      </p>
      {navContent}
    </nav>
  );
}