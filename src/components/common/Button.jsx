import React from 'react'

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
  const baseStyle = 'px-6 py-3 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  
  const variants = {
    primary: 'bg-brand-yellow text-black hover:bg-yellow-400 focus:ring-brand-yellow',
    outline: 'border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black focus:ring-brand-yellow',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button