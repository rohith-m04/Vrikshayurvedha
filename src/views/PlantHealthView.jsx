import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, ArrowRight, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import { PLANT_HEALTH_DATA } from '../data/plant_health.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function PlantHealthView({ researchMode }) {
  const [selectedConditionId, setSelectedConditionId] = useState(PLANT_HEALTH_DATA[0].id);

  const activeCondition = PLANT_HEALTH_DATA.find(c => c.id === selectedConditionId) || PLANT_HEALTH_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Phytopathology & Therapeutics
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Plant Health & Tree Medicine
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Diagnostics and treatments organized around the classical pathway: 
          <strong> Symptom &rarr; Cause &rarr; Treatment &rarr; Ingredients &rarr; Source</strong>. 
          Grounded strictly in what the texts record, distinguishing ancient diagnostic frameworks from modern commentary.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Conditions Selector */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block px-2">
            Documented Diagnostic Pathologies ({PLANT_HEALTH_DATA.length})
          </span>
          {PLANT_HEALTH_DATA.map((item) => {
            const active = selectedConditionId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedConditionId(item.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all space-y-1 ${
                  active
                    ? 'bg-[#2A5741] text-[#F9F6F0] border-[#2A5741] shadow-md'
                    : 'bg-white border-[#E2DACB] text-[#191D1A] hover:border-[#2A5741]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${active ? 'text-[#D5C4A1]' : 'text-[#A14C29]'}`}>
                    Therapeutic Protocol
                  </span>
                  <Activity className="w-3.5 h-3.5 text-[#D5C4A1]" />
                </div>
                <h4 className="font-serif font-bold text-sm leading-snug">{item.name}</h4>
                <div className={`text-xs font-serif italic ${active ? 'text-[#B8D3C4]' : 'text-[#6E7A72]'}`}>
                  {item.transliteration}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Pathology & Treatment */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-8 shadow-sm">
          
          <div className="space-y-2 border-b border-[#E2DACB] pb-4">
            <span className="text-[10px] uppercase font-bold text-[#A14C29] tracking-wider">
              Classical Diagnostic Record
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3E2F]">
              {activeCondition.name}
            </h2>
            <div className="text-sm font-serif italic text-[#6E7A72]">
              {activeCondition.transliteration} &bull; <span className="devanagari text-base">{activeCondition.sanskritName}</span>
            </div>
          </div>

          {/* Overview or Diagnosis Path */}
          {activeCondition.diagnosisPath && (
            <div className="p-4 rounded bg-[#F4EFE6] border border-[#E2DACB] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#A14C29] block">
                Archival Diagnostic Sequence
              </span>
              <p className="font-serif text-xs sm:text-sm text-[#1E3E2F] leading-relaxed">
                {activeCondition.diagnosisPath}
              </p>
            </div>
          )}

          {activeCondition.summary && (
            <p className="font-serif text-base text-[#191D1A] leading-relaxed">
              {activeCondition.summary}
            </p>
          )}

          {/* Tridosha Breakdown (if present) */}
          {activeCondition.doshaManifestations && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                The Botanical Tridosha Framework
              </h3>
              <div className="space-y-3">
                {activeCondition.doshaManifestations.map((d, i) => (
                  <div key={i} className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="font-serif font-bold text-sm text-[#1E3E2F]">{d.dosha}</strong>
                      <span className="text-[10px] font-semibold text-[#A14C29] uppercase">Dosha Imbalance</span>
                    </div>
                    <div className="text-xs text-[#464F49]">
                      <strong className="text-[#1E3E2F]">Observed Symptoms:</strong> {d.symptoms}
                    </div>
                    <div className="text-xs text-[#2A5741] pt-1">
                      <strong className="text-[#1E3E2F]">Classical Intervention:</strong> {d.treatment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Symptoms & Environmental Causes */}
          {activeCondition.symptom && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#A14C29] block">Observed Symptoms</span>
                <p className="text-xs text-[#464F49] leading-relaxed">{activeCondition.symptom}</p>
              </div>
              <div className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#2A5741] block">Described Causes</span>
                <p className="text-xs text-[#464F49] leading-relaxed">{activeCondition.causes}</p>
              </div>
            </div>
          )}

          {/* Step-by-Step Surgical & Herbal Protocol */}
          {activeCondition.treatmentSteps && (
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                Therapeutic Protocol
              </h3>
              <div className="space-y-3">
                {activeCondition.treatmentSteps.map((ts) => (
                  <div key={ts.step} className="flex items-start gap-3 p-3.5 rounded border border-[#E2DACB]/80 bg-[#FDFBF7]">
                    <span className="w-6 h-6 rounded-full bg-[#2A5741] text-[#F9F6F0] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {ts.step}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-serif font-bold text-sm text-[#1E3E2F]">{ts.title}</h4>
                      <p className="text-xs text-[#464F49] leading-relaxed">{ts.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients Used */}
          {activeCondition.ingredientsUsed && (
            <div className="p-4 rounded border border-[#E2DACB] bg-[#F4EFE6] space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#1E3E2F] tracking-wider block">
                Required Botanical & Mineral Ingredients
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCondition.ingredientsUsed.map((ing, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs rounded bg-white border border-[#E2DACB] text-[#1E3E2F] font-serif">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Provenance Card */}
          <ProvenanceCard sources={activeCondition.sources} researchMode={researchMode} />

        </div>

      </div>

    </div>
  );
}
