/**
 * Art-deco corner ornament — a delicate sunburst fan that emanates from the
 * top-left of its own box. Position + mirror it per corner from the parent CSS.
 * Inherits `color` via currentColor.
 */
const ORIGIN = 7
const RAYS = [3, 14, 25, 36, 47, 58, 69, 80] // degrees, clockwise from +x axis

export default function Corner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* two quarter arcs near the origin */}
      <path d="M19 7 A12 12 0 0 1 7 19" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <path d="M27 7 A20 20 0 0 1 7 27" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
      {RAYS.map((deg, i) => {
        const r = (deg * Math.PI) / 180
        const len = i % 2 === 0 ? 58 : 44
        const x2 = ORIGIN + Math.cos(r) * len
        const y2 = ORIGIN + Math.sin(r) * len
        return (
          <g key={deg}>
            <line
              x1={ORIGIN}
              y1={ORIGIN}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <circle cx={x2} cy={y2} r={i % 2 === 0 ? 1.5 : 1.1} fill="currentColor" />
          </g>
        )
      })}
      {/* anchor dot in the corner */}
      <circle cx={ORIGIN} cy={ORIGIN} r="2.4" fill="currentColor" />
    </svg>
  )
}
