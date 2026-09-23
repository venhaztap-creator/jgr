"use client";

import { use, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/data/products';
import { BRAND_DATA } from '@/data/brands';
import Link from 'next/link';

// Helper to get brand logos from known brands
const getBrandLogo = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('bosch')) return "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg";
  if (n.includes('denso')) return "https://upload.wikimedia.org/wikipedia/commons/a/a7/Denso_logo.svg";
  if (n.includes('acdelco')) return "https://upload.wikimedia.org/wikipedia/commons/5/58/ACDelco_logo.svg";
  if (n.includes('valeo')) return "https://upload.wikimedia.org/wikipedia/commons/2/2b/Valeo_Logo.svg";
  if (n.includes('skf')) return "https://upload.wikimedia.org/wikipedia/commons/b/b8/SKF_logo.svg";
  if (n.includes('michelin')) return "https://upload.wikimedia.org/wikipedia/commons/9/91/Michelin_logo.svg";
  if (n.includes('valvoline')) return "https://upload.wikimedia.org/wikipedia/commons/0/05/Valvoline_logo.svg";
  if (n.includes('gates')) return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gates_Corporation_logo.svg";
  if (n.includes('moog')) return "https://upload.wikimedia.org/wikipedia/commons/3/3d/Moog_Inc_logo.svg";
  if (n.includes('monroe')) return "https://upload.wikimedia.org/wikipedia/commons/4/47/Monroe_Shocks_%26_Struts_Logo.svg";
  return null;
};

import InteractiveVehicles from '@/components/brands/InteractiveVehicles';

