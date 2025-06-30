// src/components/Hero.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Hero({ title, subtitle, ctaText, onCtaClick }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="display-3 fw-bold">{title}</h1>
        <p className="lead mb-4">{subtitle}</p>
        <Button
          onClick={onCtaClick}
          className="hero-cta border-0"
        >
          {ctaText}
        </Button>
      </div>
      <div className="hero-image">
        <img src="/assets/hero-bg.png" alt="Hero" />
      </div>
    </section>
  );
}

