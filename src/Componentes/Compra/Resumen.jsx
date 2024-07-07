import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const Resumen = ({ 
    carrito, 
    precioTotal, 
    comunaPrecio, 
    nombre, 
    rut, 
    telefono, 
    correo, 
    direccion, 
    selectedComuna 
}) => {

    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
      };

    return (
        <Box sx={{ padding: { xs: 1, sm: 2 }, maxWidth: '800px', margin: 'auto' }}>
            {carrito.map((producto) => (
                <Box key={producto.id} sx={{ marginBottom: 2 }}>
                    <Typography variant="h6">{producto.titulo}</Typography>
                    <Typography>Precio unit: {formatPrice(producto.precio)}</Typography>
                    <Typography>Precio total: {formatPrice(producto.precio * producto.cantidad)}</Typography>
                    <Typography>Cantidad: {producto.cantidad}</Typography>
                    <Divider sx={{ marginTop: 2 }} />
                </Box>
            ))}
            <Typography variant="subtitle1">Nombre: {nombre}</Typography>
            <Typography variant="subtitle1">RUT: {rut}</Typography>
            <Typography variant="subtitle1">Teléfono: {telefono}</Typography>
            <Typography variant="subtitle1">Correo: {correo}</Typography>
            <Typography variant="subtitle1">Dirección: {direccion}</Typography>
            <Typography variant="subtitle1">Comuna: {selectedComuna}</Typography>
            <Typography variant="h6"><b>Precio de compra: {formatPrice(precioTotal())}</b></Typography>
            <Typography variant="h6"><b>Precio de envío: {formatPrice(comunaPrecio)}</b></Typography>
            <Typography variant="h6"><b>Total a pagar: {formatPrice(precioTotal() + comunaPrecio)}</b></Typography>
        </Box>
    );
};

export default Resumen;
