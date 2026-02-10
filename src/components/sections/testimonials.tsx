"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
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
          What Clients Say
        </motion.h2>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {TESTIMONIALS.map((t) => (
          <motion.div key={t.author} variants={scaleIn} className="glass-card p-8">
            <p className="text-muted leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 border-t border-white/5 pt-4">
              <div className="font-semibold">{t.author}</div>
              <div className="text-sm text-muted">
                {t.title}, {t.company}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
