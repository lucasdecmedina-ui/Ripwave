import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { TribalLine } from "./WaveDivider";

const WHATSAPP = "https://wa.me/5513991672772";

const steps = [
  {
    n: "01",
    t: "Conversa",
    d: "A gente entende seu momento no surf, nível, peso, ondas e o que você busca na próxima prancha.",
  },
  {
    n: "02",
    t: "Proposta",
    d: "Com base na conversa, Beto indica shape, medidas e o material mais adequado para o seu surf.",
  },
  {
    n: "03",
    t: "Produção",
    d: "A prancha é feita sob medida, da escolha do bloco e das medidas ao acabamento final.",
  },
  {
    n: "04",
    t: "Na água",
    d: "Você recebe uma prancha pensada para remar, entrar na onda e responder ao seu surf.",
  },
];

const faq = [
  {
    q: "Quanto tempo leva para minha prancha ficar pronta?",
    a: "O prazo de produção é combinado na conversa, porque cada encomenda tem detalhes próprios de shape, material e acabamento.",
  },
  {
    q: "EPS ou PU: qual eu escolho?",
    a: "Depende do seu nível, peso e das ondas que você mais surfa. Beto ajuda a decidir na conversa inicial; se você já tem preferência, é só avisar.",
  },
  {
    q: "Posso deixar minha prancha usada para venda enquanto a nova fica pronta?",
    a: "Pode. A gente avalia o estado dela e deixa disponível para os nossos clientes. Se vender, repassamos o valor combinado.",
  },
  {
    q: "Posso vender uma prancha usada sem encomendar uma nova?",
    a: "Sim. Você pode trazer sua prancha para avaliação e deixá-la disponível para venda na loja, mesmo sem fazer uma nova encomenda.",
  },
  {
    q: "Fazem reparo de qualquer prancha?",
    a: "Fazemos reparos de qualquer marca. O ideal é passar na loja para avaliarmos o dano; se preferir, mande uma foto no WhatsApp para uma primeira olhada.",
  },
  {
    q: "Como funciona o reparo?",
    a: "A prancha é avaliada para entender o dano e definir o reparo. Depois, combinamos o serviço e avisamos quando ela estiver pronta para voltar à água.",
  },
  {
    q: "Vendemos acessórios sem encomendar uma prancha?",
    a: "Sim. Leash, deck, quilhas, capas e parafina ficam disponíveis na loja para quem precisar, com ou sem encomenda.",
  },
];

export function Shaper() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="encomendas" className="surface-deep relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3 text-sand/70">
              <TribalLine className="w-24" />
              <span className="eyebrow">Encomendas</span>
            </div>
            <h2 className="mt-5 text-4xl leading-[1] text-sand md:text-5xl">
              Sua prancha começa com você.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/70 md:text-lg">
              Quando você encomenda uma prancha na Ripwave, a conversa vem antes do shape. A gente
              quer entender como você surfa, onde costuma entrar no mar e o que espera sentir na
              próxima prancha.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-sand/70 md:text-lg">
              É a partir disso que o Beto propõe medidas, outline, rabeta e material. Prazo de
              produção e valores são combinados com clareza na conversa, de acordo com o projeto.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-primary px-7 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-1"
            >
              Converse com o Beto
            </a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/media/beto-production.jpg"
              alt="Beto Loureiro trabalhando no acabamento de uma prancha"
              loading="lazy"
              width={1920}
              height={3413}
              className="h-[32rem] w-full object-cover shadow-[var(--shadow-deep)]"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="order-2 lg:order-1">
            <img
              src="/media/custom-board.jpg"
              alt="Prancha personalizada Ripwave"
              loading="lazy"
              width={1920}
              height={2560}
              className="h-full max-h-[520px] w-full object-cover"
            />
          </Reveal>
          <div className="order-1 grid gap-6 sm:grid-cols-2 lg:order-2">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 100}>
                <div className="card-lift h-full border-l-2 border-primary/70 bg-sand/5 p-6">
                  <span className="font-display text-3xl text-primary">{step.n}</span>
                  <h3 className="mt-2 text-lg text-sand">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/70">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 border-l-2 border-primary bg-sand/5 p-7" delay={100}>
          <p className="max-w-4xl text-base leading-relaxed text-sand/75">
            Além das encomendas, a Ripwave também recebe reparos de qualquer marca, tem alguns
            modelos pronta-entrega e acessórios para completar seu surf. Se você tem uma prancha
            usada, pode trazer para avaliação e deixar disponível para venda na loja.
          </p>
        </Reveal>

        <Reveal className="mt-20" delay={150}>
          <div className="grid gap-8 border-t border-sand/20 pt-12 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="eyebrow text-primary">Perguntas frequentes</p>
              <h3 className="mt-4 text-3xl leading-none text-sand">
                Tudo começa numa boa conversa.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-sand/65">
                Escolha EPS ou PU com a orientação do Beto, traga sua prancha para reparo ou venda e
                encontre acessórios na loja — tudo começa em uma conversa.
              </p>
            </div>
            <div className="divide-y divide-sand/15 border-t border-sand/15">
              {faq.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-sand"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen ? (
                      <p className="pb-5 text-sm leading-relaxed text-sand/70">{item.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
