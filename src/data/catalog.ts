export type BoardCategory = { slug: string; name: string; status?: "development" };
export type BoardViewLabel = "Frente" | "Lado direito" | "Costas" | "Lado esquerdo";
/** As fotos seguem o giro: frente → lado direito → costas → lado esquerdo. */
export type BoardImage = {
  src: string;
  alt: string;
  label?: BoardViewLabel;
};
export type BoardSpecifications = { tail: string; setup: string; waves: string };
export type BoardSize = { size: string; width: string; fluctuation: string; volume: string };

export type BoardModel = {
  slug: string;
  categorySlug: BoardCategory["slug"];
  name: string;
  description: string;
  specifications: BoardSpecifications;
  sizes: BoardSize[];
  images?: BoardImage[];
};

export type BoardEditorial = {
  card: string;
  paragraphs: string[];
};

const size = (size: string, width: string, fluctuation: string, volume: string): BoardSize => ({
  size,
  width,
  fluctuation,
  volume,
});

const officialImages = (slug: string, name: string): BoardImage[] => [
  { src: `/media/models/${slug}-1.png`, alt: `${name}, vista frontal`, label: "Frente" },
  {
    src: `/media/models/${slug}-3.png`,
    alt: `${name}, vista lateral direita`,
    label: "Lado direito",
  },
  { src: `/media/models/${slug}-2.png`, alt: `${name}, vista traseira`, label: "Costas" },
];

export const boardCategories: BoardCategory[] = [
  { slug: "shortboards", name: "Shortboards" },
  { slug: "fish-retro", name: "Fish & Retro Series" },
  { slug: "fun", name: "Fun" },
  { slug: "longboards", name: "Longboards" },
  { slug: "paddleboards", name: "Paddleboards", status: "development" },
  { slug: "stand-up", name: "Stand Up" },
];

