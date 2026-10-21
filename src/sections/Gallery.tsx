import Carousel from "@/components/Carousel";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-green-dark">Nosso espaço</span>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
            Um ambiente pensado para o aprendizado
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-14">
          <Carousel
            items={galleryImages}
            ariaLabel="Galeria de fotos do Espaço Educa"
            renderItem={(image) => (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
