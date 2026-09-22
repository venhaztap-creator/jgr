"use client";

import Link from 'next/link';

const BEST = [
  { id: 1, name: 'Aceite Sintético 10W-40 4T', brand: 'JGR Premium', price: 18.99, img: "https://images.pexels.com/photos/1089456/pexels-photo-1089456.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true },
  { id: 2, name: 'Filtro de Aire Alto Flujo', brand: 'JGR Performance', price: 24.50, img: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: false },
  { id: 3, name: 'Bujía Iridium CR8EIX', brand: 'JGR Racing', price: 12.00, img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: false },
  { id: 4, name: 'Lubricante de Cadena PTFE', brand: 'JGR Care', price: 15.75, img: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800", isNew: true }
];

export default function ProductGrid() {
  return (
    <section className="section" data-od-id="bestsellers">
      <div className="container">
        <div className="best__head">
          <h2>compra los más vendidos</h2>
          <Link href="#catalog">Ver todo &rarr;</Link>
        </div>
        <div className="best__grid" id="bestGrid">
          {BEST.map((p) => (
            <article key={p.id} className="pcard2" data-od-id={`best-card-${p.id}`}>
              <div className="pcard2__media">
                {p.isNew && <span className="pcard2__new">NUEVO</span>}
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="pcard2__add">
                  <button>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="8" cy="21" r="1"/>
                      <circle cx="19" cy="21" r="1"/>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
              <span className="pcard2__brand">{p.brand}</span>
              <h3 className="pcard2__name">{p.name}</h3>
              <span className="pcard2__price num">${p.price.toFixed(2)}</span>
            </article>
          ))}
        </div>
        <button className="best__more">Ver todo el catálogo</button>
      </div>
    </section>
  );
}
