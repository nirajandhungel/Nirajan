'use client';

import { useState, useEffect, useCallback } from 'react';
import { useEnquiryModal } from '@/app/EnquiryContext';

const STORAGE_KEY = 'lead-capture-dismissed';
const SCROLL_THRESHOLD = 0.5; // 50% scroll

interface LeadCaptureModalProps {
  /** Only show on blog posts */
  isBlogPost?: boolean;
}

export function LeadCaptureModal({ isBlogPost = false }: LeadCaptureModalProps) {
  const { openAudit } = useEnquiryModal();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const dismiss = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {}
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isBlogPost) return;

    const dismissed = typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true';
    if (dismissed) return;

    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= SCROLL_THRESHOLD) {
        hasTriggered = true;
        setIsOpen(true);
      }
    };

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseout', handleExitIntent);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseout', handleExitIntent);
    };
  }, [mounted, isBlogPost]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-capture-title"
    >
      <div
        className="relative max-w-md w-full rounded-2xl p-6 sm:p-8 shadow-xl"
        style={{
          background: 'var(--blog-bg-card, #fff)',
          border: '1px solid var(--blog-border, #e5e1db)',
        }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <h2 id="lead-capture-title" className="text-xl font-bold mb-2" style={{ color: 'var(--blog-text, #2c2925)' }}>
          Get Your Free SEO Checklist
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--blog-text-muted, #5c5650)' }}>
          Actionable steps to improve your site&apos;s search rankings. No spam.
        </p>

        {submitStatus === 'success' ? (
          <div className="text-center py-4 text-green-600 font-medium">
            ✅ Check your inbox for the checklist!
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitStatus('loading');
              const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
              if (email) {
                try {
                  const res = await fetch('/api/checklist', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  });
                  if (res.ok) {
                    setSubmitStatus('success');
                    setTimeout(() => dismiss(), 3000); // give time to read success message
                  } else {
                    setSubmitStatus('error');
                    alert('Error sending email. Please try again.');
                  }
                } catch (err) {
                  setSubmitStatus('error');
                  alert('Error sending email. Please try again.');
                }
              }
            }}
            className="space-y-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-lg border text-sm"
              style={{
                borderColor: 'var(--blog-border)',
                background: 'var(--blog-bg)',
                color: 'var(--blog-text)',
              }}
            />
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="block w-full py-3 px-4 rounded-lg font-bold text-white text-sm disabled:opacity-50"
              style={{ background: 'var(--blog-accent, #c41e3a)' }}
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Get Free Checklist'}
            </button>
            <p className="text-center text-xs" style={{ color: 'var(--blog-text-muted, #5c5650)' }}>
              or
            </p>
            <button
              type="button"
              onClick={() => {
                dismiss();
                openAudit();
              }}
              className="block w-full text-center py-3 px-4 rounded-lg font-medium text-sm border-2"
              style={{
                borderColor: 'var(--blog-accent, #c41e3a)',
                color: 'var(--blog-accent, #c41e3a)',
                background: 'transparent',
              }}
            >
              Get a personalised SEO audit for my site →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
