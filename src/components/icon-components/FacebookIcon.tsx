import type React from 'react';

interface FacebookIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ 
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
      aria-label="Facebook"
      style={{ cursor: onClick ? 'pointer' : 'default', outline: 'none' }}
    >
      <title>Facebook</title>
      {/* Outer circle ring */}
      <circle cx="20" cy="20" r="18.5" stroke="#F0F0F0" strokeWidth="2" fill="none" />
      {/* Facebook f letterform */}
      <path d="M25 10.0039L24.9912 13.873L23.0029 13.874C21.8899 13.8741 21.6875 14.3422 21.6875 15.2676V17.1914H24.8828L24.8857 21.2959H21.6875L21.6836 30H17.7842L17.7871 21.2959H15V17.1904H17.7871V14.9229C17.7871 11.9311 19.5277 10.0001 22.2217 10L25 10.0039Z" fill="#F0F0F0" />
    </svg>
  );
};
