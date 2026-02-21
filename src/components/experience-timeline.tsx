import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span className="text-sm text-accent font-bold uppercase tracking-widest">
              Journey
            </span>
            <span className="w-8 h-[2px] bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Work <span className="text-heading-gold">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative card-cinematic p-8 md:p-10">
              {/* Icon Badge */}
              <div className="absolute left-2 top-8 w-12 h-12  rounded-sm flex items-center justify-center shadow-xl">
                <Image
                  src={exp.icon}
                  alt={`${exp.company} logo`}
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
                      {exp.title}
                    </h3>
                    <span className="px-3 py-1  text-green-500 text-xs font-bold border rounded-sm bg-green-500/10 text-green-400 border-green-500/20 ">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                    <Briefcase className="w-5 h-5" />
                    {exp.companyLink ? (
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-white/50">
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
                  <h4 className="font-bold text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <span className="text-white/60 leading-relaxed">
                          {achievement}
                        </span>
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
