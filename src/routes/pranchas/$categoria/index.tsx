import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { CatalogFrame } from "@/components/ripwave/CatalogFrame";
import { boardEditorial, getBoardCategory, getBoardModels } from "@/data/catalog";

export const Route = createFileRoute("/pranchas/$categoria/")({
  component: CategoryPage,
});

function CategoryPage() {
  const { categoria } = Route.useParams();
  const category = getBoardCategory(categoria);

  if (!category) return null;

  const models = getBoardModels(category.slug);

  return (
    <CatalogFrame
      eyebrow="Catálogo Ripwave"
      title={category.name}
      backHref="/pranchas"
      backLabel="Todas as categorias"
    >
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {models.length === 0 ? (
            <div className="border-l-2 border-primary bg-muted px-7 py-10 md:px-10 md:py-14">
              <p className="eyebrow text-foreground/55">
                {category.status === "development" ? "Em desenvolvimento" : "Em atualização"}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-[0.95] text-foreground md:text-5xl">
                {category.status === "development"
                  ? "Esta linha está em desenvolvimento."
                  : "Os modelos desta categoria serão apresentados em breve."}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-foreground/70">
                {category.status === "development"
                  ? "Novos modelos de Paddleboards serão incluídos quando as informações oficiais forem disponibilizadas."
                  : "Estamos preparando as informações oficiais para esta seleção de pranchas Ripwave."}
              </p>
              <Link
                to="/pranchas"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:text-primary"
              >
                Explorar outras categorias <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {models.map((model, index) => (
                <Link
                  key={model.slug}
                  to="/pranchas/$categoria/$modelo"
                  params={{ categoria: category.slug, modelo: model.slug }}
                  className="card-lift group overflow-hidden bg-muted ring-1 ring-navy/10"
                >
                  <div
                    className="model-graphic relative h-72 overflow-hidden"
                    style={{ "--model-index": index } as CSSProperties}
                    aria-hidden
                  >
                    <span className="absolute top-6 left-6 font-display text-6xl text-sand/20">
                      0{index + 1}
                    </span>
                    <span className="absolute right-8 bottom-8 h-40 w-12 rotate-[28deg] rounded-full border-2 border-primary/80 bg-sand/10 shadow-[0_0_0_16px_color-mix(in_oklab,var(--navy)_30%,transparent)]" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl text-foreground">{model.name}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/70">
                      {boardEditorial[model.slug]?.card ?? model.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                      Ver modelo <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </CatalogFrame>
  );
}
