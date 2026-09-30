import React, { useRef } from 'react';
import {
  Scale,
  Award,
  BookOpen,
  FileText,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building,
  GraduationCap,
  Mail,
  CheckCircle2,
  Camera,
  UploadCloud,
  Trash2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useProfilePhoto } from '../utils/useProfilePhoto';

interface Props {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenCVModal }) => {
  const { profilePhoto, uploadPhotoFile, resetPhoto, isCustomPhoto } = useProfilePhoto();
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadPhotoFile(file);
    }
    e.target.value = '';
  };
  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Credentials Ribbon */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-sm">
            <Scale className="w-3.5 h-3.5" />
            <span>Enrolled Advocate at Punjab Bar Council from September 2026</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
            <Building className="w-3.5 h-3.5 text-blue-400" />
            <span>Lawyer • Legal Capitol, Lahore</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Research Reviewer &amp; Published in AJEE</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-mono text-amber-400 font-bold block">
                Litigation Counsel • Intellectual Property &amp; Technology Law Researcher
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                Muhammad Qadeer Ashraf
              </h1>
              <p className="text-lg sm:text-2xl font-serif italic text-amber-200/90 font-medium">
                Civil Litigation, Criminal Matters, Family Disputes &amp; Data Law.
              </p>
            </div>

            {/* Profile Statement */}
            <div className="p-4 sm:p-6 bg-slate-900/90 border-l-4 border-amber-500 rounded-r-2xl border border-slate-800 shadow-xl space-y-3">
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-sans text-left sm:text-justify">
                {PERSONAL_INFO.profileStatement}
              </p>
            </div>

            {/* Prominent Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenCVModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Print CV</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 font-semibold text-sm rounded-xl transition-all shadow-md group"
              >
                <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Contact &amp; Legal Inquiries</span>
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
              >
                <span>View Program Photos</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Academic & Professional Profiles Strip (ORCiD, ResearchGate, GitHub, LinkedIn) */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500 text-emerald-400 rounded-lg flex items-center gap-1.5 transition-colors"
                title="ORCiD Profile"
              >
                <span className="font-bold">ID</span>
                <span>ORCiD</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500 text-cyan-400 rounded-lg flex items-center gap-1.5 transition-colors"
                title="ResearchGate Profile"
              >
                <span className="font-bold">RG</span>
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 rounded-lg flex items-center gap-1.5 transition-colors"
                title="GitHub"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 text-blue-400 rounded-lg flex items-center gap-1.5 transition-colors"
                title="LinkedIn"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Profile Card & Highlights */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Hidden file input for profile picture */}
              <input
                type="file"
                ref={profileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleProfilePhotoChange}
              />

              {/* Monogram Seal & Profile Photo */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div 
                    onClick={() => profileInputRef.current?.click()}
                    className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-500/20 shrink-0 bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center group cursor-pointer"
                    title="Click to upload/change your profile photo"
                  >
                    <Scale className="w-7 h-7 text-amber-400/90" />
                    {profilePhoto && (
                      <img
                        src={profilePhoto}
                        alt={PERSONAL_INFO.name}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base leading-snug">
                      Muhammad Qadeer Ashraf
                    </h3>
                    <p className="text-[11px] font-mono text-amber-400 font-semibold">
                      Enrolled Advocate • Bar Council
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => profileInputRef.current?.click()}
                        className="text-[10px] font-mono text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isCustomPhoto ? 'Change Photo' : 'Upload Photo'}</span>
                      </button>
                      {isCustomPhoto && (
                        <button
                          onClick={resetPhoto}
                          className="text-[10px] font-mono text-rose-400 hover:text-rose-300"
                          title="Remove custom photo"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold shrink-0">
                  Active
                </span>
              </div>

              {/* Stats list */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-200 block text-xs">Punjab Bar Council (Sep 2026)</span>
                    <p className="text-[11px] text-slate-400">
                      Civil suits, criminal matters, family disputes, and tech cases
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-200 block text-xs">AJEE Published &amp; Reviewer</span>
                    <p className="text-[11px] text-slate-400">
                      Scopus 8(Spec) 98-118 research paper and 7 peer reviews completed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-200 block text-xs">4-Year LL.B. (Hons.) High Distinction</span>
                    <p className="text-[11px] text-slate-400">
                      4-year degree (CGPA 3.72/4.00, 5 terms on Dean&apos;s List) &amp; OSUN exchanges
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Link to CV */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Official Curriculum Vitae</span>
                <button
                  onClick={onOpenCVModal}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Open CV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Verified Bar Council Status Card */}
            <div className="p-4 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Punjab Bar Council Verified</span>
                  <span className="text-[11px] text-slate-400">Legal Capitol • District Courts Practice</span>
                </div>
              </div>
              <a
                href="#practice"
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0"
              >
                Practice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
