import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../img/logo-pampaBeer.png';
import CartWidget from './CartWidget';

const page = [
  { label: 'Home', link: '/' },
  { label: 'Cervezas Rubia', link: '/category/rubia' },
  { label: 'Cervezas Roja', link: '/category/roja' },
  { label: 'Cervezas Negra', link: '/category/negra' },
  { label: 'Checkout', link: '/checkout' },
  { label: 'Cart', link: '/cart' },
];

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" as={Link} src={logo} width="100%" height="40" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {page.map((page) => (
                <Nav.Link key={page.link} as={Link} to={page.link}>
                  {/* <Link to={page.link}>{page.label}</Link> */}
                  {page.label}
                </Nav.Link>
              ))}
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
