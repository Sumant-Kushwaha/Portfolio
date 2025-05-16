
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Briefcase, Zap, Code, Users, Palette } from 'lucide-react'; // Added Palette for UI/UX

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
      <Card className="shadow-lg mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-2 border-2 border-primary">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Sumant Mourya" data-ai-hint="profile avatar" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Hi! I'm Sumant Mourya 👋
            </h1>
            <div className="flex items-center justify-center text-lg text-accent font-semibold mb-2 h-6">
              {currentSkillIndex === 0 && <Code size={20} className="mr-2" />}
              {currentSkillIndex === 1 && <Palette size={20} className="mr-2" />}
              <span>{skills[currentSkillIndex]}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. 
              With a strong foundation in Android architecture components, modern UI design, and automation scripting, 
              I build apps that are both functional and delightful to use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Second Section Wrapped in Cards */}
      <div className="flex-grow">
        
        <Card className="shadow-lg mb-6">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold text-primary text-center">Highlights & Skills</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="mb-2">
              <h3 className="text-md font-semibold text-accent mb-2 text-center">Core Technologies</h3>
              <div className="flex flex-wrap justify-center items-center gap-2 px-2">
                {techStack.map((skill) => (
                  <Badge key={skill} variant="outline" className="shadow-sm px-3 py-1 text-xs border-primary/50 text-foreground hover:bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-6">
          <CardContent className="p-3"> {/* Reduced padding for the grid card */}
            <div className="grid grid-cols-2 gap-2"> {/* Reduced gap */}
              <Card className="shadow-md bg-card"> {/* Reduced shadow for inner cards */}
                <CardHeader className="p-2 pb-0.5">
                  <CardTitle className="text-xs font-semibold text-center flex flex-col items-center gap-0.5"> {/* Smaller text/gap */}
                    <Briefcase size={18} className="text-primary" /> {/* Smaller icon */}
                    Android Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xl font-bold text-accent">10+</p> {/* Slightly smaller text */}
                  <p className="text-xs text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-0.5">
                  <CardTitle className="text-xs font-semibold text-center flex flex-col items-center gap-0.5">
                    <Zap size={18} className="text-primary" />
                    Learning Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xs font-medium text-accent">Jetpack Compose</p> {/* Smaller text */}
                  <p className="text-xs text-muted-foreground">& Automation</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-0.5">
                   <CardTitle className="text-xs font-semibold text-center flex flex-col items-center gap-0.5">
                    <Users size={18} className="text-primary" />
                     SAP Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xl font-bold text-accent">8</p>
                  <p className="text-xs text-muted-foreground">Months</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-0.5">
                  <CardTitle className="text-xs font-semibold text-center flex flex-col items-center gap-0.5">
                    <Code size={18} className="text-primary" />
                    Automation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xs font-medium text-accent">Python Tools</p>
                  <p className="text-xs text-muted-foreground">Scripting</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg mb-6">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold text-primary text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-2"> {/* Reduced space */}
              <a href="mailto:SumantKushwaha.dev@gmail.com" className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Mail size={18} className="text-accent mr-2" /> {/* Smaller icon & margin */}
                <span className="text-sm text-foreground">SumantKushwaha.dev@gmail.com</span>
              </a>
              <a href="tel:+919939824083" className="flex items-center p-2 rounded-lg hover:bg-accent/10 transition-colors">
                <Phone size={18} className="text-accent mr-2" />
                <span className="text-sm text-foreground">+91 9939824083</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePageContent;
