
import React from 'react';

const WhatsAppButton: React.FC = () => {
    return (
         <a 
        href="https://wa.link/vlcs8c" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <div className="absolute -top-12 -left-32 bg-white text-foreground text-xs font-bold px-4 py-2 rounded-xl shadow-lg border border-border hidden md:block w-36 text-center">
          Chat with us!
          <div className="absolute bottom-[-6px] right-2 w-3 h-3 bg-white rotate-45 border-r border-b border-border"></div>
        </div>
      </a>
    );
};

export default WhatsAppButton;
