
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Shop } from './components/Shop';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Dynamic Background */}
      <BackgroundEffect mousePos={mousePos} />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-24 flex flex-col gap-24 lg:gap-32">
        <Hero />
        
        <section id="features">
          <Features />
        </section>

        <section id="shop">
          <Shop />
        </section>

        <footer className="mt-12 text-center text-zinc-500 text-sm border-t border-white/5 pt-12">
          <p>© {new Date().getFullYear()} Eclipse. Not affiliated with Discord Inc.</p>
        </footer>
      </main>

      {/* AI Float */}
      <AiAssistant />
    </div>
  );
};

export default App;
