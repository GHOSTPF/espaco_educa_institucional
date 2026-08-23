import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de Privacidade | Espaço Educa",
  description: "Política de privacidade do site do Espaço Educa.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-pink-dark hover:underline"
        >
          <ArrowLeft size={16} /> Voltar para o início
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
          Política de Privacidade
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-brown-light">
          <p>
            Esta página tem caráter ilustrativo e deve ser revisada por um profissional
            responsável antes da publicação oficial do site do Espaço Educa.
          </p>
          <p>
            O Espaço Educa coleta apenas as informações necessárias para responder a
            contatos realizados por meio deste site (nome, telefone e mensagem enviados
            pelo formulário de contato), com o único propósito de retornar o atendimento
            solicitado.
          </p>
          <p>
            Não compartilhamos dados pessoais com terceiros para fins comerciais. As
            informações fornecidas podem ser utilizadas para comunicação direta com a
            família interessada nos serviços do Espaço Educa.
          </p>
          <p>
            Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados,
            entre em contato pelo e-mail{" "}
            <a href={`mailto:${contact.email}`} className="text-pink-dark hover:underline">
              {contact.email}
            </a>
            .
          </p>
          <p className="text-sm text-brown-light/70">
            [Conteúdo placeholder — adequar de acordo com a LGPD e a realidade de
            tratamento de dados do Espaço Educa antes da publicação.]
          </p>
        </div>
      </Container>
    </section>
  );
}
