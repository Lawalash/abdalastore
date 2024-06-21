// src/components/Produto.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Produto = ({ produto }) => {
  const { adicionarAoCarrinho } = useContext(CartContext);

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: R${produto.preco}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Produto;
