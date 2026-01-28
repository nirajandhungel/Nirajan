import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"
import Image from "next/image"
import {CONTACT}  from '@/data/contact';

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-background to-light overflow-hidden">

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-5 sm:py-7 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-light px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl mb-5 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3bb54a]" />
              <span className="text-xs sm:text-sm font-medium">
                Software Engineer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Hello, I'm{" "}
              <span className="bg-[#188025] bg-clip-text text-transparent">
                Nirajan Dhungel
              </span>
              {" "}- Software Engineer & Web Developer in Kathmandu, Nepal
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
              Leading Software Developer in Kathmandu, Nepal specializing in professional website development, 
              app solutions, and SEO services. I build exceptional digital experiences that drive growth 
              for local and international businesses.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-10">
              {[
                ["10+", "Projects Completed"],
                ["2+", "Years Experience"],
                ["100%", "Client Satisfaction"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#288834]">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                className="
                  bg-[#3bb54a] hover:bg-[#0e9b21] text-white rounded-lg 
                  px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base group
                "
                asChild
              >
                <Link href="/contact">
                  Hire Me Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  border-2 border-[#3bb54a] text-[#3bb54a] hover:bg-[#3bb54a]/10 hover:text-black
                  rounded-lg px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base group
                "
                asChild
              >
                <a href="/nirajan_cv.pdf" download>
                  <Download className="mr-2 w-4 h-4" />
                  View CV
                </a>
              </Button>
            </div>

            {/* Contact */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT.email}</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border"></div>
              <div>Available for Freelance</div>
            </div>
          </div>

          {/* Right Image - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-[#3bb54a]/20 rounded-full blur-3xl"></div>
              <Image
                src="/nirajandhungel3.png"
                alt="Nirajan Dhungel - Software Engineer Freelancer in Nepal and Full Stack Web Developer"
                title="Nirajan Dhungel - Expert Software Engineer and Web Developer in Kathmandu, Nepal"
                width={500}
                height={500}
                priority
                className="relative w-full h-auto rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
