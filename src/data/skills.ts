"use client";

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
  SiNginx,
  SiLinux,
  SiGooglecloud,
  SiDotnet,
  SiFlutter,
  SiFigma,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },

  {
    title: "Backend Development",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    ],
  },

  {
    title: "Databases & Caching",
    gradient: "from-orange-500 to-amber-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },

  {
    title: "System Design & Infrastructure",
    gradient: "from-red-600 to-black",
    skills: [
      { name: "System Design", icon: SiNginx },
      { name: "Load Balancing", icon: SiNginx },
      { name: "NGINX (Reverse Proxy)", icon: SiNginx },
      { name: "Linux Servers", icon: SiLinux },
      { name: "Caching Strategies", icon: SiRedis },
    ],
  },

  {
    title: "Deployment & DevOps",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "CI/CD Pipelines", icon: SiGithubactions },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },

  {
    title: "Mobile & Cross-Platform",
    gradient: "from-sky-500 to-indigo-500",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
       { name: "React Native", icon: FaReact, color: "#61DAFB" },
    ],
  },

  {
    title: "Design & Collaboration",
    gradient: "from-slate-500 to-gray-700",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
    ],
  },
];
