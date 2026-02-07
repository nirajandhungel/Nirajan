import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Nirajan Dhungel - Featured Web & App Portfolio',
  description: 'Explore the portfolio of Nirajan Dhungel, showcasing high-performance web applications, custom software solutions, and mobile apps built with React, Next.js, and Node.js.',
  keywords: [
    'Nirajan Dhungel Projects',
    'Web Development Portfolio',
    'React Projects',
    'Next.js Projects',
    'Full Stack Projects',
    'Nepal Developer Portfolio',
    'Software Engineering Case Studies',
    'Real Estate App Development',
    'E-commerce Solutions Nepal'
  ],
  openGraph: {
    title: 'Featured Projects | Nirajan Dhungel Portfolio',
    description: 'Discover how I solve complex business problems through code. View my latest work in web and mobile application development.',
    url: 'https://nirajandhungel.com.np/projects',
    siteName: 'Nirajan Dhungel',
    images: [
      {
        url: '/nirajandhungel3.png', // Use consistent branding image
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel Projects Portfolio',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Portfolio</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Featured <span className="text-heading-gold">Projects</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            UI/UX design, and problem-solving. Each project demonstrates my commitment to 
            building high-quality, user-friendly applications.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="btn-outline-gold rounded-xl px-8 py-4"
            asChild
          >
            <a
              href="https://github.com/nirajandhungel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-5 h-5" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Technologies I <span className="text-heading-gold">Use</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            I work with modern technologies and frameworks to build scalable and efficient applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
              'MongoDB', 'MySQL', 'Tailwind CSS', 'Git', 'Docker',
              'Python', 'Java', 'JavaFX', 'AWS', 'Vercel'
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 50%, #0a0a0a 100%)',
        }}
      >
        <div className="container relative z-10 mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Have a Project in <span className="text-heading-gold">Mind</span>?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-black rounded-xl px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/contact">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
