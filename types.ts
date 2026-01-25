
import { IconType } from "react-icons";
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
    category: 'Development' | 'Marketing';
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
}

export interface Partner {
    id: string;
    name: string;
    logo: string;
}

export interface Blog {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    link: string;
}

export interface Skill {
    name: string;
    level: number;
    icon: IconType;
    color?: string;
}

export interface SkillCategory {
  title: string;
  gradient: string;
  skills: Skill[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    type: string;
    icon: string;
    achievements: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    location: string;
    website: string;
    description: string;
    status: 'In Progress' | 'Completed';
    icon: string;
    gpa: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}
