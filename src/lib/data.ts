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
  whatsappDisplay: "(83) 98738-2105",
  whatsappNumber: "5583987382105",
  instagramHandle: "@espacoeducaa",
  instagramUrl: "https://instagram.com/espacoeducaa",
  email: "paoladesigner2020@gmail.com",
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
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: "#localizacao" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "book" | "trending" | "heart-hands" | "family";
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
    id: "acompanhamento-individualizado",
    title: "Acompanhamento individualizado",
    description:
      "Planejamento pedagógico próprio para cada criança, com objetivos, estratégias e acompanhamento da evolução.",
    icon: "trending",
    color: "blue",
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
];

// [PLACEHOLDER] Números reais devem ser fornecidos pelo Espaço Educa.
export const counters = [
  { id: "anos", label: "[inserir número real] anos de experiência", value: 5, suffix: "+" },
  { id: "alunos", label: "[inserir número real] alunos atendidos", value: 120, suffix: "+" },
  { id: "familias", label: "[inserir número real] satisfação das famílias", value: 98, suffix: "%" },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

// [PLACEHOLDER] Fotos ilustrativas do Unsplash — substituir pelas fotos reais do espaço.
export const galleryImages: GalleryImage[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Crianças estudando juntas em sala acolhedora",
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Material pedagógico colorido sobre a mesa",
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Criança concentrada fazendo atividade escolar",
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Sala de aula lúdica e colorida",
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Professora auxiliando aluno em atividade",
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1200&q=80",
    alt: "[Foto ilustrativa] Livros e materiais escolares organizados",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

// [PLACEHOLDER] Depoimentos ilustrativos — substituir por depoimentos reais das famílias.
export const testimonials: Testimonial[] = [
  {
    id: "dep-1",
    name: "[Nome do responsável]",
    role: "Mãe de aluno do 4º ano",
    quote:
      "[Depoimento ilustrativo] Meu filho ganhou muito mais confiança nos estudos depois que começou no Espaço Educa. O acompanhamento é próximo e sentimos que realmente conhecem cada criança.",
  },
  {
    id: "dep-2",
    name: "[Nome do responsável]",
    role: "Pai de aluna da educação infantil",
    quote:
      "[Depoimento ilustrativo] A comunicação com a família é muito clara. Sempre sabemos como está a rotina escolar e o desenvolvimento da nossa filha.",
  },
  {
    id: "dep-3",
    name: "[Nome do responsável]",
    role: "Mãe de aluno do 7º ano",
    quote:
      "[Depoimento ilustrativo] O planejamento individualizado fez toda a diferença nas notas e, principalmente, na motivação dele para estudar.",
  },
];
