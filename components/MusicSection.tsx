
import React from 'react';

const MusicSection: React.FC = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between border-b border-border-muted pb-4">
        <h3 className="text-lg md:text-xl font-black flex items-center gap-3 uppercase tracking-tighter">
          <span className="text-primary material-symbols-outlined">graphic_eq</span>
          Latest Mixes
        </h3>
      </div>
      
      <div className="bg-surface border border-border-muted p-4 md:p-8 rounded-xl flex flex-col sm:flex-row items-center gap-6 md:gap-8 relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 size-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
        
        <div className="size-32 md:size-40 bg-background-dark border border-border-muted flex-shrink-0 relative group/art cursor-pointer rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover/art:opacity-100 transition-opacity z-10">
            <span className="material-symbols-outlined text-primary text-4xl md:text-6xl">play_circle</span>
          </div>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/art:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwJuIAFzmqEH0874-8c_Vut-4nbPC5ajwB6Bhq7_SjTtF_f0tLFlXeM8_B9MwPOzWvKJQlylHlnyIBiBw3clO01_M9pr80r1dp5QR_HufP8Q3hVA9T7z4QgABNt7Irmk5RQ-H34X0Pt-eN8SjP2LT1mEDjBKGQBb9y2QQLlTpJcJHsLq-okx6Oorncl2JmgmjxJOPPYxOKAUMSKtU3kCMGu4cbbby5yoo4k6vpVd6Nl-4m7xigBqNT7ZJU6ZMtlEVU59JO32CsINV" 
            alt="Mix Art"
          />
        </div>
        
        <div className="flex-1 space-y-4 md:space-y-6 w-full text-center sm:text-left">
          <div>
            <h4 className="text-xl md:text-2xl font-black tracking-tight uppercase">After Hours // 001</h4>
            <p className="text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mt-1">
              Deep House / Melodic Techno • 126 BPM
            </p>
          </div>
          
          <div className="flex items-end gap-1 h-12 md:h-16 w-full px-1 justify-center sm:justify-start">
            {/* Generate fewer bars for mobile, more for desktop */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 max-w-[4px] rounded-full transition-all duration-300 ${i < 12 ? 'bg-primary' : 'bg-slate-700'} ${i > 20 ? 'hidden sm:block' : ''}`}
                style={{ 
                  height: `${Math.random() * 80 + 20}%`,
                  opacity: i < 12 ? 1 : 0.3
                }}
              ></div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2">
              <span className="text-primary">04:12</span> / 58:00
            </span>
            <div className="flex items-center gap-2 text-primary animate-pulse">
              <span className="size-1 md:size-1.5 rounded-full bg-primary"></span>
              Live Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
