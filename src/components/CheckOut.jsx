import React, { useContext, useState } from 'react';
import { cartContext } from '../CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function CheckOut() {
  const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [orderId, setOrderId] = useState('');

  function validateForm() {
    const order = {
      buyer: { name, tel, email },
      totalToPay,
      cart,
    };

    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAllFromCart();
    });
  }

  if (cart.length == 0) {
    return <>No hay nada para pagar...</>;
  }

  return (
    <>
      {orderId ? (
        'Gracias por confiar en nosotros. Tu ID de compra es: ' + orderId
      ) : (
        <div>
          <h2>Terminar Compra, ingrese sus datos</h2>
          <input type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} />
          <input type="tel" placeholder="Ingrese su telefono" onChange={(e) => setTel(e.target.value)} />
          <input type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
          <button onClick={validateForm}>Terminar Compra</button>
        </div>
      )}
    </>
  );
}
