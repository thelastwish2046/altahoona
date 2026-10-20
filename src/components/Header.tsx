import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Globe, Snowflake } from 'lucide-react';
import { NAV_ITEMS, SectionId, Language, Theme, SITE_CONTENT } from '../types';

interface HeaderProps {
  currentSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  language: Language;
  onToggleLanguage: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
}) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  return (
    <header className="w-full bg-transparent relative z-20">
      {/* ================= Mobile View (< md) ================= */}
      <div className="md:hidden flex flex-col w-full px-4 pt-3 pb-2">
        {/* Top utility row: Language & Theme toggles */}
        <div className="flex justify-end items-center gap-3 mb-2">
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className={`flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold transition-opacity cursor-pointer ${
              isDark ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
            }`}
            title={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
            aria-label="Toggle language"
          >
            <Globe className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className="font-sans text-[11px] tracking-wider">
              {isAr ? 'English' : 'العربية'}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold transition-opacity cursor-pointer ${
              isDark ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
            }`}
            title={
              isDark
                ? (isAr ? "التبديل إلى الوضع الفاتح" : "Switch to Light Mode")
                : (isAr ? "التبديل إلى الوضع المظلم OLED" : "Switch to OLED Dark")
            }
            aria-label="Toggle theme"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-sans text-[11px]">
                  {isAr ? SITE_CONTENT.themeLightAr : SITE_CONTENT.themeLightEn}
                </span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-black" />
                <span className="font-sans text-[11px]">
                  {isAr ? SITE_CONTENT.themeDarkAr : SITE_CONTENT.themeDarkEn}
                </span>
              </>
            )}
          </button>
        </div>

        {/* Centered navigation items row for mobile */}
        <nav
          aria-label={isAr ? "القائمة الرئيسية" : "Main Navigation"}
          className="flex items-center justify-center gap-2.5 sm:gap-4 overflow-x-auto py-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            const label = isAr ? item.labelAr : item.labelEn;

            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative py-1.5 px-1 cursor-pointer whitespace-nowrap focus-visible:outline-none ${
                  isActive
                    ? (isDark ? 'text-white font-bold' : 'text-black font-bold')
                    : (isDark ? 'text-neutral-300 font-semibold' : 'text-neutral-800 font-semibold')
                } ${isAr ? 'font-arabic-display text-[13px] sm:text-sm' : 'font-sans text-[12px] sm:text-sm'}`}
              >
                {/* Visible Underline */}
                <span className={`underline underline-offset-4 ${
                  isActive
                    ? (isDark ? 'decoration-white decoration-2' : 'decoration-black decoration-2')
                    : (isDark ? 'decoration-neutral-600 decoration-1' : 'decoration-neutral-400 decoration-1')
                }`}>
                  {label}
                </span>

                {/* Active indicator small snowflake */}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator-mobile"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <Snowflake className={`w-2.5 h-2.5 ${isDark ? 'text-white' : 'text-black'}`} />
                  </motion.div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ================= Desktop View (md:) ================= */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 lg:px-12 h-24 items-center justify-center relative">
        {/* Navigation Sections Centered in the Middle Above */}
        <nav 
          aria-label={isAr ? "القائمة الرئيسية" : "Main Navigation"}
          className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 text-base"
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
                    ? (isDark ? 'text-white font-bold' : 'text-black font-bold')
                    : (isDark ? 'text-neutral-300 font-semibold hover:text-white' : 'text-neutral-900 font-semibold hover:text-black')
                } ${isAr ? 'font-arabic-display text-sm sm:text-base' : 'font-sans text-sm sm:text-base'}`}
              >
                {/* Visible Underline */}
                <span className={`underline underline-offset-8 ${
                  isActive
                    ? (isDark ? 'decoration-white decoration-2' : 'decoration-black decoration-2')
                    : (isDark ? 'decoration-neutral-500 decoration-1 group-hover:decoration-white' : 'decoration-neutral-700 decoration-1 group-hover:decoration-black')
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
                    <Snowflake className={`w-3 h-3 ${isDark ? 'text-white' : 'text-black'}`} />
                  </motion.div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Toggles (Language & Theme) positioned at the side */}
        <div className="absolute right-6 lg:right-12 rtl:right-auto rtl:left-6 rtl:lg:left-12 flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={onToggleLanguage}
            className={`flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold transition-opacity cursor-pointer ${
              isDark ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
            }`}
            title={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
            aria-label="Toggle language"
          >
            <Globe className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className="font-sans tracking-wider">
              {isAr ? 'English' : 'العربية'}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`flex items-center gap-1.5 py-1 px-1.5 text-xs font-bold transition-opacity cursor-pointer ${
              isDark ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
            }`}
            title={
              isDark
                ? (isAr ? "التبديل إلى الوضع الفاتح" : "Switch to Light Mode")
                : (isAr ? "التبديل إلى الوضع المظلم OLED" : "Switch to OLED Dark")
            }
            aria-label="Toggle theme"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-300" />
                <span className="hidden md:inline font-sans text-xs">
                  {isAr ? SITE_CONTENT.themeLightAr : SITE_CONTENT.themeLightEn}
                </span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-black" />
                <span className="hidden md:inline font-sans text-xs">
                  {isAr ? SITE_CONTENT.themeDarkAr : SITE_CONTENT.themeDarkEn}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
