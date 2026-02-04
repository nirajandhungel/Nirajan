
import React from 'react';
import { WHATSAPP } from '@/data/contact';
import { getWhatsAppLink } from '@/lib/smart-links';

const WhatsAppButton: React.FC = () => {
    return (
         <a 
        href={getWhatsAppLink(WHATSAPP.fullNumber)} 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#b8860b] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        style={{
          boxShadow: '0 8px 32px rgba(196, 30, 58, 0.3), 0 0 20px rgba(211, 37, 37, 0.4)'
        }}
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <div className="absolute -top-14 -left-32 bg-card border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block w-36 text-center">
          Chat with me!
          <div className="absolute bottom-[-6px] right-2 w-3 h-3 bg-card rotate-45 border-r border-b border-white/10"></div>
        </div>
      </a>
    );
};

export default WhatsAppButton;
