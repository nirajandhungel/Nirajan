import React from 'react';
import { Metadata } from 'next';
import { SkillsShowcase } from '@/components/skills/skills-showcase';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { EducationTimeline } from '@/components/education-timeline';
import { SocialLinks } from '@/components/social-links';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT } from '@/data/contact';

export const metadata: Metadata = {
  title: 'About Nirajan Dhungel | Software Engineer Freelancer in Nepal',
  description: 'Learn about Nirajan Dhungel, a leading Software Engineer Freelancer in Nepal and professional Web Developer. Specializing in high-performance website development services using React, Next.js, and TypeScript.',
  keywords: [
    'Software Engineer Freelancer in Nepal',
    'Nirajan Dhungel',
    'Full Stack Developer Nepal',
    'Web Developer Kathmandu',
    'Freelance Web Developer Nepal',
    'Website Development Services Nepal',
    'Professional Software Engineer Nepal',
  ],
  openGraph: {
    title: 'About Nirajan Dhungel | Professional Web Developer & Full Stack Developer',
    description: 'Professional Web Developer with expertise in website development services. Specializing in React, Next.js, Node.js & TypeScript. Based in Kathmandu, Nepal.',
    url: 'https://nirajandhungel.com.np/about',
    images: [
      {
        url: 'https://nirajandhungel.com.np/nirajandhungel2.jpeg',
        width: 1200,
        height: 630,
        alt: 'Nirajan Dhungel - Full Stack Web Developer Portfolio',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-green-50">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h6 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
                ABOUT ME
              </h6>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Hi, I'm <span className="text-primary">Nirajan Dhungel</span>,<br />
                <span className="text-2xl md:text-4xl">Software Engineer Freelancer in Nepal</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Software Engineer Freelancer and Web Developer based in Kathmandu, Nepal, 
                specializing in building exceptional digital experiences. With expertise in modern web 
                technologies like React, Next.js, Node.js, and TypeScript, I provide professional 
                website development services to help businesses establish a strong online presence.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                Currently pursuing BSc. (Hons) in Software Engineering at the University of Bedfordshire, 
                I combine academic knowledge with practical experience to deliver high-quality web solutions. 
                Whether you need a custom website, web application, or e-commerce platform, I create fast, 
                accessible, and visually appealing applications tailored to your needs.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${CONTACT.phone.tel}`} className="hover:text-primary transition-colors">
                    {CONTACT.phone.display}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{CONTACT.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">Connect with me:</p>
                <SocialLinks />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6"
                  asChild
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10 rounded-lg px-8 py-6"
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
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/nirajandhungel2.jpeg"
                  alt="Nirajan Dhungel - Full Stack Web Developer Portfolio"
                  title="Nirajan Dhungel - Professional Web Developer in Nepal"
                  width={500}
                  height={500}
                  priority
                  className="relative w-full max-w-md rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Collage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Meet <span className="text-primary">Nirajan Dhungel</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional Web Developer delivering quality website development services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/nirajandhungel3.png"
                alt="Nirajan Dhungel - Web Developer and Full Stack Developer"
                title="Nirajan Dhungel - Website Development Services"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/nirajandhungel.png"
                alt="Nirajan Dhungel - Professional Web Developer Portfolio"
                title="Nirajan Dhungel - Full Stack Developer Nepal"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm currently available for freelance work and exciting projects. 
            Let's create something amazing together!
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 rounded-lg px-10 py-6 text-lg font-bold"
            asChild
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
