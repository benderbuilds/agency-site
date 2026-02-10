"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stepColors = [
  { ring: "border-cyan/30", text: "text-cyan", glow: "shadow-cyan/20" },
  { ring: "border-purple/30", text: "text-purple", glow: "shadow-purple/20" },
  { ring: "border-amber/30", text: "text-amber", glow: "shadow-amber/20" },
  { ring: "border-cyan/30", text: "text-cyan", glow: "shadow-cyan/20" },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 px-6 py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Methodology</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-center text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            Our <span className="gradient-text">Approach</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted"
          >
            A proven methodology that balances speed with rigor. Every
            engagement follows this framework — adapted to your context.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[52px] z-0 hidden md:block">
            <svg className="h-2 w-full" preserveAspectRatio="none">
              <line
                x1="12.5%"
                y1="50%"
                x2="87.5%"
                y2="50%"
                stroke="url(#process-gradient)"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient id="process-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0,212,255,0.4)" />
                  <stop offset="50%" stopColor="rgba(139,92,246,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,212,255,0.4)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile connecting line */}
          <div className="absolute bottom-0 left-[35px] top-0 w-px md:hidden">
            <div className="h-full w-full bg-gradient-to-b from-cyan/20 via-purple/20 to-cyan/20" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }} />
          </div>

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const colors = stepColors[i];
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="group relative flex gap-8 md:flex-col md:gap-0 md:text-center"
                >
                  {/* Step node */}
                  <div className="relative z-10 md:mx-auto">
                    <div
                      className={`flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-2xl border ${colors.ring} bg-surface transition-shadow duration-300 group-hover:shadow-lg group-hover:${colors.glow}`}
                    >
                      <span
                        className={`font-[family-name:var(--font-mono)] text-xl font-bold ${colors.text}`}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl border ${colors.ring} animate-pulse-ring opacity-0 group-hover:opacity-100`}
                    />
                  </div>

                  <div className="md:mt-8">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
