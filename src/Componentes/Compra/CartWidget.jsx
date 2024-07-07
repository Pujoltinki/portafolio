import React, {useContext} from 'react'
// import {Link}              from 'react-router-dom'
import {CartContext}       from '../../Context/CardContext';

const CartWidget = () => {

const {cantidadEnCarrito} = useContext(CartContext);

  return (
    <div>
        <span className="numerito">{cantidadEnCarrito()}</span>
    </div>
  )
}

export default CartWidget