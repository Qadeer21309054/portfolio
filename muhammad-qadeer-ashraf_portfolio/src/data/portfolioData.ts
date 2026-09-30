import {
  Publication,
  LegalPracticeArea,
} from '../types/portfolio';

export interface EventCategory {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  eventKey: string;
  categoryKey: string;
  categoryName: string;
  expectedFilename: string;
  altHints: string[];
  image?: string;
  title: string;
  program: string;
  location: string;
  year: string;
  description: string;
  badge: string;
  institution: string;
  role: string;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'all',
    name: 'All Categories',
    shortName: 'All Categories',
    icon: 'Layers',
    description: 'Comprehensive photographic documentation across international summits, research fellowships, and the 4-year law degree.',
  },
  {
    id: 'summits_conferences',
    name: 'International Summits & Conferences',
    shortName: 'International Summits',
    icon: 'Globe',
    description: 'Global summits including Kakuma Refugee Camp Summit (Kenya) and Bangladesh Space Law Conference.',
  },
  {
    id: 'academic_exchanges',
    name: 'Academic Exchanges & Fellowships',
    shortName: 'Exchanges & Fellowships',
    icon: 'GraduationCap',
    description: 'Merit-based exchange at European Humanities University (Vilnius).',
  },
  {
    id: 'doctoral_summer_schools',
    name: 'Doctoral & Summer Schools',
    shortName: 'Doctoral Schools',
    icon: 'BookOpen',
    description: 'Advanced legal research at University of Copenhagen (iCourts) and Central European University (Budapest).',
  },
  {
    id: 'law_degree',
    name: '4-Year Law Degree & Graduation',
    shortName: '4-Year Law Degree',
    icon: 'Award',
    description: 'BRAC University 4-Year Bachelor of Laws, LL.B. (Hons.) High Distinction.',
  },
];

export const PERSONAL_INFO = {
  name: 'Muhammad Qadeer Ashraf',
  title: 'Advocate & Legal Scholar',
  subtitle: 'Enrolled Advocate at Punjab Bar Council | Lawyer at Legal Capitol | Research Reviewer',
  profilePhoto: '/images/mqa_profile.jpg',
  email: 'muhammadqadeer.ashraf20@gmail.com',
  altEmail: 'LAZZHGHEE@gmail.com',
  phone: '+92 324 4230015',
  location: 'Lahore, Pakistan',
  address: 'Lahore, Pakistan',
  githubUrl: 'https://github.com/Qadeer21309054',
  linkedinUrl: 'https://www.linkedin.com/in/muhammadqadeerashraf08',
  orcidUrl: 'https://orcid.org/0009-0006-8987-1268',
  researchGateUrl: 'https://www.researchgate.net/profile/Muhammad-Ashraf-277',
  barAdmission: 'Enrolled Advocate at Punjab Bar Council from September 2026',
  firm: 'Legal Capitol, Lahore, Pakistan',
  degreeSummary: '4-Year Bachelor of Laws, LL.B. (Hons.) with High Distinction (CGPA 3.72/4.00)',
  profileStatement:
    "Pakistani lawyer and researcher with an intensive 4-year Bachelor of Laws, LL.B. (Hons.), High Distinction (CGPA 3.72/4.00), from BRAC University and active civil litigation practice in Pakistan's District Courts. Focused on intellectual property, technology, and data law, with a peer-reviewed publication and ongoing peer-review work on AI and law. Trained across four countries through fully funded exchange and summer programs.",
  officialOverview:
    'Muhammad Qadeer Ashraf is a practicing lawyer, with a litigation focus on civil suits, criminal matters, family disputes, and technology-related cases. Alongside practice, he maintains a strong research interest in forced migration and the intersection of law and technology, Additionally, he serves as a research reviewer for several peer-reviewed journals.',
  cvSignDate: 'Lahore, Pakistan — September 30, 2026',
};

