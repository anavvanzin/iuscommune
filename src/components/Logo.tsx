interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
};

export default function Logo({ className = '', size = 'md', variant = 'dark' }: LogoProps) {
  const primaryColor = variant === 'dark' ? '#1a1a2e' : '#ffffff';
  const accentColor = variant === 'dark' ? '#d4af37' : '#d4af37';

  return (
    <svg
      className={`${sizeMap[size]} ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="95" stroke={primaryColor} strokeWidth="3" fill="none" />
      <circle cx="100" cy="100" r="88" stroke={accentColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Laurel wreath - left side */}
      <path d="M30 100 C30 70, 45 45, 70 30" stroke={accentColor} strokeWidth="2" fill="none" />
      <path d="M35 90 C38 82, 45 75, 50 70" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M33 80 C37 73, 43 67, 48 62" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M35 70 C40 63, 47 57, 53 52" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M40 60 C45 54, 52 48, 58 44" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M47 50 C52 45, 58 40, 64 37" stroke={accentColor} strokeWidth="1.5" fill="none" />
      
      {/* Laurel leaves - left */}
      <ellipse cx="38" cy="85" rx="6" ry="3" transform="rotate(-30 38 85)" fill={accentColor} opacity="0.7" />
      <ellipse cx="36" cy="73" rx="6" ry="3" transform="rotate(-35 36 73)" fill={accentColor} opacity="0.7" />
      <ellipse cx="38" cy="62" rx="6" ry="3" transform="rotate(-40 38 62)" fill={accentColor} opacity="0.7" />
      <ellipse cx="43" cy="52" rx="6" ry="3" transform="rotate(-45 43 52)" fill={accentColor} opacity="0.7" />
      <ellipse cx="50" cy="43" rx="6" ry="3" transform="rotate(-50 50 43)" fill={accentColor} opacity="0.7" />
      <ellipse cx="58" cy="36" rx="6" ry="3" transform="rotate(-55 58 36)" fill={accentColor} opacity="0.7" />

      {/* Laurel wreath - right side */}
      <path d="M170 100 C170 70, 155 45, 130 30" stroke={accentColor} strokeWidth="2" fill="none" />
      <path d="M165 90 C162 82, 155 75, 150 70" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M167 80 C163 73, 157 67, 152 62" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M165 70 C160 63, 153 57, 147 52" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M160 60 C155 54, 148 48, 142 44" stroke={accentColor} strokeWidth="1.5" fill="none" />
      <path d="M153 50 C148 45, 142 40, 136 37" stroke={accentColor} strokeWidth="1.5" fill="none" />
      
      {/* Laurel leaves - right */}
      <ellipse cx="162" cy="85" rx="6" ry="3" transform="rotate(30 162 85)" fill={accentColor} opacity="0.7" />
      <ellipse cx="164" cy="73" rx="6" ry="3" transform="rotate(35 164 73)" fill={accentColor} opacity="0.7" />
      <ellipse cx="162" cy="62" rx="6" ry="3" transform="rotate(40 162 62)" fill={accentColor} opacity="0.7" />
      <ellipse cx="157" cy="52" rx="6" ry="3" transform="rotate(45 157 52)" fill={accentColor} opacity="0.7" />
      <ellipse cx="150" cy="43" rx="6" ry="3" transform="rotate(50 150 43)" fill={accentColor} opacity="0.7" />
      <ellipse cx="142" cy="36" rx="6" ry="3" transform="rotate(55 142 36)" fill={accentColor} opacity="0.7" />

      {/* Central pillar / column of justice */}
      <rect x="96" y="75" width="8" height="70" fill={primaryColor} rx="2" />
      
      {/* Top beam of scales */}
      <rect x="60" y="72" width="80" height="5" fill={primaryColor} rx="2" />
      
      {/* Top ornament */}
      <circle cx="100" cy="68" r="6" fill={accentColor} />
      <circle cx="100" cy="68" r="3" fill={primaryColor} />
      
      {/* Left scale pan */}
      <line x1="70" y1="77" x2="70" y2="100" stroke={primaryColor} strokeWidth="2" />
      <path d="M55 100 Q70 110 85 100" stroke={accentColor} strokeWidth="2.5" fill="none" />
      <path d="M58 100 L82 100" stroke={accentColor} strokeWidth="1.5" />
      
      {/* Right scale pan */}
      <line x1="130" y1="77" x2="130" y2="100" stroke={primaryColor} strokeWidth="2" />
      <path d="M115 100 Q130 110 145 100" stroke={accentColor} strokeWidth="2.5" fill="none" />
      <path d="M118 100 L142 100" stroke={accentColor} strokeWidth="1.5" />

      {/* Base */}
      <rect x="82" y="145" width="36" height="6" fill={primaryColor} rx="2" />
      <rect x="76" y="151" width="48" height="5" fill={primaryColor} rx="2" />
      
      {/* Open book at base */}
      <path d="M75 160 Q100 155 100 165 Q100 155 125 160" stroke={accentColor} strokeWidth="2" fill="none" />
      <line x1="100" y1="156" x2="100" y2="165" stroke={accentColor} strokeWidth="1" />
      
      {/* Small decorative dots */}
      <circle cx="100" cy="175" r="2" fill={accentColor} />
    </svg>
  );
}
