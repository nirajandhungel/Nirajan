import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/smart-links"
import { WHATSAPP } from "@/data/contact"

export function CTASection() {
  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #c41e3a 0%, #8b0000 50%, #0a0a0a 100%)',
      }}
    >
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
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-white/90">
            Available for Projects
          </span>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Start Your
          <span className="block text-heading-gold mt-2">Next Project?</span>
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let's collaborate and turn your vision into reality. I'm available for 
          freelance projects and remote work opportunities.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-accent hover:text-black rounded-xl px-10 py-6 text-lg font-bold group transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-xl px-10 py-6 text-lg font-bold group transition-all duration-300"
            asChild
          >
            <a
              href={getWhatsAppLink(WHATSAPP.fullNumber)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
