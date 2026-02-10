"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

const accentText = {
  cyan: "text-cyan",
  purple: "text-purple",
  amber: "text-amber",
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tight md:text-5xl"
        >
          How We Help
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-lg text-muted"
        >
          Five focused services, each designed to meet enterprises where they
          are on their AI journey.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={scaleIn}
            className="glass-card flex flex-col p-8"
          >
            <span className="text-3xl">{s.icon}</span>
            <h3
              className={`mt-4 text-xl font-semibold ${accentText[s.color]}`}
            >
              {s.title}
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {s.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
