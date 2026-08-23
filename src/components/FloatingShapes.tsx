"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export default function FloatingShapes() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  const layer1X = useTransform(springX, (v) => v * 14);
  const layer1Y = useTransform(springY, (v) => v * 14);
  const layer2X = useTransform(springX, (v) => v * -22);
  const layer2Y = useTransform(springY, (v) => v * -22);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Blobs orgânicos com gradiente pastel */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink/50 blur-3xl animate-blob" />
      <div
        className="absolute top-10 -right-20 h-96 w-96 rounded-full bg-blue/50 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow/40 blur-3xl animate-blob"
        style={{ animationDelay: "-11s" }}
      />

      {/* Formas flutuantes com leve paralaxe ao mouse */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute left-[8%] top-[20%] h-6 w-6 rounded-full bg-yellow-dark/70 animate-float"
      />
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute left-[18%] top-[65%] h-4 w-4 rounded-full bg-pink-dark/60 animate-float-slow"
      />
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute right-[12%] top-[15%] h-5 w-5 rotate-45 rounded-md bg-blue-dark/60 animate-float-slow"
      />
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute right-[20%] top-[70%] h-7 w-7 rounded-full bg-green-dark/50 animate-float"
      />
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute right-[35%] top-[8%] h-3 w-3 rounded-full bg-purple-dark/70 animate-float"
      />
    </div>
  );
}
