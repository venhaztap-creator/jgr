"use client";

import { use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/data/products';
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
  return null;
};

export default function MarcaPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = use(params);
  const brandName = decodeURIComponent(resolvedParams.brand);
  
  const brandProducts = MOCK_PRODUCTS.filter(
    p => p.brand.toLowerCase() === brandName.toLowerCase() || p.brand.toLowerCase().includes(brandName.toLowerCase())
  );

  const brandLogoUrl = getBrandLogo(brandName);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION - Premium Look */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-900 overflow-hidden">
        {/* Animated Background Mesh & Image */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/80 to-gray-900" />
        
        {/* Decorative Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Brand Logo or Initials */}
            <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-8 border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {brandLogoUrl ? (
                <img src={brandLogoUrl} alt={brandName} className="w-3/4 h-3/4 object-contain relative z-10" />
              ) : (
                <span className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600">
                  {brandName.substring(0, 2)}
                </span>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-xl">
              {brandName}
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              Excelencia en ingeniería. Descubre la línea completa de <strong className="text-white">repuestos y componentes {brandName}</strong> para el máximo rendimiento de tu vehículo.
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
          </div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50 fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.3V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12 relative z-20 -mt-10">
        
        {/* PROMISE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Calidad OEM Certificada</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Repuestos diseñados bajo las estrictas especificaciones del equipo original. Ajuste perfecto, durabilidad superior y cero dolores de cabeza.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Garantía Extendida</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Tu inversión está protegida. Disfruta de políticas de garantía sólidas respaldadas directamente por la fábrica de {brandName}.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Máximo Rendimiento</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Sometidos a rigurosas pruebas de estrés. Garantizan un desempeño óptimo incluso bajo las condiciones de manejo más extremas.
            </p>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
                Catálogo Oficial {brandName}
              </h2>
              <p className="text-gray-500 font-medium">Explora las piezas disponibles para entrega inmediata.</p>
            </div>
            <div className="bg-gray-100 text-gray-800 font-black px-5 py-2 rounded-xl text-sm border border-gray-200 self-start md:self-auto">
              {brandProducts.length} productos
            </div>
          </div>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                Actualmente no tenemos productos de la marca <span className="font-bold text-gray-900">{brandName}</span> publicados en nuestro catálogo en línea, pero ¡podrían estar en camino a nuestros almacenes!
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

      <Footer />
    </main>
  );
}

