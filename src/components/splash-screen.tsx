
"use client";

import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary text-primary-foreground animate-fadeIn"
      aria-label="Loading Sumant's Portfolio"
      role="alert"
      aria-busy="true"
    >
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Sumant's Portfolio
        </h1>
        <p className="text-xl mb-2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Welcome to Sumant Mourya's interactive portfolio.
        </p>
        <p className="text-lg text-primary-foreground/80 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          Explore projects, skills, and experience within the mobile mockup.
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
