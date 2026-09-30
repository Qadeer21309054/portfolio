import React, { useState } from 'react';
import {
  Scale,
  ShieldAlert,
  Users,
  Cpu,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Building,
  ArrowRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { LEGAL_PRACTICE_AREAS, PERSONAL_INFO } from '../data/portfolioData';

export const LegalPractice: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState(LEGAL_PRACTICE_AREAS[0].id);

  const activeArea =
    LEGAL_PRACTICE_AREAS.find((area) => area.id === activeAreaId) ||
    LEGAL_PRACTICE_AREAS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="practice" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Advocacy & Courtroom Practice</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Legal Capitol & Bar Practice
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Enrolled as Advocate with the Punjab Bar Council in September 2024. Conducting trial advocacy, client counseling, and legal drafting across diverse contentious and advisory matters.
          </p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-mono block">Law Firm Affiliation:</span>
            <span className="font-serif font-bold text-white text-base">Legal Capitol, Lahore</span>
            <span className="text-[11px] text-amber-400 block font-mono">Associate Lawyer</span>
          </div>
        </div>
      </div>

      {/* Interactive Practice Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 4 Cols: Practice Area Selector */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block px-1">
            Focus Areas of Litigation & Advisory
          </span>

          <div className="space-y-2">
            {LEGAL_PRACTICE_AREAS.map((area) => {
              const isSelected = area.id === activeAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaId(area.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                      : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-slate-800 border-amber-500/30'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    {getIcon(area.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400">
                        {area.category}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-slate-100 text-base mt-0.5 truncate">
                      {area.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bar Licensure Badge */}
          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-start gap-3 mt-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <span className="font-bold text-white block">Punjab Bar Council Verified</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Licensed to advocate in all Subordinate and District Courts of Punjab, Pakistan under the Legal Practitioners and Bar Councils Act.
              </p>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Detailed Practice Area Dossier */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="border-b border-slate-800 pb-5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <span>LEGAL CAPITOL DOSSIER</span>
              <span>•</span>
              <span>{activeArea.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {activeArea.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed text-justify">
              {activeArea.description}
            </p>
          </div>

          {/* Specific Matters Handled */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>Matters & Case Types Handled</span>
            </h4>
            <div className="space-y-2">
              {activeArea.casesHandled.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applicable Statutory Frameworks */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Primary Statutory Frameworks</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeArea.statutes.map((statute, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-950 border border-slate-700/80 rounded-lg text-xs font-mono text-amber-300/90"
                >
                  {statute}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
