"use client";

import { Quote } from "lucide-react";
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
          <p className="mt-4 text-base text-brown-light sm:text-lg">
            <span className="block text-xs text-brown-light/70">
              [Depoimentos ilustrativos — serão substituídos por relatos reais das famílias atendidas]
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-14">
          <Carousel
            items={testimonials}
            ariaLabel="Depoimentos de pais e responsáveis"
            slideClassName="basis-[88%] sm:basis-[65%] lg:basis-[46%]"
            renderItem={(t) => (
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
                <Quote className="text-pink" size={30} />
                <p className="mt-4 flex-1 text-base leading-relaxed text-brown-dark sm:text-lg">
                  {t.quote}
                </p>
                <div className="mt-6">
                  <p className="font-heading font-bold text-brown-dark">{t.name}</p>
                  <p className="text-sm text-brown-light">{t.role}</p>
                </div>
              </div>
            )}
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
