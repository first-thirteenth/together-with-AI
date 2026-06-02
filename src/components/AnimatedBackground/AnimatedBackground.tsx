export const AnimatedBackground = () => (
  <div
    aria-hidden
    className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
  >
    <div className="absolute inset-0 bg-mesh-gradient opacity-60 dark:opacity-40 animate-mesh" />
    <div className="blob blob-1" />
    <div className="blob blob-2" />
    <div className="blob blob-3" />
    <div className="blob blob-4" />
  </div>
);
