export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 animate-grid-pulse"
      style={{
        // Patola-inspired diamond lattice
        backgroundImage: `
          linear-gradient(45deg, rgba(191, 161, 129, 0.08) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(191, 161, 129, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    />
  );
}
