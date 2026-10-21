import React from 'react';
import { motion } from 'motion/react';
import { Snowflake } from 'lucide-react';
import { Language, SITE_CONTENT } from '../types';
import { sectionTransitionVariants } from '../animations';

interface ServicesSectionProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  const services = SITE_CONTENT.services;

  return (
    <motion.div
      variants={sectionTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      {/* Services in Points with Small Snowflake Icons instead of dots */}
      <div className="w-full space-y-8 sm:space-y-12 md:space-y-14 text-start">
        {services.map((item) => {
          const title = isAr ? item.titleAr : item.titleEn;
          const desc = isAr ? item.descAr : item.descEn;

          return (
            <div
              key={item.id}
              className="group flex items-start gap-3.5 sm:gap-4.5"
            >
              {/* Small Snowflake Icon replacing the dot */}
              <div className="mt-1 shrink-0 flex items-center justify-center">
                <Snowflake
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 text-black"
                />
              </div>

              {/* Point Content: Bold Title + Detailed Description */}
              <div className="flex-1 space-y-1.5 sm:space-y-2">
                <h3
                  className={`text-base sm:text-xl md:text-2xl font-bold leading-snug tracking-tight text-black ${
                    isAr ? 'font-arabic-display' : 'font-editorial'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm sm:text-base md:text-[19px] leading-relaxed sm:leading-loose md:leading-[1.85] font-normal text-neutral-900 ${
                    isAr ? 'font-arabic-body' : 'font-prose-serif'
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
