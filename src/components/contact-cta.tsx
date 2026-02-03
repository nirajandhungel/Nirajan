import Link from "next/link"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { CONTACT, WHATSAPP } from "@/data/contact"
import { getWhatsAppLink } from "@/lib/smart-links"

export function ContactCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with Red Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 50%, #0a0a0a 100%)',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div 
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)',
          }}
        />
        
        {/* Small Circles */}
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-accent/50"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 rounded-full bg-accent/30"></div>
        
        {/* Decorative Arc */}
        <div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-2 border-white/10"
          style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">
              Available for New Projects
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Let's Build Something
            <span className="block text-heading-gold mt-2">Exceptional Together</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'm here to help international clients 
            and businesses create powerful digital solutions that drive results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href={getWhatsAppLink(WHATSAPP.fullNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>
          
          {/* Quick Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <a 
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20"></span>
            <a 
              href={`tel:${CONTACT.phone.tel}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {CONTACT.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
