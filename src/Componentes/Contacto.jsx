import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contacto
        </Typography>
        <form onSubmit={handleSubmit(enviar)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              label="Ingresá tu nombre" 
              variant="outlined" 
              {...register("nombre")} 
              fullWidth
            />
            <TextField 
              label="Ingresá tu e-mail" 
              variant="outlined" 
              type="email" 
              {...register("email")} 
              fullWidth
            />
            <TextField 
              label="Ingresá tu teléfono" 
              variant="outlined" 
              type="tel" 
              {...register("telefono")} 
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Contacto;
