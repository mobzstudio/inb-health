"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { reveal, spring, stagger as staggerGap } from "@/lib/motion";

const tags = {
  div: motion.div,
  ul: motion.ul,
  article: motion.article,
  a: motion.a,
  li: motion.li,
  button: motion.button,
};

type Tag = keyof typeof tags;
type MotionTag = typeof motion.div;

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: Extract<Tag, "div" | "ul">;
  delay?: number;
  gap?: number;
  amount?: number;
};

export function Stagger({
  as = "div",
  delay = 0,
  gap = staggerGap.base,
  amount = reveal.amount,
  ...props
}: StaggerProps) {
  const Comp = tags[as] as MotionTag;
  return (
    <Comp
      data-reveal
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: gap, delayChildren: delay },
        },
      }}
      {...props}
    />
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: reveal.y, scale: reveal.scale },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring.entrance,
  },
};

const punchVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.82, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: spring.entrance,
  },
};

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: Tag;
  href?: string;
  punch?: boolean;
  type?: "button" | "submit" | "reset";
};

export function StaggerItem({ as = "div", punch = false, ...props }: StaggerItemProps) {
  const Comp = tags[as] as MotionTag;
  return <Comp data-reveal {...props} variants={punch ? punchVariants : itemVariants} />;
}
