
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
    title: 'Portfolio Website (This App)',
    description: 'An interactive mobile-first portfolio built with Next.js, React, ShadCN UI, and Tailwind CSS, showcasing my skills and projects.',
    link: '#home', // Link to the home page of this app
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI'],
  },
  {
    id: 2,
    title: 'Android Task Manager',
    description: 'A native Android application developed using Kotlin and Jetpack Compose for managing daily tasks and to-do lists with Firebase integration.',
    link: 'https://github.com/SumantMourya/TaskManager', // Example GitHub link
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android'],
  },
  {
    id: 3,
    title: 'Python Automation Scripts',
    description: 'A collection of Python scripts for automating various tasks like file organization, data scraping, and system administration.',
    tags: ['Python', 'Scripting', 'Automation'],
  },
  {
    id: 4,
    title: 'E-commerce UI Mockup',
    description: 'A UI/UX design concept for an e-commerce mobile application, focusing on user-friendly navigation and clean aesthetics. Designed in Figma.',
    tags: ['UI/UX Design', 'Figma', 'Mobile App'],
  },
  {
    id: 5,
    title: 'Linux CLI Utilities',
    description: 'Custom command-line tools and utilities developed for Linux environments to enhance productivity and system management.',
    link: 'https://github.com/SumantMourya/LinuxUtilities', // Example GitHub link
    tags: ['Linux', 'Bash', 'CLI', 'System Admin'],
  },
];