export const PUBLICATION_DATA: Publication = {
  title: 'Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities',
  journal: 'Access to Justice in Eastern Europe (AJEE)',
  indexing: ['Scopus Indexed', 'ESCI (Web of Science)', 'DOAJ', 'Peer-Reviewed'],
  year: 2025,
  url: 'https://ajee-journal.com/artificial-intelligence-in-courts-and-dispute-resolution-challenges-and-opportunities',
  abstract:
    'Distinguishes assistive AI from autonomous decision-making, arguing only the former is reconcilable with fair-trial principles; highlights need for human oversight and bias safeguards.',
  highlights: [
    'Fair-Trial Guarantees: Reconciles assistive judicial automation with procedural due process and Article 6 ECHR.',
    'Assistive vs Autonomous: Evaluates constitutional limits separating algorithmic assistance from human judicial reason.',
    'Algorithmic Bias Mitigation: Examines systemic data skews in training corpora and safeguards against discriminatory outcomes.',
    'Peer-Reviewed Scopus Citation: Published in AJEE 8(Spec) 98-118, serving as key citation for technology law scholars.',
  ],
  bibtex: `@article{ashraf2025ai,
  title={Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities},
  author={Ashraf, Muhammad Qadeer},
  journal={Access to Justice in Eastern Europe},
  volume={8},
  number={Spec},
  pages={98--118},
  year={2025},
  url={https://ajee-journal.com/artificial-intelligence-in-courts-and-dispute-resolution-challenges-and-opportunities}
}`,
};

export const LEGAL_PRACTICE_AREAS: LegalPracticeArea[] = [
  {
    id: 'civil',
    title: 'Civil Litigation & District Courts Practice',
    category: 'Civil Practice',
    iconName: 'Scale',
    description:
      "Independently handle civil suits before Pakistan's District Courts, covering disputes concerning corporeal and incorporeal property, business, and intellectual property matters.",
    casesHandled: [
      'Independently handling civil suits before District Courts on property, business, and IP matters',
      'Drafting plaints, written statements, legal notices, and stay petitions',
      'Conducting precedent and judgment research to assist and represent clients across pre-trial and trial stages',
      'Advised clients on trademark, contract, and property disputes, applying legal tech and AI research',
    ],
    statutes: [
      'Code of Civil Procedure (CPC), 1908',
      'Contract Act, 1872',
      'Specific Relief Act, 1877',
    ],
  },
  {
    id: 'criminal',
    title: 'Criminal Matters & Trial Advocacy',
    category: 'Litigation',
    iconName: 'ShieldAlert',
    description:
      'Representing clients in trial and appellate courts, managing pre-trial bail applications, quashment petitions, cross-examining prosecution witnesses, and safeguarding procedural rights.',
    casesHandled: [
      'Pre-arrest and post-arrest bail petitions before Session & High Courts',
      'Criminal writ petitions and quashment of FIRs under section 561-A CrPC',
      'Trial defense in statutory offenses, private complaints, and cross-examinations',
      'Forensic evidence evaluation and procedural rights preservation',
    ],
    statutes: [
      'Code of Criminal Procedure (CrPC), 1898',
      'Pakistan Penal Code (PPC), 1860',
      'Qanun-e-Shahadat Order, 1984',
    ],
  },
  {
    id: 'family',
    title: 'Family Disputes & Matrimonial Suits',
    category: 'Family & Guardianship',
    iconName: 'Users',
    description:
      'Providing dedicated legal representation in domestic relations matters, safeguarding the rights of spouses and minors through strategic mediation and courtroom advocacy.',
    casesHandled: [
      'Dissolution of marriage (Khula) and recovery of dower / dowry articles',
      'Child custody disputes, visitation schedules, and guardianship petitions',
      'Maintenance suits for spouses and minors before Family Courts',
      'Succession certificates and inheritance distribution matters',
    ],
    statutes: [
      'Family Courts Act, 1964',
      'Guardians and Wards Act, 1890',
      'Muslim Family Laws Ordinance, 1961',
    ],
  },
  {
    id: 'tech-ip',
    title: 'Intellectual Property, Technology & Data Law',
    category: 'Law & Technology',
    iconName: 'Cpu',
    description:
      'Advising innovators, businesses, and individuals on trademark, contract, and property matters, applying research from academic work on AI and legal technology to practice.',
    casesHandled: [
      'Trademark advisory, registration, opposition, and infringement defense',
      'Algorithmic fairness evaluation and data protection advisory',
      'Drafting technology agreements, commercial contracts, and IP assignments',
      'Research on automated candidate screening, big data ethics, and fundamental rights',
    ],
    statutes: [
      'Trade Marks Ordinance, 2001',
      'Copyright Ordinance, 1962',
      'Prevention of Electronic Crimes Act (PECA), 2016',
    ],
  },
];

