import React, { useState } from 'react';
import { Layers, Sprout, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PRACTICES_DATA } from '../data/practices.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function PracticesView({ researchMode }) {
  const [selectedPracticeId, setSelectedPracticeId] = useState(PRACTICES_DATA[0].id);

  const activePractice = PRACTICES_DATA.find(p => p.id === selectedPracticeId) || PRACTICES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Cultivation & Silviculture
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Traditional Practices & Edaphology
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Step-by-step traditional procedures recorded across the classical texts for soil conditioning, 
          geometric spacing metrics, seasonal vegetative grafting, and thermal pit sterilization.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Practice Selector Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block px-2">
            Procedures & Protocols ({PRACTICES_DATA.length})
          </span>
          {PRACTICES_DATA.map((p) => {
            const active = selectedPracticeId === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPracticeId(p.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all space-y-1 ${
                  active
                    ? 'bg-[#2A5741] text-[#F9F6F0] border-[#2A5741] shadow-md'
                    : 'bg-white border-[#E2DACB] text-[#191D1A] hover:border-[#2A5741]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${active ? 'text-[#D5C4A1]' : 'text-[#A14C29]'}`}>
                    {p.category}
                  </span>
                  {active && <CheckCircle2 className="w-3.5 h-3.5 text-[#D5C4A1]" />}
                </div>
                <h4 className="font-serif font-bold text-sm leading-snug">
                  {p.title}
                </h4>
                <div className={`text-xs font-serif italic ${active ? 'text-[#B8D3C4]' : 'text-[#6E7A72]'}`}>
                  {p.transliteration}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Procedure Display */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-8 shadow-sm">
          
          <div className="space-y-2 border-b border-[#E2DACB] pb-4">
            <span className="text-[10px] uppercase font-bold text-[#A14C29] tracking-wider">
              {activePractice.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3E2F]">
              {activePractice.title}
            </h2>
            <div className="text-sm font-serif italic text-[#6E7A72]">
              {activePractice.transliteration} &bull; <span className="devanagari text-base">{activePractice.sanskritName}</span>
            </div>
          </div>

          {/* Summary & Rationale */}
          <div className="space-y-3">
            <p className="font-serif text-base text-[#191D1A] leading-relaxed">
              {activePractice.summary}
            </p>
            <div className="p-4 rounded bg-[#F4EFE6] border border-[#E2DACB] text-xs text-[#1E3E2F] space-y-1">
              <strong className="text-[#A14C29] uppercase tracking-wider text-[10px] block">
                Traditional Rationale:
              </strong>
              <p className="font-serif leading-relaxed">{activePractice.rationale}</p>
            </div>
          </div>

          {/* Specific Standards (e.g. Spacing) */}
          {activePractice.standards && (
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                The Cubit-Based Hierarchy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activePractice.standards.map((s, idx) => (
                  <div key={idx} className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#2A5741] block">{s.level}</span>
                    <div className="font-serif font-bold text-base text-[#1E3E2F]">{s.distance}</div>
                    <div className="text-xs font-mono text-[#A14C29]">{s.metric}</div>
                    <p className="text-xs text-[#6E7A72] leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seasonal Grafting Schedule (if present) */}
          {activePractice.schedule && (
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                Seasonal Grafting Calendar
              </h3>
              <div className="space-y-3">
                {activePractice.schedule.map((item, idx) => (
                  <div key={idx} className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <strong className="font-serif text-sm text-[#1E3E2F]">{item.season}</strong>
                      <span className="devanagari text-xs text-[#A14C29]">{item.sanskrit}</span>
                    </div>
                    <div className="text-xs text-[#2A5741] font-medium font-serif italic">
                      Twig Morphology: {item.twigType}
                    </div>
                    <p className="text-xs text-[#6E7A72] leading-relaxed pt-1">
                      {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
              {activePractice.clonalMedication && (
                <div className="p-4 rounded bg-[#F4EFE6] border border-[#E2DACB] text-xs space-y-1 text-[#1E3E2F]">
                  <strong className="text-[#A14C29] block uppercase text-[10px]">Pre-Graft Clonal Medication:</strong>
                  <p className="font-serif leading-relaxed">{activePractice.clonalMedication}</p>
                </div>
              )}
            </div>
          )}

          {/* Sequential Action Steps */}
          {activePractice.steps && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                Step-by-Step Traditional Instructions
              </h3>
              <div className="space-y-3">
                {activePractice.steps.map((st) => (
                  <div key={st.stepNumber} className="flex items-start gap-4 p-3.5 rounded border border-[#E2DACB]/70 bg-[#FDFBF7]">
                    <span className="w-7 h-7 rounded-full bg-[#2A5741] text-[#F9F6F0] flex items-center justify-center text-xs font-bold shrink-0">
                      {st.stepNumber}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-serif font-bold text-sm text-[#1E3E2F]">{st.title}</h4>
                      <p className="text-xs text-[#464F49] leading-relaxed">{st.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scientific Alignment */}
          {activePractice.scientificAlignment && (
            <div className="p-4 rounded border border-[#B8D3C4] bg-[#F0F5F2] text-xs text-[#1E3E2F] space-y-1">
              <strong className="text-[#2A5741] block uppercase text-[10px]">Modern Botanical Alignment:</strong>
              <p className="font-serif leading-relaxed">{activePractice.scientificAlignment}</p>
            </div>
          )}

          {/* Provenance Card */}
          <ProvenanceCard sources={activePractice.sources} researchMode={researchMode} />

        </div>

      </div>

    </div>
  );
}
