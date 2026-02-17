'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements: Heading[] = [];
    const idSet = new Set<string>();

    Array.from(document.querySelectorAll('article h2, article h3')).forEach((element) => {
      let id = element.id;
      const text = element.textContent || '';
      
      // Generate ID if missing
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
      }

      // Ensure uniqueness
      if (idSet.has(id)) {
        let suffix = 1;
        while (idSet.has(`${id}-${suffix}`)) {
          suffix++;
        }
        id = `${id}-${suffix}`;
      }

      // If the element didn't have an id or we changed it, update the DOM
      if (element.id !== id) {
        element.id = id;
      }

      idSet.add(id);

      elements.push({
        id,
        text,
        level: Number(element.tagName.substring(1)),
      });
    });

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    elements.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-auto w-64 pr-4">
      <h4 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-100 uppercase mb-4 pl-4">
        Table of Contents
      </h4>
      <ul className="space-y-2 text-sm border-l border-gray-200 dark:border-gray-800">
        {headings.map((heading, index) => (
          <li key={`${heading.id}-${index}`}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1 pl-4 border-l-2 -ml-[2px] transition-all duration-200 hover:text-red-600 dark:hover:text-red-400",
                activeId === heading.id
                  ? "border-red-600 text-red-600 font-medium"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700"
              )}
              style={{
                marginLeft: heading.level === 3 ? '1.5rem' : '0',
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
