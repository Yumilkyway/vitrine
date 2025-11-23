// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-decoration-none">
          <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4B0082' }}>VitrineVirtual</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Produtos
            </Nav.Link>
            <Nav.Link href="#" className="nav-link">
              Ofertas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;