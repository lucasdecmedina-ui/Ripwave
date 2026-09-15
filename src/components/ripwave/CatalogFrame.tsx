import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";
import { TribalLine, WaveDivider } from "./WaveDivider";

type CatalogFrameProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
};

export function CatalogFrame({ eyebrow, title, children, backHref, backLabel }: CatalogFrameProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <section className="catalog-hero surface-deep relative isolate overflow-hidden px-6 pt-36 pb-28 md:pt-44 md:pb-36">
          <div className="catalog-orb absolute -top-32 -right-24 h-80 w-80 rounded-full" />
          <div className="catalog-orb absolute -bottom-44 -left-20 h-96 w-96 rounded-full opacity-60" />
          <div className="relative z-10 mx-auto max-w-6xl">
            {backHref && backLabel ? (
              <a
                href={backHref}
                className="mb-10 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-sand/75 uppercase transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                {backLabel}
              </a>
            ) : null}
            <div className="flex items-center gap-3 text-sand/70">
              <TribalLine className="w-20 text-primary" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-5xl leading-[0.9] text-sand md:text-7xl">{title}</h1>
          </div>
          <WaveDivider className="absolute inset-x-0 bottom-0 z-10" color="var(--background)" />
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
