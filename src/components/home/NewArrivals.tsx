"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/products';

// ==========================================
// CONFIGURACIÓN DEL BANNER PROMOCIONAL
// Puedes editar los textos, enlaces e imagen aquí:
// ==========================================
export const PROMO_BANNER = {
  showBanner: true, // Cambia a false para ocultar el banner
  tag: "OFERTA ESPECIAL",
  title: "Aprovecha el 20% de Descuento",
  description: "En toda la línea de suspensión y frenos. ¡Prepárate para la carretera con repuestos originales de la más alta calidad!",
  buttonText: "Comprar ahora",
  link: "/catalog?category=suspension",
  image: "/assets/jgr/prod-shocks.jpg",
  bgGradient: "from-orange-500 to-orange-600", // Ejemplo: from-blue-600 to-blue-800
};

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  // Simulate "new" products by reversing the list and picking a few
  const newProducts = [...MOCK_PRODUCTS].reverse().slice(0, 8);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" id="lo-mas-nuevo">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">Lanzamientos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Lo más nuevo</h2>
            <p className="text-gray-500 font-medium mt-2">Explora los últimos repuestos y componentes tecnológicos que acaban de llegar a nuestro inventario.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/catalog" className="hidden md:flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors mr-4">
              Ver todos
            </Link>
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-600 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all text-gray-600 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* --- EDITABLE BANNER --- */}
        {PROMO_BANNER.showBanner && (
          <div className={`w-full rounded-[32px] mb-12 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 relative bg-gradient-to-br ${PROMO_BANNER.bgGradient}`}>
            
            {/* Background Image covering right side (desktop) or full background (mobile) */}
            <div className="absolute inset-0 md:left-1/3">
              {/* Overlay gradient to blend image into the solid background */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-orange-600 md:from-orange-600 via-orange-600/80 md:via-orange-600/40 to-transparent z-10"></div>
              <img src={PROMO_BANNER.image} alt={PROMO_BANNER.title} className="w-full h-full object-cover object-center mix-blend-overlay md:mix-blend-normal opacity-40 md:opacity-100" />
            </div>

            {/* Content */}
            <div className="relative z-20 p-8 md:p-14 md:py-16 w-full md:w-2/3 flex flex-col items-start text-white">
              <span className="bg-white/20 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 backdrop-blur-md border border-white/30 shadow-sm">
                {PROMO_BANNER.tag}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-[1.1] drop-shadow-md tracking-tight">
                {PROMO_BANNER.title}
              </h3>
              <p className="text-white/95 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed drop-shadow-sm">
                {PROMO_BANNER.description}
              </p>
              <Link href={PROMO_BANNER.link} className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-widest text-sm flex items-center gap-2 group">
                {PROMO_BANNER.buttonText}
                <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        )}

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {newProducts.map((p) => (
              <Link 
                key={p.id} 
                href={`/product/${p.id}`}
                className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 snap-start bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="h-48 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 relative p-6 flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg shadow-blue-500/30">
                      NUEVO
                    </span>
                  </div>
                  <img 
                    src={p.images[0]} 
                    alt={p.title} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 drop-shadow-md"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <p className="text-xs font-black text-blue-600 mb-2 uppercase tracking-widest">{p.brand}</p>
                  <h3 className="text-lg font-black text-gray-900 leading-tight mb-4 min-h-[45px] max-h-[45px] line-clamp-2" title={p.title}>
                    {p.title}
                  </h3>
                  
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Precio de Lista</p>
                      <p className="text-2xl font-black text-gray-900">${p.pricing.retail.toFixed(2)}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* "Ver todo" card */}
            <Link href="/catalog" className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 snap-start bg-blue-600 rounded-3xl flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all group text-white">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-2 text-center">Ver todos los lanzamientos</h3>
              <p className="text-sm text-blue-100 text-center font-medium">No te pierdas las novedades de la temporada.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
