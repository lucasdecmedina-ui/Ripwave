export function WaveDivider({
  flip = false,
  className = "",
  color = "var(--sand)",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-[60px] w-full md:h-[110px]"
      >
        <path
          fill={color}
          d="M0,64 C180,110 320,10 540,44 C760,78 900,120 1120,86 C1260,64 1350,34 1440,20 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export function TribalLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 24"
      className={`h-4 w-40 opacity-70 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 12c26-14 52 14 78 0s52-14 78 0 52 14 80 0" />
      <path d="M188 6c8 2 14 4 22 6-8 2-14 4-22 6" />
    </svg>
  );
}
