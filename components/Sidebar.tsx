
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'music', icon: 'graphic_eq', label: 'Music' },
    { id: 'gaming', icon: 'sports_esports', label: 'Gaming' },
  ];

  return (
    <aside className="fixed bottom-0 left-0 w-full h-16 md:h-screen md:w-20 border-t md:border-t-0 md:border-r border-border-muted flex flex-row md:flex-col items-center py-0 md:py-8 z-50 bg-background-dark/95 backdrop-blur-md md:backdrop-blur-none">
      <div className="hidden md:flex mb-12">
        <div className="size-10 bg-primary flex items-center justify-center rounded shadow-[0_0_15px_rgba(6,228,249,0.3)]">
          <span className="material-symbols-outlined text-background-dark font-black">terminal</span>
        </div>
      </div>
      
      <nav className="flex flex-row md:flex-col gap-4 md:gap-8 flex-1 justify-around md:justify-start w-full md:w-auto px-4 md:px-0">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`p-3 transition-all duration-300 relative group flex items-center justify-center ${
              activeTab === item.id ? 'text-primary' : 'text-slate-500 hover:text-primary'
            }`}
            title={item.label}
          >
            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            {activeTab === item.id && (
              <>
                <div className="absolute top-0 md:top-auto md:right-0 bottom-auto md:bottom-0 w-full md:w-0.5 h-0.5 md:h-full bg-primary shadow-[0_0_8px_#06e4f9]"></div>
              </>
            )}
            <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-surface border border-border-muted rounded text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
              {item.label}
            </div>
          </button>
        ))}
      </nav>
      
      <div className="hidden md:flex mt-auto flex-col gap-4">
        <button className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-primary transition-colors">
          settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
