
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Briefcase, Zap, Code, Users } from 'lucide-react';

const skills = [
  "Kotlin Android App Developer",
  "UI/UX Enthusiast"
];

const techStack = [
  "Kotlin", "Jetpack Compose", "Android Studio", "Firebase", "REST APIs",
  "Python Automation", "Git & GitHub", "C", "C++", "Linux", "MySQL", "Oracle SQL", "RoomDB"
];

const HomePageContent: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col text-foreground">
      {/* Top Section (Personal Introduction) */}
      <div className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-6 rounded-t-xl -mx-4 -mt-2">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
            <AvatarImage src="https://placehold.co/100x100.png" alt="Sumant Mourya" data-ai-hint="profile avatar" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-neutral-100 mb-1">
            Hi! I'm Sumant Mourya 👋
          </h1>
          <p className="text-lg text-accent font-semibold mb-3 h-6">
            {skills[currentSkillIndex]}
          </p>
          <p className="text-sm text-neutral-300 mb-6 max-w-md">
            Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. 
            With a strong foundation in Android architecture components, modern UI design, and automation scripting, 
            I build apps that are both functional and delightful to use.
          </p>
          {/* "My Tech Stack" label and badges removed from here */}
        </div>
      </div>

      {/* Second Section (Experience & Contact) */}
      <div className="p-2 pt-6 flex-grow">
        <h2 className="text-xl font-semibold text-primary mb-4 text-center">Highlights & Skills</h2>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold text-accent mb-3 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center items-center gap-2 px-2">
            {techStack.map((skill) => (
              <Badge key={skill} variant="outline" className="shadow-sm px-3 py-1 text-xs border-primary/50 text-foreground hover:bg-primary/10">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg bg-card">
            <CardHeader className="p-3 pb-1">
              <CardTitle className="text-sm font-semibold text-center flex flex-col items-center gap-1">
                <Briefcase size={20} className="text-primary" />
                Android Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 text-center">
              <p className="text-2xl font-bold text-accent">10+</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-card">
            <CardHeader className="p-3 pb-1">
              <CardTitle className="text-sm font-semibold text-center flex flex-col items-center gap-1">
                <Zap size={20} className="text-primary" />
                Learning Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 text-center">
              <p className="text-sm font-medium text-accent">Jetpack Compose</p>
              <p className="text-xs text-muted-foreground">& Automation</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-card">
            <CardHeader className="p-3 pb-1">
               <CardTitle className="text-sm font-semibold text-center flex flex-col items-center gap-1">
                <Users size={20} className="text-primary" />
                 SAP Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 text-center">
              <p className="text-2xl font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground">Months</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-card">
            <CardHeader className="p-3 pb-1">
              <CardTitle className="text-sm font-semibold text-center flex flex-col items-center gap-1">
                <Code size={20} className="text-primary" />
                Automation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 text-center">
              <p className="text-sm font-medium text-accent">Python Tools</p>
              <p className="text-xs text-muted-foreground">Scripting</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <a href="mailto:SumantKushwaha.dev@gmail.com" className="flex items-center p-3 bg-card rounded-lg shadow-md hover:bg-accent/10 transition-colors">
            <Mail size={20} className="text-accent mr-3" />
            <span className="text-sm text-foreground">SumantKushwaha.dev@gmail.com</span>
          </a>
          <a href="tel:+919939824083" className="flex items-center p-3 bg-card rounded-lg shadow-md hover:bg-accent/10 transition-colors">
            <Phone size={20} className="text-accent mr-3" />
            <span className="text-sm text-foreground">+91 9939824083</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;

