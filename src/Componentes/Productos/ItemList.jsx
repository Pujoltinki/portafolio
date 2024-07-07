import React from 'react';
import Item from './Item';
import { Grid } from '@mui/material';

const ItemList = ({ productos }) => {
  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid
          item
          xs={6}   // 2 productos por fila en pantallas pequeñas
          sm={6}   // 2 productos por fila en pantallas pequeñas
          md={4}   // 3 productos por fila en pantallas medianas
          lg={3}   // 4 productos por fila en pantallas grandes
          key={producto.id}
        >
          <Item producto={producto} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
