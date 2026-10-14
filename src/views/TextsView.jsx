import React from 'react';
import { BookOpen, ExternalLink, Download, ShieldCheck, Bookmark, FileText } from 'lucide-react';
import { TEXTS_DATA } from '../data/texts.js';

export default function TextsView({ researchMode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Source Library & Scholarly Foundation
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          The Three Classical Treatises
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          The foundation of this digital knowledge archive rests on three preserved physical monographs. 
          Every extraction in this website preserves its book, chapter, and verse attribution.
        </p>
      </div>

      {/* Monograph Cards */}
      <div className="space-y-12">
        {TEXTS_DATA.map((book) => (
          <div
            key={book.id}
            className="bg-white p-6 sm:p-10 rounded-xl border border-[#E2DACB] shadow-sm space-y-8"
          >
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E2DACB] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#2A5741]/10 text-[#2A5741] text-[10px] font-bold uppercase tracking-wider">
                    Primary Corpus Pillar
                  </span>
                  <span className="text-xs text-[#6E7A72] font-mono">{book.year}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3E2F]">
                  {book.title}
                </h2>
                <div className="text-sm font-serif italic text-[#A14C29]">
                  {book.subTitle}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={book.pdfAsset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded bg-[#2A5741] text-[#F9F6F0] hover:bg-[#1E3E2F] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Original Book PDF</span>
                </a>
              </div>
            </div>

            {/* Publication Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded bg-[#FDFBF7] border border-[#E2DACB] text-xs text-[#464F49]">
              <div><strong className="text-[#1E3E2F] block">Editor / Author:</strong> {book.author}</div>
              <div><strong className="text-[#1E3E2F] block">Publisher:</strong> {book.publisher}</div>
              <div><strong className="text-[#1E3E2F] block">Series:</strong> {book.series}</div>
              <div><strong className="text-[#1E3E2F] block">Physical Extent:</strong> {book.pages} pages</div>
            </div>

            {/* Scope */}
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                Scope & Scholarly Context
              </h3>
              <p className="font-serif text-sm text-[#191D1A] leading-relaxed">
                {book.scope}
              </p>
            </div>

            {/* Key Themes */}
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-sm text-[#1E3E2F] uppercase tracking-wider">
                Key Extracted Contributions:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {book.keyThemes.map((th, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#464F49]">
                    <span className="text-[#2A5741] font-bold mt-0.5">&bull;</span>
                    <span>{th}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapters Breakdown */}
            <div className="space-y-3 pt-4 border-t border-[#E2DACB]">
              <h3 className="font-serif font-bold text-base text-[#1E3E2F]">
                Chapter & Sectional Concordance
              </h3>
              <div className="divide-y divide-[#E2DACB]/60 border border-[#E2DACB] rounded-lg overflow-hidden">
                {book.chapters.map((ch) => (
                  <div key={ch.id} className="p-3 bg-[#FDFBF7] space-y-1 text-xs">
                    <strong className="font-serif text-sm text-[#1E3E2F] block">{ch.name}</strong>
                    <p className="text-xs text-[#6E7A72] leading-relaxed">{ch.summary}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
