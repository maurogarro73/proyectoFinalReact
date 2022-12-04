import React from 'react';
import ItemCount from './ItemCount';
import '../styles/itemDetail.css';

export default function ItemDetail({ product }) {
  return (
    <>
      <div className="item">
        <div>
          <img className="imgProducto" src={product.img} alt={product.name} />
        </div>
        <div className="descripcion">
          <h3 className="tituloCerveza">Nombre: {product.name}</h3>
          <p>Tipo: {product.idCategory}</p>
          <p>
            Precio: <strong>${product.price} </strong> * 12u.
          </p>
          <p>Stock: {product.stock}</p>
          <ItemCount product={product} />
        </div>
      </div>
    </>
  );
}
