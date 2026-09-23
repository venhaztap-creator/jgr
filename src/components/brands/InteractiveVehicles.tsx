"use client";
import Link from 'next/link';
import { useState } from 'react';

const PICKUP_MARKERS = [
  { id: 1, title: "Aceite de Motor", desc: "Sintético 5W-30 Alto Rendimiento", price: "$12.50", top: "30%", left: "58%", img: "/assets/jgr/prod-oil-ai.jpg", link: "/product/combo-afinacion" },
  { id: 2, title: "Amortiguadores", desc: "Kit Suspensión Off-Road 4x4", price: "$89.90", top: "56%", left: "36%", img: "/assets/jgr/prod-shocks.jpg", link: "/product/combo-seguridad" },
  { id: 3, title: "Llantas All-Terrain", desc: "Agarre extremo para todo terreno", price: "$215.00", top: "78%", left: "42%", img: "/assets/jgr/prod-tires-ai.jpg", link: "/product/combo-seguridad" }
];

const TRUCK_MARKERS = [
  { id: 4, title: "Batería Pesada", desc: "Batería 12V 1000 CCA para carga pesada", price: "$150.00", top: "65%", left: "25%", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Car_battery_by_Varta.jpg/320px-Car_battery_by_Varta.jpg", link: "/catalog" },
  { id: 5, title: "Filtro de Aire Diésel", desc: "Filtro de alto flujo para camiones", price: "$45.00", top: "40%", left: "75%", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Car_engine_air_filter.jpg/320px-Car_engine_air_filter.jpg", link: "/catalog" },
  { id: 6, title: "Frenos de Aire", desc: "Kit de balatas y tambor HD", price: "$320.00", top: "70%", left: "85%", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=200&auto=format&fit=crop", link: "/catalog" }
];

export default function InteractiveVehicles({ brandName = "OEM" }: { brandName?: string }) {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const renderMarkers = (markers: typeof PICKUP_MARKERS) => {
    return markers.map((m) => {
      const isActive = activeMarker === m.id;
      const leftVal = parseInt(m.left);
      const translateClass = leftVal > 60 ? '-translate-x-3/4' : '-translate-x-1/2';
      const topVal = parseInt(m.top);
      const isTopHalf = topVal < 50;
      
      const tooltipPositionClasses = isTopHalf 
        ? `top-[calc(100%+8px)] origin-top pt-2` 
        : `bottom-[calc(100%+8px)] origin-bottom pb-2`;
        
      const pointerClasses = isTopHalf
        ? `bottom-full left-1/2 -translate-x-1/2 border-6 border-transparent border-b-white`
        : `top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-white`;
      
      return (
        <div key={m.id} className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all z-20 hover:z-50 group ${isActive ? '!z-50' : ''}`} style={{ top: m.top, left: m.left }}>
          <div className="relative flex items-center justify-center cursor-pointer p-4" onClick={(e) => { e.preventDefault(); setActiveMarker(isActive ? null : m.id); }}>
            <span className="absolute w-6 h-6 md:w-10 md:h-10 bg-orange-500 rounded-full animate-ping opacity-75"></span>
            <span className="relative flex items-center justify-center w-3 h-3 md:w-5 md:h-5 bg-white border-[3px] border-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.9)]"></span>
          </div>
            
          <div className={`absolute ${tooltipPositionClasses} left-1/2 ${translateClass} transition-all duration-300 opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto ${isActive ? '!opacity-100 !scale-100 !pointer-events-auto' : ''}`}>
            <div className="w-[180px] md:w-48 bg-white rounded-2xl shadow-xl p-3 relative border border-gray-100">
              <div className="w-full h-16 md:h-20 bg-white rounded-xl mb-2 flex items-center justify-center overflow-hidden relative">
                <img src={m.img} alt={m.title} className="w-[90%] h-[90%] object-contain mix-blend-multiply drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]" />
              </div>
              <h4 className="font-bold text-gray-900 leading-tight text-[13px]">{m.title}</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 mb-2 leading-snug line-clamp-2">{m.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-black text-orange-600 text-sm">{m.price}</span>
                <Link href={m.link} className="text-[9px] font-bold text-white bg-black px-2 py-1 rounded uppercase tracking-wide hover:bg-orange-500 transition-colors">Ver</Link>
              </div>
              <div className={`absolute ${pointerClasses}`}></div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="py-12 mb-12 relative overflow-hidden bg-white rounded-[2.5rem] border border-gray-200 shadow-sm mt-8">
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-3 leading-none">Piezas por Segmento</h2>
        <p className="text-gray-500 font-medium">Toca o pasa el cursor sobre los puntos para explorar el inventario <strong className="text-orange-500">{brandName}</strong>.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 px-4 md:px-8">
        {/* PICKUP TRUCK */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-black text-gray-900 mb-4 bg-gray-100 px-6 py-1.5 rounded-full">Pick-ups & Ligeros</h3>
          <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-[2rem] shadow-sm border border-gray-200 group/container">
            <img src="https://images.unsplash.com/photo-1605816988069-b11383b50717?q=80&w=1200&auto=format&fit=crop" alt="Camioneta Pick-up" className="absolute inset-0 w-full h-full object-cover object-center group-hover/container:scale-105 transition-transform duration-700 opacity-90 rounded-[2rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>
            {renderMarkers(PICKUP_MARKERS)}
          </div>
        </div>

        {/* HEAVY DUTY TRUCK */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-black text-gray-900 mb-4 bg-gray-100 px-6 py-1.5 rounded-full">Camiones Pesados</h3>
          <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-[2rem] shadow-sm border border-gray-200 group/container">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop" alt="Camión Pesado" className="absolute inset-0 w-full h-full object-cover object-center group-hover/container:scale-105 transition-transform duration-700 opacity-90 rounded-[2rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none rounded-[2rem]"></div>
            {renderMarkers(TRUCK_MARKERS)}
          </div>
        </div>
      </div>
    </section>
  );
}
