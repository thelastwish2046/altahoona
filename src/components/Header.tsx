import React from 'react';
import { motion } from 'motion/react';
import { Globe, Snowflake } from 'lucide-react';
import { NAV_ITEMS, SectionId, Language } from '../types';

interface HeaderProps {
  currentSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  language,
  onToggleLanguage,
}) => {
  const isAr = language === 'ar';

  return (
    <header className="w-full bg-transparent relative z-20">
      {/* ================= Mobile View (< md) ================= */}
      <div className="md:hidden flex flex-col w-full max-w-full px-2 pt-2 pb-1 overflow-hidden">
        {/* Top utility row: Language toggle */}
        <div className="flex justify-end items-center px-1.5 mb-1">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold text-black hover:opacity-75 transition-opacity cursor-pointer rounded"
            title={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="font-sans text-[11px] tracking-wider">
              {isAr ? 'English' : 'العربية'}
            </span>
          </button>
        </div>

        {/* Centered navigation items row for mobile (No scrollbars, balanced spacing across phones) */}
        <nav
          aria-label={isAr ? "القائمة الرئيسية" : "Main Navigation"}
          className="w-full flex items-center justify-between min-[440px]:justify-center min-[440px]:gap-3 overflow-hidden no-scrollbar px-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            const label = isAr ? item.labelAr : item.labelEn;

            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative flex flex-col items-center justify-center py-1 px-0.5 sm:px-1 cursor-pointer whitespace-nowrap focus-visible:outline-none transition-colors ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-neutral-750 font-semibold hover:text-black'
                } ${isAr ? 'font-arabic-display text-[11px] min-[360px]:text-[12px] min-[400px]:text-[13px]' : 'font-sans text-[10.5px] min-[360px]:text-[11.5px] min-[400px]:text-xs'}`}
              >
                {/* Visible Underline */}
                <span className={`underline underline-offset-4 ${
                  isActive
                    ? 'decoration-black decoration-2'
                    : 'decoration-transparent'
                }`}>
                  {label}
                </span>

                {/* Active indicator small snowflake inside container flow - zero scrollbar trigger */}
                <span className="h-2.5 flex items-center justify-center mt-0.5 pointer-events-none">
                  {isActive ? (
                    <motion.span
                      layoutId="active-indicator-mobile"
                      className="inline-flex items-center justify-center"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    >
                      <Snowflake className="w-2.5 h-2.5 text-black" />
                    </motion.span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ================= Desktop View (md:) ================= */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 lg:px-12 h-24 items-center justify-between">
        {/* Balanced spacer so nav stays perfectly centered */}
        <div className="w-24 shrink-0 pointer-events-none" aria-hidden="true" />

        {/* Navigation Sections Centered in the Middle Above */}
        <nav 
          aria-label={isAr ? "القائمة الرئيسية" : "Main Navigation"}
          className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 text-sm lg:text-base flex-wrap"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            const label = isAr ? item.labelAr : item.labelEn;

            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`group relative py-2 tracking-wide cursor-pointer whitespace-nowrap focus-visible:outline-none ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-neutral-850 font-semibold hover:text-black'
                } ${isAr ? 'font-arabic-display text-sm sm:text-base' : 'font-sans text-sm sm:text-base'}`}
              >
                {/* Visible Underline */}
                <span className={`underline underline-offset-8 ${
                  isActive
                    ? 'decoration-black decoration-2'
                    : 'decoration-neutral-600 decoration-1 group-hover:decoration-black'
                }`}>
                  {label}
                </span>

                {/* Active indicator small snowflake */}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <Snowflake className="w-3 h-3 text-black" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Language Toggle positioned on the side with dedicated space */}
        <div className="w-24 shrink-0 flex justify-end rtl:justify-start">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold text-black hover:opacity-80 transition-opacity cursor-pointer"
            title={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4 text-black shrink-0" />
            <span className="font-sans tracking-wider">
              {isAr ? 'English' : 'العربية'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
