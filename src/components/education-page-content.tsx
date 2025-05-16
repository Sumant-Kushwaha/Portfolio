
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, GraduationCap } from "lucide-react";

const EducationPageContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2.5">
      <Card className="shadow-lg">
        <CardHeader className="p-3 flex flex-col items-center justify-center">
          <GraduationCap size={80} className="mb-2 text-primary" />
          <CardTitle className="text-3xl font-semibold text-primary text-center">
            My Education
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-1 space-y-2.5">
          {/* First Nested Education Card: BCA */}
          <Card className="shadow-md bg-card overflow-hidden">
            <CardHeader className="p-3 bg-muted/30">
              <CardTitle className="text-2xl font-bold text-foreground">
                Bachelor of Computer Applications (BCA)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 text-base">
              <CardDescription className="text-base text-muted-foreground mb-2">
                HEC Group of Institutions, Sri Dev Suman Uttarakhand University
              </CardDescription>
              <div className="flex items-center text-muted-foreground mb-1 text-sm">
                <CalendarDays size={16} className="mr-2 text-accent flex-shrink-0" />
                <span>2022 - 2025 (Expected)</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                <MapPin size={16} className="mr-2 text-accent flex-shrink-0" />
                <span>Uttarakhand, India</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm pl-1">
                <li>Currently in 6th Semester.</li>
                <li>Focusing on software development, database management, and web technologies.</li>
                <li>Key Skills: C, C++, Kotlin, HTML, CSS, SQL, .NET, Microsoft Office 365.</li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-3 bg-border" />

          {/* Second Nested Education Card: Secondary Education */}
          <Card className="shadow-md bg-card overflow-hidden">
            <CardHeader className="p-3 bg-muted/30">
              <CardTitle className="text-2xl font-bold text-foreground">
                Secondary Education
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 text-base">
              <CardDescription className="text-base text-muted-foreground mb-2">
                Dhoom Singh Memorial Public School
              </CardDescription>
              <div className="flex items-center text-muted-foreground mb-1 text-sm">
                <CalendarDays size={16} className="mr-2 text-accent flex-shrink-0" />
                <span>Year of Completion: 2022</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin size={16} className="mr-2 text-accent flex-shrink-0" />
                <span>Sitapur, Jawalapur, Haridwar</span>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationPageContent;
