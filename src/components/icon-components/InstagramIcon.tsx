import type React from 'react';

interface InstagramIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

export const InstagramIcon: React.FC<InstagramIconProps> = ({ 
  width = 40, 
  height = 40, 
  className = "",
  onClick 
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label="Instagram"
      style={{ cursor: onClick ? 'pointer' : 'default', outline: 'none' }}
    >
      <title>Instagram</title>
      {/* Outer circle ring */}
      <circle cx="20" cy="20" r="18.5" stroke="#F0F0F0" strokeWidth="2" fill="none" />
      {/* Camera body */}
      <rect x="10.5" y="10.5" width="19" height="19" rx="5.5" stroke="#F0F0F0" strokeWidth="1.8" fill="none" />
      {/* Lens */}
      <circle cx="20" cy="20" r="4.8" stroke="#F0F0F0" strokeWidth="1.5" fill="none" />
      {/* Flash dot */}
      <circle cx="25.3" cy="14.65" r="1.25" fill="#F0F0F0" />
    </svg>
  );
};
