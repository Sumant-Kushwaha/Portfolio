"use client";

import React from 'react';
import { Wifi, BatteryFull, Signal } from 'lucide-react';
import ClientOnlyTime from '@/components/client-only-time';

interface MobileLayoutProps {
  children?: React.ReactNode; // Children will be for the main content area
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <main className="flex justify-center items-center min-h-screen p-4 selection:bg-accent selection:text-accent-foreground">
      {/* Phone Bezel */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-neutral-800 dark:bg-neutral-900 rounded-[60px] shadow-2xl p-3 border-4 border-neutral-700 dark:border-neutral-800">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[130px] h-7 bg-neutral-800 dark:bg-neutral-900 rounded-b-2xl z-20">
          <div className="w-12 h-1.5 bg-neutral-600 dark:bg-neutral-700 rounded-full mx-auto mt-2.5"></div>
        </div>

        {/* Inner Screen */}
        <div className="bg-background w-full h-full rounded-[48px] overflow-hidden shadow-inner flex flex-col">
          {/* Status Bar */}
          <div className="h-12 px-6 flex items-center justify-between text-sm font-medium text-foreground/80 pt-5 z-10 shrink-0">
            <ClientOnlyTime />
            <div className="flex items-center space-x-1.5">
              <Signal size={16} aria-label="Signal strength" />
              <Wifi size={16} aria-label="Wifi connection" />
              <BatteryFull size={18} aria-label="Battery full" />
            </div>
          </div>

          {/* App Content Area */}
          <div className="flex-grow p-4 pt-2 overflow-y-auto">
            {children ? children : (
              <>
                <h1 className="text-2xl font-semibold text-primary mt-4">Sumant's Portfolio App</h1>
                <p className="text-muted-foreground mt-2">
                  Content will be displayed here. Navigate through sections like a mobile app.
                </p>
                {/* Placeholder content for illustration */}
                <div className="mt-8 space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="bg-card p-4 rounded-lg shadow">
                      <h2 className="text-lg font-medium text-card-foreground">Section {i}</h2>
                      <p className="text-sm text-muted-foreground mt-1">This is a placeholder for future content.</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileLayout;
