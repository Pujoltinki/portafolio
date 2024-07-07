import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <Button variant="contained" onClick={handleRestar}>-</Button>
        <Typography variant="body1" sx={{ fontSize: '1rem' }}>{cantidad}</Typography>
        <Button variant="contained" onClick={handleSumar}>+</Button>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '1rem' }}
        onClick={handleAgregar}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default ItemCount;
