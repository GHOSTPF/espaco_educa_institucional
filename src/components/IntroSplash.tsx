"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/Logo";

type ItemKind = "book" | "pencil" | "ruler" | "apple";

const items: { kind: ItemKind; color: string; rotate: number }[] = [
  { kind: "pencil", color: "var(--color-blue-dark)", rotate: -14 },
  { kind: "book", color: "var(--color-pink-dark)", rotate: -8 },
  { kind: "apple", color: "var(--color-pink)", rotate: -3 },
  { kind: "ruler", color: "var(--color-yellow)", rotate: 0 },
  { kind: "book", color: "var(--color-green-dark)", rotate: 4 },
  { kind: "pencil", color: "var(--color-purple-dark)", rotate: 9 },
  { kind: "book", color: "var(--color-blue-dark)", rotate: 13 },
];

function BookShape({ color }: { color: string }) {
  return (
    <>
      <rect x="4" y="4" width="48" height="62" rx="5" fill={color} />
      <rect x="4" y="4" width="48" height="62" rx="5" fill="white" fillOpacity="0.14" />
      <line x1="28" y1="4" x2="28" y2="66" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
      <rect x="10" y="15" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.75" />
      <rect x="10" y="23" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.75" />
      <rect x="32" y="15" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.75" />
      <rect x="32" y="23" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.75" />
    </>
  );
}

function PencilShape({ color }: { color: string }) {
  return (
    <>
      <rect x="20" y="4" width="16" height="10" rx="4" fill="var(--color-pink)" />
      <rect x="20" y="13" width="16" height="6" fill="#e8e4dc" />
      <rect x="20" y="19" width="16" height="35" fill={color} />
      <path d="M 20,54 L 36,54 L 28,66 Z" fill="#e8c39e" />
      <path d="M 25,54 L 31,54 L 28,61 Z" fill="var(--color-brown-dark)" />
    </>
  );
}

function RulerShape({ color }: { color: string }) {
  return (
    <>
      <rect x="17" y="4" width="22" height="62" rx="3" fill={color} stroke="var(--color-brown-light)" strokeWidth="1.5" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1="17"
          y1={9 + i * 5.5}
          x2={i % 2 === 0 ? "30" : "25"}
          y2={9 + i * 5.5}
          stroke="var(--color-brown-dark)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
      ))}
    </>
  );
}

function AppleShape({ color }: { color: string }) {
  return (
    <>
      <path
        d="M28,26 C14,26 8,40 10,50 C12,60 20,66 28,66 C36,66 44,60 46,50 C48,40 42,26 28,26 Z"
        fill={color}
      />
      <path
        d="M28,26 C24,20 24,14 30,10"
        fill="none"
        stroke="var(--color-brown-dark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="34" cy="14" rx="7" ry="4" fill="var(--color-green-dark)" transform="rotate(30 34 14)" />
    </>
  );
}

function FallingItem({ kind, color, rotate, delay }: { kind: ItemKind; color: string; rotate: number; delay: number }) {
  return (
    <motion.svg
      width="44"
      height="56"
      viewBox="0 0 56 70"
      className="sm:w-14 sm:h-[70px] drop-shadow-md"
      initial={{ y: -280, opacity: 0, rotate: 0 }}
      animate={{ y: 0, opacity: 1, rotate }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 15, mass: 0.9 }}
    >
      {kind === "book" && <BookShape color={color} />}
      {kind === "pencil" && <PencilShape color={color} />}
      {kind === "ruler" && <RulerShape color={color} />}
      {kind === "apple" && <AppleShape color={color} />}
    </motion.svg>
  );
}

/**
 * Splash de entrada: materiais escolares (livros, lápis, régua, maçã) caem
 * em queda com efeito de mola junto com a logo, aguardam um instante em tela
 * e depois sobem para revelar o site (que já terminou suas próprias
 * animações de entrada por trás do painel). Roda uma única vez por
 * carregamento da página, pois vive no layout raiz (não no template, que
 * remonta a cada navegação).
 */
export default function IntroSplash() {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<"intro" | "exit" | "done">("intro");

  useEffect(() => {
    if (prefersReducedMotion) {
      const skip = setTimeout(() => setStage("done"), 0);
      return () => clearTimeout(skip);
    }

    document.body.style.overflow = "hidden";
    const toExit = setTimeout(() => setStage("exit"), 1750);
    return () => clearTimeout(toExit);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (stage !== "exit") return;
    const toDone = setTimeout(() => {
      setStage("done");
      document.body.style.overflow = "";
    }, 750);
    return () => clearTimeout(toDone);
  }, [stage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (stage === "done") return null;

  const logoDelay = 0.15 + items.length * 0.09 + 0.15;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-cream"
      initial={{ y: 0 }}
      animate={{ y: stage === "exit" ? "-100%" : 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <div className="flex flex-wrap items-end justify-center gap-3 px-6 sm:gap-4">
        {items.map((item, i) => (
          <FallingItem key={i} kind={item.kind} color={item.color} rotate={item.rotate} delay={0.15 + i * 0.09} />
        ))}
      </div>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: logoDelay, type: "spring", stiffness: 220, damping: 18 }}
      >
        <Logo className="text-3xl sm:text-4xl" />
      </motion.div>
    </motion.div>
  );
}
