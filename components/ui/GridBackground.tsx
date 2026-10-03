export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 animate-grid-pulse"
      style={{
        backgroundImage: `
          linear-gradient(rgba(79, 70, 229, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79, 70, 229, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
