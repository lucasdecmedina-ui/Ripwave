import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: se o IntersectionObserver não existir (ou falhar), mostra o conteúdo.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Segurança para WebKit/iOS: se por algum motivo o observer não disparar,
    // o conteúdo nunca fica invisível permanentemente.
    const safety = window.setTimeout(() => setVisible(true), 1500);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            window.clearTimeout(safety);
            io.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);

    // Caso o elemento já esteja visível no primeiro paint (iOS às vezes só
    // dispara o callback após um scroll).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      window.clearTimeout(safety);
      io.disconnect();
    }

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
