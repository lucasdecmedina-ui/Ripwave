import { ExternalLink, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const GOOGLE_MAPS = "https://maps.app.goo.gl/R828mBji1RczmnjE6";

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-sand md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_77%_10%,hsl(var(--primary))_0,transparent_30%),radial-gradient(circle_at_10%_90%,hsl(var(--ocean))_0,transparent_28%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <TribalLine className="w-20" />
            <span className="eyebrow">Avaliações</span>
          </div>
          <h2 className="mt-5 max-w-md text-4xl leading-[0.96] text-sand md:text-6xl">
            A confiança de quem já surfa com a Ripwave
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-sand/70">
            Informações verificadas diretamente no Google, compartilhadas por quem conhece de perto
            o nosso trabalho e as nossas pranchas.
          </p>
          <a
            href={GOOGLE_MAPS}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1"
          >
            Ver avaliações no Google
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-sand/15 bg-sand p-7 text-center text-navy shadow-[var(--shadow-deep)] md:p-9">
              <p className="text-xs font-bold tracking-[0.16em] text-ocean uppercase">
                Avaliações no Google
              </p>
              <p className="mt-4 font-display text-6xl leading-none md:text-7xl">4,4</p>
              <div
                className="mt-4 flex justify-center gap-1 text-sunset"
                aria-label="Nota 4,4 de 5 no Google"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="eyebrow mt-4 text-muted-foreground">Nota no Google</p>
            </div>
            <div className="rounded-[1.75rem] border border-sand/15 bg-sand p-7 text-center text-navy shadow-[var(--shadow-deep)] md:p-9">
              <p className="text-xs font-bold tracking-[0.16em] text-ocean uppercase">
                Opiniões de clientes
              </p>
              <p className="mt-4 font-display text-6xl leading-none md:text-7xl">42</p>
              <span className="mx-auto mt-4 block h-px w-10 bg-primary" aria-hidden="true" />
              <p className="eyebrow mt-4 text-muted-foreground">Avaliações</p>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-sand/15">
            <img
              src="/media/lifestyle-sunset.jpg"
              alt="Prancha Ripwave em um fim de tarde"
              loading="lazy"
              width={1600}
              height={912}
              className="h-64 w-full object-cover md:h-72"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
