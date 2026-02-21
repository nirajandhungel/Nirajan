'use client';

import { useState, useRef } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CodeBlock({ children, className, ...props }: React.ComponentProps<'pre'>) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      const text = preRef.current.innerText;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const lang = className?.replace(/language-/, '').split(/\s/)[0] ?? '';

  return (
    <div
      className="my-6 overflow-hidden rounded-xl border"
      style={{
        borderColor: 'var(--blog-border)',
        background: 'var(--blog-code-bg, #1e1e1e)',
        boxShadow: 'var(--blog-shadow)',
      }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2"
        style={{ borderColor: 'var(--blog-border)', background: 'rgba(0,0,0,0.2)' }}
      >
        <span className="font-mono text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--blog-text-faint, #858585)' }}>
          {lang || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium transition-colors hover:opacity-80"
          style={{ color: 'var(--blog-text-faint, #858585)' }}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" style={{ color: 'var(--blog-accent)' }} />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre
        ref={preRef}
        className={cn(
          'overflow-x-auto px-4 py-4 text-[13px] leading-[1.65]',
          'font-mono',
          '[&_code]:block [&_code]:min-w-0 [&_code]:bg-transparent [&_code]:p-0',
          className
        )}
        style={{
          background: 'var(--blog-code-bg, #1e1e1e)',
          color: 'var(--blog-code-text, #d4d4d4)',
          fontFamily: 'var(--font-geist-mono), "JetBrains Mono", ui-monospace, monospace',
        }}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
