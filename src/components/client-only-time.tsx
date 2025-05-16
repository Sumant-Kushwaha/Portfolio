"use client";

import React, { useState, useEffect } from 'react';

const ClientOnlyTime: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Set initial time
    const updateCurrentTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateCurrentTime();

    // Update time every minute
    const intervalId = setInterval(updateCurrentTime, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  if (!time) {
    // Render nothing or a placeholder until time is set to avoid mismatch
    return <span className="w-12"></span>; // Placeholder width to prevent layout shift
  }

  return <span>{time}</span>;
};

export default ClientOnlyTime;
