import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const WHATSAPP = "https://wa.me/5513991672772";
const MAPS = "https://maps.app.goo.gl/R828mBji1RczmnjE6";

export function Contact() {
  return (
    <section id="contato" className="surface-deep relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-sand/70">
            <TribalLine className="hidden w-20 sm:block" />
            <span className="eyebrow">Contato</span>
            <TribalLine className="hidden w-20 scale-x-[-1] sm:block" />
          </div>
          <h2 className="mt-5 text-4xl leading-[1] text-sand md:text-6xl">Vamos falar de surf?</h2>
          <p className="script mt-4 text-2xl text-sand/80 md:text-3xl">
            Sua próxima prancha começa numa conversa.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="card-lift bg-sand/5 p-6">
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
  );
}
