import React, { useState } from 'react';

export const Select = ({ children, value, onValueChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { 
          value, 
          onValueChange, 
          isOpen, 
          setIsOpen 
        })
      )}
    </div>
  );
};

export const SelectTrigger = ({ 
  children, 
  className = '', 
  isOpen, 
  setIsOpen,
  ...props 
}) => {
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <svg
        className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    </button>
  );
};

export const SelectValue = ({ placeholder, value }) => {
  return (
    <span className={value ? '' : 'text-muted-foreground'}>
      {value || placeholder}
    </span>
  );
};

export const SelectContent = ({ 
  children, 
  className = '', 
  isOpen,
  ...props 
}) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className={`absolute top-full left-0 z-50 min-w-full overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SelectItem = ({ 
  children, 
  value, 
  className = '', 
  onValueChange,
  setIsOpen,
  ...props 
}) => {
  return (
    <div 
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer ${className}`}
      onClick={() => {
        onValueChange && onValueChange(value);
        setIsOpen && setIsOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
};