
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Briefcase, Zap, Code, Users, Palette } from 'lucide-react'; 

// This 'skills' array will no longer be used for the looping text.
// const skills = [
//   "Kotlin Android App Developer",
//   "UI/UX Enthusiast"
// ];

const techStack = [
  "Kotlin", "Jetpack Compose", "Android Studio", "Firebase", "REST APIs",
  "Python Automation", "Git & GitHub", "C", "C++", "Linux", "MySQL", "Oracle SQL", "RoomDB"
];

const HomePageContent: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Loop through the techStack array
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []); // techStack is stable, so no need to add it to dependencies

  return (
    <div className="flex flex-col text-foreground space-y-2.5">
      {/* Top Section (Personal Introduction) */}
      <Card className="shadow-lg">
        <CardContent className="p-3">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-3 border-2 border-primary">
              <AvatarImage src="https://placehold.co/128x128.png" alt="Sumant Mourya" data-ai-hint="profile avatar" />
              <AvatarFallback className="text-5xl">SM</AvatarFallback>
            </Avatar>
            <h1 className="text-6xl font-bold text-foreground mb-2">
              Hi! I'm Sumant Mourya 👋
            </h1>
            {/* Looping text will now show skills from techStack */}
            <div className="flex items-center justify-center text-4xl text-accent font-semibold mb-3 h-12">
              {/* Icons specific to old skills removed */}
              <span>{techStack[currentSkillIndex]}</span>
            </div>
            <p className="text-2xl text-muted-foreground mb-4 max-w-md">
              Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. 
              With a strong foundation in Android architecture components, modern UI design, and automation scripting, 
              I build apps that are both functional and delightful to use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Second Section Wrapped in Cards */}
      <div className="flex-grow space-y-2.5">
        
        <Card className="shadow-lg">
          <CardHeader className="p-3">
            <CardTitle className="text-4xl font-semibold text-primary text-center">Highlights & Skills</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className="mb-1">
              <h3 className="text-3xl font-semibold text-accent mb-3 text-center">Core Technologies</h3>
              <div className="flex flex-wrap justify-center items-center gap-2 px-1">
                {techStack.map((skill) => (
                  <Badge key={skill} variant="outline" className="shadow-sm px-3 py-1.5 text-lg border-primary/50 text-foreground hover:bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-2"> 
            <div className="grid grid-cols-2 gap-2"> 
              <Card className="shadow-md bg-card"> 
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-2xl font-semibold text-center flex flex-col items-center gap-1"> 
                    <Briefcase size={28} className="text-primary" /> 
                    Android Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-5xl font-bold text-accent">10+</p> 
                  <p className="text-lg text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-2xl font-semibold text-center flex flex-col items-center gap-1">
                    <Zap size={28} className="text-primary" />
                    Learning Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-3xl font-medium text-accent">Jetpack Compose</p> 
                  <p className="text-lg text-muted-foreground">& Automation</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                   <CardTitle className="text-2xl font-semibold text-center flex flex-col items-center gap-1">
                    <Users size={28} className="text-primary" />
                     SAP Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-5xl font-bold text-accent">8</p>
                  <p className="text-lg text-muted-foreground">Months</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-2xl font-semibold text-center flex flex-col items-center gap-1">
                    <Code size={28} className="text-primary" />
                    Automation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-3xl font-medium text-accent">Python Tools</p>
                  <p className="text-lg text-muted-foreground">Scripting</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader className="p-3">
            <CardTitle className="text-4xl font-semibold text-primary text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className="space-y-2"> 
              <a href="mailto:SumantKushwaha.dev@gmail.com" className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Mail size={28} className="text-accent mr-3" /> 
                <span className="text-2xl text-foreground">SumantKushwaha.dev@gmail.com</span>
              </a>
              <a href="tel:+919939824083" className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Phone size={28} className="text-accent mr-3" />
                <span className="text-2xl text-foreground">+91 9939824083</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePageContent;
