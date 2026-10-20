import React from 'react';
import { motion } from 'motion/react';
import { CornerDownLeft, CornerDownRight } from 'lucide-react';
import { SectionId, Language, Theme, SITE_CONTENT } from '../types';

interface PlaceholderSectionProps {
  sectionId: SectionId;
  language: Language;
  theme: Theme;
  onBackToHome: () => void;
}

export const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  language,
  theme,
  onBackToHome,
}) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Clean text notice without redundant header */}
      <div className="w-full max-w-md my-4 space-y-4">
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed font-normal ${
          isDark ? 'text-neutral-200' : 'text-neutral-900'
        } ${isAr ? 'font-arabic-body' : 'font-prose-serif'}`}>
          {isAr ? SITE_CONTENT.emptySectionNoticeAr : SITE_CONTENT.emptySectionNoticeEn}
        </p>

        {/* Action to return */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={onBackToHome}
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            {isAr ? (
              <>
                <span>{SITE_CONTENT.backHomeAr}</span>
                <CornerDownLeft className="w-4 h-4" />
              </>
            ) : (
              <>
                <CornerDownRight className="w-4 h-4" />
                <span>{SITE_CONTENT.backHomeEn}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
