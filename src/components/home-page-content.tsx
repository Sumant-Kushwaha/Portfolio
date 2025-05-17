
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Briefcase, Zap, Users, Code as CodeIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { homePageContent } from '@/data/home-content';

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase,
  Zap,
  Users,
  Code: CodeIcon,
};

const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION_AFTER_TYPING = 2000;
const PAUSE_DURATION_AFTER_DELETING = 500;

const HomePageContent: React.FC = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentSkill = homePageContent.dynamicSkills[skillIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) { // Typing
      if (charIndex < currentSkill.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentSkill.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else { // Finished typing current word
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION_AFTER_TYPING);
      }
    } else { // Deleting
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentSkill.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, DELETING_SPEED);
      } else { // Finished deleting current word
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setSkillIndex((prev) => (prev + 1) % homePageContent.dynamicSkills.length);
        }, PAUSE_DURATION_AFTER_DELETING);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, skillIndex, homePageContent.dynamicSkills]);


  return (
    <div className="flex flex-col text-foreground space-y-2.5">
      <Card className="shadow-lg">
        <CardContent className="p-3">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 mb-2 border-2 border-primary">
              <AvatarImage 
                src={homePageContent.avatarImageSrc} 
                alt={homePageContent.avatarAltText} 
                data-ai-hint={homePageContent.avatarDataAiHint} 
              />
              <AvatarFallback className="text-2xl">{homePageContent.avatarFallback}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              {homePageContent.greeting}
            </h1>
            <div className="flex items-center justify-center text-accent font-semibold mb-2 h-12 text-3xl">
              <span>{displayedText}</span>
              <span className="animate-blink ml-0.5">|</span>
            </div>
            <p className="text-base text-muted-foreground mb-3 max-w-md">
              {homePageContent.introParagraph}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
          <CardHeader className="p-2">
            <CardTitle className="text-2xl font-semibold text-primary text-center">{homePageContent.highlightsTitle}</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="mb-1">
              <h3 className="text-lg font-semibold text-accent mb-2 text-center">{homePageContent.coreTechTitle}</h3>
              <div className="flex flex-wrap justify-center items-center gap-1.5 px-1">
                {homePageContent.coreTechnologies.map((skill) => (
                  <Badge key={skill} variant="outline" className="shadow-sm px-2.5 py-1 text-sm border-primary/50 text-foreground hover:bg-primary/10">
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
              {homePageContent.stats.map((stat) => {
                const StatIcon = iconMap[stat.iconName];
                return (
                  <Card key={stat.id} className="shadow-md bg-card"> 
                    <CardHeader className="p-2 pb-1">
                      <CardTitle className="text-lg font-semibold text-center flex flex-col items-center gap-1"> 
                        {StatIcon && <StatIcon size={20} className="text-primary" />}
                        {stat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 pt-0 text-center">
                      <p className="text-2xl font-bold text-accent">{stat.value}</p> 
                      <p className="text-sm text-muted-foreground">{stat.subValue}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader className="p-2">
            <CardTitle className="text-2xl font-semibold text-primary text-center">{homePageContent.getInTouchTitle}</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-1.5"> 
              <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardContent className="p-2">
                  <a href={`mailto:${homePageContent.email}`} className="flex items-center transition-colors w-full">
                    <Mail size={18} className="text-accent mr-2.5 flex-shrink-0" /> 
                    <span className="text-base text-foreground">{homePageContent.email}</span>
                  </a>
                </CardContent>
              </Card>
              <Card className="p-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardContent className="p-2">
                  <a href={`tel:${homePageContent.phone}`} className="flex items-center transition-colors w-full">
                    <Phone size={18} className="text-accent mr-2.5 flex-shrink-0" />
                    <span className="text-base text-foreground">{homePageContent.phone}</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
    </div>
  );
};

export default HomePageContent;
