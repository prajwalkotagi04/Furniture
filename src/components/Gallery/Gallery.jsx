import React from 'react';
import products from '../../Json/Latest_Product_Json';

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-8">
      {products.slice(0,10).map((item) => (
        <img
          key={item.id}               // Add a unique key
          src={item.image}
          alt={item.title || 'Product Image'}  // Add alt text for accessibility
          className="w-full h-auto object-cover rounded" // Optional styling
        />
      ))}
    </div>
  );
}
