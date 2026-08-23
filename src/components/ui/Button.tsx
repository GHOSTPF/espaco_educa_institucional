"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  href: string;
};

const variants = {
  primary:
    "bg-pink-dark text-white shadow-[var(--shadow-pink)] hover:bg-[#e85b8c]",
  secondary:
    "bg-transparent text-pink-dark border-2 border-pink-dark hover:bg-pink/20",
  ghost:
    "bg-blue text-brown-dark hover:bg-blue-dark",
} as const;

export default function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading font-semibold text-base sm:text-lg transition-colors duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
