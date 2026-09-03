import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";
import { counters, site } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <span className="font-hand text-2xl text-blue-dark">Quem somos</span>
            <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
              Acompanhamento próximo, do jeito que cada criança precisa
            </h2>
            {/* <p className="mt-5 text-base leading-relaxed text-brown-light sm:text-lg">
              {site.description}
            </p> */}
            <p className="mt-4 text-base leading-relaxed text-brown-light sm:text-lg">
              {site.descriptionExtra}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {counters.map((counter, i) => (
                <ScrollReveal
                  key={counter.id}
                  delay={0.1 * i}
                  className="rounded-3xl bg-babyblue/70 p-6 text-center shadow-sm"
                >
                  <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                  <p className="mt-2 text-xs font-medium text-brown-light">
                    {counter.label}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
