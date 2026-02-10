"use client";

export default function WireframeShape({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        className="animate-spin-slow"
      >
        {/* Outer octagon */}
        <polygon
          points="160,10 270,55 310,160 270,265 160,310 50,265 10,160 50,55"
          stroke="rgba(0,212,255,0.12)"
          strokeWidth="1"
          fill="none"
        />
        {/* Inner octagon rotated */}
        <polygon
          points="160,50 240,80 280,160 240,240 160,270 80,240 40,160 80,80"
          stroke="rgba(139,92,246,0.1)"
          strokeWidth="1"
          fill="none"
        />
        {/* Cross lines */}
        <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(0,212,255,0.05)" strokeWidth="0.5" />
        <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(0,212,255,0.05)" strokeWidth="0.5" />
        <line x1="50" y1="55" x2="270" y2="265" stroke="rgba(139,92,246,0.04)" strokeWidth="0.5" />
        <line x1="270" y1="55" x2="50" y2="265" stroke="rgba(139,92,246,0.04)" strokeWidth="0.5" />
        {/* Center circle */}
        <circle cx="160" cy="160" r="40" stroke="rgba(0,212,255,0.08)" strokeWidth="0.5" fill="none" />
        <circle cx="160" cy="160" r="3" fill="rgba(0,212,255,0.3)" />
      </svg>
    </div>
  );
}