// Cadastro baseado exclusivamente nas informações oficiais fornecidas pela Ripwave.
export const boardModels: BoardModel[] = [
  {
    slug: "the-rip-1",
    categorySlug: "shortboards",
    name: "The Rip 1",
    description:
      "Design consagrado pelo nosso shaper Beto Loureiro. Esta prancha é o verdadeiro foguete. Apresenta um single concave por toda a prancha com a parte mais funda entre as quilhas. Com uma entrada suave do rocker que vai até o kick, mais forte na rabeta. Rápida e solta. Isso faz jogar água para todos os lados. Ideal para ondas de beach break e reef.",
    images: [
      { src: "/media/models/the-rip-1-1.jpg", alt: "The Rip 1, vista frontal", label: "Frente" },
      {
        src: "/media/models/the-rip-1-3.jpg",
        alt: "The Rip 1, vista lateral direita",
        label: "Lado direito",
      },
      { src: "/media/models/the-rip-1-2.jpg", alt: "The Rip 1, vista traseira", label: "Costas" },
      {
        src: "/media/models/the-rip-1-4.jpg",
        alt: "The Rip 1, vista lateral esquerda",
        label: "Lado esquerdo",
      },
    ],
    specifications: {
      tail: "Squash, Round, Swallow e Square",
      setup: "3 plugs",
      waves: "0,5 m até 2,5 m",
    },
    sizes: [
      size("5'8\"", '18.00"', '2.13"', "22.0 L"),
      size("5'9\"", '18.25"', '2.25"', "23.8 L"),
      size("5'10\"", '18.50"', '2.31"', "25 L"),
      size("5'11\"", '18.63"', '2.38"', "26.5 L"),
      size("6'0\"", '18.69"', '2.44"', "27.7 L"),
      size("6'1\"", '18.75"', '2.50"', "28.7 L"),
      size("6'2\"", '19.00"', '2.63"', "30.8 L"),
    ],
  },
  {
    slug: "the-rip-2",
    categorySlug: "shortboards",
    name: "The Rip 2",
    description:
      "Modelo padrão de pranchas pequenas para o Brasil. Ótima para diversas condições, possui mais volume que a The Rip 1. Com uma curva mais flat fluindo por toda a prancha, ajuda na projeção e na realização das manobras. Possui um único concave que corre pela prancha com a área mais funda na rabeta a qual lhe dá mais sustentação, impulsão e velocidade. A The Rip 2 é a escolha certa para todas as condições de surf.",
    images: officialImages("the-rip-2", "The Rip 2"),
    specifications: {
      tail: "Squash, Round, Swallow e Square",
      setup: "3 plugs",
      waves: "0,5 m até 2,5 m",
    },
    sizes: [
      size("5'8\"", '18.50"', '2.38"', "25.7 L"),
      size("5'10\"", '18.75"', '2.44"', "27.6 L"),
      size("5'11\"", '19.00"', '2.50"', "29.2 L"),
      size("6'0\"", '19.25"', '2.63"', "31.7 L"),
      size("6'2\"", '19.50"', '2.69"', "33.9 L"),
      size("6'4\"", '20.00"', '2.75"', "36.5 L"),
    ],
  },
  {
    slug: "the-strong",
    categorySlug: "shortboards",
    name: "The Strong",
    description:
      "Grande poder de remada com um surf solto e agradável. Este modelo é a última novidade em prancha high performance para surfistas mais pesados, sendo uma excelente prancha de transição para iniciantes. Geralmente, surfistas mais altos, mais antigos e menos experientes, preferem este modelo, já que é mais fácil de remar e é mais estável. Diferente dos modelos The Rip, este modelo tem muito mais volume, facilitando a entrada na onda e o drop.",
    images: officialImages("the-strong", "The Strong"),
    specifications: {
      tail: "Squash, Round, Swallow e Square",
      setup: "3 plugs ou 5 plugs",
      waves: "0,5 m até 2,5 m",
    },
    sizes: [
      size("5'10\"", '19.25"', '2.50"', "29.2 L"),
      size("5'11\"", '19.50"', '2.63"', "31.5 L"),
      size("6'0\"", '19.75"', '2.69"', "33.1 L"),
      size("6'1\"", '20.00"', '2.75"', "34.6 L"),
      size("6'2\"", '20.25"', '2.88"', "37.5 L"),
      size("6'3\"", '20.50"', '3.00"', "40.0 L"),
    ],
  },
  {
    slug: "wave-toys",
    categorySlug: "shortboards",
    name: "Wave Toys",
    description:
      "Como o próprio nome diz, um brinquedo para as ondas. Com ela você não irá se estressar. Uma prancha com menos curva e um outline mais redondo facilita para entrar na onda e percorrê-la com maior velocidade. Para a diversão não há restrições de experiência sobre as ondas. Pegue e divirta-se.",
    images: officialImages("wave-toys", "Wave Toys"),
    specifications: { tail: "Squash", setup: "5 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("5'10\"", '19.00"', '2.44"', "28.7 L"),
      size("6'0\"", '19.50"', '2.50"', "31 L"),
      size("6'2\"", '19.75"', '2.56"', "33.1 L"),
      size("6'4\"", '20.00"', '2.63"', "35.6 L"),
      size("6'6\"", '20.50"', '2.69"', "38 L"),
      size("6'8\"", '20.75"', '2.75"', "40.5 L"),
    ],
  },
  {
    slug: "evolution",
    categorySlug: "shortboards",
    name: "Evolution",
    description:
      "Prancha indicada para surfistas que estão iniciando, com baixo peso ou para os que estão em evolução mas não prontos para se arriscar com um modelo performance.",
    images: officialImages("evolution", "Evolution"),
    specifications: { tail: "Squash", setup: "3 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("6'8\"", '20.00"', '2.63"', "38.9 L"),
      size("6'10\"", '20.25"', '2.69"', "41.4 L"),
      size("7'0\"", '20.50"', '2.75"', "43.7 L"),
      size("7'2\"", '20.75"', '2.88"', "47.6 L"),
      size("7'4\"", '21.00"', '3.00"', "51.4 L"),
    ],
  },
  {
    slug: "key-ring",
    categorySlug: "fish-retro",
    name: "Key Ring",
    description:
      "A KeyRing é a prancha que vai fazer você surfar as marolas sem força alguma, naqueles dias que normalmente sua prancha afunda ou entra de borda. Possui uma curva de fundo suave, passando de um single concave no meio até a área das quilhas onde temos um double concave. Um skate para água!",
    images: [
      { src: "/media/models/key-ring-1.jpg", alt: "Key Ring, vista frontal", label: "Frente" },
      {
        src: "/media/models/key-ring-3.jpg",
        alt: "Key Ring, vista lateral direita",
        label: "Lado direito",
      },
      { src: "/media/models/key-ring-2.jpg", alt: "Key Ring, vista traseira", label: "Costas" },
      {
        src: "/media/models/key-ring-4.jpg",
        alt: "Key Ring, vista lateral esquerda",
        label: "Lado esquerdo",
      },
    ],
    specifications: { tail: "Diamond e Squash", setup: "5 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("5'6\"", '21.00"', '2.50"', "32.3 L"),
      size("5'8\"", '21.25"', '2.56"', "34.5 L"),
      size("5'10\"", '21.50"', '2.63"', "37 L"),
      size("5'11\"", '21.75"', '2.69"', "38.9 L"),
      size("6'0\"", '22.00"', '2.75"', "40.7 L"),
      size("6'2\"", '22.25"', '2.88"', "44.1 L"),
    ],
  },
  {
    slug: "portable",
    categorySlug: "fish-retro",
    name: "Portable",
    description:
      'A Portable será a menor prancha do seu quiver, pelo menos 5" polegadas menor que sua prancha comum, com característica de linhas de onda mais abertas. Tem um fundo trabalhado em Vee Bottom e Double Vee Bottom na região das quilhas para ajudar na troca de borda. Além de gerar velocidade apesar de seu ótimo volume. Prancha para linhas de surf alternativas.',
    images: officialImages("portable", "Portable"),
    specifications: { tail: "Squash e Diamond", setup: "5 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("5'2\"", '20.50"', '2.25"', "27 L"),
      size("5'4\"", '20.75"', '2.33"', "29.1 L"),
      size("5'6\"", '21.00"', '2.38"', "30.9 L"),
      size("5'8\"", '21.25"', '2.44"', "33.2 L"),
      size("5'10\"", '21.50"', '2.50"', "35.7 L"),
      size("6'0\"", '21.75"', '2.69"', "39.7 L"),
    ],
  },
  {
    slug: "fish-retro",
    categorySlug: "fish-retro",
    name: "Fish Retro",
    description:
      "A Fish Retro é um modelo clássico. O nosso diferencial é um Double Concave entre as quilhas se transformando em Vee que agrega mais velocidade e se torna mais manobrável. Elogiada por todos os níveis de surfista, esta prancha oferece uma remada confortável, rapidez e curvas abertas.",
    images: officialImages("fish-retro", "Fish Retro"),
    specifications: { tail: "Swallow", setup: "2 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("5'8\"", '21.00"', '2.50"', "32.3 L"),
      size("5'10\"", '21.25"', '2.63"', "35.3 L"),
      size("6'0\"", '21.50"', '2.69"', "38.6 L"),
      size("6'2\"", '21.75"', '2.75"', "40.0 L"),
      size("6'4\"", '22.00"', '2.88"', "43.0 L"),
    ],
  },
  {
    slug: "super-shark",
    categorySlug: "fish-retro",
    name: "Super Shark",
    description:
      "Esse modelo de prancha é ótimo para ondas pequenas e médias, e cheias. É uma prancha fácil de surfar, pois tem uma entrada d'água na remada, sem perder velocidade e tornando a prancha mais manobrável por conta do Wing e um vee concave entre as quilhas.",
    images: officialImages("super-shark", "Super Shark"),
    specifications: { tail: "Swallow", setup: "5 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("5'6\"", '19.50"', '2.44"', "28.1 L"),
      size("5'8\"", '19.75"', '2.50"', "30 L"),
      size("5'10\"", '19.88"', '2.56"', "31.9 L"),
      size("6'0\"", '20.00"', '2.63"', "33.9 L"),
      size("6'2\"", '20.25"', '2.69"', "36 L"),
    ],
  },
  {
    slug: "dw",
    categorySlug: "fish-retro",
    name: "DW",
    description:
      "A DW - Double Wing pode ser usada com rabeta Round ou Swallow, possui os elementos básicos de uma fish moderna combinando linhas de pranchas de alta performance. Remada fácil, surfe rápido com manobras verticais, uma prancha que desliza sobre a onda sem esforço algum.",
    images: officialImages("dw", "DW"),
    specifications: { tail: "Round e Swallow", setup: "5 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("5'8\"", '19.75"', '2.50"', "29.9 L"),
      size("5'10\"", '20.00"', '2.56"', "32.1 L"),
      size("6'0\"", '20.50"', '2.63"', "34.4 L"),
      size("6'2\"", '20.88"', '2.69"', "36.8 L"),
      size("6'4\"", '21.25"', '2.75"', "39.2 L"),
      size("6'6\"", '21.50"', '2.88"', "42.6 L"),
    ],
  },
  {
    slug: "fish-master",
    categorySlug: "fish-retro",
    name: "Fish Master",
    description:
      "Prancha grande e larga. Recomendada para surfistas altos ou mais pesados. É uma prancha fácil de surfar, fácil para entrar na onda e pode ser usada como prancha de transição do longboard.",
    images: officialImages("fish-master", "Fish Master"),
    specifications: { tail: "Swallow", setup: "5 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("6'3\"", '21.25"', '2.63"', "36.8 L"),
      size("6'4\"", '21.50"', '2.69"', "38.7 L"),
      size("6'5\"", '21.63"', '2.75"', "40.4 L"),
      size("6'6\"", '21.75"', '2.80"', "41.9 L"),
      size("6'7\"", '22.00"', '2.88"', "44.2 L"),
      size("6'8\"", '22.25"', '3.00"', "47.2 L"),
    ],
  },
  {
    slug: "single-fin",
    categorySlug: "fish-retro",
    name: "Single Fin",
    description:
      "A Single Fin é uma monoquilha que proporciona um surfe de linha e velocidade, porém com menos troca de borda. Um estilo de surfe à moda antiga. Muito usada em ondas tubulares, longas e rápidas.",
    images: officialImages("single-fin", "Single Fin"),
    specifications: {
      tail: "Round Pin e Swallow",
      setup: "Caixa para quilhão ou + 2 plugs laterais",
      waves: "0,5 m até 1,5 m",
    },
    sizes: [
      size("6'0\"", '20.00"', '2.63"', "35.5 L"),
      size("6'4\"", '20.50"', '2.69"', "39.3 L"),
      size("6'6\"", '21.00"', '2.75"', "42.2 L"),
    ],
  },
  {
    slug: "mini-tunk",
    categorySlug: "fish-retro",
    name: "Mini Tunk",
    description:
      "O Mini Tunk dispensa apresentações. Prancha que oferece muito conforto na remada, sendo muito veloz por ter pouco rocker, tanto no bico quanto na rabeta. As medidas são as mesmas de um longboard, porém oferece uma fluidez e é muito versátil. Tipo de prancha ideal para surfistas altos e pesados, por ter uma boa estabilidade e para os longboarders que querem diminuir o tamanho do brinquedo.",
    images: officialImages("mini-tunk", "Mini Tunk"),
    specifications: { tail: "Squash e Round", setup: "5 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("6'4\"", '22.00"', '2.69"', "42.9 L"),
      size("6'6\"", '22.25"', '2.75"', "45.7 L"),
      size("6'8\"", '22.50"', '2.88"', "49.5 L"),
    ],
  },
  {
    slug: "big-fish",
    categorySlug: "fish-retro",
    name: "Big Fish",
    description:
      "Semelhante a nossa Fish Master. Recomendada para surfistas altos, pesados e para aqueles que colocam mais pressão na prancha. Concave suave no meio da prancha, virando um Vee na rabeta junto com um Bonzer entre as quilhas, ajudando na propulsão.",
    images: [
      { src: "/media/models/big-fish-1.jpg", alt: "Big Fish, vista frontal", label: "Frente" },
      {
        src: "/media/models/big-fish-3.jpg",
        alt: "Big Fish, vista lateral direita",
        label: "Lado direito",
      },
      { src: "/media/models/big-fish-2.jpg", alt: "Big Fish, vista traseira", label: "Costas" },
      {
        src: "/media/models/big-fish-4.jpg",
        alt: "Big Fish, vista lateral esquerda",
        label: "Lado esquerdo",
      },
    ],
    specifications: { tail: "Swallow", setup: "5 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("7'0\"", '22.75"', '2.75"', "36.8 L"),
      size("7'2\"", '23.00"', '2.80"', "50.5 L"),
      size("7'4\"", '23.13"', '2.88"', "53.5 L"),
      size("7'6\"", '23.25"', '3.00"', "57.4 L"),
      size("7'8\"", '23.38"', '3.13"', "61.6 L"),
      size("7'10\"", '23.50"', '3.25"', "65.0 L"),
    ],
  },
  {
    slug: "rip-fun-1",
    categorySlug: "fun",
    name: "Rip Fun 1",
    description:
      "O Fun é indicado para iniciantes, tem um bico mais estreito que sua irmã Rip Fun 2. Com este modelo é mais fácil arriscar algumas manobras. Prancha estável e com boa remada.",
    images: officialImages("rip-fun-1", "Rip Fun 1"),
    specifications: { tail: "Squash ou Round", setup: "3 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("7'4\"", '21.75"', '2.69"', "47.2 L"),
      size("7'6\"", '22.00"', '2.75"', "51.1 L"),
      size("7'8\"", '22.25"', '2.88"', "54.7 L"),
      size("7'10\"", '22.50"', '3.00"', "58.2 L"),
    ],
  },
  {
    slug: "rip-fun-2",
    categorySlug: "fun",
    name: "Rip Fun 2",
    description:
      "Ótima opção para quem está iniciando, por ter um design com bico mais arredondado e medidas mais acentuadas, torna-se uma prancha bastante estável e com boa remada.",
    images: [
      { src: "/media/models/rip-fun-2-1.jpg", alt: "Rip Fun 2, vista frontal", label: "Frente" },
      {
        src: "/media/models/rip-fun-2-3.jpg",
        alt: "Rip Fun 2, vista lateral direita",
        label: "Lado direito",
      },
      { src: "/media/models/rip-fun-2-2.jpg", alt: "Rip Fun 2, vista traseira", label: "Costas" },
      {
        src: "/media/models/rip-fun-2-4.jpg",
        alt: "Rip Fun 2, vista lateral esquerda",
        label: "Lado esquerdo",
      },
    ],
    specifications: { tail: "Squash ou Round", setup: "3 plugs", waves: "0,5 m até 1,5 m" },
    sizes: [
      size("7'4\"", '21.75"', '2.69"', "51.4 L"),
      size("7'6\"", '22.00"', '2.75"', "55 L"),
      size("7'8\"", '22.25"', '2.88"', "58.7 L"),
      size("7'10\"", '22.50"', '3.00"', "64.2 L"),
    ],
  },
  {
    slug: "long-hibrido",
    categorySlug: "longboards",
    name: "Long Híbrido",
    description:
      "Longboard para performance, apresenta um leve release próximo à borda percorrendo todo o fundo da prancha, tornando-a mais rápida, com projeção. Concave no bico, flat no meio e rabeta em Vee Bottom.",
    images: [
      {
        src: "/media/models/long-hibrido-1.jpg",
        alt: "Long Híbrido, vista frontal",
        label: "Frente",
      },
      {
        src: "/media/models/long-hibrido-3.jpg",
        alt: "Long Híbrido, vista lateral direita",
        label: "Lado direito",
      },
      {
        src: "/media/models/long-hibrido-2.jpg",
        alt: "Long Híbrido, vista traseira",
        label: "Costas",
      },
      {
        src: "/media/models/long-hibrido-4.jpg",
        alt: "Long Híbrido, vista lateral esquerda",
        label: "Lado esquerdo",
      },
    ],
    specifications: {
      tail: "Squash ou Round",
      setup: "Caixa + 2 plugs ou 4 plugs",
      waves: "0,5 m até 2,0 m",
    },
    sizes: [
      size("9'0\"", '22.00"', '2.50"', "56.5 L"),
      size("9'1\"", '22.25"', '2.63"', "60.7 L"),
      size("9'2\"", '22.50"', '2.75"', "63.5 L"),
    ],
  },
  {
    slug: "long-vangard",
    categorySlug: "longboards",
    name: "Long Vangard",
    description:
      "Prancha certa para quem está aprendendo, também para todos os surfistas e tipos de onda. Concave suave no bico, flat no meio e rabeta em Vee Bottom. Utilizando uma borda mais baixa a prancha fica mais solta, para variações maiores de manobra em comparação ao long clássico.",
    specifications: {
      tail: "Squash ou Round",
      setup: "Caixa + 2 plugs ou 4 plugs",
      waves: "0,5 m até 1,5 m",
    },
    sizes: [
      size("9'0\"", '22.00"', '2.69"', "59.4 L"),
      size("9'2\"", '22.25"', '2.75"', "62.2 L"),
      size("9'4\"", '22.75"', '2.88"', "67.4 L"),
      size("9'6\"", '23.00"', '3.00"', "72.4 L"),
    ],
  },
  {
    slug: "long-classico",
    categorySlug: "longboards",
    name: "Long Clássico",
    description:
      "O mais tradicional de todos, borda 50/50, concave fundo no bico em formato de gota, vee bottom na área da rabeta. Perfeito para se pendurar no bico.",
    specifications: {
      tail: "Square ou Round Pin",
      setup: "Monoquilha (Caixa)",
      waves: "0,5 m até 1,0 m",
    },
    sizes: [
      size("9'8\"", '23.25"', '3.00"', "79.4 L"),
      size("9'6\"", '23.50"', '3.13"', "83.0 L"),
      size("10'0\"", '23.75"', '3.25"', "88.8 L"),
    ],
  },
  {
    slug: "stand-up-familia",
    categorySlug: "stand-up",
    name: "Stand Up Família",
    description:
      "Esse Stand Up é o famoso basicão. Desenvolvido para iniciantes com boa área de bico, ajudando na remada e na estabilidade da prancha. A família toda irá se divertir.",
    images: officialImages("stand-up-familia", "Stand Up Família"),
    specifications: { tail: "Squash ou Round", setup: "Caixa + 2 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("10'0\"", '31.00"', '4.63"', "32.3 L"),
      size("11'0\"", '32.00"', '4.63"', "38.6 L"),
    ],
  },
  {
    slug: "stand-up-hibrido",
    categorySlug: "stand-up",
    name: "Stand Up Híbrido",
    description:
      "Stand Up para iniciantes, funciona para remadas, pegar pequenas ondas e pequenas travessias.",
    specifications: { tail: "Squash ou Round", setup: "Caixa + 2 plugs", waves: "0,5 m até 1,0 m" },
    sizes: [
      size("9'2\"", '30.00"', '4.63"', "32.3 L"),
      size("10'8\"", '31.00"', '4.63"', "35.3 L"),
    ],
  },
  {
    slug: "sup-wave",
    categorySlug: "stand-up",
    name: "SUP Wave",
    description: "Stand Up de performance, exige experiência e habilidade.",
    specifications: {
      tail: "Double Wing Round, Squash ou Round",
      setup: "3 plugs",
      waves: "0,5 m até 2,0 m",
    },
    sizes: [size("7'4\"", '25.00"', '4.00"', "32.3 L"), size("9'0\"", '30"', '4.63"', "35.3 L")],
  },
];

