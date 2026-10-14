import React from 'react';
import { 
  BookOpen, 
  Map as MapIcon, 
  Image as ImageIcon, 
  FileText, 
  Search, 
  Sparkles, 
  Layers, 
  Eye, 
  EyeOff, 
  Compass, 
  Menu, 
  X 
} from 'lucide-react';

export default function Header({ 
  currentView, 
  setCurrentView, 
  onOpenSummary, 
  onOpenMap, 
  onOpenInfographic, 
  onOpenSearch, 
  onDiscoverRandom,
  researchMode, 
  setResearchMode 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Explore' },
    { id: 'plants', label: 'Plants' },
    { id: 'practices', label: 'Practices' },
    { id: 'formulations', label: 'Formulations' },
    { id: 'health', label: 'Plant Health' },
    { id: 'vastu', label: 'Vastu & Timber' },
    { id: 'seasons', label: 'Seasons' },
    { id: 'texts', label: 'Texts' },
    { id: 'glossary', label: 'Glossary' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F9F6F0]/95 backdrop-blur-md manuscript-border-b border-[#E2DACB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <div 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded border border-[#2A5741]/30 bg-[#2A5741]/10 flex items-center justify-center text-[#2A5741] transition-transform group-hover:scale-105">
              <span className="text-xl">🌿</span>
            </div>
            <div>
              <div className="font-display text-lg tracking-[0.2em] font-semibold text-[#1E3E2F]">
                VRIKSHAYURVEDA
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#6E7A72] font-medium">
                A Digital Knowledge Archive
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const active = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-sm ${
                    active
                      ? 'text-[#1E3E2F] font-semibold bg-[#2A5741]/10 border-b-2 border-[#2A5741]'
                      : 'text-[#464F49] hover:text-[#1E3E2F] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Utility Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Research Mode Toggle */}
            <button
              onClick={() => setResearchMode(!researchMode)}
              title={researchMode ? "Research Mode Active (Showing Sanskrit verses & citations)" : "Enable Research Mode (Scholarly citations & shlokas)"}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border transition-all ${
                researchMode 
                  ? 'bg-[#2A5741] text-[#F9F6F0] border-[#2A5741] shadow-sm' 
                  : 'bg-[#F4EFE6] text-[#464F49] border-[#E2DACB] hover:border-[#2A5741]/40'
              }`}
            >
              {researchMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-[#6E7A72]" />}
              <span className="font-serif italic text-[11px]">Research</span>
            </button>

            {/* Discover Something Random */}
            <button
              onClick={onDiscoverRandom}
              title="Discover Something: Jump to a random plant, formulation, or traditional practice"
              className="p-1.5 sm:px-2.5 sm:py-1 text-xs rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#464F49] hover:text-[#1E3E2F] hover:border-[#2A5741]/40 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A14C29]" />
              <span className="hidden md:inline text-[11px] font-medium">Discover</span>
            </button>

            {/* Summary Modal Button */}
            <button
              onClick={onOpenSummary}
              className="px-2.5 py-1 text-xs rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#464F49] hover:text-[#1E3E2F] hover:border-[#2A5741]/40 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#2A5741]" />
              <span className="hidden sm:inline font-medium text-[11px]">Summary</span>
            </button>

            {/* Map Modal Button */}
            <button
              onClick={onOpenMap}
              className="px-2.5 py-1 text-xs rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#464F49] hover:text-[#1E3E2F] hover:border-[#2A5741]/40 transition-colors flex items-center gap-1"
            >
              <MapIcon className="w-3.5 h-3.5 text-[#A14C29]" />
              <span className="hidden sm:inline font-medium text-[11px]">Map</span>
            </button>

            {/* Infographic Modal Button */}
            <button
              onClick={onOpenInfographic}
              className="px-2.5 py-1 text-xs rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#464F49] hover:text-[#1E3E2F] hover:border-[#2A5741]/40 transition-colors flex items-center gap-1"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#2A5741]" />
              <span className="hidden sm:inline font-medium text-[11px]">Infographic</span>
            </button>

            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 sm:p-2 rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#1E3E2F] hover:bg-[#2A5741] hover:text-[#F9F6F0] transition-colors"
              title="Search the Archive"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded border border-[#E2DACB] bg-[#F4EFE6] text-[#1E3E2F]"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-[#E2DACB] bg-[#FDFBF7] animate-fadeIn">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs uppercase tracking-wider rounded text-left transition-colors ${
                    currentView === item.id
                      ? 'bg-[#2A5741] text-[#F9F6F0] font-semibold'
                      : 'text-[#464F49] hover:bg-[#F4EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-[#E2DACB] px-2 flex items-center justify-between">
              <button
                onClick={() => setResearchMode(!researchMode)}
                className="flex items-center gap-1.5 text-xs text-[#464F49]"
              >
                {researchMode ? <Eye className="w-4 h-4 text-[#2A5741]" /> : <EyeOff className="w-4 h-4 text-[#6E7A72]" />}
                <span>Research Mode: <strong className="font-semibold">{researchMode ? "Active" : "Off"}</strong></span>
              </button>

              <button
                onClick={() => {
                  onDiscoverRandom();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-[#A14C29] flex items-center gap-1 font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Random Entry</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
