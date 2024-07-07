import { Box, Grid, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import X from '../Image/x.png';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mt={5} py={3} px={2} bgcolor="#333" color="white" boxShadow={2}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} textAlign={isSmallScreen ? 'center' : 'left'}>
          <Box mb={isSmallScreen ? 2 : 0} mx={isSmallScreen ? 0 : 8}>
            <img src={X} alt="Logo" height="100" />
          </Box>
          <Box mt={2} textAlign={isSmallScreen ? 'center' : 'left'} mx={isSmallScreen ? 0 : 12}>
            <img src={X} alt="Facebook" height="20" style={{ marginRight: '8px' }} />
            <img src={X} alt="Instagram" height="20" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
            Información
          </Typography>
          <Typography variant="body2" className="typography-manjari">
            Direccion
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
            Contáctanos
          </Typography>
          <Typography variant="body2" className="typography-manjari">
            ventas@correo.cl<br />
            compras@correo.cl<br />
            +56987654321<br />
            +56912345678
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign={isSmallScreen ? 'center' : 'right'}>
          <Box mx={isSmallScreen ? 0 : 8}>
            <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
              Medios de Pago
            </Typography>
            <Box display="flex" justifyContent={isSmallScreen ? 'center' : 'flex-end'} mb={2}>
              <Box mx={1}>
                <img src={X} alt="Tarjeta" height="50" />
              </Box>
              <Box mx={1}>
                <img src={X} alt="Visa" height="50" />
              </Box>
              <Box mx={1}>
                <img src={X} alt="Mercado Pago" height="50" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" mt={3} textAlign="center">
        © 2024 Empresa. All rights reserved.
        {isSmallScreen ? (
          <>
            <br />
            <Link href="/terms" color="inherit">
              Terms of Service
            </Link>
            {' | '}
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </>
        ) : (
          <span style={{ marginLeft: '16px' }}>
            <Link href="/terms" color="inherit">
              Terms of Service
            </Link>
            {' | '}
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </span>
        )}
      </Typography>
      {!isSmallScreen && (
        <Typography variant="body2" style={{ marginTop: '8px' }} textAlign="center">
          Made with ❤️ by Pujol
        </Typography>
      )}
    </Box>
  );
};

export default Footer;
