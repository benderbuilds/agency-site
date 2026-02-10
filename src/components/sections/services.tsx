"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const colorMap = {
  cyan: {
    text: "text-cyan",
    shadow: "group-hover:shadow-cyan/10",
    line: "bg-cyan",
    glow: "rgba(0,212,255,0.04)",
  },
  purple: {
    text: "text-purple",
    shadow: "group-hover:shadow-purple/10",
    line: "bg-purple",
    glow: "rgba(139,92,246,0.04)",
  },
  amber: {
    text: "text-amber",
    shadow: "group-hover:shadow-amber/10",
    line: "bg-amber",
    glow: "rgba(245,158,11,0.04)",
  },
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 px-6 py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">What We Do</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-center text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            How We <span className="gradient-text">Help</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted"
          >
            Five focused services, each designed to meet enterprises where they
            are on their AI journey.
          </motion.p>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          className="mt-20 grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          className="mt-5 grid gap-5 md:grid-cols-2 md:mx-auto md:max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {SERVICES.slice(3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: (typeof SERVICES)[number] }) {
  const colors = colorMap[s.color];

  return (
    <motion.div
      variants={scaleIn}
      className="group glass-card corner-accents flex flex-col p-8 md:p-10"
    >
      {/* Icon + number badge */}
      <div className="flex items-start justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 text-2xl"
          style={{ background: colors.glow }}
        >
          {s.icon}
        </div>
      </div>

      {/* Colored accent line */}
      <div className={`mt-6 h-px w-12 ${colors.line} opacity-40`} />

      <h3 className={`mt-5 text-xl font-bold ${colors.text}`}>{s.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {s.description}
      </p>

      {/* Hover arrow */}
      <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
        <span className={colors.text}>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 14 14" className={colors.text}>
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}
