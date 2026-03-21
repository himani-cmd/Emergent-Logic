export default function HexLogo({ size = 40, className = '', variant = 'default' }) {
  // Variant: 'default' for dark bg (white-ish lines), 'dark' for light bg (navy lines)
  const nodeColor = '#6366F1';
  const outerStroke = variant === 'light' ? '#1E3A5F' : '#c7d2fe';
  const innerStroke = variant === 'light' ? '#6366F1' : '#a5b4fc';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Emergent Logic logo"
    >
      {/* Outer hexagon edges - solid lines */}
      <polygon
        points="100,30 160,65 160,135 100,170 40,135 40,65"
        fill="none"
        stroke={outerStroke}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Inner dashed lines from center to each vertex */}
      {[
        [100, 30],
        [160, 65],
        [160, 135],
        [100, 170],
        [40, 135],
        [40, 65],
      ].map(([x, y], i) => (
        <line
          key={i}
          x1="100" y1="100"
          x2={x} y2={y}
          stroke={innerStroke}
          strokeWidth="3.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
      ))}

      {/* Outer nodes */}
      {[
        [100, 30],
        [160, 65],
        [160, 135],
        [100, 170],
        [40, 135],
        [40, 65],
      ].map(([x, y], i) => (
        <circle key={`outer-${i}`} cx={x} cy={y} r="14" fill={nodeColor} />
      ))}

      {/* Center node (slightly larger) */}
      <circle cx="100" cy="100" r="16" fill={nodeColor} />
    </svg>
  );
}
