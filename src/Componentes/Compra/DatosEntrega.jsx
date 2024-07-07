import React from 'react';
import { TextField, Select, MenuItem, InputLabel, Button, Box, Typography } from '@mui/material';
import comunas from '../../Data/comuma.json';

const DatosEntrega = ({ 
    selectedComuna, 
    comunaPrecio, 
    direccion, 
    correo, 
    nombre, 
    rut, 
    telefono, 
    precioVisible,
    handleComunaChange,
    handleDireccionChange,
    handleCorreoChange,
    handleNombreChange,
    handleRutChange,
    handleTelefonoChange,
    handleCalcular,
    calcularHabilitado 
}) => {
    return (
        <Box sx={{ mt: 2, maxWidth: '800px', margin: 'auto' }}>
            <TextField
                id="nombre"
                label="Nombre"
                variant="outlined"
                fullWidth
                value={nombre}
                onChange={handleNombreChange}
                placeholder="Ej: Juan Pérez"
                required
                sx={{ mb: 2 }}
            />
            <TextField
                id="rut"
                label="RUT"
                variant="outlined"
                fullWidth
                value={rut}
                onChange={handleRutChange}
                placeholder="Ej: 12.345.678-9"
                required
                sx={{ mb: 2 }}
            />
            <TextField
                id="telefono"
                label="Teléfono"
                variant="outlined"
                fullWidth
                value={telefono}
                onChange={handleTelefonoChange}
                placeholder="Ej: +569 1234 5678"
                required
                sx={{ mb: 2 }}
            />
            <TextField
                id="correo"
                label="Correo"
                variant="outlined"
                fullWidth
                value={correo}
                onChange={handleCorreoChange}
                placeholder="Ej: ejemplo@correo.com"
                required
                sx={{ mb: 2 }}
            />
            <TextField
                id="direccion"
                label="Dirección"
                variant="outlined"
                fullWidth
                value={direccion}
                onChange={handleDireccionChange}
                placeholder="Ej: Av. Siempre Viva 742"
                required
                sx={{ mb: 2 }}
            />
            <InputLabel id="comuna-label">Selecciona tu Comuna</InputLabel>
            <Select
                labelId="comuna-label"
                value={selectedComuna}
                onChange={handleComunaChange}
                fullWidth
                required
                sx={{ mb: 2 }}
            >
                {comunas.map((comuna) => (
                    <MenuItem key={comuna.id} value={comuna.nombre}>
                        {comuna.nombre}
                    </MenuItem>
                ))}
            </Select>
            {precioVisible && comunaPrecio !== null && (
                <Typography sx={{ mt: 2 }}>
                    Precio de envío: ${comunaPrecio}
                </Typography>
            )}
            <Button
                sx={{ mt: 2 }}
                variant="contained"
                onClick={handleCalcular}
                disabled={!selectedComuna || !direccion || !correo || !nombre || !rut || !telefono}
            >
                Calcular
            </Button>
        </Box>
    );
};

export default DatosEntrega;
