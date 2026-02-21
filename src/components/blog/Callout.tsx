// Callout.tsx — Clean, light callout blocks for MDX
// Types: default (blue info), warning (amber), danger (red), success (green)
// Light mode only — warm editorial palette.

import { cn } from '@/lib/utils';

interface CalloutProps {
  type?: 'default' | 'info' | 'warning' | 'danger' | 'success';
  title?: string;
  children: React.ReactNode;
}

const variants = {
  default: {
    wrapper: { background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e3a5f' },
    dot: { background: '#3b82f6' },
    icon: 'ℹ',
  },
  info: {
    wrapper: { background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e3a5f' },
    dot: { background: '#3b82f6' },
    icon: 'ℹ',
  },
  warning: {
    wrapper: { background: '#fffbeb', border: '1px solid #fde68a', color: '#78350f' },
    dot: { background: '#f59e0b' },
    icon: '⚠',
  },
  danger: {
    wrapper: { background: '#fdf2f2', border: '1px solid #fecaca', color: '#7f1d1d' },
    dot: { background: '#ef4444' },
    icon: '✕',
  },
  success: {
    wrapper: { background: 'var(--blog-accent-soft)', border: '1px solid var(--blog-accent)', color: 'var(--blog-accent-hover)' },
    dot: { background: 'var(--blog-accent)' },
    icon: '✓',
  },
};

export function Callout({ type = 'default', title, children }: CalloutProps) {
  const v = variants[type as keyof typeof variants] || variants.default;

  return (
    <div
      className="my-7 flex gap-3 rounded-xl p-4 sm:p-5"
      style={v.wrapper}
      role="note"
    >
      {/* Icon dot */}
      <div
        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={v.dot}
      >
        {v.icon}
      </div>

      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold text-sm mb-1">{title}</p>
        )}
        <div className="text-sm leading-relaxed [&>p]:m-0 [&>p]:leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}