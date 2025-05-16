
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperiencePageContent: React.FC = () => {
  const skills = ["SAP ERP", "Quality Control Procedures", "Data Analysis", "Reporting"];

  return (
    <div className="flex flex-col space-y-2.5">
      <h2 className="text-3xl font-semibold text-primary mb-2 text-center">My Experience</h2>

      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-2xl font-bold text-foreground">
            Quality Control - SAP (Internship)
          </CardTitle>
          <CardDescription className="text-xl text-muted-foreground pt-0.5">
            ITC Limited
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-base">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-accent mb-1.5">Skills & Technologies:</h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="shadow-sm px-2.5 py-1 text-sm border-primary/50 text-foreground hover:bg-primary/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center text-muted-foreground mb-1.5 text-sm">
            <CalendarDays size={16} className="mr-2 text-accent flex-shrink-0" />
            <span>June 2023 - August 2023</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-3 text-sm">
            <MapPin size={16} className="mr-2 text-accent flex-shrink-0" />
            <span>Haridwar, Uttarakhand, India</span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent mb-1.5">Responsibilities:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm pl-1">
              <li>Assisted in monitoring and maintaining quality standards for products using SAP QM module.</li>
              <li>Participated in quality checks and inspection processes.</li>
              <li>Helped in documenting quality control data and generating reports.</li>
              <li>Gained hands-on experience with SAP systems in a manufacturing environment.</li>
              <li>Collaborated with the quality assurance team to identify areas for improvement.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperiencePageContent;
