/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchPublication } from './components/ResearchPublication';
import { LegalPractice } from './components/LegalPractice';
import { PhotoSlider } from './components/PhotoSlider';
import { AcademicJourney } from './components/AcademicJourney';
import { ResearchInterests } from './components/ResearchInterests';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TwoPageCVModal } from './components/TwoPageCVModal';
import { FileText, Mail } from 'lucide-react';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <ResearchPublication />
        <LegalPractice />
        {/* Photo Slider showing all verified program participations */}
        <PhotoSlider />
        <AcademicJourney />
        {/* Research Agenda on Forced Migration & Law & Technology */}
        <ResearchInterests />
        <ContactSection onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Floating Quick Action Bar for Easy Access */}
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-30 flex items-center gap-1.5 sm:gap-2 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-1.5 rounded-2xl shadow-2xl">
        <button
          onClick={() => setIsCVModalOpen(true)}
          className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-98"
          title="View & Download Official CV"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Curriculum Vitae (CV)</span>
          <span className="xs:hidden">CV</span>
        </button>

        <a
          href="#contact"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 transition-all hover:border-amber-400/50"
          title="Direct Contact"
        >
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>Contact</span>
        </a>
      </div>

      {/* Modals */}
      <TwoPageCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
