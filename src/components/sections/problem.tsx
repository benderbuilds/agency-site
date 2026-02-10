"use client";

import { motion } from "framer-motion";
import { PROBLEM } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";

const iconColors = {
  cyan: "bg-blue-50 text-blue-600",
  purple: "bg-violet-50 text-violet-600",
  amber: "bg-amber-50 text-amber-600",
};

const borderAccents = {
  cyan: "border-l-blue-500",
  purple: "border-l-violet-500",
  amber: "border-l-amber-500",
};

export default function Problem() {
  return (
    <section className="relative scroll-mt-20 bg-subtle px-6 py-24 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="md:sticky md:top-32"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-wider text-primary"
            >
              The Challenge
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl"
            >
              {PROBLEM.headline}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-muted"
            >
              {PROBLEM.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {PROBLEM.pain_points.map((p, i) => (
              <motion.div
                key={p.title}
                variants={slideInRight}
                className={`rounded-2xl border border-border border-l-4 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${borderAccents[p.color as keyof typeof borderAccents]}`}
              >
                <h3 className="text-base font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
