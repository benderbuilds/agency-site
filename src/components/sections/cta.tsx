"use client";

import { motion } from "framer-motion";
import { CTA as CTA_DATA } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-subtle px-6 py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center md:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Subtle gradient decoration */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <motion.p
            variants={fadeInUp}
            className="relative text-sm font-semibold uppercase tracking-wider text-blue-400"
          >
            Get Started
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="relative mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            {CTA_DATA.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dark-muted"
          >
            {CTA_DATA.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp} className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${CTA_DATA.contact_email}`}
              className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-foreground shadow-lg transition-all hover:bg-gray-100 sm:w-auto"
            >
              {CTA_DATA.button}
            </a>
            <a
              href={`mailto:${CTA_DATA.contact_email}`}
              className="text-sm font-medium text-dark-muted transition-colors hover:text-white"
            >
              {CTA_DATA.contact_email} &rarr;
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
