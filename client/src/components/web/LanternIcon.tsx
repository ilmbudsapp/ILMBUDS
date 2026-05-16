type Props = { className?: string; flip?: boolean };

export function LanternIcon({ className = "", flip = false }: Props) {
  return (
    <svg
      className={`web-lantern ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M32 4v8" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M20 12h24l-4 12H24L20 12Z"
        fill="#b45309"
        stroke="#fbbf24"
        strokeWidth="1"
      />
      <rect x="18" y="24" width="28" height="44" rx="6" fill="#f59e0b" fillOpacity="0.9" />
      <rect x="22" y="30" width="20" height="32" rx="4" fill="#fef08a" fillOpacity="0.55" />
      <path d="M32 68v10" stroke="#fbbf24" strokeWidth="2" />
      <ellipse cx="32" cy="82" rx="8" ry="4" fill="#b45309" />
      <path
        d="M26 38h12M26 46h12M26 54h12"
        stroke="#fde68a"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
    </svg>
  );
}
