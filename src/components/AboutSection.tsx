import React from 'react';
import { motion } from 'motion/react';
import { Language, Theme, SITE_CONTENT } from '../types';

interface AboutSectionProps {
  language: Language;
  theme: Theme;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language, theme }) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  const paragraphs = isAr
    ? SITE_CONTENT.aboutUsArParagraphs
    : SITE_CONTENT.aboutUsEnParagraphs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Paragraphs with Comfortable Book Reading Flow (big redundant header removed) */}
      <div className="w-full space-y-6 sm:space-y-7 text-center">
        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`text-sm sm:text-base md:text-[19px] leading-relaxed sm:leading-loose md:leading-[1.9] font-normal text-balance ${
              isDark ? 'text-neutral-200' : 'text-neutral-900'
            } ${isAr ? 'font-arabic-body' : 'font-prose-serif'}`}
          >
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
