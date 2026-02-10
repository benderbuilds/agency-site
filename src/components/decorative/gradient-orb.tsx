export default function GradientOrb({
  color = "cyan",
  size = 400,
  className = "",
  animate = false,
}: {
  color?: "cyan" | "purple" | "amber";
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  const colors = {
    cyan: "rgba(0,212,255,0.15)",
    purple: "rgba(139,92,246,0.15)",
    amber: "rgba(245,158,11,0.12)",
  };

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${animate ? "animate-float" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 65%)`,
        filter: "blur(60px)",
      }}
      aria-hidden="true"
    />
  );
}
