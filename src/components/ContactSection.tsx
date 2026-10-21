import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Snowflake } from 'lucide-react';
import { Language, SITE_CONTENT } from '../types';
import { sectionTransitionVariants } from '../animations';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const isAr = language === 'ar';

  const location = isAr ? SITE_CONTENT.locationAr : SITE_CONTENT.locationEn;
  const nameMahmoud = isAr ? SITE_CONTENT.engineerMahmoudAr : SITE_CONTENT.engineerMahmoudEn;
  const nameFarqad = isAr ? SITE_CONTENT.engineerFarqadAr : SITE_CONTENT.engineerFarqadEn;

  return (
    <motion.div
      variants={sectionTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full max-w-3xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
    >
      {/* Centered Engineers Portraits (Left: Eng. Mahmoud, Right: Eng. Farqad) */}
      <div className="flex items-center justify-center gap-5 sm:gap-10 md:gap-16 mb-8 sm:mb-12 w-full">
        {/* Left Photo: Engineer Mahmoud */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-38 md:h-38 rounded-full overflow-hidden mb-2 sm:mb-3 ring-2 ring-stone-300/40 shadow-sm shrink-0">
            <img
              src={SITE_CONTENT.engineerMahmoudImage}
              alt={nameMahmoud}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>
          <span
            className={`text-sm sm:text-base md:text-lg font-bold text-black ${
              isAr ? 'font-arabic-display' : 'font-editorial'
            }`}
          >
            {nameMahmoud}
          </span>
        </div>

        {/* Right Photo: Engineer Farqad */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-38 md:h-38 rounded-full overflow-hidden mb-2 sm:mb-3 ring-2 ring-stone-300/40 shadow-sm shrink-0">
            <img
              src={SITE_CONTENT.engineerFarqadImage}
              alt={nameFarqad}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>
          <span
            className={`text-sm sm:text-base md:text-lg font-bold text-black ${
              isAr ? 'font-arabic-display' : 'font-editorial'
            }`}
          >
            {nameFarqad}
          </span>
        </div>
      </div>

      {/* Location, Phone Numbers, and Email */}
      <div className="space-y-3.5 sm:space-y-4 w-full text-center">
        {/* Location */}
        <p
          className={`flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-semibold leading-relaxed text-neutral-900 ${
            isAr ? 'font-arabic-body' : 'font-sans'
          }`}
        >
          <MapPin className="w-4 h-4 shrink-0 opacity-80" />
          <span>{location}</span>
        </p>

        {/* Phone Numbers with Snowflake separator */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-sm md:text-base font-semibold text-neutral-900 font-sans"
          dir="ltr"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 shrink-0 opacity-80" />
            <a
              href={`tel:${SITE_CONTENT.phones[0].replace(/\s+/g, '')}`}
              className="hover:underline transition-all"
            >
              {SITE_CONTENT.phones[0]}
            </a>
          </div>
          <Snowflake className="w-2.5 h-2.5 opacity-50 shrink-0" />
          <div className="flex items-center gap-1">
            <a
              href={`tel:${SITE_CONTENT.phones[1].replace(/\s+/g, '')}`}
              className="hover:underline transition-all"
            >
              {SITE_CONTENT.phones[1]}
            </a>
          </div>
        </div>

        {/* Email */}
        <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm md:text-base font-semibold text-neutral-900 font-sans">
          <Mail className="w-3.5 h-3.5 shrink-0 opacity-80" />
          <a
            href={`mailto:${SITE_CONTENT.email}`}
            className="hover:underline transition-all"
          >
            {SITE_CONTENT.email}
          </a>
        </p>
      </div>
    </motion.div>
  );
};
