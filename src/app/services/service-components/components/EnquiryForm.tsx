
'use client';

import { useState } from 'react';
import { Rocket, ShieldHalf, Smartphone, Eye, Search, ChevronRight } from 'lucide-react';


const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({ url: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We've received your request for: ${formData.url}. We'll contact you at ${formData.email} soon.`);
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-7/12 text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Time is Running <span className="text-black/30 underline">Out!</span></h2>
            <p className="text-xl mb-12 opacity-90 max-w-xl leading-relaxed">
              Don't miss the chance to unleash the full potential of your business with Softbenz's expert Website Development. Get your free report now.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <QualityBenefit icon={Rocket} text="Speed Check" />
              <QualityBenefit icon={ShieldHalf} text="Security Audit" />
              <QualityBenefit icon={Smartphone} text="Mobile Friendly" />
              <QualityBenefit icon={Eye} text="UX Analysis" />
              <QualityBenefit icon={Search} text="SEO Score" />
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-foreground mb-2">Check Website Quality</h3>
                <p className="text-muted-foreground">Get a free professional audit in your inbox</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">Website URL *</label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://example.com"
                    className="w-full px-6 py-4 bg-muted border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all"
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-muted border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter phone"
                    className="w-full px-6 py-4 bg-muted border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center">
                  Get Free Audit <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualityBenefit: React.FC<{ icon: React.ElementType; text: string }> = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <Icon className="w-8 h-8" />
    <span className="text-sm font-bold">{text}</span>
  </div>
);

export default EnquiryForm;
