import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="relative bg-babyblue/40 py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-pink-dark">Por que o Espaço Educa</span>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
            Cuidado pedagógico em cada etapa
          </h2>
          <p className="mt-4 text-base text-brown-light sm:text-lg">
            Da educação infantil ao fundamental 2, oferecemos um acompanhamento completo, próximo da família e feito sob medida para cada aluno.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={0.12 * i} y={36}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
