
'use client';

import { useState } from 'react';

const faqs = [
  { 
    q: 'What services do you offer as a Software Engineer Freelancer in Nepal?', 
    a: 'As a Software Engineer Freelancer in Nepal, I offer comprehensive digital solutions including professional website development, mobile app development, UI/UX design, and SEO services. My team and I focus on building custom, performance-oriented applications that drive business growth.'
  },
  { 
    q: 'How much does website development cost in Nepal?', 
    a: 'Website development costs in Nepal vary based on complexity. We offer packages starting from Rs. 25,000 for basic sites to more advanced custom solutions for e-commerce and enterprises. Contact me for a transparent estimate tailored to your budget.'
  },
  { 
    q: 'Why should I hire a freelance web developer in Nepal?', 
    a: 'Hiring a freelance web developer in Nepal like me provides you with direct communication, personalized attention, and cost-effective high-quality solutions. I combine global software engineering standards with local market understanding to deliver the best results.'
  },
  { 
    q: 'What is your process for SEO in Nepal?', 
    a: 'Our SEO process includes deep keyword research for the Nepal market, on-page optimization, technical SEO fixes, and backlink strategies. We focus on long-term organic growth to ensure your business ranks high for relevant search terms.'
  },
  { 
    q: 'Do you provide maintenance for websites?', 
    a: 'Yes, I provide ongoing maintenance and support for all projects. This ensures your website stays secure, updated, and continues to perform optimally as your business grows.'
  }
];



const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12">
            <h6 className="text-primary font-bold uppercase tracking-widest mb-2">FAQs</h6>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Frequently <span className="text-primary">Asked</span> Questions</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Welcome to our FAQ section! Here you'll find quick answers to the most common questions about our development products and services.
            </p>
            <img 
              src="https://picsum.photos/600/500?random=10" 
              alt="FAQ Illustration" 
              className="w-full rounded-3xl shadow-xl hidden lg:block"
            />
          </div>

          <div className="w-full lg:w-7/12">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between group"
                  >
                    <span className={`text-lg font-bold transition-colors ${openIdx === idx ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {faq.q}
                    </span>
                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 text-primary ${openIdx === idx ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-[300px] opacity-100 border-t' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="p-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
