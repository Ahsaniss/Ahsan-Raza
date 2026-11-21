import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import htmlLogo from "@/assets/w3_html5-ar21~bgwhite.svg";
import pythonLogo from "@/assets/python-icon.svg";
import javascriptLogo from "@/assets/javascript-ar21.svg";
import gitLogo from "@/assets/git-scm-ar21~bgwhite.svg";
import { useEffect, useState } from "react";
import { Star, Squiggle, Sparkle } from "@/components/Doodles";
import { confetti } from "@/lib/confetti";

const ROLES = [
  "Software Engineer",
  "Project Manager",
  "AI & Chatbot Developer",
  "Machine Learning Enthusiast",
  "Web & E-Commerce Developer",
];

/** Types and deletes each string in turn. */
const useTypewriter = (words: string[], typeMs = 70, deleteMs = 35, pauseMs = 1600) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = pauseMs;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs]);

  return text;
};

const RESUME_URL =
  "https://drive.google.com/file/d/1nJOd_S8dhl5eTeCNGMjMuciCUSisun1m/view?usp=sharing";

const socials = [
  { href: "https://github.com/Ahsaniss", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/muhammad-ahsan-raza-2a9b9828a", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:ahsanraza858585@gmail.com?subject=Hello%20Ahsan", icon: Mail, label: "Email" },
];

const stickers = [
  { src: pythonLogo, alt: "Python", pos: "top-4 -left-6 lg:-left-12", rot: "-8deg", delay: "0s" },
  { src: javascriptLogo, alt: "JavaScript", pos: "top-1/3 -right-6 lg:-right-12", rot: "7deg", delay: "0.8s" },
  { src: htmlLogo, alt: "HTML5", pos: "bottom-24 -left-8 lg:-left-14", rot: "6deg", delay: "1.6s" },
  { src: gitLogo, alt: "Git", pos: "bottom-10 -right-4 lg:-right-8", rot: "-6deg", delay: "2.4s" },
];

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <Star className="sticker-float absolute left-[4%] top-32 hidden h-10 w-10 md:block" style={{ ["--r" as string]: "-10deg" }} />
      <Sparkle className="sticker-float absolute left-[46%] top-28 hidden h-9 w-9 md:block" style={{ animationDelay: "1s" }} />
      <Squiggle className="absolute bottom-20 left-[6%] hidden h-6 w-28 md:block" />
      <Star className="sticker-float absolute bottom-28 right-[6%] hidden h-8 w-8 md:block" style={{ animationDelay: "1.5s" }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <span
              className="hero-in inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-[hsl(var(--mint))] px-4 py-1.5 text-sm font-bold shadow-glow"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </span>
              Open to opportunities
            </span>

            <h1
              className="hero-in text-6xl sm:text-7xl xl:text-[7.5rem] font-extrabold leading-[0.92]"
              style={{ animationDelay: "0.15s" }}
            >
              Hi, I'm
              <br />
              <span className="marker">Ahsan</span>
              <span className="text-primary">.</span>
              <br />
              <span className="text-3xl sm:text-5xl xl:text-6xl text-muted-foreground font-bold tracking-tight">
                Muhammad Ahsan Raza
              </span>
            </h1>

            <div className="hero-in space-y-4" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl md:text-4xl font-bold min-h-[3rem]">
                a <span className="text-primary">{role}</span>
                <span className="typing-caret" />
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Machine Learning &amp; Data Science enthusiast building AI chatbots with Gemini, plus web and
                e-commerce apps in Python, C# and React. Student at GCU Faisalabad.
              </p>
            </div>

            <div className="hero-in flex flex-wrap items-center gap-4" style={{ animationDelay: "0.45s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  Download Resume <ArrowDown className="!size-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  See my work <ArrowUpRight className="!size-4" />
                </a>
              </Button>
              <div className="flex gap-2">
                {socials.map(({ href, icon: Icon, label }) => (
                  <Button key={label} variant="outline" size="icon" aria-label={label} className="rounded-full" asChild>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="hero-in relative mx-auto w-full max-w-sm" style={{ animationDelay: "0.35s" }}>
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl border-2 border-foreground bg-primary" />
            <div
              onClick={(e) => confetti(e.clientX, e.clientY, 60)}
              className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-t-[999px] rounded-b-3xl border-2 border-foreground bg-[hsl(var(--lilac))]"
            >
              <img
                src={profileImage}
                alt="Ahsan Raza - Software Engineer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {stickers.map((s) => (
              <div
                key={s.alt}
                className={`sticker-float absolute ${s.pos} flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground bg-card shadow-glow`}
                style={{ ["--r" as string]: s.rot, transform: `rotate(${s.rot})`, animationDelay: s.delay }}
              >
                <img src={s.src} alt={s.alt} className="h-8 w-8 object-contain" />
              </div>
            ))}

            {/* Cartoon speech bubble */}
            <div className="sticker-float absolute -top-8 right-2 z-10 rounded-2xl border-2 border-foreground bg-card px-4 py-2 text-lg font-extrabold shadow-glow" style={{ ["--r" as string]: "4deg", transform: "rotate(4deg)" }}>
              Hello! 👋
              <span className="absolute -bottom-[9px] left-6 h-4 w-4 rotate-45 border-b-2 border-r-2 border-foreground bg-card" />
            </div>
            <p className="absolute -right-2 top-[46%] hidden rotate-6 text-sm font-bold text-primary lg:block">click me! ↩</p>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-foreground bg-[hsl(var(--butter))] px-5 py-2 text-sm font-bold shadow-glow">
              CGPA 3.31 · 15+ projects shipped
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-in { opacity: 0; animation: heroIn 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; }
        @keyframes heroIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
};

export default Hero;
