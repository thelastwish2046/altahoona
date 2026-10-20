import React, { useEffect, useRef } from 'react';
import { Theme } from '../types';

interface SnowParticlesProps {
  theme: Theme;
}

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  swaySpeed: number;
  swayOffset: number;
  swayAmplitude: number;
  angle: number;
  rotationSpeed: number;
  opacity: number;
  type: 'star6' | 'star4' | 'crystal';
}

export const SnowParticles: React.FC<SnowParticlesProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of snowflakes: balanced density so it's unmistakably snowy without clutter
    const count = Math.min(Math.max(Math.floor((width * height) / 12000), 45), 85);
    const flakes: Snowflake[] = [];

    const types: ('star6' | 'star4' | 'crystal')[] = ['star6', 'star6', 'star4', 'crystal'];

    for (let i = 0; i < count; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Small snowflake size: 3px to 6.5px radius
        size: Math.random() * 3.5 + 3,
        speed: Math.random() * 0.7 + 0.35,
        swaySpeed: Math.random() * 0.015 + 0.008,
        swayOffset: Math.random() * Math.PI * 2,
        swayAmplitude: Math.random() * 0.7 + 0.3,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.4 + 0.5,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }

    let time = 0;

    // Helper to draw realistic 6-point star snowflake crystal
    const draw6PointSnowflake = (
      x: number,
      y: number,
      size: number,
      angle: number,
      color: string,
      lineWidth: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';

      // 6 radiating arms (60° apart)
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.stroke();

        // Little branch twigs on each arm if size allows
        if (size > 3.8) {
          const branchY = -size * 0.55;
          const branchLen = size * 0.35;
          ctx.beginPath();
          ctx.moveTo(0, branchY);
          ctx.lineTo(-branchLen, branchY - branchLen * 0.5);
          ctx.moveTo(0, branchY);
          ctx.lineTo(branchLen, branchY - branchLen * 0.5);
          ctx.stroke();
        }
        ctx.rotate(Math.PI / 3);
      }
      ctx.restore();
    };

    // Helper to draw 4-point cross star snowflake
    const draw4PointSnowflake = (
      x: number,
      y: number,
      size: number,
      angle: number,
      color: string,
      lineWidth: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.stroke();

        if (size > 3.5) {
          const branchY = -size * 0.5;
          const branchLen = size * 0.3;
          ctx.beginPath();
          ctx.moveTo(0, branchY);
          ctx.lineTo(-branchLen, branchY - branchLen * 0.5);
          ctx.moveTo(0, branchY);
          ctx.lineTo(branchLen, branchY - branchLen * 0.5);
          ctx.stroke();
        }
        ctx.rotate(Math.PI / 2);
      }
      ctx.restore();
    };

    // Helper to draw diamond ice crystal
    const drawCrystal = (
      x: number,
      y: number,
      size: number,
      angle: number,
      color: string
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.02;

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];

        // Horizontal breeze sway
        flake.x += Math.sin(time * flake.swaySpeed + flake.swayOffset) * flake.swayAmplitude;
        flake.y += flake.speed;
        flake.angle += flake.rotationSpeed;

        // Reset if drifted beyond canvas
        if (flake.y > height + 10) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
        if (flake.x > width + 10) {
          flake.x = -10;
        } else if (flake.x < -10) {
          flake.x = width + 10;
        }

        // Color and shadow calibration
        if (theme === 'light') {
          // Visible cool icy crystal color on light background
          const strokeColor = `rgba(55, 95, 135, ${flake.opacity * 0.8})`;
          const glowColor = `rgba(180, 215, 245, ${flake.opacity * 0.9})`;

          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 3;

          if (flake.type === 'star6') {
            draw6PointSnowflake(flake.x, flake.y, flake.size, flake.angle, strokeColor, 1.1);
          } else if (flake.type === 'star4') {
            draw4PointSnowflake(flake.x, flake.y, flake.size, flake.angle, strokeColor, 1.1);
          } else {
            drawCrystal(flake.x, flake.y, flake.size * 0.7, flake.angle, strokeColor);
          }
        } else {
          // Luminous crisp white crystal on OLED dark background
          const strokeColor = `rgba(240, 248, 255, ${flake.opacity * 0.95})`;
          const glowColor = `rgba(160, 220, 255, 0.7)`;

          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 4;

          if (flake.type === 'star6') {
            draw6PointSnowflake(flake.x, flake.y, flake.size, flake.angle, strokeColor, 1.2);
          } else if (flake.type === 'star4') {
            draw4PointSnowflake(flake.x, flake.y, flake.size, flake.angle, strokeColor, 1.2);
          } else {
            drawCrystal(flake.x, flake.y, flake.size * 0.7, flake.angle, strokeColor);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
};
