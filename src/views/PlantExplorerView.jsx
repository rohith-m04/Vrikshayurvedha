import React, { useState, useMemo } from 'react';
import { Search, Filter, Sprout, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { PLANTS_DATA } from '../data/plants.js';

export default function PlantExplorerView({ onSelectPlant, researchMode }) {
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const letters = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const categories = [
    'ALL',
    'Medicinal & Homestead',
    'Aesthetic & Bio-Indicator',
    'Nalpamaram & Keystone Sacred',
    'Fruit & Interior Timber',
    'Edaphology & Green Manure',
    'Hydrology & Low-Lying',
    'Seed Technology & Mucilage',
    'Dantakashta (Dental Twig)'
  ];

  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter(p => {
      const matchLetter = selectedLetter === 'ALL' || p.name.toUpperCase().startsWith(selectedLetter);
      const matchCategory = selectedCategory === 'ALL' || p.category.includes(selectedCategory);
      const matchSearch = 
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.sanskritName.includes(searchTerm);
      return matchLetter && matchCategory && matchSearch;
    });
  }, [selectedLetter, selectedCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6">
      
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#E2DACB] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#A14C29]">
          Botanical Field Directory
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3E2F]">
          Plant Explorer
        </h1>
        <p className="text-sm text-[#6E7A72] font-serif max-w-2xl leading-relaxed">
          Browse the complete collection of plants, trees, creepers, and crops recorded in the 
          three Vrikshayurveda treatises. Discover specimens alphabetically or via traditional usage categories.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="space-y-4 bg-white p-5 rounded-lg border border-[#E2DACB] shadow-sm">
        
        {/* Search & Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#6E7A72] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by name, Sanskrit, or botanical..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F9F6F0] border border-[#E2DACB] rounded focus:outline-none focus:border-[#2A5741] font-serif"
            />
          </div>
          <div className="text-xs font-mono text-[#6E7A72] self-end sm:self-center">
            Showing <strong>{filteredPlants.length}</strong> of {PLANTS_DATA.length} classical botanical entries
          </div>
        </div>

        {/* Alphabetical Filter Bar (A-Z) */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block">
            Alphabetical Index
          </span>
          <div className="flex flex-wrap items-center gap-1">
            {letters.map((char) => (
              <button
                key={char}
                onClick={() => setSelectedLetter(char)}
                className={`w-7 h-7 text-xs font-medium rounded transition-colors ${
                  selectedLetter === char
                    ? 'bg-[#2A5741] text-[#F9F6F0] font-bold'
                    : 'text-[#464F49] hover:bg-[#F4EFE6]'
                }`}
              >
                {char}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="space-y-1 pt-2 border-t border-[#E2DACB]/60">
          <span className="text-[10px] uppercase font-bold text-[#6E7A72] tracking-wider block">
            Archival Domain Filter
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#A14C29] text-[#F9F6F0] border-[#A14C29] font-medium'
                    : 'border-[#E2DACB] bg-[#F9F6F0] text-[#464F49] hover:border-[#A14C29]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Botanical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <div
            key={plant.id}
            onClick={() => onSelectPlant(plant.id)}
            className="p-6 rounded-lg border border-[#E2DACB] bg-white hover:border-[#2A5741] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              
              <div className="flex items-start justify-between">
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-[#F4EFE6] text-[#A14C29]">
                  {plant.plantType}
                </span>
                <span className="text-xl">🌿</span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-2xl text-[#1E3E2F] group-hover:text-[#2A5741] transition-colors">
                  {plant.name}
                </h3>
                <div className="text-xs font-serif italic text-[#6E7A72] mt-0.5">
                  <em>{plant.botanicalName}</em>
                </div>
                <div className="text-xs text-[#A14C29] font-medium mt-1">
                  {plant.transliteration} &bull; <span className="devanagari">{plant.sanskritName}</span>
                </div>
              </div>

              <p className="text-xs text-[#464F49] font-serif leading-relaxed line-clamp-3">
                {plant.summary}
              </p>

              {/* Research Mode details */}
              {researchMode && (
                <div className="pt-2 border-t border-[#E2DACB]/60 text-[11px] text-[#2A5741] font-mono">
                  Sources: {plant.sources.map(s => s.ref).join(', ')}
                </div>
              )}

            </div>

            <div className="pt-4 mt-4 border-t border-[#E2DACB]/60 flex items-center justify-between text-xs text-[#2A5741] font-semibold">
              <span>Open Monograph</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="py-16 text-center space-y-4">
          <div className="text-3xl text-[#6E7A72]">📜</div>
          <h3 className="font-serif text-xl text-[#1E3E2F]">No matching plants found</h3>
          <p className="text-xs text-[#6E7A72]">
            Try adjusting your search term or clearing the alphabetical/category filters.
          </p>
          <button
            onClick={() => {
              setSelectedLetter('ALL');
              setSelectedCategory('ALL');
              setSearchTerm('');
            }}
            className="px-4 py-2 text-xs font-semibold bg-[#2A5741] text-[#F9F6F0] rounded"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
}
