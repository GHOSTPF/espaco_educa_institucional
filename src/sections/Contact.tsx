import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contact, whatsappLink } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa6";

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: whatsappLink("Olá! Vim pelo site do Espaço Educa e gostaria de mais informações."),
    icon: FaWhatsapp,
    color: "bg-green/30 text-green-dark",
    pulse: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    icon: InstagramIcon,
    color: "bg-pink/30 text-pink-dark",
    pulse: false,
  },
  {
    id: "email",
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    color: "bg-blue/30 text-blue-dark",
    pulse: false,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-hand text-2xl text-pink-dark">Contato</span>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brown-dark sm:text-4xl">
            Vamos conversar sobre o seu filho ou filha
          </h2>
          <p className="mt-4 text-base text-brown-light sm:text-lg">
            Escolha o canal que preferir ou envie uma mensagem pelo formulário abaixo.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            {channels.map((channel, i) => (
              <ScrollReveal key={channel.id} delay={0.1 * i}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${channel.color}`}>
                    {channel.pulse && (
                      <span className="absolute inset-0 rounded-2xl bg-green-dark/30 animate-pulse-soft" />
                    )}
                    <channel.icon size={24} className="relative" />
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-brown-dark">
                      {channel.label}
                    </span>
                    <span className="block text-sm text-brown-light break-all">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div className="rounded-3xl bg-babyblue/50 p-7 shadow-sm sm:p-9">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
