// CepForm.js

import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const CepForm = () => {
  const [cep, setCep] = useState('');
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchCep = async (e) => {
    e.preventDefault();
    setCity(null);
    setError(null);
    
    const cleanCep = cep.replace(/\D/g, '');

    if (cleanCep.length !== 8) {
      setError('CEP inválido. Deve conter 8 dígitos.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);
      
      if (response.data.erro) {
        setError('CEP não encontrado.');
      } else {

        setCity(response.data.localidade); 
      }
    } catch (err) {
      setError('Erro ao buscar o CEP. Tente novamente.');
    }
  };

  return (
    <div className="mt-4 p-3 border rounded" style={{ borderColor: '#D8BFD8', backgroundColor: '#F0F8FF' }}>
      <h5 className="mb-3" style={{ color: '#FF69B4' }}>Calcular Frete:</h5>
      <Form onSubmit={handleFetchCep}>
        <Row className="g-2 align-items-end">
          <Col xs={7} md={4}>
            <Form.Group controlId="formCep">
              <Form.Label className="mb-0">CEP:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: 01001000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength={8}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={5} md={3}>
            <Button type="submit" style={{ backgroundColor: '#8A2BE2', borderColor: '#8A2BE2' }}>
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>

      {city && (
        <Alert variant="success" className="mt-3 py-2">
          Entrega em: <span className="fw-bold">{city}</span>
        </Alert>
      )}

      {error && (
        <Alert variant="danger" className="mt-3 py-2">
          {error}
        </Alert>
      )}
    </div>
  );
};

export default CepForm;