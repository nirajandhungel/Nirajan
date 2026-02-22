import React from 'react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group card-cinematic overflow-hidden hover:-translate-y-2 transition-all duration-500">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-card">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="" />
        
        {/* Hover Overlay Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.githubLink && project.githubLink !== '#' && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code"
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
              aria-label="View Live Demo"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/60 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-primary hover:border-primary transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          {project.demoLink && project.demoLink !== 'https://demo.com' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
