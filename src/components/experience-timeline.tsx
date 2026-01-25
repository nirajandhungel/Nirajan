import React from 'react';
import { experiences } from '@/data/experience';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            PROFESSIONAL JOURNEY
          </h6>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl p-8 md:p-10 border border-border/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Icon Badge */}
              <div className="absolute -left-4 top-8 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl">
                {exp.icon}
              </div>

              <div className="ml-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                    <Briefcase className="w-5 h-5" />
                    {exp.company}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-bold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
