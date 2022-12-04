import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';
import '../styles/ItemCount.css';
import Button from 'react-bootstrap/Button';

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
    <div className="counter">
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
      {removeButton ? (
        <>
          <p>Producto agregado...</p>
          <Button variant="success" as={Link} to={'/'}>
            Seguir comprando...
          </Button>
          <br />
          <br />
          <Button variant="success" as={Link} to={'/checkout'}>
            Terminar Compra
          </Button>
        </>
      ) : (
        <Button className="btnAdd" variant="success" onClick={onAdd}>
          Agregar al carro
        </Button>
      )}
    </div>
  );
}
