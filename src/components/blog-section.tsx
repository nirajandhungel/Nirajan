import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { getAllBlogPosts } from "@/lib/mdx";

export function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-primary"></span>
            <span className="text-xs sm:text-sm text-primary font-bold uppercase tracking-widest">Latest Insights</span>
            <span className="w-8 sm:w-12 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            From The <span className="text-heading-gold">Blogs</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed px-4">
            Thoughts on web development, SEO strategies, and building digital products.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blogs/${post.slug}`}
              className="group bg-neutral-900/50 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-56 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.frontmatter.coverImage}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium text-white/40 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="hidden sm:inline">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <span className="sm:hidden">
                      {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {post.frontmatter.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-4 sm:mb-6 flex-1">
                  {post.frontmatter.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {post.frontmatter.tags?.slice(0, 1).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-primary text-white text-sm sm:text-base font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            See All Articles
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
