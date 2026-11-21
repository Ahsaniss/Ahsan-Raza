import { useEffect, useRef } from "react";
import { Rocket } from "@/components/Doodles";

/** Scroll progress bar with a little rocket riding the tip. */
const Effects = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      if (rocketRef.current) rocketRef.current.style.left = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] w-full pointer-events-none">
      <div className="h-1.5 w-full">
        <div ref={barRef} className="h-full w-0 bg-primary border-r-2 border-foreground" />
      </div>
      <div ref={rocketRef} className="absolute top-1 -translate-x-1/2 rotate-90" style={{ left: 0 }}>
        <Rocket className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Effects;
