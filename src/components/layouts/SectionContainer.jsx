// components/SectionContainer.jsx
import React from 'react';

const SectionContainer = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  align = 'center',
  padding = 'py-12'
}) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`${padding} px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`${alignmentClasses[align]}`}>
          {title && (
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mt-4 max-w-2xl text-xl text-gray-500 ${align === 'center' ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;