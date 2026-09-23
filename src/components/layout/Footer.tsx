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
            
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Síguenos</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/jgrautodist/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100075960939346" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.tiktok.com/@jgrautodist" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <a href="https://www.youtube.com/@jgrautodist" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://www.linkedin.com/company/j-g-r-autodist-c-a/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot__bottom">
          <div>
            <p className="foot__legal">© 2026 JGR Repuestos. Todos los derechos reservados. Hecho por Haztap</p>
          </div>
          <p className="foot__proto">Prototipo demostrativo: catálogo, precios y marcas mencionadas son referenciales.</p>
        </div>
      </div>
    </footer>
  );
}
