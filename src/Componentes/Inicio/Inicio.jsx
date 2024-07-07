import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Banner from './Banner';
import Carrucel from './Carrucel';
import MarcasInicio from './MarcasInicio';
import ForoInicio from './ForoInicio';

function Inicio() {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <div style={{ padding: '20px', textAlign: 'center', marginTop: '80px' }}>
          <Typography 
            variant="h3" 
            component="h3" 
            className="typography-outfit-bold" 
            style={{ marginBottom: '20px', color: '#333' }}
          >
            <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit'}}>
              Productos
            </Link>
          </Typography>
          <Carrucel />
          <Typography 
            variant="h3" 
            component="h3" 
            className="typography-outfit-bold" 
            style={{ marginTop: '80px', color: '#333' }}
          >
            Marcas
          </Typography>
          <MarcasInicio />
          <Typography 
            variant="h3" 
            component="h3" 
            className="typography-outfit-bold" 
            style={{ marginTop: '80px', color: '#333' }}
          >
            <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog
            </Link>
          </Typography>
          <ForoInicio />
        </div>
      </Grid>
    </Grid>
  );
}

export default Inicio;
