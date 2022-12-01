import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </div>
  );
}
