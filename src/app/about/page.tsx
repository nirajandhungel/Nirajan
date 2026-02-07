import React from 'react';
import { Metadata } from 'next';
import { SkillsShowcase } from '@/components/skills/skills-showcase';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { EducationTimeline } from '@/components/education-timeline';
import { SocialLinks } from '@/components/social-links';
import { Download, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CONTACT } from '@/data/contact';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'About Nirajan Dhungel | Dedicated Software Engineer & Web Developer',
  description: 'Get to know Nirajan Dhungel, a professional Software Engineer based in Kathmandu. With a BSc (Hons) in Software Engineering, I specialize in building robust, scalable web applications.',
  keywords: [
    'Nirajan Dhungel Biography',
    'Software Engineer Kathmandu',
    'Full Stack Developer Nepal',
    'IT Professional Profile',
    'React Expert Nepal',
    'Web Development Career',
    'BSc Software Engineering Graduate'
  ],
  openGraph: {
    title: 'About Me | Nirajan Dhungel - Software Engineer',
    description: 'Combining academic excellence with practical expertise. Learn about my journey, skills, and passion for technology.',
    url: 'https://nirajandhungel.com.np/about',
    siteName: 'Nirajan Dhungel',
    images: [
      {
        url: '/nirajandhungel3.png',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel Profile',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-primary"></span>
                <span className="text-sm text-primary font-bold uppercase tracking-widest">About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Hi, I'm <span className="text-heading-gold">Nirajan</span>
              </h1>
              <p className="text-xl text-white/80 mb-4">
                Software Engineer & Web Developer
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                I'm a passionate Software Engineer based in Kathmandu, Nepal, specializing in 
                building exceptional digital experiences. With expertise in modern web technologies 
                like React, Next.js, Node.js, and TypeScript, I help businesses establish a 
                strong online presence.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Currently pursuing BSc. (Hons) in Software Engineering, I combine academic 
                knowledge with practical experience to deliver high-quality web solutions 
                for international clients.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${CONTACT.phone.tel}`} className="hover:text-white transition-colors">
                    {CONTACT.phone.display}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{CONTACT.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-white mb-3">Connect with me:</p>
                <SocialLinks />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="btn-primary-cinematic text-white rounded-xl px-8 py-6 font-bold group"
                  asChild
                >
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-outline-gold rounded-xl px-8 py-6 text-base font-bold group
             text-gold hover:text-gold"
                  asChild
                >
                  <a href="/nirajan_cv.pdf" download>
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Red Circle Behind Portrait */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full -z-10"
                  style={{
                    background: 'radial-gradient(circle, #c41e3a 0%, #8b0000 80%)',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -z-20" />
                <OptimizedImage
                  src="/nirajandhungel3.png"
                  alt="Nirajan Dhungel - Software Engineer"
                  title="Nirajan Dhungel - Professional Web Developer"
                  width={850}
                  height={850}
                  isLCP={true}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="relative w-full h-full rounded-3xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsShowcase />

      {/* Experience Section */}
      <ExperienceTimeline />

      {/* Education Section */}
      <EducationTimeline />

      <FAQ />
    </div>
  );
}
