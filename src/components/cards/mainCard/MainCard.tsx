"use client";

import "./MainCard.css";
import { useRef, MouseEvent } from "react";

interface IMainCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}
export default function MainCard({
  children,
  className = "",
  spotlightColor = "rgba(48, 194, 226, 0.2)",
}: IMainCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
      divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    }
  };
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
}
