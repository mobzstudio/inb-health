"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { reveal, spring } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = reveal.y, ...props }: RevealProps) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0, y, scale: reveal.scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: reveal.amount }}
      transition={{ ...spring.entrance, delay }}
      {...props}
    />
  );
}
