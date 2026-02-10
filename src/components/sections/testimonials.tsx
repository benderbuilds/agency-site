"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-20 px-6 py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Social Proof</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-center text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            What Clients <span className="gradient-text">Say</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-20 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              variants={scaleIn}
              className="glass-card flex flex-col justify-between p-8 md:p-10"
            >
              {/* Large quote mark */}
              <div>
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="mb-6 opacity-20"
                >
                  <path
                    d="M0 20.8C0 27.2 4 32 9.6 32c4.4 0 8-3.2 8-7.6 0-4-3.2-7.2-7.2-7.2-.8 0-1.6.4-2 .4C9.2 10 14 4.4 18.4 2.4L15.2 0C6.4 4 0 12 0 20.8zm21.6 0C21.6 27.2 25.6 32 31.2 32c4.4 0 8-3.2 8-7.6 0-4-3.2-7.2-7.2-7.2-.8 0-1.6.4-2 .4.8-7.6 5.6-13.2 10-15.2L36.8 0C28 4 21.6 12 21.6 20.8z"
                    fill="currentColor"
                    className="text-cyan"
                  />
                </svg>
                <p className="text-[15px] leading-relaxed text-muted">
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-[family-name:var(--font-mono)] text-xs text-cyan">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.author}</div>
                  <div className="font-[family-name:var(--font-mono)] text-xs text-muted">
                    {t.title} — {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
