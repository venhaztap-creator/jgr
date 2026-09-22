"use client";

import { useState } from 'react';

const TESTI = [
  { name: 'Carlos M.', initial: 'C', text: 'Soy fanático de las motos deportivas y el mantenimiento es crucial. JGR Repuestos es la única tienda donde encuentro el aceite Motul sintético y los filtros originales siempre en stock. El envío fue rapidísimo. 100% recomendados.' },
  { name: "Taller Mecánico 'El Rápido'", initial: 'T', text: 'Compramos repuestos al mayor para nuestro taller. La calidad de las piezas y la atención experta que brindan no tiene comparación. Nos ahorran mucho tiempo de búsqueda.' },
  { name: 'Andrés V.', initial: 'A', text: 'Encontré las bujías de Iridium que llevaba meses buscando. La plataforma es súper fácil de usar para filtrar y armar mi pedido. Sin duda mi nueva tienda de confianza.' },
  { name: 'Luis F.', initial: 'L', text: 'Excelente servicio. Pedí un kit de arrastre completo y llegó perfectamente empacado al día siguiente. Las piezas son de calidad original.' }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + TESTI.length) % TESTI.length);
  const next = () => setIndex((index + 1) % TESTI.length);

  const active = TESTI[index];

  return (
    <section className="testi" data-od-id="testimonials">
      <div className="container container--narrow">
        <h2>la confianza de <em>nuestra comunidad</em></h2>
        <div className="testi__cols">
          <div className="testi__left">
            {/* adding key ensures re-render animation if we defined one in global css */}
            <div className="tcard anim-copy" key={index}>
              <div>
                <div className="tcard__stars">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="tcard__text">{active.text}</p>
              </div>
              <div className="tcard__author">
                <div className="tcard__avatar">{active.initial}</div>
                <b>{active.name}</b>
              </div>
            </div>
            <div className="tctrl">
              <button onClick={prev} aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg></button>
              <span>{index + 1} / {TESTI.length}</span>
              <button onClick={next} aria-label="Siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg></button>
            </div>
          </div>

          <div className="reels">
            <div className="reels__track no-bar">
              <div className="reel" data-od-id="reel-mantenimiento">
                <img src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mantenimiento 4T" loading="lazy" />
                <div className="reel__ov"></div>
                <div className="reel__play"><i><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0"><polygon points="6 3 20 12 6 21 6 3"/></svg></i></div>
                <p className="reel__cap">Mantenimiento 4T</p>
              </div>
              <div className="reel" data-od-id="reel-ruta">
                <img src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Ruta de fin de semana" loading="lazy" />
                <div className="reel__ov"></div>
                <div className="reel__play"><i><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0"><polygon points="6 3 20 12 6 21 6 3"/></svg></i></div>
                <p className="reel__cap">Ruta de fin de semana</p>
              </div>
              <div className="reel" data-od-id="reel-llantas">
                <img src="https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Instalación de Llantas" loading="lazy" />
                <div className="reel__ov"></div>
                <div className="reel__play"><i><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0"><polygon points="6 3 20 12 6 21 6 3"/></svg></i></div>
                <p className="reel__cap">Instalación de Llantas</p>
              </div>
              <div className="reel" data-od-id="reel-track">
                <img src="https://images.pexels.com/photos/262272/pexels-photo-262272.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Performance Track" loading="lazy" />
                <div className="reel__ov"></div>
                <div className="reel__play"><i><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0"><polygon points="6 3 20 12 6 21 6 3"/></svg></i></div>
                <p className="reel__cap">Performance Track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
