
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { ShopItem } from '../types';

const shopItems: ShopItem[] = [
  {
    id: '1',
    name: 'Cyberpunk Hub',
    category: 'server',
    price: '$19.99',
    description: 'A neon-infused, futuristic layout with pre-configured bots and 50+ roles.',
    imageUrl: 'https://picsum.photos/seed/cyber/600/400',
  },
  {
    id: '2',
    name: 'Aesthetic Emoji Pack V2',
    category: 'emojis',
    price: '$9.99',
    description: '100+ hand-drawn minimalist emojis perfect for chill gaming servers.',
    imageUrl: 'https://picsum.photos/seed/emoji/600/400',
  },
  {
    id: '3',
    name: 'Sentinel Bot Pro',
    category: 'bot',
    price: '$24.99',
    description: 'All-in-one management bot with leveling systems and high-tier moderation.',
    imageUrl: 'https://picsum.photos/seed/bot/600/400',
  },
  {
    id: '4',
    name: 'Esports Arena Master',
    category: 'server',
    price: '$34.99',
    description: 'Professional setup with automated tournament brackets and team channels.',
    imageUrl: 'https://picsum.photos/seed/esports/600/400',
  },
];

export const Shop: React.FC = () => {
  // Use any to bypass strict type errors for motion props in this environment
  const MotionDiv = motion.div as any;

  return (
    <div className="w-full">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4">The Marketplace</h2>
          <p className="text-zinc-500">Premium assets for the modern Discord architect.</p>
        </div>
        <div className="h-px bg-white/10 flex-grow ml-12 mb-4 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shopItems.map((item, idx) => (
          <MotionDiv
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="blur-card p-4 rounded-[2rem] group"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] mb-6 aspect-video">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold">Featured</span>
              </div>
            </div>
            
            <div className="px-4 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                </div>
                <p className="text-2xl font-black">{item.price}</p>
              </div>
              <p className="text-zinc-500 mb-6 text-sm leading-relaxed">{item.description}</p>
              
              <button className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors duration-300">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
