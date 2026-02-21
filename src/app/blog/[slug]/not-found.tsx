import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ background: 'var(--blog-bg)' }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <FileQuestion
            className="mx-auto h-24 w-24"
            style={{ color: 'var(--blog-accent)' }}
            aria-hidden
          />
        </div>

        <h1
          className="mb-4 text-4xl font-bold sm:text-5xl"
          style={{ fontFamily: "var(--font-lora), 'Lora', Georgia, serif", color: 'var(--blog-text)' }}
        >
          Blog Post Not Found
        </h1>

        <p
          className="mb-8 text-xl"
          style={{ color: 'var(--blog-text-muted)' }}
        >
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white"
            style={{ background: 'var(--blog-accent)' }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
            style={{
              background: 'var(--blog-border-subtle)',
              color: 'var(--blog-text)',
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
