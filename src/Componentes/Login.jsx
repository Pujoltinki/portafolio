import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import usuarios from '../Data/usuarios.json';
import UserContext from '../Context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { setUser } = useContext(UserContext); // Obtener setUser del contexto

    const handleLogin = () => {
        const usuario = usuarios.find(user => user.correo === email && user.contrasena === password);

        if (usuario) {
            setMessage(`Bienvenido, ${usuario.nombre}`);
            setIsLoggedIn(true);
            setUser(usuario); // Establecer el usuario en el contexto
        } else {
            setMessage('Usuario o contraseña incorrecta');
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                window.location.href = '/';
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn]);

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && isFormValid) {
            handleLogin();
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ marginTop: 8, textAlign: 'center' }}>
                <Typography variant="h5">Iniciar Sesión</Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    disabled={!isFormValid}
                >
                    Iniciar Sesión
                </Button>
            </Box>
            {message && (
                <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                    <Typography variant="body1">{message}</Typography>
                </Box>
            )}
        </Container>
    );
};

export default Login;
