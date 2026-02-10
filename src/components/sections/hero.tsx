"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HERO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import GradientOrb from "@/components/decorative/gradient-orb";
import GridPattern from "@/components/decorative/grid-pattern";
import WireframeShape from "@/components/decorative/wireframe-shape";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.round(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = Number.isInteger(value)
    ? Math.round(display)
    : display.toFixed(1);

  return (
    <div ref={ref} className="relative text-center">
      <div
        className="text-4xl font-extrabold tracking-tight md:text-5xl"
        style={{
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span className="gradient-text">
          {formatted}
          {suffix}
        </span>
      </div>
      <div className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-24 pb-16">
      <GridPattern />
      <GradientOrb color="cyan" size={700} className="-left-60 -top-40" animate />
      <GradientOrb color="purple" size={600} className="-right-40 top-1/4" animate />
      <GradientOrb color="amber" size={300} className="left-1/3 bottom-10" animate />
      <WireframeShape className="-right-20 top-20 opacity-40 md:right-10" />
      <WireframeShape className="-left-32 bottom-20 opacity-20 md:-left-10" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Label tag */}
        <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
          <span className="section-label">Enterprise AI Consulting</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mx-auto max-w-5xl text-center text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] font-extrabold tracking-tight"
        >
          Turn AI Ambition Into{" "}
          <span className="gradient-text">Enterprise Reality</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="glow-button">
            {HERO.cta_primary}
          </a>
          <a href="#process" className="ghost-button">
            {HERO.cta_secondary}
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-24 max-w-3xl"
        >
          <div className="glass-card grid grid-cols-3 divide-x divide-white/5 px-4 py-8 md:px-8">
            {HERO.stats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
