import React, { useState, useContext, useEffect } from 'react';
import { cartContext } from '../CartContextComponent';

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
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
      <button onClick={onAdd}>Agregar al carro</button>
    </div>
  );
}
