import { education } from '@/data/education';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function EducationTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-section-dark">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Academic</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Education & <span className="text-heading-gold">Qualifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative card-cinematic p-8 md:p-10"
            >
              {/* Icon Badge */}
              <div className="absolute -left-4 top-8 w-12 h-12  rounded-sm flex items-center justify-center shadow-xl">
                              <Image
                                src={edu.icon}
                                alt={`${edu.institution} logo`}
                                width={50}
                                height={50}
                                className="object-cover rounded-sm"
                              />
                            </div>

              <div className="ml-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-bold rounded-sm border ${
                      edu.status === 'In Progress' 
                        ? 'bg-accent/10 text-accent border-accent/20' 
                        : 'bg-green-500/10 text-green-400 border-green-500/20'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                    <GraduationCap className="w-5 h-5" />
                    {edu.institution}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
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
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-sm">
                    <span className="text-sm font-bold text-primary">{edu.gpa}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Website Link */}
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
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
