import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/category/rubia">Cerveza Rubia</Link>
      <Link to="/category/roja">Cerveza Roja</Link>
      <Link to="/category/negra">Cerveza Negra</Link>
    </div>
  );
}
