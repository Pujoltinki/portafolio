import React, { useRef, useEffect, useState } from 'react';
import './main.css';
import Navbar from './Componentes/Navbar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailContainer from './Componentes/Productos/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './Componentes/Nosotros';
import Contacto from "./Componentes/Contacto";
import { CartProvider } from './Context/CardContext';
import Carrito from './Componentes/Compra/Carito';
import Inicio from './Componentes/Inicio/Inicio';
import Footer from './Componentes/Footer';
import ConfirmacionCompra from './Componentes/Compra/ConfirmacionCompra';
import Login from './Componentes/Login';
import Blog from './Componentes/Blog';
import { UserProvider } from './Context/UserContext';

function App() {

  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            {/* Barra */}
              <Navbar />
            {/* Main */}
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/confirmacion" element={<ConfirmacionCompra />} />
              <Route path="/iniciar-sesion" element={<Login />} />
            </Routes>
            {/* Footer */}
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
