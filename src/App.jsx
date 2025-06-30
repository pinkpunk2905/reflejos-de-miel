// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';                            
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

export default function App() {
  const stepsData = [
    {
      title: 'Crear',
      text: 'Publica fragmentos, frases o pensamientos. Empieza tu cuaderno compartido.',
    },
    {
      title: 'Comentar',
      text: 'Lee aportes de otras participantes y deja tu reflexión desde la ternura crítica.',
    },
    {
      title: 'Compartir',
      text: 'Difunde ideas que resonaron contigo y conecta para co-crear cuidado relacional.',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Contenido principal */}
      <main>
        {/* Hero Section */}
        <Hero
          title="Reflejos de miel, nuestro cuaderno compartido"
          subtitle="Únete a nuestra comunidad y aporta tu experiencia en las temáticas semanales"
          ctaText="Crea una entrada"
          onCtaClick={() =>
            document.getElementById('stories').scrollIntoView({ behavior: 'smooth' })
          }
        />

        {/* How It Works Section */}
        <HowItWorks
          title="Cómo funciona"
          subtitle="Publica fragmentos de tus propios escritos, pensamientos, frases rotas"
          steps={stepsData}
          showCta={false}
        />

        {/* Testimonials Section (Stories) */}
        <section id="stories">
          <Testimonials />
          {/* FORMULARIO DE CONTACTO */}
       <ContactForm />  
        </section>
      </main>
    </>
  );
}



