export default function ELLogo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Navy circle */}
      <circle cx="50" cy="50" r="48" fill="#1E3A5F" />
      
      {/* Subtle mountain lines */}
      <path d="M30 58 L42 36 L54 58" stroke="rgba(100,140,200,0.25)" strokeWidth="1" fill="none" />
      <path d="M46 58 L58 36 L70 58" stroke="rgba(100,140,200,0.25)" strokeWidth="1" fill="none" />
      
      {/* Small dots */}
      <circle cx="42" cy="45" r="1.5" fill="rgba(180,200,230,0.4)" />
      <circle cx="58" cy="45" r="1.5" fill="rgba(180,200,230,0.4)" />
      <circle cx="50" cy="55" r="1.5" fill="rgba(180,200,230,0.4)" />
      
      {/* EL text */}
      <text
        x="50"
        y="54"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontFamily="Inter, -apple-system, system-ui, sans-serif"
        fontWeight="700"
        fontSize="30"
        letterSpacing="1"
      >
        EL
      </text>
    </svg>
  );
}
