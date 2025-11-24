import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 transform active:scale-95 hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_10px_20px_-10px_rgba(13,148,136,0.5)] hover:shadow-[0_20px_20px_-10px_rgba(13,148,136,0.4)] focus:ring-brand-300",
    secondary: "bg-amber-400 text-amber-900 hover:bg-amber-300 shadow-[0_10px_20px_-10px_rgba(251,191,36,0.5)] hover:shadow-[0_20px_20px_-10px_rgba(251,191,36,0.4)] focus:ring-amber-300",
    outline: "border-2 border-brand-500 text-brand-600 hover:bg-brand-50 focus:ring-brand-200",
    white: "bg-white text-brand-900 hover:bg-gray-50 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] focus:ring-white/50"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};