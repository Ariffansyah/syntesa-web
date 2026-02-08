interface BackgroundGlowProps {
  className?: string;
}

export default function BackgroundGlow({ className = "" }: BackgroundGlowProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ contain: "strict" }}
    >
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[url('/noise.svg')] bg-repeat" />

      <div
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(77, 145, 255, 0.12) 0%, transparent 70%)",
          transform: "translateZ(0)",
        }}
      />

      <div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
