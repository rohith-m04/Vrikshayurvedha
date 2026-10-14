import React, { useState } from 'react';
import { FlaskConical, Clock, Scale, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { FORMULATIONS_DATA } from '../data/formulations.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function FormulationLibraryView({ researchMode }) {
  const [selectedFormulationId, setSelectedFormulationId] = useState(FORMULATIONS_DATA[0].id);

  const activeFormulation = FORMULATIONS_DATA.find(f => f.id === selectedFormulationId) || FORMULATIONS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Bio-Organic Chemistry
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Formulation Library
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Traditional preparations, fermented manures, seed priming formulas, and surgical plasters. 
          All traditional units of measurement are preserved in their original classical denominations.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block px-2">
            Archival Preparations ({FORMULATIONS_DATA.length})
          </span>
          {FORMULATIONS_DATA.map((form) => {
            const active = selectedFormulationId === form.id;
            return (
              <div
                key={form.id}
                onClick={() => setSelectedFormulationId(form.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all space-y-1 ${
                  active
                    ? 'bg-[#2A5741] text-[#F9F6F0] border-[#2A5741] shadow-md'
                    : 'bg-white border-[#E2DACB] text-[#191D1A] hover:border-[#2A5741]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${active ? 'text-[#D5C4A1]' : 'text-[#A14C29]'}`}>
                    {form.targetPlants.split(',')[0]}
                  </span>
                  <FlaskConical className="w-3.5 h-3.5 text-[#D5C4A1]" />
                </div>
                <h4 className="font-serif font-bold text-sm leading-snug">{form.name}</h4>
                <div className={`text-xs font-serif italic ${active ? 'text-[#B8D3C4]' : 'text-[#6E7A72]'}`}>
                  {form.transliteration}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Formulation Card */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-8 shadow-sm">
          
          <div className="space-y-2 border-b border-[#E2DACB] pb-4">
            <span className="text-[10px] uppercase font-bold text-[#A14C29] tracking-wider">
              Traditional Botanical Recipe
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3E2F]">
              {activeFormulation.name}
            </h2>
            <div className="text-sm font-serif italic text-[#6E7A72]">
              {activeFormulation.transliteration} &bull; <span className="devanagari text-base">{activeFormulation.sanskritName}</span>
            </div>
          </div>

          {/* Purpose & Target */}
          <div className="space-y-3">
            <div className="p-4 rounded bg-[#FDFBF7] border border-[#E2DACB] space-y-2">
              <strong className="text-[#2A5741] uppercase tracking-wider text-[10px] block">
                Primary Purpose:
              </strong>
              <p className="font-serif text-sm text-[#191D1A] leading-relaxed">
                {activeFormulation.purpose}
              </p>
              <div className="text-xs text-[#6E7A72] pt-1">
                <strong className="text-[#1E3E2F]">Target Plants / Condition:</strong> {activeFormulation.targetPlants}
              </div>
            </div>
          </div>

          {/* Ingredients & Traditional Measures */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                Ingredients & Original Measures
              </h3>
              <span className="text-[10px] uppercase font-bold text-[#A14C29]">
                Traditional Units Preserved
              </span>
            </div>

            <div className="divide-y divide-[#E2DACB] border border-[#E2DACB] rounded-lg overflow-hidden">
              {activeFormulation.ingredients.map((ing, i) => (
                <div key={i} className="p-3 bg-[#FDFBF7] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <div>
                    <strong className="text-[#1E3E2F] font-serif text-sm block">{ing.item}</strong>
                    <span className="text-[#6E7A72] text-[11px]">{ing.note}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#2A5741]/10 text-[#2A5741] font-mono text-xs font-semibold self-start sm:self-center">
                    {ing.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Traditional Unit Equivalents Note */}
            {activeFormulation.traditionalUnits && (
              <div className="p-3 bg-[#F4EFE6] rounded border border-[#E2DACB] space-y-1 text-xs text-[#6E7A72]">
                <strong className="text-[#1E3E2F] block text-[10px] uppercase font-bold">
                  Classical Volumetric & Metric References:
                </strong>
                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                  {Object.values(activeFormulation.traditionalUnits).map((v, idx) => (
                    <li key={idx}>{v}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Preparation & Application */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#2A5741]">
                <Clock className="w-4 h-4" />
                <span>Preparation & Duration</span>
              </div>
              <p className="text-xs text-[#464F49] leading-relaxed">
                {activeFormulation.preparation}
              </p>
              <div className="text-[11px] font-mono text-[#A14C29] pt-1">
                Duration: {activeFormulation.duration}
              </div>
            </div>

            <div className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#A14C29]">
                <Scale className="w-4 h-4" />
                <span>Method of Application</span>
              </div>
              <p className="text-xs text-[#464F49] leading-relaxed">
                {activeFormulation.application}
              </p>
            </div>
          </div>

          {/* Scientific Rationale */}
          {activeFormulation.scientificCommentary && (
            <div className="p-4 rounded border border-[#B8D3C4] bg-[#F0F5F2] text-xs text-[#1E3E2F] space-y-1">
              <strong className="text-[#2A5741] block uppercase text-[10px]">
                Modern Botanical Commentary:
              </strong>
              <p className="font-serif leading-relaxed">
                {activeFormulation.scientificCommentary}
              </p>
            </div>
          )}

          {/* Provenance Card */}
          <ProvenanceCard sources={activeFormulation.sources} researchMode={researchMode} />

        </div>

      </div>

    </div>
  );
}
