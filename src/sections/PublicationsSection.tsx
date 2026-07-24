import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '../data/hassaanData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 border-t border-white/10 relative bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Title */}
        <div className="mb-16 text-left border-b border-white/10 pb-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            RESEARCH &amp; <span className="text-[#E50914]">PUBLICATIONS</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light font-sans mt-2">
            Essays, architectural breakdowns, and theses published on Medium.
          </p>
        </div>

        {/* Monolithic 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10 text-left">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              onClick={() => window.open(pub.link, '_blank')}
              className="group p-8 bg-[#0D0D0D] hover:bg-neutral-900/60 flex flex-col justify-between transition-all duration-300 cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#E50914] bg-[#E50914]/10 px-3 py-1 border border-[#E50914]/30 font-mono">
                    {pub.category}
                  </span>
                  <FileText className="w-4 h-4 text-neutral-500 group-hover:text-[#E50914] transition-colors" />
                </div>
                
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl group-hover:text-[#E50914] transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <p className="text-xs text-[#E50914] font-mono font-medium leading-relaxed uppercase">
                  {pub.sub}
                </p>
                
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed font-sans">
                  {pub.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#E50914] font-mono pt-4 border-t border-white/10 group-hover:gap-3 transition-all">
                <span>READ PUBLICATION</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
