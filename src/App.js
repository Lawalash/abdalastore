import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Contato from './pages/Contato';
import CartProvider from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
