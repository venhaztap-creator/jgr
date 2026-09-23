"use client";

import { use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/data/products';
import Link from 'next/link';

export default function MarcaPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = use(params);
  // Decode the URL param (e.g. from /marcas/Valvoline to "Valvoline")
  const brandName = decodeURIComponent(resolvedParams.brand);
  
  // Filter products by brand (case insensitive)
  const brandProducts = MOCK_PRODUCTS.filter(
    p => p.brand.toLowerCase() === brandName.toLowerCase() || p.brand.toLowerCase().includes(brandName.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Banner for Brand */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-900 overflow-hidden">
        {/* Abstract background for banner */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 border-4 border-gray-800">
              <span className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                {brandName.substring(0, 2)}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-wider">
              {brandName}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              Calidad original, rendimiento inigualable. Descubre nuestro catálogo completo de repuestos {brandName} para el mantenimiento y mejora de tu vehículo.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        
        {/* Brand Information / Marketing Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad OEM Certificada</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Todos los productos de {brandName} cumplen o superan las especificaciones del equipo original, garantizando un ajuste perfecto y larga vida útil.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garantía Extendida</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Disfruta de la tranquilidad de contar con garantía extendida en componentes clave, respaldada directamente por el fabricante de la pieza.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Máximo Rendimiento</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Diseñados con las últimas tecnologías en materiales e ingeniería automotriz para ofrecer un desempeño superior bajo cualquier condición.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Catálogo Oficial {brandName}
            </h2>
            <span className="bg-gray-100 text-gray-600 font-bold px-4 py-1 rounded-full text-sm">
              {brandProducts.length} productos
            </span>
          </div>

          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brandProducts.map(p => (
                <Link key={p.id} href={`/product/${p.id}`} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                  <div className="aspect-[4/3] bg-white p-6 relative flex items-center justify-center">
                    {p.pricing.b2bTiers && p.pricing.b2bTiers.length > 1 && (
                      <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider z-10">
                        B2B Disp.
                      </span>
                    )}
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">{p.type}</p>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">Precio Retail</p>
                        <p className="text-lg font-black text-gray-900">${p.pricing.retail.toFixed(2)}</p>
                      </div>
                      <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No hay productos disponibles</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Actualmente no tenemos productos de la marca {brandName} en nuestro catálogo en línea. Vuelve pronto para ver nuestras novedades.
              </p>
              <Link href="/catalog" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-colors">
                Ver todo el catálogo
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