// Textos editoriais oficiais recebidos posteriormente. Os dados técnicos acima seguem sendo a referência.
export const boardEditorial: Record<string, BoardEditorial> = {
  "the-rip-1": {
    card: "Performance que acompanha a evolução do seu surf.",
    paragraphs: [
      "A The Rip 1 representa a essência do surf de performance da Ripwave. É um modelo pensado para o surfista que procura uma prancha mais responsiva, capaz de acompanhar a evolução do seu surf e entregar controle quando velocidade e precisão fazem diferença.",
      "Sua proposta é permitir um surf mais ativo e progressivo, com uma combinação equilibrada entre velocidade, controle, projeção e resposta.",
    ],
  },
  "the-rip-2": {
    card: "Uma shortboard para todos os momentos do surf.",
    paragraphs: [
      "A The Rip 2 é uma shortboard para quem busca alta performance sem abrir mão de volume, velocidade e facilidade de uso. Com mais volume que a The Rip 1, ela equilibra performance e versatilidade.",
      "É uma opção para diferentes condições de mar, favorecendo projeção, velocidade e manobras com mais fluidez.",
    ],
  },
  "the-strong": {
    card: "Mais volume para remar. Mais confiança para surfar.",
    paragraphs: [
      "A The Strong foi desenvolvida para surfistas que precisam de mais volume e facilidade de remada, mas ainda querem manter a sensação de uma prancha solta e responsiva.",
      "A combinação entre volume, estabilidade e performance facilita a entrada na onda e o drop, sendo uma opção para surfistas mais pesados, mais altos ou em transição para uma prancha de performance.",
    ],
  },
  "wave-toys": {
    card: "Pegue a prancha. Encontre a onda. Divirta-se.",
    paragraphs: [
      "A Wave Toys foi criada para quem quer aproveitar as ondas sem complicação. Seu desenho privilegia facilidade e velocidade, ajudando a prancha a entrar na onda e percorrer a parede com fluidez.",
      "É uma prancha divertida e acessível, feita para entrar no mar, pegar mais ondas e aproveitar cada sessão com liberdade.",
    ],
  },
  evolution: {
    card: "Comece com confiança. Evolua com liberdade.",
    paragraphs: [
      "A Evolution acompanha o surfista em uma fase importante: quando já domina os primeiros fundamentos, mas ainda não está pronto para migrar diretamente para uma prancha de performance.",
      "Com maior volume e uma proposta voltada para estabilidade e facilidade, ela oferece uma plataforma confortável para aprender, ganhar confiança e desenvolver novas habilidades.",
    ],
  },
  "key-ring": {
    card: "Mais ondas. Mais liberdade. Mais surf.",
    paragraphs: [
      "A Key Ring nasce para tornar o surf mais acessível, fluido e divertido. É uma prancha versátil para aproveitar diferentes condições de mar com mais liberdade.",
      "Ela prioriza uma experiência equilibrada, permitindo entrar na onda com confiança e trabalhar as linhas de maneira natural.",
    ],
  },
  portable: {
    card: "Menos prancha. Mais possibilidades.",
    paragraphs: [
      "A Portable foi desenvolvida para ocupar pouco espaço no quiver e entregar muita diversão dentro d'água. Pensada para ser usada menor que a prancha convencional, combina dimensões compactas com volume generoso.",
      "É uma escolha para sair do convencional, aproveitar ondas menores e experimentar linhas de surf mais alternativas.",
    ],
  },
  "fish-retro": {
    card: "O espírito clássico do fish com a velocidade que você procura.",
    paragraphs: [
      "A Fish Retro resgata a essência das fishes clássicas e acrescenta soluções de design que tornam o modelo rápido e manobrável.",
      "É uma prancha de remada confortável para quem quer experimentar linhas mais abertas, rápidas e fluidas.",
    ],
  },
  "super-shark": {
    card: "Quando a onda enche, a Super Shark acelera.",
    paragraphs: [
      "A Super Shark foi criada para condições em que a onda está menor e mais cheia, pedindo uma prancha que gere velocidade com facilidade.",
      "O resultado é uma prancha rápida, responsiva e fácil de surfar, para manter o ritmo quando as condições mudam.",
    ],
  },
  dw: {
    card: "A fish que não tem medo de ir para a vertical.",
    paragraphs: [
      "A DW — Double Wing combina elementos de uma fish moderna com características de pranchas de alta performance. A proposta equilibra remada fácil, velocidade e liberdade para manobras verticais.",
      "É uma prancha para quem gosta de surfar rápido e fluido sem ficar limitado a linhas apenas abertas e tradicionais.",
    ],
  },
  "fish-master": {
    card: "Mais prancha para você aproveitar mais ondas.",
    paragraphs: [
      "A Fish Master é uma fish para surfistas altos ou mais pesados, unindo largura, volume e estabilidade para facilitar a experiência dentro d'água.",
      "Também é uma alternativa para a transição do longboard para um modelo menor, mantendo a facilidade de remar e entrar na onda.",
    ],
  },
  "single-fin": {
    card: "Menos troca de borda. Mais linha na onda.",
    paragraphs: [
      "A Single Fin é uma homenagem ao surf de estilo clássico, para quem valoriza linha, velocidade e fluidez em uma experiência diferente das pranchas modernas de múltiplas quilhas.",
      "Ela favorece linhas longas e desenhadas na parede da onda, especialmente em ondas tubulares, longas e rápidas.",
    ],
  },
  "mini-tunk": {
    card: "A liberdade de diminuir o tamanho sem diminuir a diversão.",
    paragraphs: [
      "A Mini Tunk combina o conforto e a estabilidade normalmente associados a um longboard com uma proposta mais compacta e versátil.",
      "É indicada para surfistas altos e pesados e para longboarders que querem reduzir o tamanho da prancha sem abrir mão da facilidade de remar e pegar ondas.",
    ],
  },
  "big-fish": {
    card: "Tamanho para sustentar. Design para acelerar.",
    paragraphs: [
      "A Big Fish foi desenvolvida para surfistas altos, pesados ou que aplicam bastante pressão na prancha. Ela entrega uma plataforma ampla, estável e rápida.",
      "É uma opção para aproveitar ondas pequenas e médias com mais sustentação, fluidez e velocidade.",
    ],
  },
  "rip-fun-1": {
    card: "Mais controle para aprender. Mais liberdade para evoluir.",
    paragraphs: [
      "A Rip Fun 1 é pensada para quem está começando no surf, mas já quer uma prancha que permita evoluir para além das primeiras ondas.",
      "Ela une estabilidade, boa remada e facilidade de condução a uma proposta mais direcionada para quem começa a explorar manobras.",
    ],
  },
  "rip-fun-2": {
    card: "Feita para pegar ondas. Criada para se divertir.",
    paragraphs: [
      "A Rip Fun 2 foi concebida para quem entende que o surf não precisa ser complicado para ser bom. Sua proposta é amigável e divertida, favorecendo a entrada nas ondas e a confiança na evolução.",
      "É uma prancha para aproveitar diferentes condições de mar com mais leveza, conforto e tempo dentro d'água.",
    ],
  },
  "long-hibrido": {
    card: "A tradição do longboard com liberdade para ir além.",
    paragraphs: [
      "O Long Híbrido combina a estabilidade característica de uma prancha maior com uma proposta mais dinâmica e versátil que a de um longboard tradicional.",
      "Ele permite trabalhar linhas clássicas, explorar a parede da onda ou buscar movimentos mais modernos — essa liberdade define o conceito híbrido.",
    ],
  },
  "stand-up-familia": {
    card: "A estabilidade que você precisa para começar e a diversão que toda a família procura.",
    paragraphs: [
      "O Stand Up Família é o modelo para quem está começando no Stand Up Paddle e procura uma prancha estável, confortável e fácil de remar.",
      "Com boa área de bico e bastante apoio, ele foi pensado para aprender, ganhar confiança e aproveitar a água com toda a família.",
    ],
  },
  "stand-up-hibrido": {
    card: "Uma prancha para remar, explorar e descobrir novas possibilidades na água.",
    paragraphs: [
      "O Stand Up Híbrido foi desenvolvido para iniciantes que procuram uma prancha capaz de ir além do aprendizado: remadas, pequenas travessias e pequenas ondas.",
      "A proposta equilibra estabilidade e facilidade de uso para explorar diferentes formas de aproveitar a prancha.",
    ],
  },
  "sup-wave": {
    card: "Veja a onda de outra perspectiva.",
    paragraphs: [
      "O SUP Wave leva o conceito de Stand Up Paddle para dentro da onda, unindo remada, equilíbrio e surf em uma experiência completa no mar.",
      "No SUP, o surf começa antes mesmo de a onda chegar: é leitura, posicionamento, movimento e uma nova perspectiva sobre o mar.",
    ],
  },
};

export const getBoardCategory = (slug: string) =>
  boardCategories.find((category) => category.slug === slug);
export const getBoardModels = (categorySlug: string) =>
  boardModels.filter((model) => model.categorySlug === categorySlug);
export const getBoardModel = (categorySlug: string, modelSlug: string) =>
  boardModels.find((model) => model.categorySlug === categorySlug && model.slug === modelSlug);
