import { MosqueSilhouette } from "./MosqueSilhouette";
import { LanternIcon } from "./LanternIcon";

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: 0 },
  { top: "15%", left: "78%", size: 3, delay: 0.8 },
  { top: "22%", left: "45%", size: 2, delay: 1.4 },
  { top: "6%", left: "55%", size: 2, delay: 0.3 },
  { top: "18%", left: "28%", size: 3, delay: 2.1 },
];

/** Subtle warm background for premium light web theme */
export function WebMagicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#F8F5EC]" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-transparent to-amber-50/50" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />

      {/* Very subtle decorative elements at low opacity */}
      <div className="absolute inset-0 opacity-[0.07]">
        {STARS.map((star, i) => (
          <span
            key={i}
            className="web-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: `${3 + (i % 3)}s`,
              animationDelay: `${star.delay}s`,
              background: "#059669",
            }}
          />
        ))}
        <LanternIcon className="absolute left-4 top-24 h-16 w-12 opacity-100 sm:left-8 md:left-12" />
        <LanternIcon
          flip
          className="web-lantern-delay absolute right-4 top-28 h-16 w-12 opacity-100 sm:right-8 md:right-12"
        />
        <MosqueSilhouette className="absolute bottom-0 left-0 right-0 w-full" />
      </div>
    </div>
  );
}
