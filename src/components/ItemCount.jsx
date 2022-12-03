import React, { useState, useEffect } from 'react';

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);

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
    alert('Quiero agregar ' + count + ' de este item: ' + product.name);
  }

  return (
    <div>
      <span style={{ cursor: 'pointer' }} onClick={restar}>
        -
      </span>
      {count}
      <span style={{ cursor: 'pointer' }} onClick={sumar}>
        +
      </span>
      <button onClick={onAdd}>Agregar al carro</button>
    </div>
  );
}
