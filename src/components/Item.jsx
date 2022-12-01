import React from 'react';

export default function Item({ product }) {
  return (
    <>
      <div>
        <p>id: {product.id}</p>
        <p>name: {product.name}</p>
        <p>price: {product.idCategory}</p>
        <p>stock: {product.stock}</p>
        <img style={{ height: '300px' }} src={product.img} alt="img producto" />
      </div>
    </>
  );
}
