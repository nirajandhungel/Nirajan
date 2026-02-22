
'use client';

import { useState } from 'react';
import { Code2, Paintbrush, Box, LayoutTemplate, Braces, Server, Cpu, Database, Blocks, Cloud, Container, Globe, ServerCog, CheckCircle } from 'lucide-react';


interface TechItem {
  name: string;
  icon: React.ElementType;
  desc: string;
}

const frontend: TechItem[] = [
  { name: 'HTML5', icon: LayoutTemplate, desc: 'The fundamental markup language for web structure.' },
  { name: 'CSS3', icon: Paintbrush, desc: 'Styling language for layout, animation, and responsive design.' },
  { name: 'React JS', icon: Box, desc: 'Powerful library for building dynamic components and single-page apps.' },
  { name: 'Next JS', icon: Blocks, desc: 'The React framework for production-grade web applications.' },
  { name: 'TypeScript', icon: Braces, desc: 'Typed superset of JavaScript that scales efficiently.' }
];

const backend: TechItem[] = [
  { name: 'Node JS', icon: Server, desc: 'JavaScript runtime built on Chrome V8 engine for server-side code.' },
  { name: 'Python', icon: Cpu, desc: 'Versatile language for backend logic, AI, and complex processing.' },
  { name: 'PHP', icon: Code2, desc: 'Popular server-side scripting language powering WordPress and Laravel.' },
  { name: 'Laravel', icon: Database, desc: 'Elegant PHP framework for modern web development.' }
];

const infrastructure: TechItem[] = [
  { name: 'AWS', icon: Cloud, desc: 'Amazon Web Services for scalable cloud hosting and infrastructure.' },
  { name: 'Docker', icon: Container, desc: 'Containerization for consistent deployment across environments.' },
  { name: 'Google Cloud', icon: Globe, desc: 'Robust cloud platform for high-performance computing.' },
  { name: 'Digital Ocean', icon: ServerCog, desc: 'Simple cloud computing for developers and startups.' }
];

const TechStack: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechItem>(frontend[2]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary font-bold uppercase tracking-widest mb-2">Technology Stack</h6>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Technologies We Work With in <span className="text-primary">Website Development</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-7/12 space-y-12">
            <TechGroup title="Frontend" items={frontend} onHover={setActiveTech} activeName={activeTech.name} />
            <TechGroup title="Backend" items={backend} onHover={setActiveTech} activeName={activeTech.name} />
            <TechGroup title="Infrastructure" items={infrastructure} onHover={setActiveTech} activeName={activeTech.name} />
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-light p-10 rounded-3xl border-2 border-primary/10 min-h-[300px] flex flex-col justify-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                 {/* This would be an icon from the tech item */}
                 <activeTech.icon className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{activeTech.name}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeTech.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-primary/10 flex items-center text-primary font-bold">
                <span>Expertly Implemented</span>
                <CheckCircle className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechGroup: React.FC<{ 
  title: string; 
  items: TechItem[]; 
  onHover: (item: TechItem) => void;
  activeName: string;
}> = ({ title, items, onHover, activeName }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-foreground flex items-center">
      <span className="w-8 h-1 bg-primary mr-3 rounded-full"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <button
          key={item.name}
          onMouseEnter={() => onHover(item)}
          className={`px-6 py-3 rounded-xl border-2 font-bold transition-all duration-300 ${
            activeName === item.name 
            ? 'bg-primary border-primary text-white scale-110' 
            : 'bg-white border-border text-foreground hover:border-primary/50'
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
);

export default TechStack;
