'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { CONTACT, WHATSAPP, CALENDLY } from '@/data/contact';
import { getWhatsAppLink } from '@/lib/smart-links';
import AuditModal from '@/components/AuditModal';

export function ContactCTA() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-primary/10 border-t-2 border-white/10">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Heading - Raw, Bold */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight font-big-shoulders">
            LET'S BUILD
            <span className="block text-accent mt-2">SOMETHING EXCEPTIONAL</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-noto-sans">
            Ready to bring your vision to life? Book a free strategy call or get a free website/SEO audit. 
            Working with global founders and startups — remote-first.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={CALENDLY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent text-black px-8 py-5 font-bold text-base uppercase tracking-wide hover:bg-white transition-all duration-300 font-big-shoulders"
            >
              <Mail className="w-5 h-5" />
              BOOK STRATEGY CALL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              type="button"
              onClick={() => setIsAuditOpen(true)}
              className="group inline-flex items-center gap-2 border-2 border-white text-white px-8 py-5 font-bold text-base uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 font-big-shoulders"
            >
              FREE AUDIT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Quick Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/60 font-noto-sans">
            <a 
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20"></span>
            <a 
              href={getWhatsAppLink(WHATSAPP.fullNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20"></span>
            <a 
              href={`tel:${CONTACT.phone.tel}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              {CONTACT.phone.display}
            </a>
          </div>
        </div>
      </div>

      <AuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />
    </section>
  );
}
