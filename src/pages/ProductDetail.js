// ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CepForm from '../components/CepForm.js';
import products from '../data/products.json';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/404'); 
    }
  }, [productId, navigate]);

  if (!product) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="detail-container flex-grow-1">
        <h1 className="mb-4 text-center text-md-start">{product.name}</h1>
        <hr className="mb-4" style={{ borderColor: '#D8BFD8' }} />

        {}
                <Row className="g-4">
          <Col xs={12} md={5}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fluid 
              rounded 
              className="shadow-sm" 
              style={{ border: '2px solid #FFC0CB' }}
            />
          </Col>
          
          <Col xs={12} md={7}>
            <h3 className="mb-3" style={{ color: '#FF69B4' }}>Detalhes do Produto</h3>
            
            {}
            <p className="lead">{product.description}</p>
            <h2 className="mb-3" style={{ color: '#8A2BE2' }}>
              Preço: R$ {product.price.toFixed(2).replace('.', ',')}
            </h2>
            
            {}
            <ListGroup className="mb-3">
              <ListGroup.Item className="fw-bold" style={{ backgroundColor: '#FFF0F5' }}>
                Fabricante: {product.manufacturer} 
              </ListGroup.Item>
              <ListGroup.Item className="fw-bold" style={{ backgroundColor: '#FFF0F5' }}>
                Especificações:
              </ListGroup.Item>
              {product.specifications.map((spec, index) => (
                <ListGroup.Item key={index}>
                  <span className="fw-normal">{spec.key}:</span> {spec.value}
                </ListGroup.Item>
              ))}
            </ListGroup>

            {}
            <CepForm />

            {}
            <Button 
              size="lg" 
              className="w-100 mt-4 fw-bold" 
              style={{ backgroundColor: '#FF69B4', borderColor: '#FF69B4' }}
              onClick={() => alert(`Comprar ${product.name}! Finalizar compra...`)}
            >
              Comprar Agora!
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;