"use client";

import { motion } from "framer-motion";
import { PROBLEM } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";

const accentColors = {
  cyan: {
    border: "border-l-cyan",
    glow: "rgba(0,212,255,0.06)",
    dot: "bg-cyan",
  },
  purple: {
    border: "border-l-purple",
    glow: "rgba(139,92,246,0.06)",
    dot: "bg-purple",
  },
  amber: {
    border: "border-l-amber",
    glow: "rgba(245,158,11,0.06)",
    dot: "bg-amber",
  },
};

export default function Problem() {
  return (
    <section className="relative scroll-mt-20 px-6 py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 md:grid-cols-2 md:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="md:sticky md:top-32"
          >
            <motion.div variants={fadeInUp}>
              <span className="section-label">The Challenge</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight md:text-6xl"
            >
              {PROBLEM.headline.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {PROBLEM.headline.split(" ").slice(-1)}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-muted"
            >
              {PROBLEM.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {PROBLEM.pain_points.map((p, i) => {
              const colors = accentColors[p.color as keyof typeof accentColors];
              return (
                <motion.div
                  key={p.title}
                  variants={slideInRight}
                  className={`glass-card border-l-[3px] p-7 ${colors.border}`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.glow} 0%, transparent 60%)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-[family-name:var(--font-mono)] text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
