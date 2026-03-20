"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/lib/contexts/ThemeContext";

/**
 * MouseSpark — Ruixen UI
 * Sourced from https://ruixen.com/r/mouse-spark
 *
 * Interactive mouse-following particle effect.
 * In BaseLab: subtle warm sparks  
 * In Cyberpunk: neon cyan/teal sparks
 * Only renders when explicitly enabled (wrap in a div with pointer-events)
 */

interface MouseSparkProps {
  enabled?: boolean;
}

const MouseSpark: React.FC<MouseSparkProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isCyberpunk } = useTheme();

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cyberpunk: neon cyan palette. BaseLab: subtle warm/blue palette
    const colors = isCyberpunk
      ? ["#00f5d4", "#00d4b4", "#00ffc8", "#50ffe0", "#20e8c0"]
      : ["#0066CC", "#4499DD", "#60AAEE", "#88BBFF", "#99CCFF"];

    let particles: { x: number; y: number; dx: number; dy: number; color: string; life: number }[] = [];
    let animId: number;

    const spawnParticles = (x: number, y: number) => {
      for (let i = 0; i < (isCyberpunk ? 4 : 2); i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 0.5;
        particles.push({
          x, y,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => spawnParticles(e.clientX, e.clientY);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.dx *= 0.92;
        p.dy *= 0.92;
        p.life -= 0.04;

        ctx.globalAlpha = Math.max(0, p.life) * (isCyberpunk ? 0.9 : 0.5);
        ctx.fillStyle = p.color;
        if (isCyberpunk) {
          // Neon glow effect for cyberpunk
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, isCyberpunk ? 3 : 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        return p.life > 0;
      });

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [enabled, isCyberpunk]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseSpark;
