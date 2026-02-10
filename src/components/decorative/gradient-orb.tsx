export default function GradientOrb({
  color = "cyan",
  size = 400,
  className = "",
}: {
  color?: "cyan" | "purple" | "amber";
  size?: number;
  className?: string;
}) {
  const colors = {
    cyan: "rgba(0,212,255,0.12)",
    purple: "rgba(139,92,246,0.12)",
    amber: "rgba(245,158,11,0.1)",
  };

  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
