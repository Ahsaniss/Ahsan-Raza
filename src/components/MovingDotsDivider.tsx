import { useIsMobile } from "@/hooks/use-mobile";

const snakePath =
  "M 0 34 C 50 16, 100 16, 150 34 S 250 52, 300 34 S 400 16, 450 34 S 550 52, 600 34 S 700 16, 750 34 S 850 52, 900 34 S 1000 16, 1050 34 S 1150 52, 1200 34";

const logos = [
  {
    name: "HTML",
    begin: "0s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <path d="M8 6h32l-2.9 32.9L24 42l-13.1-3.1L8 6Z" fill="#E44D26" />
        <path d="M24 38.1 34.6 35.2 37 8H24v30.1Z" fill="#F16529" />
        <path d="M14.2 14h19.6l-.4 4.3H18.9l.5 5.1h13.9l-1 11.1L24 36l-8.7-1.9-.6-6.5h4.2l.3 3.4 4.8 1.1 4.8-1.1.4-4.7H14l-.8-9.3Z" fill="#fff" />
      </>
    ),
  },
  {
    name: "Python",
    begin: "1.6s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <path d="M23.8 6h6.6c3.2 0 5.6 2.6 5.6 5.8v8.2H18.2c-3.8 0-6.9 3.1-6.9 6.9v4.5c0 3.1 2.5 5.6 5.6 5.6h4.2v-5.4H17c-.9 0-1.7-.8-1.7-1.7v-3.1c0-1.9 1.5-3.4 3.4-3.4h17.3c2.6 0 4.8 2.1 4.8 4.8V31c0 4-3.2 7.2-7.2 7.2h-5.5v4.8H24c-3.4 0-6.2-2.8-6.2-6.2v-8.1H29c3.8 0 6.9-3.1 6.9-6.9v-4.5c0-3.1-2.5-5.6-5.6-5.6h-6.5V6Z" fill="#3776AB" />
        <circle cx="27.5" cy="12.2" r="1.8" fill="#fff" />
        <path d="M24.2 31.9h-6.4c-3.2 0-5.8-2.6-5.8-5.8v-1.6c0-3.2 2.6-5.8 5.8-5.8h13c3.2 0 5.8 2.6 5.8 5.8v1.6c0 3.2-2.6 5.8-5.8 5.8h-1.1v5.1c0 2.1-1.7 3.8-3.8 3.8h-1.7v-3.7h1.1c.6 0 1.1-.5 1.1-1.1v-4.3Z" fill="#FFD343" opacity="0.9" />
      </>
    ),
  },
  {
    name: "Java",
    begin: "3.2s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <path d="M18 32c-2.8-1.5-5.6-3.8-5.6-7.3 0-3.5 2.6-6.2 6.6-8.6 4-2.4 6.6-4.5 6.6-7 0-1-.2-1.8-.7-2.6 3.8 2.1 5.8 5.2 5.8 8.4 0 3.9-2.9 6.3-6.4 8.3-3.3 1.9-6.3 3.8-6.3 6.9 0 .7.1 1.4.4 1.9Z" fill="#ED8B00" />
        <path d="M31.8 29.1c1.8 1 3.3 2.5 3.3 4.6 0 3.3-3.7 6.2-10.4 6.2-5.7 0-9.9-2.2-12-5.6 2.2 1.1 5 1.9 8.1 1.9 5.8 0 10.4-2.3 10.4-5.5 0-.6-.1-1.1-.4-1.6Z" fill="#5382A1" />
        <path d="M20.8 16.1c1.4-1 2.7-2.1 2.7-3.5 0-.7-.2-1.3-.6-1.9 2.9 1.1 4.6 3 4.6 5.2 0 2.7-2.2 4.2-4.6 5.6-1.8 1.1-3.6 2.3-3.6 4.2 0 .7.2 1.4.7 2-2.6-1.2-4.3-3.1-4.3-5.4 0-2.6 2-4.1 5.1-6.2Z" fill="#fff" opacity="0.9" />
      </>
    ),
  },
  {
    name: "CPlusPlus",
    begin: "4.8s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <rect x="6" y="6" width="36" height="36" rx="12" fill="#00599C" />
        <path d="M20.8 32.6c-5 0-8.8-3.7-8.8-8.6s3.7-8.6 8.8-8.6c3.4 0 6.2 1.5 7.9 4l-3.9 2.4c-.8-1.3-2.1-2.1-4-2.1-2.9 0-4.9 2-4.9 4.3s2 4.3 4.9 4.3c1.9 0 3.2-.8 4-2.1l3.9 2.4c-1.8 2.6-4.6 4-7.9 4Z" fill="#fff" />
        <path d="M31.3 18h2.8v2.8H37v2.8h-2.9v2.9h-2.8v-2.9h-2.9v-2.8h2.9V18Zm7.2 0h2.8v2.8H44v2.8h-2.7v2.9h-2.8v-2.9h-2.8v-2.8h2.8V18Z" fill="#9FD3FF" />
      </>
    ),
  },
  {
    name: "VSCode",
    begin: "6.4s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <path d="m35.7 9.7-9.1 4.2-11-8.1L10 8.4l8.7 7.8L10 24l8.7 7.8-8.7 7.8 5.6 2.6 11-8.1 9.1 4.2 2.4-1.2V10.9l-2.4-1.2ZM26 29.5l-6.2-5.4L26 18.7v10.8Z" fill="#2F80ED" />
        <path d="m26 29.5 8.2 6.1V12.4L26 18.7v10.8Z" fill="#005BA4" />
        <path d="m19.8 24.1-5.1-4.7 5.1-4.7L26 18.7l-6.2 5.4Z" fill="#3FA9F5" />
      </>
    ),
  },
  {
    name: "JavaScript",
    begin: "8s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#F7DF1E" />
        <path d="M18 34.2c1 2 2.5 3.1 4.7 3.1 2.4 0 3.9-1.3 3.9-4.7V16h5v16.8c0 6.1-3.5 8.9-8.6 8.9-4.6 0-7.4-2.4-8.8-5.3l3.8-2.2Z" fill="#1A1A1A" />
        <path d="M30.8 34.8c1.5 1.1 3.1 1.9 5.1 1.9 1.9 0 3-.8 3-2.1 0-1.3-.9-1.9-3.1-2.8l-1.3-.6c-3.4-1.5-5.6-3.3-5.6-7.2 0-3.5 2.6-6.2 6.7-6.2 2.9 0 5 1 6.5 3.7l-3.6 2.3c-.8-1.5-1.7-2.1-2.9-2.1-1.2 0-2 .8-2 1.8 0 1.2.8 1.7 2.7 2.5l1.3.6c4 1.7 6.2 3.5 6.2 7.4 0 4.3-3.4 6.7-8 6.7-4 0-6.7-1.5-8.4-4.1l3.4-2.1Z" fill="#1A1A1A" opacity="0.95" />
      </>
    ),
  },
  {
    name: "TypeScript",
    begin: "9.6s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#3178C6" />
        <path d="M13 17h22v4h-8.1v17h-4.8V21H13v-4Z" fill="#fff" />
        <path d="M31.2 28c1 0 1.7.3 2.2 1 .5.6.8 1.4.8 2.3 0 1.1-.4 2-1.2 2.7-.8.7-1.8 1-3.1 1-1.6 0-3-.5-4.2-1.5l1.6-2.9c.9.8 1.8 1.2 2.8 1.2.8 0 1.2-.3 1.2-.8 0-.4-.3-.7-1-.9l-1.4-.4c-2.3-.7-3.4-2-3.4-4 0-1.4.5-2.6 1.6-3.4 1-.8 2.3-1.2 3.8-1.2 1.7 0 3.1.4 4.2 1.3l-1.5 2.8c-.8-.6-1.7-.9-2.6-.9-.7 0-1.1.2-1.1.7 0 .4.3.6.9.8l1.4.4Z" fill="#fff" opacity="0.95" />
      </>
    ),
  },
  {
    name: "React",
    begin: "11.2s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#0F172A" />
        <circle cx="24" cy="24" r="3.8" fill="#61DAFB" />
        <ellipse cx="24" cy="24" rx="13" ry="5.2" fill="none" stroke="#61DAFB" strokeWidth="2.4" />
        <ellipse cx="24" cy="24" rx="13" ry="5.2" fill="none" stroke="#61DAFB" strokeWidth="2.4" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="13" ry="5.2" fill="none" stroke="#61DAFB" strokeWidth="2.4" transform="rotate(-60 24 24)" />
      </>
    ),
  },
  {
    name: "Node",
    begin: "12.8s",
    duration: "8s",
    viewBox: "0 0 48 48",
    render: () => (
      <>
        <path d="M24 6 39 14.7v18.6L24 42 9 33.3V14.7L24 6Z" fill="#43853D" />
        <path d="M20.2 17.4c.7-1.1 2-1.8 3.8-1.8 3.4 0 5.4 2.2 5.4 5.7v10.6h-4.2V22c0-1.6-.8-2.5-2.2-2.5-1.3 0-2.2.9-2.2 2.4v9.8h-4.1V21.7c0-1.9-.9-2.9-2.2-2.9-1.5 0-2.5 1-2.5 2.7v10.4h-4V21.2c0-4.2 2.4-6.5 5.8-6.5 2 0 3.7.8 4.4 2.7Z" fill="#fff" />
      </>
    ),
  },
];

