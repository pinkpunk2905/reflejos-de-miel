import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import waveSvg from '../assets/wave-2.svg';

export default function Footer() {
  const footerStyle = {
    backgroundColor: 'var(--wattpad-white)',
    color: 'var(--color-purple)',
    padding: '3rem 1rem 0rem',
    overflow: 'hidden',
    position: 'relative',
  };

  const headingStyle = {
    color: 'var(--color-purple)',
    marginBottom: '1rem'
  };
  const listItemStyle = {
    color: 'var(--color-purple)'
  }

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={headingStyle}>Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" style={listItemStyle}>Inicio</a></li>
              <li className="mb-2"><a href="#" style={listItemStyle}>Acerca de</a></li>
              <li className="mb-2"><a href="#" style={listItemStyle}>Servicios</a></li>
              <li className="mb-2"><a href="#" style={listItemStyle}>Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={headingStyle}>Recursos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" style={listItemStyle}>Blog</a></li>
              <li className="mb-2"><a href="#" style={listItemStyle}>FAQs</a></li>
              <li className="mb-2"><a href="#" style={listItemStyle}>Soporte</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={headingStyle}>Síguenos</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="#" className="me-3" style={listItemStyle}>Facebook</a></li>
              <li><a href="#" className="me-3" style={listItemStyle}>Twitter</a></li>
              <li><a href="#" className="me-3" style={listItemStyle}>Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Reflejos de Miel. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
      <img
  src={waveSvg}
  alt="Decoración ondulada"
  style={{
    width: '100%',
    height: '200px',
    display: 'block',
    marginTop: '0',
    objectFit: 'cover'
  }}
/>
    </footer>
  );
}