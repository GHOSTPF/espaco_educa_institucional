import { Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { location } from "@/lib/data";

export default function Location() {
  return (
    <section id="localizacao" className="relative bg-babyblue/40 py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-yellow-dark">Localização</span>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
            Venha nos conhecer
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-stretch">
          <ScrollReveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center gap-6 rounded-3xl bg-white/80 p-8 shadow-sm">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink/25 text-pink-dark">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="font-heading font-bold text-brown-dark">Endereço</p>
                  <p className="mt-1 text-sm text-brown-light">
                    {location.addressLine1}
                    <br />
                    {location.addressLine2}
                    <br />
                    {location.cep}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue/25 text-blue-dark">
                  <Clock size={22} />
                </span>
                <div>
                  <p className="font-heading font-bold text-brown-dark">Funcionamento</p>
                  <p className="mt-1 text-sm text-brown-light">{location.hours}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-yellow/20 p-4 text-sm text-brown-dark">
                {location.note}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="h-80 overflow-hidden rounded-3xl shadow-lg lg:h-full">
              <iframe
                title="Localização do Espaço Educa no mapa"
                src={location.mapEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
