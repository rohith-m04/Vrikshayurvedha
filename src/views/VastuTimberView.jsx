import React, { useState } from 'react';
import { Home as HomeIcon, Compass, TreePine, Sparkles, AlertTriangle } from 'lucide-react';
import { VASTU_TIMBER_DATA } from '../data/vastu_timber.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function VastuTimberView({ researchMode }) {
  const [selectedQuadrant, setSelectedQuadrant] = useState('South (Dakṣiṇa)');

  const currentQuad = VASTU_TIMBER_DATA.directionalHomesteadLayout.quadrants.find(
    q => q.direction === selectedQuadrant
  ) || VASTU_TIMBER_DATA.directionalHomesteadLayout.quadrants[1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Structural Ethnobotany & Architecture
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Trees, Living Spaces & Timber Physics
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Traditional homestead planning, directional microclimate shields, silvicultural timber density classifications, 
          and the sacred ethnobotany of dental twigs (Dantakashta).
        </p>
      </div>

      {/* 1. DIRECTIONAL HOMESTEAD COMPASS */}
      <section className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-6 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A14C29]">
            <Compass className="w-4 h-4" />
            <span>Vastu Directional Planting Layout</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1E3E2F]">
            {VASTU_TIMBER_DATA.directionalHomesteadLayout.title}
          </h2>
          <p className="text-xs text-[#6E7A72] font-serif">
            {VASTU_TIMBER_DATA.directionalHomesteadLayout.overview}
          </p>
        </div>

        {/* Interactive Directional Quadrants */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {VASTU_TIMBER_DATA.directionalHomesteadLayout.quadrants.map((quad) => (
            <button
              key={quad.direction}
              onClick={() => setSelectedQuadrant(quad.direction)}
              className={`p-3.5 rounded border text-left transition-all ${
                selectedQuadrant === quad.direction
                  ? 'bg-[#2A5741] text-[#F9F6F0] border-[#2A5741] shadow'
                  : 'bg-[#FDFBF7] border-[#E2DACB] text-[#1E3E2F] hover:border-[#2A5741]'
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Quadrant</div>
              <div className="font-serif font-bold text-sm sm:text-base">{quad.direction.split(' ')[0]}</div>
              <div className="text-[11px] opacity-90 truncate mt-1">{quad.mandatedSpecies.join(', ')}</div>
            </button>
          ))}
        </div>

        {/* Selected Quadrant Detail Banner */}
        <div className="p-5 rounded-lg border-2 border-[#2A5741]/30 bg-[#FDFBF7] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2DACB] pb-2">
            <h3 className="font-serif text-lg font-bold text-[#1E3E2F]">
              {currentQuad.direction}
            </h3>
            <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold rounded bg-[#2A5741]/10 text-[#2A5741]">
              Mandated Microclimatic Zone
            </span>
          </div>
          
          <div className="space-y-2">
            <strong className="text-xs text-[#1E3E2F] uppercase tracking-wider block">Mandated Species:</strong>
            <div className="flex flex-wrap gap-2">
              {currentQuad.mandatedSpecies.map((s, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-[#E2DACB] rounded text-xs text-[#1E3E2F] font-serif font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#464F49] font-serif leading-relaxed pt-2">
            <strong className="text-[#A14C29]">Ecological & Solar Rationale:</strong> {currentQuad.microclimaticFunction}
          </p>
        </div>

        {/* The Nalpamaram Callout */}
        <div className="p-5 rounded-lg border border-[#E2DACB] bg-[#F4EFE6] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2A5741]">
            <Sparkles className="w-4 h-4" />
            <span>{VASTU_TIMBER_DATA.directionalHomesteadLayout.theNalpamaram.title}</span>
          </div>
          <p className="text-xs text-[#464F49] font-serif leading-relaxed">
            {VASTU_TIMBER_DATA.directionalHomesteadLayout.theNalpamaram.ecologicalSignificance}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {VASTU_TIMBER_DATA.directionalHomesteadLayout.theNalpamaram.species.map((nalp, idx) => (
              <div key={idx} className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                <strong className="font-serif text-sm text-[#1E3E2F] block">{nalp.name}</strong>
                <span className="text-[10px] text-[#A14C29] italic block">{nalp.botanical}</span>
                <p className="text-[11px] text-[#6E7A72] leading-tight pt-1">{nalp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TIMBER DENSITY CLASSIFICATIONS */}
      <section className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
            Silvicultural Physics
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1E3E2F]">
            Structural Timber Classifications
          </h2>
          <p className="text-xs text-[#6E7A72] font-serif">
            Strategic categorization of wood density, grain resilience, and spiritual suitability for domestic carpentry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VASTU_TIMBER_DATA.timberClassifications.map((tc, idx) => (
            <div key={idx} className="p-5 rounded-lg border border-[#E2DACB] bg-[#FDFBF7] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-[#1E3E2F]">{tc.class}</h3>
                  <span className="devanagari text-xs text-[#A14C29] font-medium">{tc.sanskrit}</span>
                </div>
                <p className="text-xs text-[#464F49] leading-relaxed">{tc.description}</p>
                <div className="text-xs text-[#2A5741] pt-1">
                  <strong className="text-[#1E3E2F]">Exemplars:</strong> {tc.exemplars.join(', ')}
                </div>
                <div className="text-xs text-[#6E7A72]">
                  <strong className="text-[#1E3E2F]">Structural Uses:</strong> {tc.suitability}
                </div>
              </div>

              {tc.theTamarindParadox && (
                <div className="mt-3 p-3 rounded bg-[#F4EFE6] border border-[#E2DACB] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A14C29] flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{tc.theTamarindParadox.title}</span>
                  </span>
                  <p className="text-[11px] text-[#1E3E2F] font-serif leading-relaxed">
                    {tc.theTamarindParadox.explanation}
                  </p>
                </div>
              )}

              {tc.prohibitions && (
                <div className="mt-2 text-[11px] text-[#A14C29] font-serif italic">
                  <strong>Silvicultural Taboos:</strong> {tc.prohibitions}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. DANTAKASHTA DENTAL TWIGS */}
      <section className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
            Daily Hygiene & Ethnobotany
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1E3E2F]">
            {VASTU_TIMBER_DATA.dantakashtaScience.title}
          </h2>
          <p className="text-xs text-[#6E7A72] font-serif">
            {VASTU_TIMBER_DATA.dantakashtaScience.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {VASTU_TIMBER_DATA.dantakashtaScience.hierarchy.map((d, idx) => (
            <div key={idx} className="p-4 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
              <strong className="font-serif text-sm text-[#1E3E2F] block">{d.tree}</strong>
              <div className="p-2 rounded bg-[#2A5741]/10 text-[#2A5741] font-semibold text-xs text-center">
                {d.spiritualMerit}
              </div>
              <p className="text-xs text-[#6E7A72] leading-relaxed pt-1">{d.context}</p>
            </div>
          ))}
        </div>

        <ProvenanceCard sources={VASTU_TIMBER_DATA.sources} researchMode={researchMode} />
      </section>

    </div>
  );
}
