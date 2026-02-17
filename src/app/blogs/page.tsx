import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blogs - Nirajan Dhungel',
  description: 'Insights on web development, SEO, Next.js, and digital marketing strategies. Learn from real-world projects and industry best practices.',
  keywords: ['web development blogs', 'SEO tips', 'Next.js tutorials', 'digital marketing', 'Nirajan Dhungel blogs'],
  openGraph: {
    title: 'Blogs - Nirajan Dhungel',
    description: 'Insights on web development, SEO, Next.js, and digital marketing strategies.',
    url: 'https://nirajandhungel.com.np/blogs',
    type: 'website',
    images: [
      {
        url: '/optimized/og-blog.webp',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs - Nirajan Dhungel',
    description: 'Insights on web development, SEO, Next.js, and digital marketing strategies.',
    images: ['/optimized/og-blog.webp'],
  },
  alternates: {
    canonical: 'https://nirajandhungel.com.np/blogs',
    types: {
      'application/rss+xml': 'https://nirajandhungel.com.np/rss.xml',
    },
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 to-red-800 dark:from-red-900 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blogs & Insights
            </h1>
            <p className="text-xl text-red-100 dark:text-gray-300 max-w-2xl mx-auto">
              Practical insights on web development, SEO strategies, and digital marketing from real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No posts yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Check back soon for new content!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.frontmatter.coverImage}
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      {/* Tags */}
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.frontmatter.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                        {post.frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.frontmatter.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get notified when I publish new articles about web development and SEO.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
