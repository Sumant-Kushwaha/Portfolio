
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Briefcase, Zap, Code, Users, Palette, Brain, Lightbulb } from 'lucide-react'; 

const techStack = [
  "Kotlin", "Jetpack Compose", "Android Studio", "Firebase", "REST APIs",
  "Python Automation", "Git & GitHub", "C", "C++", "Linux", "MySQL", "Oracle SQL", "RoomDB"
];

const HomePageContent: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col text-foreground space-y-2.5">
      {/* Top Section (Personal Introduction) */}
      <Card className="shadow-lg mb-2.5">
        <CardContent className="p-3">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 mb-2 border-2 border-primary">
              <AvatarImage src="https://placehold.co/128x128.png" alt="Sumant Mourya" data-ai-hint="profile avatar" />
              <AvatarFallback className="text-2xl">SM</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              Hi! I'm Sumant Mourya 👋
            </h1>
            <div className="flex items-center justify-center text-accent font-semibold mb-2 h-12 text-3xl">
              <span>{techStack[currentSkillIndex]}</span>
            </div>
            <p className="text-base text-muted-foreground mb-3 max-w-md">
              Passionate about crafting clean, efficient, and beautiful Android apps using Kotlin and Jetpack Compose. 
              With a strong foundation in Android architecture components, modern UI design, and automation scripting, 
              I build apps that are both functional and delightful to use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Second Section Wrapped in Cards */}
      <div className="flex-grow space-y-2.5">
        
        <Card className="shadow-lg mb-2.5">
          <CardHeader className="p-3">
            <CardTitle className="text-2xl font-semibold text-primary text-center">Highlights & Skills</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className="mb-1">
              <h3 className="text-lg font-semibold text-accent mb-2 text-center">Core Technologies</h3>
              <div className="flex flex-wrap justify-center items-center gap-1.5 px-1">
                {techStack.map((skill) => (
                  <Badge key={skill} variant="outline" className="shadow-sm px-2.5 py-1 text-lg border-primary/50 text-foreground hover:bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-2.5">
          <CardContent className="p-2"> 
            <div className="grid grid-cols-2 gap-2"> 
              <Card className="shadow-md bg-card"> 
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-lg font-semibold text-center flex flex-col items-center gap-1"> 
                    <Briefcase size={22} className="text-primary" /> 
                    Android Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-3xl font-bold text-accent">10+</p> 
                  <p className="text-base text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-lg font-semibold text-center flex flex-col items-center gap-1">
                    <Zap size={22} className="text-primary" />
                    Learning Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xl font-medium text-accent">Jetpack Compose</p> 
                  <p className="text-base text-muted-foreground">& Automation</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                   <CardTitle className="text-lg font-semibold text-center flex flex-col items-center gap-1">
                    <Users size={22} className="text-primary" />
                     SAP Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-3xl font-bold text-accent">8</p>
                  <p className="text-base text-muted-foreground">Months</p>
                </CardContent>
              </Card>
              <Card className="shadow-md bg-card">
                <CardHeader className="p-2 pb-1">
                  <CardTitle className="text-lg font-semibold text-center flex flex-col items-center gap-1">
                    <Code size={22} className="text-primary" />
                    Automation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 pt-0 text-center">
                  <p className="text-xl font-medium text-accent">Python Tools</p>
                  <p className="text-base text-muted-foreground">Scripting</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg mb-2.5">
          <CardHeader className="p-3">
            <CardTitle className="text-2xl font-semibold text-primary text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className="space-y-1.5"> 
              <a href="mailto:SumantKushwaha.dev@gmail.com" className="flex items-center p-1.5 rounded-lg hover:bg-accent/10 transition-colors">
                <Mail size={22} className="text-accent mr-2.5" /> 
                <span className="text-xl text-foreground">SumantKushwaha.dev@gmail.com</span>
              </a>
              <a href="tel:+919939824083" className="flex items-center p-1.5 rounded-lg hover:bg-accent/10 transition-colors">
                <Phone size={22} className="text-accent mr-2.5" />
                <span className="text-xl text-foreground">+91 9939824083</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePageContent;
