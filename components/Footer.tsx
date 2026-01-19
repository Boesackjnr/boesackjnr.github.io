
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { label: 'Github', icon: 'link', url: '#' },
    { label: 'SoundCloud', icon: 'graphic_eq', url: '#' },
    { label: 'LinkedIn', icon: 'person', url: '#' },
    { label: 'Email', icon: 'mail', url: '#' }
  ];

  return (
    <footer className="p-6 md:p-10 mt-10 mb-16 md:mb-0 border-t border-border-muted flex flex-col items-center text-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-none">
          Let's build something<br/>
          <span className="text-primary text-transparent" style={{ WebkitTextStroke: '1px #06e4f9' }}>
            unforgettable.
          </span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6">
          {socials.map((link) => (
            <a 
              key={link.label}
              href={link.url}
              className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500 hover:text-primary transition-all duration-300 flex items-center gap-2 md:gap-3 group"
            >
              <span className="material-symbols-outlined text-base md:text-lg group-hover:scale-125 transition-transform">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 pt-8 w-full border-t border-border-muted flex flex-col md:flex-row justify-center items-center gap-x-10 lg:gap-x-16 gap-y-6 text-[8px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.4em]">
        <span className="font-bold whitespace-nowrap">© 2024 Alex Rivera</span>
        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-4">
          <span className="hover:text-primary cursor-pointer transition-colors whitespace-nowrap">Privacy</span>
          <span className="hover:text-primary cursor-pointer transition-colors whitespace-nowrap">Terms</span>
          <span className="text-slate-300 font-black whitespace-nowrap">Built with Precision</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
