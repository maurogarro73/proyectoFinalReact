import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import Item from './Item';

export default function ItemList({ products }) {
  return (
    <Container>
      <CardGroup>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </CardGroup>
    </Container>
  );
}
