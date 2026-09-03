"use client";

import { Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Carousel from "@/components/Carousel";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-babyblue/40 py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-blue-dark">Depoimentos</span>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
            O que as famílias dizem
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-base text-brown-light sm:text-lg">
            <FcGoogle size={22} />
            Avaliações reais publicadas no Google
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-14">
          <Carousel
            items={testimonials}
            ariaLabel="Depoimentos de pais e responsáveis"
            slideClassName="basis-[88%] sm:basis-[65%] lg:basis-[46%]"
            renderItem={(t) => (
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink/25 font-heading text-lg font-bold text-pink-dark">
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-heading font-bold text-brown-dark">
                      {t.name}
                    </p>
                    <p className="text-sm text-brown-light">{t.date}</p>
                  </div>
                  <FcGoogle size={22} className="ml-auto shrink-0" />
                </div>

                <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < t.rating
                          ? "fill-yellow-dark text-yellow-dark"
                          : "text-brown-light/30"
                      }
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-base leading-relaxed text-brown-dark">
                  {t.quote}
                </p>
              </div>
            )}
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
