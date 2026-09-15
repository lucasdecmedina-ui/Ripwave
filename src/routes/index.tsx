import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/ripwave/Nav";
import { Hero } from "@/components/ripwave/Hero";
import { About } from "@/components/ripwave/About";
import { Boards } from "@/components/ripwave/Boards";
import { BoardVideo } from "@/components/ripwave/BoardVideo";
import { Shaper } from "@/components/ripwave/Shaper";
import { Reviews } from "@/components/ripwave/Reviews";
import { Contact } from "@/components/ripwave/Contact";
import { SiteFooter } from "@/components/ripwave/SiteFooter";

const title = "Ripwave Surfboards — Pranchas artesanais desde 1978";
const description =
  "Mais de 34 mil shapes e 40 anos de história. Pranchas de surf artesanais de Beto Loureiro, uma das marcas mais tradicionais do Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Boards />
        <BoardVideo />
        <Shaper />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
