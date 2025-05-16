
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { experiencePageContent } from "@/data/experience-content";

const ExperiencePageContent: React.FC = () => {
  const experienceEntry = experiencePageContent.experienceEntries[0]; // Assuming one entry for now

  if (!experienceEntry) {
    return <p>No experience data available.</p>;
  }

  return (
    <div className="flex flex-col space-y-2.5">
      <h2 className="text-3xl font-semibold text-primary mb-2 text-center">{experiencePageContent.pageTitle}</h2>

      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-2xl font-bold text-foreground">
            {experienceEntry.role}
          </CardTitle>
          <CardDescription className="text-xl text-muted-foreground pt-0.5">
            {experienceEntry.company}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-base">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-accent mb-1.5">{experienceEntry.skillsTitle}</h3>
            <div className="flex flex-wrap gap-1.5">
              {experienceEntry.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="shadow-sm px-2.5 py-1 text-sm border-primary/50 text-foreground hover:bg-primary/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center text-muted-foreground mb-1.5 text-sm">
            <CalendarDays size={16} className="mr-2 text-accent flex-shrink-0" />
            <span>{experienceEntry.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-3 text-sm">
            <MapPin size={16} className="mr-2 text-accent flex-shrink-0" />
            <span>{experienceEntry.location}</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent mb-1.5">{experienceEntry.responsibilitiesTitle}</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm pl-1">
              {experienceEntry.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperiencePageContent;
