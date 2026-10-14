import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Layers, Compass, ExternalLink, Network } from 'lucide-react';
import { MAP_HIERARCHY } from '../data/mapHierarchy.js';

export default function MapViewerModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' or 'original'
  const [zoom, setZoom] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-2 sm:p-6 overflow-hidden animate-fadeIn">
      
      {/* Modal Toolbar */}
      <div className="flex items-center justify-between bg-[#FDFBF7] border border-[#E2DACB] rounded-t-lg px-4 py-3">
        <div className="flex items-center gap-3">
          <Network className="w-5 h-5 text-[#2A5741]" />
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base text-[#1E3E2F]">
              Knowledge Connection Diagram & Hierarchy
            </h3>
            <p className="text-[11px] text-[#6E7A72]">
              Rooted in the Vrukshaayurveda of Varahamihira and classical source relations
            </p>
          </div>
        </div>

        {/* View Switcher & Actions */}
        <div className="flex items-center gap-2">
          <div className="bg-[#F4EFE6] p-0.5 rounded border border-[#E2DACB] flex text-xs">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1 rounded transition-colors font-medium ${
                activeTab === 'interactive' ? 'bg-[#2A5741] text-[#F9F6F0]' : 'text-[#464F49] hover:text-[#1E3E2F]'
              }`}
            >
              Layered Hierarchy
            </button>
            <button
              onClick={() => setActiveTab('original')}
              className={`px-3 py-1 rounded transition-colors font-medium ${
                activeTab === 'original' ? 'bg-[#2A5741] text-[#F9F6F0]' : 'text-[#464F49] hover:text-[#1E3E2F]'
              }`}
            >
              Original Mind Map
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E2DACB] text-[#464F49] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal Main Body */}
      <div className="flex-1 bg-[#F9F6F0] border-x border-b border-[#E2DACB] rounded-b-lg overflow-auto relative p-4 sm:p-8">
        
        {activeTab === 'interactive' ? (
          /* Top-to-Bottom Layered Hierarchy (as specified in Section 18) */
          <div className="max-w-5xl mx-auto space-y-12 pb-16">
            
            {/* Level 1: Root */}
            <div className="text-center space-y-2">
              <div className="inline-block px-6 py-3 rounded border-2 border-[#2A5741] bg-[#1E3E2F] text-[#F9F6F0] shadow-md">
                <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#D5C4A1]">
                  Parampara · The Sovereign Shastra
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider">
                  VRIKSHAYURVEDA
                </h2>
                <div className="text-xs font-serif italic text-[#B8D3C4]">
                  The Comprehensive Science of Ancient Indian Plant Life
                </div>
              </div>
              <div className="w-0.5 h-8 bg-[#2A5741]/40 mx-auto" />
            </div>

            {/* Level 2: The Three Classical Books */}
            <div className="space-y-2">
              <div className="text-center text-xs uppercase tracking-widest font-semibold text-[#6E7A72]">
                Three Foundation Treatises
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MAP_HIERARCHY.textsLayer.map((book) => (
                  <div 
                    key={book.id} 
                    className="p-4 rounded border border-[#E2DACB] bg-white shadow-sm hover:border-[#2A5741] transition-all text-center space-y-1"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#A14C29]">Source Pillar</div>
                    <h4 className="font-serif font-bold text-sm text-[#1E3E2F]">{book.name}</h4>
                    <p className="text-[11px] text-[#6E7A72] font-serif italic">{book.source}</p>
                  </div>
                ))}
              </div>
              <div className="w-0.5 h-8 bg-[#2A5741]/40 mx-auto" />
            </div>

            {/* Level 3: Unified Knowledge Nexus */}
            <div className="text-center space-y-2">
              <div className="inline-block px-8 py-2 rounded-full border border-[#2A5741] bg-[#2A5741]/10 text-[#1E3E2F]">
                <span className="font-display font-semibold text-xs tracking-[0.15em] uppercase">
                  Unified Classical Knowledge Base
                </span>
              </div>
              <div className="w-0.5 h-8 bg-[#2A5741]/40 mx-auto" />
            </div>

            {/* Level 4: 10 Verified Domains from Map.png & Texts */}
            <div className="space-y-4">
              <div className="text-center text-xs uppercase tracking-widest font-semibold text-[#6E7A72]">
                Knowledge Clusters (Mapped directly to Map.png)
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {MAP_HIERARCHY.domains.map((dom) => (
                  <div
                    key={dom.id}
                    onClick={() => setSelectedDomain(selectedDomain?.id === dom.id ? null : dom)}
                    className={`p-4 rounded border cursor-pointer transition-all ${
                      selectedDomain?.id === dom.id
                        ? 'border-[#2A5741] bg-[#F4EFE6] ring-2 ring-[#2A5741]/20'
                        : 'border-[#E2DACB] bg-white hover:border-[#2A5741]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-[#E2DACB]/60">
                      <h5 className="font-serif font-bold text-sm text-[#1E3E2F]">{dom.title}</h5>
                      <span className="text-[10px] font-semibold bg-[#2A5741]/10 text-[#2A5741] px-1.5 py-0.5 rounded">
                        {dom.nodes.length} nodes
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {dom.nodes.map((n, idx) => (
                        <li key={idx} className="text-xs text-[#464F49] flex items-start gap-1.5">
                          <span className="text-[#A14C29] mt-0.5">&bull;</span>
                          <span className="font-medium text-[#1E3E2F]">{n.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Domain Detail Drawer */}
            {selectedDomain && (
              <div className="p-6 rounded-lg border-2 border-[#2A5741] bg-[#FDFBF7] shadow-lg animate-fadeIn space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2DACB] pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A14C29]">
                      Expanded Domain Details
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1E3E2F]">
                      {selectedDomain.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedDomain(null)}
                    className="text-xs text-[#6E7A72] hover:text-[#1E3E2F] underline"
                  >
                    Close detail
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {selectedDomain.nodes.map((n, idx) => (
                    <div key={idx} className="p-3 bg-white rounded border border-[#E2DACB] space-y-1">
                      <strong className="text-xs text-[#1E3E2F] block font-serif">{n.label}</strong>
                      <p className="text-xs text-[#6E7A72] leading-relaxed">{n.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Original Mind Map Viewer with Zoom/Pan */
          <div className="h-full flex flex-col items-center justify-center relative min-h-[500px]">
            {/* Zoom Controls Overlay */}
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur rounded border border-[#E2DACB] shadow p-1 flex items-center gap-1">
              <button
                onClick={() => setZoom(z => Math.max(0.6, z - 0.2))}
                className="p-1.5 hover:bg-[#F4EFE6] rounded text-[#464F49]"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-[#191D1A]">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom(z => Math.min(2.5, z + 0.2))}
                className="p-1.5 hover:bg-[#F4EFE6] rounded text-[#464F49]"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-1.5 hover:bg-[#F4EFE6] rounded text-[#464F49]"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-auto max-w-full max-h-full p-4 flex items-center justify-center">
              <img
                src="/assets/Map.png"
                alt="Original Knowledge Connection Map"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 ease-out max-w-none rounded shadow-lg border border-[#E2DACB]"
              />
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
