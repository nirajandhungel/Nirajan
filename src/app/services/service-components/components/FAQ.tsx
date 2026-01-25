
'use client';

import { useState } from 'react';

const faqs = [
  { 
    q: 'What types of website development services do you offer?', 
    a: 'As a leading website design and development company in Nepal, we offer services for E-Commerce, Travel, E-Learning, and custom informative websites. We develop from scratch to meet your specific business requirements.'
  },
  { 
    q: 'How much does it cost to develop a website?', 
    a: 'Costs vary based on features, complexity, and type. We provide high-value solutions at competitive rates. Contact us for a detailed proposal based on your specific project needs.'
  },
  { 
    q: 'How long does it take to build a website?', 
    a: 'A basic informative website usually takes 3-4 weeks. More complex applications with advanced features like e-commerce or booking systems can take 8-12 weeks.'
  },
  { 
    q: 'Do you develop SEO-friendly websites?', 
    a: 'Yes, developing SEO-friendly websites is our standard practice. We integrate optimized content, clean code, and technical SEO strategies into every project.'
  },
  { 
    q: 'Do you offer support after development?', 
    a: 'Absolutely. We provide ongoing assistance, security updates, and performance monitoring to ensure your online presence remains strong and effective.'
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
