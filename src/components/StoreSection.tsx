import React from 'react';
import { motion } from 'motion/react';
import { CornerDownLeft, CornerDownRight } from 'lucide-react';
import { Language, SITE_CONTENT } from '../types';
import { sectionTransitionVariants } from '../animations';

interface StoreSectionProps {
  language: Language;
  onBackToHome?: () => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ language, onBackToHome }) => {
  const isAr = language === 'ar';

  return (
    <motion.div
      variants={sectionTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-3xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Clean notification that the store section is ready and under preparation */}
      <div className="w-full max-w-md my-4 space-y-4">
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed font-normal text-neutral-900 ${
            isAr ? 'font-arabic-body' : 'font-prose-serif'
          }`}
        >
          {isAr ? SITE_CONTENT.emptySectionNoticeAr : SITE_CONTENT.emptySectionNoticeEn}
        </p>

        {/* Action to return */}
        {onBackToHome && (
          <div className="pt-6 flex justify-center">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold underline underline-offset-4 cursor-pointer transition-opacity hover:opacity-80 text-black"
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
        )}
      </div>
    </motion.div>
  );
};
