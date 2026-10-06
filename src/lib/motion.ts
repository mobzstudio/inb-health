/** Motion tokens. Keep in sync with `src/styles/tokens.css` and `docs/motion.md`. */
export const ease = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const dur = {
  fast: 0.18,
  base: 0.28,
  slow: 0.6,
  hero: 0.9,
} as const;

export const interval = {
  orbit: 6500,
} as const;

export const spring = {
  snappy: { type: "spring" as const, stiffness: 420, damping: 32 },
  soft: { type: "spring" as const, stiffness: 180, damping: 24 },
  entrance: { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.9 },
} as const;

export const stagger = {
  base: 0.09,
  slow: 0.14,
} as const;

export const reveal = {
  y: 40,
  scale: 0.92,
  amount: 0.2,
} as const;
