// src/components/HowItWorks.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function HowItWorks({
  title,
  subtitle,
  steps = []    // recibe un array de { title, text }
}) {
  return (
    <section className="how-it-works py-5">
      <Container>
        {/* Encabezado */}
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </Col>
        </Row>

        {/* Pasos */}
        <Row>
          {steps.map((step, idx) => (
            <Col key={idx} md={4} className="text-center mb-4">
              <div className="step-number mb-3">{idx + 1}</div>
              <h5 className="step-title mb-2">{step.title}</h5>
              <p className="step-text">{step.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

