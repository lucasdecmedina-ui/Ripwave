import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

export function BoardVideo() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="mx-auto w-full max-w-[320px]">
          <div className="relative aspect-[9/16] w-full overflow-hidden bg-navy shadow-[var(--shadow-deep)]">
            <video
              className="h-full w-full object-cover"
              poster="/media/interior_pranchas_1.png"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              disableRemotePlayback
              preload="metadata"
              ref={(el) => {
                if (!el) return;
                el.muted = true;
                const p = el.play();
                if (p && typeof p.catch === "function") p.catch(() => {});
              }}
            >
              <source src="/media/Video_prancha.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 text-accent">
              <TribalLine className="w-24" />
              <span className="eyebrow">Detalhe</span>
            </div>
            <h2 className="mt-5 text-4xl leading-[1] md:text-5xl">
              O acabamento que só o olhar de quem shapeia desde 1978 entrega
            </h2>
            <p className="script mt-4 text-2xl text-primary">Linha, rocker e rabeta.</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Do bloco bruto ao brilho final, cada curva é conferida à mão. É esse cuidado que faz a
              prancha responder exatamente como o surfista espera.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <img
              src="/media/interior_pranchas_1.png"
              alt="Prancha Ripwave laranja finalizada sobre o cavalete"
              loading="lazy"
              width={747}
              height={787}
              className="mt-10 hidden h-56 w-full object-cover md:block"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
