import React from 'react';

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      {children}
    </div>
  );
};
