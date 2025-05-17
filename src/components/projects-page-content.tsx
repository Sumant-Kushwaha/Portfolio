
"use client";

import { projectsData, type Project } from '@/data/projects-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProjectsPageContent: React.FC = () => {
  const sortedProjects = [...projectsData].sort((a, b) => a.id - b.id);

  return (
    <div className="flex flex-col space-y-2.5">
       <Card className="shadow-lg mb-0"> 
        <CardHeader className="p-3 bg-muted/30">
          <CardTitle className="text-3xl font-semibold text-primary text-center">My Projects</CardTitle>
        </CardHeader>
      </Card>
      {sortedProjects.map((project) => (
        <Card key={project.id} className="shadow-lg overflow-hidden">
          <CardHeader className="p-3 pb-1.5 bg-muted/30">
            <CardTitle className="text-2xl font-bold text-foreground">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-1 text-base">
            <CardDescription className="text-base text-muted-foreground mb-2">
              {project.description}
            </CardDescription>
            {project.tags && project.tags.length > 0 && (
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-accent mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="shadow-sm px-2.5 py-1 text-sm border-primary/50 text-foreground hover:bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          {project.link && (
            <CardFooter className="p-3 pt-0">
              <Button asChild variant="outline" className="w-full text-base">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} className="mr-2" />
                  View Project
                </a>
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPageContent;
