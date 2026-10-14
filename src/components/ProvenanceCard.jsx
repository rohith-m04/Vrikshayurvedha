import React from 'react';
import { BookMarked, ChevronDown, ChevronUp, ScrollText, CheckCircle2 } from 'lucide-react';
import { TEXTS_DATA } from '../data/texts.js';

export default function ProvenanceCard({ sources, researchMode }) {
  const [expanded, setExpanded] = React.useState(researchMode);

  React.useEffect(() => {
    if (researchMode) setExpanded(true);
  }, [researchMode]);

  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-6 border border-[#E2DACB] rounded bg-[#FDFBF7] overflow-hidden">
      <div 
        onClick={() => setExpanded(!expanded)}
        className="px-4 py-3 bg-[#F4EFE6]/60 flex items-center justify-between cursor-pointer hover:bg-[#F4EFE6] transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookMarked className="w-4 h-4 text-[#2A5741]" />
          <span className="text-xs uppercase tracking-wider font-semibold text-[#1E3E2F]">
            Source Provenance & Textual Attributions ({sources.length})
          </span>
          {researchMode && (
            <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-[#2A5741] text-[#F9F6F0] rounded font-serif italic">
              Scholarly View
            </span>
          )}
        </div>
        <button className="text-[#6E7A72] hover:text-[#1E3E2F]">
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {expanded && (
        <div className="p-4 space-y-3 divide-y divide-[#E2DACB]/60">
          {sources.map((src, i) => {
            const bookMeta = TEXTS_DATA.find(b => b.id === src.bookId);
            return (
              <div key={i} className={`pt-3 first:pt-0 space-y-1 text-xs`}>
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-semibold text-[#1E3E2F] font-serif text-sm">
                    {bookMeta ? bookMeta.title : src.bookId}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#2A5741]/10 text-[#2A5741] font-mono text-[11px] font-medium">
                    {src.ref}
                  </span>
                </div>
                {bookMeta && (
                  <div className="text-[11px] text-[#6E7A72]">
                    {bookMeta.author} &bull; {bookMeta.publisher}
                  </div>
                )}
                <p className="text-[#464F49] font-serif italic pt-1 leading-relaxed">
                  &ldquo;{src.note}&rdquo;
                </p>
                {src.sanskritShloka && (
                  <div className="mt-1 p-2 bg-[#F4EFE6] rounded border border-[#E2DACB] font-serif text-[11px] text-[#1E3E2F] leading-relaxed">
                    <span className="text-[10px] uppercase font-sans font-bold text-[#A14C29] block mb-0.5">Classical Verse:</span>
                    {src.sanskritShloka}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
