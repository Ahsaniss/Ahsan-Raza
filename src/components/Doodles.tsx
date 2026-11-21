import type { CSSProperties } from "react";

/** Small hand-drawn style SVGs (ink outline, flat colour fills). */
const INK = "hsl(24 14% 9%)";

export const Star = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden>
    <path
      d="M24 3l5.6 14.2L45 18.6l-11.7 9.8L37 44 24 35.6 11 44l3.7-15.6L3 18.6l15.4-1.4z"
      fill="hsl(48 95% 62%)" stroke={INK} strokeWidth="3" strokeLinejoin="round"
    />
  </svg>
);

export const Squiggle = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 120 28" className={className} style={style} aria-hidden>
    <path
      d="M4 14 Q16 0 28 14 T52 14 T76 14 T100 14 T116 14"
      fill="none" stroke="hsl(14 88% 50%)" strokeWidth="6" strokeLinecap="round"
    />
  </svg>
);

export const Sparkle = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
    <path d="M20 2 Q22 18 38 20 Q22 22 20 38 Q18 22 2 20 Q18 18 20 2Z" fill="hsl(262 85% 78%)" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const Rocket = ({ className = "", style }: { className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
    {/* flame */}
    <path d="M26 46 Q32 66 38 46Z" fill="hsl(36 100% 55%)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    {/* fins */}
    <path d="M22 36 L10 48 L24 46Z M42 36 L54 48 L40 46Z" fill="hsl(14 88% 50%)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    {/* body */}
    <path d="M32 4 Q46 16 42 46 L22 46 Q18 16 32 4Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <circle cx="32" cy="26" r="6" fill="hsl(200 85% 70%)" stroke={INK} strokeWidth="3" />
  </svg>
);

/** A cartoon developer at a laptop, with a gently bobbing head and typing hands. */
export const CoderCartoon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 280 220" className={className} role="img" aria-label="Cartoon of a developer coding on a laptop">
    <style>{`
      @keyframes cc-bob { 50% { transform: translateY(-4px); } }
      @keyframes cc-type { 0%,100% { transform: translateY(0); } 50% { transform: translateY(3px); } }
      @keyframes cc-line { 0% { stroke-dashoffset: 40; } 100% { stroke-dashoffset: 0; } }
      .cc-head { animation: cc-bob 2.4s ease-in-out infinite; transform-origin: 140px 80px; }
      .cc-hand1 { animation: cc-type 0.5s ease-in-out infinite; }
      .cc-hand2 { animation: cc-type 0.5s ease-in-out infinite 0.25s; }
      .cc-code { stroke-dasharray: 40; animation: cc-line 2s linear infinite; }
    `}</style>
    {/* ground shadow */}
    <ellipse cx="140" cy="208" rx="110" ry="8" fill="hsl(24 14% 9% / 0.12)" />
    {/* desk */}
    <rect x="30" y="160" width="220" height="14" rx="4" fill="hsl(36 60% 70%)" stroke={INK} strokeWidth="3" />
    {/* body */}
    <path d="M100 160 Q100 110 140 110 Q180 110 180 160Z" fill="hsl(14 88% 50%)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    {/* head */}
    <g className="cc-head">
      <circle cx="140" cy="76" r="30" fill="hsl(28 70% 78%)" stroke={INK} strokeWidth="3" />
      {/* hair */}
      <path d="M110 70 Q112 40 140 42 Q170 40 170 70 Q158 56 140 58 Q122 56 110 70Z" fill={INK} />
      {/* glasses */}
      <circle cx="128" cy="78" r="8" fill="#fff" stroke={INK} strokeWidth="2.5" />
      <circle cx="152" cy="78" r="8" fill="#fff" stroke={INK} strokeWidth="2.5" />
      <path d="M136 78 H144" stroke={INK} strokeWidth="2.5" />
      <circle cx="130" cy="79" r="2.5" fill={INK} />
      <circle cx="154" cy="79" r="2.5" fill={INK} />
      {/* smile */}
      <path d="M130 92 Q140 102 150 92" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </g>
    {/* laptop */}
    <path d="M70 160 L80 112 H200 L210 160Z" fill="hsl(24 14% 14%)" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <rect x="88" y="120" width="104" height="34" rx="3" fill="hsl(150 55% 80%)" />
    <path className="cc-code" d="M96 130 H130" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <path className="cc-code" d="M104 138 H150" stroke="hsl(14 88% 50%)" strokeWidth="3" strokeLinecap="round" style={{ animationDelay: "0.5s" }} />
    <path className="cc-code" d="M96 146 H122" stroke="hsl(262 70% 55%)" strokeWidth="3" strokeLinecap="round" style={{ animationDelay: "1s" }} />
    {/* hands */}
    <circle className="cc-hand1" cx="118" cy="162" r="9" fill="hsl(28 70% 78%)" stroke={INK} strokeWidth="3" />
    <circle className="cc-hand2" cx="162" cy="162" r="9" fill="hsl(28 70% 78%)" stroke={INK} strokeWidth="3" />
    {/* coffee */}
    <path d="M222 140 h18 v20 a4 4 0 0 1 -4 4 h-10 a4 4 0 0 1 -4 -4z" fill="#fff" stroke={INK} strokeWidth="3" />
    <path d="M240 146 q9 0 9 7 t-9 7" fill="none" stroke={INK} strokeWidth="3" />
    <path d="M227 132 q-4 -6 0 -10 M234 132 q-4 -6 0 -10" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);
