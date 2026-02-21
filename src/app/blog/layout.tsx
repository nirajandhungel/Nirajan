// ─── Blog Layout ──────────────────────────────────────────────────────────────
// Adds proper top padding so blog content is never hidden behind the fixed navbar.
// The global navbar is fixed at h-16 (64px). pt-16 + min-h-screen ensures no overlap.
// overflow-x-hidden prevents horizontal scroll on mobile.

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout pt-16 min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}
