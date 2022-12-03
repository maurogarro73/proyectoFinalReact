import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';

export default function Cart() {
  const { cart, totalCount, totalToPay, deleteFromCart } = useContext(cartContext);

  if (cart.length == 0) {
    return <>No hay productos en el carro... </>;
  }
  return (
    <>
      {cart.map((item) => (
        <>
          <div key={item.id}>
            {item.name + ' ' + item.count} <span onClick={() => deleteFromCart(item.id)}>🗑️</span>
          </div>
        </>
      ))}
      <div>
        <p>Tienmes en el carro: {totalCount}</p>
        <p>Total a pagar: ${totalToPay}</p>
      </div>
      <Link to={'/checkout'}>Terminar Compra</Link>
    </>
  );
}
