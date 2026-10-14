import React, { useRef } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Compass, 
  Sprout, 
  FlaskConical, 
  Stethoscope, 
  Home as HomeIcon, 
  SunMedium, 
  Layers, 
  ShieldCheck, 
  Play, 
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { PLANTS_DATA } from '../data/plants.js';
import { COLLECTIONS_DATA } from '../data/collections.js';
import { TEXTS_DATA } from '../data/texts.js';

export default function HomeView({ 
  setCurrentView, 
  setSelectedPlantId, 
  onOpenSummary, 
  onOpenMap, 
  onOpenInfographic 
}) {
  const discoveryRef = useRef(null);

  const scrollToDiscovery = () => {
    discoveryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredPlant = PLANTS_DATA.find(p => p.id === 'neem') || PLANTS_DATA[0];

  const discoveryPortals = [
    {
      id: 'plants',
      title: 'Plants & Flora',
      tagline: 'Trees, creepers, crops & recorded botanical lore',
      icon: <Sprout className="w-5 h-5 text-[#2A5741]" />,
      action: () => setCurrentView('plants'),
      stat: '20 classical monographs'
    },
    {
      id: 'practices',
      title: 'Cultivation & Edaphology',
      tagline: 'Soil conditioning, 20-cubit spacing & seasonal grafting',
      icon: <Layers className="w-5 h-5 text-[#A14C29]" />,
      action: () => setCurrentView('practices'),
      stat: '5 step-by-step procedures'
    },
    {
      id: 'formulations',
      title: 'Formulations & Preparations',
      tagline: 'Kunapajala bio-manure, seed priming & traditional units',
      icon: <FlaskConical className="w-5 h-5 text-[#2A5741]" />,
      action: () => setCurrentView('formulations'),
      stat: '7 traditional recipes'
    },
    {
      id: 'health',
      title: 'Plant Health & Therapeutics',
      tagline: 'Tridosha pathology, surgical excisions & Vidanga paste',
      icon: <Stethoscope className="w-5 h-5 text-[#A14C29]" />,
      action: () => setCurrentView('health'),
      stat: 'Symptom-to-cure matrix'
    },
    {
      id: 'vastu',
      title: 'Trees & Living Spaces',
      tagline: 'Homestead Vastu, Nalpamaram, timber physics & dental sticks',
      icon: <HomeIcon className="w-5 h-5 text-[#2A5741]" />,
      action: () => setCurrentView('vastu'),
      stat: 'Directional compass & timber rules'
    },
    {
      id: 'seasons',
      title: 'Seasons & Natural Signs',
      tagline: '10-month lead-time floral indicators & lunar Nakshatras',
      icon: <SunMedium className="w-5 h-5 text-[#A14C29]" />,
      action: () => setCurrentView('seasons'),
      stat: 'Phenological forecasting calendar'
    }
  ];

  return (
    <div className="space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 manuscript-border-b border-[#E2DACB] bg-gradient-to-b from-[#FDFBF7] to-[#F9F6F0]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A5741]/30 bg-[#2A5741]/5 text-[#2A5741] text-xs font-serif italic tracking-wide">
            <span>🌿</span>
            <span>A Classical Manuscript Archive &bull; Botanical Field Guide &bull; Modern Research Library</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[0.12em] text-[#1E3E2F] uppercase">
              VRIKSHAYURVEDA
            </h1>
            <div className="text-sm sm:text-base tracking-[0.25em] uppercase text-[#A14C29] font-medium font-sans">
              A Digital Knowledge Archive
            </div>
          </div>

          <p className="font-serif text-lg sm:text-xl text-[#2C332E] leading-relaxed max-w-2xl mx-auto">
            Bringing together the ancient science of plant life, botanical edaphology, tree therapeutics, 
            formulations, directional homestead arboriculture, and astrometeorological signs synthesized 
            from three foundational classical treatises.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToDiscovery}
              className="px-6 py-3 rounded text-sm font-semibold tracking-wide bg-[#2A5741] text-[#F9F6F0] hover:bg-[#1E3E2F] shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Explore the Knowledge</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentView('texts')}
              className="px-6 py-3 rounded text-sm font-medium tracking-wide border border-[#E2DACB] bg-white text-[#1E3E2F] hover:bg-[#F4EFE6] hover:border-[#2A5741] transition-all"
            >
              Explore the Texts
            </button>
          </div>

          {/* Quick Archival Badges */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-[#6E7A72]">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#2A5741]" />
              <span>3 Classical Treatises</span>
            </span>
            <span className="text-[#E2DACB]">&bull;</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2A5741]" />
              <span>Zero Invented Claims</span>
            </span>
            <span className="text-[#E2DACB]">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-[#A14C29]" />
              <span>Strict Textual Provenance</span>
            </span>
          </div>

        </div>
      </section>

      {/* 2. DISCOVERY SECTION (Section 6: Explore the Knowledge) */}
      <section ref={discoveryRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
            Archival Portals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
            Explore the Knowledge
          </h2>
          <p className="text-sm text-[#6E7A72] font-serif leading-relaxed">
            Six disciplined entry points into the archive. Discover relationships between soil, seed, 
            healing pastes, and microclimates without needing prior botanical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoveryPortals.map((portal) => (
            <div
              key={portal.id}
              onClick={portal.action}
              className="p-6 rounded-lg border border-[#E2DACB] bg-white hover:border-[#2A5741] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded border border-[#E2DACB] bg-[#F9F6F0] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {portal.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1E3E2F] group-hover:text-[#2A5741] transition-colors">
                  {portal.title}
                </h3>
                <p className="text-xs text-[#464F49] font-serif leading-relaxed">
                  {portal.tagline}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E2DACB]/60 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-[#6E7A72]">{portal.stat}</span>
                <span className="text-[#2A5741] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Enter portal &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CURATED DISCOVERY COLLECTIONS (Section 24) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2DACB] pb-4 gap-2">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
              Thematic Pathways
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3E2F]">
              Curated Archival Collections
            </h2>
          </div>
          <p className="text-xs text-[#6E7A72] max-w-sm font-serif italic">
            Structured thematic sets generated directly from the classical records to aid spontaneous discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS_DATA.map((col) => (
            <div
              key={col.id}
              className="p-5 rounded border border-[#E2DACB] bg-[#FDFBF7] space-y-3 hover:border-[#2A5741] transition-colors"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A14C29]">
                  {col.subtitle}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">{col.title}</h3>
              </div>
              <p className="text-xs text-[#464F49] leading-relaxed">
                {col.description}
              </p>
              <div className="p-2.5 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[11px] text-[#1E3E2F] font-serif italic">
                &ldquo;{col.keyTheme}&rdquo;
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentView('plants')}
                  className="text-xs text-[#2A5741] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Explore associated records</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED BOTANICAL MONOGRAPH SPOTLIGHT (Digital Field Guide Preview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 border-[#2A5741] bg-[#FDFBF7] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A5741]/5 rounded-bl-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#2A5741]/10 text-[#2A5741] text-xs font-semibold uppercase tracking-wider">
                <span>Featured Botanical Monograph</span>
              </div>
              
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
                  {featuredPlant.name}
                </h3>
                <div className="text-sm font-serif italic text-[#A14C29] mt-0.5">
                  {featuredPlant.transliteration} &bull; <span className="devanagari text-base">{featuredPlant.sanskritName}</span> &bull; <em>{featuredPlant.botanicalName}</em>
                </div>
              </div>

              <p className="font-serif text-sm sm:text-base text-[#2C332E] leading-relaxed">
                {featuredPlant.summary}
              </p>

              {/* Relationship Visualization Strip */}
              <div className="p-4 rounded border border-[#E2DACB] bg-white space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6E7A72]">
                  Recorded Textual Associations
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[#1E3E2F] font-medium">
                    Homestead & Parks
                  </span>
                  <span className="text-[#A14C29]">&rarr;</span>
                  <span className="px-2 py-1 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[#1E3E2F] font-medium">
                    Dental Twig for Victory
                  </span>
                  <span className="text-[#A14C29]">&rarr;</span>
                  <span className="px-2 py-1 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[#1E3E2F] font-medium">
                    10-Day Seed Priming
                  </span>
                  <span className="text-[#A14C29]">&rarr;</span>
                  <span className="px-2 py-1 rounded bg-[#2A5741]/10 text-[#2A5741] font-semibold">
                    Varahamihira & Sarngadhara
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => {
                    setSelectedPlantId(featuredPlant.id);
                    setCurrentView('plant-detail');
                  }}
                  className="px-5 py-2.5 rounded bg-[#2A5741] text-[#F9F6F0] text-xs font-semibold hover:bg-[#1E3E2F] transition-colors flex items-center gap-2"
                >
                  <span>Open Complete Botanical Monograph</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentView('plants')}
                  className="text-xs text-[#464F49] hover:text-[#1E3E2F] underline"
                >
                  Browse all 20 plants &rarr;
                </button>
              </div>

            </div>

            <div className="lg:col-span-4 p-6 rounded border border-[#E2DACB] bg-[#F4EFE6] space-y-4">
              <div className="text-center pb-2 border-b border-[#E2DACB]">
                <span className="text-4xl block mb-2">🌳</span>
                <span className="text-xs font-serif italic text-[#1E3E2F]">Azadirachta indica</span>
              </div>
              <div className="space-y-2 text-xs text-[#464F49]">
                <div><strong className="text-[#1E3E2F]">Family:</strong> Meliaceae</div>
                <div><strong className="text-[#1E3E2F]">Traditional Spacing:</strong> 20 Cubits (~30 ft / Utthama)</div>
                <div><strong className="text-[#1E3E2F]">Classical Merits:</strong> 3 trees = 3,000 yrs in realm of Sun</div>
                <div><strong className="text-[#1E3E2F]">Dantakashta:</strong> Shatru-Vijaya (Victory)</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE BOOKS & EMBEDDED VIDEO (Section 21: Placed near the end of homepage) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
            The Source Corpus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
            The Three Primary Treatises
          </h2>
          <p className="text-sm text-[#6E7A72] font-serif leading-relaxed">
            A visual and textual introduction to the preserved physical books from which every verse, 
            recipe, and classification in this digital archive was drawn.
          </p>
        </div>

        {/* 3 Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEXTS_DATA.map((book) => (
            <div 
              key={book.id}
              className="p-6 rounded border border-[#E2DACB] bg-white space-y-4 hover:border-[#2A5741] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded bg-[#F4EFE6] border border-[#E2DACB] text-[10px] font-bold text-[#A14C29] uppercase">
                  {book.year}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#1E3E2F]">
                  {book.title}
                </h3>
                <div className="text-xs text-[#6E7A72] font-medium">
                  {book.author}
                </div>
                <p className="text-xs text-[#464F49] font-serif leading-relaxed pt-2 line-clamp-3">
                  {book.scope}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DACB]/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[#6E7A72] text-[11px]">{book.pages} pages</span>
                <button
                  onClick={() => setCurrentView('texts')}
                  className="text-[#2A5741] font-semibold hover:underline"
                >
                  View Book Monograph &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Presentation Section (introduction.mp4) */}
        <div className="rounded-xl border border-[#E2DACB] bg-[#1E3E2F] text-[#F9F6F0] p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D5C4A1] uppercase">
              <Play className="w-4 h-4 fill-[#D5C4A1]" />
              <span>Archival Introduction Video</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              The Ancient Science of Plant Surgery & Arboriculture
            </h3>
            <p className="text-xs sm:text-sm text-[#B8D3C4] font-serif leading-relaxed">
              Examine the historical lineage, physical manuscripts, and traditional wisdom of Vrikshayurveda. 
              Controls provided below; no sound autoplay.
            </p>
          </div>

          {/* Clean HTML5 Video Player */}
          <div className="relative rounded-lg overflow-hidden border border-[#2A5741] bg-black shadow-2xl max-w-4xl mx-auto">
            <video
              controls
              preload="metadata"
              className="w-full h-auto aspect-video object-contain"
            >
              <source src="/assets/introduction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-center text-xs text-[#B8D3C4]/70 pt-2 font-serif italic">
            Physical source texts conserved and studied for the Vrikshayurveda Digital Knowledge Archive.
          </div>
        </div>

      </section>

    </div>
  );
}
