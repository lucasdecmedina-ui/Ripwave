import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { BoardImage } from "@/data/catalog";

type BoardViewerProps = {
  images: BoardImage[];
  modelName: string;
};

const SWIPE_THRESHOLD = 42;

export function BoardViewer({ images, modelName }: BoardViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const changeView = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  const finishDrag = (endX: number) => {
    if (startX.current === null) return;

    const distance = endX - startX.current;
    startX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    changeView(distance > 0 ? -1 : 1);
  };

  return (
    <div className="space-y-4">
      <div
        className="group relative aspect-[3/4] touch-pan-y overflow-hidden bg-muted outline-none"
        role="region"
        aria-label={`Visualizador da prancha ${modelName}`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeView(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            changeView(1);
          }
        }}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          startX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        {images.map((image, index) => (
          <img
            key={`${image.src}-${image.label ?? index}`}
            src={image.src}
            alt={index === activeIndex ? image.alt : ""}
            aria-hidden={index !== activeIndex}
            draggable={false}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              index === activeIndex
                ? "h-full w-full scale-100 object-contain p-3 opacity-100"
                : "pointer-events-none h-full w-full scale-[1.02] object-contain p-3 opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={() => changeView(-1)}
          aria-label={`Vista anterior de ${modelName}`}
          className="absolute top-1/2 left-4 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-navy/15 bg-sand/90 text-navy opacity-0 shadow-lg transition-all hover:bg-sand focus:opacity-100 focus:outline-2 focus:outline-offset-2 focus:outline-primary group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => changeView(1)}
          aria-label={`Próxima vista de ${modelName}`}
          className="absolute top-1/2 right-4 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-navy/15 bg-sand/90 text-navy opacity-0 shadow-lg transition-all hover:bg-sand focus:opacity-100 focus:outline-2 focus:outline-offset-2 focus:outline-primary group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 text-center">
        <span className="eyebrow text-foreground/55">Arraste para girar</span>
        <span className="eyebrow text-primary">{images[activeIndex].label ?? "Vista"}</span>
        <div
          className="flex gap-1.5"
          aria-label={`${images[activeIndex].label ?? "Vista"}, posição ${activeIndex + 1} de ${images.length}`}
        >
          {images.map((image, index) => (
            <span
              key={image.src}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-navy/25"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
