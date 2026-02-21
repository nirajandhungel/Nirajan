'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    metric: '3x',
    label: 'Traffic Increase',
    description: 'Organic search growth for founder-led brands',
  },
  {
    icon: Zap,
    metric: '95+',
    label: 'Lighthouse Score',
    description: 'Performance-first web builds',
  },
  {
    icon: Target,
    metric: '100%',
    label: 'Client Satisfaction',
    description: 'Delivered on time, every time',
  },
];

export function ResultsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-section-dark overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6 text-center"
        >
          Results That Speak
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {results.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-cinematic p-8 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-heading-gold mb-2">
                  {item.metric}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
