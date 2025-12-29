
import React from 'react';
import { Zap, ShieldCheck, Palette, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Instant Deployment',
    description: 'Get your Discord server up and running in minutes with our automated setup tools.',
    icon: <Zap className="text-white" size={24} />,
  },
  {
    title: 'Bank-Grade Security',
    description: 'Our bots and systems are verified and secure, ensuring your community remains safe.',
    icon: <ShieldCheck className="text-white" size={24} />,
  },
  {
    title: 'Custom Aesthetics',
    description: 'Bespoke emoji packs and role icons tailored to your specific community theme.',
    icon: <Palette className="text-white" size={24} />,
  },
  {
    title: 'Smart Automation',
    description: 'Advanced AI-integrated bots that handle moderation and engagement effortlessly.',
    icon: <Cpu className="text-white" size={24} />,
  },
];

export const Features: React.FC = () => {
  // Use any to bypass strict type errors for motion props in this environment
  const MotionDiv = motion.div as any;

  return (
    <div className="w-full">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-zinc-500">Why world-class communities choose Eclipse.</p>
        </div>
        <div className="h-px bg-white/10 flex-grow ml-12 mb-4 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <MotionDiv
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="blur-card p-8 rounded-3xl group cursor-default"
          >
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="group-hover:text-black">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
