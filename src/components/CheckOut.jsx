import React, { useContext, useState } from 'react';
import { cartContext } from '../CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Button, Container, Form } from 'react-bootstrap';

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
      <Container>
        {orderId ? (
          'Gracias por confiar en nosotros. Tu ID de compra es: ' + orderId
        ) : (
          <div>
            <h2>Terminar Compra, ingrese sus datos</h2>
            <Form.Group>
              <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} required />
              <Form.Control type="tel" placeholder="Ingrese su telefono" onChange={(e) => setTel(e.target.value)} required />
              <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Button variant="success" onClick={validateForm}>
              Terminar Compra
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}
