import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHeader from './componente/menuHeader';
import FooterIconos from './componente/footerIconos';
import Productos from './componente/ProductList';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ProductDetails from './componente/ProductDetails'; // Asegúrate de importar ProductDetails
import { Description } from '@mui/icons-material';

const App = () => {
  const initialProducts = [
        { id: 1, name: 'Camiseta', price: 15.99, image: '/Imagenes/camiseta.png', Description: 'Camiseta de algodón' },
        { id: 2, name: 'Pantalones vaqueros', price: 29.99, image: '/Imagenes/pantalones.png',  Description: 'Pantalones vaqueros de marca' },
        { id: 3, name: 'Vestido elegante', price: 39.99, image: '/Imagenes/vestido.png',  Description: 'Vestido de fiesta' },
        { id: 4, name: 'Chaqueta de cuero', price: 59.99, image: '/Imagenes/chaqueta.png',  Description: 'Chaqueta de cuero genuino' },
        { id: 5, name: 'Zapatos deportivos', price: 49.99, image: '/Imagenes/zapatos.png', Description: 'Zapatos deportivos de marca' },
        { id: 6, name: 'Bufanda de lana', price: 9.99, image: '/Imagenes/bufanda.png', Description: 'Bufanda de lana suave' },
  ];

  const [numNotifications, setNumNotifications] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const handleNotificationsClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBuyProduct = (product) => {
    const index = selectedProducts.findIndex(p => p.id === product.id);

    if (index !== -1) {
      setSelectedProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
      setNumNotifications(numNotifications - 1);

    } else {
      setSelectedProducts(prevProducts => [...prevProducts, product]);
      setNumNotifications(numNotifications + 1);

    }
  };

  const handleBuyAll = () => {
    setSelectedProducts([]);
    setNumNotifications(0);
    setProducts(prevProducts => prevProducts.map(p => ({ ...p, selected: false })));
    setMenuOpen(false);
  };

  const totalSelected = selectedProducts.reduce((total, product) => total + product.price, 0);

  return (
    <Router>
      <div>
        <header>
          <MenuHeader
            numNotifications={numNotifications}
            onNotificationsClick={handleNotificationsClick}
          />
        </header>
        <section style={{ marginTop: '64px', padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Productos products={products} onBuyProduct={handleBuyProduct} />} />
            <Route path="/product/:productId" element={<ProductDetails productos={products} />} />
          </Routes>
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            sx={{ marginTop: '64px', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <List>
              {selectedProducts.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={`$${product.price}`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleBuyProduct(product)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <div style={{ padding: '16px' }}>
              <Button variant="contained" color="primary" onClick={handleBuyAll}>
                Comprar Todo (${totalSelected.toFixed(2)})
              </Button>
            </div>
          </Drawer>
        </section>
        <footer>
          <FooterIconos />
        </footer>
      </div>
    </Router>
  );
};

export default App;
