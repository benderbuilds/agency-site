"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Process() {
  return (
    <SectionWrapper id="process">
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
          Our Approach
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-lg text-muted"
        >
          A proven methodology that balances speed with rigor. Every engagement
          follows this framework — adapted to your context.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Connecting line — desktop */}
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent md:block" />

        {/* Connecting line — mobile */}
        <div className="absolute bottom-0 left-10 top-0 w-px bg-gradient-to-b from-transparent via-cyan/30 to-transparent md:hidden" />

        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex gap-6 md:flex-col md:gap-0 md:text-center"
            >
              {/* Step circle */}
              <div className="relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-background md:mx-auto">
                <span className="text-2xl font-bold text-cyan">
                  {step.number}
                </span>
              </div>

              <div className="md:mt-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
