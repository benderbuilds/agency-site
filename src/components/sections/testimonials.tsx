"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const avatarColors = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 px-6 py-24 md:py-32 lg:px-8"
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
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl"
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
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              variants={scaleIn}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="text-amber-400"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0l2.47 4.88L16 5.73l-3.95 3.93L12.94 16 8 13.38 3.06 16l.89-6.34L0 5.73l5.53-.85z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${avatarColors[i]}`}
                >
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted">
                    {t.title}, {t.company}
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
