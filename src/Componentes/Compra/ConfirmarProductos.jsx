import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

const ConfirmarProductos = ({ carrito, precioTotal, handleEliminarProducto }) => {

    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
      };

    return (
        <Box sx={{ padding: { xs: 2, sm: 3 }, maxWidth: '800px', margin: 'auto' }}>
            {carrito.length > 0 ? (
                <>
                    {carrito.map((producto) => (
                        <Box key={producto.id} sx={{ marginBottom: 3 }}>
                            <Typography variant="h6">{producto.titulo}</Typography>
                            <Typography>Precio unit: {formatPrice(producto.precio)}</Typography>
                            <Typography>Precio total: {formatPrice(producto.precio * producto.cantidad)}</Typography>
                            <Typography>Cantidad: {producto.cantidad}</Typography>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                onClick={() => handleEliminarProducto(producto.id)}
                                sx={{ marginTop: 1 }}
                            >
                                Eliminar
                            </Button>
                            <Divider sx={{ marginTop: 2 }} />
                        </Box>
                    ))}
                    <Typography variant="h5" sx={{ marginTop: 2 }}>
                        Precio total: {formatPrice(precioTotal())}
                    </Typography>
                </>
            ) : (
                <Typography variant="h5">Agrega productos al carrito para continuar</Typography>
            )}
        </Box>
    );
};

export default ConfirmarProductos;
