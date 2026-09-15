import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { boardCategories } from "@/data/catalog";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#encomendas", label: "Encomendas" },
  { href: "/#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/90 py-3 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
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
        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative after:absolute after:top-full after:left-0 after:h-4 after:w-full"
            onMouseEnter={() => setCatalogOpen(true)}
            onMouseLeave={() => setCatalogOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCatalogOpen((open) => !open)}
              aria-expanded={catalogOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-xs font-semibold tracking-[0.2em] text-sand/80 uppercase transition-colors hover:text-primary"
            >
              Pranchas
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${catalogOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {catalogOpen ? (
              <div className="absolute top-full left-1/2 mt-4 w-[34rem] -translate-x-1/2 border border-sand/15 bg-navy/98 p-3 shadow-2xl backdrop-blur-md">
                <div className="grid grid-cols-2 gap-1">
                  {boardCategories.map((category, index) => (
                    <Link
                      key={category.slug}
                      to="/pranchas/$categoria"
                      params={{ categoria: category.slug }}
                      onClick={() => setCatalogOpen(false)}
                      className="group flex items-center justify-between border border-transparent px-4 py-4 text-sm font-semibold tracking-[0.12em] text-sand/85 uppercase transition-colors hover:border-sand/15 hover:bg-sand/8 hover:text-primary"
                    >
                      <span>{category.name}</span>
                      <span className="font-display text-lg text-primary/0 transition-colors group-hover:text-primary">
                        0{index + 1}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/pranchas"
                  onClick={() => setCatalogOpen(false)}
                  className="mt-3 flex items-center justify-between border-t border-sand/15 px-4 pt-4 text-xs font-semibold tracking-[0.2em] text-sand/65 uppercase transition-colors hover:text-primary"
                >
                  Conheça o catálogo <span aria-hidden>→</span>
                </Link>
              </div>
            ) : null}
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold tracking-[0.2em] text-sand/80 uppercase transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/cuidados"
            className="text-xs font-semibold tracking-[0.2em] text-sand/50 uppercase transition-colors hover:text-primary"
          >
            Cuidados
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5513991672772"
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-5 py-2.5 text-[0.65rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center border border-sand/30 text-sand md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <nav className="border-t border-sand/15 bg-navy/98 px-6 py-6 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl space-y-2">
            <button
              type="button"
              onClick={() => setMobileCatalogOpen((open) => !open)}
              aria-expanded={mobileCatalogOpen}
              className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold tracking-[0.2em] text-sand uppercase"
            >
              Pranchas
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileCatalogOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {mobileCatalogOpen ? (
              <div className="border-l border-primary pl-4">
                <Link
                  to="/pranchas"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase"
                >
                  Ver catálogo
                </Link>
                {boardCategories.map((category) => (
                  <Link
                    key={category.slug}
                    to="/pranchas/$categoria"
                    params={{ categoria: category.slug }}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-sand/80 transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            ) : null}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-semibold tracking-[0.2em] text-sand/80 uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/cuidados"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-semibold tracking-[0.2em] text-sand/50 uppercase transition-colors hover:text-primary"
            >
              Cuidados
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
