import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/produto/:productId" element={<ProductDetail />} /> 
        <Route path="*" element={
          <div className="text-center my-5">
            <h2>Página Não Encontrada 💔</h2>
            <p>O link que você tentou acessar não existe.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
