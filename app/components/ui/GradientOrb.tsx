interface GradientOrbProps {
  color?: "blue" | "purple" | "cyan" | "orange" | "green";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap = {
  blue: "rgba(77, 145, 255, 0.18)",
  purple: "rgba(168, 85, 247, 0.15)",
  cyan: "rgba(34, 211, 238, 0.15)",
  orange: "rgba(251, 146, 60, 0.12)",
  green: "rgba(74, 222, 128, 0.12)",
};

const positionMap = {
  "top-left": "-top-[30%] -left-[30%]",
  "top-right": "-top-[30%] -right-[30%]",
  "bottom-left": "-bottom-[30%] -left-[30%]",
  "bottom-right": "-bottom-[30%] -right-[30%]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const sizeMap = {
  sm: "w-[40%] h-[40%]",
  md: "w-[60%] h-[60%]",
  lg: "w-[80%] h-[80%]",
};

export default function GradientOrb({
  color = "blue",
  position = "top-right",
  size = "md",
  className = "",
}: GradientOrbProps) {
  const gradientCenter = {
    "top-left": "30% 30%",
    "top-right": "70% 30%",
    "bottom-left": "30% 70%",
    "bottom-right": "70% 70%",
    center: "center",
  }[position];

  return (
    <div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none select-none ${className}`}
      style={{
        background: `radial-gradient(circle at ${gradientCenter}, ${colorMap[color]} 0%, transparent 60%)`,
        transform: position === "center" ? "translate(-50%, -50%) translateZ(0)" : "translateZ(0)",
      }}
      aria-hidden="true"
    />
  );
}
