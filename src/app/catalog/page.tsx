"use client";

import { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/data/products';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Helper component for Accordions
function Accordion({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between font-bold text-gray-900 group"
      >
        <span>{title}</span>
        <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-orange-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="mt-4 animate-in slide-in-from-top-2 fade-in duration-200">{children}</div>}
    </div>
  );
}

function CatalogContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams?.get('category');
  const [activeCategory, setActiveCategory] = useState(catParam || 'todos');
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activePrices, setActivePrices] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState('Relevancia');

  useEffect(() => {
    if (catParam) setActiveCategory(catParam);
  }, [catParam]);

  const toggleArrayFilter = (set: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    set(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);
  };

  const PRICE_MAP: Record<string, (p: number) => boolean> = {
    'Menos de $10': p => p < 10,
    '$10 - $30': p => p >= 10 && p <= 30,
    '$30 - $50': p => p > 30 && p <= 50,
    'Más de $50': p => p > 50
  };

  let filteredProducts = activeCategory === 'todos' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.type === activeCategory);
  
  if (activeBrands.length > 0) {
    filteredProducts = filteredProducts.filter(p => activeBrands.includes(p.brand));
  }
  
  if (activePrices.length > 0) {
    filteredProducts = filteredProducts.filter(p => activePrices.some(priceKey => PRICE_MAP[priceKey] && PRICE_MAP[priceKey](p.pricing.retail)));
  }

  if (sortMode === 'Precio: Menor a Mayor') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.pricing.retail - b.pricing.retail);
  } else if (sortMode === 'Precio: Mayor a Menor') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.pricing.retail - a.pricing.retail);
  }

  const allBrands = Array.from(new Set(MOCK_PRODUCTS.map(p => p.brand)));

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-40 pb-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h1 className="text-3xl font-black text-gray-900">Catálogo Avanzado de Repuestos</h1>
          <p className="text-gray-500 mt-2">Filtra por especificaciones técnicas, compatibilidad vehicular y disponibilidad logística.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* MASSIVE SIDEBAR FILTER */}
        <aside className="w-full lg:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 lg:sticky top-40 lg:max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar mb-4 lg:mb-0">
          
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <h2 className="font-black text-lg flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filtros
            </h2>
            <button className="text-xs font-bold text-orange-500 hover:text-orange-600" onClick={() => { setActiveCategory('todos'); setActiveBrands([]); setActivePrices([]); }}>Limpiar</button>
          </div>

          <Accordion title="Categorías" defaultOpen={true}>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input 
                  type="radio" 
                  name="category" 
                  className="accent-orange-500" 
                  checked={activeCategory === 'todos'} 
                  onChange={() => setActiveCategory('todos')} 
                /> 
                <span className={activeCategory === 'todos' ? 'font-bold text-orange-600' : ''}>Todos los productos</span>
              </label>
              {Array.from(new Set(MOCK_PRODUCTS.map(p => p.type))).map(type => (
                <label key={type} className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                  <input 
                    type="radio" 
                    name="category" 
                    className="accent-orange-500" 
                    checked={activeCategory === type} 
                    onChange={() => setActiveCategory(type)} 
                  /> 
                  <span className={activeCategory === type ? 'font-bold text-orange-600' : ''}>{type}</span>
                </label>
              ))}
            </div>
          </Accordion>

          <Accordion title="Marcas">
            <div className="space-y-2 text-sm">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                  <input 
                    type="checkbox" 
                    className="accent-orange-500 rounded" 
                    checked={activeBrands.includes(brand)} 
                    onChange={() => toggleArrayFilter(setActiveBrands, brand)} 
                  /> 
                  <span className={activeBrands.includes(brand) ? 'font-bold text-orange-600' : ''}>{brand}</span>
                </label>
              ))}
            </div>
          </Accordion>

          <Accordion title="Precio">
            <div className="space-y-2 text-sm">
              {Object.keys(PRICE_MAP).map(price => (
                <label key={price} className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                  <input 
                    type="checkbox" 
                    className="accent-orange-500 rounded" 
                    checked={activePrices.includes(price)} 
                    onChange={() => toggleArrayFilter(setActivePrices, price)} 
                  /> 
                  <span className={activePrices.includes(price) ? 'font-bold text-orange-600' : ''}>{price}</span>
                </label>
              ))}
            </div>
          </Accordion>

          <Accordion title="Compatibilidad Vehicular">
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">Marca del Vehículo</label>
                <select className="w-full border border-gray-200 rounded p-2 outline-none focus:border-orange-500">
                  <option>Todas las marcas</option>
                  <option>Toyota</option>
                  <option>Chevrolet</option>
                  <option>Ford</option>
                  <option>Nissan</option>
                  <option>Mitsubishi</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">Modelo</label>
                <select className="w-full border border-gray-200 rounded p-2 outline-none focus:border-orange-500">
                  <option>Todos los modelos</option>
                  <option>Hilux</option>
                  <option>L200</option>
                  <option>F-150</option>
                  <option>Spark</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 mb-1 block">Año</label>
                <select className="w-full border border-gray-200 rounded p-2 outline-none focus:border-orange-500">
                  <option>Cualquier año</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </Accordion>

          <Accordion title="Especificaciones Técnicas">
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" /> 
                <span>OEM (Original)</span>
              </label>
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" /> 
                <span>Aftermarket Premium</span>
              </label>
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" /> 
                <span>Viscosidad 5W-30</span>
              </label>
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" /> 
                <span>Viscosidad 10W-40</span>
              </label>
            </div>
          </Accordion>

          <Accordion title="Disponibilidad Logística">
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" defaultChecked /> 
                <span>En stock inmediato</span>
              </label>
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" defaultChecked /> 
                <span>Envío en 24h</span>
              </label>
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded">
                <input type="checkbox" className="accent-orange-500 rounded" /> 
                <span>Retiro en tienda</span>
              </label>
            </div>
          </Accordion>
        </aside>

        {/* MOCK PRODUCT GRID RESULTS */}
        <section className="flex-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <span className="text-gray-500 font-medium">Mostrando <b>{filteredProducts.length} repuestos</b>{activeCategory !== 'todos' && <span> para <span className="bg-gray-100 px-2 py-1 rounded text-gray-800">{activeCategory}</span></span>}</span>
            <select className="border border-gray-200 rounded-lg p-2 outline-none text-sm focus:border-orange-500" value={sortMode} onChange={e => setSortMode(e.target.value)}>
              <option>Relevancia</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Mejor Valorados (OEM)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {/* Mock Product Cards */}
            {filteredProducts.map(p => (
              <Link key={p.id} href={`/product/${p.id}`} className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl transition-all group flex flex-col">
                <div className="aspect-square bg-gray-50 rounded-xl mb-4 p-4 relative flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase">En Stock</span>
                  <img src={p.images[0]} alt={p.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xs text-gray-400 font-mono mb-1">MPN: {p.mpn}</div>
                <h3 className="font-bold text-gray-900 leading-tight mb-2 line-clamp-2">{p.title}</h3>
                <div className="flex items-center gap-1 mb-4">
                  <span className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">{p.brand}</span>
                  <span className="border border-gray-200 text-gray-500 text-[10px] px-2 py-0.5 rounded uppercase">OEM</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="text-2xl font-black text-gray-900">${p.pricing.retail.toFixed(2)}</div>
                  <button className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
      
      <Footer />
    </main>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Cargando catologo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
