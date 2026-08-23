"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { BookOpen, Heart, TrendingUp, Users } from "lucide-react";
import type { Service } from "@/lib/data";

const icons = {
  book: BookOpen,
  trending: TrendingUp,
  "heart-hands": Heart,
  family: Users,
};

const colorClasses = {
  pink: { bg: "bg-pink/25", icon: "text-pink-dark", shadow: "hover:shadow-[var(--shadow-pink)]" },
  blue: { bg: "bg-blue/25", icon: "text-blue-dark", shadow: "hover:shadow-[var(--shadow-blue)]" },
  yellow: { bg: "bg-yellow/25", icon: "text-yellow-dark", shadow: "hover:shadow-[var(--shadow-yellow)]" },
  green: { bg: "bg-green/25", icon: "text-green-dark", shadow: "hover:shadow-[var(--shadow-green)]" },
};

export default function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const Icon = icons[service.icon];
  const colors = colorClasses[service.color];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`h-full rounded-3xl bg-white/80 p-7 shadow-md transition-shadow duration-300 ${colors.shadow}`}
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}>
        <Icon className={colors.icon} size={26} />
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold text-brown-dark">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-brown-light">
        {service.description}
      </p>
    </motion.div>
  );
}
