"use client";

import { motion } from "framer-motion";
import { CTA as CTA_DATA } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import GradientOrb from "@/components/decorative/gradient-orb";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-6 py-32"
    >
      <GradientOrb color="cyan" size={500} className="-left-48 top-0" />
      <GradientOrb color="purple" size={500} className="-right-48 bottom-0" />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold tracking-tight md:text-5xl"
        >
          {CTA_DATA.headline}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-lg text-muted"
        >
          {CTA_DATA.subtitle}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10">
          <a
            href={`mailto:${CTA_DATA.contact_email}`}
            className="glow-button inline-block"
          >
            {CTA_DATA.button}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
