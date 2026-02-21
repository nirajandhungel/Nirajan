// ─── Pagination ───────────────────────────────────────────────────────────────
// Editorial warm palette — light mode only.

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Base path, e.g. "/blog" or "/blog/tag/nextjs" */
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageUrl = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  // Build page window: always show first, last, current ±1
  const pages = new Set<number>([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);

  const withEllipsis: (number | '…')[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) withEllipsis.push('…');
    withEllipsis.push(page);
  });

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-1.5 mt-14">
      {/* Prev */}
      <Link
        href={pageUrl(currentPage - 1)}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        style={
          currentPage === 1
            ? { color: '#d4cfc9', pointerEvents: 'none' }
            : { color: 'var(--blog-text-muted)' }
        }
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </Link>

      {/* Pages */}
      {withEllipsis.map((item, i) =>
        item === '…' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-sm select-none" style={{ color: 'var(--blog-text-faint)' }}>
            …
          </span>
        ) : (
          <Link
            key={item}
            href={pageUrl(item)}
            aria-label={`Page ${item}`}
            aria-current={item === currentPage ? 'page' : undefined}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
            style={
              item === currentPage
                ? { background: 'var(--blog-accent)', color: '#fff' }
                : { color: 'var(--blog-text-muted)' }
            }
          >
            {item}
          </Link>
        )
      )}

      {/* Next */}
      <Link
        href={pageUrl(currentPage + 1)}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        style={
          currentPage === totalPages
            ? { color: '#d4cfc9', pointerEvents: 'none' }
            : { color: 'var(--blog-text-muted)' }
        }
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
