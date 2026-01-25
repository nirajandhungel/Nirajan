"use client";
import { skillCategories } from "@/data/skills";
import { SkillSection } from "./SkillSection";

export function SkillsShowcase() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            TECHNICAL EXPERTISE
          </h6>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
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
