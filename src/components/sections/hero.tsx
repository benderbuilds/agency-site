"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HERO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
      <div className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        {formatted}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28 lg:px-8">
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Pill badge */}
        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Enterprise AI Consulting
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-7xl"
        >
          {HERO.headline.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="w-full rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25 sm:w-auto"
          >
            {HERO.cta_primary}
          </a>
          <a
            href="#process"
            className="w-full rounded-full border border-border bg-white px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-subtle sm:w-auto"
          >
            {HERO.cta_secondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="relative mx-auto mt-20 max-w-3xl md:mt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-3 divide-x divide-border">
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
    </section>
  );
}
