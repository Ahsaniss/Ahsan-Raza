import { useIsMobile } from "@/hooks/use-mobile";
import htmlLogo from "@/assets/w3_html5-ar21~bgwhite.svg";
import pythonLogo from "@/assets/python-icon.svg";
import javaScriptLogo from "@/assets/javascript-ar21.svg";
import jsonLogo from "@/assets/json-ar21.svg";
import sqliteLogo from "@/assets/sqlite-ar21~bgwhite.svg";
import viteLogo from "@/assets/vitejsdev-ar21~bgwhite.svg";
import gitLogo from "@/assets/git-scm-ar21~bgwhite.svg";

const snakePath =
  "M 0 34 C 50 16, 100 16, 150 34 S 250 52, 300 34 S 400 16, 450 34 S 550 52, 600 34 S 700 16, 750 34 S 850 52, 900 34 S 1000 16, 1050 34 S 1150 52, 1200 34";

const logos = [
  { name: "HTML", begin: "0s", duration: "16s", src: htmlLogo },
  { name: "Python", begin: "2.4s", duration: "16s", src: pythonLogo },
  { name: "JavaScript", begin: "4.8s", duration: "16s", src: javaScriptLogo },
  { name: "Git", begin: "7.2s", duration: "16s", src: gitLogo },
  { name: "SQLite", begin: "9.6s", duration: "16s", src: sqliteLogo },
  { name: "JSON", begin: "12s", duration: "16s", src: jsonLogo },
  { name: "Vite", begin: "14.4s", duration: "16s", src: viteLogo },
];

const MotionLogo = ({
  begin,
  duration,
  size,
  src,
  label,
}: {
  begin: string;
  duration: string;
  size: number;
  src: string;
  label: string;
}) => {
  return (
    <g aria-label={label}>
      <animateMotion begin={begin} dur={duration} repeatCount="indefinite" rotate="auto">
        <mpath href="#snake-wave-path" />
      </animateMotion>
      <image
        href={src}
        width={size}
        height={size}
        x={-size / 2}
        y={-size / 2}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};

const MovingDotsDivider = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return null;
  }

  const activeLogos = isMobile ? logos.slice(0, 5) : logos;
  const iconSize = 38;
  const strokeWidth = 6;

  return (
    <div className="relative overflow-hidden py-10" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className={`relative w-full overflow-hidden ${isMobile ? "h-12" : "h-16"}`}>
        <svg className="snake-divider absolute inset-0 h-full w-full" viewBox="0 0 1200 68" preserveAspectRatio="none">
          <defs>
            <filter id="snake-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 0.55 0"
              />
            </filter>
          </defs>
          <path id="snake-wave-path" d={snakePath} fill="none" stroke="none" />
          <path
            d={snakePath}
            fill="none"
            stroke="hsl(var(--primary) / 0.35)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={snakePath}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="18 22"
          />
          {activeLogos.map((logo) => (
            <MotionLogo
              key={logo.name}
              begin={logo.begin}
              duration={logo.duration}
              size={iconSize}
              src={logo.src}
              label={logo.name}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MovingDotsDivider;