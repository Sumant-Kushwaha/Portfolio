
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Download } from "lucide-react";
import { homePageContent } from "@/data/home-content";

const FloatingResumeButton: React.FC = () => {
  if (!homePageContent.resumeDownloadLink) {
    return null;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant="default" // Uses primary color from the theme
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-[60] animate-fadeIn"
            style={{ animationDelay: '0.5s' }} // Optional: slight delay for pop-in
          >
            <a href={homePageContent.resumeDownloadLink} download target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
              <Download size={24} />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-popover text-popover-foreground">
          <p>Download Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingResumeButton;
