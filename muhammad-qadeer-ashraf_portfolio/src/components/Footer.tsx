import React from 'react';
import {
  Scale,
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';

interface Props {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenCVModal }) => {
  const { profilePhoto } = useProfilePhoto();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-500/40 shadow-sm shrink-0 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-400/80" />
                {profilePhoto && (
                  <img
                    src={profilePhoto}
                    alt={PERSONAL_INFO.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-tight">
                  Muhammad Qadeer Ashraf
                </h4>
                <p className="text-[11px] font-mono text-amber-400/90">
                  Enrolled Advocate, Punjab Bar Council • Legal Capitol
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-justify max-w-sm">
              Practicing lawyer in civil, criminal, family, and technology cases, alongside research in forced migration and law &amp; technology. Double-blind research reviewer for peer-reviewed journals.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 rounded-lg border border-slate-800 text-xs font-mono font-bold transition-colors"
                title="ORCiD Profile"
              >
                ORCiD
              </a>

              <a
                href={PERSONAL_INFO.researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 rounded-lg border border-slate-800 text-xs font-mono font-bold transition-colors"
                title="ResearchGate Profile"
              >
                ResearchGate
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 rounded-lg border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 rounded-lg border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold block">
              Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#publication" className="hover:text-amber-400 transition-colors">AJEE Publication (AI in Courts)</a>
              </li>
              <li>
                <a href="#practice" className="hover:text-amber-400 transition-colors">Legal Capitol Practice</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Photos &amp; Verified Summits</a>
              </li>
              <li>
                <a href="#academic" className="hover:text-amber-400 transition-colors">Education &amp; Exchanges</a>
              </li>
              <li>
                <a href="#research" className="hover:text-amber-400 transition-colors">Research Agenda</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold block">
              Credentials &amp; Package
            </span>
            <p className="text-slate-400 text-xs">
              Quick access for academic evaluators, journal editors, bar colleagues, and clients.
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenCVModal}
                className="w-full flex items-center justify-between p-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Curriculum Vitae (CV)</span>
                </span>
                <span className="text-[10px] font-mono text-slate-950 bg-amber-300 px-1.5 py-0.5 rounded font-bold">VIEW</span>
              </button>

              <a
                href="#contact"
                className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 transition-colors text-xs"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Contact Lawyer</span>
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">EMAIL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Muhammad Qadeer Ashraf. All rights reserved. Enrolled Advocate, Punjab Bar Council (September 2026).
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
