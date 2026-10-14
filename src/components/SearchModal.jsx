import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';
import { PLANTS_DATA } from '../data/plants.js';
import { FORMULATIONS_DATA } from '../data/formulations.js';
import { PRACTICES_DATA } from '../data/practices.js';
import { PLANT_HEALTH_DATA } from '../data/plant_health.js';
import { GLOSSARY_DATA } from '../data/glossary.js';
import { TEXTS_DATA } from '../data/texts.js';

export default function SearchModal({ isOpen, onClose, onSelectEntity }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches = [];

    // Plants
    PLANTS_DATA.forEach(p => {
      const match = 
        p.name.toLowerCase().includes(q) ||
        p.botanicalName.toLowerCase().includes(q) ||
        p.transliteration.toLowerCase().includes(q) ||
        p.sanskritName.includes(q) ||
        p.regionalNames.some(r => r.toLowerCase().includes(q)) ||
        p.summary.toLowerCase().includes(q);
      if (match) {
        matches.push({
          type: 'Plant',
          title: p.name,
          subtitle: `${p.transliteration} (${p.botanicalName})`,
          detail: p.summary,
          entityId: p.id,
          view: 'plant-detail'
        });
      }
    });

    // Formulations
    FORMULATIONS_DATA.forEach(f => {
      const match = 
        f.name.toLowerCase().includes(q) ||
        f.transliteration.toLowerCase().includes(q) ||
        f.purpose.toLowerCase().includes(q) ||
        f.ingredients.some(i => i.item.toLowerCase().includes(q));
      if (match) {
        matches.push({
          type: 'Formulation',
          title: f.name,
          subtitle: f.transliteration,
          detail: f.purpose,
          entityId: f.id,
          view: 'formulations'
        });
      }
    });

    // Practices
    PRACTICES_DATA.forEach(pr => {
      const match = 
        pr.title.toLowerCase().includes(q) ||
        pr.transliteration.toLowerCase().includes(q) ||
        pr.summary.toLowerCase().includes(q);
      if (match) {
        matches.push({
          type: 'Practice',
          title: pr.title,
          subtitle: pr.transliteration,
          detail: pr.summary,
          entityId: pr.id,
          view: 'practices'
        });
      }
    });

    // Plant Health
    PLANT_HEALTH_DATA.forEach(h => {
      const match = 
        h.name.toLowerCase().includes(q) ||
        (h.symptom && h.symptom.toLowerCase().includes(q)) ||
        (h.causes && h.causes.toLowerCase().includes(q));
      if (match) {
        matches.push({
          type: 'Plant Health',
          title: h.name,
          subtitle: h.transliteration,
          detail: h.symptom || h.causes,
          entityId: h.id,
          view: 'health'
        });
      }
    });

    // Glossary Terms
    GLOSSARY_DATA.forEach(g => {
      const match = 
        g.term.toLowerCase().includes(q) ||
        g.transliteration.toLowerCase().includes(q) ||
        g.meaning.toLowerCase().includes(q);
      if (match) {
        matches.push({
          type: 'Glossary Term',
          title: g.term,
          subtitle: `${g.devanagari} (${g.transliteration})`,
          detail: g.meaning,
          entityId: g.term,
          view: 'glossary'
        });
      }
    });

    // Texts
    TEXTS_DATA.forEach(t => {
      const match = 
        t.title.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q) ||
        t.scope.toLowerCase().includes(q);
      if (match) {
        matches.push({
          type: 'Source Text',
          title: t.title,
          subtitle: t.author,
          detail: t.scope,
          entityId: t.id,
          view: 'texts'
        });
      }
    });

    return matches;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FDFBF7] border border-[#E2DACB] rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden my-auto">
        
        {/* Search Header */}
        <div className="p-4 border-b border-[#E2DACB] flex items-center gap-3 bg-[#F4EFE6]/70">
          <Search className="w-5 h-5 text-[#2A5741]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across plants, Sanskrit names, formulations, symptoms, practices, or verses..."
            className="w-full bg-transparent border-none text-base text-[#191D1A] placeholder-[#6E7A72] focus:outline-none font-serif"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#6E7A72] hover:text-[#191D1A]">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2 py-1 text-xs border border-[#E2DACB] rounded bg-white text-[#464F49] hover:bg-[#E2DACB]"
          >
            ESC
          </button>
        </div>

        {/* Search Content */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          
          {query.trim() === '' && (
            <div className="py-8 text-center space-y-4">
              <div className="text-3xl text-[#2A5741]">🌿</div>
              <h3 className="font-serif text-lg text-[#1E3E2F]">Search the Digital Knowledge Archive</h3>
              <p className="text-xs text-[#6E7A72] max-w-md mx-auto leading-relaxed">
                Discover botanical lore, classical recipes, soil preparation, and astrometeorological phenology recorded in the three Vrikshayurveda treatises.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-[11px] text-[#6E7A72]">Suggested queries:</span>
                {['Neem', 'Kunapajala', 'Sesame green manure', '20 cubits', 'Paandupathra', 'Tamarind', 'Nalpamaram', 'Navara rice'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-2.5 py-1 text-xs rounded bg-[#F4EFE6] border border-[#E2DACB] text-[#1E3E2F] hover:border-[#2A5741] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() !== '' && results.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6E7A72] px-2 py-1">
                Found {results.length} archival match{results.length > 1 ? 'es' : ''}
              </div>
              {results.map((res, i) => (
                <div
                  key={i}
                  onClick={() => {
                    onSelectEntity(res.view, res.entityId);
                    onClose();
                  }}
                  className="p-3.5 rounded border border-[#E2DACB] bg-white hover:border-[#2A5741] hover:bg-[#F9F6F0] cursor-pointer transition-all flex items-start justify-between group"
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-[#2A5741]/10 text-[#2A5741]">
                        {res.type}
                      </span>
                      <h4 className="font-serif font-semibold text-base text-[#1E3E2F] group-hover:text-[#2A5741]">
                        {res.title}
                      </h4>
                    </div>
                    <div className="text-xs font-serif italic text-[#A14C29]">
                      {res.subtitle}
                    </div>
                    <p className="text-xs text-[#464F49] line-clamp-2 leading-relaxed">
                      {res.detail}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6E7A72] group-hover:text-[#2A5741] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {query.trim() !== '' && results.length === 0 && (
            <div className="py-12 px-6 text-center space-y-4">
              <div className="text-2xl text-[#A14C29]">📜</div>
              <h3 className="font-serif text-lg text-[#1E3E2F]">
                This term isn&apos;t currently documented in this collection.
              </h3>
              <p className="text-xs text-[#6E7A72] max-w-md mx-auto leading-relaxed">
                The website represents a curated corpus strictly grounded in the 3 supplied classical texts (Varahamihira, Upavana-Vinoda, and Dr. P.V. Ouseph), rather than every plant or concept in existence.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    onSelectEntity('plants');
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded bg-[#2A5741] text-[#F9F6F0] hover:bg-[#1E3E2F] transition-colors"
                >
                  Browse Plant Explorer
                </button>
                <button
                  onClick={() => {
                    onSelectEntity('texts');
                    onClose();
                  }}
                  className="px-4 py-2 text-xs font-medium rounded border border-[#E2DACB] bg-white text-[#464F49] hover:bg-[#F4EFE6] transition-colors"
                >
                  View Source Texts
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
