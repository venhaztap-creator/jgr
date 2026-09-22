"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  { 
    title:'15% OFF', 
    sub:'EN ACEITES SINTÉTICOS DE ALTO RENDIMIENTO', 
    legal:'Protección extrema para tu motor. Promoción válida todo este mes en marcas seleccionadas.', 
    label:'Lubricantes Premium',
    bg: '/assets/jgr/hero-1.jpg',
    productImg: '/assets/jgr/prod-oil-ai.jpg',
    accentClass: 'text-orange-500',
    barClass: 'bg-orange-500',
  },
  { 
    title:'20% OFF', 
    sub:'LLANTAS SPORT Y ALL-TERRAIN', 
    legal:'Agarre perfecto en cualquier terreno. Compra 4 y lleva balanceo gratis.', 
    label:'Neumáticos Alta Gama',
    bg: '/assets/jgr/hero-2.jpg',
    productImg: '/assets/jgr/prod-tires-ai.jpg',
    accentClass: 'text-orange-500',
    barClass: 'bg-orange-500',
  },
  { 
    title:'-10%', 
    sub:'BATERÍAS AGM PARA START-STOP', 
    legal:'Máxima potencia de arranque en frío. Incluye servicio de instalación.', 
    label:'Baterías VoltMax',
    bg: '/assets/jgr/hero-3.jpg',
    productImg: '/assets/jgr/prod-battery-ai.jpg',
    accentClass: 'text-orange-500',
    barClass: 'bg-orange-500',
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0); 
  const slide = HERO_SLIDES[current];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setSlide = (idx: number) => {
    setCurrent((idx + HERO_SLIDES.length) % HERO_SLIDES.length);
    setKey(prev => prev + 1); 
  };

  const next = () => setSlide(current + 1);
  const prev = () => setSlide(current - 1);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setSlide(current + 1);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, isPaused]);

  return (
    <section 
      className="hero relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-black" 
      id="top" 
      data-slide={current} 
      data-od-id="hero"
    >
      {/* Dynamic Background Image - Fully visible */}
      {HERO_SLIDES.map((s, idx) => (
        <img 
          key={idx}
          src={s.bg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Subtle darkening so white text is readable without hiding the products */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div 
        className="container relative z-10 h-full flex flex-col md:flex-row items-center justify-between pt-[220px] md:pt-[240px] pb-[96px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows - perfectly centered vertically, flushed to edges */}
        <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full grid place-items-center text-white bg-black/30 border border-white/20 backdrop-blur-md shadow-xl hover:bg-black/50 hover:scale-110 transition-all" onClick={prev} aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full grid place-items-center text-white bg-black/30 border border-white/20 backdrop-blur-md shadow-xl hover:bg-black/50 hover:scale-110 transition-all" onClick={next} aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Left Copy */}
        <div className="relative w-full md:w-[60%] h-full flex flex-col justify-center px-6 md:pl-20 anim-copy" key={`copy-${key}`}>
          <div className="mb-6 inline-flex">
            <span className="bg-black/90 backdrop-blur-md border border-orange-500/30 text-orange-400 font-black text-[10px] sm:text-xs md:text-sm tracking-[0.15em] uppercase px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
              Repuestos y Autopartes Originales
            </span>
          </div>
          <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-black tracking-tight leading-[0.9] mb-8 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            {slide.title}
          </h1>
          
          <div className="flex flex-col items-start bg-black/60 border-l-4 border-orange-500 backdrop-blur-md p-6 rounded-r-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-2xl mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight uppercase mb-3 drop-shadow-md">
              {slide.sub}
            </h2>
            <p className="text-gray-300 font-medium text-base md:text-lg lg:text-xl leading-snug">
              {slide.legal}
            </p>
          </div>

          {/* Dots below the subpill */}
          <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-xl w-fit">
            {HERO_SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrent(idx)}
                className="p-3 cursor-pointer group"
                aria-label={`Ver diapositiva ${idx + 1}`}
              >
                <div className={`transition-all duration-300 rounded-full group-hover:scale-125 ${
                  idx === current ? `w-10 h-3 ${slide.barClass} shadow-[0_0_15px_rgba(249,115,22,0.8)]` : 'w-3 h-3 bg-white/30 group-hover:bg-white/60'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Stage - Product Showcase (Clean White Card) */}
        <div className="relative w-full md:w-[40%] h-full hidden md:flex items-center justify-center anim-stage" key={`stage-${key}`}>
          <div className="relative w-[320px] h-[440px] flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.5)] group overflow-visible">
            
            {/* Product Image Area (No more circles, just clean space) */}
            <div className="relative w-full h-56 mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4">
              <img 
                src={slide.productImg} 
                alt={slide.title} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <h3 className="text-gray-900 text-2xl font-black tracking-tight mb-2 text-center leading-tight">
              {slide.label}
            </h3>
            <p className="text-gray-500 font-bold text-sm text-center uppercase tracking-wider">
              Calidad Original (OEM)
            </p>
            
            {/* CTA attached to the bottom of the card */}
            <Link className="absolute -bottom-7 flex items-center gap-3 px-10 py-5 rounded-full bg-orange-500 text-white font-black text-sm uppercase tracking-wider shadow-[0_15px_30px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform group/btn hover:bg-orange-600" href="/catalog">
              VER CATÁLOGO
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
