import React, { useState } from 'react';
import { X, BookOpen, ChevronRight, FileText, Download } from 'lucide-react';
import { SUMMARY_CONTENT } from '../data/summaryContent.js';

export default function SummaryModal({ isOpen, onClose }) {
  const [activeSectionId, setActiveSectionId] = useState('sec-1');

  if (!isOpen) return null;

  const currentSec = SUMMARY_CONTENT.sections.find(s => s.id === activeSectionId) || SUMMARY_CONTENT.sections[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fadeIn">
      <div className="bg-[#FDFBF7] border border-[#E2DACB] rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2DACB] bg-[#F4EFE6]/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#2A5741]" />
            <div>
              <h3 className="font-display font-semibold text-base text-[#1E3E2F]">
                {SUMMARY_CONTENT.title}
              </h3>
              <p className="text-xs text-[#6E7A72]">
                {SUMMARY_CONTENT.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/Summary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs border border-[#E2DACB] bg-white rounded text-[#464F49] hover:border-[#2A5741] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Original PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#E2DACB] text-[#464F49]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Section Navigation Sidebar */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#E2DACB] bg-[#F9F6F0] p-3 overflow-y-auto shrink-0">
            <div className="text-[11px] uppercase tracking-widest font-semibold text-[#6E7A72] px-2 py-1.5">
              Knowledge Domains ({SUMMARY_CONTENT.sections.length})
            </div>
            <div className="space-y-1">
              {SUMMARY_CONTENT.sections.map((sec) => {
                const active = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-full text-left p-2 rounded text-xs transition-all flex items-start gap-2 ${
                      active
                        ? 'bg-[#2A5741] text-[#F9F6F0] font-medium shadow-sm'
                        : 'text-[#464F49] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{sec.number}.</span>
                    <span className="line-clamp-1">{sec.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reading Pane */}
          <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-6">
            <div className="space-y-2 border-b border-[#E2DACB] pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A14C29]">
                Section {currentSec.number}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3E2F]">
                {currentSec.title}
              </h2>
            </div>

            <div className="space-y-4 text-[#191D1A] font-serif leading-relaxed text-sm sm:text-base">
              {currentSec.paragraphs.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Next Section Button */}
            <div className="pt-6 border-t border-[#E2DACB] flex justify-between items-center text-xs text-[#6E7A72]">
              <span>Curated from Summary.pdf archive</span>
              {currentSec.number < SUMMARY_CONTENT.sections.length && (
                <button
                  onClick={() => setActiveSectionId(`sec-${currentSec.number + 1}`)}
                  className="flex items-center gap-1 text-[#2A5741] font-semibold hover:underline"
                >
                  <span>Next: Section {currentSec.number + 1}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