export const CV_EDUCATION_DATA = [
  {
    institution: 'BRAC University — Dhaka, Bangladesh',
    period: '2021 – 2025 (4-Year Degree)',
    degree: '4-Year Bachelor of Laws, LL.B. (Hons.) — CGPA 3.72/4.00, High Distinction',
    coursework:
      'Coursework: Intellectual Property Law, Company Law, Property Law and Transfer, Banking and Securities Law, Laws on Foreign Exchange, Investment and Anti-Money Laundering, Evidence, Criminal Law and Procedure, Moot Court Sessions.',
    deansList: 'Dean’s List across 5 semesters during 4-year undergraduate degree (Fall 2022, Spring 2023, Fall 2023, Fall 2024, Summer 2025).',
  },
  {
    institution: 'European Humanities University — Vilnius, Lithuania',
    period: 'Mar 2024 – Jul 2024',
    degree: 'Semester Exchange (OSUN-funded) — Local grade 9.8/10 (ECTS: 30)',
    coursework:
      'Courses: International Public Law, International Criminal Law, International Financial Law, Law of the European Convention on Human Rights, Legal Arguments in Litigation.',
  },
  {
    institution: 'Bard College — Annandale-on-Hudson, New York, USA',
    period: 'Aug 2024 – Dec 2024',
    degree: 'Semester Exchange (OSUN-funded) — GPA 4.00 (Credits: 6, US)',
    coursework:
      'Coursework in Algorithmic Fairness and Ethics of Big Data and AI; research on automated candidate-screening systems and fundamental rights.',
  },
  {
    institution: 'University of Copenhagen — Copenhagen, Denmark',
    period: 'Jun 2026',
    degree: 'iCourts/MOBILE PhD Summer School: Research Methodologies (5 ECTS)',
  },
  {
    institution: 'Central European University — Budapest, Hungary',
    period: 'Jul 2026',
    degree: 'Summer Course: Contestations of Citizenship in Times of Global Democratic Backsliding',
  },
];

export const CV_EXPERIENCE_DATA = [
  {
    role: 'Lawyer',
    firm: 'Legal Capitol, Lahore, Pakistan',
    period: 'Jul 17, 2026 – Present',
    bullets: [
      "Independently handle civil suits before Pakistan's District Courts, covering disputes concerning corporeal and incorporeal property, business, and intellectual property matters.",
      'Draft plaints, written statements, legal notices, and petitions; conduct judgment research; represent and assist clients across pre-trial and trial stages.',
      'Advise clients on trademark, contract, and property matters, applying research from academic work on AI and legal technology to practice.',
    ],
  },
  {
    role: 'Enrolled Advocate',
    firm: 'Punjab Bar Council, Pakistan',
    period: 'September 2026 – Present',
    bullets: [
      'Licensed Advocate with litigation focus on civil suits, criminal matters, family disputes, and technology-related cases.',
      'Conducting courtroom trial advocacy across the Subordinate and District Courts of Punjab.',
    ],
  },
  {
    role: 'Research Reviewer',
    firm: 'Access to Justice in Eastern Europe, Kyiv, Ukraine',
    period: 'Jun 2025 – Present',
    bullets: [
      'Completed 7 double-blind peer reviews of manuscripts on AI and law, evaluating methodological rigor, currency of literature, and doctrinal coherence.',
      'Focus areas: AI in courts, criminal justice, and regulatory frameworks.',
    ],
  },
  {
    role: 'Legal & Research Intern',
    firm: 'Bard College, Annandale-on-Hudson, New York, USA',
    period: 'January 2023 – April 2023',
    bullets: [
      'Conducted comparative legal research on human rights, economic democracy, and international legal frameworks under faculty supervision.',
      'Assisted in institutional research and cross-jurisdictional policy analysis.',
    ],
  },
];

