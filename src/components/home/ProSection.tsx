"use client";

import Link from 'next/link';

export default function ProSection() {
  return (
    <section className="section pro" data-od-id="pro">
      <div className="container">
        <h2>Tú también puedes ser un <em>PRO</em></h2>
        <div className="pro__grid">
          <Link href="#catalog" className="pro__card" data-od-id="pro-touring">
            <img 
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Accesorios Touring" 
              loading="lazy" 
            />
            <div className="pro__copy">
              <h3>Accesorios Touring</h3>
              <p>Prepárate para viajes largos con la mejor calidad.</p>
              <span className="pro__link">Explorar línea</span>
            </div>
          </Link>
          <Link href="#catalog" className="pro__card" data-od-id="pro-racing">
            <img 
              src="https://images.pexels.com/photos/262272/pexels-photo-262272.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Performance Racing" 
              loading="lazy" 
            />
            <div className="pro__copy">
              <h3>Performance Racing</h3>
              <p>Lleva el motor de tu moto al límite de forma segura.</p>
              <span className="pro__link">Ver repuestos</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
