"use client";
import Link from 'next/link';

import { useState } from 'react';

const MARKERS = [
  {
    id: 1,
    title: "Aceite de Motor",
    desc: "Sintético 5W-30 Alto Rendimiento",
    price: "$12.50",
    top: "30%", 
    left: "58%", 
    img: "/assets/jgr/prod-oil-ai.jpg"
  },
  {
    id: 2,
    title: "Amortiguadores",
    desc: "Kit Suspensión Off-Road 4x4",
    price: "$89.90",
    top: "56%", 
    left: "36%", 
    img: "/assets/jgr/prod-shocks.jpg"
  },
  {
    id: 3,
    title: "Llantas All-Terrain",
    desc: "Agarre extremo para todo terreno",
    price: "$215.00",
    top: "78%", 
    left: "42%", 
    img: "/assets/jgr/prod-tires-ai.jpg"
  }
];

export default function InteractiveVehicle() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="interactive-vehicle">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-[clamp(32px,5vw,56px)] font-black tracking-[-0.04em] text-black mb-4 leading-none">Equipa tu Camioneta</h2>
          <p className="text-gray-500 font-medium">Toca o pasa el cursor sobre los puntos para descubrir los mejores repuestos para tu 4x4.</p>
        </div>

        {/* Removed overflow-hidden from here so tooltips can break out on mobile */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9]">
          {/* Background Truck Image - Rounded corners directly on the image */}
          <img 
            src="/assets/jgr/truck-l200.webp" 
            alt="Camioneta Off-road HD" 
            className="absolute inset-0 w-full h-full object-cover object-center rounded-[2rem] md:rounded-[3rem] shadow-2xl"
          />

          {/* Markers */}
          {MARKERS.map((m) => {
            const isActive = activeMarker === m.id;
            const leftVal = parseInt(m.left);
            const translateClass = leftVal > 60 ? '-translate-x-3/4' : '-translate-x-1/2';
            
            return (
              <div 
                key={m.id} 
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${isActive ? 'z-50' : 'z-20'}`}
                style={{ top: m.top, left: m.left }}
                onMouseEnter={() => setActiveMarker(m.id)}
                onMouseLeave={() => setActiveMarker(null)}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMarker(isActive ? null : m.id);
                }}
              >
                {/* Pulsing Dot */}
                <div className="relative flex items-center justify-center cursor-pointer group p-4">
                  <span className="absolute w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full animate-ping opacity-75"></span>
                  <span className="relative flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-white border-[3px] border-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.9)]"></span>
                  
                  {/* Tooltip Card - Responsive positioning */}
                  {/* On mobile, if the marker is very high up, it might be better to position it below, but allowing overflow handles most of it. */}
                  <div 
                    className={`absolute bottom-full left-1/2 ${translateClass} mb-2 w-[220px] md:w-64 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-300 origin-bottom pointer-events-none ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                  >
                    {/* Product Image */}
                    <div className="w-full h-24 md:h-32 bg-white rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                      <img src={m.img} alt={m.title} className="w-[85%] h-[85%] object-contain mix-blend-multiply drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
                    </div>
                    <h4 className="font-bold text-gray-900 leading-tight text-sm md:text-base">{m.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-3">{m.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-black text-orange-600 text-sm md:text-base">{m.price}</span>
                      <Link href="/product/monroe-72367st" className="text-xs font-bold text-white bg-black px-3 py-1.5 rounded-md uppercase tracking-wide hover:bg-orange-500 transition-colors">Ver más</Link>
                    </div>
                    
                    {/* Triangle Pointer */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
