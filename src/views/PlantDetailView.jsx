import React from 'react';
import { ArrowLeft, BookOpen, Compass, ShieldCheck, Sprout, Share2, Layers, HeartPulse } from 'lucide-react';
import { PLANTS_DATA } from '../data/plants.js';
import ProvenanceCard from '../components/ProvenanceCard.jsx';

export default function PlantDetailView({ plantId, onBack, onSelectPlant, researchMode }) {
  const plant = PLANTS_DATA.find(p => p.id === plantId) || PLANTS_DATA[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Back Navigation */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-[#464F49] hover:text-[#1E3E2F] font-semibold tracking-wider uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Plant Directory</span>
        </button>
      </div>

      {/* Monograph Header */}
      <div className="border-b border-[#E2DACB] pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-[#2A5741]/10 text-[#2A5741]">
            Digital Botanical Monograph
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded border border-[#E2DACB] text-[#6E7A72]">
            {plant.plantType} &bull; {plant.family}
          </span>
        </div>

        <div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E3E2F]">
            {plant.name}
          </h1>
          <div className="text-base sm:text-lg text-[#A14C29] font-serif italic mt-1">
            {plant.transliteration} &bull; <span className="devanagari text-xl font-normal">{plant.sanskritName}</span>
          </div>
          <div className="text-sm font-serif italic text-[#464F49] mt-0.5">
            Botanical Binomial: <strong className="font-semibold">{plant.botanicalName}</strong>
          </div>
        </div>

        {/* Regional Names */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-[#6E7A72]">
          <span className="font-bold uppercase tracking-wider text-[#1E3E2F]">Vernacular Names:</span>
          {plant.regionalNames.map((rn, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-[#F4EFE6] border border-[#E2DACB]">
              {rn}
            </span>
          ))}
        </div>
      </div>

      {/* Monograph Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-[#1E3E2F] border-b border-[#E2DACB] pb-2">
              Botanical Overview & Identity
            </h2>
            <p className="font-serif text-base text-[#191D1A] leading-relaxed">
              {plant.summary}
            </p>
            <p className="text-xs text-[#464F49] leading-relaxed">
              <strong className="text-[#1E3E2F]">Morphological Characteristics:</strong> {plant.characteristics}
            </p>
            <p className="text-xs text-[#464F49] leading-relaxed">
              <strong className="text-[#1E3E2F]">Ecological Habitat:</strong> {plant.habitat}
            </p>
          </section>

          {/* Cultivation & Spacing */}
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-[#1E3E2F] border-b border-[#E2DACB] pb-2">
              Traditional Cultivation & Spacing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#A14C29]">Soil Conditioning</span>
                <p className="text-xs text-[#464F49]">{plant.cultivation.soil}</p>
              </div>
              <div className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#A14C29]">Spatial Standard</span>
                <p className="text-xs text-[#464F49]">{plant.cultivation.spacing}</p>
              </div>
              <div className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#A14C29]">Seed Priming</span>
                <p className="text-xs text-[#464F49]">{plant.cultivation.seedTreatment}</p>
              </div>
              <div className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#A14C29]">Irrigation Cadence</span>
                <p className="text-xs text-[#464F49]">{plant.cultivation.irrigation}</p>
              </div>
            </div>
          </section>

          {/* Uses & Applications */}
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-[#1E3E2F] border-b border-[#E2DACB] pb-2">
              Recorded Traditional Uses & Phytotherapy
            </h2>
            <ul className="space-y-2">
              {plant.uses.map((u, i) => (
                <li key={i} className="text-xs text-[#464F49] flex items-start gap-2">
                  <span className="text-[#2A5741] mt-0.5 font-bold">&bull;</span>
                  <span className="leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
            {plant.plantHealth && (
              <div className="p-3.5 rounded bg-[#F4EFE6] border border-[#E2DACB] text-xs text-[#1E3E2F] space-y-1">
                <strong className="text-[#2A5741] block uppercase tracking-wider text-[10px]">
                  Role in Tree Medicine:
                </strong>
                <p className="font-serif leading-relaxed">{plant.plantHealth}</p>
              </div>
            )}
          </section>

          {/* Research Notes (if present) */}
          {plant.researchNotes && (
            <section className="p-4 rounded border border-[#D5C4A1] bg-[#FDFBF7] space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#A14C29] tracking-wider block">
                Scholarly Commentary & Identification Note
              </span>
              <p className="text-xs text-[#464F49] font-serif leading-relaxed">
                {plant.researchNotes}
              </p>
            </section>
          )}

          {/* Provenance Card */}
          <ProvenanceCard sources={plant.sources} researchMode={researchMode} />

        </div>

        {/* Sidebar Context Column */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Vastu & Homestead Placement */}
          {plant.vastuHomestead && (
            <div className="p-5 rounded-lg border border-[#E2DACB] bg-white space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A14C29]">
                <Compass className="w-4 h-4" />
                <span>Vastu & Homestead Positioning</span>
              </div>
              <div className="space-y-2 text-xs text-[#464F49]">
                <div><strong className="text-[#1E3E2F]">Direction:</strong> {plant.vastuHomestead.direction}</div>
                <div><strong className="text-[#1E3E2F]">Placement:</strong> {plant.vastuHomestead.placement}</div>
                {plant.vastuHomestead.dentalTwig && (
                  <div className="pt-2 border-t border-[#E2DACB]/60 text-[#1E3E2F]">
                    <strong className="text-[#A14C29] block uppercase text-[10px]">Dantakashta (Dental Stick):</strong>
                    {plant.vastuHomestead.dentalTwig}
                  </div>
                )}
                {plant.vastuHomestead.timberNote && (
                  <div className="pt-2 border-t border-[#E2DACB]/60 text-[#1E3E2F]">
                    <strong className="text-[#A14C29] block uppercase text-[10px]">Timber Physics:</strong>
                    {plant.vastuHomestead.timberNote}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Astrometeorology */}
          {plant.astrometeorology && (
            <div className="p-5 rounded-lg border border-[#E2DACB] bg-white space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2A5741]">
                <Layers className="w-4 h-4" />
                <span>Astrometeorology & Phenology</span>
              </div>
              <div className="space-y-2 text-xs text-[#464F49]">
                <div><strong className="text-[#1E3E2F]">Nakshatra Alignment:</strong> {plant.astrometeorology.nakshatra}</div>
                <div><strong className="text-[#1E3E2F]">Bio-Indicator Signal:</strong> {plant.astrometeorology.bioIndicator}</div>
              </div>
            </div>
          )}

          {/* Related Formulations */}
          {plant.formulations && plant.formulations.length > 0 && (
            <div className="p-5 rounded-lg border border-[#E2DACB] bg-white space-y-3 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E7A72] block">
                Associated Formulations
              </span>
              <ul className="space-y-1.5 text-xs text-[#1E3E2F]">
                {plant.formulations.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#A14C29]">&bull;</span>
                    <span className="font-serif font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
