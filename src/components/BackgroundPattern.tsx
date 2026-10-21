import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Soft pale ice-blue cold-air gradient at the top fading into clean paper white */}
      <div
        className="absolute top-0 inset-x-0 h-[400px] sm:h-[520px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% 0%, rgba(190, 228, 250, 0.65) 0%, rgba(218, 240, 253, 0.28) 55%, transparent 100%)',
        }}
      />
    </div>
  );
};
