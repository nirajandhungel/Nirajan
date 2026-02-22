import Image from 'next/image';
import { Calendar, Smile, CheckSquare, Users, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white to-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-7/12 mt-12 lg:mt-0 animate-slide-up text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold bg-primary/10 text-primary rounded-full uppercase tracking-wider">
              Innovation & Excellence in Kathmandu
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Expert Website <span className="text-primary">Development Services in Kathmandu, Nepal</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
              Empowering local businesses with high-performance, SEO-friendly custom websites.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Crafting Digital Excellence: Elevate Your Online Presence with Innovative Website Development Solutions in Nepal. Tailored Designs, Seamless Functionality, and Future-Ready Technology – Your Journey to Success Starts Here!
            </p>
            <button className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-3 transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95">
              <span>Let's Start Your Project</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="w-full lg:w-5/12 relative">
            <div className="relative z-10 animate-float">
              <Image 
                src="/media/website-dev-visual.svg" 
                alt="Expert Website Development in Kathmandu, Nepal - Nirajan Dhungel" 
                title="Professional Web Development Solutions"
                width={600}
                height={600}
                priority
                className="w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Stats Grid Overlay */}
            <div className="grid grid-cols-2 gap-4 mt-12 lg:absolute lg:top-1/2 lg:-right-12 lg:transform lg:-translate-y-1/2 lg:w-80">
              <StatCard value="7+" label="Years Experience" icon={Calendar} />
              <StatCard value="300+" label="Happy Clients" icon={Smile} />
              <StatCard value="400+" label="Success Projects" icon={CheckSquare} />
              <StatCard value="80+" label="Team Members" icon={Users} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ value: string; label: string; icon: React.ElementType }> = ({ value, label, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-default">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
  </div>
);

export default Hero;
