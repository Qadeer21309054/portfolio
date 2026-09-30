import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Building,
  Send,
  CheckCircle2,
  FileText,
  ExternalLink,
  Scale,
  Phone,
  Compass,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenCVModal: () => void;
}

export const ContactSection: React.FC<Props> = ({ onOpenCVModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic & Legal Inquiry for Muhammad Qadeer Ashraf',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect &amp; Inquiries</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Direct Contact &amp; Research Profiles
        </h2>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Open to academic discussions with university committees, research collaborations in forced migration and AI in law, journal review requests, and litigation consultations at Legal Capitol.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Credentials & Social Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block mb-1">
                Official Advocate Contact
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Muhammad Qadeer Ashraf
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Enrolled Advocate at Punjab Bar Council (Sep 2026) • Legal Capitol
              </p>
            </div>

            <div className="space-y-3 text-xs">
              {/* Primary Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Email Address</span>
                  <span className="font-mono text-slate-200 group-hover:text-amber-300 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Phone</span>
                  <span className="font-mono text-slate-200">{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              {/* ORCiD */}
              <a
                href={PERSONAL_INFO.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 font-mono font-bold text-xs">
                  ID
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">ORCiD Record</span>
                  <span className="font-mono text-slate-200 group-hover:text-emerald-300 transition-colors truncate block">
                    0009-0006-8987-1268
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
              </a>

              {/* ResearchGate */}
              <a
                href={PERSONAL_INFO.researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 font-mono font-bold text-xs">
                  RG
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">ResearchGate Profile</span>
                  <span className="font-mono text-slate-200 group-hover:text-cyan-300 transition-colors truncate block">
                    Muhammad-Ashraf-277
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">GitHub Profile</span>
                  <span className="font-mono text-slate-200 group-hover:text-amber-300 transition-colors truncate block">
                    github.com/Qadeer21309054
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-600/10 flex items-center justify-center text-sky-400 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">LinkedIn Network</span>
                  <span className="font-mono text-slate-200 group-hover:text-amber-300 transition-colors truncate block">
                    linkedin.com/in/muhammadqadeerashraf08
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">Location</span>
                  <span className="text-slate-200 text-[11px] leading-relaxed block">
                    {PERSONAL_INFO.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenCVModal}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md shadow-amber-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Print CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="border-b border-slate-800 pb-5 mb-6">
            <h3 className="text-xl font-serif font-bold text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select inquiry category to connect directly via email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scholarship Committee / Legal Client"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. committee@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Inquiry Topic / Reason
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-amber-500"
              >
                <option value="Academic Scholarship / Fellowship Review">Scholarship / Fellowship Committee Review</option>
                <option value="Research Collaboration: Forced Migration / AI Law">Research Collaboration (Forced Migration / AI & Law)</option>
                <option value="Journal Peer Review Request">Journal Manuscript Peer Review Request</option>
                <option value="Legal Capitol Litigation / Retainer">Litigation / Legal Retainer (Civil, Criminal, Family, Tech)</option>
                <option value="General Academic Inquiry">General Academic Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Message Body
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your message, evaluation feedback, or case details here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 leading-relaxed resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Routed to {PERSONAL_INFO.email}
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-98"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                    <span>Email Client Opened!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
