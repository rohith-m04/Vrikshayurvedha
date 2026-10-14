import React, { useState, useMemo } from 'react';
import { Search, BookMarked, ArrowRight } from 'lucide-react';
import { GLOSSARY_DATA } from '../data/glossary.js';

export default function GlossaryView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter(t => {
      const q = searchTerm.toLowerCase();
      return (
        t.term.toLowerCase().includes(q) ||
        t.transliteration.toLowerCase().includes(q) ||
        t.devanagari.includes(searchTerm) ||
        t.meaning.toLowerCase().includes(q) ||
        t.context.toLowerCase().includes(q)
      );
    });
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Terminology & Lexicon
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Scholarly Sanskrit Glossary
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Comprehensive dictionary of classical Sanskrit botanical, silvicultural, and physiological terminology 
          with Devanagari orthography, IAST transliteration, contextual meanings, and textual references.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg border border-[#E2DACB] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-[#6E7A72] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search glossary by term, Devanagari, or meaning..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#F9F6F0] border border-[#E2DACB] rounded focus:outline-none focus:border-[#2A5741] font-serif"
          />
        </div>
        <div className="text-xs font-mono text-[#6E7A72]">
          Showing <strong>{filteredTerms.length}</strong> classical terms
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((g, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg border border-[#E2DACB] bg-white space-y-3 shadow-sm hover:border-[#2A5741] transition-colors"
          >
            <div className="flex items-start justify-between border-b border-[#E2DACB]/60 pb-2">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1E3E2F]">{g.term}</h3>
                <div className="text-xs font-serif italic text-[#A14C29]">
                  {g.transliteration} &bull; <span className="devanagari text-base font-normal">{g.devanagari}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[10px] font-mono text-[#6E7A72]">
                {g.source}
              </span>
            </div>

            <div className="space-y-1">
              <strong className="text-[10px] uppercase font-bold text-[#2A5741] tracking-wider block">
                Literal Definition:
              </strong>
              <p className="font-serif text-sm text-[#191D1A] leading-relaxed">
                {g.meaning}
              </p>
            </div>

            <div className="pt-2 border-t border-[#E2DACB]/60 space-y-1">
              <strong className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block">
                Archival Context:
              </strong>
              <p className="text-xs text-[#464F49] leading-relaxed">
                {g.context}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
