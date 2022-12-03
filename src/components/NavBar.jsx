import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/category/rubia">Cerveza Rubia</Link>
      <Link to="/category/roja">Cerveza Roja</Link>
      <Link to="/category/negra">Cerveza Negra</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/cart">Cart</Link>
      <CartWidget />
    </div>
  );
}
