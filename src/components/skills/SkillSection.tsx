'"use client";'
import { SkillCategory } from "../../../types";
import { SkillCard } from "./SkillCard";

export function SkillSection({ category }: { category: SkillCategory }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-primary rounded-full"></span>
        {category.title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            gradient={category.gradient}
          />
        ))}
      </div>
    </div>
  );
}
