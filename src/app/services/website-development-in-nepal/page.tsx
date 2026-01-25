import { Metadata } from 'next';
import Hero from '../service-components/components/Hero';
import InfoCards from '../service-components/components/InfoCards';
import TechStack from '../service-components/components/TechStack';
import Roadmap from '../service-components/components/Roadmap';
import EnquiryForm from '../service-components/components/EnquiryForm';
import FAQ from '../service-components/components/FAQ';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Website Development Services in Nepal | Nirajan Dhungel',
  description: 'Professional website development services in Nepal by Nirajan Dhungel. Expert web developer offering custom website design, e-commerce solutions, and full-stack development using React, Next.js, and Node.js. Get a modern, responsive website for your business.',
  keywords: [
    'Website Development Services',
    'Website Development Nepal',
    'Web Development Kathmandu',
    'Custom Website Development',
    'E-commerce Website Nepal',
    'React Website Development',
    'Next.js Development Services',
    'Professional Web Developer Nepal',
    'Nirajan Dhungel Services',
  ],
  openGraph: {
    title: 'Website Development Services in Nepal | Nirajan Dhungel',
    description: 'Get professional website development services in Nepal. Custom web solutions for businesses, e-commerce, and startups.',
    url: 'https://nirajandhungel.com.np/services/website-development-in-nepal',
    images: [
      {
        url: 'https://nirajandhungel.com.np/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Website Development', url: '/services/website-development-in-nepal' }
]);

const IndustryCard: React.FC<{ title: string; icon: string; desc: string }> = ({ title, icon, desc }) => (
  <div className="p-8 rounded-3xl bg-light border-2 border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl">
    <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 shadow-md transition-all group-hover:bg-primary group-hover:text-white">
      <i className={`fa-solid ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3 text-lg font-bold">
    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-[10px]">
      <i className="fa-solid fa-check"></i>
    </div>
    <span>{text}</span>
  </div>
);

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen font-sans bg-white selection:bg-primary/30 selection:text-primary">
      
      <main>
        <Hero />
        <InfoCards />

        {/* Industries Served */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h6 className="text-primary font-bold uppercase tracking-widest mb-2">Industries We Serve</h6>
              <h2 className="text-4xl md:text-5xl font-black text-foreground">Proud to Deliver Excellence <span className="text-primary">Every Time</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <IndustryCard title="E-commerce" icon="fa-cart-shopping" desc="Redefining online shopping with innovative solutions and custom features." />
              <IndustryCard title="Travel & Trekking" icon="fa-mountain-sun" desc="Delivering top-tier experiences for adventure and trekking agencies." />
              <IndustryCard title="E-Learning" icon="fa-user-graduate" desc="Empowering education with innovative learning management platforms." />
              <IndustryCard title="Informative" icon="fa-circle-info" desc="Clean, professional custom designs for diverse informative sites." />
            </div>
          </div>
        </section>

        <TechStack />
        <Roadmap />

        {/* Why Choose Us */}
        <section className="py-24 bg-foreground text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="grid grid-cols-12 h-full">
               {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white"></div>)}
             </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h6 className="text-primary font-bold uppercase tracking-widest mb-4">Why Choose Us</h6>
                <h2 className="text-4xl md:text-6xl font-black mb-8">We help you expand <span className="text-primary">your business</span> through tech</h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                  Our team of highly skilled website designers and developers provide exceptional, responsive, and performance-driven solutions tailored for your business choice.
                </p>
                <div className="space-y-6">
                  <CheckItem text="Robust Functionality" />
                  <CheckItem text="Client-Centric Approach" />
                  <CheckItem text="Innovative Design Thinking" />
                  <CheckItem text="Timely Delivery Guarantee" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                 <img src="https://picsum.photos/800/600?random=11" alt="Our Work" className="rounded-3xl shadow-2xl border-4 border-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* <Portfolio /> */}

        <EnquiryForm />

        {/* Partners */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h6 className="text-muted-foreground font-bold mb-10 opacity-50 uppercase tracking-[0.2em]">Trusted by Top-Rated Companies</h6>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity">
               {['UNDP', 'Kaya Lab', 'Gini London', 'Ash Inc', 'Oriflame', 'Kumari Job'].map(name => (
                 <div key={name} className="text-2xl font-black text-foreground/40 text-center flex-1 min-w-[120px]">{name}</div>
               ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="bg-white p-12 lg:p-20 rounded-[60px] shadow-xl border border-border flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Let's Connect and <br/><span className="text-primary">Turn Your Vision into Reality</span></h2>
                <p className="text-lg text-muted-foreground">Available from 9:00 AM to 6:00 PM, Monday to Friday.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a href="tel:9801848492" className="px-10 py-5 bg-foreground text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center">
                  <i className="fa-solid fa-phone mr-3"></i> 9801848492
                </a>
                <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    
    </div>
    </>
  );
}
