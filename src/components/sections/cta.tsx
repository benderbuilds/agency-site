"use client";

import { motion } from "framer-motion";
import { CTA as CTA_DATA } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import GradientOrb from "@/components/decorative/gradient-orb";
import GridPattern from "@/components/decorative/grid-pattern";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-6 py-32 md:py-40"
    >
      <div className="section-divider mb-28" />

      <GridPattern className="opacity-40" />
      <GradientOrb color="cyan" size={600} className="-left-60 top-0" animate />
      <GradientOrb color="purple" size={600} className="-right-60 bottom-0" animate />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex justify-center">
          <span className="section-label">Let&apos;s Talk</span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Ready to Close the{" "}
          <span className="gradient-text">AI Gap?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {CTA_DATA.subtitle}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-12">
          <a
            href={`mailto:${CTA_DATA.contact_email}`}
            className="glow-button inline-block text-lg"
          >
            {CTA_DATA.button}
          </a>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs text-muted">
            Or email us directly at{" "}
            <a
              href={`mailto:${CTA_DATA.contact_email}`}
              className="text-cyan transition-opacity hover:opacity-80"
            >
              {CTA_DATA.contact_email}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