export default function MarcaPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = use(params);
  const brandName = decodeURIComponent(resolvedParams.brand);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  const brandProducts = MOCK_PRODUCTS.filter(
    p => p.brand.toLowerCase() === brandName.toLowerCase() || p.brand.toLowerCase().includes(brandName.toLowerCase())
  );

  const brandKey = brandName.toLowerCase();
  const brandInfo = BRAND_DATA[brandKey] || {
    name: brandName,
    slogan: 'Calidad y Excelencia Automotriz',
    description: `Excelencia en ingeniería. Descubre la línea completa de repuestos y componentes ${brandName} para el máximo rendimiento de tu vehículo.`,
    heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop',
    categories: ['Repuestos', 'Mantenimiento', 'Filtros'],
    banners: [
      {
        tag: 'Nuevo Lanzamiento',
        title: 'Tecnología de punta',
        desc: 'Descubre la nueva línea de repuestos de alto rendimiento.',
        bg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
        color: 'orange'
      },
      {
        tag: 'Garantía Total',
        title: 'Maneja seguro, maneja tranquilo',
        desc: 'Todos los repuestos 100% certificados de fábrica.',
        bg: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop',
        color: 'blue'
      }
    ]
  };

  const brandLogoUrl = getBrandLogo(brandName);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION - Clean Premium Look */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-luminosity transform scale-105"
          style={{
            backgroundImage: `url("${brandInfo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/80 to-gray-900" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Brand Logo or Initials */}
            <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-8 border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden relative group p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {brandLogoUrl ? (
                <img src={brandLogoUrl} alt={brandInfo.name} className="w-full h-full object-contain relative z-10 drop-shadow-md" />
              ) : (
                <span className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600">
                  {brandInfo.name.substring(0, 2)}
                </span>
              )}
            </div>
            
            <p className="text-orange-400 font-bold uppercase tracking-[0.3em] mb-2 text-sm">{brandInfo.slogan}</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-xl">
              {brandInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              {brandInfo.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/80">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">{brandProducts.length > 0 ? `+${brandProducts.length}` : 'OEM'}</span>
                <span className="text-xs uppercase tracking-widest font-bold mt-1 opacity-70">Productos</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-xs uppercase tracking-widest font-bold mt-1 opacity-70">Original</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-white">1 Año</span>
                <span className="text-xs uppercase tracking-widest font-bold mt-1 opacity-70">Garantía</span>
              </div>
            </div>

            {/* Social Links if available */}
            {brandInfo.socialLinks && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Redes Oficiales</span>
                {brandInfo.socialLinks.instagram && (
                  <a href={brandInfo.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all border border-white/5 shadow-sm" title="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                )}
                {brandInfo.socialLinks.facebook && (
                  <a href={brandInfo.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all border border-white/5 shadow-sm" title="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                )}
                {brandInfo.socialLinks.tiktok && (
                  <a href={brandInfo.socialLinks.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all border border-white/5 shadow-sm" title="TikTok">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  </a>
                )}
                {brandInfo.socialLinks.youtube && (
                  <a href={brandInfo.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all border border-white/5 shadow-sm" title="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                )}
                {brandInfo.socialLinks.linkedin && (
                  <a href={brandInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all border border-white/5 shadow-sm" title="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        
        {/* INTERACTIVE VEHICLES SECTION */}
        <InteractiveVehicles brandName={brandInfo.name} />
        
        {/* BRAND BANNERS CAROUSEL */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-gray-900">Novedades y Ofertas {brandInfo.name}</h2>
            <div className="flex gap-2 hidden md:flex">
              <button onClick={() => scrollCarousel('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={() => scrollCarousel('right')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          
          <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            
            {brandInfo.banners.map((banner: any, idx: number) => (
              <div key={idx} className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] snap-center rounded-3xl overflow-hidden relative h-64 bg-gray-900 group cursor-pointer">
                 <img src={banner.bg} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" alt={banner.title} />
                 <div className={`absolute inset-0 bg-gradient-to-r from-${banner.color}-900 via-${banner.color}-900/60 to-transparent`}></div>
                 <div className="absolute inset-0 p-8 flex flex-col justify-center">
                   <span className={`bg-${banner.color}-500 text-white text-[10px] font-black px-3 py-1 rounded-full w-max mb-3 uppercase tracking-widest`}>{banner.tag}</span>
                   <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">{banner.title}</h3>
                   <p className="text-gray-300 font-medium text-sm md:text-base max-w-sm">{banner.desc}</p>
                 </div>
              </div>
            ))}

          </div>
        </div>

        {/* PRODUCTS & ADVANCED FILTERS */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
            Catálogo Oficial {brandName}
          </h2>
          <p className="text-gray-500 font-medium">Explora las piezas disponibles para entrega inmediata y filtra por tu necesidad.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Advanced Filtering Sidebar */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sticky top-24 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Filtros</h3>
                <button className="text-xs font-bold text-gray-500 hover:text-orange-500 underline">Limpiar</button>
              </div>

              {/* Categorías */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Categoría</h4>
                <div className="space-y-3">
                  {['Aceites y Fluidos', 'Filtros', 'Frenos', 'Suspensión', 'Bujías y Eléctrico'].map((cat, i) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border ${i === 0 ? 'bg-orange-500 border-orange-500' : 'border-gray-300 group-hover:border-orange-500'} flex items-center justify-center transition-colors`}>
                        {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <span className={`text-sm font-medium ${i === 0 ? 'text-gray-900 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rango de Precio */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Precio</h4>
                <div className="space-y-3">
                  {['Menos de $20', '$20 - $50', '$50 - $100', 'Más de $100'].map(price => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-orange-500 flex items-center justify-center transition-colors"></div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Disponibilidad */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Disponibilidad</h4>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-10 h-6 bg-orange-500 rounded-full relative p-1 transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 font-bold">En Stock (Inmediato)</span>
                </label>
              </div>

            </div>
          </aside>

          {/* Products Grid */}
          <div className="w-full lg:w-3/4">
            
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-gray-200">
              <span className="text-sm font-bold text-gray-500 mb-4 sm:mb-0">Mostrando <span className="text-gray-900">{brandProducts.length}</span> resultados</span>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-500 hidden sm:block">Ordenar por:</span>
                <select className="bg-gray-50 border border-gray-200 text-gray-900 text-sm font-bold rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-2.5 outline-none cursor-pointer">
                  <option>Relevancia</option>
                  <option>Menor Precio</option>
                  <option>Mayor Precio</option>
                  <option>Mejor Valorados</option>
                </select>
              </div>
            </div>

            {brandProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {brandProducts.map(p => (
                  <Link key={p.id} href={`/product/${p.id}`} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                    <div className="aspect-[4/3] bg-gray-50 p-6 relative flex items-center justify-center overflow-hidden">
                      {p.pricing.b2bTiers && p.pricing.b2bTiers.length > 1 && (
                        <span className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider z-10 shadow-lg shadow-black/20">
                          Precios B2B
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 relative z-0" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 border-t border-gray-100">
                      <p className="text-[10px] font-black text-orange-500 mb-1.5 uppercase tracking-widest">{p.type}</p>
                      <h3 className="text-sm font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2 leading-relaxed">
                        {p.title}
                      </h3>
                      <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-50">
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Precio Retail</p>
                          <p className="text-xl font-black text-gray-900">${p.pricing.retail.toFixed(2)}</p>
                        </div>
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-12 text-center flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
                
                {/* Animated Empty Box Icon */}
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-50"></div>
                  <div className="relative w-full h-full bg-white border-4 border-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-3">Inventario en actualización</h3>
                <p className="text-gray-500 max-w-lg mx-auto mb-8 font-medium leading-relaxed">
                  Actualmente no tenemos productos de la marca <span className="font-bold text-gray-900">{brandName}</span> con estos filtros, pero ¡podrían estar en camino a nuestros almacenes!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/catalog" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-gray-900 hover:bg-black hover:shadow-xl hover:shadow-black/20 transition-all">
                    Ver catálogo general
                  </Link>
                  <Link href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-sm font-bold rounded-xl text-gray-700 bg-white hover:border-orange-500 hover:text-orange-600 transition-all">
                    Consultar disponibilidad
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

