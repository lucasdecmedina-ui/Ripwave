import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const history = [
  {
    year: "1978",
    title: "A matéria-prima veio primeiro",
    text: "Na mesma Avenida Nilo Peçanha onde a fábrica está hoje, Beto cresceu entre madeira, ferramentas e o trabalho da antiga Marcenaria e Carpintaria Primavera.",
  },
  {
    year: "1984",
    title: "Nasce a Ripwave",
    text: "Depois da primeira prancha feita ainda aos 12 anos, as encomendas dos amigos transformaram o shape em ofício e a Ripwave ganhou nome na mesma rua onde tudo começou.",
  },
  {
    year: "1985–97",
    title: "Do circuito ao mundo",
    text: "A equipe Ripwave percorreu o Circuito Brasileiro e levou a marca a Costa Rica, Havaí e Indonésia, ao lado de nomes importantes do surf nacional.",
  },
  {
    year: "Hoje",
    title: "Uma prancha por vez",
    text: "São mais de 37 mil pranchas que passaram pelas mãos do Beto. O jeito de trabalhar segue o mesmo: ouvir o surfista e ajustar cada detalhe.",
  },
];

const gallery = [
  {
    src: "/media/history-primavera.jpg",
    alt: "Fachada da antiga Primavera, na Avenida Nilo Peçanha",
    caption: "A antiga Primavera, na Avenida Nilo Peçanha.",
  },
  {
    src: "/media/history-workshop.jpg",
    alt: "Beto trabalhando em uma prancha na oficina antiga",
    caption: "Os primeiros shapes na oficina.",
  },
  {
    src: "/media/history-circuit.jpg",
    alt: "Registro do circuito e das viagens da equipe Ripwave",
    caption: "A Ripwave nas estradas e no circuito.",
  },
  {
    src: "/media/history-production.jpg",
    alt: "Registro da estrutura de produção da Ripwave",
    caption: "Uma fase marcante da produção Ripwave.",
  },
];

export function About() {
  const [expanded, setExpanded] = useState(false);
  const [slide, setSlide] = useState(0);
  const current = gallery[slide];
  const changeSlide = (direction: 1 | -1) =>
    setSlide((value) => (value + direction + gallery.length) % gallery.length);

  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="relative">
            <img
              src="/media/board-rack.jpg"
              alt="Pranchas Ripwave prontas na fábrica"
              loading="lazy"
              width={1920}
              height={3413}
              className="h-[33rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
            <span className="absolute -top-5 -left-3 bg-primary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-primary-foreground uppercase">
              Santos, SP
            </span>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-accent">
                <TribalLine className="w-24" />
                <span className="eyebrow">A Ripwave</span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1] md:text-5xl">
                Shape sob medida para o seu momento no surf.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A Ripwave é uma fábrica de pranchas sob medida em Santos, tocada pelo shaper Beto
                Loureiro. Cada prancha nasce entendendo o nível, o corpo e as ondas de quem vai
                surfar nela.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Do primeiro contato com o mar a quem renova o quiver com a gente há anos, nada sai
                de prateleira: o shape é feito para você, em EPS ou PU, com matéria-prima de
                primeira linha.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">37 mil+</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">Pranchas</dd>
                </div>
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">1978</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">Em Santos</dd>
                </div>
                <div>
                  <dt className="font-display text-2xl text-foreground md:text-3xl">Beto</dt>
                  <dd className="eyebrow mt-1 text-muted-foreground">Loureiro</dd>
                </div>
              </dl>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls="historia-ripwave"
                onClick={() => setExpanded((value) => !value)}
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-primary"
              >
                {expanded ? "Fechar história" : "Conheça a história"}
                {expanded ? (
                  <X className="h-4 w-4" aria-hidden />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden />
                )}
              </button>
            </Reveal>
          </div>
        </div>

        {expanded ? (
          <div id="historia-ripwave" className="mt-20 border-t border-border pt-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {history.map((item) => (
                  <article key={item.year} className="border-l-2 border-primary bg-muted/60 p-6">
                    <p className="font-display text-3xl text-primary">{item.year}</p>
                    <h3 className="mt-3 text-xl leading-none">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
              <figure className="relative overflow-hidden bg-navy shadow-[var(--shadow-deep)]">
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-[32rem] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-navy/80 p-5 text-sand">
                  <button
                    type="button"
                    onClick={() => changeSlide(-1)}
                    aria-label="Imagem anterior"
                    className="rounded-full border border-sand/40 p-2 transition-colors hover:bg-sand/15"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex gap-2">
                    {gallery.map((item, index) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() => setSlide(index)}
                        aria-label={`Ver imagem ${index + 1}`}
                        aria-current={index === slide}
                        className={`h-2 rounded-full ${index === slide ? "w-6 bg-primary" : "w-2 bg-sand/60"}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => changeSlide(1)}
                    aria-label="Próxima imagem"
                    className="rounded-full border border-sand/40 p-2 transition-colors hover:bg-sand/15"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <figcaption className="absolute right-5 bottom-20 left-5 text-sm text-sand/80">
                  {current.caption}
                </figcaption>
              </figure>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
