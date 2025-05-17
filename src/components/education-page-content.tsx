
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { educationPageContent } from "@/data/education-content";

const iconMap: { [key: string]: LucideIcon } = {
  GraduationCap,
};

const EducationPageContent: React.FC = () => {
  const PageIcon = iconMap[educationPageContent.iconName];

  return (
    <div className="flex flex-col space-y-2.5">
      <Card>
        <CardHeader className="p-3 flex flex-col items-center justify-center bg-muted/30">
          {PageIcon && <PageIcon size={80} className="mb-2 text-primary" />}
          <CardTitle className="text-3xl font-semibold text-primary text-center">
            {educationPageContent.pageTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-1 space-y-2.5">
          {educationPageContent.educationEntries.map((entry, index) => (
            <React.Fragment key={entry.id}>
              <Card className="shadow-md bg-card overflow-hidden">
                <CardHeader className="p-3 bg-muted/30">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {entry.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 text-base">
                  <CardDescription className="text-base text-muted-foreground mb-2">
                    {entry.institution}
                  </CardDescription>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <CalendarDays size={16} className="mr-2 text-accent flex-shrink-0" />
                    <span>{entry.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2 text-sm">
                    <MapPin size={16} className="mr-2 text-accent flex-shrink-0" />
                    <span>{entry.location}</span>
                  </div>
                  {entry.details && entry.details.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm pl-1">
                      {entry.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
              {index < educationPageContent.educationEntries.length - 1 && (
                <Separator className="my-3 bg-border" />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationPageContent;
