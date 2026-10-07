"use client";

import React, { useRef, useState } from "react";

interface SpotlightGlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function SpotlightGlassCard({
  children,
  className = "",
  glowColor = "rgba(220, 38, 38, 0.28)",
  onClick,
}: SpotlightGlassCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-400 group border ${
        isHovered
          ? "border-red-500/70 shadow-glow-lg -translate-y-1.5"
          : "border-white/10 hover:border-red-500/40 shadow-glass"
      } ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(20, 16, 22, 0.85) 0%, rgba(10, 10, 15, 0.95) 100%)",
      }}
    >
      {/* Dynamic Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, rgba(255,255,255,0.06) 30%, transparent 70%)`,
        }}
      />

      {/* Diagonal Glass Sheen Sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div
          className="w-[200%] h-full absolute -top-full -left-full group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-transform duration-1000 ease-out"
          style={{
            background:
              "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.12) 48%, rgba(239, 68, 68, 0.25) 52%, transparent 60%)",
          }}
        />
      </div>

      {/* Internal Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
