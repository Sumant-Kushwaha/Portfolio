
"use client";

import React, { useState, useEffect } from 'react';
import { BatteryFull, Home, GraduationCap, Briefcase, Award, Mail, Wifi, User, MessageCircleMore } from 'lucide-react';
import ClientOnlyTime from '@/components/client-only-time';
import ThemeToggleButton from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HomePageContent from '@/components/home-page-content';
import EducationPageContent from '@/components/education-page-content';
import ContactPageContent from '@/components/contact-page-content';
import ExperiencePageContent from '@/components/experience-page-content';
import ProjectsPageContent from '@/components/projects-page-content'; 


interface MobileLayoutProps {
  children?: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark'>('light'); // Default for SSR
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    // Load stored theme or detect system preference for mobile theme
    const storedMobileTheme = localStorage.getItem('mobileTheme') as 'light' | 'dark' | null;
    if (storedMobileTheme) {
      setMobileTheme(storedMobileTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMobileTheme(prefersDark ? 'dark' : 'light');
    }
  }, []); // Empty dependency array: runs once on mount

  useEffect(() => {
    // Save mobileTheme to localStorage whenever it changes
    if (typeof window !== 'undefined') { // Ensure localStorage is available
        localStorage.setItem('mobileTheme', mobileTheme);
    }
  }, [mobileTheme]);


  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePageContent />;
      case 'Projects': 
        return <ProjectsPageContent />;
      case 'Education':
        return <EducationPageContent />;
      case 'Experience':
        return <ExperiencePageContent />;
      case 'Contact':
        return <ContactPageContent />;
      default:
        return <HomePageContent />;
    }
  };

  return (
    <main className="flex justify-center items-center selection:bg-accent selection:text-accent-foreground w-full h-full">
      {/* Phone Bezel */}
      <div className="relative w-full max-w-[410px] aspect-[410/844] h-auto max-h-full bg-neutral-800 dark:bg-neutral-900 rounded-[60px] shadow-2xl p-3 border-4 border-neutral-700 dark:border-neutral-800">
        {/* Notch physical overlay */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-neutral-800 dark:bg-neutral-900 rounded-full z-20">
          <div className="w-10 h-1 bg-neutral-600 dark:bg-neutral-700 rounded-full mx-auto mt-2.5"></div>
        </div>

        {/* Inner Screen */}
        <div
          className={cn(
            "w-full h-full rounded-[48px] overflow-hidden shadow-inner flex flex-col mobile-theme-container",
            mobileTheme === 'dark' ? 'theme-mobile-dark' : ''
          )}
        >
          {/* Status Bar Area */}
          <div className="h-10 flex items-center justify-between text-foreground z-10 shrink-0 px-5">
            {/* Left "Ear" - Clock */}
            <div className="flex-1 flex justify-center items-center">
              <ClientOnlyTime />
            </div>
            {/* Notch Spacer for layout */}
            <div className="w-[100px] shrink-0"></div>
            {/* Right "Ear" - Icons */}
            <div className="flex-1 flex justify-center items-center">
              <div className="flex items-center space-x-1 p-1.5 rounded-full bg-muted/30">
                <ThemeToggleButton
                  currentTheme={mobileTheme}
                  setTheme={setMobileTheme}
                  iconSize={12}
                  className="w-6 h-6 text-foreground"
                />
                <Wifi size={12} aria-label="WiFi status" className="text-foreground" />
                <BatteryFull size={12} aria-label="Battery full" className="text-foreground" />
              </div>
            </div>
          </div>


          {/* App Content Area */}
          <div className={cn(
            "flex-grow p-2.5 pt-2.5 overflow-y-auto overflow-x-hidden pb-[calc(4rem+0.625rem)] no-scrollbar"
          )}>
            {renderContent()}
          </div>

          {/* Bottom Navigation Bar - Translucent */}
          <div className="h-16 flex items-center justify-around p-1 shrink-0 shadow-t-md bg-background/70 backdrop-blur-sm">
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Home'}
              onClick={() => setActiveTab('Home')}
            >
              <Home size={20} />
              <span className="text-sm mt-0.5">Home</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Projects'}
              onClick={() => setActiveTab('Projects')}
            >
              <Briefcase size={20} />
              <span className="text-sm mt-0.5">Projects</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Education'}
              onClick={() => setActiveTab('Education')}
            >
              <GraduationCap size={20} />
              <span className="text-sm mt-0.5">Education</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Experience'}
              onClick={() => setActiveTab('Experience')}
            >
              <Award size={20} />
              <span className="text-sm mt-0.5">Experience</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Contact'}
              onClick={() => setActiveTab('Contact')}
            >
              <Mail size={20} />
              <span className="text-sm mt-0.5">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileLayout;
