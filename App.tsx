import React from 'react';
import Logo from './components/Logo';
import ObjectiveSection from './components/sections/ObjectiveSection';
import ApproachSection from './components/sections/ApproachSection';
import MethodologySection from './components/sections/MethodologySection';
import DeliverablesSection from './components/sections/DeliverablesSection';
import InputsSection from './components/sections/InputsSection';
import PricingSection from './components/sections/PricingSection';
import OperatingTermsSection from './components/sections/OperatingTermsSection';
import MeasurementSection from './components/sections/MeasurementSection';
import SuccessStoriesSection from './components/sections/SuccessStoriesSection';
import RepurposingSection from './components/sections/RepurposingSection';
import CtaSection from './components/CtaSection';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans leading-relaxed text-slate-800 min-h-screen">
      <header>
        <Logo />
        <div className="bg-slate-100 pb-8 text-center">
          <h1 className="text-5xl font-bold text-slate-700">
            Content Creation Services
          </h1>
        </div>
      </header>
      <div className="p-2 sm:p-5">
        <main>
          <ObjectiveSection />
          <ApproachSection />
          <MethodologySection />
          <DeliverablesSection />
          <InputsSection />
          <PricingSection />
          <OperatingTermsSection />
          <MeasurementSection />
          <SuccessStoriesSection />
          <RepurposingSection />
        </main>
        <CtaSection />
      </div>
    </div>
  );
};

export default App;