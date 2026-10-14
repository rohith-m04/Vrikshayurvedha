import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SearchModal from './components/SearchModal.jsx';
import MapViewerModal from './components/MapViewerModal.jsx';
import InfographicModal from './components/InfographicModal.jsx';
import SummaryModal from './components/SummaryModal.jsx';

import HomeView from './views/HomeView.jsx';
import PlantExplorerView from './views/PlantExplorerView.jsx';
import PlantDetailView from './views/PlantDetailView.jsx';
import PracticesView from './views/PracticesView.jsx';
import FormulationLibraryView from './views/FormulationLibraryView.jsx';
import PlantHealthView from './views/PlantHealthView.jsx';
import VastuTimberView from './views/VastuTimberView.jsx';
import SeasonsView from './views/SeasonsView.jsx';
import TextsView from './views/TextsView.jsx';
import GlossaryView from './views/GlossaryView.jsx';

import { PLANTS_DATA } from './data/plants.js';
import { FORMULATIONS_DATA } from './data/formulations.js';
import { PRACTICES_DATA } from './data/practices.js';
import { GLOSSARY_DATA } from './data/glossary.js';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlantId, setSelectedPlantId] = useState('neem');
  const [researchMode, setResearchMode] = useState(false);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isInfographicOpen, setIsInfographicOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Discover Something random picker
  const handleDiscoverRandom = () => {
    const categories = ['plant', 'formulation', 'practice', 'glossary'];
    const chosenCat = categories[Math.floor(Math.random() * categories.length)];

    if (chosenCat === 'plant') {
      const randPlant = PLANTS_DATA[Math.floor(Math.random() * PLANTS_DATA.length)];
      setSelectedPlantId(randPlant.id);
      setCurrentView('plant-detail');
    } else if (chosenCat === 'formulation') {
      setCurrentView('formulations');
    } else if (chosenCat === 'practice') {
      setCurrentView('practices');
    } else {
      setCurrentView('glossary');
    }
  };

  const handleSelectEntity = (view, id) => {
    if (view === 'plant-detail') {
      setSelectedPlantId(id);
      setCurrentView('plant-detail');
    } else {
      setCurrentView(view);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F0] text-[#191D1A] font-sans">
      
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenSummary={() => setIsSummaryOpen(true)}
        onOpenMap={() => setIsMapOpen(true)}
        onOpenInfographic={() => setIsInfographicOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onDiscoverRandom={handleDiscoverRandom}
        researchMode={researchMode}
        setResearchMode={setResearchMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            setCurrentView={setCurrentView}
            setSelectedPlantId={setSelectedPlantId}
            onOpenSummary={() => setIsSummaryOpen(true)}
            onOpenMap={() => setIsMapOpen(true)}
            onOpenInfographic={() => setIsInfographicOpen(true)}
          />
        )}

        {currentView === 'plants' && (
          <PlantExplorerView
            onSelectPlant={(id) => {
              setSelectedPlantId(id);
              setCurrentView('plant-detail');
            }}
            researchMode={researchMode}
          />
        )}

        {currentView === 'plant-detail' && (
          <PlantDetailView
            plantId={selectedPlantId}
            onBack={() => setCurrentView('plants')}
            onSelectPlant={(id) => setSelectedPlantId(id)}
            researchMode={researchMode}
          />
        )}

        {currentView === 'practices' && (
          <PracticesView researchMode={researchMode} />
        )}

        {currentView === 'formulations' && (
          <FormulationLibraryView researchMode={researchMode} />
        )}

        {currentView === 'health' && (
          <PlantHealthView researchMode={researchMode} />
        )}

        {currentView === 'vastu' && (
          <VastuTimberView researchMode={researchMode} />
        )}

        {currentView === 'seasons' && (
          <SeasonsView researchMode={researchMode} />
        )}

        {currentView === 'texts' && (
          <TextsView researchMode={researchMode} />
        )}

        {currentView === 'glossary' && (
          <GlossaryView />
        )}
      </main>

      {/* Scholarly Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenMap={() => setIsMapOpen(true)}
        onOpenInfographic={() => setIsInfographicOpen(true)}
        onOpenSummary={() => setIsSummaryOpen(true)}
      />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEntity={handleSelectEntity}
      />

      <MapViewerModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />

      <InfographicModal
        isOpen={isInfographicOpen}
        onClose={() => setIsInfographicOpen(false)}
      />

      <SummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />

    </div>
  );
}
