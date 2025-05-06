// components/CardLayout.jsx
import React from 'react';

const CardLayout = ({ 
  children, 
  header, 
  footer, 
  className = '',
  hoverEffect = false
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverEffect ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          {header}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default CardLayout;