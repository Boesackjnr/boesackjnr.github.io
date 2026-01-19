
import React from 'react';

const GamingSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border-muted pb-4">
        <h3 className="text-xl font-black flex items-center gap-3 uppercase tracking-tighter">
          <span className="text-primary material-symbols-outlined">sports_esports</span>
          Logged In
        </h3>
      </div>
      
      <div className="bg-surface border border-border-muted rounded-xl p-6 space-y-8 relative overflow-hidden group">
        <div className="flex items-center gap-5">
          <div className="size-14 rounded-lg bg-background-dark border border-border-muted overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-surface">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1LSMH6vJ5SVvoJa2ZWlXFWn0_cM6o4USVDAfUfxTADa5NjMExrK-lrrhaUGGI_UOBj3butTwcQxUBpLICQI0VCoCBD0QLx47a2phC2xXw0P1i-JPekrm7qWwDLL3pkyFp4VlmYCMp7IjNNAgn-bgu2VO-4cCSg_UiRLsAuCqd2f_00kCies9Zeml4vMlor8PvjmUbW7KkNxNnIh5BgZU6LoN33hZm8RYtTqXHFoiVN8ZGB8HMZfmf7LKewFU9vNFrH5QuaM4qOVE4" 
              alt="Avatar"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-widest">NeonStrike_92</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="size-2 rounded-full bg-primary shadow-[0_0_5px_#06e4f9]"></div>
              <p className="text-[10px] text-primary font-mono font-bold uppercase tracking-widest">In-Game</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">Current Rotation</p>
          <div className="space-y-2">
            {[
              { name: 'Cyberpunk 2077', hours: 240, progress: 85 },
              { name: 'Elden Ring', hours: 182, progress: 60 }
            ].map((game) => (
              <div key={game.name} className="p-3 bg-background-dark/30 border border-border-muted rounded group/game hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-tight">{game.name}</span>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">{game.hours} HRS</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary shadow-[0_0_5px_#06e4f9] transition-all duration-1000"
                    style={{ width: `${game.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingSection;
