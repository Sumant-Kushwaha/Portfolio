
export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  skillsTitle: string;
  skills: string[];
  date: string;
  location: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
}

export interface ExperiencePageData {
  pageTitle: string;
  experienceEntries: ExperienceEntry[];
}

export const experiencePageContent: ExperiencePageData = {
  pageTitle: "My Experience",
  experienceEntries: [
    {
      id: "itc",
      role: "Quality Control - SAP",
      company: "ITC Limited",
      skillsTitle: "Skills & Technologies:",
      skills: ["SAP ERP", "Quality Control Procedures", "Data Analysis", "Reporting"],
      date: "June 2023 - August 2023",
      location: "Haridwar, Uttarakhand, India",
      responsibilitiesTitle: "Responsibilities:",
      responsibilities: [
        "Assisted in monitoring and maintaining quality standards for products using SAP QM module.",
        "Participated in quality checks and inspection processes.",
        "Helped in documenting quality control data and generating reports.",
        "Gained hands-on experience with SAP systems in a manufacturing environment.",
        "Collaborated with the quality assurance team to identify areas for improvement.",
      ],
    },
  ],
};
