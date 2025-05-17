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

// Add global styles for animations and Material You design elements
const GlobalStyles = () => {
  return (
    <style jsx global>{`
      /* Toast Animation */
      @keyframes popIn {
        0% { opacity: 0; transform: translate(-50%, -80%); }
        50% { opacity: 1; transform: translate(-50%, -105%); }
        75% { transform: translate(-50%, -95%); }
        100% { opacity: 1; transform: translate(-50%, -100%); }
      }
      
      /* Pulse Animations */
      @keyframes pulse-subtle {
        0% { opacity: 0.9; }
        50% { opacity: 1; }
        100% { opacity: 0.9; }
      }
      
      @keyframes pulse-scale {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      /* Background Animations */
      @keyframes slide-slow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes float {
        0% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-10px) rotate(5deg); }
        100% { transform: translateY(0) rotate(0); }
      }
      
      @keyframes float-reverse {
        0% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-15px) rotate(-5deg); }
        100% { transform: translateY(0) rotate(0); }
      }
      
      @keyframes rotate-slow {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
      
      /* Animation Classes */
      .animate-pulse-subtle {
        animation: pulse-subtle 2s infinite ease-in-out;
      }
      
      .animate-pulse-scale {
        animation: pulse-scale 3s infinite ease-in-out;
      }
      
      .animate-slide-slow {
        animation: slide-slow 8s infinite linear;
      }
      
      .animate-float {
        animation: float 6s infinite ease-in-out;
      }
      
      .animate-float-reverse {
        animation: float-reverse 7s infinite ease-in-out;
      }
      
      .animate-rotate-slow {
        animation: rotate-slow 20s infinite linear;
      }
      
      /* Material You Style Elements */
      .material-shape {
        position: absolute;
        border-radius: 50%;
        opacity: 0.3; /* Reduced opacity for better text visibility */
        filter: blur(40px);
        z-index: 0;
        pointer-events: none; /* Ensures touch events pass through */
      }
      
      .theme-mobile-dark .material-shape.primary {
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      }
      
      .theme-mobile-dark .material-shape.secondary {
        background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
      }
      
      .theme-mobile-dark .material-shape.tertiary {
        background: linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%);
      }
      
      .material-shape.primary {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      }
      
      .material-shape.secondary {
        background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
      }
      
      .material-shape.tertiary {
        background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
      }
      
      /* Navigation Indicators */
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
      
      /* Material You Style Nav Icons */
      .nav-icon-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 5; /* Ensure it's above other elements for touch */
      }
      
      .nav-icon-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none; /* Ensures touch events pass through */
      }
      
      .theme-mobile-dark [data-active=true] .nav-icon-bg {
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.15) 70%, transparent 100%);
        opacity: 1;
        transform: scale(1.5);
      }
      
      [data-active=true] .nav-icon-bg {
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 70%, transparent 100%);
        opacity: 1;
        transform: scale(1.5);
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
            "w-full h-full rounded-[40px] overflow-hidden shadow-inner flex flex-col mobile-theme-container relative",
            mobileTheme === "dark" ? "theme-mobile-dark bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
          )}
        >
          {/* Material You background shapes - reduced size and repositioned for better text visibility */}
          <div className="material-shape primary animate-float" style={{ width: '200px', height: '200px', top: '10%', left: '10%' }}></div>
          <div className="material-shape secondary animate-float-reverse" style={{ width: '180px', height: '180px', top: '60%', right: '5%' }}></div>
          <div className="material-shape tertiary animate-float" style={{ width: '150px', height: '150px', bottom: '25%', left: '20%' }}></div>
          {/* Status Bar (semi-transparent + blurred) */}
          <div className="relative h-10 flex items-center text-foreground z-10 shrink-0 px-5 bg-background/70 backdrop-blur-xl border-b border-border/40">
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
              className="fixed z-50 px-4 py-2 text-xs font-medium text-white rounded-full shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                bottom: `${toast.position.top}px`, 
                left: `${toast.position.left}px`,
                transform: 'translate(-50%, -100%)',
                marginBottom: '60px',
                animation: 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="inline-block animate-pulse-subtle">{toast.text}</span>
            </div>
          )}
          
          {/* Bottom Navigation Bar (semi-transparent + blurred) */}
          <div className="h-16 flex items-center justify-around p-1 shrink-0 shadow-lg bg-background/80 backdrop-blur-md border-t border-border/50 relative overflow-hidden z-10">
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-slide-slow pointer-events-none"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 -bottom-[250px] left-1/2 -translate-x-1/2 animate-pulse-scale pointer-events-none"></div>
            <Button
              variant="ghost"
              size="icon"
              title="Home"
              className="flex flex-col h-auto p-2 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Home"}
              onClick={(e) => {
                setActiveTab("Home");
                showToast(e, "Home");
              }}
            >
              <div className="nav-icon-wrapper">
                <div className="nav-icon-bg"></div>
                <Home size={22} className={activeTab === "Home" ? "animate-pulse-subtle relative z-10 text-primary" : "relative z-10"} />
              </div>
              {activeTab === "Home" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Projects"
              className="flex flex-col h-auto p-2 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Projects"}
              onClick={(e) => {
                setActiveTab("Projects");
                showToast(e, "Projects");
              }}
            >
              <div className="nav-icon-wrapper">
                <div className="nav-icon-bg"></div>
                <Briefcase size={22} className={activeTab === "Projects" ? "animate-pulse-subtle relative z-10 text-primary" : "relative z-10"} />
              </div>
              {activeTab === "Projects" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Education"
              className="flex flex-col h-auto p-2 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Education"}
              onClick={(e) => {
                setActiveTab("Education");
                showToast(e, "Education");
              }}
            >
              <div className="nav-icon-wrapper">
                <div className="nav-icon-bg"></div>
                <GraduationCap size={22} className={activeTab === "Education" ? "animate-pulse-subtle relative z-10 text-primary" : "relative z-10"} />
              </div>
              {activeTab === "Education" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Experience"
              className="flex flex-col h-auto p-2 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Experience"}
              onClick={(e) => {
                setActiveTab("Experience");
                showToast(e, "Experience");
              }}
            >
              <div className="nav-icon-wrapper">
                <div className="nav-icon-bg"></div>
                <Award size={22} className={activeTab === "Experience" ? "animate-pulse-subtle relative z-10 text-primary" : "relative z-10"} />
              </div>
              {activeTab === "Experience" && <div className="bottom-nav-active-indicator animate-in fade-in duration-300"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title="Contact me"
              className="flex flex-col h-auto p-2 text-muted-foreground hover:text-primary hover:bg-transparent focus-visible:text-primary data-[active=true]:text-accent relative group"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              data-active={activeTab === "Contact"}
              onClick={(e) => {
                setActiveTab("Contact");
                showToast(e, "Contact");
              }}
            >
              <div className="nav-icon-wrapper">
                <div className="nav-icon-bg"></div>
                <Mail size={22} className={activeTab === "Contact" ? "animate-pulse-subtle relative z-10 text-primary" : "relative z-10"} />
              </div>
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
