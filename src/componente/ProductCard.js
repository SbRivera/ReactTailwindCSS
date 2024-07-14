// ProductCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductCard = ({ product, onBuyClick }) => {
  const [selected, setSelected] = useState(false);

  const handleBuy = () => {
    setSelected(!selected);
    onBuyClick(product);
  };

  return (
    <Card className="max-w-xs mb-4 bg-white text-darkBlue border border-lightBlue">
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
        className="hover:opacity-75 transition-opacity"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="text-lightBlue">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text-secondary">
          ${product.price.toFixed(2)}
        </Typography>
        {selected ? (
          <Button variant="contained" color="error" onClick={handleBuy} className="mt-2">
            Eliminar
          </Button>
        ) : (
          <>
            <Button variant="contained" color="primary" onClick={handleBuy} className="mt-2 mr-2">
              Comprar
            </Button>
            <Button component={Link} to={`/product/${product.id}`} color="primary" className="mt-2">
              Detalles
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
