import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StoreSection } from './components/StoreSection';
import { ContactSection } from './components/ContactSection';
import { PlaceholderSection } from './components/PlaceholderSection';
import { Footer } from './components/Footer';
import { BackgroundPattern } from './components/BackgroundPattern';
import { SectionId, Language } from './types';

export default function App() {
  // Main language defaults to English with toggle for Arabic support
  const [language, setLanguage] = useState<Language>('en');
  // Navigation section state
  const [currentSection, setCurrentSection] = useState<SectionId>('home');

  // Ensure clean white/paper background on document root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.style.backgroundColor = '#FCFAF7';
  }, []);

  // Sync language and direction (LTR / RTL) to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  // Preload critical image assets immediately in the background
  useEffect(() => {
    const imagesToPreload = [
      `${import.meta.env.BASE_URL}assets/aistudio/logo_transparent.png`,
      `${import.meta.env.BASE_URL}assets/aistudio/image_b9cf93bb.png`,
      `${import.meta.env.BASE_URL}assets/aistudio/image_02a06ac9.png`,
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Support direct URL hash navigation on GitHub Pages (e.g. #store, #services)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      const validSections: SectionId[] = ['home', 'about', 'gallery', 'services', 'store', 'contact'];
      if (validSections.includes(hash)) {
        setCurrentSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSelectSection = (section: SectionId) => {
    if (section === currentSection) return;
    setCurrentSection(section);
    if (window.location.hash.replace('#', '') !== section) {
      window.history.replaceState(null, '', section === 'home' ? ' ' : `#${section}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#FCFAF7] text-black selection:bg-amber-200 selection:text-black">
      {/* Static faint snowflake & cool air gradient pattern */}
      <BackgroundPattern />

      {/* Top Bar with seamless color matching the page below */}
      <Header
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Main Content Area with High-Contrast Typography and Smooth Reading Transition */}
      <main className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <div className="w-full">
          <AnimatePresence mode="wait" initial={false}>
            {currentSection === 'home' ? (
              <HomeSection
                key="home"
                language={language}
              />
            ) : currentSection === 'about' ? (
              <AboutSection
                key="about"
                language={language}
              />
            ) : currentSection === 'services' ? (
              <ServicesSection
                key="services"
                language={language}
              />
            ) : currentSection === 'store' ? (
              <StoreSection
                key="store"
                language={language}
                onBackToHome={() => handleSelectSection('home')}
              />
            ) : currentSection === 'contact' ? (
              <ContactSection
                key="contact"
                language={language}
              />
            ) : (
              <PlaceholderSection
                key={currentSection}
                sectionId={currentSection}
                language={language}
                onBackToHome={() => handleSelectSection('home')}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Minimalist colophon footer, seamless with page background */}
      <Footer language={language} />
    </div>
  );
}
