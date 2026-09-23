"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '@/data/products';

const ALL_PRODUCTS = MOCK_PRODUCTS.map(p => ({
  id: p.id,
  key: p.type, // We will use exact type match
  cat: p.type,
  name: p.title,
  brand: p.brand,
  price: p.pricing.retail,
  img: p.images[0],
  offer: p.pricing.b2bTiers && p.pricing.b2bTiers.length > 1,
  stock: true
}));

const SIDEBAR_CATS = [
  'Lubricantes y Fluidos',
  'Llantas y Neumáticos',
  'Sistema Eléctrico',
  'Amortiguador de Suspensión'
];

const SIDEBAR_BRANDS = [
  'Valvoline',
  'Michelin',
  'VoltMax',
  'Monroe'
];

const PRICE_MAP: Record<string, (p: number) => boolean> = {
  'Menos de $10': p => p < 10,
  '$10 - $30': p => p >= 10 && p <= 30,
  '$30 - $50': p => p > 30 && p <= 50,
  'Más de $50': p => p > 50
};

const PAGE_SIZE = 12;

export default function FilterSection() {
  const [activeCats, setActiveCats] = useState<string[]>([]);
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [activePrices, setActivePrices] = useState<string[]>([]);
  
  const [sortMode, setSortMode] = useState('Relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [shownMax, setShownMax] = useState(PAGE_SIZE);

  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Toggle filter arrays
  const toggleFilter = (set: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    set(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);
    setShownMax(PAGE_SIZE); // reset pagination
  };

  const clearAll = () => {
    setActiveCats([]);
    setActiveBrands([]);
    setActivePrices([]);
    setShownMax(PAGE_SIZE);
  };

  // Compute active filters
  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;
    if (activeCats.length > 0) {
      result = result.filter(p => activeCats.includes(p.key));
    }
    if (activeBrands.length > 0) {
      result = result.filter(p => activeBrands.includes(p.brand));
    }
    if (activePrices.length > 0) {
      result = result.filter(p => activePrices.some(priceKey => PRICE_MAP[priceKey] && PRICE_MAP[priceKey](p.price)));
    }
    
    // Sort
    if (sortMode === 'Precio: Menor a Mayor') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortMode === 'Precio: Mayor a Menor') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCats, activeBrands, activePrices, sortMode]);

  const displayedProducts = filteredProducts.slice(0, shownMax);
  const totalActiveFilters = activeCats.length + activeBrands.length + activePrices.length;

  const toggleGroup = (group: string) => {
    setCollapsedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
    }
    return () => document.body.classList.remove('is-locked');
  }, [isMobileDrawerOpen]);

  // Hash navigation (legacy support)
  useEffect(() => {
    const handleHashChange = () => {
      // Disabled since we use full page routing now
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeCats]);

  return (
    <section className="catalog" id="catalog" data-od-id="catalog">
      <div className="container container--wide">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Elige tu combo o arma tu pedido.</h2>
          <p className="catalog__sub mb-6">Más de 2,500 repuestos disponibles en inventario.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Combo 1: Aceite + Filtro */}
            <Link href="/product/combo-afinacion" className="group relative rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 h-56 flex flex-col justify-end p-6 border border-gray-200 hover:border-orange-500 transform hover:-translate-y-1">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=800&auto=format&fit=crop")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/10 group-hover:from-gray-900 group-hover:via-gray-900/90 transition-all" />
              
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/50">
                Ahorra 15%
              </div>
              
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">COMBO AFINACIÓN</p>
                  <h4 className="text-xl md:text-2xl font-black text-white leading-tight mb-1 group-hover:text-orange-400 transition-colors">Aceite Sintético 5W-30<br/>+ Filtro de Aire</h4>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through font-bold mb-0.5">$36.00</p>
                  <p className="text-3xl font-black text-white">$29.99</p>
                </div>
              </div>
            </Link>
            
            {/* Combo 2: Llantas + Amortiguadores */}
            <Link href="/product/combo-seguridad" className="group relative rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-56 flex flex-col justify-end p-6 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-1">
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/10 group-hover:from-gray-900 group-hover:via-gray-900/90 transition-all" />
              
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/50 animate-pulse">
                OFERTA
              </div>
              
              <div className="relative z-10 w-full flex justify-between items-end">
                <div>
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">COMBO SEGURIDAD</p>
                  <h4 className="text-xl md:text-2xl font-black text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors">2x Llantas All-Terrain<br/>+ Amortiguadores</h4>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through font-bold mb-0.5">$480.00</p>
                  <p className="text-3xl font-black text-white">$410.00</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="catalog__cols">
          <aside className={`filters ${isMobileDrawerOpen ? 'is-open' : ''}`} id="filterPanel" tabIndex={-1} aria-label="Filtros" data-od-id="filter-panel">
            <div className="filters__card">
              <span className="filters__handle" aria-hidden="true"></span>
              <div className="filters__hd">
                <h3>Filtros</h3>
                <button className="filters__clear" onClick={clearAll}>Limpiar</button>
              </div>

              {/* Categorías */}
              <div className={`fgroup ${collapsedGroups['cat'] ? 'is-collapsed' : ''}`}>
                <h4 className="fgroup__title" role="button" tabIndex={0} onClick={() => toggleGroup('cat')} aria-expanded={!collapsedGroups['cat']}>
                  Categoría <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
                </h4>
                <div className="fgroup__body">
                  <div className="fgroup__inner" id="catFilters">
                    {SIDEBAR_CATS.map(cat => (
                      <label key={cat} className={`fcheck ${activeCats.includes(cat) ? 'is-checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleFilter(setActiveCats, cat); }}>
                        <span className="fcheck__box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="fcheck__label">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>


              {/* Precio */}
              <div className={`fgroup ${collapsedGroups['price'] ? 'is-collapsed' : ''}`}>
                <h4 className="fgroup__title" role="button" tabIndex={0} onClick={() => toggleGroup('price')} aria-expanded={!collapsedGroups['price']}>
                  Precio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
                </h4>
                <div className="fgroup__body">
                  <div className="fgroup__inner" id="priceFilters">
                    {['Menos de $10', '$10 - $30', '$30 - $50', 'Más de $50'].map(price => (
                      <label key={price} className={`fcheck ${activePrices.includes(price) ? 'is-checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleFilter(setActivePrices, price); }}>
                        <span className="fcheck__box fcheck__box--round">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="fcheck__label">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="filters__foot">
                <button type="button" className="filters__apply" onClick={() => setIsMobileDrawerOpen(false)}>
                  Ver <span>{filteredProducts.length}</span> productos
                </button>
              </div>
            </div>
          </aside>

          <div className="results">
            <div className="results__bar">
              <button type="button" className="filters__trigger" onClick={() => setIsMobileDrawerOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>
                <span>Filtros</span>
                {totalActiveFilters > 0 && <span className="filters__count">{totalActiveFilters}</span>}
              </button>
              <span className="results__count"><span>{filteredProducts.length}</span> <span>productos encontrados</span></span>
              
              <div className="results__tools">
                <div className="results__sort">
                  <span className="hide-sm">Ordenar por</span>
                  <div className="sortwrap">
                    <select aria-label="Ordenar por" value={sortMode} onChange={e => setSortMode(e.target.value)}>
                      <option>Relevancia</option>
                      <option>Precio: Menor a Mayor</option>
                      <option>Precio: Mayor a Menor</option>
                    </select>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
                <div className="viewtoggle">
                  <button className={viewMode === 'grid' ? 'is-active' : ''} onClick={() => setViewMode('grid')} aria-label="Vista cuadrícula">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                  </button>
                  <button className={viewMode === 'list' ? 'is-active' : ''} onClick={() => setViewMode('list')} aria-label="Vista lista">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Chips */}
            {totalActiveFilters > 0 && (
              <div className="chips">
                {[...activeCats, ...activeBrands, ...activePrices].map(chip => (
                  <button key={chip} type="button" className="chip" onClick={() => {
                    if (activeCats.includes(chip)) toggleFilter(setActiveCats, chip);
                    else if (activeBrands.includes(chip)) toggleFilter(setActiveBrands, chip);
                    else if (activePrices.includes(chip)) toggleFilter(setActivePrices, chip);
                  }}>
                    {chip} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                ))}
              </div>
            )}

            <div className={`pgrid ${viewMode === 'list' ? 'is-list' : ''}`}>
              {displayedProducts.length > 0 ? (
                displayedProducts.map(p => (
                  <Link key={p.id} href={`/product/${p.id}`} className="pcard group cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="pcard__media">
                      <div className="pcard__badges">
                        {p.offer ? <span className="badge badge--dark">Oferta</span> : <span />}
                        {p.stock && <span className="badge badge--ok"><i></i>Stock</span>}
                      </div>
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="pcard__body">
                      <p className="pcard__cat">{p.cat}</p>
                      <h4 className="pcard__name group-hover:text-orange-600 transition-colors">{p.name}</h4>
                      <div className="pcard__foot">
                        <span className="pcard__brand">{p.brand}</span>
                        <span className="pcard__price num">${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="pempty">
                  <p>No encontramos repuestos con esos filtros.</p>
                  <button type="button" onClick={clearAll}>Limpiar filtros</button>
                </div>
              )}
            </div>

            {filteredProducts.length > shownMax && (
              <div className="loadmore">
                <button onClick={() => setShownMax(prev => prev + 6)}>Cargar más productos</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile backdrop */}
        <div className={`filters__backdrop ${isMobileDrawerOpen ? 'is-open' : ''}`} onClick={() => setIsMobileDrawerOpen(false)}></div>
      </div>
    </section>
  );
}
