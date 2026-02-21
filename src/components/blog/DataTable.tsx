import React from 'react';

interface DataTableProps {
  headers?: string[];
  rows?: (string | React.ReactNode)[][];
  [key: string]: unknown;
}

/**
 * Table component for MDX. Accepts headers and rows.
 * Handles various prop formats from MDX compilers (direct, serialized, etc.).
 * Renders nothing if no valid data — no error display.
 */
export function DataTable(props: DataTableProps) {
  let headers: string[] = [];
  let rows: (string | React.ReactNode)[][] = [];

  if (props && typeof props === 'object') {
    headers = Array.isArray(props.headers) ? props.headers : [];
    rows = Array.isArray(props.rows) ? props.rows : [];

    // Some MDX compilers pass props nested (e.g. under a different key)
    if (headers.length === 0 && rows.length === 0) {
      const anyProps = props as Record<string, unknown>;
      if (Array.isArray(anyProps.headers)) headers = anyProps.headers as string[];
      if (Array.isArray(anyProps.rows)) rows = anyProps.rows as (string | React.ReactNode)[][];
    }
  }

  const safeHeaders = headers || [];
  const safeRows = rows || [];

  if (safeHeaders.length === 0 && safeRows.length === 0) {
    return null;
  }

  return (
    <div className="my-8 w-full overflow-hidden rounded-xl border border-[var(--blog-border)] bg-[var(--blog-bg-card)] shadow-[var(--blog-shadow)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--blog-border)] bg-[var(--blog-bg)]">
              {safeHeaders.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--blog-text-muted)] sm:px-5 sm:py-3.5"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--blog-border-subtle)]">
            {safeRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-[var(--blog-text)]">
                {Array.isArray(row) &&
                  row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-sm leading-relaxed sm:px-5 sm:py-3.5"
                      style={{ fontFamily: "var(--font-lora), 'Lora', Georgia, serif" }}
                    >
                      {typeof cell === 'string' && cell.includes('`') ? (
                        <code className="rounded bg-[var(--blog-accent-soft)] px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--blog-accent)]">
                          {cell.replace(/`/g, '')}
                        </code>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