export const CV_CONFERENCES_DATA = [
  {
    title: '"Artificial Intelligence in Courts and Dispute Resolution: Challenges and Opportunities"',
    event: 'International Student Scientific Conference "Human vs AI," European Humanities University',
    date: 'Jun 2025',
  },
  {
    title: '"Fortifying Peace and Security in Europe: Strengthening International Legal Frameworks"',
    event: 'International Student Conference "Europe 2024," Vilnius',
    date: 'May 2024',
  },
  {
    title: '"Beyond Impasse: Reimagining International Justice in the Wake of the Ukraine War"',
    event: 'International Scientific Conference "Europe After War," Vilnius',
    date: 'Feb 2024',
  },
  {
    title: '"Addressing the Urgent Global Challenge: Forced Displacement and a Call for International Solidarity"',
    event: 'Summit on Mobility and Immobility, Kakuma Refugee Camp, Kenya',
    date: 'Oct 2023',
  },
  {
    title: 'Paper presentation',
    event: 'Conference on Aviation and Space Law, Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University, Bangladesh',
    date: 'Sep 2023',
  },
];

export const CV_CERTIFICATIONS_DATA = [
  'Bar Vocational Course — Lahore Bar Association, in collaboration with Punjab Bar Council (May 2026).',
  'Human Rights Certificate — Open Society University Network (Aug 2024).',
  'Public Finance & Economic Policy Workshop — Bard College / Economic Democracy Initiative / OSUN (2024).',
];

export const CV_SKILLS_DATA =
  'Civil litigation and drafting (plaints, written statements, petitions) | Legal research and analysis | Intellectual property and technology law | Academic peer review | Cross-jurisdictional legal research (Pakistan, Bangladesh, EU, US) | Time management and multitasking';

export const CV_VOLUNTEERING_DATA = [
  {
    organization: 'BRAC University Law Society — Dhaka, Bangladesh',
    period: 'Aug 2022 – Oct 2025',
    description:
      'Assisted law faculty in organizing academic seminars and workshops; supported event coordination and participant engagement.',
  },
];

