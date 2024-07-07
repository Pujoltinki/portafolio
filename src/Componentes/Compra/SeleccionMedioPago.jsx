import React from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SeleccionMedioPago = ({ medioPago, mediosPago, handleMedioPagoChange, handleReset }) => {
    return (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                <h2>Seleccione sus medios de pago</h2>
            </Typography>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    pt: 2, 
                    mx: 'auto',
                    maxWidth: 400,
                    width: '100%'
                }}
            >
                <Select
                    value={medioPago}
                    onChange={handleMedioPagoChange}
                    displayEmpty
                    fullWidth
                    sx={{ minWidth: 200, mb: 2 }}
                >
                    <MenuItem value="" disabled>
                        Seleccione medio de pago
                    </MenuItem>
                    {mediosPago.map((medio, index) => (
                        <MenuItem key={index} value={medio.nombre}>
                            {medio.nombre}
                        </MenuItem>
                    ))}
                </Select>
                <Button 
                    onClick={handleReset} 
                    disabled={!medioPago} 
                    variant="contained"
                    sx={{ width: '100%' }}
                >
                    Pagar
                </Button>
            </Box>
        </React.Fragment>
    );
};

export default SeleccionMedioPago;
