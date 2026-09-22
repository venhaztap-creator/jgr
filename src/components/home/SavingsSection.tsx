"use client";

import Link from 'next/link';

export default function SavingsSection() {
  return (
    <section className="savings" id="ofertas" data-od-id="savings">
      <div className="container">
        <h2 className="savings__title"><b>OFERTAS</b><span>DESTACADAS JGR</span></h2>
        <div className="savings__grid">
          <Link href="#catalog" className="promo" data-od-id="promo-2x1">
            <div className="promo__media"><img src="https://images.pexels.com/photos/1089456/pexels-photo-1089456.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lleva 2, el 2do a 50% off" loading="lazy" /></div>
            <div className="promo__body"><h3>Lleva 2, El 2do a 50% Off</h3><p>Aceite Motul 7100 4T 10W40 Sintético. Compra mínima de 2.</p></div>
          </Link>
          <Link href="#catalog" className="promo" data-od-id="promo-hotdeal-8">
            <div className="promo__media">
              <img src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Limpiador de inyectores" loading="lazy" />
              <span className="promo__stamp"><span>HOT</span><span>DEAL</span></span>
            </div>
            <div className="promo__body"><h3>Hot Deal: $8.99</h3><p>Limpiador de inyectores y carburador alto rendimiento, 16 Oz.</p></div>
          </Link>
          <Link href="#catalog" className="promo" data-od-id="promo-hotdeal-4">
            <div className="promo__media">
              <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lubricante de cadena" loading="lazy" />
              <span className="promo__stamp"><span>HOT</span><span>DEAL</span></span>
            </div>
            <div className="promo__body"><h3>Hot Deal: $4.99</h3><p>Lubricante de cadena alta fricción con teflón. Larga duración.</p></div>
          </Link>
          <Link href="#catalog" className="promo" data-od-id="promo-giftcard">
            <div className="promo__media"><img src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tarjeta de regalo $10" loading="lazy" /></div>
            <div className="promo__body"><h3>Tarjeta de Regalo $10</h3><p>Por la compra del pack x2 Bujías Iridium NGK. + 500 Puntos Extra.</p></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
