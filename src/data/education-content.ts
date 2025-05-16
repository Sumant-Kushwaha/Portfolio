
export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  date: string;
  location: string;
  details?: string[];
}

export interface EducationPageData {
  pageTitle: string;
  iconName: 'GraduationCap'; // Or other relevant icon
  educationEntries: EducationEntry[];
}

export const educationPageContent: EducationPageData = {
  pageTitle: "My Education",
  iconName: 'GraduationCap',
  educationEntries: [
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "HEC Group of Institutions, Sri Dev Suman Uttarakhand University",
      date: "2022 - 2025 (Expected)",
      location: "Uttarakhand, India",
      details: [
        "Currently in 6th Semester.",
        "Focusing on software development, database management, and web technologies.",
        "Key Skills: C, C++, Kotlin, HTML, CSS, SQL, .NET, Microsoft Office 365.",
      ],
    },
    {
      id: "secondary",
      degree: "Secondary Education",
      institution: "Dhoom Singh Memorial Public School",
      date: "Year of Completion: 2022",
      location: "Sitapur, Jawalapur, Haridwar",
    },
  ],
};
