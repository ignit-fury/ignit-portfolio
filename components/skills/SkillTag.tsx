"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SkillTag({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted">
        {skill}
      </span>
    );
  }

  return (
    <motion.span
      className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-white transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {skill}
    </motion.span>
  );
}
