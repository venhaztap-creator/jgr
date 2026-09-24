"use client";

import { useState, useEffect } from 'react';

const CAROUSEL_IMAGES = [
  '/assets/jgr/distribution_center.jpg',
  '/assets/jgr/truck-hires.jpg',
  '/assets/jgr/taller-mecanico.jpg'
];

const LOCATIONS = [
  {
    id: 'store-1',
    name: 'JGR AutoDist Caracas',
    address: 'Av. Milán, Los Ruices',
    city: 'Caracas, Distrito Capital',
    phone: '+58 212-555-0192',
    mapUrl: 'https://maps.app.goo.gl/b9uM8TCFnE7t4dGU9',
    features: ['Retiro en Tienda (Click & Collect)', 'Despacho Regional'],
  },
  {
    id: 'store-2',
    name: 'JGR AutoDist Valencia',
    address: 'Centro Empresarial DANCAN, Galpón 10, a 500 m del distribuidor Divenca',
    city: 'San Diego, Carabobo',
    phone: '+58 412-555-0100',
    mapUrl: 'https://maps.app.goo.gl/6F3QbXB2Mo8bGibs5',
    features: ['Ventas al Mayor', 'Despachos Nacionales'],
  }
];

export default function StoreLocations() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="sedes">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Cobertura Nacional
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">Sedes y Centros de Distribución</h2>
          <p className="text-lg text-gray-500 font-medium">Compra en línea y retira en minutos (Click & Collect) o recibe tus repuestos directo en tu taller a través de nuestra red de despacho regional.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Visual Element (Map/Warehouse Illustration as Carousel) */}
          <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl min-h-[400px]">
            {CAROUSEL_IMAGES.map((src, idx) => (
              <img 
                key={src}
                src={src} 
                alt={`Centro de Distribución ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 font-bold mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Logística Avanzada
              </div>
              <h3 className="text-white text-3xl font-black mb-3">Más de 5,000 m² de inventario</h3>
              <p className="text-gray-300 font-medium leading-relaxed max-w-md mb-6">Nuestro hub logístico principal garantiza un 98% de disponibilidad (fill rate) y tiempos de entrega récord en todo el territorio nacional.</p>
              
              {/* Carousel Indicators */}
              <div className="flex gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-8 bg-orange-500' : 'w-4 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a la imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Locations List */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {LOCATIONS.map((loc, idx) => (
              <a key={loc.id} href={loc.mapUrl} target="_blank" rel="noreferrer" className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden block">
                {/* Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 group-hover:bg-orange-500 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{loc.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-gray-500 flex items-start gap-2 text-sm">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{loc.address}<br/><span className="text-gray-900 font-medium">{loc.city}</span></span>
                  </p>
                  <p className="text-gray-500 flex items-center gap-2 text-sm">
                    <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>{loc.phone}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {loc.features.map(feature => (
                    <span key={feature} className="bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
