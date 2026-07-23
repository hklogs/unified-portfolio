import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { educationHistory, experienceHistory, volunteerHistory } from '../data/hassaanData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-white">
            QUALIFICATION & <span className="text-[#E50914]">TIMELINE</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-xl mx-auto font-sans">
            Academic credentials, professional AI engineer engagements, and campus leadership tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Education & Skills */}
          <div className="space-y-8 text-left">
            {/* Education Sub-section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                  Education Track
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#121212] border border-neutral-800 rounded-none">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    2022 - Present
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    BS Software Engineering (Final Year)
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    UIIT PMAS-Arid Agriculture University, Pakistan
                  </h5>
                </div>

                <div className="p-4 bg-[#121212] border border-neutral-800 rounded-none">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    Prior to 2022
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    Matric & Intermediate (Computer Science Track)
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    Army Public School and College, Jhelum Cantt
                  </h5>
                </div>
              </div>
            </div>

            {/* Skills Sub-section */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Skills & Badges
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Software Quality Assurance", "Manual & Automated Testing", "Boundary Value Analysis", 
                  "Predictive Log Auditing", "Python", "Java", "C++", "SQL", "TypeScript", 
                  "Google AI Studio", "Vertex AI API", "LangGraph", "LangChain", 
                  "Gemini Pro / Flash", "TensorFlow", "OpenCV", "Git & GitHub", "Vercel", "Supabase"
                ].map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-0.5 bg-[#121212] border border-neutral-800 text-neutral-300 font-mono text-[9px] uppercase rounded-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Work Track Timeline */}
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Work Track & Timeline
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-neutral-800 pl-6 ml-4">
              {/* Step 01 */}
              <div className="relative group text-left">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    June 2026 - Present (STEP 01)
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    AI Engineer
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    Tritanium Global
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                    Developing autonomous agentic AI systems & automated database pipelines.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative group text-left">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    June 2026 - Present (STEP 02)
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    Executive Member - R&D
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    Primus Leads LLC
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                    R&D on automated lead generation algorithms & scraping pipelines.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative group text-left">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    Sept 2024 - Feb 2025 (STEP 03)
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    Team Lead & Operations Manager
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    Cloudwave Innovations
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                    Supervised inward operations, hiring channels, and operational SQA frameworks.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative group text-left">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#E50914] group-hover:scale-125 transition-transform" />
                <div className="p-5 bg-[#121212] border border-neutral-800 hover:border-[#E50914]/25 rounded-none transition-all duration-300">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold mb-1">
                    Leadership & Community (STEP 04)
                  </span>
                  <h4 className="font-heading font-bold text-white text-sm leading-snug">
                    Vice President & Ambassador
                  </h4>
                  <h5 className="text-xs text-[#E50914] font-semibold font-mono mt-1 uppercase">
                    GDG Cloud Islamabad / Al Khidmat / PDS Rawalpindi
                  </h5>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mt-3 font-sans">
                    Vice President (PDS Rawalpindi), Core Team (Al Khidmat), Student Ambassador (GDG Cloud Islamabad).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote / Callout Box */}
          <div className="space-y-8 w-full">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <div className="w-8 h-8 rounded-none bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
                Ecosystem Vision
              </h3>
            </div>

            <div className="p-6 bg-[#E50914] text-white rounded-none shadow-xl border border-[#b01e1e] flex flex-col justify-between aspect-[3/4] relative overflow-hidden group">
              {/* Subtle grid watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-5xl font-serif text-white/30 block leading-none select-none">“</span>
                <p className="text-sm md:text-base font-medium leading-relaxed font-sans text-white/95">
                  Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition.
                </p>
              </div>

              <div className="space-y-2 pt-6 relative z-10 border-t border-white/20 mt-4">
                <div className="font-script text-white text-2xl font-bold">
                  Hassaan Abdullah
                </div>
                <div className="text-[9px] font-mono tracking-widest text-white/80 font-bold uppercase leading-none">
                  BUILDING RESILIENT DIGITAL ARCHITECTURE
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
