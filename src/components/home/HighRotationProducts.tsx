"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/products';

export default function HighRotationProducts() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100" id="ofertas">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-sm font-bold text-orange-500 tracking-widest uppercase">Alta Demanda</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Repuestos de Alta Rotación</h2>
            <p className="text-gray-500 font-medium mt-2">Productos más solicitados por talleres y dueños de vehículos. Inventario con disponibilidad inmediata.</p>
          </div>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-orange-500 transition-colors group">
            Ver catálogo completo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MOCK_PRODUCTS.map((p) => (
              <Link 
                key={p.id} 
                href={`/product/${p.id}`}
                className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="h-48 md:h-56 bg-white relative p-6 flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Destacado</span>
                  </div>
                  <img 
                    src={p.images[0]} 
                    alt={p.title} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-bold text-orange-500 mb-1">{p.brand}</p>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 min-h-[45px] max-h-[45px] line-clamp-2" title={p.title}>
                    {p.title}
                  </h3>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <p className="text-2xl font-black text-gray-900">${p.pricing.retail.toFixed(2)}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors shadow-md">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* "Ver todo" card */}
            <Link href="/catalog" className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 snap-start bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-gray-400 group-hover:text-orange-500 transition-colors group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Ver todo el catálogo</h3>
              <p className="text-sm text-gray-500 text-center mt-2">Explora miles de repuestos disponibles.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
