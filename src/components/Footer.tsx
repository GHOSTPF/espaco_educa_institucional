import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InstagramIcon from "@/components/icons/InstagramIcon";
import Logo from "@/components/Logo";
import Container from "@/components/ui/Container";
import { contact, location, navLinks, site, whatsappLink } from "@/lib/data";

const socials = [
  {
    label: "WhatsApp",
    href: whatsappLink("Olá! Vim pelo site do Espaço Educa e gostaria de mais informações."),
    icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: contact.instagramUrl,
    icon: InstagramIcon,
  },
  {
    label: "E-mail",
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brown-dark/10 bg-babyblue/60">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-brown-light">
            {site.slogan}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brown-dark/70">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-brown-light transition-colors hover:text-pink-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brown-dark/70">
            Contato
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brown-light">
            <li>WhatsApp: {contact.whatsappDisplay}</li>
            <li>{contact.instagramHandle}</li>
            <li className="break-all">{contact.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brown-dark/70">
            Redes sociais
          </h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-dark shadow-sm transition-colors hover:bg-pink-dark hover:text-white"
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </div>
          <p className="mt-5 text-xs text-brown-light">{location.hours}</p>
        </div>
      </Container>

      <div className="border-t border-brown-dark/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-brown-light sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Espaço Educa. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-pink-dark hover:underline">
              Política de Privacidade
            </Link>
            <p>Feito com carinho para o cuidado de cada criança.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
