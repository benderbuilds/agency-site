"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const iconStyles = {
  cyan: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  purple: "bg-violet-50 text-violet-600 group-hover:bg-violet-100",
  amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 px-6 py-24 md:py-32 lg:px-8">
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
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl"
          >
            How We Help
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-lg text-muted"
          >
            Five focused services, each designed to meet enterprises where they
            are on their AI journey.
          </motion.p>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          className="mx-auto mt-6 grid max-w-[calc(66.666%+0.75rem)] gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {SERVICES.slice(3).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: (typeof SERVICES)[number] }) {
  return (
    <motion.div
      variants={scaleIn}
      className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-colors ${iconStyles[s.color]}`}
      >
        {s.icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
    </motion.div>
  );
}
