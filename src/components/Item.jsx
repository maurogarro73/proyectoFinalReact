import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  return (
    <>
      <div>
        <p>id: {product.id}</p>
        <p>name: {product.name}</p>
        <p>category: {product.idCategory}</p>
        <p>price: {product.price}</p>
        <p>stock: {product.stock}</p>
        <img style={{ height: '300px' }} src={product.img} alt={product.name} />
        <Link to={'/item/' + product.id}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </>
  );
}
