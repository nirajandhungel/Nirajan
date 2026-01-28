import { Button } from "../components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 lg:py-20  relative overflow-hidden bg-white">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-1 h-1  rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="border-l-4 border-[#3bb54a] pl-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {"Let's connect and "}
              <span className="text-[#3bb54a]">turn your vision into reality.</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              We are available from 5:00 AM to 9:00 PM, Monday to Friday.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-end">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              REACH OUT NOW!
            </p>
            <a href="tel:9825883910" className="text-3xl lg:text-4xl font-bold text-[#3bb54a] mb-4">
              9825883910
            </a>
            <Button className="bg-[#3bb54a] text-white hover:bg-[#2ea03d] rounded-full px-8 py-6">
              {"Let's Start Conversation"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
