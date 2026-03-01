import { skillCategories } from "@/data/skills";
import { SkillSection } from "./SkillSection";

export function SkillsShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-section-dark">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Technical Expertise</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills & <span className="text-heading-gold">Technologies</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and tools for scalable,
            high-performance applications
          </p>
        </div>

        {skillCategories.map((category) => (
          <SkillSection key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
