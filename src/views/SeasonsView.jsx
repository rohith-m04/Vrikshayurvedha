import React from 'react';
import { SunMedium, Calendar, Sparkles, CloudRain, Clock } from 'lucide-react';
import { SEASONS_DATA } from '../data/seasons_nakshatras.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function SeasonsView({ researchMode }) {
  const { astrometeorologyBioIndicators, nakshatraPlantingSystem, sources } = SEASONS_DATA;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Astrometeorology & Phenology
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Seasons, Nakshatras & Floral Bio-Indicators
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Botanical phenology with 10-month weather forecasting lead times, lunar mansion arboriculture, 
          and traditional crop-synchronization calendars.
        </p>
      </div>

      {/* 1. 10-MONTH FLORAL INDICATORS */}
      <section className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-6 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A14C29]">
            <CloudRain className="w-4 h-4" />
            <span>Phenological Forecasting</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1E3E2F]">
            {astrometeorologyBioIndicators.title}
          </h2>
          <p className="text-xs text-[#6E7A72] font-serif leading-relaxed">
            {astrometeorologyBioIndicators.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {astrometeorologyBioIndicators.indicators.map((ind, i) => (
            <div key={i} className="p-5 rounded-lg border border-[#E2DACB] bg-[#FDFBF7] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">{ind.tree}</h3>
                  <span className="px-2 py-0.5 rounded bg-[#2A5741]/10 text-[#2A5741] font-mono text-[10px] font-semibold">
                    {ind.leadTime}
                  </span>
                </div>
                <div className="text-xs text-[#A14C29] font-medium font-serif italic">
                  Observed Floral Cue: &ldquo;{ind.floralSign}&rdquo;
                </div>
                <p className="text-xs text-[#464F49] leading-relaxed pt-1">
                  <strong className="text-[#1E3E2F]">Predictive Result:</strong> {ind.predictiveOutcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE 27 NAKSHATRAS ARBORICULTURE */}
      <section className="bg-white p-6 sm:p-8 rounded-lg border border-[#E2DACB] space-y-6 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2A5741]">
            <Calendar className="w-4 h-4" />
            <span>Lunar Mansion Timing</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1E3E2F]">
            {nakshatraPlantingSystem.title}
          </h2>
          <p className="text-xs text-[#6E7A72] font-serif leading-relaxed">
            {nakshatraPlantingSystem.overview}
          </p>
        </div>

        {/* Favourable Asterism Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nakshatraPlantingSystem.favourableNakshatras.map((grp, idx) => (
            <div key={idx} className="p-5 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#A14C29] tracking-wider block">
                {grp.category}
              </span>
              <div className="font-serif font-bold text-sm text-[#1E3E2F]">
                {grp.nakshatras.join(', ')}
              </div>
              <p className="text-xs text-[#6E7A72] leading-relaxed pt-2">
                <strong className="text-[#1E3E2F]">Recommended Work:</strong> {grp.recommendedWork}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Nakshatra Trees Grid */}
        <div className="space-y-3 pt-4 border-t border-[#E2DACB]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E3E2F] block">
            Sample Sacred Grove Nakshatra Trees
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {nakshatraPlantingSystem.sampleNakshatraTrees.map((st, i) => (
              <div key={i} className="p-3 rounded border border-[#E2DACB] bg-white text-xs space-y-1">
                <strong className="text-[#2A5741] font-semibold block">{st.nakshatra}</strong>
                <div className="font-serif font-bold text-[#1E3E2F]">{st.tree}</div>
                <p className="text-[10px] text-[#6E7A72] leading-tight">{st.note}</p>
              </div>
            ))}
          </div>
        </div>

        <ProvenanceCard sources={sources} researchMode={researchMode} />
      </section>

    </div>
  );
}
