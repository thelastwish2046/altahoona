import React from 'react';
import { Theme } from '../types';

interface BackgroundPatternProps {
  theme: Theme;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Soft pale blue cold-air gradient at the top of the page suggesting cold air */}
      {isDark ? (
        // OLED Dark Mode: subtle deep arctic/frost cold air wash fading to true pitch black
        <div
          className="absolute top-0 inset-x-0 h-[400px] sm:h-[520px] pointer-events-none transition-colors duration-300"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 0%, rgba(35, 85, 135, 0.32) 0%, rgba(18, 50, 82, 0.14) 55%, transparent 100%)',
          }}
        />
      ) : (
        // Light Mode: soft pale ice-blue fading into book ivory, suggesting cool central air
        <div
          className="absolute top-0 inset-x-0 h-[400px] sm:h-[520px] pointer-events-none transition-colors duration-300"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 0%, rgba(190, 228, 250, 0.65) 0%, rgba(218, 240, 253, 0.28) 55%, transparent 100%)',
          }}
        />
      )}
    </div>
  );
};
