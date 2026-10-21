import type { Variants } from 'motion/react';

// Optimized animation variants for rapid, silky smooth section switching
export const sectionTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 6,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.09,
      ease: 'easeIn',
    },
  },
};
