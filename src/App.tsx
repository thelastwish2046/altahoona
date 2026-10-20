import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { PlaceholderSection } from './components/PlaceholderSection';
import { Footer } from './components/Footer';
import { BackgroundPattern } from './components/BackgroundPattern';
import { SectionId, Language, Theme } from './types';

export default function App() {
  // Main language defaults to English with toggle for Arabic support
  const [language, setLanguage] = useState<Language>('en');
  // Light (crisp book ivory) and dark (OLED true black) themes
  const [theme, setTheme] = useState<Theme>('light');
  // Navigation section state
  const [currentSection, setCurrentSection] = useState<SectionId>('home');

  // Sync theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#000000';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#FCFAF7';
    }
  }, [theme]);

  // Sync language and direction (LTR / RTL) to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectSection = (section: SectionId) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between relative transition-colors duration-200 selection:bg-amber-200 selection:text-black dark:selection:bg-neutral-800 dark:selection:text-white ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-[#FCFAF7] text-black'
      }`}
    >
      {/* Static faint snowflake & grid pattern (4-5% opacity, zero motion) */}
      <BackgroundPattern theme={theme} />

      {/* Top Bar with seamless color matching the page below */}
      <Header
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        language={language}
        onToggleLanguage={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area with High-Contrast Typography and Smooth Reading Transition */}
      <main className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <div className="w-full">
          <AnimatePresence mode="wait">
            {currentSection === 'home' ? (
              <HomeSection
                key="home"
                language={language}
                theme={theme}
              />
            ) : currentSection === 'about' ? (
              <AboutSection
                key="about"
                language={language}
                theme={theme}
              />
            ) : currentSection === 'services' ? (
              <ServicesSection
                key="services"
                language={language}
                theme={theme}
              />
            ) : currentSection === 'contact' ? (
              <ContactSection
                key="contact"
                language={language}
                theme={theme}
              />
            ) : (
              <PlaceholderSection
                key={currentSection}
                sectionId={currentSection}
                language={language}
                theme={theme}
                onBackToHome={() => handleSelectSection('home')}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Minimalist colophon footer, seamless with page background */}
      <Footer language={language} theme={theme} />
    </div>
  );
}
