import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyChennaiHealthSection } from './components/WhyChennaiHealthSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PatientResourcesSection } from './components/PatientResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <WhyChennaiHealthSection />
        <FacilitiesSection />
        <PatientResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
