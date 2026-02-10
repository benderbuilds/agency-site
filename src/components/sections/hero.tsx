"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HERO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import GradientOrb from "@/components/decorative/gradient-orb";
import GridPattern from "@/components/decorative/grid-pattern";

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
    const duration = 1500;
    const steps = 40;
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
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-cyan md:text-4xl">
        {formatted}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <GridPattern className="opacity-60" />
      <GradientOrb color="cyan" size={600} className="-left-40 -top-40" />
      <GradientOrb color="purple" size={500} className="-right-32 top-1/3" />

      <motion.div
        className="relative mx-auto max-w-6xl text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeInUp}
          className="mx-auto max-w-4xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-7xl"
          style={{ whiteSpace: "pre-line" }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="glow-button">
            {HERO.cta_primary}
          </a>
          <a href="#process" className="ghost-button">
            {HERO.cta_secondary}
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
        >
          {HERO.stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
