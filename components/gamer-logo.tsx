"use client"

export function GamerLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`w-10 h-10 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Purple to Cyan gradient */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Stronger glow for animation */}
        <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Lightning bolt gaming logo */}
      <g filter="url(#glowStrong)" className="animate-pulse">
        {/* Outer hexagon frame */}
        <path
          d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        
        {/* Lightning bolt */}
        <path
          d="M28 10L16 26H22L18 38L32 20H26L28 10Z"
          fill="url(#logoGradient)"
          filter="url(#glow)"
        />
        
        {/* Inner accents */}
        <circle cx="12" cy="24" r="2" fill="#06b6d4" className="opacity-80" />
        <circle cx="36" cy="24" r="2" fill="#a855f7" className="opacity-80" />
      </g>
    </svg>
  )
}
