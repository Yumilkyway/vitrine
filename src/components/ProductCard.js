// ProductCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/produto/${product.id}`} className="text-decoration-none">
      <Card className="product-card h-100 shadow-sm">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold mb-1" style={{ color: '#8A2BE2' }}>
            {product.name}
          </Card.Title>
          <Card.Text className="text-muted mb-2 flex-grow-1">
            {product.description.substring(0, 50)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <h5 className="mb-0" style={{ color: '#FF69B4' }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </h5>
            <Button variant="outline-info" style={{ color: '#8A2BE2', borderColor: '#8A2BE2' }}>
              Ver Detalhes
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;