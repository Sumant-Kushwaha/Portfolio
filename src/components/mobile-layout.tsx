"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Home, GraduationCap, Briefcase, Award, Mail, Wifi } from 'lucide-react';
import { BatteryFull } from 'lucide-react';
import ClientOnlyTime from '@/components/client-only-time';
import ThemeToggleButton from '@/components/theme-toggle-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HomePageContent from '@/components/home-page-content';
import EducationPageContent from '@/components/education-page-content';
import ContactPageContent from '@/components/contact-page-content';
import ExperiencePageContent from '@/components/experience-page-content';
import ProjectsPageContent from '@/components/projects-page-content';

// Add global styles for animations
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      @keyframes popIn {
        0% { opacity: 0; transform: translate(-50%, -80%); }
        100% { opacity: 1; transform: translate(-50%, -100%); }
      }
      
      @keyframes pulse-subtle {
        0% { opacity: 0.9; }
        50% { opacity: 1; }
        100% { opacity: 0.9; }
      }
      
      @keyframes slide-slow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      .animate-pulse-subtle {
        animation: pulse-subtle 2s infinite ease-in-out;
      }
      
      .animate-slide-slow {
        animation: slide-slow 8s infinite linear;
      }
      
      .theme-mobile-dark .bottom-nav-active-indicator {
        background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
      }
      
      .bottom-nav-active-indicator {
        position: absolute;
        height: 3px;
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6, #d946ef);
        transform-origin: bottom center;
      }
    `}</style>
  );
};

interface MobileLayoutProps {
  children?: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const [mobileTheme, setMobileTheme] = useState<'light' | 'dark'>('dark');
  const [activeTab, setActiveTab] = useState('Home');
  const [toast, setToast] = useState({ visible: false, text: '', position: { top: 0, left: 0 } });
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to show toast notification above the clicked icon
  const showToast = (e: React.MouseEvent, text: string) => {
    // Clear any existing timeout
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    // Get the position of the clicked button
    const buttonRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    
    // Set toast state with the button's horizontal position
    setToast({
      visible: true,
      text,
      position: { 
        top: 0, // We'll use fixed positioning with bottom instead of top
        left: buttonRect.left + buttonRect.width / 2 
      }
    });
    
    // Hide toast after 1.5 seconds
    toastTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 1500);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('mobileTheme') as 'light' | 'dark' | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setMobileTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && mobileTheme) {
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
    <>
      <GlobalStyles />
    <main className="flex justify-center items-center selection:bg-accent selection:text-accent-foreground w-full h-full">
      {/* Phone Bezel */}
      <div className="relative w-full max-w-[410px] aspect-[410/844] h-auto max-h-[calc(100vh-4rem)] bg-neutral-800 dark:bg-neutral-900 rounded-[50px] shadow-2xl p-2.5 border border-neutral-700 dark:border-neutral-800">

        {/* Notch physical overlay (centered) */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-neutral-800 dark:bg-neutral-900 rounded-full z-20">
          <div className="w-10 h-1 bg-neutral-600 dark:bg-neutral-700 rounded-full mx-auto mt-2.5"></div>
        </div>

        {/* Inner Screen */}
        <div
          className={cn(
            "w-full h-full rounded-[40px] overflow-hidden shadow-inner flex flex-col mobile-theme-container",
            mobileTheme === "dark" ? "theme-mobile-dark bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
          )}
        >
          {/* Status Bar (semi-transparent + blurred) */}
          <div className="relative h-10 flex items-center text-foreground z-10 shrink-0 px-5 bg-background/70 backdrop-blur-md border-b border-border/40">
            <div className="flex-1 flex justify-start items-center">
              <ClientOnlyTime />
            </div>

            {/* Notch is centered absolutely above */}

            <div className="flex-1 flex justify-end items-center space-x-2">
              <Wifi size={16} aria-label="WiFi status" className="text-foreground" />
              <BatteryFull size={20} aria-label="Battery full" className="text-foreground" fill="currentColor" />
              <div className="p-1 rounded-full bg-muted/30">
                <ThemeToggleButton
                  currentTheme={mobileTheme}
                  setTheme={setMobileTheme}
                  iconSize={16}
                  className="w-6 h-6 text-foreground"
                />
              </div>
            </div>
          </div>

          {/* App Content Area */}
          <div
            key={activeTab}
            className={cn(
              "flex-grow p-2.5 pt-2.5 overflow-y-auto overflow-x-hidden pb-[calc(4rem+0.625rem)] no-scrollbar",
              "animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out"
            )}
          >
            {renderContent()}
          </div>


          {/* Toast Notification */}
          {toast.visible && (
            <div 
              className="fixed z-50 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md shadow-lg"
              style={{ 
                bottom: `${toast.position.top}px`, 
                left: `${toast.position.left}px`,
                transform: 'translate(-50%, -100%)',
                marginBottom: '60px',
                animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
              }}
            >
              <span className="inline-block animate-pulse-subtle">{toast.text}</span>
            </div>
          )}
          
          {/* Bottom Navigation Bar (semi-transparent + blurred) */}
          <div className="h-16 flex items-center justify-around p-1 shrink-0 shadow-lg bg-background/70 backdrop-blur-md border-t border-border/40 relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-slide-slow pointer-events-none"></div>
            <Button
              variant="ghost"
              size="icon"
              title="Home"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Home"}
              onClick={(e) => {
                setActiveTab("Home");
                showToast(e, "Home");
              }}
            >
              <Home size={20} className={activeTab === "Home" ? "animate-pulse-subtle" : ""} />
              {activeTab === "Home" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Projects"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Projects"}
              onClick={(e) => {
                setActiveTab("Projects");
                showToast(e, "Projects");
              }}
            >
              <Briefcase size={20} className={activeTab === "Projects" ? "animate-pulse-subtle" : ""} />
              {activeTab === "Projects" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Education"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Education"}
              onClick={(e) => {
                setActiveTab("Education");
                showToast(e, "Education");
              }}
            >
              <GraduationCap size={20} className={activeTab === "Education" ? "animate-pulse-subtle" : ""} />
              {activeTab === "Education" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Experience"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Experience"}
              onClick={(e) => {
                setActiveTab("Experience");
                showToast(e, "Experience");
              }}
            >
              <Award size={20} className={activeTab === "Experience" ? "animate-pulse-subtle" : ""} />
              {activeTab === "Experience" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Contact me"
              className="flex flex-col h-auto p-1 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Contact"}
              onClick={(e) => {
                setActiveTab("Contact");
                showToast(e, "Contact");
              }}
            >
              <Mail size={20} className={activeTab === "Contact" ? "animate-pulse-subtle" : ""} />
              {activeTab === "Contact" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default MobileLayout;
