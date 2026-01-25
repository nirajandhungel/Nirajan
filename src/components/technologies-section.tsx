"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Database, Cloud, AppWindow, Globe } from "lucide-react"

// Floating icon helper
const FloatingIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute rounded-full bg-white shadow-md p-3"
  >
    {children}
  </motion.div>
)

export default function TechnologiesSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-primary mb-3">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Technologies We Rely On To{' '}
            <span className="text-primary">Achieve Success</span>
          </h2>

          <Tabs defaultValue="database" className="mt-10">
            <TabsList className="bg-transparent p-0 gap-6">
              <TabsTrigger value="web" className="data-[state=active]:text-primary">Web Development</TabsTrigger>
              <TabsTrigger value="app" className="data-[state=active]:text-primary">App Development</TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:text-primary">Database</TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:text-primary">Cloud Platform</TabsTrigger>
            </TabsList>

            <TabsContent value="database" className="mt-8">
              <div className="flex flex-wrap gap-6 items-center">
                <Badge variant="secondary" className="flex items-center gap-2 text-base">
                  <Database className="h-5 w-5" /> MongoDB
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 text-base">
                  <Database className="h-5 w-5" /> MySQL
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 text-base">
                  <Database className="h-5 w-5" /> PostgreSQL
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 text-base">
                  <Database className="h-5 w-5" /> SQLite
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2 text-base">
                  <Database className="h-5 w-5" /> Redis
                </Badge>
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <div className="flex flex-wrap gap-6">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </TabsContent>

            <TabsContent value="app" className="mt-8">
              <div className="flex flex-wrap gap-6">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">React Native</Badge>
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-8">
              <div className="flex flex-wrap gap-6">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">GCP</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT ILLUSTRATION + FLOATING ICONS */}
        <div className="relative flex justify-center">
          <div className="relative w-[360px] h-[360px] rounded-full bg-primary/20 flex items-center justify-center">
            {/* Main Person Illustration Placeholder */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="/illustrations/developer.png"
                alt="Developer illustration"
                className="w-56 h-auto"
              />
            </motion.div>

            {/* Floating icons */}
            <FloatingIcon delay={0}>
              <Globe className="text-primary" />
            </FloatingIcon>

            <FloatingIcon delay={1}>
              <AppWindow className="text-primary" />
            </FloatingIcon>

            <FloatingIcon delay={2}>
              <Cloud className="text-primary" />
            </FloatingIcon>

            <FloatingIcon delay={3}>
              <Database className="text-primary" />
            </FloatingIcon>
          </div>
        </div>
      </div>
    </section>
  )
}
