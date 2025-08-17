'use client';

import { useState, useEffect } from 'react';

export default function RotatingText({
  texts = ['Workshops', 'Talks', 'Experiences'],
  rotationInterval = 2200
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className="rotating-text">
      <div className="rotating-text-content">
        <span>{texts[currentIndex]}</span>
      </div>
    </div>
  );
}