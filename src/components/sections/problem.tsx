"use client";

import { motion } from "framer-motion";
import { PROBLEM } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

const borderColors = {
  cyan: "border-l-cyan",
  purple: "border-l-purple",
  amber: "border-l-amber",
};

export default function Problem() {
  return (
    <SectionWrapper>
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            {PROBLEM.headline}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted">
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
          {PROBLEM.pain_points.map((p) => (
            <motion.div
              key={p.title}
              variants={slideInRight}
              className={`glass-card border-l-4 p-6 ${borderColors[p.color as keyof typeof borderColors]}`}
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
