import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ productos }) => {
  const { productId } = useParams();
  const product = productos.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center mt-8">Producto no encontrado</div>;
  }

  return (
    <div className="flex flex-col ">
      <div className="flex-grow max-w-3xl mx-auto px-4 py-8 text-blue-500">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-blue-500 text-gray-600 mb-2">Precio: ${product.price.toFixed(2)}</p>
        <div className="flex justify-center border border-blue-500 rounded-md overflow-hidden">
          <img src={product.image} alt={product.name} className="max-w-full h-auto" />
        </div>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Descripción del producto: 
        </p>{product.Description}
      </div>
    </div>
  );
};

export default ProductDetails;
