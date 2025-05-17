
export interface HomeStat {
  id: string;
  iconName: 'Briefcase' | 'Zap' | 'Users' | 'Code'; // Literal types for specific icons
  title: string;
  value: string;
  subValue: string;
}

export interface HomePageData {
  greeting: string;
  dynamicSkills: string[];
  avatarImageSrc: string;
  avatarAltText: string;
  avatarDataAiHint: string;
  avatarFallback: string;
  introParagraph: string;
  highlightsTitle: string;
  coreTechTitle: string;
  coreTechnologies: string[];
  stats: HomeStat[];
  getInTouchTitle: string;
  email: string;
  phone: string;
  resumeDownloadLink: string; // Added for resume download
}

const techStack: string[] = [
  "Kotlin", "Jetpack Compose", "Android Studio", "Firebase", "REST APIs",
  "Python Automation", "Git & GitHub", "C", "C++", "Linux", "MySQL", "Oracle SQL", "RoomDB"
];

export const homePageContent: HomePageData = {
  greeting: "Hi! I'm Sumant Mourya 👋",
  dynamicSkills: techStack,
  avatarImageSrc: "https://placehold.co/128x128.png",
  avatarAltText: "Sumant Mourya",
  avatarDataAiHint: "profile avatar",
  avatarFallback: "SM",
  introParagraph:
    "Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. With a strong foundation in Android architecture components, modern UI design, and automation scripting, I build apps that are both functional and delightful to use.",
  highlightsTitle: "Highlights & Skills",
  coreTechTitle: "Core Technologies",
  coreTechnologies: techStack,
  stats: [
    { id: 'projects', iconName: 'Briefcase', title: 'Android Projects', value: '10+', subValue: 'Completed' },
    { id: 'learning', iconName: 'Zap', title: 'Learning Focus', value: 'Jetpack Compose', subValue: '& Automation' },
    { id: 'sap', iconName: 'Users', title: 'SAP Experience', value: '8', subValue: 'Months' },
    { id: 'automation', iconName: 'Code', title: 'Automation', value: 'Python Tools', subValue: 'Scripting' },
  ],
  getInTouchTitle: "Get in Touch",
  email: "SumantKushwaha.dev@gmail.com",
  phone: "+91 9939824083",
  resumeDownloadLink: "/resume-placeholder.pdf", // Example link
};
