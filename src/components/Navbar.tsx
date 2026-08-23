"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-brown-dark/80 transition-colors hover:text-pink-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          {/* [PLACEHOLDER] Substituir "#" pela URL real do portal/login administrativo */}
          <Button href="#" variant="ghost" className="px-5 py-2.5 text-sm">
            Acessar o sistema
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full p-2 text-brown-dark hover:bg-pink/20 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: "easeOut" }}
                  className="rounded-xl px-3 py-3 font-heading text-base font-medium text-brown-dark hover:bg-pink/15"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.3, ease: "easeOut" }}
                className="mt-2"
              >
                <Button href="#" variant="primary" className="w-full">
                  Acessar o sistema
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
