const words = [
  "React", "TypeScript", "Python", "Machine Learning", "Gemini AI", "Node.js",
  "C#", "Project Management", "Generative AI", "Tailwind", "MongoDB", "RAG",
];

/** Scrolling ink strip between the hero and the rest of the page. */
const MovingDotsDivider = () => {
  const row = [...words, ...words];
  return (
    <div
      className="overflow-hidden border-y-2 border-foreground bg-foreground py-4 -rotate-1 scale-[1.02]"
      aria-hidden="true"
    >
      <div className="marquee">
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={`${n}-${i}`} className="flex items-center text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-background">
                <span className="px-6">{w}</span>
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingDotsDivider;
