import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { sectionTransitionVariants } from '../animations';

interface StoreSectionProps {
  language: Language;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ language: _language }) => {
  return (
    <motion.div
      variants={sectionTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-3xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 min-h-[45vh]"
    >
      {/* Empty store section as requested */}
    </motion.div>
  );
};
