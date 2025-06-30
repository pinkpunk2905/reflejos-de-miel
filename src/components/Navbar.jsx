// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
// 1️⃣ Importa el SVG correctamente desde src/assets:
import logo from '../assets/bee-svgrepo-com.SVG';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="wattpad-nav">
      <Container fluid className="px-4">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          {/* 2️⃣ Usa la variable importada como src */}
          <img src={logo} width="30" height="30" className="me-2" alt="Logo Reflejos de Miel" />
          <span className="nav-brand-text">Reflejos de Miel</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Form className="mx-auto d-flex search-form">
            <FormControl
              type="search"
              placeholder="Busca historias, temas..."
              aria-label="Buscar"
            />
            <Button className="search-btn">Buscar</Button>
          </Form>

          <Nav className="align-items-center">
            <Nav.Link href="/login" className="nav-login">
              Iniciar sesión
            </Nav.Link>
            <Button href="/signup" className="nav-signup">
              Registrarse
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

