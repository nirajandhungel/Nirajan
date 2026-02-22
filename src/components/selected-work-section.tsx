import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export function SelectedWorkSection() {
  // Take only the first 4 projects for the homepage
  const featuredProjects = projects.slice(0, 4)
  
  return (
    <section className="relative py-5 lg:py-10 bg-black overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header - Raw, Bold */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-block mb-6">
              <span className="text-sm text-accent font-bold uppercase tracking-widest font-big-shoulders">
                PORTFOLIO
              </span>
            </div>
            <p className="text-white/60 ">
            A glimpse into our projects showcasing innovative solutions, robust development, and beautiful designs. Each project reflects our commitment to quality, creativity, and client success.

                        </p>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase leading-tight font-big-shoulders">
              SELECTED <span className="text-accent">WORK</span>
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold uppercase tracking-wide font-big-shoulders text-lg group w-40"
          >
            VIEW ALL
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid - Raw, Hard */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-black border-2 border-white/10 overflow-hidden hover:border-accent transition-all duration-300"
            >
              {/* Color Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" /> */}
                
                {/* Quick Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="w-10 h-10 bg-black/80 border-2 border-white/20 flex items-center justify-center text-white hover:border-accent hover:bg-accent transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== '#' && project.demoLink !== 'https://demo.com' && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="w-10 h-10 bg-black/80 border-2 border-white/20 flex items-center justify-center text-white hover:border-accent hover:bg-accent transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 uppercase font-big-shoulders group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2 font-noto-sans">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white uppercase font-big-shoulders"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
