
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Use any to bypass strict type errors for motion props in this environment
  const MotionDiv = motion.div as any;

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-10">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          Elevate Your{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600 animate-gradient inline-block">
            Digital Identity
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate destination for premium Discord server templates, custom bots, and aesthetic asset packs. Designed for those who settle for nothing less than perfection.
        </p>
      </MotionDiv>

      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="group relative bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            Explore Shop <ArrowRight size={20} />
          </span>
        </button>
        <button className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
          <MessageCircle size={20} /> Join Discord
        </button>
      </MotionDiv>
    </div>
  );
};
