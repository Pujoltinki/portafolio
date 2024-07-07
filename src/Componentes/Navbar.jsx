import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Carito from './Compra/Carito';
import XIcon from '../Image/x.png';
import carritoImg from '../Image/CARRITO.svg';
import usuarioImg from '../Image/usuario.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
`;

const LogoButton = styled(Link)`
  height: 95px;
  background-image: url(${XIcon}); // Usar el ícono de "X"
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
`;

const CancelButton = styled(Button)`
  && {
    color: white;
    margin: 0 1rem;
    text-transform: none;
    font-size: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Button)`
  && {
    color: white;
    margin: 0 1rem;
    text-transform: none;
    font-size: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({ fixed }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  const toggleMenuDrawer = (newOpen) => () => {
    setMenuOpen(newOpen);
  };

  const isConfirmationPage = location.pathname === '/confirmacion';

  const CarritoComponent = (
    <Box sx={{ width: 250 }} role="presentation">
      <Grid container style={{ fontSize: '30px', textAlign: 'center', justifyContent: 'space-between', padding: '1rem' }}>
        Tu carro
        <Button onClick={toggleDrawer(false)} sx={{ color: 'black' }}><CloseIcon /></Button>
      </Grid>
      <Divider />
      <Carito toggleDrawer={toggleDrawer} />
    </Box>
  );

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleMenuDrawer(false)}>
      <List>
        {['iniciar-sesion', 'productos', 'nosotros', 'contacto', 'blog'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text}`}>
              <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1).replace('-', ' ')} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Nav fixed={fixed}>
      <Hamburger onClick={toggleMenuDrawer(true)}>
        <MenuIcon style={{ color: 'white' }} />
      </Hamburger>
      <LogoButton to="/" />
      {isConfirmationPage ? (
        <CancelButton component={Link} to="/" variant="outlined">
          Cancelar pedido
        </CancelButton>
      ) : (
        <>
          <Menu>
            <MenuItem component={Link} to="/productos">Productos</MenuItem>
            <MenuItem component={Link} to="/nosotros">Nosotros</MenuItem>
            <MenuItem component={Link} to="/contacto">Contacto</MenuItem>
            <MenuItem component={Link} to="/blog">Blog</MenuItem>
          </Menu>
          <IconContainer>
            <IconButton component={Link} to="/iniciar-sesion" style={{ color: 'white' }}>
              <img src={usuarioImg} alt="Iniciar Sesión" style={{ width: '30px', height: '30px' }} />
            </IconButton>
            <IconButton
              onClick={toggleDrawer(true)}
              style={{ color: 'black', padding: 8 }}
              aria-label="Carrito"
            >
              <img src={carritoImg} alt="Carrito" style={{ width: '30px', height: '30px' }} />
            </IconButton>
          </IconContainer>
          <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
            {CarritoComponent}
          </Drawer>
          <Drawer anchor="left" open={menuOpen} onClose={toggleMenuDrawer(false)}>
            {DrawerList}
          </Drawer>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
