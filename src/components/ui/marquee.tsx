"use client";

import { useRef, useEffect, useState } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({ children, speed = 40, pauseOnHover = false, className = "" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      setDuration(width / speed);
    }
  }, [speed]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ "--gap": "0px" } as React.CSSProperties}
    >
      <div
        ref={containerRef}
        className={`flex gap-0 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
