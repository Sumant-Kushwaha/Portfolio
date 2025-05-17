
export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website (This App)",
    description:
      "An interactive mobile-first portfolio built with Next.js, React, ShadCN UI, and Tailwind CSS, showcasing my skills and projects.",
    link: "https://sumantportf.netlify.app/", // Link to the home page of this app
    tags: ["Next.js", "React", "Tailwind CSS", "ShadCN UI"],
  },
  {
    id: 2,
    title: "Call log App",
    description:
      "A native Android application developed using Kotlin and Jetpack Compose for managing call logs and shows us in formatted way.",
    link: "https://github.com/Sumant-Kushwaha/CallLog", // Example GitHub link
    tags: ["Kotlin", "Android"],
  },
  {
    id: 3,
    title: "Notey (Note Taking application)",
    description:
      "A Native android application,used to create daily life notes to remember things.",
      link:"https://github.com/Sumant-Kushwaha/Notey",
    tags: ["Kotlin", "Jetpack Compose", "MVVM","Android","Room DB"],
  },
];

