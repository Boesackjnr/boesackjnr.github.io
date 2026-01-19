
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 md:h-20 border-b border-border-muted flex items-center justify-between px-4 md:px-10 sticky top-0 bg-background-dark/80 backdrop-blur-md z-40">
      <div className="flex items-center gap-3 md:gap-6">
        <h2 className="text-lg md:text-xl font-black tracking-tighter uppercase group cursor-pointer whitespace-nowrap">
          Alex <span className="text-primary transition-all group-hover:tracking-[0.1em]">Rivera</span>
        </h2>
        <div className="flex h-6 md:h-7 items-center justify-center gap-x-1 md:gap-x-2 rounded bg-primary/10 px-2 md:px-3 border border-primary/20 animate-pulse shrink-0">
          <span className="material-symbols-outlined text-primary text-[8px] md:text-[10px]">radio_button_checked</span>
          <p className="text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Available</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a className="hover:text-primary transition-colors cursor-pointer" href="#stack">Stack</a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#archive">Archive</a>
          <a className="hover:text-primary transition-colors cursor-pointer" href="#about">About</a>
        </nav>
        <button className="bg-primary text-background-dark px-4 md:px-6 py-2 rounded md:rounded text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_10px_rgba(6,228,249,0.2)] whitespace-nowrap">
          CV
        </button>
      </div>
    </header>
  );
};

export default Header;
