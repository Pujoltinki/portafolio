import React, { useContext } from 'react';
import { CartContext } from '../../Context/CardContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h5`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 0.3rem 0.7rem;
    margin-right: 0;
  }
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    button, a {
      margin-bottom: 10px;
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
    button:last-child, a:last-child {
      margin-bottom: 0;
    }
  }
`;

const Carrito = ({ toggleDrawer }) => {
  const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  const handleEliminarProducto = (idProducto) => {
    eliminarProducto(idProducto);
  };

  return (
    <Container>
      {carrito.length > 0 ? (
        <>
          {carrito.map((producto) => (
            <ProductCard key={producto.id}>
              <Title>{producto.titulo}</Title>
              <p>Precio unit: {formatPrice(producto.precio)}</p>
              <p>Precio total: {formatPrice(producto.precio * producto.cantidad)}</p>
              <p>Cant: {producto.cantidad}</p>
              <Button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</Button>
            </ProductCard>
          ))}
          <h2>Precio total: {formatPrice(precioTotal())}</h2>
          <ButtonContainer>
            <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
            <ButtonLink to="/confirmacion">
              <Button onClick={toggleDrawer(false)}>Comprar</Button>
            </ButtonLink>
          </ButtonContainer>
        </>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </Container>
  );
};

export default Carrito;
