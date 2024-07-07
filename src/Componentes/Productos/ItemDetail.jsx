import React, { useContext, useState } from 'react';
import { toCapital } from '../../Helpers/toCapital';
import ItemCount from './Itemcount';
import { CartContext } from '../../Context/CardContext';
import { Box, Typography, Snackbar } from '@mui/material';

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    setAgregadoAlCarrito(true);
    setTimeout(() => {
      setAgregadoAlCarrito(false);
    }, 3000); // 3 segundos
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
        },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <img src={item.imagen} alt={item.titulo} style={{ width: '100%', objectFit: 'cover' }} />
      </Box>
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
          {item.titulo}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
          Categoría: {toCapital(item.categoria)}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem' }}>
          {item.descripcion}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {formatPrice(item.precio)}
        </Typography>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          handleAgregar={handleAgregarAlCarrito}
        />
        <Snackbar
          open={agregadoAlCarrito}
          autoHideDuration={3000}
          onClose={() => setAgregadoAlCarrito(false)}
          message={`Se han agregado ${cantidad} ${item.titulo} al carrito.`}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        />
      </Box>
    </Box>
  );
};

export default ItemDetail;
