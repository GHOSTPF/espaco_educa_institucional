"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function HeroBadge() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-96"
      animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/logo-quadrada.png"
        alt="Espaço Educa — Reforço escolar e Assistência pedagógica"
        fill
        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 20rem, 16rem"
        className="object-contain drop-shadow-md"
        priority
      />
    </motion.div>
  );
}
