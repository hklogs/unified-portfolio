import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Globe, ChevronRight, ExternalLink } from 'lucide-react';
import { personalInfo, statsList } from '../data/hassaanData';
import MagneticCard from '../components/MagneticCard';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  selectedPath?: 'architect' | 'operator' | null;
  onExploreProjects: () => void;
}

export default function HeroSection({ onExploreProjects }: HeroSectionProps) {
  const [showHireOptions, setShowHireOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        }
      );

      if (containerRef.current && bgTextRef.current) {
        gsap.to(bgTextRef.current, {
          y: -100,
          scale: 1.15,
          opacity: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 md:px-12 bg-[#0D0D0D] overflow-hidden select-none"
    >
      {/* 1. GIANT BACKDROP TEXT "PORTFOLIO" (Z-0) */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] sm:text-[16vw] font-black text-[#D31A21]/20 uppercase tracking-tighter pointer-events-none font-heading whitespace-nowrap z-0 leading-none select-none"
      >
        PORTFOLIO
      </div>

      {/* 2. CENTRAL LARGE WAIST-UP PORTRAIT CUTOUT (Z-10) */}
      <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-[500px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[800px] h-[75vh] sm:h-[82vh] flex justify-center items-end">
          <img
            src="/hassaan-portrait.png"
            alt={personalInfo.name}
            className="w-full h-full object-contain object-bottom filter contrast-[1.08] brightness-[0.98] drop-shadow-2xl"
            style={{
              maskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.8) 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, rgba(0,0,0,0.8) 75%, transparent 100%)',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
            }}
          />
          {/* Bottom backdrop overlay to ensure 100% seamless transition to #0D0D0D */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. FOREGROUND CONTENT GRID (Z-20) */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex-1 flex flex-col justify-between py-6">
        
        {/* Upper Editorial Row: Headline Name & Role */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          <div className="lg:col-span-8 space-y-2 text-left">
            <div className="hero-fade font-script text-white text-3xl sm:text-4xl font-normal select-none tracking-wide drop-shadow">
              Hello, I'm
            </div>
            
            <h1 className="hero-fade text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight text-white font-heading uppercase drop-shadow-lg">
              HASSAAN ABDULLAH<br />KIYANI
            </h1>
            
            <div className="hero-fade pt-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#E50914] font-heading font-bold tracking-wider uppercase drop-shadow">
                AI ENGINEER &amp; SQA SPECIALIST
              </h2>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5 text-left lg:text-right flex flex-col justify-end lg:items-end">
            <p className="hero-fade text-[#A1A1AA] text-xs sm:text-sm leading-relaxed max-w-md font-light font-sans drop-shadow-md">
              Building and validating autonomous AI systems with rigorous SQA auditing, deterministic verification pipelines, and machine cognition architectures.
            </p>

            <div className="hero-fade flex items-center lg:justify-end gap-2 text-[10px] sm:text-xs font-mono text-[#A1A1AA] tracking-widest uppercase font-semibold">
              <Globe className="w-3.5 h-3.5 text-[#E50914]" />
              <span>PAKISTAN • AVAILABLE WORLDWIDE</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-fade flex flex-wrap gap-3 pt-1">
              <MagneticCard
                enableGlow
                glowColor="#E50914"
                intensity={15}
                onClick={onExploreProjects}
                className="px-6 py-3 bg-[#E50914] text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:scale-105"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-3.5 h-3.5 text-white" />
              </MagneticCard>

              <MagneticCard
                enableGlow
                glowColor="#FFFFFF"
                intensity={10}
                className="px-5 py-3 bg-neutral-900/90 border border-neutral-700 hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer font-mono uppercase tracking-widest"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                  <span>Contact Me</span>
                </a>
              </MagneticCard>

              {showHireOptions ? (
                <div className="flex gap-2 items-center bg-neutral-900 border border-neutral-700 p-1 animate-fade-in">
                  <a
                    href={personalInfo.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#1dbf73] hover:bg-[#158f55] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                  >
                    <span>Fiverr</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href={personalInfo.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#37a000] hover:bg-[#287500] text-white font-bold text-[10px] flex items-center gap-1 transition-all"
                  >
                    <span>Upwork</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <button
                    onClick={() => setShowHireOptions(false)}
                    className="px-2 py-1 text-neutral-400 hover:text-white text-[10px] font-mono font-bold"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowHireOptions(true)}
                  className="px-4 py-3 border border-[#E50914] bg-[#E50914]/15 hover:bg-[#E50914]/30 text-[#E50914] hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer font-mono uppercase tracking-widest"
                >
                  <span>Hire Me</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Monolithic Metrics Row (Hairline Divider Grid, No Floating Card Boxes) */}
        <div className="hero-fade mt-16 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-left bg-black/40 backdrop-blur-sm">
          {statsList.map((stat, i) => (
            <div key={i} className="p-4 sm:p-6 space-y-1 group cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-[#E50914] leading-none group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#A1A1AA] font-bold pt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
