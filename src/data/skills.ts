'"use client";'
import { SkillCategory } from "../../types";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiVercel,
  SiNetlify,
  SiGithubactions,
  SiRedis,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", level: 90, icon: SiNextdotjs },
      { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", level: 95, icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: 95, icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, icon: FaNodeJs, color: "#339933" },
      { name: "Express", level: 80, icon: SiExpress },
      { name: "Python", level: 70, icon: FaPython, color: "#3776AB" },
      { name: "Django", level: 65, icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    title: "Databases",
    gradient: "from-orange-500 to-amber-500",
    skills: [
      { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", level: 75, icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
      { name: "Redis", level: 60, icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Deployment & DevOps",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Vercel", level: 90, icon: SiVercel },
      { name: "Netlify", level: 75, icon: SiNetlify },
      { name: "Docker", level: 60, icon: FaDocker, color: "#2496ED" },
      { name: "AWS", level: 40, icon: FaAws, color: "#FF9900" },
      { name: "GitHub Actions", level: 50, icon: SiGithubactions },
    ],
  },
  {
    title: "Tools",
    gradient: "from-slate-500 to-gray-700",
    skills: [
      { name: "Git / GitHub", level: 90, icon: FaGitAlt, color: "#F05032" },
    ],
  },
];
