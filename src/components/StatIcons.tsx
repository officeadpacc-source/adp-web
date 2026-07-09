/**
 * Navy stat-card icons. The origin uses Font Awesome glyphs
 * (fa-brain, fa-calendar-plus, fa-globe, fa-chart-line); these are
 * hand-drawn equivalents to avoid shipping an icon font.
 */
const P = {
  stroke: "currentColor",
  strokeWidth: 2,
  fill: "none" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" {...P}>
      <path d="M12 4v16M12 4a3 3 0 0 0-5.6 1.5A3.2 3.2 0 0 0 4 8.6a3.3 3.3 0 0 0 .6 5A3.2 3.2 0 0 0 7 19a3 3 0 0 0 5 1M12 4a3 3 0 0 1 5.6 1.5A3.2 3.2 0 0 1 20 8.6a3.3 3.3 0 0 1-.6 5A3.2 3.2 0 0 1 17 19a3 3 0 0 1-5 1" />
    </svg>
  );
}

export function IconCalendarPlus() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" {...P}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18M12 13v6M9 16h6" />
    </svg>
  );
}

export function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" {...P}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function IconChartLine() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" {...P}>
      <path d="M4 4v16h16" />
      <path d="M7 14l4-4 3 3 5-6" />
    </svg>
  );
}

export const STAT_ICONS = [IconBrain, IconCalendarPlus, IconGlobe, IconChartLine];
