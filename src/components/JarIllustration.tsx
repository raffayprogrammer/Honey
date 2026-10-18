/* Lightweight SVG jar, tinted by honey color — used on cards (no image assets). */
export default function JarIllustration({
  color = "#E08C13",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 150"
      className={className}
      role="img"
      aria-label="honey jar"
    >
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.95" />
          <stop offset="1" stopColor={color} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* honey fill */}
      <path
        d="M30 55 h60 a6 6 0 0 1 6 6 v62 a14 14 0 0 1 -14 14 h-44 a14 14 0 0 1 -14 -14 v-62 a6 6 0 0 1 6 -6 z"
        fill={`url(#g-${color})`}
      />
      {/* glass sheen */}
      <path
        d="M30 55 h60 a6 6 0 0 1 6 6 v62 a14 14 0 0 1 -14 14 h-44 a14 14 0 0 1 -14 -14 v-62 a6 6 0 0 1 6 -6 z"
        fill="url(#glass)"
      />
      {/* label */}
      <rect x="40" y="86" width="40" height="34" rx="4" fill="#FFFBF2" opacity="0.92" />
      <rect x="46" y="94" width="28" height="3" rx="1.5" fill={color} opacity="0.6" />
      <rect x="49" y="101" width="22" height="3" rx="1.5" fill={color} opacity="0.4" />
      <rect x="52" y="108" width="16" height="3" rx="1.5" fill={color} opacity="0.3" />
      {/* neck */}
      <rect x="36" y="42" width="48" height="16" rx="4" fill={color} opacity="0.9" />
      {/* gold lid */}
      <rect x="32" y="28" width="56" height="18" rx="6" fill="#C8891B" />
      <rect x="32" y="28" width="56" height="7" rx="4" fill="#E7B63D" />
    </svg>
  );
}
