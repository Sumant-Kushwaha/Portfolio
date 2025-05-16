
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const EducationPageContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-1">
      <h2 className="text-xl font-semibold text-primary mb-2 text-center">My Education</h2>

      {/* First Education Card: BCA */}
      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-lg font-bold text-foreground">
            Bachelor of Computer Applications (BCA)
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground pt-0.5">
            HEC Group of Institutions, Sri Dev Suman Uttarakhand University
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-sm">
          <div className="flex items-center text-muted-foreground mb-1 text-xs">
            <CalendarDays size={14} className="mr-2 text-accent flex-shrink-0" />
            <span>2022 - 2025 (Expected)</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-2 text-xs">
            <MapPin size={14} className="mr-2 text-accent flex-shrink-0" />
            <span>Uttarakhand, India</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-muted-foreground text-xs pl-1">
            <li>Currently in 6th Semester.</li>
            <li>Focusing on software development, database management, and web technologies.</li>
            <li>Key Skills: C, C++, Kotlin, HTML, CSS, SQL, .NET, Microsoft Office 365.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Second Education Card: Secondary Education */}
      <Card className="shadow-lg">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-lg font-bold text-foreground">
            Secondary Education
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground pt-0.5">
            Dhoom Singh Memorial Public School
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 text-sm">
          <div className="flex items-center text-muted-foreground mb-1 text-xs">
            <CalendarDays size={14} className="mr-2 text-accent flex-shrink-0" />
            <span>Year of Completion: 2022</span>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <MapPin size={14} className="mr-2 text-accent flex-shrink-0" />
            <span>Sitapur, Jawalapur, Haridwar</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationPageContent;
