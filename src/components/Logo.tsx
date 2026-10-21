import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const letterColors = [
  "var(--color-pink-dark)",
  "var(--color-yellow-dark)",
  "var(--color-green-dark)",
  "var(--color-blue-dark)",
  "var(--color-purple-dark)",
];

export default function Logo({ className }: { className?: string }) {
  const text = "Espaço Educa";

  return (
    <span
      className={cn(
        "font-heading text-2xl sm:text-3xl font-bold tracking-tight select-none",
        className
      )}
      aria-label="Espaço Educa"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ color: char === " " ? undefined : letterColors[i % letterColors.length] }}
          whileHover={{
            y: -6,
            rotate: [0, -8, 8, 0],
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