const MotionLogo = ({
  begin,
  duration,
  viewBox,
  size,
  padding,
  children,
}: {
  begin: string;
  duration: string;
  viewBox: string;
  size: number;
  padding: number;
  children: React.ReactNode;
}) => {
  return (
    <g>
      <animateMotion begin={begin} dur={duration} repeatCount="indefinite" rotate="auto">
        <mpath href="#snake-wave-path" />
      </animateMotion>
      <g transform={`translate(-${padding} -${padding})`}>
        <svg viewBox={viewBox} width={size} height={size} overflow="visible">
          <rect x="3" y="3" width="42" height="42" rx="12" fill="hsl(var(--background) / 0.98)" stroke="hsl(var(--primary) / 0.55)" strokeWidth="1.25" />
          {children}
        </svg>
      </g>
    </g>
  );
};

const MovingDotsDivider = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return null;
  }

  const activeLogos = isMobile ? logos.slice(0, 5) : logos;
  const iconSize = isMobile ? 28 : 40;
  const iconPadding = isMobile ? 14 : 20;
  const strokeWidth = isMobile ? 4 : 6;

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
              viewBox={logo.viewBox}
              size={iconSize}
              padding={iconPadding}
            >
              {logo.render()}
            </MotionLogo>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default MovingDotsDivider;