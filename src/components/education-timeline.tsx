import React from 'react';
import { education } from '@/data/education';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';

export function EducationTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            ACADEMIC BACKGROUND
          </h6>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Education & <span className="text-primary">Qualifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-[#fafafa] rounded-3xl p-8 md:p-10 border border-border/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Icon Badge */}
              <div className="absolute -left-4 top-8 w-12 h-12 bg-gradient-to-br from-primary to-green-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl">
                {edu.icon}
              </div>

              <div className="ml-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                    <GraduationCap className="w-5 h-5" />
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  {/* GPA Badge */}
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-primary/20">
                    <span className="text-sm font-bold text-primary">{edu.gpa}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Website Link */}
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors text-sm font-medium"
                >
                  Visit Institution Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
