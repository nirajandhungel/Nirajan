'"use client";'
import { Skill } from "../../../types";

export function SkillCard({ skill, gradient }: { skill: Skill; gradient: string }) {
  const Icon = skill.icon;

  return (
    <div
      className="bg-white rounded-2xl p-6 border border-border/40
                 hover:shadow-xl hover:-translate-y-2
                 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <Icon
            className="text-5xl group-hover:scale-110 transition-transform duration-300"
            style={{ color: skill.color }}
          />
        </div>

        <h4 className="font-bold text-foreground mb-2">{skill.name}</h4>


      </div>
    </div>
  );
}
