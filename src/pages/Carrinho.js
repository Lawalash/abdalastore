// src/pages/Carrinho.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useContext(CartContext);

  return (
    <div>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {carrinho.map((produto, index) => (
            <div key={index}>
              <h2>{produto.nome}</h2>
              <p>Preço: R${produto.preco}</p>
              <button onClick={() => removerDoCarrinho(produto.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrinho;
