import { useEffect, useRef } from "react";

/** Scroll progress bar only: the dark ambient effects are gone in the light theme. */
const Effects = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1.5 z-[60] w-full pointer-events-none">
      <div ref={barRef} className="h-full w-0 bg-primary border-r-2 border-foreground" />
    </div>
  );
};

export default Effects;
