// Home.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductCard from '../components/ProductCard.js';
import products from '../data/products.json';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="my-5 flex-grow-1">
        <h1 className="text-center mb-4">✨ Nossos Produtos Mágicos ✨</h1>
        <h3 className="text-center mb-5 text-muted">Ofertas para um dia doce e *girlie*!</h3>

        {}
                <Row xs={1} md={3} className="g-4"> 
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;