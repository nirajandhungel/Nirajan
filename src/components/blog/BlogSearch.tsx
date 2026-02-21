'use client';
// ─── BlogSearch ───────────────────────────────────────────────────────────────
// Client-side search with URL param sync — editorial light style.

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';

interface BlogSearchProps {
  placeholder?: string;
  className?: string;
}

export function BlogSearch({
  placeholder = 'Search articles…',
  className = '',
}: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('q') ?? '');
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleChange = useCallback(
    (query: string) => {
      setValue(query);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (query.trim()) {
          params.set('q', query.trim());
          params.delete('page');
        } else {
          params.delete('q');
        }
        router.push(`/blog?${params.toString()}`, { scroll: false });
      }, 300);
    },
    [router, searchParams]
  );

  const clear = () => {
    setValue('');
    router.push('/blog', { scroll: false });
    inputRef.current?.focus();
  };

  useEffect(() => () => clearTimeout(debounceRef.current), []);

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>
      <div className="relative flex items-center">
        <Search
          className="absolute left-3.5 w-4 h-4 pointer-events-none"
          aria-hidden="true"
          style={{ color: 'var(--blog-text-faint)' }}
        />
        <input
          ref={inputRef}
          id="blog-search"
          type="search"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-9 py-2.5 text-sm transition-shadow focus:outline-none"
          style={{
            background: 'var(--blog-bg-card)',
            border: '1px solid var(--blog-border-subtle)',
            borderRadius: '10px',
            color: 'var(--blog-text)',
            boxShadow: 'none',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--blog-accent)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(196,30,58,0.08)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--blog-border-subtle)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          autoComplete="off"
          spellCheck="false"
        />
        {value && (
          <button
            onClick={clear}
            aria-label="Clear search"
            className="absolute right-2.5 p-1 rounded-full transition-colors"
            style={{ color: 'var(--blog-text-faint)' }}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
