// src/pages/Produtos.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/produtos.css';

const listaDeProdutos = [
  { id: 1, nome: 'Camisa M', preco: 70, categoria: 'Camisas', imagem: require('../imagens/camisas/camisa1.png') },
  { id: 2, nome: 'Camisa P', preco: 55, categoria: 'Camisas', imagem: require('../imagens/camisas/camisa2.png') },
  { id: 3, nome: 'Camisa G', preco: 75, categoria: 'Camisas', imagem: require('../imagens/camisas/camisa3.png') },
  { id: 4, nome: 'Camisa GG', preco: 80, categoria: 'Camisas', imagem: require('../imagens/camisas/camisa4.png') },
  { id: 5, nome: 'Creatina Mono hidratada', preco: 200, categoria: 'Suplementos Alimentares', imagem: require('../imagens/camisas/camisa4.png') },
  { id: 6, nome: 'Whey Protein MAX TITANIUM', preco: 250, categoria: 'Suplementos Alimentares', imagem: require('../imagens/camisas/camisa4.png') },
  { id: 7, nome: 'Equipamento 1', preco: 300, categoria: 'Abdala Equipamentos', imagem: require('../imagens/camisas/camisa4.png') },
  { id: 8, nome: 'Equipamento 2', preco: 350, categoria: 'Abdala Equipamentos', imagem: require('../imagens/camisas/camisa4.png') },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Produtos = () => {
  const query = useQuery();
  const categoriaSelecionada = query.get('categoria');
  const { adicionarAoCarrinho } = useContext(CartContext);

  return (
    <div className="produtos-container">
      <h1>{categoriaSelecionada || 'Todos os produtos'}</h1>
      <div className="produtos-lista">
        {listaDeProdutos
          .filter(produto => !categoriaSelecionada || produto.categoria === categoriaSelecionada)
          .map(produto => (
            <div key={produto.id} className="card">
              <div className="card-img">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="card-title">{produto.nome}</div>
              <div className="card-subtitle">{produto.categoria}</div>
              <hr className="card-divider" />
              <div className="card-footer">
                <div className="card-price"><span>R$</span> {produto.preco}</div>
                <button className="card-btn" onClick={() => adicionarAoCarrinho(produto)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Produtos;
