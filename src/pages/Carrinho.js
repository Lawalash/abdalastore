import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useContext(CartContext);

  // Calcula o total da compra somando os preços de todos os produtos no carrinho
  const totalCompra = carrinho.reduce((total, produto) => total + produto.preco, 0);

  const handleComprar = () => {
    // Lógica para o botão de compra
    alert('Compra realizada com sucesso!');
  };

  return (
    <Container>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ListGroup>
            {carrinho.map(produto => (
              <ListGroup.Item key={produto.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2>{produto.nome}</h2>
                    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                  </div>
                  <Button variant="danger" onClick={() => removerDoCarrinho(produto.id)}>Remover</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: R$ {totalCompra.toFixed(2)}</h4>
            <Button variant="success" onClick={handleComprar}>Comprar</Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Carrinho;
