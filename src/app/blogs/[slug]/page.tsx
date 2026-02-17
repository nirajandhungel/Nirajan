import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag, Share2, User } from 'lucide-react';
import { getAllBlogSlugs, getBlogPost, getRelatedPosts } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
import { BlogProgress } from '@/components/blogs/BlogProgress';
import { TableOfContents } from '@/components/blogs/TableOfContents';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { frontmatter } = post;
  const baseUrl = 'https://nirajandhungel.com.np';
  const postUrl = `${baseUrl}/blogs/${slug}`;
  const ogImage = frontmatter.ogImage || frontmatter.coverImage;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: postUrl,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: frontmatter.canonical || postUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Import MDX content dynamically
  let MDXContent;
  try {
    const { default: Content } = await import(`@/content/blogs/${slug}.mdx`);
    MDXContent = Content;
  } catch (error) {
    console.error('Error loading MDX content:', error);
    notFound();
  }

  const { frontmatter, readingTime } = post;
  const relatedPosts = getRelatedPosts(slug, 3);
  const baseUrl = 'https://nirajandhungel.com.np';
  const postUrl = `${baseUrl}/blogs/${slug}`;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.coverImage.startsWith('http')
      ? frontmatter.coverImage
      : `${baseUrl}${frontmatter.coverImage}`,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Nirajan Dhungel',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: frontmatter.tags?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BlogProgress />

      <article className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center pb-12 sm:pb-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={frontmatter.coverImage}
                    alt={frontmatter.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
                <Link 
                    href="/blogs" 
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide uppercase"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Knowledge Base
                </Link>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    {frontmatter.title}
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                    {frontmatter.description}
                </p>

                {/* Meta Data */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                            <User className="w-4 h-4" />
                        </div>
                        <span className="text-white">{frontmatter.author}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                    <time dateTime={frontmatter.date}>
                        {new Date(frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{readingTime}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
                
                {/* Article Content */}
                <div className="w-full lg:w-3/4">
                    <div className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight 
                        prose-p:leading-8 prose-p:text-gray-700 dark:prose-p:text-gray-300
                        prose-a:text-red-600 dark:prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-code:text-red-600 dark:prose-code:text-red-400 prose-code:bg-transparent prose-code:before:content-none prose-code:after:content-none
                        ">
                        <MDXContent components={mdxComponents} />
                    </div>

                    {/* Article Footer (Tags & Share) */}
                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            {frontmatter.tags && (
                                <div className="flex flex-wrap gap-2">
                                    {frontmatter.tags.map((tag) => (
                                        <Link 
                                            key={tag} 
                                            href={`/blogs/tag/${tag}`}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 rounded-full text-sm font-medium transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Share:</span>
                                <div className="flex gap-2">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(frontmatter.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#1DA1F2] hover:text-white transition-all text-gray-600 dark:text-gray-400"
                                        aria-label="Share on Twitter"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0A66C2] hover:text-white transition-all text-gray-600 dark:text-gray-400"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#1877F2] hover:text-white transition-all text-gray-600 dark:text-gray-400"
                                        aria-label="Share on Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Desktop) */}
                <aside className="hidden lg:block w-1/4">
                    <TableOfContents />
                </aside>
            </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            More from {frontmatter.author}
                        </h2>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                key={relatedPost.slug}
                                href={`/blogs/${relatedPost.slug}`}
                                className="group flex flex-col h-full bg-background border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-xl hover:border-red-500/20 transition-all duration-300"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={relatedPost.frontmatter.coverImage}
                                        alt={relatedPost.frontmatter.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-xs text-white rounded-md font-medium">
                                        {relatedPost.readingTime}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-xs text-red-600 dark:text-red-400 font-semibold mb-2 uppercase tracking-wider">
                                        {relatedPost.frontmatter.tags?.[0] || 'Article'}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                                        {relatedPost.frontmatter.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                                        {relatedPost.frontmatter.description}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mt-auto">
                                        <time dateTime={relatedPost.frontmatter.date}>
                                            {new Date(relatedPost.frontmatter.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </time>
                                        <span className="font-medium group-hover:translate-x-1 transition-transform">Read Article →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        )}
      </article>
    </>
  );
}
