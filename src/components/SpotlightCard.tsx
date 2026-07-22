"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl bg-white dark:bg-[#0a0026] ${className}`}
    >
      {/* Outer Glowing Border layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.8), transparent 40%)`,
        }}
      />
      {/* Inner Mask (solid background to hide the center of the outer glow) */}
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-white/90 dark:bg-[#0a0026]/90 backdrop-blur-xl z-0" />

      {/* Inner soft spotlight (soft glow over the content) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
