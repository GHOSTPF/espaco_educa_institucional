import { motion, useReducedMotion } from "framer-motion";

export default function HeroBadge() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-96"
      animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src="/logo-quadrada.png"
        alt="Espaço Educa — Reforço escolar e Assistência pedagógica"
        className="absolute inset-0 h-full w-full object-contain drop-shadow-md"
        fetchPriority="high"
      />
    </motion.div>
  );
}
