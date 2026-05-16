import { MosqueSilhouette } from "./MosqueSilhouette";
import { LanternIcon } from "./LanternIcon";

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: 0 },
  { top: "15%", left: "78%", size: 3, delay: 0.8 },
  { top: "22%", left: "45%", size: 2, delay: 1.4 },
  { top: "6%", left: "55%", size: 2, delay: 0.3 },
  { top: "18%", left: "28%", size: 3, delay: 2.1 },
  { top: "12%", left: "92%", size: 2, delay: 1.1 },
  { top: "28%", left: "8%", size: 2, delay: 1.9 },
  { top: "10%", left: "35%", size: 2, delay: 0.5 },
  { top: "25%", left: "65%", size: 3, delay: 2.5 },
  { top: "5%", left: "88%", size: 2, delay: 1.6 },
  { top: "32%", left: "52%", size: 2, delay: 0.9 },
  { top: "14%", left: "62%", size: 2, delay: 2.2 },
  { top: "20%", left: "18%", size: 2, delay: 1.3 },
  { top: "8%", left: "72%", size: 3, delay: 0.2 },
  { top: "30%", left: "85%", size: 2, delay: 1.7 },
];

export function WebMagicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(234,179,8,0.08)_0%,_transparent_45%)]" />

      {STARS.map((star, i) => (
        <span
          key={i}
          className="web-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: `${2.5 + (i % 4)}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <LanternIcon className="absolute left-2 top-16 h-20 w-14 opacity-90 sm:left-6 sm:h-24 sm:w-16 md:left-10" />
      <LanternIcon
        flip
        className="web-lantern-delay absolute right-2 top-20 h-20 w-14 opacity-90 sm:right-6 sm:h-24 sm:w-16 md:right-10"
      />

      <MosqueSilhouette className="absolute bottom-0 left-0 right-0 w-full opacity-90" />
    </div>
  );
}
