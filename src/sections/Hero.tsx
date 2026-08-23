"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FloatingShapes from "@/components/FloatingShapes";
import HeroBadge from "@/components/HeroBadge";
import { site, whatsappLink } from "@/lib/data";

const titleWords = "Cada criança merece um jeito próprio de aprender".split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      <FloatingShapes />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl font-extrabold leading-tight text-brown-dark sm:text-5xl lg:text-6xl"
          >
            {titleWords.map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-3">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="relative mt-5 inline-block font-hand text-2xl text-pink-dark sm:text-3xl"
          >
            {site.highlight}
            <motion.svg
              viewBox="0 0 300 14"
              className="absolute -bottom-2 left-0 h-3 w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M2,8 C60,2 140,12 298,6"
                fill="none"
                stroke="var(--color-yellow-dark)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.3, duration: 1, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-6 max-w-xl text-base text-brown-light sm:text-lg lg:mx-0 mx-auto"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              href={whatsappLink("Olá! Vim pelo site do Espaço Educa e gostaria de falar com vocês.")}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a gente
            </Button>
            <Button href="#servicos" variant="secondary">
              Conhecer os serviços
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative"
        >
          <HeroBadge />
        </motion.div>
      </Container>
    </section>
  );
}
