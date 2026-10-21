import React from 'react';
import { Language, SITE_CONTENT } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  return (
    <footer className="w-full py-10 px-6 lg:px-12 text-center">
      <div className="max-w-4xl mx-auto flex items-center justify-center text-xs text-neutral-700">
        <p className={`font-semibold ${isAr ? 'font-arabic-body' : 'font-sans'}`}>
          {isAr ? SITE_CONTENT.footerRightsAr : SITE_CONTENT.footerRightsEn}
        </p>
      </div>
    </footer>
  );
};
