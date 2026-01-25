import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Projects by Nirajan Dhungel | Portfolio',
  description: 'Explore the web development portfolio of Nirajan Dhungel. View projects including Expense Tracker, Sahara Rentals, Taxi Booking System, and more. Built with React, Next.js, Node.js, and modern technologies showcasing professional website development services.',
  keywords: [
    'Nirajan Dhungel Projects',
    'Web Development Portfolio',
    'Website Development Projects',
    'React Projects Nepal',
    'Next.js Projects',
    'Full Stack Projects',
    'Nepal Developer Portfolio',
    'Custom Website Examples',
  ],
  openGraph: {
    title: 'Web Development Projects | Nirajan Dhungel Portfolio',
    description: 'View professional web development projects and applications by Nirajan Dhungel, showcasing expertise in website development services.',
    url: 'https://nirajandhungel.com.np/projects',
    images: [
      {
        url: 'https://nirajandhungel.com.np/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-green-50">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            MY WORK
          </h6>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my web development portfolio showcasing professional website development services. 
            Each project demonstrates expertise in full-stack development, UI/UX design, and problem-solving. 
            From custom web applications to e-commerce solutions, see how I transform ideas into reality.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 rounded-lg px-8 py-4"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Technologies I Use
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            I work with modern technologies and frameworks to deliver professional website development services 
            and build scalable, efficient applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
              'MongoDB', 'MySQL', 'Tailwind CSS', 'Git', 'Docker',
              'Python', 'Java', 'JavaFX', 'AWS', 'Vercel'
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white border-2 border-primary/20 text-foreground font-semibold rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-lg px-10 py-6 text-lg font-bold"
              asChild
            >
              <Link href="/contact">Let's Talk</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-10 py-6 text-lg font-bold"
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
