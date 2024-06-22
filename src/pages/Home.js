import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => (
  <div className="bg-light" style={{ minHeight: '100vh', padding: '20px' }}>
    <Container>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Col md={6} className="text-center">
          <h1>Bem-vindo à nossa loja virtual!</h1>
          <p>Explore nossa variedade de produtos incríveis.</p>
          <Button variant="primary" size="lg" href="/produtos">Ver Produtos</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
