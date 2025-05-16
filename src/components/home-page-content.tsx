
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
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Sumant Mourya" data-ai-hint="profile avatar" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Hi! I'm Sumant Mourya 👋
            </h1>
            <div className="flex items-center justify-center text-lg text-accent font-semibold mb-3 h-6">
              {currentSkillIndex === 0 && <Code size={20} className="mr-2" />}
              {currentSkillIndex === 1 && <Palette size={20} className="mr-2" />}
              <span>{skills[currentSkillIndex]}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. 
              With a strong foundation in Android architecture components, modern UI design, and automation scripting, 
              I build apps that are both functional and delightful to use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Second Section Wrapped in Cards */}
      <div className="flex-grow"> {/* Removed p-2 pt-0, Card will handle padding */}
        
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary text-center">Highlights & Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2"> {/* Reduced mb-6 to mb-2 as CardContent has padding */}
              <h3 className="text-md font-semibold text-accent mb-3 text-center">Core Technologies</h3>
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
          <CardContent className="p-4 sm:p-6"> {/* Ensure padding for the grid card */}
            <div className="grid grid-cols-2 gap-4">
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
          </CardContent>
        </Card>
        
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a href="mailto:SumantKushwaha.dev@gmail.com" className="flex items-center p-3 rounded-lg hover:bg-accent/10 transition-colors">
                <Mail size={20} className="text-accent mr-3" />
                <span className="text-sm text-foreground">SumantKushwaha.dev@gmail.com</span>
              </a>
              <a href="tel:+919939824083" className="flex items-center p-3 rounded-lg hover:bg-accent/10 transition-colors">
                <Phone size={20} className="text-accent mr-3" />
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
