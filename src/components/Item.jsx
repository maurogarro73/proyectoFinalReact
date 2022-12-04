import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Item({ product }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>id: {product.id}</ListGroup.Item>
            <ListGroup.Item>Tipo: {product.idCategory}</ListGroup.Item>
            <ListGroup.Item>
              Precio: <strong> ${product.price} </strong>* 12u.
            </ListGroup.Item>
            <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
          </ListGroup>
          <Card.Footer>
            {/* <Link to={'/item/' + product.id}>
              <button>Ver detalle</button>
            </Link> */}
            <Button variant="success" as={Link} to={'/item/' + product.id}>
              VER DETALLES
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
