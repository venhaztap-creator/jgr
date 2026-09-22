"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PredictiveSearch from './PredictiveSearch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="nav-wrap">
      <header className="nav" data-od-id="site-header">
        <div className="nav__top">
          <div className="nav__brandwrap">
            <button 
              className="nav__menu" 
              id="menuBtn" 
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} 
              aria-expanded={isOpen} 
              aria-controls="menuPanel"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="nav__menu-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              <svg className="nav__menu-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <Link className="nav__brand" href="/">
              <img className="nav__logo" src="/logo.webp" alt="JGR Autodist" width="64" height="64" />
              <span className="nav__brandtxt"><b>JGR Repuestos</b><span>ACEITES • FILTROS • BUJÍAS</span></span>
            </Link>
          </div>

          <div className="nav__search">
            <PredictiveSearch />
          </div>

          <div className="nav__actions">
            <Link href="#buscar" className="nav__vehicle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              Elegir vehículo
            </Link>
            <button className="nav__icon nav__icon--account" aria-label="Cuenta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="nav__icon" aria-label="Carrito" data-od-id="cart-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className="nav__cart-dot"></span>
            </button>
          </div>
        </div>

        <div className="nav__search-m" role="search" data-od-id="header-search-mobile">
          <PredictiveSearch isMobile={true} />
        </div>

        <nav className="nav__cats no-bar">
          <Link href="/catalog" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            Todas las categorías
          </Link>
          <span className="nav__sep"></span>
          <Link href="/catalog?category=aceites-motor">Aceites de motor</Link>
          <Link href="/catalog?category=aceites-motor">Aceites de Motor</Link>
          <Link href="/catalog?category=filtros">Filtros</Link>
          <Link href="/catalog">Bujías</Link>
          <Link href="/catalog">Baterías</Link>
          <Link href="/catalog?category=frenos">Frenos</Link>
          <Link href="#ofertas" className="is-accent">Ofertas</Link>
          <Link href="#contacto">Contacto</Link>
        </nav>

        <div className={`nav__mobile ${isOpen ? 'is-open' : ''}`} id="menuPanel" onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setIsOpen(false);
        }}>
          <Link href="#buscar" className="nav__mobile-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            Elegir vehículo
          </Link>
          <span className="nav__mobile-sep"></span>
          <Link href="/catalog">Todas las categorías</Link>
          <Link href="/catalog?category=aceites-motor">Aceites de motor</Link>
          <Link href="/catalog?category=aceites-motor">Aceites de Motor</Link>
          <Link href="/catalog?category=filtros">Filtros</Link>
          <Link href="/catalog">Bujías</Link>
          <Link href="/catalog">Baterías</Link>
          <Link href="/catalog?category=frenos">Frenos</Link>
          <Link href="#ofertas">Ofertas</Link>
          <Link href="#contacto">Contacto</Link>
        </div>
      </header>
    </div>
  );
}
