import React from 'react';
import { BookOpen, ShieldCheck, ExternalLink, Leaf } from 'lucide-react';

export default function Footer({ setCurrentView, onOpenMap, onOpenInfographic, onOpenSummary }) {
  return (
    <footer className="bg-[#142A20] text-[#DDE9E2] manuscript-border-t border-[#2A5741] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display text-lg tracking-[0.2em] font-semibold text-[#F9F6F0]">
                VRIKSHAYURVEDA
              </span>
            </div>
            <p className="text-sm text-[#B8D3C4]/90 font-serif leading-relaxed">
              A digital scholarly repository dedicated to preserving and exploring the classical arboricultural science, tree therapeutics, botanical architecture, and astrometeorological phenology of ancient India.
            </p>
            <div className="pt-2 text-xs text-[#B8D3C4]/70 space-y-1">
              <p>Curated strictly from the 3 primary source texts:</p>
              <ul className="list-disc list-inside space-y-0.5 pl-1">
                <li><em>Vrukshaayurveda of Varaahamihira</em> (Dr. N. Gopalakrishnan, IISH)</li>
                <li><em>Vṛkṣāyurveda (Upavana-Vinoda)</em> (Prof. S.K. Ramachandra Rao, Kalpatharu)</li>
                <li><em>Vrikshayurvedam</em> (Dr. P.V. Ouseph, SSUS Kalady)</li>
              </ul>
            </div>
          </div>

          {/* Quick Explore */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D5C4A1] font-semibold font-display">
              Knowledge Domains
            </h4>
            <ul className="space-y-2 text-xs text-[#B8D3C4]">
              <li><button onClick={() => setCurrentView('plants')} className="hover:text-white transition-colors">Botanical Monographs (Plants)</button></li>
              <li><button onClick={() => setCurrentView('practices')} className="hover:text-white transition-colors">Soil & Spacing (Practices)</button></li>
              <li><button onClick={() => setCurrentView('formulations')} className="hover:text-white transition-colors">Kunapajala & Seed Priming</button></li>
              <li><button onClick={() => setCurrentView('health')} className="hover:text-white transition-colors">Tridosha Phytopathology</button></li>
              <li><button onClick={() => setCurrentView('vastu')} className="hover:text-white transition-colors">Vastu & Timber Classifications</button></li>
              <li><button onClick={() => setCurrentView('seasons')} className="hover:text-white transition-colors">10-Month Weather Indicators</button></li>
              <li><button onClick={() => setCurrentView('glossary')} className="hover:text-white transition-colors">Scholarly Sanskrit Glossary</button></li>
            </ul>
          </div>

          {/* Archival Utilities & Provenance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D5C4A1] font-semibold font-display">
              Archival Provenance
            </h4>
            <p className="text-xs text-[#B8D3C4]/80 leading-relaxed">
              Every botanical entry, formulation ratio, and silvicultural standard in this archive preserves its direct classical attribution: Book &rarr; Chapter &rarr; Verse.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenSummary}
                className="px-2.5 py-1 text-xs border border-[#2A5741] bg-[#1E3E2F] text-[#DDE9E2] rounded hover:border-[#D5C4A1] transition-colors"
              >
                Read Summary Doc
              </button>
              <button
                onClick={onOpenMap}
                className="px-2.5 py-1 text-xs border border-[#2A5741] bg-[#1E3E2F] text-[#DDE9E2] rounded hover:border-[#D5C4A1] transition-colors"
              >
                Connection Map
              </button>
              <button
                onClick={onOpenInfographic}
                className="px-2.5 py-1 text-xs border border-[#2A5741] bg-[#1E3E2F] text-[#DDE9E2] rounded hover:border-[#D5C4A1] transition-colors"
              >
                View Infographic
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#2A5741]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8D3C4]/60">
          <div>
            Simple interface. Deep knowledge. Clear sources.
          </div>
          <div className="mt-2 sm:mt-0 font-serif italic">
            “Mrudvee bhooḥ sarva-vṛkṣāṇāṁ hitā” — Varahamihira (505 CE)
          </div>
        </div>
      </div>
    </footer>
  );
}
