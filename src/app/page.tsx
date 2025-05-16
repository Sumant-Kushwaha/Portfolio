
"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MobileLayout from '@/components/mobile-layout';
import ThemeToggleButton from '@/components/theme-toggle-button';
import HomePageContent from '@/components/home-page-content';
import { Toaster } from "@/components/ui/toaster";

// Define props type for Home component
interface HomePageProps {
  params?: Record<string, string | string[]>;
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function Home({ params, searchParams }: HomePageProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [outsideTheme, setOutsideTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutSplash(true);
    }, 2500); 

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const mainContent = (
    <div className="flex justify-center items-center flex-grow p-4">
      <MobileLayout>
        <HomePageContent /> 
      </MobileLayout>
    </div>
  );

  return (
    <div className={`outside-theme-wrapper ${outsideTheme === 'dark' ? 'theme-outside-dark' : ''}`}>
      <div className="absolute top-4 right-4 z-[51]">
        <ThemeToggleButton currentTheme={outsideTheme} setTheme={setOutsideTheme} iconSize={24} />
      </div>
      
      {showSplash ? (
        <div className={`fixed inset-0 flex flex-col items-center justify-center ${fadeOutSplash ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
          <SplashScreen />
        </div>
      ) : mainContent }
      
      <Toaster />
    </div>
  );
}
