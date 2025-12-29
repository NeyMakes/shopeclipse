
import React, { useState } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAiRecommendation } from '../services/geminiService';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null);
    const result = await getAiRecommendation(input);
    setResponse(result);
    setIsLoading(false);
    setInput('');
  };

  // Use any to bypass strict type errors for motion props in this environment
  const MotionDiv = motion.div as any;

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] blur-card rounded-3xl overflow-hidden shadow-2xl border-white/20"
          >
            <div className="bg-white text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-bold">Eclipse Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-zinc-400 text-sm mb-4">
                Looking for something specific? Ask me for a recommendation!
              </p>
              
              {response && (
                <div className="bg-white/10 p-4 rounded-2xl text-sm mb-4 animate-in fade-in slide-in-from-bottom-2">
                  <span className="font-bold block mb-1">Recommendation:</span>
                  {response}
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. I want a gaming server..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 pr-12 text-sm focus:outline-none focus:border-white/40 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} />}
      </button>
    </div>
  );
};
