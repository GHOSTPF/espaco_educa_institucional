"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 28, stiffness: 90 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(prefersReducedMotion ? value : value);
    }
  }, [isInView, motionValue, value, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl font-extrabold text-pink-dark sm:text-5xl"
    >
      0{suffix}
    </span>
  );
}
