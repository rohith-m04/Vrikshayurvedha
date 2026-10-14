import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Maximize2 } from 'lucide-react';

export default function InfographicModal({ isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-2 sm:p-6 overflow-hidden animate-fadeIn">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-[#FDFBF7] border border-[#E2DACB] rounded-t-lg px-4 py-3">
        <div>
          <h3 className="font-display font-semibold text-sm sm:text-base text-[#1E3E2F]">
            Vrukshaayurveda: The Ancient Science of Plant Life
          </h3>
          <p className="text-[11px] text-[#6E7A72]">
            Comprehensive Botanical Infographic & Cultivation Chart
          </p>
        </div>

        {/* Zoom & Close Toolbar */}
        <div className="flex items-center gap-2">
          <div className="bg-[#F4EFE6] px-2 py-1 rounded border border-[#E2DACB] flex items-center gap-1">
            <button
              onClick={() => setZoom(z => Math.max(0.5, z - 0.2))}
              className="p-1 hover:bg-[#E2DACB] rounded text-[#464F49]"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono px-2 text-[#191D1A]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom(z => Math.min(3, z + 0.2))}
              className="p-1 hover:bg-[#E2DACB] rounded text-[#464F49]"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="p-1 hover:bg-[#E2DACB] rounded text-[#464F49]"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <a
            href="/assets/Infographic.png"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#E2DACB] bg-[#F4EFE6] hover:bg-[#2A5741] hover:text-white rounded text-[#464F49] transition-colors"
            title="Open Original Image in New Tab"
          >
            <Maximize2 className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="p-2 hover:bg-[#E2DACB] rounded text-[#464F49] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Canvas */}
      <div className="flex-1 bg-[#191D1A] border-x border-b border-[#E2DACB] rounded-b-lg overflow-auto flex items-center justify-center p-4">
        <img
          src="/assets/Infographic.png"
          alt="Vrikshayurveda Botanical Infographic"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
          className="transition-transform duration-200 ease-out max-w-full max-h-full object-contain rounded shadow-2xl"
        />
      </div>

    </div>
  );
}
