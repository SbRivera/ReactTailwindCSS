import React from 'react';

import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Productos = ({ onBuyProduct }) => {

    const productos = [
        { id: 1, name: 'Camiseta', price: 15.99, image: './Imagenes/camiseta.png' },
        { id: 2, name: 'Pantalones vaqueros', price: 29.99, image: './Imagenes/pantalones.png' },
        { id: 3, name: 'Vestido elegante', price: 39.99, image: './Imagenes/vestido.png' },
        { id: 4, name: 'Chaqueta de cuero', price: 59.99, image: './Imagenes/chaqueta.png' },
        { id: 5, name: 'Zapatos deportivos', price: 49.99, image: './Imagenes/zapatos.png' },
        { id: 6, name: 'Bufanda de lana', price: 9.99, image: './Imagenes/bufanda.png' },
    ];

    return (
        <div className="productos-container">
            {productos.map((producto) => (
                <ProductCard
                    key={producto.id}
                    product={producto}
                    onBuyClick={onBuyProduct}
                />
            ))}
        </div>
    );
};

export default Productos;
