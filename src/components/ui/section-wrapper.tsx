"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`relative scroll-mt-20 px-6 py-24 md:py-32 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
