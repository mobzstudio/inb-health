"use client";

import { motion } from "motion/react";
import { dur, ease, reveal } from "@/lib/motion";
import styles from "./HealthData.module.css";

const transition = { duration: dur.hero, ease: ease.out };

const left = {
  enter: { opacity: 0, rotate: -28, x: -40, y: 140, scale: 0.88 },
  rest: { opacity: 1, rotate: -16, x: 0, y: 88, scale: 1 },
  hover: { opacity: 1, rotate: 0, x: 0, y: 0, scale: 1 },
};

const center = {
  enter: { opacity: 0, rotate: 0, x: "-50%", y: 48, scale: 0.9 },
  rest: { opacity: 1, rotate: 0, x: "-50%", y: 0, scale: 1 },
  hover: { opacity: 1, rotate: 0, x: "-50%", y: 0, scale: 1 },
};

const right = {
  enter: { opacity: 0, rotate: 28, x: 40, y: 80, scale: 0.88 },
  rest: { opacity: 1, rotate: 16, x: 0, y: 0, scale: 1 },
  hover: { opacity: 1, rotate: 0, x: 0, y: 0, scale: 1 },
};

export function PhotoCluster() {
  return (
    <motion.div
      className={styles.photos}
      initial="enter"
      whileInView="rest"
      whileHover="hover"
      viewport={{ once: true, amount: reveal.amount }}
    >
      <motion.div className={`${styles.photo} ${styles.left}`} variants={left} transition={transition}>
        <img src="/images/stat-left.png" alt="" />
      </motion.div>
      <motion.div className={`${styles.photo} ${styles.center}`} variants={center} transition={transition}>
        <img src="/images/stat-center.png" alt="Casal caminhando ao ar livre" />
      </motion.div>
      <motion.div className={`${styles.photo} ${styles.right}`} variants={right} transition={transition}>
        <img src="/images/stat-right.png" alt="" />
      </motion.div>
    </motion.div>
  );
}
