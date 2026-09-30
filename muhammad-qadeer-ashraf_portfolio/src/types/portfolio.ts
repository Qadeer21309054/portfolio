export interface Publication {
  title: string;
  journal: string;
  indexing: string[];
  year: number;
  url: string;
  doi?: string;
  abstract: string;
  highlights: string[];
  bibtex: string;
}

export interface LegalPracticeArea {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  casesHandled: string[];
  statutes: string[];
}

export interface AcademicExperience {
  institution: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  badge: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details: string[];
  status: string;
}

export interface TargetScholarship {
  program: string;
  university: string;
  focus: string;
  alignment: string;
  badge: string;
}
