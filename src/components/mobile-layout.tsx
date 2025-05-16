
"use client";

import React, { useState } from 'react';
import { BatteryFull, Home, GraduationCap, Briefcase, Award, Mail, Wifi, User, MessageCircleMore, Info } from 'lucide-react'; 
import ClientOnlyTime from '@/components/client-only-time';
import ThemeToggleButton from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HomePageContent from '@/components/home-page-content';
import EducationPageContent from '@/components/education-page-content';
import ContactPageContent from '@/components/contact-page-content'; 


interface MobileLayoutProps {
  children?: React.ReactNode; 
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState('Home');


  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePageContent />;
      case 'About': 
        return (
          <div className="p-4 text-center flex-grow flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-primary">About</h2>
            <p className="text-muted-foreground mt-2 text-lg">Content for About is coming soon!</p>
          </div>
        );
      case 'Education':
        return <EducationPageContent />;
      case 'Contact':
        return <ContactPageContent />;
      case 'Projects':
      case 'Experience':
        return (
          <div className="p-4 text-center flex-grow flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-primary">{activeTab}</h2>
            <p className="text-muted-foreground mt-2 text-lg">Content for {activeTab} is coming soon!</p>
          </div>
        );
      default:
        return <HomePageContent />; 
    }
  };

  return (
    <main className="flex justify-center items-center selection:bg-accent selection:text-accent-foreground w-full h-full">
      {/* Phone Bezel */}
      <div className="relative w-full max-w-[390px] aspect-[390/844] h-auto max-h-full bg-neutral-800 dark:bg-neutral-900 rounded-[60px] shadow-2xl p-3 border-4 border-neutral-700 dark:border-neutral-800">
        {/* Notch physical overlay */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[130px] h-7 bg-neutral-800 dark:bg-neutral-900 rounded-b-2xl z-20">
          <div className="w-12 h-1.5 bg-neutral-600 dark:bg-neutral-700 rounded-full mx-auto mt-2.5"></div>
        </div>

        {/* Inner Screen */}
        <div
          className={cn(
            "w-full h-full rounded-[48px] overflow-hidden shadow-inner flex flex-col mobile-theme-container",
            mobileTheme === 'dark' ? 'theme-mobile-dark' : ''
          )}
        >
          {/* Status Bar Area */}
          <div className="h-7 flex items-center justify-between text-base font-medium text-foreground z-10 shrink-0 mt-[5px] px-1">
            {/* Left "Ear" - Clock */}
            <div className="flex-1 flex justify-center items-center">
              <div className="bg-muted/30 p-1.5 rounded-full flex items-center">
                <ClientOnlyTime />
              </div>
            </div>
            {/* Notch Spacer for layout */}
            <div className="w-[130px] shrink-0"></div>
            {/* Right "Ear" - Icons */}
            <div className="flex-1 flex justify-center items-center">
              <div className="flex items-center space-x-1.5 p-1.5 rounded-full bg-muted/30">
                <ThemeToggleButton
                  currentTheme={mobileTheme}
                  setTheme={setMobileTheme}
                  iconSize={14}
                  className="w-6 h-6 text-foreground"
                />
                <Wifi size={14} aria-label="WiFi status" className="text-foreground" />
                <BatteryFull size={14} aria-label="Battery full" className="text-foreground" />
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
              data-active={activeTab === 'About'}
              onClick={() => setActiveTab('About')}
            >
              <User size={20} />
              <span className="text-sm mt-0.5">About</span>
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
