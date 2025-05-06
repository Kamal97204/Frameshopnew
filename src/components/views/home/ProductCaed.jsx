// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ 
  id,
  name,
  price,
  imageUrl,
  sizes,
  colors,
  isNew = false,
  isBestSeller = false,
  onAddToCart 
}) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          NEW
        </span>
      )}
      {isBestSeller && (
        <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          BESTSELLER
        </span>
      )}
      <div className="w-full aspect-square bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
        
        {sizes && (
          <div className="mb-2">
            <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
            <div className="flex flex-wrap gap-1">
              {sizes.map(size => (
                <span key={size} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {colors && (
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Available colors:</p>
            <div className="flex gap-2">
              {colors.map(color => (
                <span 
                  key={color} 
                  className="w-5 h-5 rounded-full border border-gray-200"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}
        
        <button 
          onClick={() => onAddToCart(id)}
          className="w-full mt-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;