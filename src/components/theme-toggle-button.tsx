"use client";

import type React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils"; // Added this import

interface ThemeToggleButtonProps {
  currentTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  className?: string;
  iconSize?: number;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ 
  currentTheme, 
  setTheme, 
  className,
  iconSize = 20 /* h-5 w-5 */
}) => {
  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn("rounded-full", className)} // Ensure it's round if used as icon only
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {currentTheme === 'light' ? 
        <Moon style={{ height: `${iconSize}px`, width: `${iconSize}px` }} /> : 
        <Sun style={{ height: `${iconSize}px`, width: `${iconSize}px` }} />
      }
    </Button>
  );
};

export default ThemeToggleButton;
