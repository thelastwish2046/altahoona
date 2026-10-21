import React from 'react';
import { motion } from 'motion/react';
import { Language, SITE_CONTENT } from '../types';
import { sectionTransitionVariants } from '../animations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  const paragraphs = isAr
    ? SITE_CONTENT.aboutUsArParagraphs
    : SITE_CONTENT.aboutUsEnParagraphs;

  return (
    <motion.div
      variants={sectionTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Paragraphs with Comfortable Book Reading Flow */}
      <div className="w-full space-y-6 sm:space-y-7 text-center">
        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`text-sm sm:text-base md:text-[19px] leading-relaxed sm:leading-loose md:leading-[1.9] font-normal text-balance text-neutral-900 ${
              isAr ? 'font-arabic-body' : 'font-prose-serif'
            }`}
          >
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
