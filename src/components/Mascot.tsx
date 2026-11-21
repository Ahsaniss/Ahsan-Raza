import { useEffect, useRef, useState } from "react";
import { confetti } from "@/lib/confetti";

const LINES = [
  "Hi! I'm Bit, Ahsan's robot 🤖",
  "Psst… he builds AI chatbots!",
  "Scroll down, the projects are 🔥",
  "Hire Ahsan. He ships fast!",
  "Beep boop. Click me again!",
];

/** A cartoon robot in the corner: eyes follow the cursor, click for a message + confetti. */
const Mascot = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [line, setLine] = useState<number | null>(null);
  const [blink, setBlink] = useState(false);
  const clicks = useRef(0);
  const hideTimer = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const m = Math.min(4, d / 40);
      setPupil({ x: (dx / d) * m, y: (dy / d) * m });
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const blinkTimer = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 140);
    }, 3200);

    // Greets the visitor once, shortly after load.
    const greet = window.setTimeout(() => show(0), 2500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(blinkTimer);
      clearTimeout(greet);
      clearTimeout(hideTimer.current);
    };
  }, []);

  const show = (i: number) => {
    setLine(i);
    clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setLine(null), 3800);
  };

  const onClick = () => {
    clicks.current += 1;
    show(clicks.current % LINES.length);
    const r = ref.current?.getBoundingClientRect();
    if (r) confetti(r.left + r.width / 2, r.top + 10, 36);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[55] select-none">
      {line !== null && (
        <div className="absolute bottom-full right-0 mb-3 w-max max-w-[210px] rounded-2xl border-2 border-foreground bg-card px-4 py-2 text-sm font-bold shadow-glow mascot-pop">
          {LINES[line]}
          <span className="absolute -bottom-[9px] right-8 h-4 w-4 rotate-45 border-b-2 border-r-2 border-foreground bg-card" />
        </div>
      )}
      <button
        ref={ref as never}
        onClick={onClick}
        aria-label="Chat with Bit the robot"
        className="mascot-bob block h-20 w-20 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg viewBox="0 0 80 90" className="h-full w-full overflow-visible">
          {/* antenna */}
          <path d="M40 16 V6" stroke="hsl(24 14% 9%)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="5" r="4.5" fill="hsl(14 88% 50%)" stroke="hsl(24 14% 9%)" strokeWidth="3" className="mascot-blink-light" />
          {/* body */}
          <rect x="22" y="60" width="36" height="24" rx="8" fill="hsl(262 85% 80%)" stroke="hsl(24 14% 9%)" strokeWidth="3" />
          <circle cx="40" cy="72" r="4" fill="hsl(48 95% 62%)" stroke="hsl(24 14% 9%)" strokeWidth="2.5" />
          {/* arms */}
          <path d="M22 66 Q10 68 12 80 M58 66 Q70 68 68 80" fill="none" stroke="hsl(24 14% 9%)" strokeWidth="3" strokeLinecap="round" />
          {/* head */}
          <rect x="10" y="16" width="60" height="46" rx="16" fill="hsl(200 85% 82%)" stroke="hsl(24 14% 9%)" strokeWidth="3" />
          <rect x="17" y="24" width="46" height="30" rx="11" fill="#fff" stroke="hsl(24 14% 9%)" strokeWidth="2.5" />
          {/* eyes */}
          {[30, 50].map((cx) => (
            <g key={cx}>
              <ellipse cx={cx} cy="38" rx="6" ry={blink ? 0.8 : 7} fill="#fff" stroke="hsl(24 14% 9%)" strokeWidth="2" />
              {!blink && <circle cx={cx + pupil.x} cy={38 + pupil.y} r="3" fill="hsl(24 14% 9%)" />}
            </g>
          ))}
          {/* cheeks + smile */}
          <circle cx="23" cy="47" r="3" fill="hsl(14 90% 75%)" />
          <circle cx="57" cy="47" r="3" fill="hsl(14 90% 75%)" />
          <path d="M34 48 Q40 54 46 48" fill="none" stroke="hsl(24 14% 9%)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>

      <style>{`
        .mascot-bob { animation: mascotBob 3s ease-in-out infinite; }
        @keyframes mascotBob { 50% { transform: translateY(-6px); } }
        .mascot-pop { animation: mascotPop 0.35s cubic-bezier(0.2, 1.4, 0.4, 1); transform-origin: bottom right; }
        @keyframes mascotPop { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .mascot-blink-light { animation: mascotLight 1.4s steps(1) infinite; }
        @keyframes mascotLight { 50% { fill: hsl(48 95% 62%); } }
        @media (prefers-reduced-motion: reduce) { .mascot-bob, .mascot-blink-light { animation: none; } }
      `}</style>
    </div>
  );
};

export default Mascot;
