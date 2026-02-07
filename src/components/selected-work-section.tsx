import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export function SelectedWorkSection() {
  // Take only the first 4 projects for the homepage
  const featuredProjects = projects.slice(0, 4)
  
  return (
    <section className="relative py-24 lg:py-32 bg- overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full -translate-y-1/2 opacity-20"
          style={{
            background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-accent"></span>
              <span className="text-sm text-accent font-bold uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Selected <span className="text-heading-gold">Work</span>
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-bold group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group card-cinematic overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== '#' && project.demoLink !== 'https://demo.com' && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/20 text-primary rounded-full"
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
