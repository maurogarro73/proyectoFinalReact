import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  return (
    <>
      <div>
        <h2>Nombre: {product.name}</h2>
        <img style={{ height: '500px' }} src={product.img} alt={product.name} />
        <p>tipo: {product.idCategory}</p>
        <p>
          precio: <strong>${product.price}</strong>
        </p>
        <p>stock: {product.stock}</p>
        <ItemCount product={product} />
      </div>
    </>
  );
}
