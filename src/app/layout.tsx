import type { Metadata } from "next";
import { Baloo_2, Caveat, Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Espaço Educa | Reforço escolar e acompanhamento pedagógico",
  description:
    "Espaço Educa: reforço escolar e acompanhamento pedagógico individualizado em João Pessoa/PB, da educação infantil ao fundamental 2. Cada criança aprende do seu jeito — a gente acompanha esse jeito de perto.",
  keywords: [
    "reforço escolar João Pessoa",
    "acompanhamento pedagógico",
    "Espaço Educa",
    "aula de reforço",
    "acompanhamento escolar infantil",
  ],
  openGraph: {
    title: "Espaço Educa | Reforço escolar e acompanhamento pedagógico",
    description:
      "Reforço escolar e acompanhamento pedagógico individualizado em João Pessoa/PB, da educação infantil ao fundamental 2.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${baloo.variable} ${caveat.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-brown-dark overflow-x-hidden">
        <IntroSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
