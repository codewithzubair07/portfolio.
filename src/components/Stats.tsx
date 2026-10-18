import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

const STATS: StatItem[] = [
  {
    value: "168+",
    label: "Merged Open-Source PRs",
    description: "Delivered end-to-end fixes across 102 repositories in Web3, backend, and frontend ecosystems.",
  },
  {
    value: "₹50K+",
    label: "Bounties & Grants Earned",
    description: "Earned via Drips Wave, GSSoC '26, and open-source grant programs for high-impact technical contributions.",
  },
  {
    value: "Top 50",
    label: "MLH Midnight Hackathon",
    description: "Placed Top 50 in the global AI track with ProofLend, a zero-knowledge conversational eligibility agent.",
  },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24 relative border-t border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-8 h-px bg-stroke inline-block" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            Open Source & Impact
          </span>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative p-8 md:p-10 rounded-3xl bg-surface/40 border border-stroke hover:border-stroke/80 hover:bg-surface/70 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-px accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Large Stat Value */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-4 tracking-tight tabular-nums group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <h3 className="text-lg md:text-xl font-medium text-text-primary mb-2">
                  {stat.label}
                </h3>
              </div>

              {/* Stat Description */}
              <p className="text-xs md:text-sm text-muted leading-relaxed mt-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

