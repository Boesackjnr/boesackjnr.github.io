
import React from 'react';

const FeaturedWork: React.FC = () => {
  const projects = [
    {
      id: '01',
      title: 'Quantum Analytics UI',
      description: 'Real-time data visualization system with sub-10ms latency updates.',
      tags: ['Next.js', 'D3.js', 'Tailwind'],
      filename: 'Dashboard.tsx',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4MhCDPq4_rXpTTOv3JvWzd5G2rnLLs_bqh7LFigeetnnvWnKnp7CIysU9mONM6VVnOBHPj2QiP58deaXrQNRkWOY2V_7rrQxH5w3bDA5u6koiD-9nm8dzcCpui75JoEW2IWYWFCfGnacIG7X5A2xPudpS0-1mTZl98CCVNKpCiGexkZk4S5PAnhGWwtGfKWKVtuDq5YTZo3liYsBRuzE9MRjXQpjOoVWTFE0_hr3E1fcpZZasICUSogydkvAc7GIFOWvQJcAxfndT',
      code: [
        { color: 'text-purple-400', text: 'const' },
        { color: 'text-blue-400', text: ' Dashboard' },
        { color: 'text-slate-100', text: ' = () => {' },
        { color: 'text-purple-400', text: '  return', indent: 1 },
        { color: 'text-slate-100', text: ' (', indent: 1 },
        { color: 'text-primary', text: '    <Container>', indent: 2 },
        { color: 'text-primary', text: '      <AnalyticGrid', indent: 2 },
        { color: 'text-slate-300', text: '        data={liveStats}', indent: 2 },
        { color: 'text-primary', text: '      />', indent: 2 },
        { color: 'text-slate-100', text: '  );', indent: 1 },
        { color: 'text-slate-100', text: '};' }
      ]
    },
    {
      id: '02',
      title: 'WebAudio DAW Lite',
      description: 'A browser-based synthesizer and sequencer for rapid music ideation.',
      tags: ['Web Audio API', 'Canvas', 'TypeScript'],
      filename: 'AudioEngine.js',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsayXjksmA0z00A0tZVQKLfR73kqzCpCsrhYTDTnqGNABgCNsHtq6KtQSuiblsAZtBht67F2WoQVgLLNBlHcSmE1OQa88ad0WCCeOmKej6grDiNWq8Vo3BXoJxJzKuDWtLKPaipvq9XTdl30N5AoTgaJRtVBVMaljnMtWc24Y3iHlEpbylLiR62d8v1i8JEOXba7P_KQlqG7Vd3AZv8NioxrPqsYpE03ZMoaUNI3IITAM5S80RtYNCDOuqGj1kUWzORDMUxwkOXFGt',
      code: [
        { color: 'text-purple-400', text: 'export function' },
        { color: 'text-blue-400', text: ' initSynth' },
        { color: 'text-slate-100', text: '() {' },
        { color: 'text-slate-300', text: '  ctx = new AudioContext();', indent: 1 },
        { color: 'text-slate-300', text: '  osc = ctx.createOsc();', indent: 1 },
        { color: 'text-slate-300', text: "  osc.type = 'sine';", indent: 1 },
        { color: 'text-slate-300', text: '  osc.freq.set(440);', indent: 1 },
        { color: 'text-slate-300', text: '  osc.start();', indent: 1 },
        { color: 'text-slate-100', text: '}' }
      ]
    }
  ];

  return (
    <section className="px-6 md:px-10 py-10">
      <div className="flex items-center justify-between mb-8 border-b border-border-muted pb-4">
        <h3 className="text-xl md:text-2xl font-black uppercase flex items-center gap-3 tracking-tighter">
          <span className="text-primary material-symbols-outlined">terminal</span>
          Featured Build_01
        </h3>
        <div className="hidden sm:block text-slate-500 font-mono text-[10px] tracking-widest uppercase">/Selected Works 2024</div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-surface border border-border-muted rounded-xl overflow-hidden flex flex-col group hover:border-primary/30 transition-all duration-500">
            <div className="p-4 border-b border-border-muted flex items-center justify-between bg-background-dark/50">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/30"></span>
                <span className="size-2.5 rounded-full bg-yellow-500/30"></span>
                <span className="size-2.5 rounded-full bg-green-500/30"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest">{project.filename}</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
              <div className="p-4 md:p-6 bg-[#0d0f11] font-mono text-[10px] md:text-[11px] leading-relaxed text-slate-400 overflow-hidden border-b sm:border-b-0 sm:border-r border-border-muted flex flex-col justify-center min-h-[150px]">
                {project.code.map((line, idx) => (
                  <div key={idx} style={{ paddingLeft: line.indent ? `${line.indent * 1}rem` : '0' }}>
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden aspect-video sm:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            
            <div className="p-6 bg-surface">
              <h4 className="text-lg md:text-xl font-black mb-1 uppercase tracking-tight">{project.title}</h4>
              <p className="text-slate-400 text-xs md:text-sm mb-6 font-light">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] md:text-[10px] font-bold font-mono border border-border-muted px-2 py-1 uppercase text-slate-500 hover:text-primary hover:border-primary/50 cursor-default transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
