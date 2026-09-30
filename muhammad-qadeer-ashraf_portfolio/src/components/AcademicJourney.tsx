import React from 'react';
import {
  GraduationCap,
  Globe,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { CV_EDUCATION_DATA, CV_CERTIFICATIONS_DATA, CV_CONFERENCES_DATA } from '../data/portfolioData';

export const AcademicJourney: React.FC = () => {
  return (
    <section id="academic" className="py-20 sm:py-28 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Academic Education &amp; Global Training</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Education, Exchanges &amp; Summer Schools
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-justify">
            4-Year Bachelor of Laws, LL.B. (Hons.) from BRAC University conferred with High Distinction (CGPA 3.72/4.00, Dean&apos;s List across 5 semesters), complemented by fully funded merit exchanges across the United States and the European Union.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CV_EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg group space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-amber-400 font-semibold px-2.5 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/20">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-xs font-semibold text-slate-200">
                  {edu.degree}
                </p>

                {edu.coursework && (
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {edu.coursework}
                  </p>
                )}

                {edu.deansList && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold block">
                      ★ {edu.deansList}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications, Fellowships & International Conferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
              <Award className="w-4 h-4" />
              <span>Certifications &amp; Professional Training</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Bard College Internship (Jan 2023 – Apr 2023)</strong>
                  <span className="text-slate-400 text-[11px]">Comparative legal research on human rights, economic democracy &amp; international legal frameworks.</span>
                </div>
              </li>
              {CV_CERTIFICATIONS_DATA.map((cert, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
              <Globe className="w-4 h-4" />
              <span>Conferences &amp; Presentations</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {CV_CONFERENCES_DATA.slice(0, 3).map((conf, cfIdx) => (
                <li key={cfIdx} className="border-b border-slate-800/80 pb-2 last:border-b-0">
                  <span className="font-semibold text-white block text-xs">{conf.title}</span>
                  <span className="text-slate-400 text-[11px]">{conf.event} ({conf.date})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
