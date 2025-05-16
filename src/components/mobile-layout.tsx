
"use client";

import React, { useState } from 'react';
import { BatteryFull, Home, GraduationCap, Briefcase, Award, Mail } from 'lucide-react';
import ClientOnlyTime from '@/components/client-only-time';
import ThemeToggleButton from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children?: React.ReactNode; 
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState('Home');


  const defaultContent = (
    <>
      <h1 className="text-2xl font-semibold text-primary mt-4">Sumant's Portfolio App</h1>
      <p className="text-muted-foreground mt-2">
        Content will be displayed here. Navigate through sections like a mobile app.
      </p>
      <div className="mt-8 space-y-4">
        {[1,2,3].map(i => (
          <div key={i} className="bg-card p-4 rounded-lg shadow">
            <h2 className="text-lg font-medium text-card-foreground">Section {i}</h2>
            <p className="text-sm text-muted-foreground mt-1">This is a placeholder for future content.</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <main className="flex justify-center items-center selection:bg-accent selection:text-accent-foreground">
      {/* Phone Bezel */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-neutral-800 dark:bg-neutral-900 rounded-[60px] shadow-2xl p-3 border-4 border-neutral-700 dark:border-neutral-800">
        {/* Notch */}
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
          {/* Status Bar - Made transparent */}
          <div className="h-12 px-2 sm:px-3 flex items-center justify-between text-sm font-medium text-foreground/80 pt-5 z-10 shrink-0">
            <ClientOnlyTime />
            <div className="flex items-center space-x-1.5 p-1 rounded-full bg-muted/50">
              <ThemeToggleButton 
                currentTheme={mobileTheme} 
                setTheme={setMobileTheme}
                iconSize={14} 
                className="w-6 h-6 text-foreground" 
              />
              <BatteryFull size={16} aria-label="Battery full" className="text-foreground" />
            </div>
          </div>

          {/* App Content Area */}
          <div className={cn(
            "flex-grow p-4 pt-2 overflow-y-auto overflow-x-hidden pb-16 no-scrollbar"
          )}>
            {children ? children : defaultContent}
          </div>

          {/* Bottom Navigation Bar - Made transparent */}
          <div className="h-16 flex items-center justify-around p-1 shrink-0 shadow-t-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Home'}
              onClick={() => setActiveTab('Home')}
            >
              <Home size={20} />
              <span className="text-[10px] mt-0.5">Home</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Education'}
              onClick={() => setActiveTab('Education')}
            >
              <GraduationCap size={20} />
              <span className="text-[10px] mt-0.5">Education</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Projects'}
              onClick={() => setActiveTab('Projects')}
            >
              <Briefcase size={20} />
              <span className="text-[10px] mt-0.5">Projects</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Experience'}
              onClick={() => setActiveTab('Experience')}
            >
              <Award size={20} />
              <span className="text-[10px] mt-0.5">Experience</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-primary"
              data-active={activeTab === 'Contact'}
              onClick={() => setActiveTab('Contact')}
            >
              <Mail size={20} />
              <span className="text-[10px] mt-0.5">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileLayout;
