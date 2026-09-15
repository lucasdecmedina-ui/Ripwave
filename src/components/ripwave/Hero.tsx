import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { TribalLine } from "./WaveDivider";

const slides = [
  { src: "/media/hero-surf-1.jpg", alt: "Surfista manobrando em uma onda" },
  { src: "/media/hero-surf-2.jpg", alt: "Surfista em uma onda com prancha Ripwave" },
  { src: "/media/hero-surf-3.jpg", alt: "Surfista pegando uma onda" },
  { src: "/media/interior_pranchas_2.png", alt: "Pranchas Ripwave finalizadas na fábrica" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-navy"
      aria-roledescription="carrossel"
      aria-label="Imagens da Ripwave Surfboards"
    >
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={index === activeSlide ? slide.alt : ""}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
      <div className="absolute inset-0 bg-navy/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--navy) 75%, transparent) 0%, transparent 35%, color-mix(in oklab, var(--navy) 85%, transparent) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center text-sand">
        <img
          src="/brand/ripwave-hero-white.png"
          alt="Ripwave Surfboards"
          width={1200}
          height={658}
          className="mx-auto mb-8 h-28 w-auto animate-fade-in object-contain drop-shadow-lg md:h-36"
        />
        <h1 className="sr-only">Ripwave Surfboards</h1>
        <p className="script mt-5 text-2xl text-sand/90 md:text-4xl">Evoluindo a cada onda.</p>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-sand/80 md:text-base">
          Pranchas sob medida, moldadas em Santos desde 1978.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 text-sand/80">
          <TribalLine className="hidden sm:block" />
          <span className="eyebrow whitespace-nowrap">Desde 1978</span>
          <TribalLine className="hidden scale-x-[-1] sm:block" />
        </div>

        <Link
          to="/pranchas"
          className="mt-10 inline-flex items-center justify-center bg-primary px-9 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1 hover:bg-primary/90"
        >
          Conheça a Ripwave
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <div
          className="flex gap-2"
          role="tablist"
          aria-label="Escolha uma imagem"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight")
              setActiveSlide((current) => (current + 1) % slides.length);
            if (event.key === "ArrowLeft")
              setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
          }}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Ver imagem ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-primary" : "w-2.5 bg-sand/60 hover:bg-sand"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
