export function GradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        height: "100vh",
        width: "100%",
        zIndex: -1,
        background:
          "radial-gradient(80% 100% at 50% -50%, blue 1%, transparent 100%)",
      }}
      className="gradient-background"
    />
  );
}
