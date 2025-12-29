
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectProps {
  mousePos: { x: number; y: number };
}

export const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ mousePos }) => {
  const [randomPos, setRandomPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPos({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Use any to bypass strict type errors for motion props in this environment
  const MotionDiv = motion.div as any;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Moving Random Glow Circle */}
      <MotionDiv
        animate={{
          x: randomPos.x,
          y: randomPos.y,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]"
      />

      {/* Mouse Interaction Glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      />

      {/* Static Accent Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full" />
    </div>
  );
};
