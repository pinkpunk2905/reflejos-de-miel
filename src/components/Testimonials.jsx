// src/components/Testimonials.jsx
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const data = [
  {
    text: "Reflejos de Miel me ayudó a reconectar con mi propia fuerza. ¡Siento que soy parte de una comunidad!",
    author: "— María G."
  },
  {
    text: "Cada historia me hizo entender que mi rabia es legítima. Gracias por este espacio tan tierno y radical a la vez.",
    author: "— Carla L."
  },
  {
    text: "La estética y el contenido crítico me conquistaron: es justo lo que necesitaba para tomar acción.",
    author: "— Ana P."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (idx) => {
    setIndex(idx);
  }

  return (
    <section className="testimonials-section" aria-label="Testimonios de usuarias">
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: 'var(--color-magenta)' }}>
          Lo que dicen nuestras usuarias
        </h2>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {data.map((item, i) => (
              <div
                key={i}
                className={`carousel-item ${i === index ? 'active' : ''}`}
              >
                <div className="testimonial-card">
                  <p className="testimonial-text">“{item.text}”</p>
                  <p className="testimonial-author">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* indicadores personalizados */}
          <div className="carousel-indicators mt-4">
            {data.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={i}
                className={i === index ? 'active' : ''}
                aria-current={i === index}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>

          {/* flechas opcionales */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
            onClick={() => handleSelect((index + data.length - 1) % data.length)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
            onClick={() => handleSelect((index + 1) % data.length)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  )
}