// All artificial / default photos removed. Users can upload their own authentic photos for each category!
export const GALLERY_SLIDES: GalleryPhoto[] = [
  {
    id: 'kakuma',
    eventKey: 'kakuma',
    categoryKey: 'summits_conferences',
    categoryName: 'International Summits & Conferences',
    expectedFilename: 'kakuma_refugee_summit.jpg',
    altHints: ['kakuma', 'refugee', 'kenya', 'summit', 'displacement', 'mobility'],
    title: 'Summit on Mobility and Immobility',
    program: 'Addressing Forced Displacement & International Solidarity',
    location: 'Kakuma Refugee Camp, Kenya',
    year: 'October 2023',
    badge: 'International Summit',
    institution: 'Kakuma Humanitarian Academic Summit',
    role: 'Selected Paper Presenter & Legal Delegate',
    description:
      'Presented conference paper: "Addressing the Urgent Global Challenge: Forced Displacement and a Call for International Solidarity". Engaged in on-the-ground transnational dialogue with international human rights practitioners and community leaders on refugee protection.',
  },
  {
    id: 'space-law-conference',
    eventKey: 'space_law',
    categoryKey: 'summits_conferences',
    categoryName: 'International Summits & Conferences',
    expectedFilename: 'bangladesh_space_law_conference.jpg',
    altHints: ['space', 'aviation', 'bsmraau', 'conference', 'bangladesh', 'aerospace', 'satellite'],
    title: 'Conference on Aviation and Space Law',
    program: 'Scholarly Paper Presentation on Air & Space Jurisprudence',
    location: 'Dhaka, Bangladesh',
    year: 'September 2023',
    badge: 'Aviation & Space Law',
    institution: 'Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University (BSMRAAU)',
    role: 'Paper Presenter & Conference Delegate',
    description:
      'Paper presentation on international aviation law, space treaties, and orbital jurisdiction at the specialized Conference on Aviation and Space Law hosted by Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University (BSMRAAU).',
  },
  {
    id: 'vilnius-moot',
    eventKey: 'vilnius',
    categoryKey: 'academic_exchanges',
    categoryName: 'Academic Exchanges & Fellowships',
    expectedFilename: 'vilnius_moot_court.jpg',
    altHints: ['vilnius', 'lithuania', 'ehu', 'moot', 'echr', 'humanities'],
    title: 'European Humanities University Semester Exchange',
    program: 'ECHR Law & International Student Scientific Conferences',
    location: 'Vilnius, Lithuania',
    year: 'March – July 2024',
    badge: 'Grade 9.8/10 (30 ECTS)',
    institution: 'European Humanities University (EHU)',
    role: 'Exchange Scholar & Conference Speaker',
    description:
      'Conferred 9.8/10 across International Public Law, International Criminal Law, and Law of the European Convention on Human Rights (ECHR). Presented scholarly papers at "Europe 2024" and "Human vs AI" international scientific conferences.',
  },
  {
    id: 'copenhagen',
    eventKey: 'copenhagen',
    categoryKey: 'doctoral_summer_schools',
    categoryName: 'Doctoral & Summer Schools',
    expectedFilename: 'copenhagen_research_school.jpg',
    altHints: ['copenhagen', 'denmark', 'icourts', 'mobile', 'phd', 'methodology'],
    title: 'iCourts / MOBILE PhD Summer School',
    program: 'Advanced Legal Research Methodologies (5 ECTS)',
    location: 'University of Copenhagen, Denmark',
    year: 'June 2026',
    badge: 'PhD Summer School (5 ECTS)',
    institution: 'Faculty of Law, University of Copenhagen',
    role: 'Selected PhD Summer School Participant',
    description:
      'Completed intensive advanced training in empirical legal research methodologies, judicial decision data analytics, and the jurisprudence of international courts at the world-renowned iCourts Centre of Excellence.',
  },
  {
    id: 'ceu-budapest',
    eventKey: 'ceu',
    categoryKey: 'doctoral_summer_schools',
    categoryName: 'Doctoral & Summer Schools',
    expectedFilename: 'ceu_budapest_seminar.jpg',
    altHints: ['ceu', 'budapest', 'hungary', 'citizenship', 'democratic'],
    title: 'Central European University (CEU) Summer Course',
    program: 'Contestations of Citizenship in Times of Global Democratic Backsliding',
    location: 'Budapest, Hungary',
    year: 'July 2026',
    badge: 'CEU Summer University',
    institution: 'Central European University',
    role: 'Selected Summer University Scholar',
    description:
      'Participated in high-level academic seminars analyzing citizenship contestation, democratic erosion, constitutional safeguards, and rule-of-law resilience in contemporary European and transitioning democracies.',
  },
  {
    id: 'scholar-portrait',
    eventKey: 'brac',
    categoryKey: 'law_degree',
    categoryName: '4-Year Law Degree & Graduation',
    expectedFilename: 'brac_university_graduation.jpg',
    altHints: ['brac', 'graduation', 'portrait', 'profile', 'degree', 'lawyer', 'qadeer', 'llb'],
    title: '4-Year Bachelor of Laws, LL.B. (Hons.) — BRAC University',
    program: '4-Year Undergraduate Law Degree (High Distinction, CGPA 3.72/4.00)',
    location: 'Dhaka, Bangladesh',
    year: '2021 – 2025 (4-Year Degree)',
    badge: '4-Year LL.B. (Hons.)',
    institution: 'School of Law, BRAC University',
    role: '4-Year Law Graduate (High Distinction)',
    description:
      'Graduated with High Distinction from the intensive 4-year LL.B. (Hons.) curriculum (2021–2025) with CGPA 3.72/4.00. Conferred Dean’s List honors across 5 academic terms. Active participant in moot court sessions, law society coordination, and legal aid clinics.',
  },
];
