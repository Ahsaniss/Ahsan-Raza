const COLORS = ["#f2541b", "#ffd84d", "#b9a2ff", "#7be0a8", "#6cc8ff", "#ff9ec4"];

/** Fire a burst of confetti from a point on the screen (client coordinates). */
export function confetti(x: number, y: number, count = 48) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const size = 6 + Math.random() * 8;
    const round = Math.random() > 0.5;
    Object.assign(el.style, {
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${round ? size : size * 0.5}px`,
      background: COLORS[i % COLORS.length],
      border: "1.5px solid #1a1612",
      borderRadius: round ? "50%" : "2px",
      pointerEvents: "none",
      zIndex: "100",
    });
    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const dist = 90 + Math.random() * 190;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 60;
    const anim = el.animate(
      [
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: 0.6 },
        { transform: `translate(${dx * 1.1}px, ${dy + 220}px) rotate(${Math.random() * 720}deg)`, opacity: 0 },
      ],
      { duration: 1100 + Math.random() * 600, easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" }
    );
    anim.onfinish = () => el.remove();
  }
}
