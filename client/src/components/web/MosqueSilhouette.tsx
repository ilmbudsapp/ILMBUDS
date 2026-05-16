export function MosqueSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="mosqueGrad" x1="600" y1="0" x2="600" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" stopOpacity="0.9" />
          <stop offset="1" stopColor="#020617" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mosqueGrad)"
        d="M0 280V200c80-20 120-60 160-100 20 40 60 70 100 90 40-50 90-90 140-110 50 20 100 60 140 110 40-20 80-50 120-90 40 40 80 80 140 100 40-30 70-60 100-90v170H0Z"
      />
      <ellipse cx="600" cy="95" rx="72" ry="48" fill="#0f172a" fillOpacity="0.85" />
      <rect x="585" y="40" width="30" height="55" rx="4" fill="#0f172a" fillOpacity="0.9" />
      <path d="M200 280V120c0-35 25-55 45-70 8 25 22 45 40 55v175H200Z" fill="#0f172a" fillOpacity="0.75" />
      <path d="M1000 280V120c0-35 25-55 45-70 8 25 22 45 40 55v175h-85Z" fill="#0f172a" fillOpacity="0.75" />
      <rect x="188" y="55" width="14" height="65" rx="2" fill="#1e293b" />
      <rect x="998" y="55" width="14" height="65" rx="2" fill="#1e293b" />
      <circle cx="195" cy="48" r="10" fill="#1e293b" />
      <circle cx="1005" cy="48" r="10" fill="#1e293b" />
    </svg>
  );
}
