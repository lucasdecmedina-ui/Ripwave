import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, MessageCircle, ShieldCheck, Smartphone, Sun, Waves } from "lucide-react";
import { Reveal } from "@/components/ripwave/Reveal";
import { WaveDivider, TribalLine } from "@/components/ripwave/WaveDivider";
import { SiteFooter } from "@/components/ripwave/SiteFooter";

const WHATSAPP = "https://wa.me/5513991672772";
const MAPS = "https://maps.app.goo.gl/R828mBji1RczmnjE6";

const title = "Cuidados com sua nova prancha Ripwave — Guia do Surfista";
const description =
  "Guia oficial Ripwave Surfboards: pequenos cuidados diários que fazem sua prancha durar muitas ondas.";

export const Route = createFileRoute("/cuidados")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CarePage,
});

const careSections = [
  {
    n: "01",
    title: "Ainda está curando",
    icon: Clock3,
    desc: "Sua prancha acabou de sair da fábrica e está em um processo natural de cura. O tempo necessário varia de acordo com o material e o acabamento; se tiver dúvida sobre o melhor momento para usar, fale com a Ripwave.",
  },
  {
    n: "02",
    title: "Posso já pôr na água?",
    icon: Waves,
    desc: "Antes da primeira sessão, confirme com a gente se a sua prancha já está pronta para entrar no mar. Assim você aproveita o primeiro surf com tranquilidade.",
  },
  {
    n: "03",
    title: "Sol, calor e cor",
    icon: Sun,
    desc: "Sol e calor em excesso não fazem bem para nenhuma prancha. Evite deixá-la dentro do carro ou exposta por muito tempo; use capa e procure guardar em local fresco e arejado.",
  },
  {
    n: "04",
    title: "O básico de sempre",
    icon: ShieldCheck,
    desc: "Confira a prancha antes e depois do surf. Se aparecer alguma trinca, amassado ou batida, evite entrar na água até avaliar o reparo. Transporte com proteção e não deixe a prancha encostada onde possa cair ou marcar.",
  },
  {
    n: "05",
    title: "Qualquer dúvida",
    icon: MessageCircle,
    desc: "Cada prancha tem uma história e um acabamento próprio. Sempre que precisar, chama a Ripwave no WhatsApp ou passe na loja para conversar com a gente.",
  },
];

function CareHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy/90 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/brand/ripwave-horizontal.png"
            alt="Ripwave Surfboards"
            width={1600}
            height={242}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <Link
          to="/"
          className="text-xs font-semibold tracking-[0.2em] text-sand/80 uppercase transition-colors hover:text-primary"
        >
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}

function CarePage() {
  return (
    <div id="top" className="w-full overflow-x-hidden bg-background">
      <CareHeader />
      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[78svh] w-full items-center justify-center overflow-hidden bg-navy">
          <img
            src="/media/care-hero.jpg"
            alt="Prancha Ripwave na beira do mar ao pôr do sol"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pt-24 pb-28 text-center text-sand">
            <div className="flex items-center justify-center gap-3 text-sand/80">
              <TribalLine className="hidden w-24 sm:block" />
              <span className="eyebrow whitespace-nowrap">Guia do Surfista</span>
              <TribalLine className="hidden w-24 scale-x-[-1] sm:block" />
            </div>
            <h1 className="mt-6 text-[2.2rem] leading-[0.98] sm:text-5xl md:text-7xl">
              Cuidados com sua nova prancha Ripwave
            </h1>
            <p className="script mt-5 text-xl text-sand/90 md:text-3xl">
              Pequenos cuidados que fazem sua prancha durar muitas ondas.
            </p>
          </div>
          <WaveDivider className="absolute inset-x-0 bottom-0 z-10" color="var(--background)" />
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/80 md:text-2xl">
                Sua prancha é feita para viver muitas ondas. Com atenção aos primeiros dias, ao sol
                e aos pequenos sinais do dia a dia, ela segue pronta para o seu surf.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80 md:text-2xl">
                Este guia reúne o essencial; para qualquer caso específico, converse com a Ripwave.
              </p>
              <TribalLine className="mx-auto mt-8 text-primary" />
            </Reveal>
          </div>
        </section>

        {/* GUIA */}
        <section className="surface-deep relative overflow-hidden py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="flex items-center gap-3 text-sand/70">
                <TribalLine className="w-24" />
                <span className="eyebrow">Guia de cuidados</span>
              </div>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1] text-sand md:text-5xl">
                O essencial para cuidar da sua prancha
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {careSections.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.n} delay={i * 90}>
                    <article className="card-lift flex h-full flex-col border-l-2 border-primary bg-sand/5 p-6 ring-1 ring-sand/10">
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-3xl text-primary">{c.n}</span>
                          <Icon className="h-5 w-5 text-sand/70" aria-hidden />
                        </div>
                        <h3 className="mt-3 text-xl text-sand">{c.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/70">{c.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* REPAROS */}
        <div className="flex justify-center py-10 md:py-14">
          <Reveal>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-xl hover:shadow-primary/35"
            >
              PRECISA DE REPAROS?
            </a>
          </Reveal>
        </div>

        {/* TOKEN */}
        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden bg-navy">
                <img
                  src="/media/token-ripwave.jpg"
                  alt="Token Ripwave com tecnologia NFC aproximado de um celular"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-3 text-foreground/60">
                <TribalLine className="w-20 text-primary" />
                <span className="eyebrow">Pós-venda</span>
              </div>
              <h2 className="mt-5 text-4xl leading-[1] md:text-5xl">Seu token Ripwave</h2>
              <p className="script mt-3 text-2xl text-primary md:text-3xl">
                Sempre com você, onde quer que a onda te leve.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Este token exclusivo foi feito para conectar você à Ripwave depois da compra.
              </p>
              <div className="mt-8 flex items-start gap-4 border-l-2 border-primary bg-muted p-6">
                <Smartphone className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden />
                <p className="text-base leading-relaxed text-foreground/80">
                  Aproxime seu celular do token para acessar este guia sempre que precisar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="surface-deep relative overflow-hidden py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-3 text-sand/70">
                <TribalLine className="hidden w-20 sm:block" />
                <span className="eyebrow">Suporte</span>
                <TribalLine className="hidden w-20 scale-x-[-1] sm:block" />
              </div>
              <h2 className="mt-5 text-4xl leading-[1] text-sand md:text-6xl">
                Estamos aqui para te ajudar.
              </h2>
              <p className="script mt-4 text-2xl text-sand/80 md:text-3xl">
                Fale com a gente e conte com o suporte da Ripwave.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift bg-sand/5 p-6"
                >
                  <span className="eyebrow text-sand/60">WhatsApp</span>
                  <p className="mt-2 text-sand">+55 13 99167-2772</p>
                </a>
                <a href="mailto:ripwavecomercial@gmail.com" className="card-lift bg-sand/5 p-6">
                  <span className="eyebrow text-sand/60">E-mail</span>
                  <p className="mt-2 break-all text-sand">ripwavecomercial@gmail.com</p>
                </a>
                <a
                  href="https://instagram.com/ripwavesurfboards"
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift bg-sand/5 p-6"
                >
                  <span className="eyebrow text-sand/60">Instagram</span>
                  <p className="mt-2 text-sand">@ripwavesurfboards</p>
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-primary px-9 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full border border-sand/40 px-9 py-4 text-sm font-semibold tracking-[0.2em] text-sand uppercase transition-colors duration-300 hover:bg-sand/10 sm:w-auto"
                >
                  Como chegar
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
