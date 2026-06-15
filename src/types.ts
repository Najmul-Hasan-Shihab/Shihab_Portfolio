export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  cgpa: string;
  location: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  technologies: string[];
  details: string[];
  link?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  authors: string;
  journal: string;
  location: string;
  period: string;
  details: string[];
  link?: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Expert", "Proficient", "Intermediate"
  percentage: number; // For progress bar visualization
}

export interface SkillCategory {
  id: string;
  category: string;
  items: SkillItem[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  details: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
