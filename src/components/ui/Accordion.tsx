"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { reveal, spring } from "@/lib/motion";
import styles from "./Accordion.module.css";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.question}
            data-reveal
            className={cn(styles.item, isOpen && styles.open)}
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: reveal.amount }}
            transition={{ ...spring.entrance, delay: index * 0.1 }}
          >
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <div className={styles.panel}>
              <div className={styles.inner}>
                <p className={styles.body}>{item.answer}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
