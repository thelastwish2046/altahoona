import React from 'react';
import { Language, Theme, SITE_CONTENT } from '../types';

interface FooterProps {
  language: Language;
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ language, theme }) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  return (
    <footer className="w-full py-10 px-6 lg:px-12 text-center transition-colors duration-200">
      <div className={`max-w-4xl mx-auto flex items-center justify-center text-xs ${
        isDark ? 'text-neutral-400' : 'text-neutral-700'
      }`}>
        <p className={`font-semibold ${isAr ? 'font-arabic-body' : 'font-sans'}`}>
          {isAr ? SITE_CONTENT.footerRightsAr : SITE_CONTENT.footerRightsEn}
        </p>
      </div>
    </footer>
  );
};
