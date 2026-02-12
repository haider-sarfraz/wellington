import type React from 'react';

interface LinkedInIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  onClick?: () => void;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ 
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
      aria-label="LinkedIn"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <title>LinkedIn</title>
      <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1ZM13.5 15.5C14.3284 15.5 15 14.8284 15 14C15 13.1716 14.3284 12.5 13.5 12.5C12.6716 12.5 12 13.1716 12 14C12 14.8284 12.6716 15.5 13.5 15.5ZM12 17H15V27H12V17ZM17.5 17H20.5V18.5C21.1 17.6 22.1 17 23.3 17C25.8 17 27.5 18.4 27.5 21.5V27H24.5V22C24.5 20.9 23.9 20.2 22.7 20.2C21.5 20.2 20.8 20.9 20.8 22V27H17.8V17H17.5Z" fill="#F0F0F0"/>
    </svg>
  );
};

