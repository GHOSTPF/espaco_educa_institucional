import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const Comp = motion[as];

  return (
    <Comp
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
