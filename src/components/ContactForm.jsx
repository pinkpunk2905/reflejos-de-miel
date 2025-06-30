import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío: API, correo, etc.
    console.log('Enviando formulario:', formData);
    // Reiniciar
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="tú@ejemplo.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-honey px-4 py-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
