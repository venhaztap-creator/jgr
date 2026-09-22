"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: "aceites-motor",
    title: "Aceites de motor",
    desc: "Sintético • semisintético",
    img: "https://images.pexels.com/photos/1089456/pexels-photo-1089456.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-aceites-motor"
  },
  {
    id: "aceites-moto",
    title: "Aceites para moto",
    desc: "2T • 4T • JASO MA2",
    img: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-aceites-moto"
  },
  {
    id: "filtros",
    title: "Filtros de aceite",
    desc: "Roscados y de cartucho",
    img: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-filtros"
  },
  {
    id: "bujias",
    title: "Bujías",
    desc: "Iridio • platino • cobre",
    img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-bujias"
  },
  {
    id: "baterias",
    title: "Baterías",
    desc: "Gel • libres de mantenimiento",
    img: "https://images.pexels.com/photos/262272/pexels-photo-262272.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-baterias"
  },
  {
    id: "frenos",
    title: "Frenos",
    desc: "Pastillas • discos • líquido",
    img: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-frenos"
  },
  {
    id: "kit-arrastre",
    title: "Kit de Arrastre",
    desc: "Piñón • cadena • catalina",
    img: "https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#catalog-kit-arrastre"
  }
];

export default function TopCategories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollPrev(scrollLeft > 1);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);

    // Approximate active index based on scroll position
    const cardWidth = trackRef.current.children[0]?.clientWidth || 300;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.children[0]?.clientWidth || 300;
    // adding gap roughly 24px
    const targetScroll = index * (cardWidth + 24);
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    trackRef.current.scrollTo({
      left: targetScroll,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  const scrollPrev = () => scrollToIndex(activeIndex - 1);
  const scrollNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section className="section section--surface" data-od-id="categories">
      <div className="container">
        <div className="sec-head">
          <h2>Encuentra lo que necesitas<br/>en un par de clics.</h2>
          <div className="sec-head__actions">
            <Link className="sec-pill" href="#catalog">Ver catálogo completo</Link>
            <div className="catnav">
              <button 
                className="catnav__btn" 
                type="button" 
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Categorías anteriores"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                className="catnav__btn" 
                type="button" 
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Categorías siguientes"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="cats-wrap">
          <div 
            className="cats" 
            ref={trackRef} 
            onScroll={checkScroll}
            tabIndex={0} 
            role="group" 
            aria-label="Categorías de repuestos"
          >
            {CATEGORIES.map(cat => (
              <Link key={cat.id} className="cat" href={cat.href} data-od-id={`cat-${cat.id}`}>
                <div className="cat__media">
                  <img src={cat.img} alt={cat.title} loading="lazy" />
                </div>
                <div className="cat__body">
                  <div>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                  </div>
                  <span className="cat__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="cats__dots" aria-label="Páginas de categorías">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                className={`cats__dot ${activeIndex === idx ? 'is-active' : ''}`}
                aria-label={`Ir a la categoría ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
