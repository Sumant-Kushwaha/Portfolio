"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import MobileLayout from '@/components/mobile-layout';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutSplash(true);
    }, 2500); // Start fade out slightly before removing

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Splash screen for 3 seconds total

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <div className={fadeOutSplash ? 'animate-fadeOut' : ''}>
        <SplashScreen />
      </div>
    );
  }

  return <MobileLayout />;
}
