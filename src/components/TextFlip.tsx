"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextFlipProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
}

/**
 * TextFlip Component
 * 
 * Creates a "Lando Norris" style text animation where letters slide up 
 * and are replaced from below on hover.
 * 
 * SEO & Accessibility:
 * - Uses aria-label for screen readers.
 * - Decorative split characters are hidden from screen readers.
 * - Single text shadow technique for performance.
 */
export const TextFlip: React.FC<TextFlipProps> = ({
  text,
  className,
  stagger = 0.02,
  duration = 0.3
}) => {
  const chars = text.split("");

  return (
    <span
      className={cn("inline-flex relative overflow-hidden group/flip align-baseline", className)}
      aria-label={text}
    >
      <span className="flex items-baseline" aria-hidden="true">
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block relative overflow-hidden"
            style={{
              height: "1em",
              lineHeight: "1em",
            }}
          >
            <span
              className="inline-block transition-transform ease-in-out group-hover/flip:-translate-y-[1em]"
              style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${i * stagger}s`,
                textShadow: `0 1em 0 currentColor`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};
