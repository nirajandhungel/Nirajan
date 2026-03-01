import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import {
  buildServiceMetadata,
  buildServiceStructuredData,
} from '@/lib/service-seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return buildServiceMetadata(service, slug);
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
        <svg
          className="w-4 h-4 sm:w-3 sm:h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-white text-sm sm:text-base">{text}</span>
    </div>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const { title, description, features, content, steps, icon: iconPath } =
    service;
  const structuredData = buildServiceStructuredData(service, slug);

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero / Introduction */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, #ffd700 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="text-heading-gold">{title}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="container relative z-10 mx-auto px-4 mt-20">
          <div className="space-y-12 lg:space-y-24 ">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                <div className="w-full lg:w-5/12">
                  <div
                    className={`flex flex-col gap-6 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right lg:items-end'}`}
                  >
                    <div className="text-primary font-black text-6xl opacity-10 select-none">
                      0{index + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-accent leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-4 mt-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                      <span className="px-4 py-2 bg-primary-cinematic text-white rounded-sm font-bold">
                        {index === 0
                          ? 'Foundation'
                          : index === 1
                            ? 'Implementation'
                            : 'Post-Delivery'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-7/12">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-heading-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative aspect-[16/10] w-full overflow-hidden  lg:p-12 shadow-2xl">
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                          src={step.visual}
                          alt={`${title} - ${step.title} step ${index + 1}`}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(196,30,58,0.3)] group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-heading-gold/5 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-cinematic p-6 sm:p-8 text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="w-[4.5rem] h-[4.5rem] sm:w-16 sm:h-16 bg-white/90 border border-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon className="w-10 h-10 sm:w-8 sm:h-8 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-accent mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits / Detailed Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, #c41e3a 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-sm text-primary font-bold uppercase tracking-widest">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <span className="text-heading-gold">{content.heading}</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                {content.text}
              </p>
              <div className="space-y-4">
                {content.benefits.map((benefit, i) => (
                  <CheckItem key={i} text={benefit} />
                ))}
              </div>
            </div>

            <div className="relative group">

              <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden shadow-2xl bg-primary/10  border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                {/* <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" /> */}
                <Image
                  src={iconPath}
                  alt={`${title} service - ${content.heading}`}
                  width={256}
                  height={256}
                  loading="lazy"
                  className=" h-full w-full relative z-10 object-contain drop-shadow-2xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mt-5 text-3xl md:text-4xl font-black text-white">
              What Makes This{' '}
              <span className="text-heading-gold">{title}</span> Service Stand
              Out
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-sm border border-primary/10 bg-gradient-to-b from-white/[0.04] to-black/60 p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-bold uppercase text-accent sm:text-sm ">
                    Highlight 0{index + 1}
                  </div>
                  <div className="h-9 w-9 sm:h-8 sm:w-8 rounded-sm bg-primary/20 ring-1 ring-primary/40 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 sm:h-4 sm:w-4 text-primary"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="mb-5 text-xs sm:text-sm text-white/80">{benefit}</p>

                <div className="relative h-20 w-full overflow-hidden rounded-sm border border-dashed border-white/10 bg-gradient-to-tr from-primary/10 via-transparent to-heading-gold/10 flex items-center justify-center p-2">
                  <Image
                    src={steps[index % steps.length].visual}
                    alt={`${title} highlight ${index + 1}`}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-full w-auto object-contain  contrast-125 grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-black border-t-2 border-white/10">
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals with our
            professional {title} services.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-accent text-black px-10 py-4 rounded-sm font-bold  uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
