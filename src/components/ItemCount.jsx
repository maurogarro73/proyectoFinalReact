import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const [removeButton, setRemoveButton] = useState(false);
  const { cart, addToCart } = useContext(cartContext);

  function sumar() {
    if (count < product.stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    addToCart(product, count);
    setRemoveButton(true);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <span style={{ cursor: 'pointer' }} onClick={restar}>
        -
      </span>
      {count}
      <span style={{ cursor: 'pointer' }} onClick={sumar}>
        +
      </span>
      {removeButton ? (
        <>
          <p>Producto agregado...</p>
          <Link to="/">Seguir comprando...</Link>
          <Link to="/checkout">Terminar Compra</Link>
        </>
      ) : (
        <button onClick={onAdd}>Agregar al carro</button>
      )}
    </div>
  );
}
