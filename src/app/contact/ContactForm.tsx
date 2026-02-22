"use client";

import React, { useState } from "react";
import { useEnquiryModal } from "../EnquiryContext";
import { CONTACT, SOCIAL_LINKS, WHATSAPP } from "@/data/contact";
import { getWhatsAppLink } from "@/lib/smart-links";
import { Mail, Phone, MapPin, Briefcase, Github, Linkedin, Instagram, Facebook, Twitter, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm = () => {
  const { openAudit } = useEnquiryModal();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formSource: 'Contact Page',
          honeypot
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message || "Your message has been sent successfully. We'll get back to you shortly.");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again later.');
    }
  };

  const contactInfo = [
    {
      title: "Phone Number",
      value: CONTACT.phone.display,
      icon: Phone,
      link: `tel:${CONTACT.phone.tel}`,
    },
    {
      title: "Email Address",
      value: CONTACT.email,
      icon: Mail,
      link: `mailto:${CONTACT.email}?subject=Inquiry from Website`,
    },
    {
      title: "Location",
      value: CONTACT.location,
      icon: MapPin,
      link: "https://www.google.com/maps/place/Kathmandu,+Nepal",
    },
    {
      title: "Availability",
      value: "Available for Freelance",
      icon: Briefcase,
      link: getWhatsAppLink(WHATSAPP.fullNumber),
    },
  ];

  const socialLinks = [
    { name: SOCIAL_LINKS.github.name, url: SOCIAL_LINKS.github.url, Icon: Github },
    { name: SOCIAL_LINKS.linkedin.name, url: SOCIAL_LINKS.linkedin.url, Icon: Linkedin },
    { name: SOCIAL_LINKS.instagram.name, url: SOCIAL_LINKS.instagram.url, Icon: Instagram },
    { name: SOCIAL_LINKS.facebook.name, url: SOCIAL_LINKS.facebook.url, Icon: Facebook },
    { name: SOCIAL_LINKS.twitter.name, url: SOCIAL_LINKS.twitter.url, Icon: Twitter },
  ];

  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Title Section */}
      <section id="strategy-call" className="relative py-24 overflow-hidden scroll-mt-24">

        
        <div className="container relative z-10 mx-auto px-4 md:px-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm text-primary font-bold uppercase tracking-widest">Contact</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Get In <span className="text-heading-gold">Touch</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to start your project? I'm here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Audit CTA Section */}
      <section id="audit" className="py-12 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-10">
          <div
            className="rounded-sm p-8 md:p-12 text-center border"
            style={{
              background: 'linear-gradient(135deg, rgba(196,30,58,0.1) 0%, rgba(0,0,0,0.3) 100%)',
              borderColor: 'rgba(196,30,58,0.3)',
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get a <span className="text-heading-gold">Free Website / SEO Audit</span>
            </h3>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              Tell me about your site and I&apos;ll send you a personalised audit with actionable fixes — no strings attached.
            </p>
            <button
              type="button"
              onClick={openAudit}
              className="btn-primary-cinematic px-8 py-3 text-white font-bold rounded-sm"
            >
              Request Free Audit
            </button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="card-cinematic rounded-sm p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-black text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-white/60 mb-10">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/40 p-4 rounded-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/40 p-4 rounded-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/40 p-4 rounded-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/40 p-4 rounded-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Message *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder:text-white/40 p-4 rounded-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                  ></textarea>

                  {/* Honeypot field */}
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input 
                      type="text" 
                      id="contact-website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Status message */}
                  {statusMessage && (
                    <div className={`flex items-center gap-3 p-4 rounded-sm text-sm font-medium ${
                      status === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {status === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className="btn-primary-cinematic px-10 py-4 text-white font-bold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Sent Successfully
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info Side */}
              <div className="lg:col-span-5">
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm  flex items-center justify-center group-hover:bg-primary/20 transition-all">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xs font-bold uppercase text-white/40 mb-1 tracking-widest">
                            {info.title}
                          </h3>
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-bold text-white hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Connect on <span className="text-heading-gold">Social Media</span>
            </h2>
            <p className="text-white/60 text-lg">
              Follow me on social platforms to stay updated
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, idx) => {
              const Icon = social.Icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-cinematic p-8 text-center group"
                >
                  <Icon className="w-8 h-8 mx-auto text-white/60 group-hover:text-primary transition-colors mb-3" />
                  <h3 className="text-sm font-bold text-white">
                    {social.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
