import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { boardModels, type BoardModel } from "@/data/catalog";
import { Reveal } from "./Reveal";
import { WaveDivider, TribalLine } from "./WaveDivider";

const featuredSlugs = ["the-rip-1", "key-ring", "rip-fun-1", "long-hibrido", "stand-up-familia"];

const featuredBoards = featuredSlugs
  .map((slug) => boardModels.find((model) => model.slug === slug))
  .filter((model): model is BoardModel => Boolean(model));

export function Boards() {
  return (
    <section id="pranchas" className="surface-deep relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-sand/70">
            <TribalLine className="w-24" />
            <span className="eyebrow">Modelos em destaque</span>
          </div>
          <h2 className="mt-5 max-w-2xl text-4xl leading-[1] text-sand md:text-5xl">
            Cada prancha nasce de uma onda em mente
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featuredBoards.map((board, index) => (
            <Reveal key={board.slug} delay={index * 90}>
              <Link
                to="/pranchas/$categoria/$modelo"
                params={{ categoria: board.categorySlug, modelo: board.slug }}
                className="card-lift group flex h-full flex-col overflow-hidden bg-sand/5 ring-1 ring-sand/10 backdrop-blur-sm"
              >
                <div
                  className="model-graphic relative h-56 overflow-hidden"
                  style={{ "--model-index": index } as CSSProperties}
                  aria-hidden
                >
                  <span className="absolute top-5 left-5 font-display text-5xl text-sand/20">
                    0{index + 1}
                  </span>
                  <span className="absolute right-7 bottom-6 h-32 w-10 rotate-[28deg] rounded-full border-2 border-primary/80 bg-sand/10" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl leading-[0.95] text-sand">{board.name}</h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-sand/70">
                    {board.description}
                  </p>
                  <span className="mt-6 inline-flex w-fit border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.16em] text-sand uppercase transition-colors group-hover:text-primary">
                    Ver modelo
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={450}>
          <div className="mt-12 text-center">
            <Link
              to="/pranchas"
              className="inline-flex border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.2em] text-sand uppercase transition-colors hover:text-primary"
            >
              Ver catálogo completo
            </Link>
          </div>
        </Reveal>
      </div>
      <WaveDivider className="absolute inset-x-0 bottom-0" color="var(--background)" />
    </section>
  );
}
