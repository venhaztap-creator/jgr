"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot" id="contacto" data-od-id="footer">
      <div className="container">
        <div className="foot__grid">
          <div>
            <Link className="foot__brand" href="#top">
              <img src="/logo.webp" alt="JGR Autodist" width="40" height="40" className="object-contain" />
              <span><b>JGR Repuestos</b><span>Aceites · Filtros · Bujías</span></span>
            </Link>
            <p className="foot__about">Venta de repuestos y lubricantes a nivel nacional.<br/>Atención personalizada para encontrar la pieza exacta de tu vehículo.</p>
          </div>
          <div>
            <h4>Categorías</h4>
            <div className="foot__links">
              <Link href="/catalog?category=aceites">Aceites de motor</Link>
              <Link href="/catalog?category=filtros">Filtros</Link>
              <Link href="/catalog?category=bujias">Bujías</Link>
              <Link href="/catalog?category=baterias">Baterías</Link>
              <Link href="/catalog?category=frenos">Frenos</Link>
              <Link href="/catalog?category=suspension">Suspensión</Link>
            </div>
          </div>
          <div>
            <h4>Ayuda</h4>
            <div className="foot__links">
              {/* These are placeholder pages for demonstration */}
              <Link href="#">Cómo comprar</Link><Link href="#">Envíos y entregas</Link>
              <Link href="#">Garantías y devoluciones</Link><Link href="#">Métodos de pago</Link><Link href="#">Preguntas frecuentes</Link>
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="foot__links">
              <span>WhatsApp: +58 412-555-0100</span><span>Teléfono: +58 212-555-0192</span>
              <span>Correo: ventas@jgrautopartes.com</span><span>Horario: L-S, 8:00-17:00</span>
            </div>
          </div>
        </div>
        <div className="foot__bottom">
          <div>
            <p className="foot__legal">© 2026 JGR Repuestos. Todos los derechos reservados.</p>
            <p className="foot__credit">Fotografías de referencia: Wikimedia Commons — Jacek Halicki (CC BY 3.0), Atharv Chandel (CC BY 4.0), Cjp24 (CC BY-SA 4.0), Cameron Chapman (CC BY 2.0), DARMAS SB 9 (CC BY-SA 4.0); imágenes de dominio público de Elwood y Myke2020 vía Wikimedia Commons.</p>
          </div>
          <p className="foot__proto">Prototipo demostrativo: catálogo, precios y marcas mencionadas son referenciales.</p>
        </div>
      </div>
    </footer>
  );
}
