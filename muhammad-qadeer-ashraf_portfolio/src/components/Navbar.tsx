import React, { useState } from 'react';
import {
  FileText,
  Github,
  Linkedin,
  Menu,
  X,
  Scale,
  Sparkles,
  ExternalLink,
  Camera,
  Mail,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';

interface Props {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenCVModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { profilePhoto } = useProfilePhoto();

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'AJEE Research', href: '#publication' },
    { label: 'Legal Practice', href: '#practice' },
    { label: 'Photos & Summits', href: '#gallery' },
    { label: 'Education & Exchange', href: '#academic' },
    { label: 'Research Agenda', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo / Profile Photo */}
        <a href="#overview" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-md shadow-amber-500/10 group-hover:border-amber-400 group-hover:scale-105 transition-all bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-amber-400/80" />
            {profilePhoto && (
              <img
                src={profilePhoto}
                alt="Muhammad Qadeer Ashraf"
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors truncate">
                Muhammad Qadeer Ashraf
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wide truncate">
              Advocate, Punjab Bar Council • Legal Capitol
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs tracking-wider uppercase font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {/* ORCiD link */}
          <a
            href={PERSONAL_INFO.orcidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1.5 text-emerald-400 hover:text-emerald-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono font-bold transition-all"
            title="ORCiD"
          >
            ID
          </a>

          {/* ResearchGate link */}
          <a
            href={PERSONAL_INFO.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1.5 text-cyan-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono font-bold transition-all"
            title="ResearchGate"
          >
            RG
          </a>

          {/* GitHub link */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
            title="GitHub: Qadeer21309054"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn link */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* CV Button */}
          <button
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCVModal}
            className="p-2 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold"
            title="View CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-5 py-5 space-y-4 shadow-2xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-300 hover:text-amber-400 py-2 px-3 rounded-lg hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Social & Scholar Icons */}
          <div className="pt-3 border-t border-slate-800/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2 px-1">
              Academic &amp; Professional Profiles
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={PERSONAL_INFO.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 text-emerald-400 rounded-lg text-xs font-mono font-bold"
              >
                ORCiD
              </a>
              <a
                href={PERSONAL_INFO.researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg text-xs font-mono font-bold"
              >
                ResearchGate
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-sky-400 rounded-lg text-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-slate-900 border border-slate-800 text-amber-400 rounded-lg text-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl text-xs font-bold shadow-md shadow-amber-500/20 active:scale-98 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
