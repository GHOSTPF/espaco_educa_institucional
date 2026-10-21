import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
