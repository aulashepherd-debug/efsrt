import React from 'react';

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseStyles = 'px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-150 transform focus:outline-none focus:ring-2 focus:ring-[#C91414]/20 cursor-pointer active:scale-[0.98] active:brightness-90 select-none';
  
  const variants = {
    primary: 'bg-[#C91414] hover:bg-red-700 text-white shadow-lg shadow-red-600/10',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-indigo-950',
    dark: 'bg-indigo-950 hover:bg-indigo-900 text-white shadow-md shadow-indigo-950/5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
