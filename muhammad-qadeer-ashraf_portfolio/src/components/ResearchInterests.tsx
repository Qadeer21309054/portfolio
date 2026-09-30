import React from 'react';
import {
  Compass,
  Cpu,
  Globe2,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, PUBLICATION_DATA } from '../data/portfolioData';

export const ResearchInterests: React.FC = () => {
  const researchPillars = [
    {
      title: 'Forced Migration & International Solidarity',
      icon: <Globe2 className="w-5 h-5 text-amber-400" />,
      tag: 'Refugee Law & Human Rights',
      description:
        'Presented conference paper at the Kakuma Refugee Camp Summit on Mobility and Immobility in Kenya: "Addressing the Urgent Global Challenge: Forced Displacement and a Call for International Solidarity". Facilitated Hubs for Connected Learning Initiatives for 6 months.',
      highlights: [
        'Transnational refugee protection frameworks',
        'Connected learning and legal empowerment for displaced youth',
        'Comparative human rights advocacy under international conventions',
      ],
    },
    {
      title: 'AI in Courts & Dispute Resolution',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      tag: 'Scopus Published in AJEE',
      description:
        'Author of published research in Access to Justice in Eastern Europe (AJEE 8(Spec) 98-118). Distinguishes assistive AI from autonomous decision-making, establishing that only assistive AI reconciles with Article 6 ECHR fair-trial principles.',
      highlights: [
        'Constitutional limits of automated judicial triage',
        'Mitigating training data bias in algorithmic court tools',
        'Preserving human judicial discretion in developing legal orders',
      ],
    },
    {
      title: 'Algorithmic Fairness & Fundamental Rights',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tag: 'Bard College Research Project',
      description:
        'Investigated automated candidate screening and fundamental rights at Bard College (New York), auditing machine learning recruitment algorithms for bias, lack of transparency, and discriminatory disparate impact.',
      highlights: [
        'Algorithmic transparency and audit protocols',
        'Due process protections against automated screening',
        'Comparative analysis of EU AI Act and global tech regulation',
      ],
    },
    {
      title: 'Peer Review & Academic Integrity',
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
      tag: 'AJEE Research Reviewer',
      description:
        'Serving as an appointed double-blind peer reviewer for Access to Justice in Eastern Europe (Kyiv, Ukraine) since June 2025, evaluating manuscripts for methodological rigor, literature currency, and analytical coherence in AI and Law.',
      highlights: [
        'Double-blind peer review for international law journals',
        'Methodological evaluation of empirical legal studies',
        'Guiding editorial decisions on emerging tech jurisprudence',
      ],
    },
  ];

  return (
    <section id="research" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Research Agenda</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Forced Migration &amp; Law &amp; Technology
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-justify">
          Combining courtroom litigation experience with interdisciplinary scholarship on forced displacement, digital rights, and the constitutional limits of Artificial Intelligence in judicial decision-making.
        </p>
      </div>

      {/* Grid of Research Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono rounded-full font-semibold">
                  {pillar.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {pillar.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {pillar.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
