import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Github, Compass, ChevronRight, Award, Shield, Cpu, ExternalLink } from 'lucide-react';
import { personalInfo, statsList } from '../data/hassaanData';

interface HeroSectionProps {
  selectedPath: 'architect' | 'operator' | null;
  onExploreProjects: () => void;
}

export default function HeroSection({ selectedPath, onExploreProjects }: HeroSectionProps) {
  const [showHireOptions, setShowHireOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance stagger
      gsap.fromTo('.hero-fade', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Glowing border animation for card
      gsap.fromTo(cardRef.current,
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden bg-[#0D0D0D]"
    >
      {/* Large faint background title behind the main hero block for visual depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-bold text-[#E50914]/[0.08] uppercase select-none tracking-widest pointer-events-none font-heading whitespace-nowrap z-0">
        PORTFOLIO
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr_0.4fr] gap-10 items-center relative z-10">
        
        {/* Left Column: Text info */}
        <div className="space-y-5 text-left flex flex-col justify-center">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full border-b border-neutral-800 pb-4">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
              SOFTWARE QUALITY ASSURANCE & INTELLIGENT AUDITING
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-neutral-800 rounded-none relative w-fit shrink-0">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E50914]"></span>
              </span>
              <span className="text-[#E50914] text-[9px] font-mono font-bold tracking-wider">AVAILABLE FOR SQA AUDITING</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-script text-[#E50914] text-2xl font-bold select-none">Hello, I'm</div>
            <h1 
              ref={titleRef}
              className="hero-fade text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight text-white font-heading uppercase"
            >
              HASSAAN ABDULLAH KIYANI
            </h1>
            <h2 className="hero-fade text-lg sm:text-xl md:text-2xl text-[#E50914] font-heading font-bold tracking-wide uppercase">
              AI ENGINEER & SQA SPECIALIST
            </h2>
          </div>

          <p className="hero-fade text-neutral-400 text-sm leading-relaxed max-w-xl font-light font-sans">
            Bridging the gap between software validation matrices and cognitive agent loops. AI Engineer at Tritanium Global and Executive R&D Member at Primus Leads LLC.
          </p>

          <div className="hero-fade">
            <span className="px-3 py-1 bg-[#121212] border border-neutral-800 rounded-none font-mono text-[9px] text-neutral-400 tracking-wider font-bold">
              PAKISTAN • AVAILABLE WORLDWIDE
            </span>
          </div>

          {/* Call to Actions */}
          <div className="hero-fade flex flex-wrap gap-4 pt-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 bg-[#E50914] hover:bg-[#b01e1e] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-none hover:shadow-[0_0_20px_rgba(229,9,20,0.3)] font-mono uppercase tracking-widest"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-[#121212] border border-neutral-800 hover:bg-[#1c1c1c] hover:border-neutral-700 text-white font-bold text-xs flex items-center gap-2 transition-all duration-300 rounded-none font-mono uppercase tracking-widest"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Contact Me</span>
            </a>

            {showHireOptions ? (
              <div className="flex gap-2 items-center bg-[#121212] border border-neutral-800 p-1.5 rounded-none animate-fade-in">
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all rounded-none"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all rounded-none"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <button
                  onClick={() => setShowHireOptions(false)}
                  className="px-3 py-2 text-neutral-400 hover:text-white text-[10px] transition-all cursor-pointer font-bold font-mono"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowHireOptions(true)}
                className="px-5 py-3 border border-[#E50914]/30 bg-[#E50914]/5 hover:bg-[#E50914]/10 text-[#E50914] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer rounded-none font-mono uppercase tracking-widest"
              >
                <span>Hire Me</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Center Column: Portrait Image Frame */}
        <div className="flex flex-col items-center justify-center">
          <div 
            ref={cardRef}
            className="relative overflow-hidden p-1.5 transition-all duration-500 max-w-[320px] w-full bg-[#121212] border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-none"
          >
            {/* The Image inside Frame */}
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-800 group rounded-none">
              <img 
                src="/hassaan-portrait.png" 
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80';
                }}
              />
              {/* Scanline pattern for SQA Mode */}
              {selectedPath === 'operator' && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.06] scanlines" />
              )}
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/25" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/25" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/25" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/25" />
            </div>

            {/* Sub text badge under picture */}
            <div className="mt-3 p-3 bg-[#181818] border border-neutral-800 text-center rounded-none">
              <div className="text-xs font-semibold text-white tracking-wide leading-none">{personalInfo.name}</div>
              <div className="text-[9px] text-neutral-500 font-mono mt-1.5 tracking-wider uppercase leading-none">
                {personalInfo.degree}
              </div>
              <div className="text-[8px] text-neutral-600 font-mono mt-1 leading-none">
                {personalInfo.university}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked quick stats */}
        <div className="flex flex-col gap-4 w-full h-full justify-center">
          {statsList.map((stat, i) => (
            <div 
              key={i} 
              className="bg-[#121212] border border-neutral-800 p-4 text-left group transition-all duration-300 rounded-none hover:border-[#E50914]/40 flex flex-col justify-center"
            >
              <div className="text-3xl sm:text-4xl font-bold font-heading text-[#E50914] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 mt-1 leading-normal font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
