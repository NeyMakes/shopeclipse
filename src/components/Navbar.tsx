
import React from 'react';
import { ShoppingCart, MessageSquare, Shield, Settings, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="blur-card rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tighter">Eclipse</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors duration-200" title="Shop">
            <ShoppingCart size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors duration-200" title="Discord">
            <MessageSquare size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors duration-200" title="Security">
            <Shield size={20} />
          </button>
          <div className="w-px h-6 bg-white/10 mx-2" />
          <button className="text-zinc-400 hover:text-white transition-colors duration-200">
            <User size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors duration-200">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
