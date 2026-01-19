
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="p-4 md:p-10">
      <div className="relative w-full min-h-[500px] md:aspect-[21/9] md:min-h-0 rounded-xl overflow-hidden bg-surface border border-border-muted group shadow-2xl flex flex-col">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full"></div>
        </div>
        
        <div className="relative flex-1 flex flex-col justify-end p-6 md:p-12 gap-6 md:gap-8 z-10">
          <div className="space-y-3 md:space-y-4">
            <p className="text-primary font-mono text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold">
              Creative Developer + Producer
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              FRONTEND DEV<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(6, 228, 249, 0.6)' }}>
                DJ | PRODUCER
              </span>
            </h1>
          </div>
          
          <p className="max-w-2xl text-slate-400 text-base md:text-xl leading-relaxed font-light">
            Synthesizing high-performance React interfaces with deep house aesthetics. 
            Designing experiences where <span className="text-slate-200 font-medium">code meets sound</span>.
          </p>
          
          <div className="flex pt-2">
            <button className="bg-primary text-background-dark px-6 md:px-8 py-3 md:py-4 rounded font-black uppercase tracking-widest text-[11px] md:text-xs flex items-center gap-3 hover:gap-5 transition-all group shadow-[0_0_20px_rgba(6,228,249,0.3)] active:scale-95">
              View Projects 
              <span className="material-symbols-outlined text-sm font-bold">north_east</span>
            </button>
          </div>
        </div>

        {/* Decorative elements - absolute positioned relative to container */}
        <div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-40 sm:opacity-100">
          <div className="font-mono text-[10px] text-slate-500 tracking-tighter uppercase">
            EST. 1992 // SYSTEM_ONLINE
          </div>
          <div className="w-12 h-[1px] bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
