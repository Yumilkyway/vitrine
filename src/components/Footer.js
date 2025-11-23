// Footer.js

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container className="text-center">
        <span className="text-muted">
          &copy; {new Date().getFullYear()} VitrineVirtual | Desenvolvido com React JS
        </span>
      </Container>
    </footer>
  );
};

export default Footer;