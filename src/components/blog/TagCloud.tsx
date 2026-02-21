// ─── TagCloud ─────────────────────────────────────────────────────────────────
// Editorial tag cloud — warm neutral palette, light mode only.

import Link from 'next/link';

interface TagCloudProps {
  tags: Record<string, number> | string[];
  activeTag?: string;
  title?: string;
  className?: string;
}

export function TagCloud({ tags, activeTag, title = 'Topics', className = '' }: TagCloudProps) {
  // Normalize to { tag: count } shape
  const normalized: Record<string, number> = Array.isArray(tags)
    ? Object.fromEntries(tags.map((t) => [t, 0]))
    : tags;

  const entries = Object.entries(normalized).sort((a, b) => b[1] - a[1]);

  return (
    <div className={className}>
      {title && (
        <p
          className="text-[11px] font-bold uppercase mb-3"
          style={{ color: 'var(--blog-text-faint)', letterSpacing: '0.14em' }}
        >
          {title}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {entries.map(([tag, count]) => (
          <Link
            key={tag}
            href={`/blog/tag/${encodeURIComponent(tag)}`}
            aria-label={`${count > 0 ? `${count} articles tagged ` : ''}${tag}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:opacity-90"
            style={
              tag === activeTag
                ? { background: 'var(--blog-accent)', color: '#fff' }
                : {
                    background: '#f5f2ee',
                    color: 'var(--blog-text-muted)',
                    border: '1px solid var(--blog-border-subtle)',
                  }
            }
          >
            #{tag}
            {count > 0 && (
              <span
                className="text-[10px] font-bold px-1 py-0.5 rounded-full"
                style={
                  tag === activeTag
                    ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
                    : { background: 'var(--blog-border-subtle)', color: 'var(--blog-text-soft)' }
                }
              >
                {count}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
