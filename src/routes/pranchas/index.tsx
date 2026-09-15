import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CatalogFrame } from "@/components/ripwave/CatalogFrame";
import { WaveDivider } from "@/components/ripwave/WaveDivider";
import { boardCategories } from "@/data/catalog";

const categoryImages: Record<string, string> = {
  shortboards: "/media/catalog/categories/shortboards.jpg",
  "fish-retro": "/media/catalog/categories/fish-retro.jpg",
  fun: "/media/catalog/categories/fun.jpg",
  longboards: "/media/catalog/categories/longboards.jpg",
  paddleboards: "/media/catalog/categories/paddleboards.jpg",
  "stand-up": "/media/catalog/categories/stand-up.jpg",
};

export const Route = createFileRoute("/pranchas/")({
  head: () => ({
    meta: [
      { title: "Catálogo de Pranchas | Ripwave Surfboards" },
      {
        name: "description",
        content: "Conheça as categorias de pranchas Ripwave Surfboards.",
      },
    ],
  }),
  component: CatalogIndexPage,
});

function CatalogIndexPage() {
  return (
    <CatalogFrame eyebrow="Ripwave Surfboards" title="Catálogo de pranchas">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid max-w-5xl gap-8 border-l-2 border-primary pl-6 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                Cada modelo deste catálogo é uma referência: décadas de shape testado onda a onda,
                aprimorado a partir do que realmente importa — pessoas diferentes, mares diferentes,
                momentos diferentes do surf.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Aqui você encontra pranchas que fizeram e fazem parte da história da Ripwave.
                Modelos que atravessaram gerações, foram ajustados ao longo do tempo e continuam
                servindo de base para quem busca uma prancha que realmente funcione na água.
              </p>
            </div>
            <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <p className="eyebrow text-primary">Encontre seu ponto de partida</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                As medidas servem como ponto de partida, não como regra. Peso, altura, nível de surf
                e o tipo de onda que você mais surfa fazem toda a diferença na escolha final.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Do shortboard ao SUP, fabricamos em EPS ou PU. Use as referências para começar a
                conversa e encontre, com o Beto, a medida certa para o seu surf.
              </p>
              <a
                href="/#encomendas"
                className="mt-6 inline-flex border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:text-primary"
              >
                Encomende a sua →
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardCategories.map((category, index) => (
              <Link
                key={category.slug}
                to="/pranchas/$categoria"
                params={{ categoria: category.slug }}
                className="group card-lift relative min-h-64 overflow-hidden border border-navy/15 bg-navy p-7"
              >
                <img
                  src={categoryImages[category.slug]}
                  alt={`Prancha ${category.name} em estúdio`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/5" />
                <span className="relative z-10 font-display text-6xl leading-none text-sand/40">
                  0{index + 1}
                </span>
                <div className="absolute right-0 bottom-0 h-24 w-24 rounded-tl-full border-t border-l border-primary/70" />
                <div className="absolute right-5 bottom-5 h-14 w-14 rounded-tl-full border-t border-l border-primary/50" />
                <div className="absolute inset-x-7 bottom-7 z-10 flex items-end justify-between gap-4">
                  <h2 className="max-w-52 text-3xl leading-[0.9] text-sand">{category.name}</h2>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <WaveDivider className="absolute inset-x-0 bottom-0" color="var(--navy)" />
      </section>
      <section className="bg-navy px-6 py-16 text-sand md:py-20">
        <div className="mx-auto max-w-6xl border-l-2 border-primary pl-6">
          <p className="eyebrow text-sand/55">Modelos que guiam a conversa</p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-sand/80">
            Explore os modelos, compare as medidas e leve essas referências para uma conversa com a
            Ripwave. Cada encomenda é ajustada ao surfista e ao mar onde ela vai viver.
          </p>
        </div>
      </section>
    </CatalogFrame>
  );
}
