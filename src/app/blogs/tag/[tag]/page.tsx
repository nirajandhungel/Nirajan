import { Metadata } from 'next';
import { getAllTags, getPostsByTag } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag as TagIcon, ArrowLeft } from 'lucide-react';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `${decodedTag} Articles - Nirajan Dhungel`,
    description: `Browse all articles tagged with ${decodedTag}. Insights on web development, SEO, and digital marketing.`,
    keywords: [decodedTag, 'web development', 'SEO', 'Next.js', 'Nirajan Dhungel'],
    openGraph: {
      title: `${decodedTag} Articles - Nirajan Dhungel`,
      description: `Browse all articles tagged with ${decodedTag}`,
      url: `https://nirajandhungel.com.np/blogs/tag/${tag}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://nirajandhungel.com.np/blogs/tag/${tag}`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);
  const allTags = getAllTags();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 to-red-800 dark:from-red-900 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-red-100 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <TagIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {decodedTag}
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-red-100 dark:text-gray-300">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} tagged with &quot;{decodedTag}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-12 sm:py-20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No posts found
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                There are no articles with this tag yet.
              </p>
              <Link
                href="/blogs"
                className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors"
              >
                Browse All Posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={post.frontmatter.coverImage}
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      {/* Tags */}
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.frontmatter.tags.slice(0, 2).map((postTag) => (
                            <span
                              key={postTag}
                              className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${
                                postTag === decodedTag
                                  ? 'bg-red-600 text-white'
                                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                              }`}
                            >
                              <TagIcon className="w-3 h-3" />
                              {postTag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                        {post.frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                        {post.frontmatter.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">
                            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="sm:hidden">
                            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
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

      {/* All Tags Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Browse by Topic
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {allTags.map((tagItem) => (
                <Link
                  key={tagItem}
                  href={`/blogs/tag/${encodeURIComponent(tagItem)}`}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    tagItem === decodedTag
                      ? 'bg-red-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  #{tagItem}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
