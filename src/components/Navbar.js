import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Modal } from 'react-bootstrap';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { MdPersonOutline, MdHelpOutline } from 'react-icons/md';
import '../styles/navbar.css';

const NavigationBar = () => {
  const { carrinho } = useContext(CartContext);
  const totalItems = carrinho.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();
  const categoriaAtual = new URLSearchParams(location.search).get('categoria');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="mr-auto align-items-center">
            <Nav.Link className="d-lg-none" onClick={handleShow}>
              <FaBars />
            </Nav.Link>
            <Navbar.Brand href="/html/home.html">Academia</Navbar.Brand>
    
          </Nav>
          <Nav className="ml-auto align-items-center">
            <Nav.Link as={Link} to="/carrinho" className="d-flex align-items-center position-relative">
              <FaShoppingCart />
              {totalItems > 0 && <Badge pill variant="danger" className="ml-1 position-absolute top-0 start-100 translate-middle badge-custom">{totalItems}</Badge>}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="custom-modal">
          <div className="profile-info">
            <MdPersonOutline size={40} />
            <span className="ml-2">Olá, visitante</span>
          </div>
          <hr />
          <div className="contact-info">
            <MdHelpOutline size={40} />
            <span className="ml-2">Atendimento</span>
          </div>
          <hr />
          <div className="category-info">
            <h5>Navegue por categoria</h5>
            <ul>
              <li><Link to="/" onClick={handleClose}>Home</Link></li>
              <li><Link to="/produtos?categoria=Camisas" onClick={handleClose}>Camisas</Link></li>
              <li><Link to="/produtos?categoria=Suplementos Alimentares" onClick={handleClose}>Suplementos Alimentares</Link></li>
              <li><Link to="/produtos?categoria=Abdala Equipamentos" onClick={handleClose}>Abdala Equipamentos</Link></li>
            </ul>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;
