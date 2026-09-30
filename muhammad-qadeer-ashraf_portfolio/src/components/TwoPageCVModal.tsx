import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Download,
  X,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PUBLICATION_DATA,
  CV_EDUCATION_DATA,
  CV_EXPERIENCE_DATA,
  CV_CONFERENCES_DATA,
  CV_CERTIFICATIONS_DATA,
  CV_SKILLS_DATA,
  CV_VOLUNTEERING_DATA,
} from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TwoPageCVModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'clean' | 'text'>('clean');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const cvPlainText = `========================================================================
MUHAMMAD QADEER ASHRAF
Lahore, Pakistan | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} |
${PERSONAL_INFO.linkedinUrl} | ${PERSONAL_INFO.githubUrl}
ORCiD: ${PERSONAL_INFO.orcidUrl} | ResearchGate: ${PERSONAL_INFO.researchGateUrl}
========================================================================

PROFILE
------------------------------------------------------------------------
Muhammad Qadeer Ashraf is a practicing lawyer, with a litigation focus on civil suits, criminal matters, family disputes, and technology-related cases. Alongside practice, he maintains a strong research interest in forced migration and the intersection of law and technology, Additionally, he serves as a research reviewer for the several peer reviewed journals.

BAR ADMISSION
------------------------------------------------------------------------
Enrolled Advocate at Punjab Bar Council from September 2026

EDUCATION
------------------------------------------------------------------------
BRAC University — Dhaka, Bangladesh                  2021 – 2025
4-Year Bachelor of Laws, LL.B. (Hons.) — CGPA 3.72/4.00, High Distinction
• Coursework: Intellectual Property Law, Company Law, Property Law and Transfer, Banking and Securities Law, Laws on Foreign Exchange, Investment and Anti-Money Laundering, Evidence, Criminal Law and Procedure, Moot Court Sessions.
• Dean's List: Fall 2022, Spring 2023, Fall 2023, Fall 2024, Summer 2025 (5 Semesters).

European Humanities University — Vilnius, Lithuania   Mar 2024 – Jul 2024
Semester Exchange (OSUN-funded) — Local grade 9.8/10 (ECTS: 30)
• Courses: International Public Law, International Criminal Law, International Financial Law, Law of the European Convention on Human Rights, Legal Arguments in Litigation.

Bard College — Annandale-on-Hudson, New York, USA    Aug 2024 – Dec 2024
Semester Exchange (OSUN-funded) — GPA 4.00 (Credits: 6, US)
• Coursework in Algorithmic Fairness and Ethics of Big Data and AI; research on automated candidate-screening systems and fundamental rights.

University of Copenhagen — Copenhagen, Denmark       Jun 2026
iCourts/MOBILE PhD Summer School: Research Methodologies (5 ECTS)

Central European University — Budapest, Hungary      Jul 2026
Summer Course: Contestations of Citizenship in Times of Global Democratic Backsliding

PROFESSIONAL EXPERIENCE
------------------------------------------------------------------------
Lawyer — Legal Capitol, Lahore, Pakistan             Jul 17, 2026 – Present
• Independently handle civil suits before Pakistan's District Courts, covering disputes concerning corporeal and incorporeal property, business, and intellectual property matters.
• Draft plaints, written statements, legal notices, and petitions; conduct judgment research; represent and assist clients across pre-trial and trial stages.
• Advise clients on trademark, contract, and property matters, applying research from academic work on AI and legal technology to practice.

Enrolled Advocate — Punjab Bar Council, Pakistan     September 2026 – Present
• Licensed Advocate with litigation focus on civil suits, criminal matters, family disputes, and technology-related cases.
• Courtroom advocacy across Subordinate and District Courts of Punjab.

Research Reviewer — Access to Justice in Eastern Europe, Kyiv, Ukraine   Jun 2025 – Present
• Completed 7 double-blind peer reviews of manuscripts on AI and law, evaluating methodological rigor, currency of literature, and doctrinal coherence.
• Focus areas: AI in courts, criminal justice, and regulatory frameworks.

Legal & Research Intern — Bard College, Annandale-on-Hudson, NY   Jan 2023 – Apr 2023
• Conducted comparative legal research on human rights, economic democracy, and international legal frameworks under faculty supervision.

PUBLICATIONS
------------------------------------------------------------------------
• Ashraf, M.Q. (2025). "Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities." Access to Justice in Eastern Europe, 8(Spec), 98–118.
https://ajee-journal.com/artificial-intelligence-in-courts-and-dispute-resolution-challenges-and-opportunities

CONFERENCES & PRESENTATIONS
------------------------------------------------------------------------
• "Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities" — International Student Scientific Conference "Human vs AI," European Humanities University, Jun 2025.
• "Fortifying Peace and Security in Europe: Strengthening International Legal Frameworks" — International Student Conference "Europe 2024," Vilnius. May 2024.
• "Beyond Impasse: Reimagining International Justice in the Wake of the Ukraine War" — International Scientific Conference "Europe After War," Vilnius. Feb 2024.
• "Addressing the Urgent Global Challenge: Forced Displacement and a Call for International Solidarity" — Summit on Mobility and Immobility, Kakuma Refugee Camp, Kenya. Oct 2023.
• Paper presentation — Conference on Aviation and Space Law, Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University, Bangladesh. Sep 2023.

CERTIFICATIONS & TRAINING
------------------------------------------------------------------------
• Bar Vocational Course — Lahore Bar Association, in collaboration with Punjab Bar Council (May 2026).
• Human Rights Certificate — Open Society University Network (Aug 2024).
• Public Finance & Economic Policy Workshop — Bard College / Economic Democracy Initiative / OSUN (2024).

SKILLS
------------------------------------------------------------------------
Civil litigation and drafting (plaints, written statements, petitions) | Legal research and analysis | Intellectual property and technology law | Academic peer review | Cross-jurisdictional legal research (Pakistan, Bangladesh, EU, US) | Time management and multitasking

VOLUNTEERING
------------------------------------------------------------------------
BRAC University Law Society — Dhaka, Bangladesh      Aug 2022 – Oct 2025
• Assisted law faculty in organizing academic seminars and workshops; supported event coordination and participant engagement.

DECLARATION
------------------------------------------------------------------------
I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.

Muhammad Qadeer Ashraf
Lahore, Pakistan — September 30, 2026
`;

  const handleDownloadTextCV = () => {
    const blob = new Blob([cvPlainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Qadeer_Ashraf_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto text-slate-100">
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-bold text-slate-100 font-serif tracking-wide truncate">
                Curriculum Vitae (CV)
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-400 truncate hidden xs:block">
                Official Curriculum Vitae of Muhammad Qadeer Ashraf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <div className="flex bg-slate-800 p-0.5 sm:p-1 rounded-lg border border-slate-700 text-[11px] sm:text-xs">
              <button
                onClick={() => setActiveTab('clean')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-medium transition-all ${
                  activeTab === 'clean'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Clean CV
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-medium transition-all ${
                  activeTab === 'text'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ATS Text
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-[11px] sm:text-xs font-semibold transition-all shadow-sm"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadTextCV}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-[11px] sm:text-xs font-bold transition-all shadow-md shadow-amber-500/20"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-950" />
                  <span>Done!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1 sm:p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-0.5"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-6 lg:p-8 bg-slate-950/70">
          {activeTab === 'clean' ? (
            <div className="max-w-3xl mx-auto space-y-6 print:p-0 print:space-y-0">
              {/* PAGE 1: EXACT VERBATIM AS USER'S PDF */}
              <div className="bg-white text-slate-900 p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl border border-slate-200 print:rounded-none print:shadow-none print:border-none print:p-8 min-h-[1050px] relative font-sans text-xs">
                {/* Center Title */}
                <div className="text-center mb-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-slate-900 tracking-wide uppercase">
                    MUHAMMAD QADEER ASHRAF
                  </h1>
                  <p className="text-[11px] text-slate-700 mt-1">
                    Lahore, Pakistan | <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 underline">{PERSONAL_INFO.email}</a> | {PERSONAL_INFO.phone}
                  </p>
                  <p className="text-[11px] text-slate-700 mt-0.5 space-x-2">
                    <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                      linkedin.com/in/muhammadqadeerashraf08
                    </a>
                    <span>•</span>
                    <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                      github.com/Qadeer21309054
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5 space-x-2 font-mono">
                    <a href={PERSONAL_INFO.orcidUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                      ORCiD: 0009-0006-8987-1268
                    </a>
                    <span>•</span>
                    <a href={PERSONAL_INFO.researchGateUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">
                      ResearchGate Profile
                    </a>
                  </p>
                </div>

                {/* Section: PROFILE */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      PROFILE
                    </h2>
                  </div>
                  <p className="text-slate-800 text-[11.5px] leading-relaxed text-left sm:text-justify">
                    Muhammad Qadeer Ashraf is a practicing lawyer, with a litigation focus on civil suits, criminal matters, family disputes, and technology-related cases. Alongside practice, he maintains a strong research interest in forced migration and the intersection of law and technology, Additionally, he serves as a research reviewer for the several peer reviewed journals.
                  </p>
                </div>

                {/* Section: BAR ADMISSION */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      BAR ADMISSION
                    </h2>
                  </div>
                  <p className="text-slate-800 text-[11.5px] font-semibold">
                    Enrolled Advocate at Punjab Bar Council from September 2026
                  </p>
                </div>

                {/* Section: EDUCATION */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2.5">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      EDUCATION
                    </h2>
                  </div>

                  <div className="space-y-3 text-[11.5px]">
                    {/* BRAC University */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>BRAC University — Dhaka, Bangladesh</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">2021 – 2025</span>
                      </div>
                      <p className="italic text-slate-800 font-semibold">
                        4-Year Bachelor of Laws, LL.B. (Hons.) — CGPA 3.72/4.00, High Distinction
                      </p>
                      <ul className="list-disc list-outside ml-4 mt-0.5 space-y-0.5 text-slate-700 text-[11px]">
                        <li>
                          Coursework: Intellectual Property Law, Company Law, Property Law and Transfer, Banking and Securities Law, Laws on Foreign Exchange, Investment and Anti-Money Laundering, Evidence, Criminal Law and Procedure, Moot Court Sessions.
                        </li>
                        <li>
                          Dean&apos;s List across 5 semesters during 4-year degree (Fall 2022, Spring 2023, Fall 2023, Fall 2024, Summer 2025).
                        </li>
                      </ul>
                    </div>

                    {/* EHU */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>European Humanities University — Vilnius, Lithuania</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Mar 2024 – Jul 2024</span>
                      </div>
                      <p className="italic text-slate-800 font-medium">
                        Semester Exchange (OSUN-funded) — Local grade 9.8/10 (ECTS: 30)
                      </p>
                      <ul className="list-disc list-outside ml-4 mt-0.5 text-slate-700 text-[11px]">
                        <li>
                          Courses: International Public Law, International Criminal Law, International Financial Law, Law of the European Convention on Human Rights, Legal Arguments in Litigation.
                        </li>
                      </ul>
                    </div>

                    {/* Bard College */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Bard College — Annandale-on-Hudson, New York, USA</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Aug 2024 – Dec 2024</span>
                      </div>
                      <p className="italic text-slate-800 font-medium">
                        Semester Exchange (OSUN-funded) — GPA 4.00 (Credits: 6, US)
                      </p>
                      <ul className="list-disc list-outside ml-4 mt-0.5 text-slate-700 text-[11px]">
                        <li>
                          Coursework in Algorithmic Fairness and Ethics of Big Data and AI; research on automated candidate-screening systems and fundamental rights.
                        </li>
                      </ul>
                    </div>

                    {/* Copenhagen */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>University of Copenhagen — Copenhagen, Denmark</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Jun 2026</span>
                      </div>
                      <p className="italic text-slate-800 font-medium">
                        iCourts/MOBILE PhD Summer School: Research Methodologies (5 ECTS)
                      </p>
                    </div>

                    {/* CEU */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Central European University — Budapest, Hungary</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Jul 2026</span>
                      </div>
                      <p className="italic text-slate-800 font-medium">
                        Summer Course: Contestations of Citizenship in Times of Global Democratic Backsliding
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section: PROFESSIONAL EXPERIENCE */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2.5">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      PROFESSIONAL EXPERIENCE
                    </h2>
                  </div>

                  <div className="space-y-3 text-[11.5px]">
                    {/* Lawyer - Legal Capitol */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Lawyer — Legal Capitol, Lahore, Pakistan</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Jul 17, 2026 – Present</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-700 text-[11px]">
                        <li>
                          Independently handle civil suits before Pakistan&apos;s District Courts, covering disputes concerning corporeal and incorporeal property, business, and intellectual property matters.
                        </li>
                        <li>
                          Draft plaints, written statements, legal notices, and petitions; conduct judgment research; represent and assist clients across pre-trial and trial stages.
                        </li>
                        <li>
                          Advise clients on trademark, contract, and property matters, applying research from academic work on AI and legal technology to practice.
                        </li>
                      </ul>
                    </div>

                    {/* Enrolled Advocate */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Enrolled Advocate — Punjab Bar Council, Pakistan</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">September 2026 – Present</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-700 text-[11px]">
                        <li>
                          Licensed Advocate with litigation focus on civil suits, criminal matters, family disputes, and technology-related cases.
                        </li>
                        <li>
                          Courtroom advocacy across Subordinate and District Courts of Punjab.
                        </li>
                      </ul>
                    </div>

                    {/* Research Reviewer */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Research Reviewer — Access to Justice in Eastern Europe, Kyiv, Ukraine</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Jun 2025 – Present</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-700 text-[11px]">
                        <li>
                          Completed 7 double-blind peer reviews of manuscripts on AI and law, evaluating methodological rigor, currency of literature, and doctrinal coherence.
                        </li>
                        <li>
                          Focus areas: AI in courts, criminal justice, and regulatory frameworks.
                        </li>
                      </ul>
                    </div>

                    {/* Bard College Internship */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900">
                        <span>Legal &amp; Research Intern — Bard College, Annandale-on-Hudson, NY</span>
                        <span className="font-normal font-mono text-[11px] text-slate-600">Jan 2023 – Apr 2023</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-700 text-[11px]">
                        <li>
                          Conducted comparative legal research on human rights, economic democracy, and international legal frameworks.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: PUBLICATIONS */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      PUBLICATIONS
                    </h2>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-slate-800 leading-relaxed">
                    <li>
                      Ashraf, M.Q. (2025). &quot;Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities.&quot; <em>Access to Justice in Eastern Europe</em>, 8(Spec), 98–118.
                    </li>
                  </ul>
                </div>
              </div>

              {/* PAGE 2 */}
              <div className="bg-white text-slate-900 p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl border border-slate-200 print:rounded-none print:shadow-none print:border-none print:p-8 min-h-[950px] relative font-sans text-xs page-break">
                {/* Continuing Conferences & Presentations */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      CONFERENCES &amp; PRESENTATIONS
                    </h2>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-slate-800 space-y-1.5">
                    <li>
                      &quot;Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities&quot; — International Student Scientific Conference &quot;Human vs AI,&quot; European Humanities University, Jun 2025.
                    </li>
                    <li>
                      &quot;Fortifying Peace and Security in Europe: Strengthening International Legal Frameworks&quot; — International Student Conference &quot;Europe 2024,&quot; Vilnius. May 2024.
                    </li>
                    <li>
                      &quot;Beyond Impasse: Reimagining International Justice in the Wake of the Ukraine War&quot; — International Scientific Conference &quot;Europe After War,&quot; Vilnius. Feb 2024.
                    </li>
                    <li>
                      &quot;Addressing the Urgent Global Challenge: Forced Displacement and a Call for International Solidarity&quot; — Summit on Mobility and Immobility, Kakuma Refugee Camp, Kenya. Oct 2023.
                    </li>
                    <li>
                      Paper presentation — Conference on Aviation and Space Law, Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University, Bangladesh. Sep 2023.
                    </li>
                  </ul>
                </div>

                {/* CERTIFICATIONS & TRAINING */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      CERTIFICATIONS &amp; TRAINING
                    </h2>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-slate-800 space-y-1">
                    <li>Bar Vocational Course — Lahore Bar Association, in collaboration with Punjab Bar Council (May 2026).</li>
                    <li>Human Rights Certificate — Open Society University Network (Aug 2024).</li>
                    <li>Public Finance &amp; Economic Policy Workshop — Bard College / Economic Democracy Initiative / OSUN (2024).</li>
                  </ul>
                </div>

                {/* SKILLS */}
                <div className="mb-5">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      SKILLS
                    </h2>
                  </div>
                  <p className="text-slate-800 text-[11px] leading-relaxed">
                    Civil litigation and drafting (plaints, written statements, petitions) | Legal research and analysis | Intellectual property and technology law | Academic peer review | Cross-jurisdictional legal research (Pakistan, Bangladesh, EU, US) | Time management and multitasking
                  </p>
                </div>

                {/* VOLUNTEERING */}
                <div className="mb-8">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      VOLUNTEERING
                    </h2>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-slate-900 text-[11.5px]">
                      <span>BRAC University Law Society — Dhaka, Bangladesh</span>
                      <span className="font-normal font-mono text-[11px] text-slate-600">Aug 2022 – Oct 2025</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-0.5 text-[11px] text-slate-700">
                      <li>
                        Assisted law faculty in organizing academic seminars and workshops; supported event coordination and participant engagement.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* DECLARATION */}
                <div className="pt-4 border-t border-slate-300">
                  <div className="border-b border-slate-800 pb-0.5 mb-2">
                    <h2 className="text-xs uppercase font-bold text-slate-900 tracking-wide">
                      DECLARATION
                    </h2>
                  </div>
                  <p className="text-slate-800 text-[11px] leading-relaxed mb-4">
                    I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.
                  </p>

                  <div className="pt-2">
                    <div className="text-slate-800 font-serif italic text-lg select-none mb-1 font-semibold">
                      Muhammad Qadeer Ashraf
                    </div>
                    <p className="font-bold text-slate-900 text-[11.5px]">Muhammad Qadeer Ashraf</p>
                    <p className="text-slate-700 text-[11px]">Lahore, Pakistan — September 30, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
                <span className="text-amber-400 font-bold">VERBATIM CV TEXT FORMAT</span>
                <button
                  onClick={handleDownloadTextCV}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded"
                >
                  Download .TXT
                </button>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed select-all overflow-x-auto text-[11px]">
                {cvPlainText}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
