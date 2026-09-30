import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Award,
  Sparkles,
  Scale,
  ShieldCheck,
  ChevronRight,
  FileCheck,
} from 'lucide-react';
import { PUBLICATION_DATA } from '../data/portfolioData';

export const ResearchPublication: React.FC = () => {
  const [citationFormat, setCitationFormat] = useState<'oscola' | 'apa' | 'bibtex'>('oscola');
  const [copied, setCopied] = useState(false);

  const getCitationText = () => {
    switch (citationFormat) {
      case 'oscola':
        return `Muhammad Qadeer Ashraf, 'Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities' (2024) Access to Justice in Eastern Europe <${PUBLICATION_DATA.url}>.`;
      case 'apa':
        return `Ashraf, M. Q. (2024). Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities. Access to Justice in Eastern Europe. https://ajee-journal.com/artificial-intelligence-in-courts-and-dispute-resolution-challenges-and-opportunities`;
      case 'bibtex':
        return PUBLICATION_DATA.bibtex;
      default:
        return '';
    }
  };

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="publication" className="py-20 sm:py-28 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Scholarly Research</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Published Legal Scholarship
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Interrogating the constitutional, jurisprudential, and procedural due process implications of deploying Artificial Intelligence within judicial decision-making frameworks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono">Journal Indexing:</span>
            <div className="flex flex-wrap gap-1.5">
              {PUBLICATION_DATA.indexing.map((idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-200 font-medium text-[11px]"
                >
                  {idx}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Publication Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Watermark effect */}
          <div className="absolute -bottom-10 -right-10 text-slate-800/20 font-serif text-9xl font-bold select-none pointer-events-none">
            AJEE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left 8 Cols: Paper Overview */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-400">
                  <span className="font-bold">Access to Justice in Eastern Europe (AJEE)</span>
                  <span>•</span>
                  <span>Scopus & ESCI (Web of Science)</span>
                  <span>•</span>
                  <span>Author: Muhammad Qadeer Ashraf</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  {PUBLICATION_DATA.title}
                </h3>
              </div>

              {/* Abstract */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                  Executive Abstract
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-left sm:text-justify bg-slate-950/60 p-4 sm:p-5 rounded-xl border border-slate-800/80">
                  {PUBLICATION_DATA.abstract}
                </p>
              </div>

              {/* Research Pillars */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                  Core Jurisprudential Contributions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PUBLICATION_DATA.highlights.map((point, index) => (
                    <div
                      key={index}
                      className="p-3.5 bg-slate-950/40 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={PUBLICATION_DATA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Read Official Article on AJEE Journal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PUBLICATION_DATA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl transition-all"
                >
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verify Journal Indexed Record</span>
                </a>
              </div>
            </div>

            {/* Right 4 Cols: Citation & Scholarship Relevance */}
            <div className="lg:col-span-4 space-y-6">
              {/* Citation Generator */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Cite this Research
                  </span>
                  <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                    {(['oscola', 'apa', 'bibtex'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        onClick={() => setCitationFormat(fmt)}
                        className={`px-2 py-1 rounded capitalize transition-all ${
                          citationFormat === fmt
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto max-h-36">
                  {getCitationText()}
                </div>

                <button
                  onClick={handleCopyCitation}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Citation Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scholarly Contribution Card */}
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Scholarly Contribution &amp; Impact
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  This peer-reviewed paper reconciles algorithmic procedural fairness with constitutional due process, providing actionable safeguards against bias in automated judicial assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
