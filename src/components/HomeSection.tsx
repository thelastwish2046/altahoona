import React from 'react';
import { motion } from 'motion/react';
import { Language, Theme, SITE_CONTENT } from '../types';

interface HomeSectionProps {
  language: Language;
  theme: Theme;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ language, theme }) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  const companyName = isAr ? SITE_CONTENT.companyNameAr : SITE_CONTENT.companyNameEn;
  const description = isAr ? SITE_CONTENT.descriptionAr : SITE_CONTENT.descriptionEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Centered Logo Above the Name */}
      <div className="mb-5 sm:mb-7 flex justify-center">
        <img
          src="/assets/aistudio/logo_transparent.png"
          alt={isAr ? "شعار شركة الطاحونة" : "Al-Tahoona Logo"}
          className={`h-20 sm:h-26 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105 ${
            isAr ? 'scale-x-[-1]' : ''
          }`}
        />
      </div>

      {/* Primary Company Name Presentation */}
      <div className="mb-6 sm:mb-8 w-full">
        <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-snug tracking-tight text-balance ${
          isDark ? 'text-white' : 'text-black'
        } ${isAr ? 'font-arabic-display' : 'font-editorial'}`}>
          {companyName}
        </h1>
      </div>

      {/* Official Company Description Under the Name */}
      <div className="w-full text-center">
        <p className={`text-sm sm:text-base md:text-[19px] leading-relaxed sm:leading-loose md:leading-[1.9] font-normal text-balance ${
          isDark ? 'text-neutral-200' : 'text-neutral-900'
        } ${isAr ? 'font-arabic-body' : 'font-prose-serif'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
