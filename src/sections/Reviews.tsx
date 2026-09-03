import { FcGoogle } from "react-icons/fc";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-blue-dark">
            Avaliações no Google
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-brown-dark sm:text-4xl md:text-5xl">
            O que dizem sobre o Espaço Educa.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white/70 p-6 shadow-sm sm:p-8 md:flex-row md:gap-8">
            <FcGoogle size={44} className="shrink-0" />

            <p className="flex-1 text-center text-base text-brown-light md:text-left">
              Veja o que as famílias dizem e deixe sua avaliação do Espaço Educa
              no Google.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={reviews.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brown-dark px-6 py-3 text-center font-heading text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver avaliações
              </a>
              <a
                href={reviews.writeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brown-dark/20 px-6 py-3 text-center font-heading text-sm font-semibold text-brown-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-brown-dark/40 hover:shadow-lg"
              >
                Deixar minha avaliação
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
