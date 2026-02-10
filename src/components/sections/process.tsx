"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stepAccents = [
  "border-blue-500 bg-blue-50 text-blue-600",
  "border-violet-500 bg-violet-50 text-violet-600",
  "border-amber-500 bg-amber-50 text-amber-600",
  "border-emerald-500 bg-emerald-50 text-emerald-600",
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 bg-subtle px-6 py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Methodology
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl"
          >
            Our Approach
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-lg text-muted"
          >
            A proven methodology that balances speed with rigor. Every
            engagement follows this framework — adapted to your context.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-border md:block" />

          {/* Mobile connecting line */}
          <div className="absolute bottom-0 left-8 top-0 w-px bg-border md:hidden" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative flex gap-6 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div
                  className={`relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border-2 text-lg font-bold ${stepAccents[i]}`}
                >
                  {step.number}
                </div>

                <div className="md:mt-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
