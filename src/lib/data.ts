export const site = {
  name: "Espaço Educa",
  slogan: "Reforço escolar e acompanhamento pedagógico",
  highlight:
    "Cada criança aprende do seu jeito. A gente acompanha esse jeito de perto.",
  description:
    "O Espaço Educa nasceu para apoiar famílias que buscam mais do que aulas de reforço: buscam acompanhamento próximo, planejamento pedagógico individualizado e um ambiente acolhedor para crianças e adolescentes aprenderem com confiança.",
  descriptionExtra:
    "Funcionamos da educação infantil ao fundamental 2. Crianças e adolescentes recebem acompanhamento pedagógico individualizado, com planejamento pensado para suas necessidades, acompanhamento da rotina escolar e comunicação próxima com a família. Nossa equipe acompanha a rotina escolar de cada aluno, observa seu desenvolvimento, registra sua evolução ao longo do tempo e mantém os responsáveis informados sobre frequência, planejamento e feedback pedagógico — tudo em parceria com a escola de origem da criança.",
};

export const contact = {
  whatsappDisplay: "(83) 98738-2105 - (83) 98783-5504",
  whatsappNumber: "5583987382105",
  instagramHandle: "@espacoeducaa",
  instagramUrl: "https://instagram.com/espacoeducaa",
  email: "paoladesigner2020@gmail.com",
};

export const reviews = {
  // [PLACEHOLDER] Substituir pelos links reais do perfil do Espaço Educa no Google.
  // viewUrl: link para a ficha do Google com as avaliações.
  // writeUrl: link direto "Escrever avaliação" (https://search.google.com/local/writereview?placeid=PLACE_ID).
  viewUrl:
    "https://www.google.com/maps/search/Espa%C3%A7o+Educa+Jo%C3%A3o+Pessoa",
  writeUrl:
    "https://www.google.com/maps/search/Espa%C3%A7o+Educa+Jo%C3%A3o+Pessoa",
};

export const location = {
  addressLine1: "R. Ten-Cel. Albertino Francisco dos Santos, 410",
  addressLine2: "Cidade dos Funcionários II, João Pessoa/PB",
  cep: "CEP 58079-360",
  hours: "Segunda a Sexta, das 8h às 18h",
  note: "Atendimento presencial mediante agendamento prévio pelo WhatsApp.",
  mapEmbedSrc:
    "https://www.google.com/maps?q=R.+Ten-Cel.+Albertino+Francisco+dos+Santos,+410,+Cidade+dos+Funcion%C3%A1rios+II,+Jo%C3%A3o+Pessoa+-+PB,+58079-360&output=embed",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Contato", href: "/#contato" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Localização", href: "/#localizacao" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "book" | "trending" | "heart-hands" | "family" | "school";
  color: "pink" | "blue" | "yellow" | "green";
};

export const services: Service[] = [
  {
    id: "reforco-escolar",
    title: "Reforço escolar",
    description:
      "Apoio nas disciplinas do currículo escolar, com atenção às dificuldades e necessidades de cada aluno.",
    icon: "book",
    color: "pink",
  },
  {
    id: "acompanhamento-pedagogico",
    title: "Acompanhamento pedagógico",
    description:
      "Suporte aos alunos com dificuldades de aprendizagem, respeitando seu ritmo e suas necessidades.",
    icon: "heart-hands",
    color: "yellow",
  },
  {
    id: "parceria-com-a-familia",
    title: "Parceria com a família",
    description:
      "Frequência, planejamento e feedback pedagógico disponíveis para os responsáveis a qualquer momento.",
    icon: "family",
    color: "green",
  },
  {
    id: "parceria-com-a-escola",
    title: "Parceria com a Escola",
    description:
      "Diálogo constante com a escola para construir estratégias que favoreçam o desenvolvimento, a aprendizagem e o bem-estar de cada aluno.",
    icon: "school",
    color: "blue",
  },
];

// [PLACEHOLDER] Números reais devem ser fornecidos pelo Espaço Educa.
export const counters = [
  { id: "anos", label: "anos de experiência", value: 3, suffix: "+" },
  { id: "alunos", label: "alunos atendidos", value: 120, suffix: "+" },
  { id: "familias", label: "satisfação das famílias", value: 98, suffix: "%" },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

// Fotos reais do Espaço Educa (public/foto1.jpeg … foto10.jpeg).
export const galleryImages: GalleryImage[] = Array.from({ length: 10 }, (_, i) => ({
  id: `gal-${i + 1}`,
  src: `/foto${i + 1}.jpeg`,
  alt: `Foto ${i + 1} do Espaço Educa`,
}));

export type Testimonial = {
  id: string;
  name: string;
  date: string;
  rating: number;
  quote: string;
};

// Avaliações reais publicadas no Google.
export const testimonials: Testimonial[] = [
  {
    id: "dep-kelly",
    name: "Kelly Thallys Moraes",
    date: "7 meses atrás",
    rating: 5,
    quote:
      "Excelente profissional, meu filho e eu, claro, amamos. Parabéns, está cada dia melhor.",
  },
  {
    id: "dep-jean",
    name: "Jean Marx",
    date: "um ano atrás",
    rating: 5,
    quote:
      "Ambiente muito limpo e aconchegante, professora super atenciosa e com métodos de ensino muito eficientes. O desenvolvimento escolar dos nossos filhos melhorou significativamente. Recomendo a todos que precisam melhorar seu desempenho escolar.",
  },
  {
    id: "dep-marilia",
    name: "Marília Veloso",
    date: "um ano atrás",
    rating: 5,
    quote:
      "Super organizado, dinâmico e atencioso com as crianças. Usa uma didática atual e fácil para o aprendizado das crianças. Indico demais! 😉",
  },
  {
    id: "dep-wanessa",
    name: "Wanessa Kerolyn",
    date: "um ano atrás",
    rating: 5,
    quote:
      "Um local bastante aconchegante e com um método de ensino diferenciado. Tudo feito com muita dedicação e nos mínimos detalhes. Nota mil!!!",
  },
  {
    id: "dep-maria",
    name: "Maria Eduarda",
    date: "um ano atrás",
    rating: 5,
    quote:
      "Excelente lugar pra colocar o seu filho, ensino e técnicas bem especiais, adoreii.",
  },
  {
    id: "dep-laryssa",
    name: "Laryssa Santos",
    date: "um ano atrás",
    rating: 5,
    quote:
      "É um ambiente feliz, acolhedor e inspirador para as nossas crianças. ❤️",
  },
];
